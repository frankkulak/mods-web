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
        lastUpdate: "November 10, 2020"
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
            alternativeDownloads: [],
            translations: [
                {
                    language: `English`,
                    languageNativeName: `English`,
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
                    title: 'planned for v1.1',
                    bullets: [
                        `Console cheats to add, remove, or set a specific number of followers for any sim.`,
                        `Setting to disable automatic followers for particular sims.`,
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
            translations: [
                {
                    language: `English`,
                    languageNativeName: `English`,
                    translator: `Frankk`,
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
                    title: 'features',
                    bullets: [
                        `Six languages: Komorebigo, Selvadoradian, Simlish, Sixami, Toki Sulani, and Windenburgish.`,
                        `Native languages are assigned to sims (children and older) depending on their home world, traits, and occult type.`,
                        `Toddlers will acquire their native language(s) once they become children. The languages they acquire depends on which ones they have been exposed to while growing up.`,
                        `Sims can learn another language by using Simlingo, reading a textbook, or interacting with other sims who speak it.`,
                        `Communication between sims is limited when they do not share a language. New interactions unlock as you learn more of the other sim's language(s).`,
                        `Sims may miscommunicate when they do not share a language. This results in an embarrassed, angry, or tense moodlet that will get worse the more they talk.`,
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `This mod is completely compatible with the Base Game. This means that you can study and speak any of the languages, even if you do not have their associated packs.`,
                        `This mod does not override any files, so it <em>should</em> be safe to use with most other mods. However, if there are any other mods that alter the way that sims communicate, it may not play nicely with those.`,
                    ]
                },
                {
                    title: 'customization options',
                    bullets: [
                        `You can disable any of the languages that you don't want to play with.`,
                        `You can set any residential world to speak whatever language you wish.`,
                        `Sims spawn with random language skills, and you can fine-tune how this works.`,
                        `You can disable Language Barriers for any sim, and they'll be able to communicate like normal with anyone.`,
                        `Detailed instructions for how to do all of these can be found in the 'details' tab above.`,
                    ]
                },
                {
                    title: 'special thanks',
                    bullets: [
                        `This mod took a village to pull off, and it wouldn't have been possible without the help I received along the way. I want to give a very big thank you to some amazing people:`,
                        `<strong>MizoreYukii</strong>, who has helped me more times than I can count. I cannot even begin to list everything she's helped me with, or this thank you section would never end. Without her, I wouldn't have even been able to begin this mod.`,
                        `<strong>Basemental</strong>, who helped me figure out some of the more advanced concepts of scripting for The Sims 4, which made my code more concise and resilient to game patches, and even enable it to work with new items and CC.`,
                        `<strong>Lumpinou</strong> and <strong>Jamjars</strong>, who were always there to help me fix bugs and give me new ideas to work with.`,
                        `All of the translators who took the time to make this mod more accessible to those who do not speak English.`,
                        `And finally, to the members of my Discord server and anyone else who provided me with ideas, feedback, help, and encouragement along the way, thank you!`,
                    ]
                }
            ],
            details: [
                {
                    title: 'languages',
                    bullets: [
                        `<strong>Komorebigo</strong>: Everyone from Mt. Komorebi (except for aliens, mermaids, and islanders).`,
                        `<strong>Selvadoradian</strong>: Everyone from Selvadorada (except for aliens, mermaids, and islanders).`,
                        `<strong>Windenburgish</strong>: Everyone from Windenburg (except for aliens, mermaids, and islanders).`,
                        `<strong>Toki Sulani</strong>: Everyone from Sulani, all mermaids (regardless of where they live), and anyone with islander traits.`,
                        `<strong>Sixami</strong>: All aliens (regardless of where they live or which traits they have).`,
                        `<strong>Simlish</strong>: Default language for everyone else.`,
                    ]
                },
                {
                    title: 'native language traits',
                    bullets: [
                        `Each language has a native language trait. These traits are not chosen in CAS - they are automatically assigned to sims when they spawn in to the world.`,
                        `Sims must have at least one native language trait at all times, but you can change them or add more by using the 'Languages > Native Languages' pie menu option, or by using console cheats (described below).`,
                        `Learn how to configure worlds to use any native language you wish in the 'configuring world languages' section below.`,
                    ]
                },
                {
                    title: 'language skills',
                    bullets: [
                        `Each language has a skill. A sim may only learn a language skill if it is not their native language.`,
                        `You can study a language on Simlingo (computer/tablet), with a textbook, or by talking to a native speaker.`,
                        `By default, non-played sims have a chance of spawning with random language skills between levels 2 and 4. Their chance to speak another language depends on their age, native language(s), and home world. The languages they may speak are also determined by their own native language(s) and their home world.`,
                        `Learn how to configure automatic language skill assignment in the 'configuring random language skills' section below.`,
                    ]
                },
                {
                    title: 'language levels',
                    bullets: [
                        `'Language level' refers to a sim's knowledge of a language. If they are a native speaker, their level is 10, otherwise it is equivalent to whatever their skill level is.`,
                        `'Shared language level' refers to the highest language level that two sims have in common. For instance, if one sim is level 10 Simlish and level 3 Selvadoradian, and the other sim is level 10 Selvadoradian and level 5 Simlish, then their shared language skill is 5, because they both have at least a 5 in Simlish.`,
                    ]
                },
                {
                    title: 'toddler language acquisition',
                    bullets: [
                        `Babies and toddlers do not have native languages - they are acquired once they become a child.`,
                        `Toddlers pick up the language skills associated with the native languages of whomever speaks to them.`,
                        `Toddlers can use Simlingo Jr. on any tablet to learn languages that their parents cannot teach them.`,
                        `NPC toddlers will automatically be given their parents' native language(s) at level 3.`,
                        `When a toddler becomes a child, any languages at or above level 5 will be acquired as a native language. If there are no languages at this level, then their highest language will be used instead. If they have no language skills at all, then they will speak Simlish.`,
                    ]
                },
                {
                    title: 'limited interactions',
                    bullets: [
                        `Social interactions are extremely limited between two sims that have a shared language level of 1.`,
                        `At level 2, they unlock some more basic friendly interactions.`,
                        `At level 3, they unlock many more friendly and mean interactions.`,
                        `At level 4, they unlock all friendly and mean interactions, and some simple funny and mischief interactions.`,
                        `At level 5, they unlock all interactions, including funny, mischief, and romantic.`,
                        `If a sim has Language Barriers disabled, they will be able to communicate with everyone normally.`,
                        `This system will work with CC interactions only if they are in the friendly, funny, mischief, mean, or romance categories. If they are in their own CC categories, they will not be hidden. Reach out to me if you would like to see LB better integrated with another mod.`,
                    ]
                },
                {
                    title: 'miscommunication',
                    bullets: [
                        `There is a chance for sims to miscommunicate if their shared language level is below 10. The chance starts at 99% for level 1, and then decreases by 11% every level (88% for level 2, 77% for level 3, and so on).`,
                        `Miscommunication results in a +2 embarrassed, angry, or tense moodlet. If they keep talking, there is a chance that the moodlet will intensify to +4, and then to +8. Recall that <a href="https://sims-online.com/sims-4-death-guide-killing-your-sims/" target="_blank">+8 embarrassed and angry has a chance to kill your sim</a>. You can calm them down at a mirror to get rid of the +8 moodlet, or you can disable extreme emotions to avoid this situation.`,
                        `When a sim has a +8 miscommunication moodlet, they may only speak to sims with whom their shared language level is 10. Communication with everyone else will be severely limited, as if their shared level were 1.`,
                        `NPCs and children will never get a +8 moodlet from miscommunication - they will get at most a +4.`,
                        `If a sim has Language Barriers disabled, they will never miscommunicate with anyone.`,
                    ]
                },
                {
                    title: 'settings',
                    bullets: [
                        `If you do not want to run the chance of your sims dying from extreme emotions, then you can disable extreme emotions in the 'Languages' pie menu option. This will make miscommunication moodlets cap out at +4 for that sim (NOTE: If your sim already has a +8 moodlet and you disable extreme emotions, the moodlet will go away).`,
                        `You can disable Language Barriers for any sim by clicking on them and selecting the 'Languages' pie menu option. Disabling Language Barriers for a sim means that they will be able to communicate like normal and never experience miscommunication, regardless of their language skills.`,
                    ]
                },
                {
                    title: 'disabling languages',
                    bullets: [
                        `You can use the <code>[LANGUAGES]</code> section of the 'lb_settings.cfg' file to disable any languages that you don't want to play with.`,
                        `If the value is set to <code>True</code>, then the language will be enabled and function normally. If it is set to <code>False</code>, then the language will be disabled, which means that the game will ignore traits and occult types when assigning languages.`,
                        `If you want to also disable a language in terms of region, you must also change the value of its associated world in the <code>[REGIONS]</code> section (described below).`,
                        `If you've already played with the mod installed, you will have to run either the <code>fklb.reset</code> or <code>fklb.reset_all</code> cheat in order for your new settings to take effect. These settings are described in the 'console cheats' section below.`,
                        `<strong>Example</strong>: Want to get rid of Windenburgish? Set <code>Windenburgish = False</code> and <code>Windenburg = Simlish</code>`,
                        `<strong>Example</strong>: Want to get rid of Sixami? Just set <code>Sixami = False</code>`,
                    ]
                },
                {
                    title: 'configuring world languages',
                    bullets: [
                        `You can use the <code>[LANGUAGES]</code> section of the 'lb_settings.cfg' file to change the language that a particular world speaks.`,
                        `The valid languages are <code>Simlish</code>, <code>Selvadoradian</code>, <code>Windenburgish</code>, <code>Komorebigo</code>, <code>Toki Sulani</code>, and <code>Sixami</code>. Capitalization doesn't matter, but spelling does, so be sure you have it right.`,
                        `If changing the language for Mt. Komorebi, Windenburg, or Sulani, make sure you set those languages to <code>False</code> (described above), or else some sims in these worlds may still speak the default language.`,
                        `If you've already played with the mod installed, you will have to run either the <code>fklb.reset</code> or <code>fklb.reset_all</code> cheat in order for your new settings to take effect. These settings are described in the 'console cheats' section below.`,
                        `<strong>Example</strong>: Want to make sims from Oasis Springs speak Selvadoradian? Set <code>Oasis Springs = Selvadoradian</code>`
                    ]
                },
                {
                    title: 'configuring random language skills',
                    bullets: [
                        `You can use the <code>[RANDOM SKILLS]</code> section in the 'lb_settings.cfg' file to change the settings surrounding random language skill assignment.`,
                        `<code>Enabled</code>: If <code>True</code>, then language skills will be randomly assigned to sims. If <code>False</code>, then sims will not spawn with any language skills, and will instead just speak their native language.`,
                        `<code>Realistic</code>: If <code>True</code>, then the realistic algorithm described in the 'language skills' section will be used to determine who speaks what. If <code>False</code>, then language skill assignment will be entirely randomized, and equally probable for everyone.`,
                        `<code>Played sims</code>: If <code>True</code>, played sims will be assigned random language skills as well. If <code>False</code>, random language skills will only be applied to NPC sims.`,
                        `<code>Base chance</code>: The percent chance that a sim will have another language skill. This value must be an integer between 0 and 100. If using the realistic system, keep in mind that there are numerous multipliers that are used to determine which sims are going to be bilingual, so the actual percentage of bilingual sims is going to be higher than this base chance. I recommend sticking to a value between 5 and 15.`,
                        `<code>Max per sim</code>: The maximum number of language skills that a sim may spawn with. This must be between 1 and 4.`,
                    ]
                },
                {
                    title: 'console cheats',
                    bullets: [
                        `<code>fklb.add language first last</code>: Adds the given language to the named sim.`,
                        `<code>fklb.add_all language</code>: Adds the given language to all sims.`,
                        `<code>fklb.audit</code>: Outputs every sim and their assigned language(s) to LanguageBarriers.log. You can use it to review everyone's language(s) if you want.`,
                        `<code>fklb.enable first last</code>: Enables Language Barriers for the named sim.`,
                        `<code>fklb.enable_all</code>: Enables Language Barriers for all sims.`,
                        `<code>fklb.disable first last</code>: Disables Language Barriers for the named sim.`,
                        `<code>fklb.disable_all</code>: Disables Language Barriers for all sims.`,
                        `<code>fklb.remove language first last</code>: Removes the given language from the named sim.`,
                        `<code>fklb.reset language</code>: Identifies every sim that would speak the given language by default, and resets their native language traits. This can be used when a new language is added to the mod, and you want to make sure it is applied to all new sims, without affecting your existing sims. It can also be used when you've edited the [LANGUAGES] or [REGIONS] sections of the 'lb_settings.cfg' file for one language only.`,
                        `<code>fklb.reset_all</code>: Resets the native language of all sims to their default. This can be used to reset everyone's languages after you've modified the [LANGUAGES] or [REGIONS] sections of the 'lb_settings.cfg' file. Be advised that running this cheat will also reset any languages that you have manually added or removed to sims, as well as any languages that children have acquired. However, it will not affect their language skills.`,
                        `<code>fklb.reset_random_skills</code>: Resets the random skills that are assigned to sims by default. This can be run after changing the contents in the [RANDOM SKILLS] section of the 'lb_settings.cfg' file. Be advised that running this cheat will completely reset the language skills of any and all NPC sims, and will not affect played sims at all, even if you have the 'Played sims' setting set to True.`,
                        `<code>fklb.set_skill language level first last</code>: Sets the skill for the given language to the given level for the named sim.`,
                        `Valid values for <code>language</code> are <code>simlish</code>, <code>windenburgish</code>, <code>selvadoradian</code>, <code>tokisulani</code>, <code>komorebigo</code>, and <code>sixami</code>.`,
                        `Valid values for <code>level</code> are any integer values between 1 and 10.`,
                        `Replace <code>first last</code> with the name of whatever sim you want. If you omit the name, the cheat applies to the active sim instead. The name must be supplied in two tokens (which are separated by spaces). If your sim's name has a space in it, use a % and it will be understood as a space.`,
                        `<strong>Example</strong>: <code>fklb.add windenburgish bella goth</code> will make Bella Goth speak Windenburgish.`,
                        `<strong>Example</strong>: <code>fklb.remove tokisulani</code> will make the active sim no longer speak Toki Sulani.`,
                        `<strong>Example</strong>: <code>fklb.reset komorebigo</code> will reset the native languages of all sims that should speak Komorebigo, taking your custom settings into account.`,
                        `<strong>Example</strong>: <code>fklb.set_skill sixami 5 eliza pancakes</code> will make Eliza Pancakes speak Sixami at level 5.`,
                    ]
                },
            ],
            versionHistory: [
                {
                    version: '1.1',
                    date: 'November 13, 2020',
                    bullets: [
                        `Add the Komorebigo language for Mt. Komorebi.`,
                        `Add skill, trait, textbook, Simlingo interactions, social interactions, etc. for Komorebigo.`,
                        `Add option to disable any languages that aren't wanted.`,
                        `Add support for changing the language of Windenburg, Sulani, and Mt. Komorebi.`,
                        `Update all existing translations.`,
                        `Add Brazilian Portuguese translation (Proko).`,
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
                url: `http://www.simfileshare.net/download/2094858/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/1-5D1REN-nvr2Lld3Db-ffCNuDjKlxyK-?usp=sharing`
                },
            ],
            translations: [
                {
                    language: `English`,
                    languageNativeName: `English`,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: `Japanese`,
                    languageNativeName: `日本語`,
                    translator: `Maru`,
                    updated: true,
                },
                {
                    language: `Korean`,
                    languageNativeName: `한국어`,
                    translator: `SHUSHU`,
                    updated: true,
                },
                {
                    language: `French`,
                    languageNativeName: `Français`,
                    translator: `Syngo9 and <a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: `Spanish`,
                    languageNativeName: `Español`,
                    translator: `GeoSims`,
                    updated: false,
                },
                {
                    language: `Chinese (Simplified)`,
                    languageNativeName: `简体中文`,
                    translator: `GreenOnionC`,
                    updated: false,
                },
                {
                    language: `Portuguese (Brazil)`,
                    languageNativeName: `Português do Brasil`,
                    translator: `Proko`,
                    updated: true,
                },
            ]
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
            alternativeDownloads: [],
            translations: []
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
            translations: [
                {
                    language: `English`,
                    languageNativeName: `English`,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: `Italian`,
                    languageNativeName: `Italiano`,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: `French`,
                    languageNativeName: `Français`,
                    translator: `<a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: `Chinese (Simplified)`,
                    languageNativeName: `简体中文`,
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
            releaseDate: 'October 6, 2020',
            description: `Can't find your sim's notebook? Well, now you can do their homework at any computer or laptop. This mod currently only works for university students.`,
            thumbnail: 'oh-thumbnail.png',
            images: [
                'oh-thumbnail.png',
            ],
            videoUrl: null,
            overview: [
                {
                    title: 'features',
                    bullets: [
                        `Do your university homework at any computer or laptop.`,
                    ]
                },
                {
                    title: 'compatability',
                    bullets: [
                        `The Discover University expansion pack is required.`,
                        `This mod does not override any files, so it should be safe to use with any other mods.`,
                    ]
                },
            ],
            details: [
                {
                    title: 'doing homework at the computer',
                    bullets: [
                        `Click on any computer or laptop and go the 'University > University Coursework > Do Homework' pie menu option to do your homework. This works with (most) CC computers!`,
                        `You can only do your own homework at the computer, not homework for others.`,
                        `This feature is currently only available for university students.`,
                    ]
                },
                {
                    title: 'future plans',
                    bullets: [
                        `I will soon expand this mod to work for children and teens as well.`,
                        `When I add functionality for children and teens, I will make university homework an add-on so that Discover university is no longer required for the mod to work.`,
                        `I do not plan on adding the ability to do other's homework at the computer. That would be tricky because the way that that works is because the notebooks are owned by certain sims, but computers are not. If someone <em>really</em> wants this feature added, reach out to me on Discord and I will see what I can do.`,
                    ]
                },
            ],
            versionHistory: [
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
            translations: [
                {
                    language: `English`,
                    languageNativeName: `English`,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: `Italian`,
                    languageNativeName: `Italiano`,
                    translator: `Frankk`,
                    updated: true,
                },
                {
                    language: `French`,
                    languageNativeName: `Français`,
                    translator: `<a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: `Chinese (Simplified)`,
                    languageNativeName: `简体中文`,
                    translator: `MuMu`,
                    updated: true,
                },
            ]
        },
    }
};