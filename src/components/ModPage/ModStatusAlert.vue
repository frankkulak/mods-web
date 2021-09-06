<template>
    <div id="mod-status-alert">
        <b-alert :variant="alertVariant" v-html="alertContent" class="text-center m-0 px-4 py-2" show/>
    </div>
</template>

<script>
    import {DataEnums, GameData} from '../../scripts/modules/Data.js'

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
                else if (this.stageIs(wip)) return `primary`;

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
                const successSymbol = '&check;';
                const warningSymbol = '&#9888;';
                const dangerSymbol = '&#10761;';

                if (this.stageIs(retired)) return `${dangerSymbol} retired`;
                else if (this.stageIs(wip)) return `work-in-progress`;

                const lastUpdate = GameData[this.mod.game].lastUpdate;
                const ending = `with <span class="text-nowrap">${lastUpdate}</span> patch`;

                switch (this.mod.testingStatus) {
                    case DataEnums.testingStatus.working:
                    case DataEnums.testingStatus.beta:
                        return `${successSymbol} working ${ending}`;
                    case DataEnums.testingStatus.broken:
                        return `${dangerSymbol} conflicts ${ending}`;
                    default:
                        return `${warningSymbol} not tested ${ending}`;
                }
            }
        }
    }
</script>

<style lang="scss">
    #mod-status-alert {
        .alert {
            display: inline-block;
        }
    }
</style>
