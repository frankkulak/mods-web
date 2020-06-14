const Data = (function () {
    return {
        ts4: [
            {
                id: 'justiceforcowplants',
                name: '#JusticeForCowplants',
                description: `Back in April, <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ" target="_blank">lilsimsie</a> created the hashtag #JusticeForCowplants to point out that cowplants cannot be named. She mentioned it again in a <a href="https://youtu.be/Bpb0BhJ4Bng" target="_blank">recent video</a> of hers, so I decided to fix it. With this mod, you can now name and rename cowplants to your heart's content.`,
                // fixme : get rid of this images field, it's just a hack to get it to work for now
                images: [
                    '1.png',
                    '2.png',
                    '3.png'
                ],
                date: 'June 13, 2020',
                version: '1.0 beta',
                baseGameCompatible: true,
                recommendedPacks: [],
                requiredPacks: [],
                features: [
                    {
                        headline: 'Give cowplants names',
                        description: "Yeah, that's all there is to it. You now have the option to name cowplants."
                    }
                ],
                bugs: [
                    {
                        headline: 'Moving cowplant in build mode',
                        description: "A cowplant may turn into a pile of dirt when you move it in build mode, accompanied by a warning message if you have MC Command Center installed.",
                        workaround: "An easy workaround is to simply move the pile of dirt again and the cowplant will go back to normal.",
                        priority: "Note that the warning is just for a rendering issue in build mode - it has no effect on gameplay. I am still trying to fix this, though."
                    }
                ],
                download: `https://drive.google.com/file/d/1-oohGmDyCA7dGZ4Xclolqjic7WtOZ3Qf/view?usp=sharing`,
                video: `https://youtu.be/tnvhvNxIETk`
            }
        ]
    };
})();