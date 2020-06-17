// fixme : separate these into different files

const Util = (function () {
    function formatPackCompatability({requiredPacks}) {
        const packsCopy = requiredPacks.map(pack => `<span class="pack">${pack}</span>`);
        const packCount = packsCopy.length;

        let text;
        if (packCount === 0) {
            text = `<span class="pack">Base Game</span> compatible`;
        } else if (packCount === 1) {
            text = `${packsCopy[0]} required`;
        } else {
            const last = packsCopy.pop();
            const oxfordComma = (packCount === 2) ? '' : ',';
            text = `${packsCopy.join(", ")}${oxfordComma} and ${last} required`;
        }

        const style = (packCount === 0) ? 'base-game' : 'packs-required';
        return `<span class="${style}">${text}</span>`
    }

    return {
        formatPackCompatability: formatPackCompatability
    };
})();

const Constants = (function () {
    const success = 'status-success';
    const warning = 'status-warning';
    const danger = 'status-danger';

    return {
        status: {
            updated: 0,
            untested: 1,
            conflict: 2
        },
        statusClasses: [
            success,
            warning,
            danger
        ]
    };
})();

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
                        description: "A cowplant may turn into a pile of dirt when you move it in build mode, accompanied by a warning message if you have MC Command Center installed.",
                        fix: "An easy workaround is to move the cowplant again and it will go back to normal."
                    }
                ],
                requiredPacks: [],
                download: `https://drive.google.com/file/d/1-oohGmDyCA7dGZ4Xclolqjic7WtOZ3Qf/view?usp=sharing`,
                video: `https://youtu.be/tnvhvNxIETk`
            }
        }
    };
})();