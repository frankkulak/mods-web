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
            download: `http://www.simfileshare.net/download/1895244/`,
            video: `https://youtu.be/tnvhvNxIETk`
        },
    }
};