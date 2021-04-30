export const DataEnums = {
    developmentStage: {
        wip: 0,
        active: 1,
        retired: 2,
        tool: 3,
        early: 4,
    },
    testingStatus: {
        unreleased: 0,
        beta: 1,
        working: 2,
        untested: 3,
        broken: 4,
    },
};

export const Languages = {
    cht_cn: {
        id: 'chinese',
        display: '简体中文',
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
};


export const GameData = {
    ts4: {
        name: "The Sims 4",
        lastUpdate: "April 27, 2021"
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
                    translator: `<a href="https://www.instagram.com/ossqarr/" target="_blank">Osqar</a>`,
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
                        `You can prevent sims from spawning with any languages you don't want to play with.`,
                        `You can set any residential world to speak whatever language you wish.`,
                        `Some sims spawn with random language skills, and you can fine-tune how this works.`,
                        `You can change the skill level required for toddlers to acquire a language natively.`,
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
                        `<strong>Komorebigo</strong>: Everyone from Mt. Komorebi (except for aliens & mermaids).`,
                        `<strong>Selvadoradian</strong>: Everyone from Selvadorada (except for aliens & mermaids).`,
                        `<strong>Windenburgish</strong>: Everyone from Windenburg (except for aliens & mermaids).`,
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
                        `When a toddler becomes a child, any languages at or above a certain threshold will be acquired as a native language. By default, this threshold is equal to 5, but you can modify this in lb_settings.cfg (learn how in the 'configuring language acquisition' section below). If there are no languages at this level, then their highest language will be used instead. If they have no language skills at all, then they will speak Simlish.`,
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
                    title: 'integrated mods (so far)',
                    bullets: [
                        `<strong>SimDa Dating App by LittleMsSam</strong> (<a href="https://littlemssam.tumblr.com/post/175413426238/simda-dating-app-simda-dating-app-can-help-you" target="_blank">info + download</a>): Sims can participate in a one night stand even if they have not unlocked romance interactions yet.`
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
                        `If the value is set to <code>True</code>, then the language will be enabled and function normally. If it is set to <code>False</code>, then the language will be disabled, which means that the game will ignore traits and occult types when assigning it to sims.`,
                        `If you want to also disable a language in terms of region, you must also change the value of its associated world in the <code>[REGIONS]</code> section (described below).`,
                        `If you've already played with the mod installed, you will have to run either the <code>fklb.reset</code> or <code>fklb.reset_all</code> cheat in order for your new settings to take effect. These cheats are described in the 'console cheats' section below.`,
                        `<strong>Example</strong>: Want to get rid of Windenburgish? Set <code>Windenburgish = False</code> and <code>Windenburg = Simlish</code>`,
                        `<strong>Example</strong>: Want to get rid of Sixami? Just set <code>Sixami = False</code>`,
                    ]
                },
                {
                    title: 'configuring world languages',
                    bullets: [
                        `You can use the <code>[REGIONS]</code> section of the 'lb_settings.cfg' file to change the language that a particular world speaks.`,
                        `The valid languages are <code>Simlish</code>, <code>Selvadoradian</code>, <code>Windenburgish</code>, <code>Komorebigo</code>, <code>Toki Sulani</code>, and <code>Sixami</code>. Capitalization doesn't matter, but spelling does, so be sure you have it right.`,
                        `If changing the language for Mt. Komorebi, Windenburg, or Sulani, make sure you set those languages to <code>False</code> (described in 'disabling languages' above), or else some sims in these worlds may still speak the default language.`,
                        `If you've already played with the mod installed, you will have to run either the <code>fklb.reset</code> or <code>fklb.reset_all</code> cheat in order for your new settings to take effect. These cheats are described in the 'console cheats' section below.`,
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
                    title: 'configuring language acquisition',
                    bullets: [
                        `You can use the <code>[ACQUISITION]</code> section in the 'lb_settings.cfg' file to set the skill level at which you would like children to acquire languages natively.`,
                        `<code>Skill threshold</code>: When a toddler becomes a child, they will acquire all languages at or above this level natively. If no languages are at this level, they will just acquire their highest language instead. This must be an integer between 2 and 10.`
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
            faqs: [
                {
                    title: 'Do the languages sound different when spoken?',
                    bullets: [
                        'No, and they probably never will - I do not think this is something that is possible.'
                    ]
                },
                {
                    title: 'Can you add [insert real language here]?',
                    bullets: [
                        `No, I do not add real languages. Adding real languages to the mod would break the immersion of the game, and risk misrepresenting real people and their cultures. Additionally, since I cannot add every language, it would be unfair for me to add one and not others.`,
                        //`If curious about this <a href="https://www.youtube.com" target="_blank">Buzzfeed video</a> where Language Barriers appears to include Spanish, it is because they are using a version of the mod which I made specifically for them, in which I replaced all mentions of "Selvadoradian" with "Spanish", and replaced the icon with the Cuban flag. This is because the topic of their video was to restyle Newcrest as Havana. This version is not available for download.`
                    ]
                },
                {
                    title: 'Can you add language classes/learning a language at school?',
                    bullets: [
                        `Yes, this is planned and in early development. It will be part of a major update focused on education and careers (plus some other goodies).`,
                        `There is no confirmed release date for this yet, but it will likely come around Summer 2021, and will be available to Patrons 2 weeks early.`
                    ]
                },
                {
                    title: `Why can't I set the language for destination worlds?`,
                    bullets: [
                        `Destination worlds do not work with the way that I currently assign languages to sims, because no one technically lives there. If EA ever makes destination worlds livable, I will allow you to customize them.`,
                        `If you're wondering how Selvadoradian works with a destination world, it's because Maxis assigns all sims from Selvadorada a special trait that I can use to identify them as Selvadoradian speakers. The same cannot be said for Granite Falls and Batuu.`
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
                        `Currently, no. But I am looking into it and aiming to get it in for the next update.`
                    ]
                },
                {
                    title: 'Can you add a language for spellcasters/vampires?',
                    bullets: [
                        `This is planned for the future, but will work a bit differently. Spellcasters/vampires will still have their primary native language(s), and the occult languages will be minor skills that can be used to cast spells, read tomes, etc.`,
                        `This is likely at least two major updates away from being added.`
                    ]
                },
                {
                    title: 'Can you make Sixami more exclusive (i.e. remove the Sixami Simlingo/textbook interactions)?',
                    bullets: [
                        `I can understand why you'd want this if you gravitate towards realistic gameplay, but I will not remove any features that have already been added. I am, however, considering an add-on or setting that would be able to disable this, but I'm not sure how that would work yet.`
                    ]
                },
            ],
            versionHistory: [
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
                url: `http://www.simfileshare.net/download/2094858/`
            },
            alternativeDownloads: [
                {
                    title: `Google Drive`,
                    url: `https://drive.google.com/drive/folders/1-5D1REN-nvr2Lld3Db-ffCNuDjKlxyK-?usp=sharing`
                },
            ],
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
                    updated: true,
                },
                {
                    language: Languages.fre_fr,
                    translator: `Syngo9 and <a href="https://modsims4.fr/" target="_blank">Kimikosoma</a>`,
                    updated: true,
                },
                {
                    language: Languages.spa_es,
                    translator: `<a href="https://geosims.wixsite.com/geosimscr/mods-traducidos" target="_blank">GeoSims</a>`,
                    updated: true,
                },
                {
                    language: Languages.cht_cn,
                    translator: `GreenOnionC`,
                    updated: true,
                },
                {
                    language: Languages.por_br,
                    translator: `AnayramProko`,
                    updated: true,
                },
                {
                    language: Languages.pol_pl,
                    translator: `<a href="https://www.instagram.com/ossqarr/" target="_blank">Osqar</a>`,
                    updated: true,
                },
                {
                    language: Languages.ita_it,
                    translator: `Alex`,
                    updated: true,
                },
                {
                    language: Languages.ger_de,
                    translator: `Leia and Possum`,
                    updated: true,
                },
                {
                    language: Languages.rus_ru,
                    translator: `Raitowaka, Luluuluru, and Trail_of_blood`,
                    updated: true,
                },
                {
                    language: Languages.dut_nl,
                    translator: `SPaauw`,
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
            releaseDate: 'Summer 2021',
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
            releaseDate: 'January 4, 2021',
            description: `If you ever need to test whether your users have a particular pack installed or not, this script will allow you to do so directly in tuning - no scripting abilities required!`,
            thumbnail: null,
            images: [],
            videoUrl: null,
            overview: [
                {
                    title: 'what does this mod do?',
                    bullets: [
                        `This mod adds nothing to your game - all it does is make it easier for modders to check whether or not you have certain packs installed. There are many reasons why they may need to do this, but most likely they are trying to integrate their mod with certain packs while also keeping it Base Game compatible.`,
                    ]
                },
                {
                    title: 'should I install this mod?',
                    bullets: [
                        `You only have to install this mod if you have been instructed to do so by another creator.`,
                        `If you have already installed this mod once, do NOT install it again. You only need one copy of it in your game, and it will work for every mod that requires it.`
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
            warning: `If you have already installed this mod once, do NOT install it again. You only need one copy of it in your game, and it will work for every mod that requires it.`,
            hasStrings: false,
            translations: []
        },
    }
};

export const TutorialData = {
    ts4: {
        autotraits: {
            id: 'autotraits',
            name: 'Auto-Assign Traits to All Sims',
            description: `This tutorial will show you how you can automatically assign traits from your mod to every sim in the game. An example use case is in my <em>Language Barriers</em> mod, where I automatically assign language traits to every sim that is a child or older.`,
            platform: 'Sims 4 Studio',
            link: 'https://sims4studio.com/thread/22036/automatically-add-traits-all-sims'
        },
        customtests: {
            id: 'customtests',
            name: 'Custom Tuning Tests',
            description: `This tutorial will show you how you can create your own custom tuning tests with a script, so that you can use them in test sets. An example use case of this is my <em>Pack Tests</em> modding tool, which allows modders to write tests that check whether certain packs are installed or not.`,
            platform: 'Sims 4 Studio',
            link: 'https://sims4studio.com/thread/22471/create-custom-tuning-tests'
        },
        injectbysa: {
            id: 'injectbysa',
            name: 'Inject by Super Affordance',
            description: `This tutorial demonstrates how you can inject your interactions to every single object in that game that has a particular super affordance. An example use case of this is in my <em>Online Homework</em> mod, where I add my homework interactions to every object that has the 'Lock Computer' interaction, so that it effectively becomes available on every computer and laptop.`,
            platform: 'Sims 4 Studio',
            link: 'https://sims4studio.com/thread/22556/inject-interactions-super-affordance'
        }
    }
};