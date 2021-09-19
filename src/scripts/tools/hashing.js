/**
 * Hashing algorithms that match the ones used in the game.
 */


const fnvOptions = {
    bit32: {
        prime: 0x01000193n,
        offset: 0x811C9DC5n,
        max: 0xFFFFFFFFn
    },
    bit64: {
        prime: 0x00000100000001B3n,
        offset: 0xCBF29CE484222325n,
        max: 0xFFFFFFFFFFFFFFFFn
    }
}


function fnv(name, { offset, prime, max }) {
    let hash = offset;
    Buffer.from(name.toLowerCase(), 'utf-8').forEach(byte => {
        hash *= prime;
        hash %= max;
        hash ^= BigInt(byte);
    });
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
