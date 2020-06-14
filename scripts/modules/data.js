const Data = (function () {
    return {
        ts4: [
            {
                id: 'justiceforcowplants',
                name: '#JusticeForCowplants',
                description: `Back in April, <a href="https://www.youtube.com/channel/UC_TYFButglZuuDbD-0Q_IzQ">lilsimsie</a> created the hashtag #JusticeForCowplants, pointing out that cowplants cannot be named. This mod fixes that - you can now name and rename cowplants to your heart's content.`,
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
                link: `https://drive.google.com/file/d/1U1PQFkSSrKFqI3_vv23r-4epc7U883ja/view?usp=sharing`
            }
        ]
    };
})();