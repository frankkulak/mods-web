import DocumentUtils from "src/lib/document-utils.js";
import StorageService from "src/lib/storage.js";

//#region Abstract Types

type OnChangeCallback<T> = (value: T) => void;

abstract class StoredSetting<T> {
  constructor(
    public readonly name: string,
    public readonly defaultValue: T,
    private _onChangeCallbacks: OnChangeCallback<T>[] = []
  ) { }

  //#region Public Methods

  get(setting: string): T {
    const stringValue = StorageService.getItem("s:" + setting);
    return stringValue ? this._parseValue(stringValue) : this.defaultValue;
  }

  set(setting: string, value: T): void {
    StorageService.setItem("s:" + setting, this._stringifyValue(value));
    this._onChange(value);
  }

  addCallback(cb: OnChangeCallback<T>) {
    this._onChangeCallbacks.push(cb);
  }

  //#endregion Public Methods

  //#region Protected Methods

  protected abstract _parseValue(value: string): T;

  protected abstract _stringifyValue(value: T): string;

  //#endregion Protected Methods

  //#region Private Methods

  private _onChange(value: T) {
    this._onChangeCallbacks.forEach(cb => cb(value));
  }

  //#endregion Private Methods
}

//#endregion Abstract Types

//#region Classes

class StoredBoolean extends StoredSetting<boolean> {
  constructor(
    name: string,
    defaultValue = false,
    callbacks?: OnChangeCallback<boolean>[]
  ) {
    super(name, defaultValue, callbacks);
  }

  protected _parseValue(value: string): boolean {
    return value === "true";
  }

  protected _stringifyValue(value: boolean): string {
    return value ? "true" : "false";
  }
}

class StoredInteger extends StoredSetting<number> {
  constructor(
    name: string,
    defaultValue = 0,
    callbacks?: OnChangeCallback<number>[]
  ) {
    super(name, defaultValue, callbacks);
  }

  protected _parseValue(value: string): number {
    const number = parseInt(value);
    return Number.isNaN(number) ? this.defaultValue : number;
  }

  protected _stringifyValue(value: number): string {
    return value.toString();
  }
}

class StoredString<T extends string = string> extends StoredSetting<T> {
  constructor(
    name: string,
    defaultValue?: T,
    callbacks?: OnChangeCallback<string>[]
  ) {
    super(name, defaultValue, callbacks);
  }

  protected _parseValue(value: string): T {
    return value as T;
  }

  protected _stringifyValue(value: T): string {
    return value;
  }
}

class StoredJson<T extends object> extends StoredSetting<T> {
  constructor(
    name: string,
    defaultValue?: T,
    callbacks?: OnChangeCallback<T>[]
  ) {
    super(name, defaultValue, callbacks);
  }

  protected _parseValue(value: string): T {
    return JSON.parse(value);
  }

  protected _stringifyValue(value: T): string {
    return JSON.stringify(value);
  }
}

//#endregion Classes

//#region Settings

type SettingName = keyof UserSettings;

type StoredUserSettings = {
  [T in keyof UserSettings]: StoredSetting<UserSettings[T]>;
};

type StoredUserSettingsBuilder = {
  [T in keyof UserSettings]: {
    cls: new (name: string, defaultValue: UserSettings[T])
      => StoredSetting<UserSettings[T]>,
    defaultValue?: UserSettings[T],
    callbacks?: OnChangeCallback<UserSettings[T]>[]
  };
};

function getSettingsProxy(settingsBuilder: StoredUserSettingsBuilder): UserSettings {
  const settings: Partial<StoredUserSettings> = {};
  for (const settingName in settingsBuilder) {
    const builder = settingsBuilder[settingName];
    settings[settingName] = new builder.cls(
      settingName,
      builder.defaultValue,
      builder.callbacks
    );
  }

  return new Proxy(settings as StoredUserSettings, {
    get(target, prop) {
      return target[prop].get(prop);
    },
    set(target, prop, value) {
      target[prop].set(prop, value);
      SettingsSubscriptionManager.notifySubscribers(prop as SettingName, value);
      return true;
    }
  }) as unknown as UserSettings;
}

const Settings = getSettingsProxy({
  isLightTheme: {
    cls: StoredBoolean,
    callbacks: [
      (value) => DocumentUtils.toggleLightTheme(value, true)
    ]
  },
  lastViewedAlert: {
    cls: StoredInteger
  },
  lastVotePromptYear: {
    cls: StoredInteger
  }
});

export default Settings;

//#endregion Settings

//#region Subscriptions

interface SettingsSubscription {
  setting: SettingName;
  fn: (value: any) => void;
}

type SettingsUnsubscriber = () => void;

class _SettingsSubscriptionManager {
  private _nextId = 0;
  private readonly _subscriptions = new Map<number, SettingsSubscription>();

  subscribe(
    setting: SettingName,
    fn: (value: any) => void
  ): SettingsUnsubscriber {
    const id = this._nextId++;
    this._subscriptions.set(id, { setting, fn });
    return () => this._subscriptions.delete(id);
  }

  notifySubscribers(setting: SettingName, value: any) {
    this._subscriptions.forEach(subscription => {
      if (subscription.setting === setting) subscription.fn(value);
    });
  }
}

export const SettingsSubscriptionManager = new _SettingsSubscriptionManager();

//#endregion Subscriptions
