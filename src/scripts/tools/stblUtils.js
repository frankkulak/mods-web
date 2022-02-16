export const EnglishData = {
    name: 'English',
    nativeName: 'English',
    emoji: '🇺🇸',
    stblCode: '00'
}

export const Languages = [
    {
        name: 'Chinese, Simplified',
        nativeName: '简体中文',
        emoji: '🇨🇳',
        stblCode: '01'
    },
    {
        name: 'Chinese, Traditional',
        nativeName: '繁體中文',
        emoji: '🇨🇳',
        stblCode: '02'
    },
    {
        name: `Czech`,
        nativeName: `Čeština`,
        emoji: '🇨🇿',
        stblCode: '03'
    },
    {
        name: 'Danish',
        nativeName: 'Dansk',
        emoji: '🇩🇰',
        stblCode: '04'
    },
    {
        name: 'Dutch',
        nativeName: 'Nederlands',
        emoji: '🇳🇱',
        stblCode: '05'
    },
    EnglishData,
    {
        name: 'Finnish',
        nativeName: 'Suomi',
        emoji: '🇫🇮',
        stblCode: '06'
    },
    {
        name: `French`,
        nativeName: `Français`,
        emoji: '🇫🇷',
        stblCode: '07'
    },
    {
        name: `German`,
        nativeName: `Deutsch`,
        emoji: '🇩🇪',
        stblCode: '08'
    },
    {
        name: `Italian`,
        nativeName: `Italiano`,
        emoji: '🇮🇹',
        stblCode: '0B'
    },
    {
        name: `Japanese`,
        nativeName: `日本語`,
        emoji: '🇯🇵',
        stblCode: '0C'
    },
    {
        name: `Korean`,
        nativeName: `한국어`,
        emoji: '🇰🇷',
        stblCode: '0D'
    },
    {
        name: `Norwegian`,
        nativeName: `Norsk`,
        emoji: '🇳🇴',
        stblCode: '0E'
    },
    {
        name: `Polish`,
        nativeName: `Polski`,
        emoji: '🇵🇱',
        stblCode: '0F'
    },
    {
        name: `Portuguese`,
        nativeName: `Português`,
        emoji: '🇧🇷',
        stblCode: '11'
    },
    {
        name: `Russian`,
        nativeName: `Русский`,
        emoji: '🇷🇺',
        stblCode: '12'
    },
    {
        name: `Spanish`,
        nativeName: `Español`,
        emoji: '🇪🇸',
        stblCode: '13'
    },
    {
        name: 'Swedish',
        nativeName: 'Svenska',
        emoji: '🇸🇪',
        stblCode: '15'
    }
];


export function getTGI(stblName) {
    const {t, g, i} = /(?<t>[a-fA-F\d]{8})[_!]?(?<g>[a-fA-F\d]{8})[_!]?(?<i>[a-fA-F\d]{16})/.exec(stblName).groups;
    return {t, g, i};
}


export function getLocale(instanceId) {
    const localeCode = instanceId.substr(0, 2);
    return Languages.find(language => language.stblCode === localeCode);
}
