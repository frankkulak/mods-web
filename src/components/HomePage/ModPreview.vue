<template>
    <router-link :to="route" class="mod-preview-link">
        <b-row align-h="center" align-v="center" class="mod-preview text-left mb-3 py-3">
            <b-col cols="12" sm="5" md="3" class="mb-3 mb-sm-0">
                <img :src="thumbnail" :alt="thumbnailAlt"/>
            </b-col>
            <b-col cols="12" sm="7" md="9">
                <h3 class="font-weight-bold">{{ mod.name }}</h3>
                <p v-html="mod.description"></p>
            </b-col>
        </b-row>
    </router-link>
</template>

<script>
    export default {
        name: "ModPreview",
        props: {
            mod: Object
        },
        data: function () {
            return {
                thumbnailAlt: `${this.mod.name} Thumbnail`,
                route: `/${this.mod.game}/${this.mod.id}`
            }
        },
        computed: {
            thumbnail: function () {
                try {
                    const thumbnailFilename = this.mod.images[0];
                    if (thumbnailFilename === null) {
                        return require(`../../assets/${this.mod.game}/default.png`);
                    } else {
                        return require(`../../assets/${this.mod.game}/${this.mod.id}/${thumbnailFilename}`);
                    }
                } catch (e) {
                    console.log(e.message);
                    return require(`../../assets/${this.mod.game}/default.png`);
                }
            }
        }
    }
</script>

<style lang="scss">
    .mod-preview-link, .mod-preview-link:focus, .mod-preview-link:hover  {
        color: var(--text-color);
        text-decoration: none;
    }

    .mod-preview {
        background-color: var(--card-bg-color);
        border-radius: 10px;
        box-shadow: 0 4px 8px var(--shadow-color);
        position: relative;
        transition: all ease 300ms;
        top: 0;

        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }

        &:hover {
            top: -5px;
            box-shadow: 0 5px 15px var(--shadow-color);
        }

        &:last-child {
            margin-bottom: 0;
        }
    }
</style>