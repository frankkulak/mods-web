/**
 * Hashing algorithms that match the ones used in the game.
 */


const fnvOptions = {
    bit32: {
        prime: 0x01000193n,
        offset: 0x811C9DC5n,
        max: 0x100000000n
    },
    bit64: {
        prime: 0x00000100000001B3n,
        offset: 0xCBF29CE484222325n,
        max: 0x10000000000000000n
    }
}


function fnv(value, { offset, prime, max }) {
    let hash = offset;
    const lowerString = value.toLowerCase();
    for (let i = 0; i < value.length; i++) {
        hash *= prime;
        hash %= max;
        hash ^= BigInt(lowerString.charCodeAt(i));
    }
    return hash;
}


module.exports = {
    fnv32(name) {
        return fnv(name, fnvOptions.bit32);
    },
    fnv64(name) {
        return fnv(name, fnvOptions.bit64);
    }
}
