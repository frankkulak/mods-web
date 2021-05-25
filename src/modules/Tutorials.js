export const TutorialCategoryData = {
    ts4: {
        languagebarriers: [
            'lbconfig',
        ],
        scripting: [
            'autotraits',
            'customtests',
            'injectbysa',
        ]
    }
};

export const TutorialData = {
    ts4: {
        lbconfig: {
            id: 'lbconfig',
            name: 'Customize LB with lb_settings',
            description: `Learn how to make basic customizations for <em>Language Barriers</em> using the provided config file. This tutorial assumes absolutely no knowledge of modding, and just requires you to use a text editor.`,
            platform: 'Patreon',
            link: 'https://www.patreon.com/posts/50945227'
        },
        autotraits: {
            id: 'autotraits',
            name: 'Auto-Assign Traits to All Sims',
            description: `Learn how to automatically assign traits from your mod to every sim in the game. Example use: <em>Language Barriers</em> adds language traits to all human sims older than toddlers.`,
            platform: 'Medium',
            link: 'https://frankkmods.medium.com/automatically-assign-traits-to-sims-sims-4-script-modding-60f8eeb2a08c'
        },
        customtests: {
            id: 'customtests',
            name: 'Custom Tuning Tests',
            description: `Learn how to create your own custom tuning tests with a script. Example use: <em>Pack Tests</em> adds a test that can check whether certain packs are installed or not.`,
            platform: 'Medium',
            link: 'https://frankkmods.medium.com/custom-tuning-tests-sims-4-script-modding-3837e214fb68'
        },
        injectbysa: {
            id: 'injectbysa',
            name: 'Inject by Super Affordance',
            description: `Learn how to add your interactions to all objects in that game that have a particular super affordance. Example use: <em>Online Homework</em> adds homework interactions to all objects with the 'computer locking' affordance, making them available on all laptops and computers.`,
            platform: 'Sims 4 Studio',
            link: 'https://sims4studio.com/thread/22556/inject-interactions-super-affordance'
        }
    }
};