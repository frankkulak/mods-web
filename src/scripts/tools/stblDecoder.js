class BinaryDecoder {
    constructor(buff) {
        this.buff = buff;
        this.offset = 0;
    }

    skip(num) {
        this.offset += num;
    }

    seek(offset) {
        const offsetAsNumber = Number(offset);
        if (offsetAsNumber != offset) throw "This package exceeds size limitations.";
        this.offset = offsetAsNumber;
    }

    chars(num) {
        const result = this.buff.toString('utf-8', this.offset, this.offset + num);
        this.offset += num;
        return result;
    }

    charsBase64(num) {
        const result = this.buff.toString('base64', this.offset, this.offset + num);
        this.offset += num;
        return result;
    }

    uint8() {
        const result = this.buff.readUInt8(this.offset)
        this.offset += 1;
        return result;
    }

    uint16() {
        const result = this.buff.readUInt16LE(this.offset)
        this.offset += 2;
        return result;
    }

    uint32() {
        const result = this.buff.readUInt32LE(this.offset)
        this.offset += 4;
        return result;
    }

    uint64() {
        // for some reason this.buff.readBigUInt64LE(this.offset) does not work in this environment
        return this.uint32() + this.uint32();
    }
}

function readSTBL(decoder) {
    // validation
    if (decoder.chars(4) !== "STBL") throw "Not a string table.";
    if (decoder.uint16() !== 5) throw "Not a string table.";

    const result = {};

    // header
    decoder.skip(1); // compression
    result.numEntries = decoder.uint64();
    decoder.skip(2); // reserved
    result.totalStringLength = decoder.uint32();
    result.stringEntries = [];

    // body
    for (let i = 0; i < result.numEntries; i++) {
        const stringEntry = {};
        stringEntry.key = decoder.uint32();
        decoder.skip(1);
        stringEntry.length = decoder.uint16();
        stringEntry.string = decoder.chars(stringEntry.length);
        result.stringEntries.push(stringEntry);
    }

    return result;
}


export async function getStblContents(file) {
    if (!file) return null;

    try {
        const arrayBuffer = await file.arrayBuffer();
        return readSTBL(new BinaryDecoder(Buffer.from(arrayBuffer)));
    } catch (error) {
        return `${error}`;
    }
}

export async function readJsonFileAsStbl(file) {
    if (!file) return null;

    try {
        const arrayBuffer = await file.arrayBuffer();
        const jsonContent = Buffer.from(arrayBuffer).toString('utf-8');
        return JSON.parse(jsonContent);
    } catch (error) {
        return `${error}`;
    }
}
