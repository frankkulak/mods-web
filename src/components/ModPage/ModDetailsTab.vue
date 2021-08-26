<template>
    <b-tab :title="title" class="mod-details-tab py-4 px-3">
        <div v-for="item in items" :key="item.title" class="item mb-4">
            <h3 v-html="item.title"></h3>
            <ul>
                <li v-for="(bullet, index) in item.bullets" :key="`${item.title}:${index}`" v-html="bullet"></li>
            </ul>
        </div>
    </b-tab>
</template>

<script>
    export default {
        name: "ModDetailsTab",
        props: {
            title: String,
            items: Array,
        }
    }
</script>

<style lang="scss">
    .mod-details-tab {
        background-color: var(--card-bg-color);
        border-radius: 0 0 10px 10px;
        border: 1px solid var(--shadow-color);
        border-top: none;

        .item {
            ul {
                margin-bottom: 0;
            }

            strong {
                font-weight: bold;
            }

            &:last-child {
                margin-bottom: 0 !important;
            }
        }

        mark.new {
            background-color: transparentize($blurple, 0.55);
            color: $dark-blue;
            font-weight: bold;
            border-radius: 6px;
            padding: 2px 8px;
            margin: 1px;
            box-shadow: -1px 1px 5px #d5d5d5;
            font-size: 0.8em;
        }
    }
</style>
