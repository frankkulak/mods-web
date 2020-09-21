export const DataEnums = {
    developmentStage: {
        wip: 0,
        active: 1,
        retired: 2,
    },
    testingStatus: {
        unreleased: 0,
        beta: 1,
        working: 2,
        untested: 3,
        broken: 4,
    },
};

export const GameData = {
    ts4: {
        name: "The Sims 4",
        lastUpdate: "September 3, 2020"
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
            alternativeDownloads: []
        },
        followersforfame: {
            game: 'ts4',
            id: 'followersforfame',
            name: 'Followers for Fame',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
            releaseDate: 'July 15, 2020',
            description: `Can you really call yourself a 'Global Superstar' when you only have 12 followers on Simstagram? This mod automatically gives your sim followers whenever they gain fame.`,
            thumbnail: 'f4f-1.png',
            images: [
                'f4f-1.png',
                'f4f-2.png',
                'f4f-3.png',
                'f4f-4.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `Automatically earn followers when you perform fame-gaining interactions like selling paintings, licensing songs, publishing books, performing acting gigs, and many more.`,
                        `Earn a ton of followers when your fame rank increases, and lose some of them if it ever goes down.`,
                        `Earn some followers for getting good PR, and lose some for getting bad PR.`,
                        `Use debug cheats to add and remove followers.`,
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
                        `The following interactions will add followers: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for an award, accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR through the PR agency.`,
                        `The following interactions will remove followers: ranking down as a celebrity and getting bad PR through the PR agency.`,
                        `Exact amounts for follower gains/losses are heavily influenced by both the type of interaction and your sim's current fame rank. For example, a non-famous sim selling a painting is going to earn much less followers than a 5 star celebrity selling a painting, and both of those sims would earn significantly less than a 5 star celebrity acting in a movie or licensing a song.`,
                    ]
                },
                {
                    title: 'followers cheats',
                    bullets: [
                        `Enable testing cheats with the command 'testingcheats on', then shift-click your sim and use the 'Follower Cheats' option to add or remove followers.`,
                        `Follower cheats are available in 6 tiers: Tiny, Small, Medium, Large, Huge, Epic. These tiers correspond to the tiers that are used for specific interactions. For instance, selling a photo is a Tiny gain, and leveling up your fame is an Epic gain.`,
                    ]
                },
                {
                    title: 'future plans',
                    bullets: [
                        `Automatic follower gains for some careers, performing live (singing, acting, comedy, etc.), and boosts in reputation.`,
                        `Automatic follower losses for hits to reputation.`,
                        `Periodic, random follower gains and losses for all celebrity sims.`,
                        `Option to disable automatic followers for certain sims.`,
                    ]
                },
            ],
            versionHistory: [
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
                        `Added string tables for non-English languages.`
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'July 15, 2020',
                    bullets: [
                        `Added automatic follower gains for the following interactions: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for and accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR.`,
                        `Added automatic follower losses for the following interactions: ranking down as a celebrity and getting bad PR.`,
                        `Added debug cheats to quickly increase or decrease your follower count.`
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/1930737/`
            },
            alternativeDownloads: [
                {
                    title: `Fast.io`,
                    url: `https://modsbyfrankkulak.imfast.io/Followers%20for%20Fame/`
                },
            ]
        },
        languagebarriers: {
            game: 'ts4',
            id: 'languagebarriers',
            name: 'Language Barriers',
            developmentStage: DataEnums.developmentStage.wip,
            testingStatus: DataEnums.testingStatus.unreleased,
            releaseDate: 'October 2020',
            description: `A world where everyone speaks the same language is unrealistic. This mod adds new languages to the Sims universe, which introduces a unique challenge to the game.`,
            thumbnail: 'lb-1.png',
            images: [
                'lb-1.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'confirmed features',
                    bullets: [
                        `Five regional languages: Selvadoradian, Windenburgish, Toki Sulani, Sixami, and Simlish.`,
                        `Native languages will automatically be assigned to sims (children and older) depending on their home world, traits, and occult type.`,
                        `Toddlers will acquire their native language(s) once they age up into children, which depends on the language(s) that they were spoken to in.`,
                        `Your sim can learn another language by using Simlingo, reading a textbook, or interacting with another sim who speaks it.`,
                        `Your sim may experience miscommunication when speaking with sims who they do not share a language with, which results in an Embarrassed, Angry, or Tense moodlet.`,
                        `You can disable Language Barriers for any sim, which makes them immune to miscommunication.`,
                    ]
                },
                {
                    title: 'potential features',
                    bullets: [
                        `An add-on to use Selvadoradian in Oasis Springs for Base Game players.`,
                        `An add-on to alter where sims spawn depending on their language skills/traits.`,
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `As this is still a work-in-progress, more details are to come and all are subject to change.`,
                        `This mod should be ready by October. Feel free to <a href="https://discord.gg/qNhD3Jh" target="_blank">join my Discord server</a> if you would like periodic updates on its status.`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The vast majority of this mod is compatible with the Base Game. You can study and speak any languages with the Base Game, but you will need the associated packs to access worlds that naturally spawn speakers of languages other than Simlish.`,
                        `This mod does not override any files, so it <em>should</em> be safe to use with most other mods. However, if there are any other mods that alter the way that sims communicate, it may conflict with those.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'languages',
                    bullets: [
                        `There are five languages for your sims to learn and speak: Selvadoradian, Windenburgish, Toki Sulani, Sixami, and Simlish.`,
                        `Selvadoradian is for all human sims from Selvadorada.`,
                        `Windenburgish is for all human sims from Windenburg.`,
                        `Toki Sulani is for all human sims from Sulani, all mermaids (regardless of where they live), and anyone with islander traits (except for aliens and humans from Selvadorada and Windenburg).`,
                        `Sixami is for all aliens (regardless of where they live and what traits they have).`,
                        `Simlish is the default language that everyone else speaks.`,
                    ]
                },
                {
                    title: 'native speaker traits',
                    bullets: [
                        `Each language has an associated native speaker trait. These traits are hidden - you will not see them in CAS or in your sim's info panel.`,
                        `Sims must have at least one native language at all times. Sims will only be assigned one native language by default, but you can add as many as you want.`,
                        `Native languages are assigned to all sims (children and older) as they spawn in to the world. Their default language is dictated by the rules mentioned in the 'languages' section above.`,
                        `If you want to change a sim's native language(s), you can do so by clicking on them and selecting the 'Languages > Native Languages' pie menu option.`,
                    ]
                },
                {
                    title: 'toddler language acquisition',
                    bullets: [
                        `Babies and toddlers do not have native languages. A sim will acquire their native language(s) when they become a child.`,
                        `Unlike children-elder sims who are assigned a native language automatically, toddlers may acquire more than one native language naturally depending on who speaks to them, and how much.`,
                        `Toddlers will learn the language skills associated with the native languages of whomever speaks to them. For instance, if both of their parents are native Simlish speakers, they will learn Simlish. However, if one parent is a native Simlish speaker while the other is a native Windenburgish speaker, they will most likely learn both. If they happen to have an alien nanny, the toddler will probably pick up some Sixami, too.`,
                        `When a toddler ages into a child, any language skills at or above level 5 will be acquired as a native language. If the toddler does not have any language skills at or above level 5, then just their highest skill will be used instead. If they have no language skills at all, then they will default to Simlish.`,
                        `Just like any other sims, you can change a child's acquired native language(s) by using the 'Languages > Native Languages' pie menu option`
                    ]
                },
                {
                    title: 'language skills',
                    bullets: [
                        `Each language has an associated skill. You may only learn a language as a skill if it is not your native language.`,
                        `Having the native speaker trait for a particular language overrides your skill in that language - if you are a native speaker, the game will treat your skill level in that language as 10.`,
                        `You can study languages using Simlingo (at the computer or tablet), reading textbooks (purchased from a bookshelf), or interacting with sims who speak that language natively.`,
                    ]
                },
                {
                    title: 'miscommunication',
                    bullets: [
                        `There is a chance to miscommunicate with sims if you do not have a language in common. This chance is equal to the inverse of your highest shared language skill, times 11. For the purposes of this calculation, a native speaker trait is equal to a skill level of 10. For instance, if you are a native Simlish speaker and do not know any Selvadoradian, and you are speaking to a Selvadoradian speaker who does not know any Simlish, your highest shared skill is 1, which equates to a 99% chance to miscommunicate. If one of you becomes level 2 in the other's language, your chance will decrease to 88%, then 77% for level 3, and so on.`,
                        `Your chance of miscommunication will be 0% in any of the following scenarios: both sims share a native language, one sim is level 10 in the other's native language, both sims are level 10 in the same language, or if at least one of the sims is not yet a child or has Language Barriers disabled.`,
                        `When miscommunication occurs, the actor of the interaction will gain a negative moodlet (+2 Embarrassed, Angry, or Tense). Each time you miscommunicate after that, there is a 33% chance that the moodlet will intensify to +4. After that, there is a 25% chance it will intensify to +8 (only for Embarrassed and Angry; Tense caps at +4). Note that +8 Embarrassed and Angry each have a chance of killing your sim (that wasn't me - that's in the base game), so you should really try to avoid this scenario.`,
                        `You can disable Language Barriers for any sim by clicking on them and selecting the 'Languages' pie menu option. Disabling Language Barriers for a sim will make their chance of miscommunication always be 0%.`
                    ]
                },
            ],
            versionHistory: [],
            primaryDownload: null,
            alternativeDownloads: []
        },
        simway: {
            game: 'ts4',
            id: 'simway',
            name: 'Simway (MLM Mod)',
            developmentStage: DataEnums.developmentStage.wip,
            testingStatus: DataEnums.testingStatus.unreleased,
            releaseDate: null,
            description: `How would you like to be your own boss and set your own hours? Join Simway for just §500, and recruit other sims to make a profit! This mod adds MLMs (pyramid schemes) to the game.`,
            thumbnail: 'sw-1.png',
            images: [
                'sw-1.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'confirmed features',
                    bullets: [
                        `Three different MLMs for your sims to be a part of.`,
                        `You may be approached by an MLM member who wants to sell products to you, recruit you, or both.`,
                        `You have to pay a startup fee to join an MLM and a weekly fee to remain in it.`,
                        `You can earn money by buying and selling inventory and through recruiting other sims.`,
                    ]
                },
                {
                    title: 'potential features',
                    bullets: [
                        `Host and attend selling parties to sell your own products or buy from others.`,
                        `Create your own MLM empire.`
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `As this is a work-in-progress, more details are to come and they are all subject to change.`,
                        `I have not yet started this mod, as I am focusing on <a href="#/ts4/languagebarriers">Language Barriers</a> first. Once that is released, Simway will be my primary focus!`
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
                        `Three different MLMs to join: Simway, Llamaware, and Plumbonne.`,
                        `Each MLM specializes in a different category of products.`
                    ]
                },
                {
                    title: 'being approached',
                    bullets: [
                        `Any young adult, adult, or elder sim may be approached by an MLM member through a phone call, text message, knock on the door, or interaction in public.`,
                        `MLM members may try to sell products to you, recruit you, or both.`,
                        `You can disable this feature for any sim you do not want to be bothered.`,
                    ]
                },
                {
                    title: 'joining an MLM',
                    bullets: [
                        `Join an MLM by accepting a recruiter's offer or at a computer.`,
                        `There is a §500 startup fee to join an MLM.`,
                        `You must purchase some inventory when you sign up in order to get started.`
                    ]
                },
                {
                    title: 'being in an MLM',
                    bullets: [
                        `To remain in an MLM, you must pay a weekly fee and a portion of your profits to the person who recruited you.`,
                        `If you do not make your payments, you will be kicked out and all inventory you own will be confiscated.`,
                        `You can make money by selling inventory and recruiting other sims. You will get a percentage of their startup fee, as well as a portion of their sales.`,
                    ]
                }
            ],
            versionHistory: [],
            primaryDownload: null,
            alternativeDownloads: []
        },
        buybitsandpieces: {
            game: 'ts4',
            id: 'buybitsandpieces',
            name: 'Buy Bits and Pieces',
            developmentStage: DataEnums.developmentStage.active,
            testingStatus: DataEnums.testingStatus.working,
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
                    title: 'translations',
                    bullets: [
                        `This mod is available in English, Italian, and French (translated by Rebecca). Other languages will appear in English.`,
                        `Questa mod è disponibile nell'inglese, l'italiano, ed il francese (tradotto da Rebecca). L'inglese è usato per tutte le altre lingue.`
                    ]
                },
                {
                    title: 'known issues',
                    bullets: [
                        `When you buy bits and pieces, the text for the §100 charge will overlap the text for the 10 bit/piece credit. I am not sure if this is something I can fix, as it is just an issue with the UI, but I will look into it and try to figure something out.`,
                    ]
                }
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
            versionHistory: [
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
                        `Add French translation (courtesy of Rebecca from my Discord server).`
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
                        `Added the buy bits/pieces interactions to all trash cans.`,
                        `Added an interaction to fill the generator with §250.`
                    ]
                }
            ],
            primaryDownload: {
                title: `Sim File Share`,
                url: `http://www.simfileshare.net/download/2017359/`
            },
            alternativeDownloads: [
                {
                    title: `Fast.io`,
                    url: `https://modsbyfrankkulak.imfast.io/Buy%20Bits%20and%20Pieces/`
                },
            ]
        },
    }
};