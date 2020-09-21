<template>
    <b-container id="page-not-found" fluid>
        <b-row align-h="center">
            <b-col cols="12" md="10" lg="8">
                <h1>this page does not exist</h1>
                <p>The URL you entered may have changed or been deleted. Try checking the
                    <router-link to="/">home page</router-link>.
                </p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style lang="scss">
    #page-not-found {
        height: 100vh;
        width: 100vw;
        display: table-cell;
        vertical-align: middle;

        h1 {
            margin-bottom: 20px;
        }
    }
</style>