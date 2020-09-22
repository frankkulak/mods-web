<template>
    <div id="mod-status-alert w-100">
        <b-alert :variant="alertVariant" v-html="alertContent" class="text-center m-0" show/>
    </div>
</template>

<script>
    import {DataEnums, GameData} from '../../modules/Data.js'

    const {wip, retired} = DataEnums.developmentStage;

    export default {
        name: "ModStatusAlert",
        props: {
            mod: Object
        },
        data: function () {
            return {
                wipStage: wip,
                retiredStage: retired,
            }
        },
        methods: {
            stageIs: function (stageToCheck) {
                return this.$props.mod.developmentStage === stageToCheck;
            }
        },
        computed: {
            alertVariant: function () {
                if (this.stageIs(retired)) return `danger`;
                else if (this.stageIs(wip)) return `warning`;

                switch (this.mod.testingStatus) {
                    case DataEnums.testingStatus.working:
                    case DataEnums.testingStatus.beta:
                        return 'success';
                    case DataEnums.testingStatus.broken:
                        return 'danger';
                    default:
                        return 'warning';
                }
            },
            alertContent: function () {
                if (this.stageIs(retired)) return `This mod is retired, which means I no longer update or support it. Using it is not recommended, as it may cause issues with your game.`;
                else if (this.stageIs(wip)) return `This mod is a work-in-progress, so the information on this page may be incomplete and is subject to change.`;

                const successSymbol = '&check;';
                const warningSymbol = '&#9888;';
                const dangerSymbol = '&#10761;';

                const lastUpdate = GameData[this.mod.game].lastUpdate;
                const ending = `with latest patch <span class="text-nowrap">(${lastUpdate})</span>`;

                switch (this.mod.testingStatus) {
                    case DataEnums.testingStatus.working:
                    case DataEnums.testingStatus.beta:
                        return `${successSymbol} working ${ending}`;
                    case DataEnums.testingStatus.broken:
                        return `${dangerSymbol} issues found ${ending}`;
                    default:
                        return `${warningSymbol} not yet tested ${ending}`;
                }
            }
        }
    }
</script>

<style lang="scss">
    #mod-status-alert {
        // intentionally blank
    }
</style>