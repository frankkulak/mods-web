export default (function () {
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

    return {
        formatPackCompatability: formatPackCompatability
    };
})();