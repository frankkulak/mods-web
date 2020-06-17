// fixme : separate these into different files

const Util = (function () {
    function formatPackCompatability({requiredPacks}) {
        const packsCopy = requiredPacks.map(pack => `<span class="pack">${pack}</span>`);
        const packCount = packsCopy.length;

        let text;
        if (packCount === 0) {
            text = `<span class="pack">Base Game</span> compatible`;
        } else if (packCount === 1) {
            text = `${packsCopy[0]} required`;
        } else {
            const last = packsCopy.pop();
            const oxfordComma = (packCount === 2) ? '' : ',';
            text = `${packsCopy.join(", ")}${oxfordComma} and ${last} required`;
        }

        const style = (packCount === 0) ? 'base-game' : 'packs-required';
        return `<span class="${style}">${text}</span>`
    }

    function modExists(game, mod) {
        return Data.hasOwnProperty(game) && Data[game].hasOwnProperty(mod);
    }

    return {
        formatPackCompatability: formatPackCompatability,
        modExists: modExists
    };
})();

const Constants = (function () {
    const success = 'status-success';
    const warning = 'status-warning';
    const danger = 'status-danger';

    return {
        status: {
            updated: 0,
            untested: 1,
            conflict: 2
        },
        statusClasses: [
            success,
            warning,
            danger
        ]
    };
})();