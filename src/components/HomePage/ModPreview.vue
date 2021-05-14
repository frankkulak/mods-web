<template>
    <b-col :cols="cardsCols" :md="cardsColsMd" :sm="cardsColsSm" class="p-4 preview-wrapper">
        <router-link :to="route" class="mod-preview-link" :id="`preview-${mod.id}-a`">
            <b-row class="mod-preview text-left" :id="`preview-${mod.id}-row`">
                <b-col cols="12" :sm="imgColsSm" :md="imgColsMd" class="p-0" :id="`preview-${mod.id}-col1`"
                       v-if="showThumbnail">
                    <img :src="thumbnail" :alt="thumbnailAlt" :id="`preview-${mod.id}-img`"/>
                </b-col>
                <b-col cols="12" :sm="12 - imgColsSm" :md="12 - imgColsMd" class="py-3 my-auto"
                       :class="!major && 'desc-col'"
                       :id="`preview-${mod.id}-col2`">
                    <h3 class="font-weight-bold" :id="`preview-${mod.id}-h3`" v-html="mod.name"></h3>
                    <p v-html="mod.description" :id="`preview-${mod.id}-p`"></p>
                </b-col>
                <b-col cols="12" :sm="imgColsSm" :md="imgColsMd" v-if="mod.developmentStage === 0"
                       class="my-auto text-center">
                    <div class="release-date w-auto py-2 my-3">
                        <p>expected</p>
                        <p class="font-weight-bold">{{ mod.releaseDate }}</p>
                    </div>
                </b-col>
            </b-row>
        </router-link>
    </b-col>
</template>

<script>
    export default {
        name: "ModPreview",
        props: {
            mod: Object,
            major: Boolean,
            showThumbnail: Boolean
        },
        data: function () {
            return {
                thumbnailAlt: `${this.mod.name} Thumbnail`,
                route: `/${this.mod.game}/${this.mod.id}`,
                cardsCols: (this.major ? 12 : 12),
                cardsColsMd: (this.major ? 12 : 4),
                cardsColsSm: (this.major ? 12 : 6),
                imgColsMd: (this.major ? 4 : 12),
                imgColsSm: (this.major ? 6 : 12),
            }
        },
        computed: {
            thumbnail: function () {
                try {
                    const thumbnailFilename = this.mod.thumbnail;
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
    .mod-preview-link, .mod-preview-link:focus, .mod-preview-link:hover {
        color: var(--text-color);
        text-decoration: none;
    }

    .mod-preview {
        @extend %floating-card;
        background-color: var(--card-bg-color);
        position: relative;
        height: 100%;
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

        .desc-col {
            height: 100%;
        }

        .release-date {
            border-radius: 10px;
            border-color: var(--shadow-color);
            border-width: 1px;
            border-style: solid;
        }
    }
</style>