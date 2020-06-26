<template>
    <div class="mod-preview h-100">
        <router-link :to="route">
            <img :src="thumbnail" :alt="thumbnailAlt" class="thumbnail"/>
            <div class="content">
                <h6>{{ mod.name }}</h6>
                <p v-html="mod.description"></p>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ModPreview",
        props: {
            mod: Object
        },
        data: function () {
          return {
              thumbnail: require(`../assets/${this.mod.game}/${this.mod.id}/${this.mod.images[0]}`),
              thumbnailAlt: `${this.mod.name} Thumbnail`,
              route: `/${this.mod.game}/${this.mod.id}`
          }
        }
    }
</script>

<style lang="scss">
    .mod-preview {
        background-color: var(--bg-band-overlay);
        border-radius: $padding-sm;
        box-shadow: 0 $padding-xs 10px var(--shadow-color);
        position: relative;
        transition: all ease 300ms;
        top: 0;

        &:hover {
            top: -5px;
            box-shadow: 0 $padding-xs 15px var(--shadow-color);
        }

        & > a, & > a:focus, & > a:hover {
            color: var(--text-color);
            text-decoration: none;
        }

        img.thumbnail {
            width: 100%;
            height: auto;
            border-radius: $padding-sm $padding-sm 0 0;
        }

        .content {
            padding: $padding-md;

            h6 {
                margin-bottom: $padding-sm;
            }
        }
    }
</style>