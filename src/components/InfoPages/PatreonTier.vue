<template>
    <b-col class="patreon-tier mb-4" cols="12" sm="4">
        <div class="py-4 patreon-tier-content">
            <div class="text-center mb-4">
                <h2>{{ name }}</h2>
                <p>${{ cost }} / month</p>
            </div>

            <ul>
                <li v-for="(bullet, n) in benefits" :key="`${name}:${n}`">{{ bullet }}</li>
            </ul>
        </div>
    </b-col>
</template>

<script>
    export default {
        name: "PatreonTier",
        props: {
            name: String,
            cost: String,
            benefits: Array
        }
    }
</script>

<style lang="scss">
    .patreon-tier {
        .patreon-tier-content {
            @extend %floating-card;
            background-color: var(--card-bg-color);
            height: 100%;
        }
    }
</style>