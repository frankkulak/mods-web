export const Constants = {
    developmentStage: {
        wip: 0,
        active: 1,
        retired: 2
    },
    status: {
        updated: 0,
        untested: 1,
        conflict: 2
    }
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
            developmentStage: Constants.developmentStage.retired,
            status: Constants.status.conflict,
            releaseDate: 'June 13, 2020',
            beta: true,
            versionHistory: [
                {
                    version: '1.0 beta 3',
                    date: 'July 16, 2020',
                    details: [
                        'Change name from #JusticeToCowplants to Nameable Cowplants to avoid confusion with another mod by the same name.'
                    ]
                },
                {
                    version: '1.0 beta 2',
                    date: 'July 8, 2020',
                    details: [
                        `Added cowplant's name to each interaction.`,
                        `Added a tooltip with the cowplant's name and plant quality.`
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'June 13, 2020',
                    details: [
                        'Added ability to name cowplants.'
                    ]
                }
            ],
            description: `This mod gives you the ability to name cowplants, but is now obsolete as this ability was added to the base game. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>.`,
            images: [
                'jfcp-1.png',
                'jfcp-2.png'
            ],
            details: [
                {
                    title: 'features',
                    bullets: [
                        `Click on a cowplant to give it a name.`
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `The name of this mod was changed to Nameable Cowplants to avoid confusion with another work-in-progress mod named #JusticeForCowplants. A link to the other creator's mod will be provided here when it becomes available.`,
                        `As of the Nifty Knitting patch (July 23, 2020), cowplants are nameable in the base game, so this mod is now obsolete.`
                    ]
                }
            ],
            downloads: [
                {
                    site: `Sim File Share`,
                    link: `http://www.simfileshare.net/download/1895244/`,
                    hide: null
                },
            ],
            video: `https://youtu.be/tnvhvNxIETk`
        },
        followersforfame: {
            game: 'ts4',
            id: 'followersforfame',
            name: 'Followers for Fame',
            developmentStage: Constants.developmentStage.active,
            status: Constants.status.updated,
            releaseDate: 'July 15, 2020',
            beta: false,
            versionHistory: [
                {
                    version: '1.0.1',
                    date: 'September 12, 2020',
                    details: [
                        `Fix file structure issue that may cause some errors on Windows installation.`
                    ]
                },
                {
                    version: '1.0',
                    date: 'July 26, 2020',
                    details: [
                        `End 1.0 beta phase.`
                    ]
                },
                {
                    version: '1.0 beta 2',
                    date: 'July 16, 2020',
                    details: [
                        `Added string tables for non-English languages.`
                    ]
                },
                {
                    version: '1.0 beta 1',
                    date: 'July 15, 2020',
                    details: [
                        `Added automatic follower gains for the following interactions: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for and accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR.`,
                        `Added automatic follower losses for the following interactions: ranking down as a celebrity and getting bad PR.`,
                        `Added debug cheats to quickly increase or decrease your follower count.`
                    ]
                }
            ],
            description: `Can you really call yourself a 'Global Superstar' when you only have 12 followers on Simstagram? This mod automatically gives your sim followers whenever they gain fame.`,
            images: [
                'f4f-1.png',
                'f4f-2.png',
                'f4f-3.png',
                'f4f-4.png'
            ],
            details: [
                {
                    title: 'features',
                    bullets: [
                        `Automatically earn followers when you perform fame-gaining actions like selling a painting, licensing a song, publishing a book, performing an acting gig, and many more.`,
                        `Earn a ton of followers when your fame rank increases, and lose some of them if it ever goes down.`,
                        `Earn some followers for getting good PR, and lose some for getting bad PR.`,
                        `Use debug cheats to add and remove followers. Enable testing cheats with the command 'testingcheats on', then shift-click your sim and navigate to the 'Follower Cheats' option.`
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `Exact amounts for follower gains/losses are heavily influenced by both the type of interaction and your sim's current fame rank. For example, a non-famous sim selling a painting is going to earn much less followers than a 5 star celebrity selling a painting, and both of those sims would earn significantly less than a 5 star celebrity acting in a movie or licensing a song.`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The 'Get Famous' expansion pack is required for most interactions.`,
                        `This mod does not override any files, so it should be safe to use with any other mods.`
                    ]
                },
                {
                    title: 'future plans',
                    bullets: [
                        `Automatic follower gains for some careers, performing live, and boosts in reputation.`,
                        `Automatic follower losses for hits to reputation.`,
                        `Periodic, random follower gains and losses for all celebrity sims.`,
                        `Settings to disable automatic followers for certain sims.`
                    ]
                }
            ],
            downloads: [
                {
                    site: `Sim File Share`,
                    link: `http://www.simfileshare.net/download/1930737/`,
                    hide: null
                },
                {
                    site: `Fast.io`,
                    link: `https://modsbyfrankkulak.imfast.io/Followers%20for%20Fame/`,
                    hide: `Sim File Share not working?`
                }
            ],
            video: null
        },
        languagebarriers: {
            game: 'ts4',
            id: 'languagebarriers',
            name: 'Language Barriers',
            developmentStage: Constants.developmentStage.wip,
            status: null,
            releaseDate: 'October 2020',
            beta: null,
            versionHistory: null,
            description: `A world where everyone speaks the same language is unrealistic. This mod adds new languages to the Sims universe, which introduces a unique challenge to the game.`,
            images: [
                'lb-1.png'
            ],
            details: [
                {
                    title: 'confirmed features',
                    bullets: [
                        `New language skills and traits associated with Selvadorada, Windenburg, Sulani, and Sixam.`,
                        `Native languages will be automatically assigned to Sims (children through elders) based on their home world, traits, and occult type.`,
                        `Toddlers' native language(s) will be determined when they age up into children. Any language skill at or above level 5 by the time they age up will become a native language. If they do not have any languages at this level, their highest language skill will be used instead. If they have no language skills, they will default to Simlish.`,
                        `Sims must have at least one native language, but you can add more if you'd like. You can edit any played sim's native language(s) by using the 'Languages...' interaction on a Sim.`,
                        `Learn other languages by practicing on Simlingo or speaking with other sims. Speaking with sims that speak another language will give you knowledge of their language, or you can explicitly ask them for help to gain the skill even faster.`,
                        `Speaking to sims with whom you do not share a native language can be frustrating - there's a chance of miscommunication, which may make your sim angry, embarrassed, or tense. The chance of miscommunicating in any particular language starts at 99% and decreases by 11% every time your sim increases their skill, making it 0% when they are level 10.`,
                        `An option to disable Language Barriers on a sim-by-sim basis, which will make them immune to miscommunication. Language Barriers is enabled for all sims by default, but can be toggled in the 'Languages...' pie menu option.`
                    ]
                },
                {
                    title: 'potential features',
                    bullets: [
                        `An optional add-on to use a language in a Base Game world so that players without the associated packs have a world that speaks another language (for example, the option to set Oasis Springs to speak Selvadoradian if you do not have Jungle Adventure).`,
                        `Majoring in a language at University, taking skill classes for languages, and/or reading textbooks to gain language skills.`,
                        `An optional add-on to restrict where sims will naturally spawn depending on their language skills (for example, Simlish speakers can spawn anywhere, but Selvadoradian speakers will mainly spawn in Selvadorada, but have a chance of also spawning in more diverse worlds like San Myshuno and Del Sol Valley).`
                    ]
                },
                {
                    title: 'notes',
                    bullets: [
                        `As this is a work-in-progress, more details are to come and they are all subject to change.`,
                        `I estimate that this mod will be ready for beta testing by the end of September. Feel free to <a href="https://discord.gg/qNhD3Jh" target="_blank">join my Discord server</a> if you would like to receive periodic updates on its status.`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The majority of this mod will work with the Base Game (i.e. you will still be able to study and speak Selvadoradian even if you do not have Jungle Adventure, but you of course will not have access to Selvadorada, which is where you would find all of the native Selvadoradian speakers).`
                    ]
                }
            ],
            downloads: null,
            video: null
        },
        simway: {
            game: 'ts4',
            id: 'simway',
            name: 'Simway (MLM Mod)',
            developmentStage: Constants.developmentStage.wip,
            status: null,
            releaseDate: null,
            lastUpdated: null,
            currentVersion: null,
            beta: null,
            versionHistory: null,
            description: `How would you like to be your own boss and set your own hours? Join Simway for just §500, and recruit other sims to make a profit! This mod adds MLMs (pyramid schemes) to the game.`,
            images: [
                'sw-1.png'
            ],
            details: [
                {
                    title: 'confirmed features',
                    bullets: [
                        `Be approached by existing MLM members through a phone call, text message, or knock on the door. They may try to sell products to you, recruit you, or both. You can disable this feature on a sim-by-sim basis.`,
                        `Join an MLM by accepting a recruiter's offer or by joining at a computer. To join, you need to pay a startup fee, and to remain in the MLM, you must pay a weekly fee and a portion of your profits.`,
                        `Make extra money by buying and selling inventory and recruiting other sims. You will get a percentage of their startup fee, as well as a portion of their sales.`,
                    ]
                },
                {
                    title: 'potential features',
                    bullets: [
                        `Host and attend selling parties to sell your own products or buy from others.`,
                        `Create your own MLM empire for the chance to make a fortune.`
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
                        `It is too early to tell, but hosting selling parties may require 'Get to Work'. I will aim to make it compatible with the Base Game, though.`,
                        `I am unsure how I will implement creating your own MLM, but my ideas right now may require one of 'Get to Work', 'Get Together', or 'Get Famous'. Again, I will aim to make it compatible with the Base Game, if possible.`,
                        `Any features that require a pack to work will come in the form of an optional add-on, so that those without the pack(s) can still enjoy the Base Game features of the mod.`
                    ]
                }
            ],
            downloads: null,
            video: null
        },
        buybitsandpieces: {
            game: 'ts4',
            id: 'buybitsandpieces',
            name: 'Buy Bits and Pieces',
            developmentStage: Constants.developmentStage.active,
            status: Constants.status.updated,
            releaseDate: `September 9, 2020`,
            beta: false,
            versionHistory: [
                {
                    version: '1.0.2',
                    date: 'September 12, 2020',
                    details: [
                        `Fix animation issue where a sim would pour fuel where they are standing rather than at the generator.`
                    ]
                },
                {
                    version: '1.0.1',
                    date: 'September 12, 2020',
                    details: [
                        `Fix file structure issue that may cause some errors on Windows installation.`,
                        `Provide Italian translation.`
                    ]
                },
                {
                    version: '1.0',
                    date: 'September 9, 2020',
                    details: [
                        `Initial release.`
                    ]
                }
            ],
            description: `Gathering bits and pieces by recycling materials can get repetitive and annoying. This mod allows you to buy them with simoleons instead, for those of you that don't like to use cheats.`,
            images: [
                'bbp-1.png',
                'bbp-2.png'
            ],
            details: [
                {
                    title: 'features',
                    bullets: [
                        `Click on any trash can to buy bits and pieces with simoleons (buy 10 for §100). Yeah, I know this is a little weird, but this is a game with aliens and sentient gnomes - I think we can let a trashcan storefront slide.`,
                        `Added an interaction to fill up the generator for §250 - no bits, pieces, or bio-fuel required!`
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `This mod requires the 'Eco Lifestyle' expansion pack.`
                    ]
                },
                {
                    title: 'translations',
                    bullets: [
                        `This mod is available in English and Italian. Other languages will appear in English.`
                    ]
                },
                {
                    title: 'known issues',
                    bullets: [
                        `When you buy bits and pieces, the text for the §100 charge will overlap the text for the 10 bit/piece credit. I am not sure if this is something I can fix, but I will look in to this as well.`
                    ]
                }
            ],
            downloads: [
                {
                    site: `Sim File Share`,
                    link: `http://www.simfileshare.net/download/2017359/`,
                    hide: null
                },
                {
                    site: `Fast.io`,
                    link: `https://modsbyfrankkulak.imfast.io/Buy%20Bits%20and%20Pieces/`,
                    hide: `Sim File Share not working?`
                }
            ],
            video: null
        },
    }
};