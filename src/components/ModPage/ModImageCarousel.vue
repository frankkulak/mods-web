<template>
    <b-carousel v-model="slide" :interval="4000" controls indicators :img-width="700" :img-height="420"
                @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <b-carousel-slide v-for="image in mod.images" :key="image" :img-src="getImagePath(image)"/>
    </b-carousel>
</template>

<script>
    export default {
        name: "ModImageCarousel",
        props: {
            mod: Object,
        },
        data: function () {
            return {
                slide: 0,
                sliding: null,
            }
        },
        methods: {
            onSlideStart: function () {
                this.sliding = true
            },
            onSlideEnd: function () {
                this.sliding = false
            },
            getImagePath: function (filename) {
                const {game, id} = this.mod;
                try {
                    return require(`../../assets/${game}/${id}/${filename}`);
                } catch (e) {
                    console.log(e.message);
                    return require(`../../assets/${game}/default.png`);
                }
            },
        }
    }
</script>

<style lang="scss">
    // intentionally blank
</style>