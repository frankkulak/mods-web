const Data = (function () {
    return {
        ts4: {
            justiceforcowplants: {
                game: 'ts4',
                id: 'justiceforcowplants',
                name: '#JusticeForCowplants',
                date: 'June 13, 2020',
                version: '1.0',
                beta: true,
                status: Constants.status.updated,
                description: `This mod gives you the ability to name cowplants. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>'s hashtag on the gallery.`,
                images: [
                    'jfcp-1.png',
                    'jfcp-2.png'
                ],
                features: [
                    "Click on a cowplant to give it a name."
                ],
                issues: [
                    {
                        description: "A cowplant may turn into a pile of dirt when you move it in build mode, accompanied by a warning message if you have MC Command Center installed. I am trying to fix this issue, but for now,",
                        fix: "an easy workaround is to move the cowplant again and it will go back to normal (and will still have its name)."
                    }
                ],
                requiredPacks: [],
                download: `https://drive.google.com/file/d/1-oohGmDyCA7dGZ4Xclolqjic7WtOZ3Qf/view?usp=sharing`,
                video: `https://youtu.be/tnvhvNxIETk`
            }
        }
    };
})();