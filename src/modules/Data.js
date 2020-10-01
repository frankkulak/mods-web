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
                        `Automatically earn followers when you sell paintings, license songs, publish books, perform acting gigs, or pretty much anything else that earn you fame.`,
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
                        `Interactions that add followers: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for an award, accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR through the PR agency.`,
                        `Interactions that remove followers: ranking down as a celebrity and getting bad PR through the PR agency.`,
                        `Exact amounts for follower gains/losses are heavily influenced by both the type of interaction and your sim's current fame rank. For example, a non-famous sim selling a painting is going to earn much less followers than a 5-star celebrity selling a painting, and both of those sims would earn significantly less than a 5-star celebrity acting in a movie or licensing a song.`,
                    ]
                },
                {
                    title: 'followers cheats',
                    bullets: [
                        `Enable testing cheats with the command <code>testingcheats on</code>, then shift-click your sim and use the 'Follower Cheats' option to add or remove followers.`,
                        `Follower cheats are available in 6 tiers: Tiny, Small, Medium, Large, Huge, Epic. These tiers correspond to those that are used by specific interactions behind the scenes. They are in order from least to most significant, and the exact amount of followers they add/remove depends on the sim's fame rank.`,
                    ]
                },
                {
                    title: 'planned for version 1.1',
                    bullets: [
                        `Console cheats to add, remove, or set a specific number of followers for any sim.`,
                        `Automatic follower gains for more careers and when you gain reputation.`,
                        `Automatic follower losses when you lose reputation.`,
                        `Periodic, random follower gains and losses for celebrity sims.`,
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
                    title: 'features',
                    bullets: [
                        `Five languages for your sims to learn: Selvadoradian, Windenburgish, Toki Sulani, Sixami, and Simlish.`,
                        `Native languages are assigned to sims (children and older) depending on their home world, traits, and occult type.`,
                        `Toddlers will acquire their native language(s) once they become children. The languages they acquire depends on which ones they have been exposed to.`,
                        `Sims can learn another language by using Simlingo, reading a textbook, or interacting with other sims who speak it.`,
                        `Sims may miscommunicate when they do not share a language. This results in an embarrassed, angry, or tense moodlet that will get worse the more you talk.`,
                    ]
                },
                {
                    title: 'customization',
                    bullets: [
                        `You can make sims from any residential world speak whatever language you wish. This is a great option for players without any of the associated packs. Instructions for this can be found in the 'details' tab above, or in the 'README.txt' file that comes with the download.`,
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `This mod is completely compatible with the Base Game. This means that you can study and speak any of the languages, even if you do not have their associated packs.`,
                        `This mod does not override any files, so it <em>should</em> be safe to use with most other mods. However, if there are any other mods that alter the way that sims communicate, it may not play nicely with those.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'languages',
                    bullets: [
                        `Selvadoradian: Everyone from Selvadorada (except for aliens and mermaids).`,
                        `Windenburgish: Everyone from Windenburg (except for aliens and mermaids).`,
                        `Toki Sulani: Everyone from Sulani (except for aliens), all mermaids (regardless of where they live), and anyone with an islander trait (except for aliens and sims from Selvadorada or Windenburg).`,
                        `Sixami: All aliens (regardless of where they live).`,
                        `Simlish: Default language for everyone else.`,
                    ]
                },
                {
                    title: 'native language traits',
                    bullets: [
                        `Each language has a native language trait. These traits are hidden, which means you will not see them in CAS or in your sim's info panel.`,
                        `Sims must have at least one native language trait at all times, but you can add more if you want to.`,
                        `Native languages are automatically assigned to sims who are a child or older. The language that is assigned is dictated by the rules mentioned in the 'languages' section above.`,
                        `If you want to change a sim's native language(s), you can do so by clicking on them and selecting the 'Languages > Native Languages' pie menu option, or by using console cheats.`,
                    ]
                },
                {
                    title: 'language skills',
                    bullets: [
                        `Each language has a skill. You may only learn a language skill if it is not your native language.`,
                        `If you are a native speaker of a language, the game treats your skill level in that language as 10.`,
                        `You can study a language on Simlingo (at the computer or tablet), reading its textbook, or talking to someone who speaks it natively.`,
                    ]
                },
                {
                    title: 'toddler language acquisition',
                    bullets: [
                        `Babies and toddlers do not have native languages. A sim acquires their native language(s) once they become a child.`,
                        `Toddlers will pick up the language skills associated with the native languages of whomever speaks to them.`,
                        `Toddlers can use Simlingo Jr. on a tablet to learn other languages that their parents cannot teach them.`,
                        `When a toddler becomes a child, any languages at or above level 5 will be acquired as a native language. If there are no languages at this level, then their highest language will be used. If they have no language skills at all, then they will speak Simlish.`,
                    ]
                },
                {
                    title: 'miscommunication',
                    bullets: [
                        `There is a chance for sims to miscommunicate if they do not share a language. This chance is inversely related to the sims' highest shared language skill. For instance, if their highest shared skill is 1, the chance is 99%. Once it becomes 2, the chance is 88%, and so on.`,
                        `If both sims are level 10 (native speaker = level 10) in the same language, or if either sim is not yet a child or has Language Barriers disabled, then they will not miscommunicate.`,
                        `When miscommunication occurs, the sim will gain a +2 embarrassed, angry, or tense moodlet. Each time after that, there is a 33% chance that the moodlet will intensify to +4. After that, there is a 25% chance it will intensify to +8 (only for embarrassed and angry). Note that +8 embarrassed and angry each have a chance of killing your sim (that wasn't me, that's in the base game - I'm just taking advantage of it).`,
                        `NPCs and children will never get a +8 moodlet from miscommunication. This is to prevent these sims from dying due to extreme emotions. So, the only sims who are at risk are the teenagers and older sims in your active household.`,
                        `If you do not want to run the chance of your sims dying, then you can disable extreme emotions in the 'Languages...' pie menu option.`,
                        `You can disable Language Barriers for any sim by clicking on them and selecting the 'Languages...' pie menu option. Disabling Language Barriers for a sim will make their chance of miscommunication always be 0%.`,
                    ]
                },
                {
                    title: 'interactions',
                    bullets: [
                        `Ask for Help (friendly): Available for non-natives (skill level 1-9) talking to natives.`,
                        `Try Speaking (friendly): Available for non-natives (skill level 2-9) talking to natives.`,
                        `Recite Joke (funny): Available for non-natives (skill level 3+) talking to natives.`,
                        `Make Suggestive Comment (romance): Available for non-natives (skill level 3+) speaking to natives.`,
                        `Mock Accent (mean): Available for non-natives speaking to natives.`,
                        `Give Fake Translation (mischief): Available for natives speaking to non-natives.`,
                    ]
                },
                {
                    title: 'configuring world languages',
                    bullets: [
                        `You can use the 'lb_settings.cfg' file to change the language that sims from any world use.`,
                        `Open the file in any text editor, and change the language for whichever world you want. For example, to make sims from Oasis Springs speak Selvadoradian, change <code>Oasis Springs = Simlish</code> to <code>Oasis Springs = Selvadoradian</code>.`,
                        `The valid languages are <code>Simlish</code>, <code>Selvadoradian</code>, <code>Windenburgish</code>, <code>Toki Sulani</code>, and <code>Sixami</code>. Capitalization and spaces don't matter, but spelling does, so be sure you have it right.`,
                        `If you've already played the game with Language Barriers installed, you will have to run the <code>fklb.reset_all</code> cheat (described below) in order for your new settings take effect. If you do not run this cheat, then sims who have already spawned into the world will continue to speak their world's previous default language.`,
                    ]
                },
                {
                    title: 'console cheats',
                    bullets: [
                        `<code>fklb.reset_all</code>: Sets the native language of all sims to their default. This can be used to reset everyone's languages after you've modified the 'lb_settings.cfg' file. Be advised that running this cheat will also reset any languages that you have manually added or removed to sims, as well as any languages that children have acquired.`,
                        `<code>fklb.set_all language</code>: Forces every sim to only speak the specified language.`,
                        `<code>fklb.audit</code>: Outputs every sim and their assigned language(s) to LanguageBarriers.log. This is probably not useful to you, as I use it mainly for testing and debugging, but you can check it out if you want.`,
                        `<code>fklb.enable first last</code>: Enables Language Barriers for the sim with the given name.`,
                        `<code>fklb.disable first last</code>: Disables Language Barriers for the sim with the given name.`,
                        `<code>fklb.add language first last</code>: Adds the specified language to the sim with the given name.`,
                        `<code>fklb.remove language first last</code>: Removes the specified language from the sim with the given name.`,
                        `Valid values for <code>language</code> are <code>simlish</code>, <code>windenburgish</code>, <code>selvadoradian</code>, <code>tokisulani</code>, and <code>sixami</code>.`,
                        `Replace <code>first last</code> with the name of whatever sim you want. If you omit the name, the cheat applies to the active sim.`,
                        `Example: <code>fklb.add windenburgish bella goth</code> will make Bella Goth speak Windenburgish.`,
                        `Example: <code>fklb.remove tokisulani</code> will make the active sim no longer speak Toki Sulani.`,
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
                {
                    title: 'known issues',
                    bullets: [
                        `When you buy bits and pieces, the text for the §100 charge will overlap the text for the 10 bit/piece credit. I am not sure if this is something I can fix, as it is just an issue with the UI, but I will look into it and try to figure something out.`,
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