const Constants = (function () {
    return {
        status: {
            updated: 0,
            beta: 1,
            untested: 2,
            conflict: 3
        }
    };
})();

const Data = (function () {
    return {
        ts4: [
            {
                id: 'justiceforcowplants',
                name: '#JusticeForCowplants',
                date: 'June 13, 2020',
                version: '1.0',
                status: Constants.status.beta,
                description: `This mod lets you name cowplants. It was inspired by <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a>'s #JusticeForCowplants campaign on the gallery.`,
                images: [
                    '1.png',
                    '2.png'
                ],
                features: [
                    "Give names to cowplants"
                ],
                issues: [
                    {
                        description: "A cowplant may turn into a pile of dirt when you move it in build mode, accompanied by a warning message if you have MC Command Center installed.",
                        fix: "An easy workaround is to simply move the pile of dirt again and the cowplant will go back to normal."
                    }
                ],
                requiredPacks: [],
                download: `https://drive.google.com/file/d/1-oohGmDyCA7dGZ4Xclolqjic7WtOZ3Qf/view?usp=sharing`,
                video: `https://youtu.be/tnvhvNxIETk`
            }
        ]
    };
})();