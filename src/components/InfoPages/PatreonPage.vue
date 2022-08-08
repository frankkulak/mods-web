<template>
    <b-container id="patreon-page" class="py-5" fluid>
        <div class="text-center patreon-logo pb-5">
            <img src="../../assets/brands/patreon-wordmark.png" alt="Patreon Logo"/>
        </div>

        <section-header text="what is it?" class="mb-5"/>
        <p>Patreon is a way to support creators in the form of a monthly pledge. You may either pledge $1 for general
            support (which will grant you access to my dev diary posts), or join one of the higher tiers to enjoy some
            more benefits. The available tiers are described below, with their prices listed in USD. Prices may differ
            depending on your nation's currency.</p>

        <b-row align-h="around" class="mt-5">
            <patreon-tier name="The Pancakes" cost="2" :benefits="[diary, betas]"/>
            <patreon-tier name="The Goths" cost="4" :benefits="[diary, votes, betas, alphas]"/>
            <patreon-tier name="The Landgraabs" cost="8" :benefits="[diary, votes, betas, alphas, customMods]"/>
        </b-row>

        <section-header text="what do the benefits mean?" class="my-5"/>
        <p><span class="benefit-title">Access to dev diaries.</span> There's a lot of work that goes on behind the
            scenes when creating mods and modding tools, and this benefit grants you access to weekly/bi-weekly posts
            detailing the progress that I've made.</p>
        <p><span class="benefit-title">Voting on projects.</span> Occasionally, I'll ask my patrons for ideas, feedback,
            and how to prioritize projects. This benefit gives you a voice in these posts, so you can have a say in the
            things I'm working on.</p>
        <p><span class="benefit-title">Early access to betas.</span> Betas are feature-complete versions of new mods and
            updates. They are released to patrons 2-3 weeks before the public, depending on whether any issues need to
            be fixed or not.</p>
        <p><span class="benefit-title">Early access to alphas.</span> Alphas are incomplete snapshots of new mods and
            updates while they're being developed. While I hold them to the same standard of quality as betas and public
            releases, they may be missing some features and contain more bugs. Giving feedback and reporting issues
            about alphas helps me make betas and public releases the best they can be.</p>
        <p><span class="benefit-title">Personalized mod versions*.</span> If you want any small tweaks made to any of my
            mods, I will create a custom version just for you. I will keep your version up-to-date with the latest
            version of the mod, and fix any issues that arise with patches. If you cancel your Landgraab pledge, I will
            no longer update your custom version.</p>
        <p class="mt-5">* = These requests must be reasonable in scale, and not all can be fulfilled. If you’re unsure
            if your idea is reasonable, ask me <a href="https://discord.gg/qNhD3Jh" target="_blank">on Discord</a>
            in the #patreon-questions channel before signing up.</p>

        <b-alert show dismissible class="no-ea-alert mx-2 mb-4 mt-5">
            <p>Hey there! Please note that <strong><u>there are currently no mods in either beta or alpha</u></strong>.
                If you sign up for early access only to realize that there is nothing currently available, please reach
                out to me and I will issue you a refund.</p>
        </b-alert>

        <div id="become-a-patron" class="pt-5 pb-3 text-center">
            <b-button variant="primary" href="https://www.patreon.com/bePatron?u=40823163" target="_blank" pill>
                Become a Patron
            </b-button>
        </div>
    </b-container>
</template>

<script>
import SectionHeader from "../Common/SectionHeader";
import PatreonTier from "./PatreonTier";

export default {
    name: "PatreonPage",
    components: {PatreonTier, SectionHeader},
    data: function () {
        return {
            betas: 'Early access to betas.',
            alphas: 'Early access to alphas.',
            customMods: 'Personalized mod versions',
            diary: 'Access to dev diaries.',
            votes: 'Voting on projects.'
        }
    }
}
</script>

<style lang="scss">
#patreon-page {
    .patreon-logo {
        width: 100%;

        img {
            width: 256px;
            height: auto;
        }
    }

    span.benefit-title {
        color: var(--accent-color);
        font-weight: bold;
    }

    a.btn-primary {
        text-decoration: none;
        font-weight: bold;
        border-color: $patreon;
        background-color: transparentize($patreon, 0.8);
        color: $patreon;

        &:hover {
            background-color: $patreon;
            color: white;
        }
    }

    .no-ea-alert {
        strong {
            font-weight: bold;
            text-decoration: underline;
        }

        color: var(--accent-color);
        background-color: var(--accent-color-light);
        border-color: var(--shadow-color);
    }
}

#become-a-patron {
    position: fixed;
    bottom: 30px;
    right: 30px;
}
</style>
