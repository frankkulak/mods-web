<template>
    <section id="page-not-found">
        <b-container  fluid>
            <h1>this page does not exist</h1>
            <p>The URL you entered may have changed or been deleted. Try checking the
                <router-link to="/">home page</router-link>.
            </p>
        </b-container>
    </section>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style lang="scss">
    #page-not-found {
        height: 90vh;
        width: 100vw;
        display: table-cell;
        vertical-align: middle;
    }
</style>