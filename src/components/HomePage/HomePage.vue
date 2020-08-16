<template>
    <b-container id="home-page" fluid>
        <b-row id="welcome" align-h="center">
            <b-col cols="12" md="10" lg="8">
                <h1>welcome</h1>
                <p>I'm Frank, and I make mods for The Sims 4 - you can browse and download them from below. Please
                    report bugs and direct questions to <a href="mailto:mods@frankkulak.com">mods@frankkulak.com</a>.
                </p>
            </b-col>
        </b-row>

        <mod-category-header header="available mods"
                             description="These mods are well-tested and ready to be downloaded. They are updated often,
                             so be sure to check back periodically - especially after patches!"/>
        <mod-category-content :mods="activeMods"/>

        <mod-category-header header="work-in-progress mods"
                             description="These mods are currently in development, and are not yet available for
                             download. Check back later if you are interested in them!"/>
        <mod-category-content :mods="wipMods"/>

        <mod-category-header header="retired mods"
                             description="These mods are no longer receiving updates, so they may not work with the
                             latest version of the game. They are only included as an example of my previous work."/>
        <mod-category-content :mods="retiredMods"/>
    </b-container>
</template>

<script>
    import {Constants, ModData} from '../../modules/Data.js'
    import ModCategoryContent from "./ModCategoryContent";
    import ModCategoryHeader from "./ModCategoryHeader";

    const mods = Object.values(ModData.ts4).sort((mod1, mod2) => {
        const modName1 = mod1.name.toUpperCase();
        const modName2 = mod2.name.toUpperCase();
        if (modName1 < modName2) {
            return -1;
        } else if (modName1 > modName2) {
            return 1;
        } else {
            return 0;
        }
    });

    export default {
        name: "HomePage",
        components: {ModCategoryHeader, ModCategoryContent},
        data: function () {
            return {
                activeMods: mods.filter(mod => mod.developmentStage === Constants.developmentStage.active),
                retiredMods: mods.filter(mod => mod.developmentStage === Constants.developmentStage.retired),
                wipMods: mods.filter(mod => mod.developmentStage === Constants.developmentStage.wip)
            }
        }
    }
</script>

<style lang="scss">
    #home-page {
        h1, h2, p {
            margin-bottom: $padding-md;

            &:last-child {
                margin-bottom: 0;
            }
        }

        #welcome {
            background-color: var(--banner-bg-color);
            padding: {
                top: $padding-lg;
                bottom: $padding-lg;
            }

            p {
                color: var(--light-color);
            }
        }

        #display-checkbox {
            z-index: 1020;
            position: fixed;
            right: 20px;
            bottom: 20px;
        }
    }
</style>