class BinaryEncoder {
    constructor(buff) {
        this.buff = buff;
        this.offset = 0;
    }

    skip(offset) {
        this.offset += offset;
    }

    chars(text, byteLength) {
        this.offset += this.buff.write(text, this.offset, byteLength ? byteLength : Buffer.byteLength(text));
    }

    _uint(num, byteLength) {
        // intentionally = and not +=, uint returns the offset + the num bytes written
        this.offset = this.buff.writeUIntLE(num, this.offset, byteLength);
    }

    uint16(num) {
        this._uint(num, 2);
    }

    uint32(num) {
        this._uint(num, 4);
    }

    uint64(num) {
        // this is stupid but for some reason this app can't use BigInts. this is safe though because the value being
        // encoded by this uint64 will never be larger than a uint32, it's impossible
        this.uint32(num);
        this.skip(4);
    }
}


export function serializeStbl(contents) {
    let totalFileLength = 21; // 21 comes from the number of bytes in the header
    let totalStringLength = contents.length;
    contents.forEach(stringEntry => {
        stringEntry.string = stringEntry.string.replace(/(\r\n|\r|\n)/g, '\\n');
        stringEntry.numBytes = Buffer.byteLength(stringEntry.string);
        totalStringLength += stringEntry.numBytes;
        totalFileLength += 7 + stringEntry.numBytes; // 7 comes from uint32 (4) + byte (1) + uint16 (2)
    });

    const writeBuffer = Buffer.alloc(totalFileLength);
    const encoder = new BinaryEncoder(writeBuffer);

    // header
    encoder.chars("STBL", 4); // file validation
    encoder.uint16(5); // version
    encoder.skip(1); // compression
    encoder.uint64(contents.length); // num entries
    encoder.skip(2); // reserved
    encoder.uint32(totalStringLength); // total string length

    // body
    contents.forEach(stringEntry => {
        encoder.uint32(stringEntry.key);
        encoder.skip(1);
        encoder.uint16(stringEntry.numBytes);
        encoder.chars(stringEntry.string, stringEntry.numBytes);
    });

    return writeBuffer;
}
