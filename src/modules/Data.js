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
        lastUpdate: "July 8, 2020"
    }
};

export const ModData = {
    ts4: {
        justiceforcowplants: {
            game: 'ts4',
            id: 'justiceforcowplants',
            name: '#JusticeForCowplants',
            status: Constants.status.updated,
            date: 'July 8, 2020',
            version: '1.0 beta 2',
            beta: true,
            versionDetails: [
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
            description: `This mod gives you the ability to name cowplants. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>'s hashtag on the gallery.`,
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
                    title: 'compatability',
                    bullets: [
                        `Base Game (no packs required).`,
                        `Avoid using with other mods that change cowplants in any way.`
                    ]
                },
                {
                    title: 'known issues',
                    bullets: [
                        `A cowplant may turn into a pile of dirt when you move it in build mode, accompanied by a warning message if you have MC Command Center installed. I am trying to fix this issue, but for now, <span class="highlight">an easy workaround is to move the cowplant again and it will go back to normal (and will still have its name)</span>.`
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
            status: Constants.status.updated,
            date: 'July 15, 2020',
            version: '1.0 beta 1',
            beta: true,
            versionDetails: [
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