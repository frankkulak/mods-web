<template>
    <div id="scroll-to-download" class="p-2" v-on:click="scrollToDownload()" v-show="!isViewingDownload">
        <b-icon-arrow-down/>
        Download
    </div>
</template>

<script>
import {BIconArrowDown} from 'bootstrap-vue';

export default {
    name: "ScrollToBottom",
    components: {
        BIconArrowDown
    },
    data() {
        return {
            scrollPos: 0
        }
    },
    mounted() {
        document.addEventListener('scroll', () => this.scrollPos = window.pageYOffset || document.documentElement.scrollTop);
    },
    methods: {
        scrollToDownload() {
            const downloadPos = document.getElementById('mod-download')?.offsetTop ?? 0;
            window.scroll({
                top: downloadPos - 70,
                behavior: "smooth"
            });
        }
    },
    computed: {
        isViewingDownload() {
            const downloadPos = document.getElementById('mod-download')?.offsetTop ?? 0;
            return this.scrollPos >= downloadPos - 70 && downloadPos !== 0;
        }
    }
}
</script>

<style scoped lang="scss">
#scroll-to-download {
    @extend %floating-card;

    position: fixed;
    bottom: 2em;
    right: 2em;
    border-radius: 8px;
    opacity: 0.8;
    background-color: var(--accent-color);
    color: white;

    &:hover {
        cursor: pointer;
    }
}
</style>
