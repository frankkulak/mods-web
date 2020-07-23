export const Constants = {
    status: {
        updated: 0,
        untested: 1,
        conflict: 2
    }
};

export const GameData = {
    ts4: {
        name: "The Sims 4",
        lastUpdate: "July 23, 2020"
    }
};

export const ModData = {
    ts4: {
        nameablecowplants: {
            game: 'ts4',
            id: 'nameablecowplants',
            name: 'Nameable Cowplants',
            retired: true,
            status: Constants.status.conflict,
            date: 'July 16, 2020',
            version: '1.0 beta 3',
            beta: true,
            versionDetails: [
                {
                    id: '1.0 beta 3',
                    date: 'July 16, 2020',
                    details: [
                        'Change name from #JusticeToCowplants to Nameable Cowplants to avoid confusion with another mod by the same name.'
                    ]
                },
                {
                    id: '1.0 beta 2',
                    date: 'July 8, 2020',
                    details: [
                        `Added cowplant's name to each interaction.`,
                        `Added a tooltip with the cowplant's name and plant quality.`
                    ]
                },
                {
                    id: '1.0 beta 1',
                    date: 'June 13, 2020',
                    details: [
                        'Added ability to name cowplants.'
                    ]
                }
            ],
            description: `This mod gives you the ability to name cowplants. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>.`,
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
                        `<span class="important">This mod has been retired, and should no longer be used.</span> As of the Nifty Knitting patch (July 23, 2020), cowplants are nameable in the base game. This page only serves as an example of my previous work.`
                    ]
                }
            ],
            installInstructions: [
                'Download the .zip folder from the link below.',
                'Unzip the folder and place it in your "The Sims 4 > Mods" directory.',
                'Make sure that your "Game Options > Other > Enable Custom Content and Mods" setting is enabled before use.'
            ],
            download: `http://www.simfileshare.net/download/1895244/`,
            video: `https://youtu.be/tnvhvNxIETk`
        },
        followersforfame: {
            game: 'ts4',
            id: 'followersforfame',
            name: 'Followers for Fame',
            retired: false,
            status: Constants.status.untested,
            date: 'July 16, 2020',
            version: '1.0 beta 2',
            beta: true,
            versionDetails: [
                {
                    id: '1.0 beta 2',
                    date: 'July 16, 2020',
                    details: [
                        `Added string tables for non-English languages.`
                    ]
                },
                {
                    id: '1.0 beta 1',
                    date: 'July 15, 2020',
                    details: [
                        `Added automatic follower gains for the following interactions: selling a painting or photo, making an app or game, licensing a song or lyrics, publishing a book, being nominated for and accepting an award, completing a work day as an actor, ranking up as a celebrity, and getting positive PR.`,
                        `Added automatic follower losses for the following interactions: ranking down as a celebrity and getting bad PR.`,
                        `Added debug cheats to quickly increase or decrease your follower count.`
                    ]
                }
            ],
            description: `Can you really call yourself a 'Global Superstar' when you only have 32 followers on Simstagram? This mod automatically gives your sim followers whenever they complete fame-gaining actions.`,
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
                        `Automatically earn followers when you complete fame-gaining interactions. These interactions include selling paintings, making apps, licensing songs, publishing books, doing an acting gig, and so much more.`,
                        `Earn a whole bunch of followers when your fame rank increases, and lose some of them if it ever goes down.`,
                        `Earn some followers for getting good PR, and lose some for getting bad PR.`,
                        `Use debug cheats to easily add and remove followers. To access them, first enable testing cheats with the command 'testingcheats on', then shift-click your sim and navigate to the 'Follower Cheats' option.`
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
                        `Get Famous is required.`
                    ]
                },
                {
                    title: 'future plans',
                    bullets: [
                        `Automatic follower gains for some careers, performing live, and boosts in reputation.`,
                        `Automatic follower losses for hits to reputation.`,
                        `Periodic, random follower gains and losses for all celebrity sims.`,
                        `More text variations for each follower gain/loss notification.`
                    ]
                }
            ],
            installInstructions: [
                'Download the .zip folder from the link below.',
                'Unzip the folder and place it in your "The Sims 4 > Mods" directory.',
                'Make sure that your "Game Options > Other > Enable Custom Content and Mods" setting is enabled before use.'
            ],
            download: 'http://www.simfileshare.net/download/1930737/',
            video: null
        }
    }
};