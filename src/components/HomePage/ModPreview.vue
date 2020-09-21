<template>
    <router-link :to="route" class="mod-preview-link">
        <b-row align-h="center" class="mod-preview text-left">
            <b-col cols="1">
                <img :src="thumbnail" :alt="thumbnailAlt" class="thumbnail" v-if="mod.images !== null"/>
            </b-col>
            <b-col cols="11">
                <h6>{{ mod.name }}</h6>
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
                    if (thumbnailFilename === null) return null;
                    return require(`../../assets/${this.mod.game}/${this.mod.id}/${thumbnailFilename}`);
                } catch (e) {
                    console.log(e.message);
                    return require(`../../assets/${this.mod.game}/default.png`);
                }
            }
        }
    }
</script>

<style lang="scss">
    .mod-preview-link {
        text-decoration: none;
    }

    .mod-preview {
        background-color: var(--card-bg-color);
        border-radius: 10px;
        box-shadow: 0 5px 10px var(--shadow-color);
        position: relative;
        transition: all ease 300ms;
        top: 0;

        &:hover {
            top: -5px;
            box-shadow: 0 5px 15px var(--shadow-color);
        }

        & > a, & > a:focus, & > a:hover {
            color: var(--text-color);
            text-decoration: none;
        }

        img.thumbnail {
            width: 100%;
            height: auto;
            border-radius: 10px 10px 0 0;
        }

        .content {
            padding: 20px;

            h6 {
                margin-bottom: 10px;
                font-weight: bold;
            }
        }
    }
</style>