export const EnglishData = {
    name: 'English',
    nativeName: 'English',
    emoji: '🇬🇧',
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


// function fnv(data, seed, prime, size) {
//     let hval = seed;
//     for (let i = 0; i < data.length; i++) {
//         hval = (hval * prime) % size;
//         hval ^= data.charCodeAt(i);
//     }
//     return hval;
// }
//
// export function fnv32a(str) {
//     return fnv(str, 0x811c9dc5, 0x01000193, 2 ** 32);
// }
//
//
// export function fnv64a(str) {
//     return fnv(str, 0xcbf29ce484222325, 0x100000001b3, 2 ** 64);
// }
