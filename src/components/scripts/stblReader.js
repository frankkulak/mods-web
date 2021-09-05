class BinaryDecoder {
    constructor(buff) {
        this.buff = buff;
        this.offset = 0;
    }

    skip(num) {
        this.offset += num;
    }

    seek(offset) {
        const offsetAsNumber = Number(offset);
        if (offsetAsNumber != offset) throw "This package exceeds size limitations.";
        this.offset = offsetAsNumber;
    }

    chars(num) {
        const result = this.buff.toString('utf-8', this.offset, this.offset + num);
        this.offset += num;
        return result;
    }

    charsBase64(num) {
        const result = this.buff.toString('base64', this.offset, this.offset + num);
        this.offset += num;
        return result;
    }

    uint8() {
        const result = this.buff.readUInt8(this.offset)
        this.offset += 1;
        return result;
    }

    uint16() {
        const result = this.buff.readUInt16LE(this.offset)
        this.offset += 2;
        return result;
    }

    uint32() {
        const result = this.buff.readUInt32LE(this.offset)
        this.offset += 4;
        return result;
    }

    uint64() {
        // for some reason this.buff.readBigUInt64LE(this.offset) does not work in this environment
        return this.uint32() + this.uint32();
    }
}

function readSTBL(decoder) {
    // validation
    if (decoder.chars(4) !== "STBL") throw "Not a string table.";
    if (decoder.uint16() !== 5) throw "Not a string table.";

    const result = {};

    // header
    decoder.skip(1); // compression
    result.numEntries = decoder.uint64();
    decoder.skip(2); // reserved
    result.totalStringLength = decoder.uint32();
    result.stringEntries = [];

    // body
    for (let i = 0; i < result.numEntries; i++) {
        const stringEntry = {};
        stringEntry.key = decoder.uint32();
        decoder.skip(1);
        stringEntry.length = decoder.uint16();
        stringEntry.string = decoder.chars(stringEntry.length);
        result.stringEntries.push(stringEntry);
    }

    return result;
}


export async function getStblContents(file) {
    if (!file) return null;

    try {
        const arrayBuffer = await file.arrayBuffer();
        return readSTBL(new BinaryDecoder(Buffer.from(arrayBuffer)));
    } catch (error) {
        return `${error}`;
    }
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
    {
        name: 'English',
        nativeName: 'English',
        emoji: '🇬🇧',
        stblCode: '00'
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
        stblCode: '03'
    },
    {
        name: `Portuguese`,
        nativeName: `Português`,
        emoji: '🇧🇷',
        stblCode: '0F'
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


export function fnv32a(str)
{
    // from https://gist.github.com/vaiorabbit/5657561
    let hval = 0x811c9dc5;
    for (let i = 0; i < str.length; ++i) {
        hval ^= str.charCodeAt(i);
        hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return hval >>> 0;
}
