export const DataEnums = {
    developmentStage: {
        wip: 0,
        active: 1,
        retired: 2,
        tool: 3,
    },
    testingStatus: {
        unreleased: 0,
        beta: 1,
        working: 2,
        untested: 3,
        broken: 4,
        experimental: 5
    },
};

export const Languages = {
    chs_cn: {
        id: 'chinese-s',
        display: '简体中文',
        emoji: '🇨🇳'
    },
    cht_cn: {
        id: 'chinese-t',
        display: '繁體中文',
        emoji: '🇨🇳'
    },
    en_us: {
        id: 'english',
        display: 'English',
        emoji: '🇺🇸'
    },
    dut_nl: {
        id: 'dutch',
        display: 'Nederlands',
        emoji: '🇳🇱'
    },
    jpn_jp: {
        id: `japanese`,
        display: `日本語`,
        emoji: '🇯🇵'
    },
    kor_kr: {
        id: `korean`,
        display: `한국어`,
        emoji: '🇰🇷'
    },
    fre_fr: {
        id: `french`,
        display: `Français`,
        emoji: '🇫🇷'
    },
    spa_es: {
        id: `spanish`,
        display: `Español`,
        emoji: '🇪🇸'
    },
    por_br: {
        id: `portuguese`,
        display: `Português do Brasil`,
        emoji: '🇧🇷'
    },
    pol_pl: {
        id: `polish`,
        display: `Polski`,
        emoji: '🇵🇱'
    },
    ita_it: {
        id: `italian`,
        display: `Italiano`,
        emoji: '🇮🇹'
    },
    ger_de: {
        id: `german`,
        display: `Deutsch`,
        emoji: '🇩🇪'
    },
    rus_ru: {
        id: `russian`,
        display: `Русский`,
        emoji: '🇷🇺'
    },
    cze_cz: {
        id: `czech`,
        display: `Čeština`,
        emoji: '🇨🇿'
    },
    nor_no: {
        id: `norwegian`,
        display: `Norsk`,
        emoji: '🇳🇴'
    },
};

export const GameData = {
    ts4: {
        name: "The Sims 4",
        lastUpdate: "June 26, 2022"
    }
};

export const ModCategoryData = {
    ts4: {
        major: [
            'languagebarriers'
        ],
        minor: [
            'buybitsandpieces',
            'followersforfame',
            'onlinehomework',
            'utterchaos',
        ],
        utility: [
            'packtests'
        ],
        wips: [
            'simway'
        ],
        retired: [
            'nameablecowplants'
        ]
    }
};

export const ModData = {
    ts4: {
        nameablecowplants: {
            game: 'ts4',
            id: 'nameablecowplants',
            name: 'Nameable Cowplants',
            developmentStage: DataEnums.developmentStage.retired,
            testingStatus: DataEnums.testingStatus.broken,
            beingUpdated: false,
            trelloBoard: null,
            updateInfo: null,
            releaseDate: 'June 13, 2020',
            description: `This mod gives you the ability to name cowplants, but is now obsolete as this ability was added to the base game. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>.`,
            thumbnail: 'jfcp-1.png',
            images: [
                'jfcp-1.png',
                'jfcp-2.png',
            ],
            videoUrl: 'https://youtu.be/tnvhvNxIETk',
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `The ability to name cowplants.`,
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `As of the Nifty Knitting patch (July 23, 2020), cowplants are nameable in the base game, so this mod is now obsolete.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'naming a cowplant',
                    bullets: [
                        'Click on a cowplant to give it a name - it works the same way you would name a bike.',
                        'The name of the cowplant will show up on each interaction with it, as well as in the tooltip.',
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.0 beta 3',
                    date: 'July 16, 2020',
                    bullets: [
                        'Change the name of this mod from "#JusticeForCowplants" to "Nameable Cowplants" to avoid confusion with another WIP mod by the same name.'
                    ]
                },
                {
                    version: '1.0 beta 2',
                    date: 'July 8, 2020',
                    bullets: [
                        `Added the cowplant's name to each interaction with it.`,
                        `Added the cowplant's name to its tooltip.`
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'June 13, 2020',
                    bullets: [
                        'Added the ability to name cowplants.'
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/1895244/`
            },
            alternativeDownloads: [],
            patreonRelease: null,
            documentationDownload: null,
            warning: `This mod is obsolete, and I therefore no longer support it - you should not put it in your game. The only reason the download is still available is for you to reference the code, if you would like.`,
            hasStrings: true,
            translations: [
                {
                    language: Languages.en_us,
                    translator: `Frankk`,
                    updated: true,
                },
            ]
        },
        followersforfame: {
            game: 'ts4',
            id: 'followersforfame',
            name: 'Followers for Fame',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            trelloBoard: null,
            updateInfo: null,
            releaseDate: 'July 15, 2020',
            description: `Can you really call yourself a 'Global Superstar' when you only have 12 followers on Simstagram? This mod automatically gives your sim followers whenever they gain fame.`,
            thumbnail: 'ff-thumbnail.png',
            images: [
                'ff-thumbnail.png',
                'ff-earn.png',
                'ff-lose.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `Automatically earn followers when you sell paintings, license songs, publish books, perform acting gigs, or pretty much anything else that earns you fame.`,
                        `Existing famous sims will automatically be given some followers depending on their fame rank.`,
                        `Earn a ton of followers when your fame rank increases, and lose some of them if it ever goes down.`,
                        `Earn some followers for getting good PR, and lose some for getting bad PR.`,
                        `You can disable automatic follower gains/losses for any sims you want.`,
                        `Use cheats to add, remove, and set followers to whatever you want.`,
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The Get Famous expansion pack is required.`,
                        `This mod does not override any files, so it should be safe to use with any other mods.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'automatic followers',
                    bullets: [
                        `<strong>Interactions that add followers</strong>: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for an award, accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR through the PR agency.`,
                        `<strong>Interactions that remove followers</strong>: ranking down as a celebrity and getting bad PR through the PR agency.`,
                        `Exact amounts for follower gains/losses are random, but are heavily influenced by the type of interaction that was performed, the sim's current fame rank, and the sim's current follower count. For example, a non-famous sim who has 10 followers will earn very few followers for selling a painting, but a 5-star celebrity with 10 million followers will earn hundreds of thousands of followers for acting in a movie.`,
                    ]
                },
                {
                    title: 'initial followers for famous sims',
                    bullets: [
                        `Any sims that are between fame levels 1-5 will automatically be given followers if they do not have any.`,
                        `Fame level 1 will equate to approximately 1,000 followers, and each fame level above that will be 10x the previous amount (level 2 = 10k; level 3 = 100k; level 4 = 1M; level 5 = 10M).`,
                    ]
                },
                {
                    title: 'disabling automatic followers',
                    bullets: [
                        `Enable testing cheats with the command <code>testingcheats on</code>, then shift-click your sim and use the 'Follower Cheats' option to disable/enable automatic followers for any particular sim. All sims have automatic followers enabled by default.`,
                    ]
                },
                {
                    title: 'follower cheats (debug)',
                    bullets: [
                        `Enable testing cheats with the command <code>testingcheats on</code>, then shift-click your sim and use the 'Follower Cheats' option to add or remove followers.`,
                        `These debug follower cheats are available in 6 tiers: Tiny, Small, Medium, Large, Huge, Epic. These tiers correspond to those that are used by specific interactions behind the scenes. They are in order from least to most significant, and the exact amount of followers they add/remove depends on the sim's fame rank and current follower count.`,
                    ]
                },
                {
                    title: 'follower cheats (console)',
                    bullets: [
                        `<code>fkff.add_followers amount first last</code>: Adds the specified number of followers to the named sim.`,
                        `<code>fkff.remove_followers amount first last</code>: Removes the specified number of followers from the named sim.`,
                        `<code>fkff.set_followers amount first last</code>: Set the named sim's followers to the specified amount.`,
                        `Replace <code>amount</code> with any integer.`,
                        `Replace <code>first last</code> with the name of whatever sim you want. If you omit the name, the cheat applies to the active sim instead. The name must be supplied in two tokens (which are separated by spaces). If your sim's name has a space in it, use a % and it will be understood as a space.`,
                        `<strong>Example</strong>: <code>fkff.add_followers 500 bella goth</code> will give Bella Goth 500 new followers.`,
                        `<strong>Example</strong>: <code>fkff.remove_followers 250 eliza pancakes</code> will remove 250 followers from Eliza Pancakes.`,
                        `<strong>Example</strong>: <code>fkff.set_followers 50000000 judith ward</code> will set Judith Ward's follower count to 50 million.`,
                    ]
                },
                {
                    title: 'planned for future versions',
                    bullets: [
                        `Automatic follower gains for more careers and when you gain reputation.`,
                        `Automatic follower losses when you lose reputation.`,
                        `Periodic, random follower gains and losses for celebrity sims.`,
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.1.3',
                    date: 'May 25, 2022',
                    bullets: [
                        `Update English strings for pronoun patch.`,
                    ]
                },
                {
                    version: '1.1.2',
                    date: 'March 11, 2022',
                    bullets: [
                        `Add Italian and Russian translations.`,
                    ]
                },
                {
                    version: '1.1.1',
                    date: 'July 25, 2021',
                    bullets: [
                        `Add Spanish, Chinese, Portuguese, and Norwegian translations.`,
                    ]
                },
                {
                    version: '1.1',
                    date: 'November 24, 2020',
                    bullets: [
                        `Make follower gains/losses more realistic (consider current follower count when determining number of followers to add/remove, and lower follower gains for non-famous sims substantially).`,
                        `Console cheats to add, remove, or set a specific number of followers for any sim.`,
                        `Setting to disable automatic followers for particular sims.`,
                        `Automatically give all existing famous sims a starting amount of followers.`,
                        `Add Polish translation (by Osqar).`
                    ]
                },
                {
                    version: '1.0.2',
                    date: 'September 15, 2020',
                    bullets: [
                        `<em>Actually</em> fix file structure issue that may cause some errors on Windows installation. Sorry about that!`
                    ]
                },
                {
                    version: '1.0.1',
                    date: 'September 12, 2020',
                    bullets: [
                        `Fix file structure issue that may cause some errors on Windows installation. EDIT: This fix did not work - see v1.0.2.`
                    ]
                },
                {
                    version: '1.0',
                    date: 'July 26, 2020',
                    bullets: [
                        `End 1.0 beta phase.`
                    ]
                },
                {
                    version: '1.0 beta 2',
                    date: 'July 16, 2020',
                    bullets: [
                        `Add string tables for non-English languages.`
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'July 15, 2020',
                    bullets: [
                        `Add automatic follower gains for the following interactions: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for and accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR.`,
                        `Add automatic follower losses for the following interactions: ranking down as a celebrity and getting bad PR.`,
                        `Add debug cheats to quickly increase or decrease your follower count.`
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/1930737/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/18eZztaSfaTo5PWO3pC1ITgiL8h8jqD9N?usp=sharing`
                },
            ],
            patreonRelease: null,
            documentationDownload: null,
            warning: null,
            hasStrings: true,
            translations: [
                {
                    language: Languages.en_us,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: Languages.pol_pl,
                    translator: `<a href="https://www.patreon.com/osqar" target="_blank">Osqar</a>`,
                    updated: true,
                },
                {
                    language: Languages.cht_cn,
                    translator: `Ttchubb`,
                    updated: true,
                },
                {
                    language: Languages.por_br,
                    translator: `Larissa Sousa`,
                    updated: true,
                },
                {
                    language: Languages.nor_no,
                    translator: `Susanne`,
                    updated: true,
                },
                {
                    language: Languages.spa_es,
                    translator: `Diavlo`,
                    updated: true,
                },
                {
                    language: Languages.ita_it,
                    translator: `ISY`,
                    updated: true,
                },
                {
                    language: Languages.rus_ru,
                    translator: `dep4ikk`,
                    updated: true,
                },
            ]
        },
        languagebarriers: {
            game: 'ts4',
            id: 'languagebarriers',
            name: 'Language Barriers',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            updateInfo: null,
            trelloBoard: null,
            releaseDate: 'October 10, 2020',
            description: `A world where everyone speaks the same language is unrealistic. This mod adds new languages to the Sims universe, which introduces a unique challenge to the game.`,
            thumbnail: 'lb-thumbnail.png',
            images: [
                `lb-thumbnail.png`,
                'lb-textbook.png',
                'lb-simlingo.png',
                'lb-mortified.png',
                'lb-askforhelp.png',
                'lb-confident.png',
                'lb-children.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'main features',
                    bullets: [
                        `Seven languages: Simlish, Windenburgish, Selvadoradian, Toki Sulani, Komorebigo, Tartosiano, and Sixami.`,
                        `Sims are assigned their native language(s) based on their family, occult type, traits, and home world. They may also speak some other languages at varying levels of fluency, depending on their age, family, traits, and home world.`,
                        `Sims can learn other languages by using Simlingo (phone/tablet/computer), reading textbooks, or speaking with other sims.`,
                        `Toddlers learn languages from sims who speak to them, and acquire their native language(s) when they become children. Adults can choose to use any language they know with toddlers.`,
                        `Each pair of sims has one agreed-upon language they will use with each other, but they can change this whenever they want.`,
                        `Communication is limited between sims that don't share a language, and they may mess up or misunderstand each other.`,
                    ]
                },
                {
                    title: 'customization options',
                    bullets: [
                        `You can change any sim's native language(s) and/or language skills if you do not like their defaults.`,
                        `You can disable Language Barriers for any sim, and they'll be able to communicate like normal.`,
                        `You can change how language assignment, language acquisition, and regional languages work by editing the settings file. No technical skills are required to do this, just follow <a href="https://www.patreon.com/posts/54392738" target="_blank">this guide on Patreon</a> (not locked to patrons).`,
                        `If you're more tech-savvy, Language Barriers is much more customizable with its tuning modules. A guide for this will be coming soon™, but if you want to poke around now, feel free to check out the <code>frankk_LanguageBarriers_Data</code> package.`
                    ]
                },
                {
                    title: 'pack & mod compatability',
                    bullets: [
                        `Language Barriers is Base Game Compatible. You can use all of the languages, even if you don't have the associated pack.`,
                        `There are no known conflicts with other mods, but it is possible for script mods to unexpectedly interfere with one another. If you notice weird behavior with another mod installed, please let me know.`,
                        `It is easier than ever to integrate a mod with Language Barriers, and some mod integrations are available now alongside the main download. A guide for creators to make integrations for their mods can be found <a href="https://frankkmods.medium.com/how-to-integrate-your-mod-with-language-barriers-a1680c7bceab" target="_blank">here</a>.`,
                    ]
                },
                {
                    title: 'special thanks',
                    bullets: [
                        `<strong>MizoreYukii</strong> is a real gem of the modding community, and is one of the most helpful people I know. She got me started with modding, and has continued to be a massive help ever since. Her Discord server is where I met many others, such as <strong>Lumpinou</strong>, <strong>ChippedSim</strong>, <strong>Cidira</strong>, <strong>Jamjars</strong>, <strong>adeepindigo</strong>, and many others, who have always been there to give me ideas, feedback, and help.`,
                        `When it comes to scripting, I have <strong>Triplis</strong>, <strong>LeRoiDeTout</strong>, <strong>Turbodriver</strong>, <strong>Basemental</strong>, and <strong>lot51</strong> to thank. Each of them has, at one point or another, provided me with some invaluable piece of scripting knowledge, whether it be to fix a bug, improve stability, or help me implement something new.`,
                        `And finally, to all of my patrons, translators, members of discord server, and anyone else who has provided me with ideas, feedback, and help along the way, thank you!`,
                    ]
                }
            ],
            details: [
                {
                    title: 'languages',
                    bullets: [
                        `<strong>Komorebigo</strong>: Everyone from Mt. Komorebi.`,
                        `<strong>Selvadoradian</strong>: Everyone from Selvadorada.`,
                        `<strong>Windenburgish</strong>: Everyone from Windenburg.`,
                        `<strong>Tartosiano</strong>: Everyone from Tartosa.`,
                        `<strong>Toki Sulani</strong>: Everyone from Sulani, all mermaids, and anyone with islander traits.`,
                        `<strong>Sixami</strong>: All aliens (regardless of where they live).`,
                        `<strong>Simlish</strong>: Default language for everyone else.`,
                    ]
                },
                {
                    title: 'native language traits',
                    bullets: [
                        `Each language has a native speaker trait. These traits are not chosen in CAS - they are automatically assigned to sims when they spawn in to the world. These traits can be added and removed using cheats.`,
                        `A sim's native language(s) will be determined based on their parents' language(s). If they don't have parents, their occult type, culture-related traits, and home world are used instead (in that order). You can customize how this works by following <a href="https://www.patreon.com/posts/54392738" target="_blank">this guide on Patreon</a> (not locked to patrons).`,
                        `Sims must have at least one native language trait at all times, but you can change it or add more by using the 'Languages > Native Languages' pie menu option. The 'Switch' option will remove all native languages, and add the one that is chosen instead.`,
                    ]
                },
                {
                    title: 'second language skills',
                    bullets: [
                        `Each language has a skill. A sim may only learn a language skill if it is not their native language.`,
                        `Sims can study a language on Simlingo (phone/computer/tablet), with a textbook, or by talking to someone who speaks it better than them.`,
                        `Sims are guaranteed to share at least one fluent language with their parents and partner, and are guaranteed to know at least one of their home world's official languages. Additionally, children are likely to speak each of their parents' native language(s) in some capacity. You can customize this by following <a href="https://www.patreon.com/posts/54392738" target="_blank">this guide on Patreon</a> (not locked to patrons).`,
                        `Sims may have random language skills by default. The languages they may speak depends on their home world and native language(s), and their proficiency in each one depends on its genetic closeness to languages they speak fluently, their traits, their age, and some other factors. This can also be customized by following the link above.`,
                    ]
                },
                {
                    title: 'toddler language acquisition',
                    bullets: [
                        `Babies and toddlers do not have native languages - they are acquired once they become a child.`,
                        `Toddlers will automatically have some skill in their parents' native language(s), and will pick up new language skills depending on the language(s) that adults choose to use with them.`,
                        `Toddlers can use Simlingo Jr. on any tablet to learn languages that their parents cannot teach them.`,
                        `When a toddler becomes a child, any languages at or above a certain threshold will be acquired as a native language. By default, this threshold is 5, but you can change it by following <a href="https://www.patreon.com/posts/54392738" target="_blank">this guide on Patreon</a> (not locked to patrons).`,
                        `If there are no languages at the acquisition threshold, then their highest language will be used instead. If they have no language skills at all, then they will speak Simlish.`,
                        `If a toddler acquires more than one native language, they will also get the Native Multilingual reward trait, which makes learning languages faster.`,
                    ]
                },
                {
                    title: 'regional languages',
                    bullets: [
                        `Each world has official and minority languages. Official languages are used to determine the native languages of sims who live there, and minority languages are used to determine skills.`,
                        `Each world has only one official language by default, and multiple minority languages. These can be customized by following <a href="https://www.patreon.com/posts/54392738" target="_blank">this guide on Patreon</a> (not locked to patrons).`
                    ]
                },
                {
                    title: 'language genetics',
                    bullets: [
                        `Languages are organized in a family tree, loosely based off of their real-world counterparts, with some creative liberty taken. Language genetics affect how difficult it is for a sim to learn another language, and how likely they are to make mistakes while speaking it.`,
                        `Simlish and Windenburgish are very closely related to one another, and are somewhat related to Selvadoradian. Komorebigo and Toki Sulani are somewhat related to one another, and are distantly related to Simlish, Windenburgish, and Selvadoradian. Sixami is not related to the other languages at all.`
                    ]
                },
                {
                    title: 'language contexts and preferences',
                    bullets: [
                        `Each pair of sims has one agreed-upon language to use with one another (their language context). Which language they use is determined when they first meet, but can be changed at any time. The language context between two sims can be seen in the sim's profile, and it determines how often communication events occurs, what happens when they do, and which language skills are increased while speaking.`,
                        `Sims can declare a language preference, and will always use that language with other sims when they meet for the first time (i.e. it will be chosen as the default context).`,
                        `Language contexts can be changed by asking to change languages (under the "Actions" menu). There is a chance the other sim will decline to switch, unless you use the "Asking to change context always succeeds" add-on. You can also cheat the language context between two sims by enabling testing cheats (<code>testingcheats on</code>) and then shift-clicking the other sim.`,
                        `Language preferences can be changed by clicking on a sim and using the "Languages" pie menu option.`
                    ]
                },
                {
                    title: 'interaction locking',
                    bullets: [
                        `If either sim has a low skill in the current language context, some interactions will be locked. Interactions gradually unlock as each sim increases their skill in the language.`,
                        `If a sim has Language Barriers disabled, they will be able to communicate with everyone normally.`,
                        `Non-verbal interactions should never be locked by language skills.`
                    ]
                },
                {
                    title: 'integration with other mods',
                    bullets: [
                        `Interaction locking will <em>kinda</em> work with CC interactions that are in the friendly, funny, mischief, mean, or romance categories. Some mis-matches can occur, though: (1) if they are non-verbal, they may be locked, (2) if they are in their own CC categories, they will not be affected at all.`,
                        `In order for LB to work properly with another mod that adds social interactions, either I or its creator has to make an integration for it. Integrations are small files that tell LB which interactions to lock or not. If you want to see LB better integrated with another mod, just let me know.`,
                        `The only integrations that are currently available are for <a href="https://littlemssam.tumblr.com/post/175413426238/simda-dating-app-simda-dating-app-can-help-you" target="_blank">SimDa Dating App by LittleMsSam</a> and <a href="https://www.patreon.com/posts/nc4t-mod-48682571" target="_blank">Pickpocketing Mod by NeedCoffee4That</a>. If you use either of these mods, download their integrations from the download page, and include it with LB when you install it.`
                    ]
                },
                {
                    title: `communication events`,
                    bullets: [
                        `This has replaced the old "miscommunication" system. If two sims are speaking in a language which at least one of them does not speak fluently, there is a chance for a communication event to occur (i.e. accidentally saying something inappropriate or offensive, not being able to understand another sim, speaking too fast, talking down to someone, etc.).`,
                        `Communication events can result in either positive or negative buffs, depending on the sim's current mood, traits, and chance. There are over 150+ buffs, but once a sim reacts in a particular mood, they will stick with that mood for a while, and it will gradually get more intense. Moodlets are different for speakers and listeners.`,
                        `Communication buffs will never exceed +4, meaning that you no longer have to worry about sims dying from extreme emotions, at least not from LB alone.`
                    ]
                },
                {
                    title: `optional add-ons`,
                    bullets: [
                        `There are 5 add-ons for you to change existing content in LB. These are completely optional, and must be downloaded manually from the download page if you want them. Simply add the ones you want to the Language Barriers mod folder.`,
                        `<strong>Ask to change language always succeeds</strong>: Will make the chance that a sim agrees to speak another language 100%, meaning that you can always guarantee a change in language context without cheating.`,
                        `<strong>Hide all cheats</strong>: Will mark all of the interactions in the "Languages" menu as actual cheats, so that you have to shift-click sims to see them. This is helpful for decluttering your pie menus, if it bothers you.`,
                        `<strong>Hide communication notifications</strong>: Will prevent communication notifications (e.g. "Accidentally Said Something Inappropriate") from being shown, if they annoy you. These appear every time a communication event occurs, which can be very frequent if two sims do not share a language.`,
                        `<strong>Hide language context notifications</strong>: Will prevent language context notifications (e.g. "Language Context Determined") from being shown, if they annoy you. These generally appear whenever you meet a sim for the first time.`,
                        `<strong>Hide Sixami from Simlingo</strong>: Will turn the Simlingo interactions for Sixami into cheats, so you will not see them while playing the game normally. This is useful if you do not wish to play with the occult language, or find it unrealistic that such a language would be available to study online.`,
                    ]
                },
                {
                    title: 'console cheats',
                    bullets: [
                        `There are many console cheats available for LB. Please be patient while I add them here, but for now, you can read about them on <a href="https://www.patreon.com/posts/54357942" target="_blank">this Patreon post</a>. It is from when LB v2.0 was in alpha, but it is still accurate to the latest version.`,
                    ]
                },
            ],
            faqs: [
                {
                    title: 'Do the languages sound different when spoken?',
                    bullets: [
                        'No, and they probably never will - I do not think this is something that is possible.'
                    ]
                },
                {
                    title: 'Can you add [some real language]?',
                    bullets: [
                        `No, I do not add real languages to the mod. Doing so would break the immersion of the game, and risk misrepresenting real people and their cultures. Additionally, since I cannot add every language, it would be unfair for me to add just one.`,
                        `However, if you are a tier 3 patron (Landgraab), you are allowed to request that I change the name of one of the existing languages for your personalized version of the mod (for example, I can rename "Selvadoradian" to "Spanish"). Learn more about the benefits of being a patron <a href="#/patreon">here</a>.`,
                    ]
                },
                {
                    title: 'Can you add language classes/learning a language at school?',
                    bullets: [
                        `Yes, this is planned, and will be coming in the next major update to Language Barriers. I do not have an estimated date at this time.`,
                    ]
                },
                {
                    title: `Why can't I set the language for destination worlds?`,
                    bullets: [
                        `Destination worlds do not work with the way that I currently assign languages to sims, because no one technically lives there. If EA ever makes destination worlds livable, I will allow you to customize them.`,
                        `If you're wondering how Selvadoradian works with a destination world, it's because EA assigns all sims from Selvadorada a special trait that I can use to identify them as Selvadoradian speakers. The same cannot be said for Granite Falls and Batuu.`,
                        `If you would like to change the languages for destination worlds anyways, perhaps because you're using Zerbu's "All Worlds are Residential" mod, you can manually add them to the lb_settings.cfg file. Just use the names "Granite Falls", "Selvadorada", and "Batuu".`
                    ]
                },
                {
                    title: `Can you add a language for Batuu?`,
                    bullets: [
                        `Read the previous FAQ to understand why it's currently not possible. But more importantly, I know nothing about Star Wars, and feel like I would not implement it well, and it would get in the way of that pack's gameplay.`
                    ]
                },
                {
                    title: 'Can a world have multiple languages that sims can speak natively?',
                    bullets: [
                        `Yes. Please read <a href="https://www.patreon.com/posts/54392738" target="_blank">this post on Patreon</a> to learn how this works.`
                    ]
                },
                {
                    title: 'Can you add a language for spellcasters/vampires?',
                    bullets: [
                        `This is planned for the future, but will work a bit differently. Spellcasters/vampires will still have their primary native language(s), and the occult languages will be minor skills that can be used to cast spells, read tomes, etc.`,
                        `This is likely at least 2 major updates away from being added.`
                    ]
                },
                {
                    title: 'Can you make Sixami more exclusive (i.e. remove the Sixami Simlingo/textbook interactions)?',
                    bullets: [
                        `I have created an add-on to get rid of Sixami from Simlingo. Download it from the "Add Ons" folder on the download page.`,
                    ]
                },
            ],
            versionHistory: [
                {
                    version: '2.1.3',
                    date: 'June 16, 2022',
                    bullets: [
                        `Add Moonwood Mill to list of regions.`,
                    ]
                },
                {
                    version: '2.1.2',
                    date: 'May 25, 2022',
                    bullets: [
                        `Update English strings for pronoun patch.`,
                    ]
                },
                {
                    version: '2.1.1',
                    date: 'March 11, 2022',
                    bullets: [
                        "Update Italian, Polish, and Russian translations.",
                        "Minor technical changes."
                    ]
                },
                {
                    version: '2.1',
                    date: 'February 23, 2022',
                    bullets: [
                        "Add Tartosiano language for Tartosa.",
                        "Update Polish translation for strings from LB v2.0 (by lunan)."
                    ]
                },
                {
                    version: '2.0.3',
                    date: 'October 2, 2021',
                    bullets: [
                        "Silence a common error that doesn't actually cause issues (it will no longer show the 'Language Barriers Exception' notification).",
                        'Update the Spanish translation for LB v2.0.',
                    ]
                },
                {
                    version: '2.0.2',
                    date: 'September 13, 2021',
                    bullets: [
                        'Fix minor tuning errors.',
                        'Fix issue that caused <code>fklb.audit</code> to not work properly.',
                        'Fix bug where NPC toddlers who are never loaded in (due to MCCC story progression) would speak Sixami by default. This should no longer happen, and can be fixed retroactively by running the cheat <code>fklb.fix_sixami_bug</code> on each of your affected saves. The aforementioned cheat will only affect NPC sims, but if you need to also fix your played sims, you can do so with <code>fklb.fix_sixami_bug all_sims</code>.'
                    ]
                },
                {
                    version: '2.0.1',
                    date: 'September 7, 2021',
                    bullets: [
                        'Update French translation.',
                        'Fix issue with error reporting related to mood switching (you should no longer get Language Barriers Exceptions for issues with moods related to other mods).'
                    ]
                },
                {
                    version: '2.0',
                    date: 'August 25, 2021',
                    bullets: [
                        `Sims' parents are now considered when assigning native languages.`,
                        `Sims may now sometimes spawn with multiple native languages.`,
                        `Toddlers that acquire more than one native language will now earn the Native Multilingual reward trait, which increases the speed at which they can pick up new languages.`,
                        `Sims are now guaranteed to share at least one fluent language with each of their parents, partner, and home region.`,
                        `Children will now speak at least one of their parents' native languages at some capacity, assuming it is not also their native language.`,
                        `Second language assignment has been overhauled to take language genetics and a sim's traits into account.`,
                        `Individual worlds can now support multiple regional languages, including a distinction between official and minority languages.`,
                        `Each pair of sims now speaks on language at a time, and can change this language context whenever they wish.`,
                        `Sims can have a preferred language to use, and will default to speaking that with new sims they come in contact with.`,
                        `"Miscommunication" has been replaced with "communication events", which are things that happen when two sims that don't share a language fluently interact with each other. The outcomes of these can be positive or negative.`,
                        `Added 150+ buffs for communication events.`,
                        `Removed +8 emotional buffs from communication, to prevent emotional deaths.`,
                        `Non-verbal interactions should no longer require shared language skills to be used.`,
                        `Languages are now organized into a family tree.`,
                        `Simlingo has been added to the phone, under Entertainment > Simlingo Mobile.`,
                        `Console cheats have been updated, and some have been added.`,
                        `Interaction cheats have been updated, allow you to switch native languages and language contexts more easily.`,
                        `The 'lb_settings.cfg' file has been updated, and now lets you customize even more than before.`,
                        `Five add-ons are now available: Ask to change language always succeeds, hide all cheats, hide communication notifications, hide language context notifications, and hide Sixami from Simlingo.`,
                        `Refactored the script to use tuning modules, so that more tech-savvy users can customize LB well beyond the settings file.`,
                        `Streamlined mod integrations so other creators can now make a snippet for their mod to make it compatible with LB.`,
                        `Updated/added a boatload of translations.`
                    ]
                },
                {
                    version: '1.1.9',
                    date: 'July 20, 2021',
                    bullets: [
                        `Fix issue that resulted from the Cottage Living patch.`
                    ]
                },
                {
                    version: '1.1.8',
                    date: 'December 22, 2020',
                    bullets: [
                        `Fix bug where toddlers would learn all 6 languages at once while talking to Father Winter or the flower bunny.`,
                        `Minor tuning fix for compatibility with LMS's SimDa mod.`
                    ]
                },
                {
                    version: '1.1.7',
                    date: 'December 16, 2020',
                    bullets: [
                        `Add support for LittleMsSam's SimDa mod (sims can now participate in a one night stand regardless of their language skills).`,
                        `Add Dutch translation (by SPaauw).`
                    ]
                },
                {
                    version: '1.1.6',
                    date: 'December 1, 2020',
                    bullets: [
                        `Update Russian translation (Luluuluru and Trail_of_blood).`,
                    ]
                },
                {
                    version: '1.1.5',
                    date: 'November 28, 2020',
                    bullets: [
                        `Fix a bug that caused the language acquisition notification to show up for children that are not in the active household.`,
                        `Update German (Possum) and add Russian (Raitowaka) translations.`,
                    ]
                },
                {
                    version: '1.1.4',
                    date: 'November 25, 2020',
                    bullets: [
                        `Fix a bug that prevented the customization of some worlds (Sulani, Windenburg, Mt. Komorebi could only speak their own language or Simlish - setting them to speak any other language would not work).`,
                        `Add Italian (Alex) and German (Leia) translations.`,
                    ]
                },
                {
                    version: '1.1.3',
                    date: 'November 19, 2020',
                    bullets: [
                        `Make the skill threshold for acquiring native languages configurable.`,
                        `Update French translation (Kimikosoma).`,
                    ]
                },
                {
                    version: '1.1.2',
                    date: 'November 17, 2020',
                    bullets: [
                        `Add Polish translation (Osqar).`,
                    ]
                },
                {
                    version: '1.1.1',
                    date: 'November 14, 2020',
                    bullets: [
                        `Update Chinese translation (GreenOnionC).`,
                    ]
                },
                {
                    version: '1.1',
                    date: 'November 13, 2020',
                    bullets: [
                        `Add Komorebigo for Mt. Komorebi (skill, trait, textbook, Simlingo interactions, social interactions, etc.).`,
                        `Add an option to disable unwanted languages with 'lb_settings.cfg'.`,
                        `Add support for changing the default languages of Windenburg, Sulani, and Mt. Komorebi.`,
                        `Fix bug where you could not speak to a celebrity in another language.`,
                        `Update all existing translations (except for Chinese).`,
                        `Add Portuguese translation (by Proko).`,
                    ]
                },
                {
                    version: '1.0.2',
                    date: 'November 6, 2020',
                    bullets: [
                        `Update Chinese (GreenOnionC) and French (Kimikosoma) translations.`,
                        `Add the <code>fklb.reset</code> cheat in preparation for the Snowy Escape update.`
                    ]
                },
                {
                    version: '1.0.1',
                    date: 'October 28, 2020',
                    bullets: [
                        `Add Chinese translation (GreenOnionC).`,
                        `Fix potential compatability issue with some other mods.`,
                        `Fix some typos.`,
                    ]
                },
                {
                    version: '1.0',
                    date: 'October 23, 2020',
                    bullets: [
                        `Add Spanish translation (GeoSims).`,
                        `Adjust the probability for miscommunication moodlets to intensity to be slightly less likely.`,
                        `End beta phase.`,
                    ]
                },
                {
                    version: '1.0 beta 5',
                    date: 'October 21, 2020',
                    bullets: [
                        `Update Korean translation (SHUSHU).`,
                    ]
                },
                {
                    version: '1.0 beta 4',
                    date: 'October 20, 2020',
                    bullets: [
                        `Add French translation (courtesy of Syngo9 on Discord).`,
                        `Add Korean translation (courtesy of SHUSHU on Discord).`,
                        `Fix issue where the Flower Bunny was assigned Simlish, rather than all languages.`,
                        `Make native speaker traits show up in the sim info panel.`
                    ]
                },
                {
                    version: '1.0 beta 3',
                    date: 'October 19, 2020',
                    bullets: [
                        `Add Japanese translation (courtesy of Maru on Discord).`,
                    ]
                },
                {
                    version: '1.0 beta 2',
                    date: 'October 10, 2020',
                    bullets: [
                        `Add non-English string tables so that text doesn't appear blank in non-English games.`,
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'October 10, 2020',
                    bullets: [
                        `Initial release.`,
                    ]
                },
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `https://simfileshare.net/folder/113217/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/1-5D1REN-nvr2Lld3Db-ffCNuDjKlxyK-?usp=sharing`
                },
            ],
            patreonRelease: null,
            documentationDownload: null,
            warning: null,
            hasStrings: true,
            translations: [
                {
                    language: Languages.en_us,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: Languages.jpn_jp,
                    translator: `Maru`,
                    updated: true,
                },
                {
                    language: Languages.kor_kr,
                    translator: `SHUSHU`,
                    updated: false,
                },
                {
                    language: Languages.fre_fr,
                    translator: `Syngo9 and <a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: Languages.spa_es,
                    translator: `<a href="https://geosims.wixsite.com/geosimscr/mods-traducidos" target="_blank">GeoSims</a> and Juliet26`,
                    updated: true,
                },
                {
                    language: Languages.cht_cn,
                    translator: `GreenOnionC`,
                    updated: false,
                },
                {
                    language: Languages.chs_cn,
                    translator: `GreenOnionC`,
                    updated: false,
                },
                {
                    language: Languages.por_br,
                    translator: `Mariana Prokopowiski`,
                    updated: false,
                },
                {
                    language: Languages.pol_pl,
                    translator: `<a href="https://www.patreon.com/osqar" target="_blank">Osqar</a> and lunan`,
                    updated: true,
                },
                {
                    language: Languages.ita_it,
                    translator: `LittleDica and ISY`,
                    updated: true,
                },
                {
                    language: Languages.ger_de,
                    translator: `Leia and Possum`,
                    updated: true,
                },
                {
                    language: Languages.rus_ru,
                    translator: `Luluuluru, Trail_of_blood, Ciri, and Цири`,
                    updated: true,
                },
                {
                    language: Languages.dut_nl,
                    translator: `SPaauw`,
                    updated: false,
                },
                {
                    language: Languages.nor_no,
                    translator: `Susanne`,
                    updated: false,
                },
            ]
        },
        simway: {
            game: 'ts4',
            id: 'simway',
            name: 'Simway (MLM Mod)',
            developmentStage: DataEnums.developmentStage.wip,
            testingStatus: DataEnums.testingStatus.unreleased,
            beingUpdated: false,
            updateInfo: null,
            trelloBoard: null,
            releaseDate: 'Soon™',
            description: `How would you like to be your own boss and set your own hours? Join Simway for just §500, then sell products and recruit other sims to make a profit! This mod adds MLMs to the game.`,
            thumbnail: 'sw-simway.png',
            images: [
                'sw-simway.png',
                'sw-plumbonne.png',
                'sw-llamaware.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'confirmed features',
                    bullets: [
                        `At least three different MLMs for your sims to be a part of.`,
                        `You may be approached by an MLM member who wants to sell products to you, recruit you, or both.`,
                        `You have to pay a startup fee to join an MLM and a portion of your profits to remain in it.`,
                        `You can earn money by selling products or recruiting other sims.`,
                    ]
                },
                {
                    title: 'potential features',
                    bullets: [
                        `Host and attend parties to sell your own products or buy from others.`,
                        `Illegitimate MLMs (pyramid schemes) may pop up every now and then to wreak havoc on your sims.`,
                        `The ability to start your own MLM and/or pyramid scheme.`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `It is too early to tell if any packs will be required.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'MLMs',
                    bullets: [
                        `Three different MLMs to join: Simway, Llamaware, and Plumbonne. Each of these MLMs will specialize in a certain category of products that you can actually buy, sell, and use.`,
                        `<strong>Simway</strong>: Vitamins, supplements, and other health products.`,
                        `<strong>Llamaware</strong>: Kitchen equipment and household gadgets.`,
                        `<strong>Plumbonne</strong>: All-natural beauty and skincare products.`,
                    ]
                },
                {
                    title: 'being approached',
                    bullets: [
                        `Your sim may be approached by MLM members through phone, text, a knock on the door, or in public.`,
                        `MLM members may try to sell products to you, recruit you, or both.`,
                        `You can disable this feature for any sim you do not want to be bothered.`,
                    ]
                },
                {
                    title: 'being in an MLM',
                    bullets: [
                        `Only young adult, adult, and elder sims may participate in MLMs.`,
                        `Join an MLM for §500 by accepting a recruiter's offer or by signing up at a computer.`,
                        `You must stay stocked up and be prepared to sell to anyone you encounter.`,
                        `You can recruit other sims, and earn a portion of their startup fee and future sales.`,
                        `You must give a portion of your sales to the higher-ups every week, or else you may be kicked out.`,
                    ]
                },
                {
                    title: 'susceptibility',
                    bullets: [
                        `Every sim has a susceptibility score that predicts their likelihood to join an MLM.`,
                        `This susceptibility score is used to determine which sims will work for MLMs by default, as well as the chance that trying to recruit a sim to an MLM will succeed.`,
                        `Susceptibility is calculated by taking a base chance value and applying multipliers based on various factors, such as gender, age, employment status, fame rank, and wealth. This base value and the multipliers will be configurable.`
                    ]
                }
            ],
            faqs: [],
            versionHistory: [],
            primaryDownload: null,
            alternativeDownloads: [],
            patreonRelease: null,
            documentationDownload: null,
            warning: null,
            hasStrings: true,
            translations: []
        },
        buybitsandpieces: {
            game: 'ts4',
            id: 'buybitsandpieces',
            name: 'Buy Bits and Pieces',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            updateInfo: null,
            trelloBoard: null,
            releaseDate: 'September 9, 2020',
            description: `Gathering bits and pieces by recycling materials can get repetitive and annoying. This mod allows you to buy them with simoleons instead, for those of you that don't like to use cheats.`,
            thumbnail: 'bbp-1.png',
            images: [
                'bbp-1.png',
                'bbp-2.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `Buy bits and pieces with simoleons at any trash can (10 for §100).`,
                        `Fill up the generator for §250 - no bits, pieces, or bio-fuel required!`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The Eco Lifestyle expansion pack is required.`,
                        `This mod does not override any files, so it should be safe to use with any other mods.`
                    ]
                },
                {
                    title: 'known issues',
                    bullets: [
                        `When you buy bits and pieces, the text for the §100 charge will overlap the text for the 10 bit/piece credit. I am not sure if this is something I can fix, as it is an issue with the UI, but I will look into it and try to figure something out.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'buying bits and pieces',
                    bullets: [
                        `Click on any trash can, dumpster, or trash chute to buy bits and pieces with simoleons.`,
                        `You can buy either 10 bits or 10 pieces for §100.`
                    ]
                },
                {
                    title: 'filling up the generator',
                    bullets: [
                        `Click on a power generator and select the option to fill it up for §250.`
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.0.5',
                    date: 'October 21, 2020',
                    bullets: [
                        `Add Chinese translation (courtesy of MuMu from Discord).`
                    ]
                },
                {
                    version: '1.0.4',
                    date: 'September 15, 2020',
                    bullets: [
                        `<em>Actually</em> fix file structure issue that may cause some errors on Windows installation. Sorry about that!`
                    ]
                },
                {
                    version: '1.0.3',
                    date: 'September 13, 2020',
                    bullets: [
                        `Add French translation (courtesy of Rebecca from Discord).`
                    ]
                },
                {
                    version: '1.0.2',
                    date: 'September 12, 2020',
                    bullets: [
                        `Fix animation issue that caused sims to pour fuel where they are standing rather than at the generator.`
                    ]
                },
                {
                    version: '1.0.1',
                    date: 'September 12, 2020',
                    bullets: [
                        `Fix file structure issue that may cause some errors on Windows installation. EDIT: This fix did not work - see v1.0.4.`,
                        `Provide Italian translation.`
                    ]
                },
                {
                    version: '1.0',
                    date: 'September 9, 2020',
                    bullets: [
                        `Add the buy bits/pieces interactions to all trash cans.`,
                        `Add an interaction to fill the generator with §250.`
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2017359/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/1igN6N0DPyIw8QwT-ZdOwp6TeQTovlqRz?usp=sharing`
                },
            ],
            patreonRelease: null,
            documentationDownload: null,
            warning: null,
            hasStrings: true,
            translations: [
                {
                    language: Languages.en_us,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: Languages.ita_it,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: Languages.fre_fr,
                    translator: `<a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: Languages.cht_cn,
                    translator: `MuMu`,
                    updated: true,
                },
            ]
        },
        onlinehomework: {
            game: 'ts4',
            id: 'onlinehomework',
            name: 'Online Homework',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            trelloBoard: null,
            releaseDate: 'October 6, 2020',
            description: `Can't find your sim's notebook? Well, now you can do their homework at any computer or laptop. This mod works for children, teens, and university students.`,
            thumbnail: 'oh-thumbnail.png',
            images: [
                'oh-thumbnail.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `Do your homework at any computer or laptop (including CC).`,
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `Children/teen homework is compatible with the Base Game.`,
                        `University homework requires the Discover University expansion pack.`,
                        `If you don't have Discover University, simply delete the <code>frankk_OnlineHomework_University.package</code> file from the mod and it will be safe to use with the Base Game for children and teens.`,
                        `This mod does not override any files, so it should be safe to use with any other mods.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'children/teens homework',
                    bullets: [
                        `Click on any computer or laptop and select the 'Do Homework' option. This option will only appear if your sim actually has homework to do.`,
                        `You cannot do school projects at the computer.`,
                        `Parents cannot help their children do homework at the computer.`,
                    ]
                },
                {
                    title: 'university homework',
                    bullets: [
                        `Click on any computer or laptop and go the 'University > University Coursework > Do Homework' pie menu option to do your homework.`,
                        `You cannot do projects or presentations at the computer.`,
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.1',
                    date: 'December 21, 2020',
                    bullets: [
                        `Remove custom strings so that all languages are supported.`,
                        `Add online homework for children and teens.`
                    ]
                },
                {
                    version: '1.0.4',
                    date: 'November 15, 2020',
                    bullets: [
                        `Add Polish translation (courtesy of Osqar from Discord).`
                    ]
                },
                {
                    version: '1.0.3',
                    date: 'October 21, 2020',
                    bullets: [
                        `Add Chinese translation (courtesy of MuMu from Discord).`
                    ]
                },
                {
                    version: '1.0.2',
                    date: 'October 7, 2020',
                    bullets: [
                        `Add French translation (courtesy of <a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>).`,
                    ]
                },
                {
                    version: '1.0.1',
                    date: 'October 6, 2020',
                    bullets: [
                        `Fix issue where Italian text showed up in the English version.`,
                    ]
                },
                {
                    version: '1.0',
                    date: 'October 6, 2020',
                    bullets: [
                        `Add the ability to do university homework at any computer or laptop.`,
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2089628/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/1GKkgjuWfSklSN7_cN2p0JJsbkF39eKhF?usp=sharing`
                },
            ],
            patreonRelease: null,
            documentationDownload: null,
            warning: `If you don't have Discover University, simply delete the <code>frankk_OnlineHomework_University.package</code> file from the mod and it will be safe to use with the Base Game for children and teens.`,
            hasStrings: false,
            translations: []
        },
        packtests: {
            game: 'ts4',
            id: 'packtests',
            name: 'Pack Tests',
            developmentStage: DataEnums.developmentStage.tool,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            updateInfo: null,
            trelloBoard: null,
            releaseDate: 'January 4, 2021',
            description: `If you ever need to test whether your users have a particular pack installed or not, this script will allow you to do so directly in tuning - no scripting abilities required!`,
            thumbnail: null,
            images: [],
            videoUrl: null,
            overview: [
                {
                    title: 'what does this mod do?',
                    bullets: [
                        `This mod adds nothing to your game - all it does is make it easier for modders to check whether or not you have certain packs installed.`,
                        `There are many reasons why they may need to do this, but most likely they are trying to integrate their mod with certain packs while also keeping it Base Game compatible.`,
                    ]
                },
                {
                    title: 'should I install this mod?',
                    bullets: [
                        `You only have to install this mod if you have been instructed to do so by another creator.`,
                        `If you have already installed this mod once, do NOT install it again. You only need one copy of it in your game, and it will work for every mod that requires it.`
                    ]
                },
                {
                    title: 'do I still need this mod if I have all of the packs?',
                    bullets: [
                        `Yes. If a mod requires Pack Tests to work, you have to download it regardless of the packs you have.`,
                        `Pack Tests allows mod creators to write code that the game itself cannot understand. If you attempt to use their mod without Pack Tests, the game will not know how to read some of their files, and they will fail to load.`
                    ]
                },
            ],
            details: [
                {
                    title: 'what can this mod do for me?',
                    bullets: [
                        `This mod adds a new tunable test set that can check whether certain packs are installed or not. You can then reference these test sets anywhere you normally would (e.g. in a loot, interaction, other test set, etc.).`,
                        `This is all completely possible via tuning, so you do not have to write a script of your own.`
                    ]
                },
                {
                    title: 'how often will this mod be updated?',
                    bullets: [
                        `It will only be updated when absolutely necessary (e.g. when a critical bug is fixed, if it breaks after a patch, etc.).`,
                        `The packs are not hard-coded into this mod, so you don't have to worry about it breaking after new packs are released. You will even be able to test for the new pack immediately, without any updates needed to this mod.`,
                        `If/when this mod does get updated, it should not cause any issues for you. I will never remove or edit the behavior of existing tests, unless it is absolutely unavoidable. And if I ever do, I will leave the previous version of the mod available for download so you and your users can still use the older version.`
                    ]
                },
                {
                    title: 'how can I use this mod?',
                    bullets: [
                        `Download the modder's documentation from the link at the very bottom of this page to get started - it contains information on how to write and use pack tests in your mod. If you get stuck, reach out to me on Discord.`,
                        `If you use pack tests in your mod, it will require this one to function properly. Be very clear in instructing your users to download this mod <strong>from this webpage</strong>, because if they don't, your mod will cause an LE for them.`,
                        `<strong>Do not include my script in your own download, and do not re-upload it anywhere</strong>. Doing so will inevitably lead to users having the same code in their game multiple times, and it will cause issues for them if this mod is ever updated.`
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.0.1',
                    date: 'July 20, 2021',
                    bullets: [
                        `Fix issue that resulted from the Cottage Living patch.`,
                    ]
                },
                {
                    version: '1.0',
                    date: 'January 4, 2021',
                    bullets: [
                        `Add pack test set.`,
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2251515/`
            },
            patreonRelease: null,
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/file/d/1p8_9WsERhDKogO87jl1yNVJIo_fHOfve/view?usp=sharing`
                },
            ],
            documentationDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2251516/`
            },
            warning: `The July 20, 2021 patch broke v1.0, so please ensure you are using v1.0.1.`,
            hasStrings: false,
            translations: []
        },
        utterchaos: {
            game: 'ts4',
            id: 'utterchaos',
            name: 'Utter Chaos',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            beingUpdated: false,
            updateInfo: null,
            trelloBoard: null,
            releaseDate: 'December 13, 2021',
            description: `Saying "hello" to your neighbor? You just might burst into flames, turn into an alien, or both. This mod adds a chance for random outcomes to every action in the game.`,
            thumbnail: 'uc-fire.png',
            images: [
                'uc-fire.png',
                'uc-hospital.png',
                'uc-outside.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'random outcomes',
                    bullets: [
                        `Every time a sim or object does or receives anything, there is a chance for the outcome to be randomized.`,
                        `Random outcomes can be anything in the game, from a notification to an alien abduction. There is a 1 in 400 chance that an outcome will involve fire, but other than that, all of them are equally likely to occur.`,
                        `Random outcomes also count as actions, and can therefore trigger even more randomness when they finish. When it rains, it pours. Have fun.`
                    ]
                },
                {
                    title: 'fair warning, lol',
                    bullets: [
                        `<strong><u>You should NOT use this mod in saves that you care about</u></strong>. If you do, you should not save your game before exiting. Your sims can and will have their lives turned upside down in an instant, and can die without warning.`,
                        `<strong><u>No, seriously. Do NOT use this mod in a save you care about</u></strong>. There is a chance that an outcome will put your save in a state where there is an unsolvable problem. Common ones include permanently shutting off power on a lot, getting constantly spammed with notifications from a baby chicken that is traveling the world (not a joke, and way more annoying than it sounds), and catastrophic fires that destroy a build.`
                    ]
                },
                {
                    title: 'recommendations for best gameplay',
                    bullets: [
                        `If there is <em>too much</em> chaos, <strong><u>try removing other mods from the game</u></strong>. Other mods may perform actions in the background, and may do so very frequently. This can lead to an unbearable amount of notification or buff spam.`,
                        `<strong><u>Disable Cottage Living, if you have it</u></strong>. The chicken thing I mentioned? Yeah, it's relentless. The notifications will pop up faster than you can close them. To avoid this altogether, I recommend disabling Cottage Living while playing. You can do this by using <a href="https://jamesturner.yt/disablepacks" target="_blank">James Turner's pack disabling tool</a>.`,
                        `If you've followed the first two tips but there is still too much happening, restart your game on a fresh save. Sometimes a single session can become beyond cursed, and you just need to reset.`
                    ]
                },
                {
                    title: 'note on exceptions',
                    bullets: [
                        `If you are playing with mods that show an "exception" notification (such as MC Command Center or Better Exceptions), you may see an error pop up every now and then. This is expected and unavoidable, due to the high degree of randomness that this mod produces. These errors are generally safe to ignore, so to avoid seeing them, you can remove MCCC and BE while playing with Utter Chaos.`,
                        `<strong><u>DO NOT REPORT ERRORS/BUGS TO MOD CREATORS WHILE YOU HAVE THIS MOD INSTALLED.</u></strong> If you notice other mods acting weirdly with Utter Chaos installed, there is a 110% chance it is due to Utter Chaos. It is utterly chaotic, as one might guess from the name.`,
                        `<strong><u>DO NOT REPORT ERRORS/BUGS ABOUT THIS MOD TO ME, UNLESS THEY MAKE THE GAME UNPLAYABLE.</u></strong> By its nature, this mod is going to be highly unpredictable. I will not even attempt to fix any errors this mod causes, unless they make the game unplayable (such as freezing, messing up the UI, or anything similar).`
                    ]
                },
                {
                    title: 'why would you make this?',
                    bullets: [
                        `I was bored. I also have <a href="/">normal mods</a>, if this isn't your cup of tea.`
                    ]
                },
            ],
            details: [
                {
                    title: 'random outcome triggers',
                    bullets: [
                        `<strong>Sim action</strong>: 10% chance of a random outcome`,
                        `<strong>Object action</strong>: 6.5% chance of a random outcome`,
                        `<strong>Sim spawns into world</strong>: 22% chance of them experiencing a random outcome on their own, plus a 17.5% chance of them experiencing a random outcome with the current active sim`,
                    ]
                },
                {
                    title: 'random outcome selection',
                    bullets: [
                        `When a random outcome is going to occur, one will be picked entirely at random. There are nearly 16,000 potential outcomes to choose from if you own every pack, and this number does not include outcomes from mods and CC.`,
                        `There is a 1% chance for any given random outcome to involve fire. If this 1% passes, there is a 25% for the active sim to catch fire, 25% for the other sim to catch fire, and 25% for an object to catch fire. All in all, for any random outcome, there is around a 0.25% chance (1 in 400) that a fire will occur.`,
                        `Outcomes can be literally ANYTHING. This includes notification, changing occult type, becoming pregnant, dying, etc. You get the idea.`,
                        `For the more technical folk: What I mean by "action" and "outcome" is "loot". Every time a loot occurs, there is a chance for another random loot to occur.`
                    ]
                },
            ],
            faqs: [],
            versionHistory: [
                {
                    version: '1.0 beta 1',
                    date: 'January 16, 2022',
                    bullets: [
                        `Incite chaos.`,
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2929952/`
            },
            patreonRelease: null,
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/file/d/1ufzQziu243gPupzp4LAamW22qSFQXVf5/view?usp=sharing`
                },
            ],
            documentationDownload: null,
            warning: `This mod is just for dumb fun. <strong><u>You should NOT be using it in saves that you care about</u></strong>, because literally anything can happen at any moment (pregnancy, death, turning into a mermaid...). Due to the degree of randomness caused by this mod, it may make other mods behave unpredictably as well. <strong><u>Do NOT report any bugs to creators while you have this mod installed</u></strong>, because chances are, this is what's breaking things.`,
            hasStrings: false,
            translations: []
        },
    }
};
