"use strict";
self["webpackHotUpdatedemeter"]("/index",{

/***/ "./node_modules/@ethersproject/abi/lib.esm/_version.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/_version.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "abi/5.5.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/abi-coder.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/abi-coder.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbiCoder": function() { return /* binding */ AbiCoder; },
/* harmony export */   "defaultAbiCoder": function() { return /* binding */ defaultAbiCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/abi/lib.esm/_version.js");
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./coders/abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");
/* harmony import */ var _coders_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coders/address */ "./node_modules/@ethersproject/abi/lib.esm/coders/address.js");
/* harmony import */ var _coders_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coders/array */ "./node_modules/@ethersproject/abi/lib.esm/coders/array.js");
/* harmony import */ var _coders_boolean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coders/boolean */ "./node_modules/@ethersproject/abi/lib.esm/coders/boolean.js");
/* harmony import */ var _coders_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coders/bytes */ "./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js");
/* harmony import */ var _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coders/fixed-bytes */ "./node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js");
/* harmony import */ var _coders_null__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coders/null */ "./node_modules/@ethersproject/abi/lib.esm/coders/null.js");
/* harmony import */ var _coders_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./coders/number */ "./node_modules/@ethersproject/abi/lib.esm/coders/number.js");
/* harmony import */ var _coders_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coders/string */ "./node_modules/@ethersproject/abi/lib.esm/coders/string.js");
/* harmony import */ var _coders_tuple__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coders/tuple */ "./node_modules/@ethersproject/abi/lib.esm/coders/tuple.js");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fragments */ "./node_modules/@ethersproject/abi/lib.esm/fragments.js");

// See: https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI




const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);











const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
class AbiCoder {
    constructor(coerceFunc) {
        logger.checkNew(new.target, AbiCoder);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "coerceFunc", coerceFunc || null);
    }
    _getCoder(param) {
        switch (param.baseType) {
            case "address":
                return new _coders_address__WEBPACK_IMPORTED_MODULE_3__.AddressCoder(param.name);
            case "bool":
                return new _coders_boolean__WEBPACK_IMPORTED_MODULE_4__.BooleanCoder(param.name);
            case "string":
                return new _coders_string__WEBPACK_IMPORTED_MODULE_5__.StringCoder(param.name);
            case "bytes":
                return new _coders_bytes__WEBPACK_IMPORTED_MODULE_6__.BytesCoder(param.name);
            case "array":
                return new _coders_array__WEBPACK_IMPORTED_MODULE_7__.ArrayCoder(this._getCoder(param.arrayChildren), param.arrayLength, param.name);
            case "tuple":
                return new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder((param.components || []).map((component) => {
                    return this._getCoder(component);
                }), param.name);
            case "":
                return new _coders_null__WEBPACK_IMPORTED_MODULE_9__.NullCoder(param.name);
        }
        // u?int[0-9]*
        let match = param.type.match(paramTypeNumber);
        if (match) {
            let size = parseInt(match[2] || "256");
            if (size === 0 || size > 256 || (size % 8) !== 0) {
                logger.throwArgumentError("invalid " + match[1] + " bit length", "param", param);
            }
            return new _coders_number__WEBPACK_IMPORTED_MODULE_10__.NumberCoder(size / 8, (match[1] === "int"), param.name);
        }
        // bytes[0-9]+
        match = param.type.match(paramTypeBytes);
        if (match) {
            let size = parseInt(match[1]);
            if (size === 0 || size > 32) {
                logger.throwArgumentError("invalid bytes length", "param", param);
            }
            return new _coders_fixed_bytes__WEBPACK_IMPORTED_MODULE_11__.FixedBytesCoder(size, param.name);
        }
        return logger.throwArgumentError("invalid type", "type", param.type);
    }
    _getWordSize() { return 32; }
    _getReader(data, allowLoose) {
        return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Reader(data, this._getWordSize(), this.coerceFunc, allowLoose);
    }
    _getWriter() {
        return new _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_12__.Writer(this._getWordSize());
    }
    getDefaultValue(types) {
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
        return coder.defaultValue();
    }
    encode(types, values) {
        if (types.length !== values.length) {
            logger.throwError("types/values length mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                count: { types: types.length, values: values.length },
                value: { types: types, values: values }
            });
        }
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = (new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_"));
        const writer = this._getWriter();
        coder.encode(writer, values);
        return writer.data;
    }
    decode(types, data, loose) {
        const coders = types.map((type) => this._getCoder(_fragments__WEBPACK_IMPORTED_MODULE_13__.ParamType.from(type)));
        const coder = new _coders_tuple__WEBPACK_IMPORTED_MODULE_8__.TupleCoder(coders, "_");
        return coder.decode(this._getReader((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_14__.arrayify)(data), loose));
    }
}
const defaultAbiCoder = new AbiCoder();
//# sourceMappingURL=abi-coder.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkResultErrors": function() { return /* binding */ checkResultErrors; },
/* harmony export */   "Coder": function() { return /* binding */ Coder; },
/* harmony export */   "Writer": function() { return /* binding */ Writer; },
/* harmony export */   "Reader": function() { return /* binding */ Reader; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ "./node_modules/@ethersproject/abi/lib.esm/_version.js");






const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
function checkResultErrors(result) {
    // Find the first error (if any)
    const errors = [];
    const checkErrors = function (path, object) {
        if (!Array.isArray(object)) {
            return;
        }
        for (let key in object) {
            const childPath = path.slice();
            childPath.push(key);
            try {
                checkErrors(childPath, object[key]);
            }
            catch (error) {
                errors.push({ path: childPath, error: error });
            }
        }
    };
    checkErrors([], result);
    return errors;
}
class Coder {
    constructor(name, type, localName, dynamic) {
        // @TODO: defineReadOnly these
        this.name = name;
        this.type = type;
        this.localName = localName;
        this.dynamic = dynamic;
    }
    _throwError(message, value) {
        logger.throwArgumentError(message, this.localName, value);
    }
}
class Writer {
    constructor(wordSize) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
        this._data = [];
        this._dataLength = 0;
        this._padding = new Uint8Array(wordSize);
    }
    get data() {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexConcat)(this._data);
    }
    get length() { return this._dataLength; }
    _writeData(data) {
        this._data.push(data);
        this._dataLength += data.length;
        return data.length;
    }
    appendWriter(writer) {
        return this._writeData((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)(writer._data));
    }
    // Arrayish items; padded on the right to wordSize
    writeBytes(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(value);
        const paddingOffset = bytes.length % this.wordSize;
        if (paddingOffset) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([bytes, this._padding.slice(paddingOffset)]);
        }
        return this._writeData(bytes);
    }
    _getValue(value) {
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(value));
        if (bytes.length > this.wordSize) {
            logger.throwError("value out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                length: this.wordSize,
                offset: bytes.length
            });
        }
        if (bytes.length % this.wordSize) {
            bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.concat)([this._padding.slice(bytes.length % this.wordSize), bytes]);
        }
        return bytes;
    }
    // BigNumberish items; padded on the left to wordSize
    writeValue(value) {
        return this._writeData(this._getValue(value));
    }
    writeUpdatableValue() {
        const offset = this._data.length;
        this._data.push(this._padding);
        this._dataLength += this.wordSize;
        return (value) => {
            this._data[offset] = this._getValue(value);
        };
    }
}
class Reader {
    constructor(data, wordSize, coerceFunc, allowLoose) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.arrayify)(data));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "wordSize", wordSize || 32);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "_coerceFunc", coerceFunc);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(this, "allowLoose", allowLoose);
        this._offset = 0;
    }
    get data() { return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_3__.hexlify)(this._data); }
    get consumed() { return this._offset; }
    // The default Coerce function
    static coerce(name, value) {
        let match = name.match("^u?int([0-9]+)$");
        if (match && parseInt(match[1]) <= 48) {
            value = value.toNumber();
        }
        return value;
    }
    coerce(name, value) {
        if (this._coerceFunc) {
            return this._coerceFunc(name, value);
        }
        return Reader.coerce(name, value);
    }
    _peekBytes(offset, length, loose) {
        let alignedLength = Math.ceil(length / this.wordSize) * this.wordSize;
        if (this._offset + alignedLength > this._data.length) {
            if (this.allowLoose && loose && this._offset + length <= this._data.length) {
                alignedLength = length;
            }
            else {
                logger.throwError("data out-of-bounds", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                    length: this._data.length,
                    offset: this._offset + alignedLength
                });
            }
        }
        return this._data.slice(this._offset, this._offset + alignedLength);
    }
    subReader(offset) {
        return new Reader(this._data.slice(this._offset + offset), this.wordSize, this._coerceFunc, this.allowLoose);
    }
    readBytes(length, loose) {
        let bytes = this._peekBytes(0, length, !!loose);
        this._offset += bytes.length;
        // @TODO: Make sure the length..end bytes are all 0?
        return bytes.slice(0, length);
    }
    readValue() {
        return _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(this.readBytes(this.wordSize));
    }
}
//# sourceMappingURL=abstract-coder.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/address.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/address.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressCoder": function() { return /* binding */ AddressCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/address */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");




class AddressCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("address", "address", localName, false);
    }
    defaultValue() {
        return "0x0000000000000000000000000000000000000000";
    }
    encode(writer, value) {
        try {
            value = (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)(value);
        }
        catch (error) {
            this._throwError(error.message, value);
        }
        return writer.writeValue(value);
    }
    decode(reader) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_1__.getAddress)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_2__.hexZeroPad)(reader.readValue().toHexString(), 20));
    }
}
//# sourceMappingURL=address.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnonymousCoder": function() { return /* binding */ AnonymousCoder; }
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");


// Clones the functionality of an existing Coder, but without a localName
class AnonymousCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(coder) {
        super(coder.name, coder.type, undefined, coder.dynamic);
        this.coder = coder;
    }
    defaultValue() {
        return this.coder.defaultValue();
    }
    encode(writer, value) {
        return this.coder.encode(writer, value);
    }
    decode(reader) {
        return this.coder.decode(reader);
    }
}
//# sourceMappingURL=anonymous.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/array.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pack": function() { return /* binding */ pack; },
/* harmony export */   "unpack": function() { return /* binding */ unpack; },
/* harmony export */   "ArrayCoder": function() { return /* binding */ ArrayCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version */ "./node_modules/@ethersproject/abi/lib.esm/_version.js");
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");
/* harmony import */ var _anonymous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anonymous */ "./node_modules/@ethersproject/abi/lib.esm/coders/anonymous.js");



const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);


function pack(writer, coders, values) {
    let arrayValues = null;
    if (Array.isArray(values)) {
        arrayValues = values;
    }
    else if (values && typeof (values) === "object") {
        let unique = {};
        arrayValues = coders.map((coder) => {
            const name = coder.localName;
            if (!name) {
                logger.throwError("cannot encode object for signature with missing names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            if (unique[name]) {
                logger.throwError("cannot encode object for signature with duplicate names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "values",
                    coder: coder,
                    value: values
                });
            }
            unique[name] = true;
            return values[name];
        });
    }
    else {
        logger.throwArgumentError("invalid tuple value", "tuple", values);
    }
    if (coders.length !== arrayValues.length) {
        logger.throwArgumentError("types/value length mismatch", "tuple", values);
    }
    let staticWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
    let dynamicWriter = new _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Writer(writer.wordSize);
    let updateFuncs = [];
    coders.forEach((coder, index) => {
        let value = arrayValues[index];
        if (coder.dynamic) {
            // Get current dynamic offset (for the future pointer)
            let dynamicOffset = dynamicWriter.length;
            // Encode the dynamic value into the dynamicWriter
            coder.encode(dynamicWriter, value);
            // Prepare to populate the correct offset once we are done
            let updateFunc = staticWriter.writeUpdatableValue();
            updateFuncs.push((baseOffset) => {
                updateFunc(baseOffset + dynamicOffset);
            });
        }
        else {
            coder.encode(staticWriter, value);
        }
    });
    // Backfill all the dynamic offsets, now that we know the static length
    updateFuncs.forEach((func) => { func(staticWriter.length); });
    let length = writer.appendWriter(staticWriter);
    length += writer.appendWriter(dynamicWriter);
    return length;
}
function unpack(reader, coders) {
    let values = [];
    // A reader anchored to this base
    let baseReader = reader.subReader(0);
    coders.forEach((coder) => {
        let value = null;
        if (coder.dynamic) {
            let offset = reader.readValue();
            let offsetReader = baseReader.subReader(offset.toNumber());
            try {
                value = coder.decode(offsetReader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        else {
            try {
                value = coder.decode(reader);
            }
            catch (error) {
                // Cannot recover from this
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN) {
                    throw error;
                }
                value = error;
                value.baseType = coder.name;
                value.name = coder.localName;
                value.type = coder.type;
            }
        }
        if (value != undefined) {
            values.push(value);
        }
    });
    // We only output named properties for uniquely named coders
    const uniqueNames = coders.reduce((accum, coder) => {
        const name = coder.localName;
        if (name) {
            if (!accum[name]) {
                accum[name] = 0;
            }
            accum[name]++;
        }
        return accum;
    }, {});
    // Add any named parameters (i.e. tuples)
    coders.forEach((coder, index) => {
        let name = coder.localName;
        if (!name || uniqueNames[name] !== 1) {
            return;
        }
        if (name === "length") {
            name = "_length";
        }
        if (values[name] != null) {
            return;
        }
        const value = values[index];
        if (value instanceof Error) {
            Object.defineProperty(values, name, {
                enumerable: true,
                get: () => { throw value; }
            });
        }
        else {
            values[name] = value;
        }
    });
    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        if (value instanceof Error) {
            Object.defineProperty(values, i, {
                enumerable: true,
                get: () => { throw value; }
            });
        }
    }
    return Object.freeze(values);
}
class ArrayCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_2__.Coder {
    constructor(coder, length, localName) {
        const type = (coder.type + "[" + (length >= 0 ? length : "") + "]");
        const dynamic = (length === -1 || coder.dynamic);
        super("array", type, localName, dynamic);
        this.coder = coder;
        this.length = length;
    }
    defaultValue() {
        // Verifies the child coder is valid (even if the array is dynamic or 0-length)
        const defaultChild = this.coder.defaultValue();
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(defaultChild);
        }
        return result;
    }
    encode(writer, value) {
        if (!Array.isArray(value)) {
            this._throwError("expected array value", value);
        }
        let count = this.length;
        if (count === -1) {
            count = value.length;
            writer.writeValue(value.length);
        }
        logger.checkArgumentCount(value.length, count, "coder array" + (this.localName ? (" " + this.localName) : ""));
        let coders = [];
        for (let i = 0; i < value.length; i++) {
            coders.push(this.coder);
        }
        return pack(writer, coders, value);
    }
    decode(reader) {
        let count = this.length;
        if (count === -1) {
            count = reader.readValue().toNumber();
            // Check that there is *roughly* enough data to ensure
            // stray random data is not being read as a length. Each
            // slot requires at least 32 bytes for their value (or 32
            // bytes as a link to the data). This could use a much
            // tighter bound, but we are erroring on the side of safety.
            if (count * 32 > reader._data.length) {
                logger.throwError("insufficient data length", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.BUFFER_OVERRUN, {
                    length: reader._data.length,
                    count: count
                });
            }
        }
        let coders = [];
        for (let i = 0; i < count; i++) {
            coders.push(new _anonymous__WEBPACK_IMPORTED_MODULE_3__.AnonymousCoder(this.coder));
        }
        return reader.coerce(this.name, unpack(reader, coders));
    }
}
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/boolean.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/boolean.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanCoder": function() { return /* binding */ BooleanCoder; }
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");


class BooleanCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("bool", "bool", localName, false);
    }
    defaultValue() {
        return false;
    }
    encode(writer, value) {
        return writer.writeValue(value ? 1 : 0);
    }
    decode(reader) {
        return reader.coerce(this.type, !reader.readValue().isZero());
    }
}
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicBytesCoder": function() { return /* binding */ DynamicBytesCoder; },
/* harmony export */   "BytesCoder": function() { return /* binding */ BytesCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");



class DynamicBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(type, localName) {
        super(type, type, localName, true);
    }
    defaultValue() {
        return "0x";
    }
    encode(writer, value) {
        value = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
        let length = writer.writeValue(value.length);
        length += writer.writeBytes(value);
        return length;
    }
    decode(reader) {
        return reader.readBytes(reader.readValue().toNumber(), true);
    }
}
class BytesCoder extends DynamicBytesCoder {
    constructor(localName) {
        super("bytes", localName);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(super.decode(reader)));
    }
}
//# sourceMappingURL=bytes.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/fixed-bytes.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FixedBytesCoder": function() { return /* binding */ FixedBytesCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");



// @TODO: Merge this with bytes
class FixedBytesCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(size, localName) {
        let name = "bytes" + String(size);
        super(name, name, localName, false);
        this.size = size;
    }
    defaultValue() {
        return ("0x0000000000000000000000000000000000000000000000000000000000000000").substring(0, 2 + this.size * 2);
    }
    encode(writer, value) {
        let data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.arrayify)(value);
        if (data.length !== this.size) {
            this._throwError("incorrect data length", value);
        }
        return writer.writeBytes(data);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__.hexlify)(reader.readBytes(this.size)));
    }
}
//# sourceMappingURL=fixed-bytes.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/null.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/null.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NullCoder": function() { return /* binding */ NullCoder; }
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");


class NullCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(localName) {
        super("null", "", localName, false);
    }
    defaultValue() {
        return null;
    }
    encode(writer, value) {
        if (value != null) {
            this._throwError("not null", value);
        }
        return writer.writeBytes([]);
    }
    decode(reader) {
        reader.readBytes(0);
        return reader.coerce(this.name, null);
    }
}
//# sourceMappingURL=null.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/number.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/number.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberCoder": function() { return /* binding */ NumberCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/constants */ "./node_modules/@ethersproject/constants/lib.esm/bignumbers.js");
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");




class NumberCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(size, signed, localName) {
        const name = ((signed ? "int" : "uint") + (size * 8));
        super(name, name, localName, false);
        this.size = size;
        this.signed = signed;
    }
    defaultValue() {
        return 0;
    }
    encode(writer, value) {
        let v = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_1__.BigNumber.from(value);
        // Check bounds are safe for encoding
        let maxUintValue = _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.MaxUint256.mask(writer.wordSize * 8);
        if (this.signed) {
            let bounds = maxUintValue.mask(this.size * 8 - 1);
            if (v.gt(bounds) || v.lt(bounds.add(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.One).mul(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.NegativeOne))) {
                this._throwError("value out-of-bounds", value);
            }
        }
        else if (v.lt(_ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__.Zero) || v.gt(maxUintValue.mask(this.size * 8))) {
            this._throwError("value out-of-bounds", value);
        }
        v = v.toTwos(this.size * 8).mask(this.size * 8);
        if (this.signed) {
            v = v.fromTwos(this.size * 8).toTwos(8 * writer.wordSize);
        }
        return writer.writeValue(v);
    }
    decode(reader) {
        let value = reader.readValue().mask(this.size * 8);
        if (this.signed) {
            value = value.fromTwos(this.size * 8);
        }
        return reader.coerce(this.name, value);
    }
}
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/string.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/string.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringCoder": function() { return /* binding */ StringCoder; }
/* harmony export */ });
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethersproject/strings */ "./node_modules/@ethersproject/strings/lib.esm/utf8.js");
/* harmony import */ var _bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytes */ "./node_modules/@ethersproject/abi/lib.esm/coders/bytes.js");



class StringCoder extends _bytes__WEBPACK_IMPORTED_MODULE_0__.DynamicBytesCoder {
    constructor(localName) {
        super("string", localName);
    }
    defaultValue() {
        return "";
    }
    encode(writer, value) {
        return super.encode(writer, (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8Bytes)(value));
    }
    decode(reader) {
        return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__.toUtf8String)(super.decode(reader));
    }
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/coders/tuple.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/coders/tuple.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TupleCoder": function() { return /* binding */ TupleCoder; }
/* harmony export */ });
/* harmony import */ var _abstract_coder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@ethersproject/abi/lib.esm/coders/array.js");



class TupleCoder extends _abstract_coder__WEBPACK_IMPORTED_MODULE_0__.Coder {
    constructor(coders, localName) {
        let dynamic = false;
        const types = [];
        coders.forEach((coder) => {
            if (coder.dynamic) {
                dynamic = true;
            }
            types.push(coder.type);
        });
        const type = ("tuple(" + types.join(",") + ")");
        super("tuple", type, localName, dynamic);
        this.coders = coders;
    }
    defaultValue() {
        const values = [];
        this.coders.forEach((coder) => {
            values.push(coder.defaultValue());
        });
        // We only output named properties for uniquely named coders
        const uniqueNames = this.coders.reduce((accum, coder) => {
            const name = coder.localName;
            if (name) {
                if (!accum[name]) {
                    accum[name] = 0;
                }
                accum[name]++;
            }
            return accum;
        }, {});
        // Add named values
        this.coders.forEach((coder, index) => {
            let name = coder.localName;
            if (!name || uniqueNames[name] !== 1) {
                return;
            }
            if (name === "length") {
                name = "_length";
            }
            if (values[name] != null) {
                return;
            }
            values[name] = values[index];
        });
        return Object.freeze(values);
    }
    encode(writer, value) {
        return (0,_array__WEBPACK_IMPORTED_MODULE_1__.pack)(writer, this.coders, value);
    }
    decode(reader) {
        return reader.coerce(this.name, (0,_array__WEBPACK_IMPORTED_MODULE_1__.unpack)(reader, this.coders));
    }
}
//# sourceMappingURL=tuple.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/fragments.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/fragments.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatTypes": function() { return /* binding */ FormatTypes; },
/* harmony export */   "ParamType": function() { return /* binding */ ParamType; },
/* harmony export */   "Fragment": function() { return /* binding */ Fragment; },
/* harmony export */   "EventFragment": function() { return /* binding */ EventFragment; },
/* harmony export */   "ConstructorFragment": function() { return /* binding */ ConstructorFragment; },
/* harmony export */   "FunctionFragment": function() { return /* binding */ FunctionFragment; },
/* harmony export */   "ErrorFragment": function() { return /* binding */ ErrorFragment; }
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/abi/lib.esm/_version.js");





const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
const _constructorGuard = {};
let ModifiersBytes = { calldata: true, memory: true, storage: true };
let ModifiersNest = { calldata: true, memory: true };
function checkModifier(type, name) {
    if (type === "bytes" || type === "string") {
        if (ModifiersBytes[name]) {
            return true;
        }
    }
    else if (type === "address") {
        if (name === "payable") {
            return true;
        }
    }
    else if (type.indexOf("[") >= 0 || type === "tuple") {
        if (ModifiersNest[name]) {
            return true;
        }
    }
    if (ModifiersBytes[name] || name === "payable") {
        logger.throwArgumentError("invalid modifier", "name", name);
    }
    return false;
}
// @TODO: Make sure that children of an indexed tuple are marked with a null indexed
function parseParamType(param, allowIndexed) {
    let originalParam = param;
    function throwError(i) {
        logger.throwArgumentError(`unexpected character at position ${i}`, "param", param);
    }
    param = param.replace(/\s/g, " ");
    function newNode(parent) {
        let node = { type: "", name: "", parent: parent, state: { allowType: true } };
        if (allowIndexed) {
            node.indexed = false;
        }
        return node;
    }
    let parent = { type: "", name: "", state: { allowType: true } };
    let node = parent;
    for (let i = 0; i < param.length; i++) {
        let c = param[i];
        switch (c) {
            case "(":
                if (node.state.allowType && node.type === "") {
                    node.type = "tuple";
                }
                else if (!node.state.allowParams) {
                    throwError(i);
                }
                node.state.allowType = false;
                node.type = verifyType(node.type);
                node.components = [newNode(node)];
                node = node.components[0];
                break;
            case ")":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let child = node;
                node = node.parent;
                if (!node) {
                    throwError(i);
                }
                delete child.parent;
                node.state.allowParams = false;
                node.state.allowName = true;
                node.state.allowArray = true;
                break;
            case ",":
                delete node.state;
                if (node.name === "indexed") {
                    if (!allowIndexed) {
                        throwError(i);
                    }
                    node.indexed = true;
                    node.name = "";
                }
                if (checkModifier(node.type, node.name)) {
                    node.name = "";
                }
                node.type = verifyType(node.type);
                let sibling = newNode(node.parent);
                //{ type: "", name: "", parent: node.parent, state: { allowType: true } };
                node.parent.components.push(sibling);
                delete node.parent;
                node = sibling;
                break;
            // Hit a space...
            case " ":
                // If reading type, the type is done and may read a param or name
                if (node.state.allowType) {
                    if (node.type !== "") {
                        node.type = verifyType(node.type);
                        delete node.state.allowType;
                        node.state.allowName = true;
                        node.state.allowParams = true;
                    }
                }
                // If reading name, the name is done
                if (node.state.allowName) {
                    if (node.name !== "") {
                        if (node.name === "indexed") {
                            if (!allowIndexed) {
                                throwError(i);
                            }
                            if (node.indexed) {
                                throwError(i);
                            }
                            node.indexed = true;
                            node.name = "";
                        }
                        else if (checkModifier(node.type, node.name)) {
                            node.name = "";
                        }
                        else {
                            node.state.allowName = false;
                        }
                    }
                }
                break;
            case "[":
                if (!node.state.allowArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.allowArray = false;
                node.state.allowName = false;
                node.state.readArray = true;
                break;
            case "]":
                if (!node.state.readArray) {
                    throwError(i);
                }
                node.type += c;
                node.state.readArray = false;
                node.state.allowArray = true;
                node.state.allowName = true;
                break;
            default:
                if (node.state.allowType) {
                    node.type += c;
                    node.state.allowParams = true;
                    node.state.allowArray = true;
                }
                else if (node.state.allowName) {
                    node.name += c;
                    delete node.state.allowArray;
                }
                else if (node.state.readArray) {
                    node.type += c;
                }
                else {
                    throwError(i);
                }
        }
    }
    if (node.parent) {
        logger.throwArgumentError("unexpected eof", "param", param);
    }
    delete parent.state;
    if (node.name === "indexed") {
        if (!allowIndexed) {
            throwError(originalParam.length - 7);
        }
        if (node.indexed) {
            throwError(originalParam.length - 7);
        }
        node.indexed = true;
        node.name = "";
    }
    else if (checkModifier(node.type, node.name)) {
        node.name = "";
    }
    parent.type = verifyType(parent.type);
    return parent;
}
function populate(object, params) {
    for (let key in params) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_2__.defineReadOnly)(object, key, params[key]);
    }
}
const FormatTypes = Object.freeze({
    // Bare formatting, as is needed for computing a sighash of an event or function
    sighash: "sighash",
    // Human-Readable with Minimal spacing and without names (compact human-readable)
    minimal: "minimal",
    // Human-Readable with nice spacing, including all names
    full: "full",
    // JSON-format a la Solidity
    json: "json"
});
const paramTypeArray = new RegExp(/^(.*)\[([0-9]*)\]$/);
class ParamType {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use fromString", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new ParamType()"
            });
        }
        populate(this, params);
        let match = this.type.match(paramTypeArray);
        if (match) {
            populate(this, {
                arrayLength: parseInt(match[2] || "-1"),
                arrayChildren: ParamType.fromObject({
                    type: match[1],
                    components: this.components
                }),
                baseType: "array"
            });
        }
        else {
            populate(this, {
                arrayLength: null,
                arrayChildren: null,
                baseType: ((this.components != null) ? "tuple" : this.type)
            });
        }
        this._isParamType = true;
        Object.freeze(this);
    }
    // Format the parameter fragment
    //   - sighash: "(uint256,address)"
    //   - minimal: "tuple(uint256,address) indexed"
    //   - full:    "tuple(uint256 foo, address bar) indexed baz"
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            let result = {
                type: ((this.baseType === "tuple") ? "tuple" : this.type),
                name: (this.name || undefined)
            };
            if (typeof (this.indexed) === "boolean") {
                result.indexed = this.indexed;
            }
            if (this.components) {
                result.components = this.components.map((comp) => JSON.parse(comp.format(format)));
            }
            return JSON.stringify(result);
        }
        let result = "";
        // Array
        if (this.baseType === "array") {
            result += this.arrayChildren.format(format);
            result += "[" + (this.arrayLength < 0 ? "" : String(this.arrayLength)) + "]";
        }
        else {
            if (this.baseType === "tuple") {
                if (format !== FormatTypes.sighash) {
                    result += this.type;
                }
                result += "(" + this.components.map((comp) => comp.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ")";
            }
            else {
                result += this.type;
            }
        }
        if (format !== FormatTypes.sighash) {
            if (this.indexed === true) {
                result += " indexed";
            }
            if (format === FormatTypes.full && this.name) {
                result += " " + this.name;
            }
        }
        return result;
    }
    static from(value, allowIndexed) {
        if (typeof (value) === "string") {
            return ParamType.fromString(value, allowIndexed);
        }
        return ParamType.fromObject(value);
    }
    static fromObject(value) {
        if (ParamType.isParamType(value)) {
            return value;
        }
        return new ParamType(_constructorGuard, {
            name: (value.name || null),
            type: verifyType(value.type),
            indexed: ((value.indexed == null) ? null : !!value.indexed),
            components: (value.components ? value.components.map(ParamType.fromObject) : null)
        });
    }
    static fromString(value, allowIndexed) {
        function ParamTypify(node) {
            return ParamType.fromObject({
                name: node.name,
                type: node.type,
                indexed: node.indexed,
                components: node.components
            });
        }
        return ParamTypify(parseParamType(value, !!allowIndexed));
    }
    static isParamType(value) {
        return !!(value != null && value._isParamType);
    }
}
;
function parseParams(value, allowIndex) {
    return splitNesting(value).map((param) => ParamType.fromString(param, allowIndex));
}
class Fragment {
    constructor(constructorGuard, params) {
        if (constructorGuard !== _constructorGuard) {
            logger.throwError("use a static from method", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "new Fragment()"
            });
        }
        populate(this, params);
        this._isFragment = true;
        Object.freeze(this);
    }
    static from(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        if (typeof (value) === "string") {
            return Fragment.fromString(value);
        }
        return Fragment.fromObject(value);
    }
    static fromObject(value) {
        if (Fragment.isFragment(value)) {
            return value;
        }
        switch (value.type) {
            case "function":
                return FunctionFragment.fromObject(value);
            case "event":
                return EventFragment.fromObject(value);
            case "constructor":
                return ConstructorFragment.fromObject(value);
            case "error":
                return ErrorFragment.fromObject(value);
            case "fallback":
            case "receive":
                // @TODO: Something? Maybe return a FunctionFragment? A custom DefaultFunctionFragment?
                return null;
        }
        return logger.throwArgumentError("invalid fragment object", "value", value);
    }
    static fromString(value) {
        // Make sure the "returns" is surrounded by a space and all whitespace is exactly one space
        value = value.replace(/\s/g, " ");
        value = value.replace(/\(/g, " (").replace(/\)/g, ") ").replace(/\s+/g, " ");
        value = value.trim();
        if (value.split(" ")[0] === "event") {
            return EventFragment.fromString(value.substring(5).trim());
        }
        else if (value.split(" ")[0] === "function") {
            return FunctionFragment.fromString(value.substring(8).trim());
        }
        else if (value.split("(")[0].trim() === "constructor") {
            return ConstructorFragment.fromString(value.trim());
        }
        else if (value.split(" ")[0] === "error") {
            return ErrorFragment.fromString(value.substring(5).trim());
        }
        return logger.throwArgumentError("unsupported fragment", "value", value);
    }
    static isFragment(value) {
        return !!(value && value._isFragment);
    }
}
class EventFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "event",
                anonymous: this.anonymous,
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "event ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.anonymous) {
                result += "anonymous ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return EventFragment.fromString(value);
        }
        return EventFragment.fromObject(value);
    }
    static fromObject(value) {
        if (EventFragment.isEventFragment(value)) {
            return value;
        }
        if (value.type !== "event") {
            logger.throwArgumentError("invalid event object", "value", value);
        }
        const params = {
            name: verifyIdentifier(value.name),
            anonymous: value.anonymous,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            type: "event"
        };
        return new EventFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let match = value.match(regexParen);
        if (!match) {
            logger.throwArgumentError("invalid event string", "value", value);
        }
        let anonymous = false;
        match[3].split(" ").forEach((modifier) => {
            switch (modifier.trim()) {
                case "anonymous":
                    anonymous = true;
                    break;
                case "":
                    break;
                default:
                    logger.warn("unknown modifier: " + modifier);
            }
        });
        return EventFragment.fromObject({
            name: match[1].trim(),
            anonymous: anonymous,
            inputs: parseParams(match[2], true),
            type: "event"
        });
    }
    static isEventFragment(value) {
        return (value && value._isFragment && value.type === "event");
    }
}
function parseGas(value, params) {
    params.gas = null;
    let comps = value.split("@");
    if (comps.length !== 1) {
        if (comps.length > 2) {
            logger.throwArgumentError("invalid human-readable ABI signature", "value", value);
        }
        if (!comps[1].match(/^[0-9]+$/)) {
            logger.throwArgumentError("invalid human-readable ABI signature gas", "value", value);
        }
        params.gas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(comps[1]);
        return comps[0];
    }
    return value;
}
function parseModifiers(value, params) {
    params.constant = false;
    params.payable = false;
    params.stateMutability = "nonpayable";
    value.split(" ").forEach((modifier) => {
        switch (modifier.trim()) {
            case "constant":
                params.constant = true;
                break;
            case "payable":
                params.payable = true;
                params.stateMutability = "payable";
                break;
            case "nonpayable":
                params.payable = false;
                params.stateMutability = "nonpayable";
                break;
            case "pure":
                params.constant = true;
                params.stateMutability = "pure";
                break;
            case "view":
                params.constant = true;
                params.stateMutability = "view";
                break;
            case "external":
            case "public":
            case "":
                break;
            default:
                console.log("unknown modifier: " + modifier);
        }
    });
}
function verifyState(value) {
    let result = {
        constant: false,
        payable: true,
        stateMutability: "payable"
    };
    if (value.stateMutability != null) {
        result.stateMutability = value.stateMutability;
        // Set (and check things are consistent) the constant property
        result.constant = (result.stateMutability === "view" || result.stateMutability === "pure");
        if (value.constant != null) {
            if ((!!value.constant) !== result.constant) {
                logger.throwArgumentError("cannot have constant function with mutability " + result.stateMutability, "value", value);
            }
        }
        // Set (and check things are consistent) the payable property
        result.payable = (result.stateMutability === "payable");
        if (value.payable != null) {
            if ((!!value.payable) !== result.payable) {
                logger.throwArgumentError("cannot have payable function with mutability " + result.stateMutability, "value", value);
            }
        }
    }
    else if (value.payable != null) {
        result.payable = !!value.payable;
        // If payable we can assume non-constant; otherwise we can't assume
        if (value.constant == null && !result.payable && value.type !== "constructor") {
            logger.throwArgumentError("unable to determine stateMutability", "value", value);
        }
        result.constant = !!value.constant;
        if (result.constant) {
            result.stateMutability = "view";
        }
        else {
            result.stateMutability = (result.payable ? "payable" : "nonpayable");
        }
        if (result.payable && result.constant) {
            logger.throwArgumentError("cannot have constant payable function", "value", value);
        }
    }
    else if (value.constant != null) {
        result.constant = !!value.constant;
        result.payable = !result.constant;
        result.stateMutability = (result.constant ? "view" : "payable");
    }
    else if (value.type !== "constructor") {
        logger.throwArgumentError("unable to determine stateMutability", "value", value);
    }
    return result;
}
class ConstructorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "constructor",
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
            });
        }
        if (format === FormatTypes.sighash) {
            logger.throwError("cannot format a constructor for sighash", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "format(sighash)"
            });
        }
        let result = "constructor(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (this.stateMutability && this.stateMutability !== "nonpayable") {
            result += this.stateMutability + " ";
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ConstructorFragment.fromString(value);
        }
        return ConstructorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ConstructorFragment.isConstructorFragment(value)) {
            return value;
        }
        if (value.type !== "constructor") {
            logger.throwArgumentError("invalid constructor object", "value", value);
        }
        let state = verifyState(value);
        if (state.constant) {
            logger.throwArgumentError("constructor cannot be constant", "value", value);
        }
        const params = {
            name: null,
            type: value.type,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null)
        };
        return new ConstructorFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "constructor" };
        value = parseGas(value, params);
        let parens = value.match(regexParen);
        if (!parens || parens[1].trim() !== "constructor") {
            logger.throwArgumentError("invalid constructor string", "value", value);
        }
        params.inputs = parseParams(parens[2].trim(), false);
        parseModifiers(parens[3].trim(), params);
        return ConstructorFragment.fromObject(params);
    }
    static isConstructorFragment(value) {
        return (value && value._isFragment && value.type === "constructor");
    }
}
class FunctionFragment extends ConstructorFragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "function",
                name: this.name,
                constant: this.constant,
                stateMutability: ((this.stateMutability !== "nonpayable") ? this.stateMutability : undefined),
                payable: this.payable,
                gas: (this.gas ? this.gas.toNumber() : undefined),
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
                outputs: this.outputs.map((output) => JSON.parse(output.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "function ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        if (format !== FormatTypes.sighash) {
            if (this.stateMutability) {
                if (this.stateMutability !== "nonpayable") {
                    result += (this.stateMutability + " ");
                }
            }
            else if (this.constant) {
                result += "view ";
            }
            if (this.outputs && this.outputs.length) {
                result += "returns (" + this.outputs.map((output) => output.format(format)).join(", ") + ") ";
            }
            if (this.gas != null) {
                result += "@" + this.gas.toString() + " ";
            }
        }
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return FunctionFragment.fromString(value);
        }
        return FunctionFragment.fromObject(value);
    }
    static fromObject(value) {
        if (FunctionFragment.isFunctionFragment(value)) {
            return value;
        }
        if (value.type !== "function") {
            logger.throwArgumentError("invalid function object", "value", value);
        }
        let state = verifyState(value);
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            constant: state.constant,
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : []),
            outputs: (value.outputs ? value.outputs.map(ParamType.fromObject) : []),
            payable: state.payable,
            stateMutability: state.stateMutability,
            gas: (value.gas ? _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_3__.BigNumber.from(value.gas) : null)
        };
        return new FunctionFragment(_constructorGuard, params);
    }
    static fromString(value) {
        let params = { type: "function" };
        value = parseGas(value, params);
        let comps = value.split(" returns ");
        if (comps.length > 2) {
            logger.throwArgumentError("invalid function string", "value", value);
        }
        let parens = comps[0].match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid function signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        parseModifiers(parens[3].trim(), params);
        // We have outputs
        if (comps.length > 1) {
            let returns = comps[1].match(regexParen);
            if (returns[1].trim() != "" || returns[3].trim() != "") {
                logger.throwArgumentError("unexpected tokens", "value", value);
            }
            params.outputs = parseParams(returns[2], false);
        }
        else {
            params.outputs = [];
        }
        return FunctionFragment.fromObject(params);
    }
    static isFunctionFragment(value) {
        return (value && value._isFragment && value.type === "function");
    }
}
//export class StructFragment extends Fragment {
//}
function checkForbidden(fragment) {
    const sig = fragment.format();
    if (sig === "Error(string)" || sig === "Panic(uint256)") {
        logger.throwArgumentError(`cannot specify user defined ${sig} error`, "fragment", fragment);
    }
    return fragment;
}
class ErrorFragment extends Fragment {
    format(format) {
        if (!format) {
            format = FormatTypes.sighash;
        }
        if (!FormatTypes[format]) {
            logger.throwArgumentError("invalid format type", "format", format);
        }
        if (format === FormatTypes.json) {
            return JSON.stringify({
                type: "error",
                name: this.name,
                inputs: this.inputs.map((input) => JSON.parse(input.format(format))),
            });
        }
        let result = "";
        if (format !== FormatTypes.sighash) {
            result += "error ";
        }
        result += this.name + "(" + this.inputs.map((input) => input.format(format)).join((format === FormatTypes.full) ? ", " : ",") + ") ";
        return result.trim();
    }
    static from(value) {
        if (typeof (value) === "string") {
            return ErrorFragment.fromString(value);
        }
        return ErrorFragment.fromObject(value);
    }
    static fromObject(value) {
        if (ErrorFragment.isErrorFragment(value)) {
            return value;
        }
        if (value.type !== "error") {
            logger.throwArgumentError("invalid error object", "value", value);
        }
        const params = {
            type: value.type,
            name: verifyIdentifier(value.name),
            inputs: (value.inputs ? value.inputs.map(ParamType.fromObject) : [])
        };
        return checkForbidden(new ErrorFragment(_constructorGuard, params));
    }
    static fromString(value) {
        let params = { type: "error" };
        let parens = value.match(regexParen);
        if (!parens) {
            logger.throwArgumentError("invalid error signature", "value", value);
        }
        params.name = parens[1].trim();
        if (params.name) {
            verifyIdentifier(params.name);
        }
        params.inputs = parseParams(parens[2], false);
        return checkForbidden(ErrorFragment.fromObject(params));
    }
    static isErrorFragment(value) {
        return (value && value._isFragment && value.type === "error");
    }
}
function verifyType(type) {
    // These need to be transformed to their full description
    if (type.match(/^uint($|[^1-9])/)) {
        type = "uint256" + type.substring(4);
    }
    else if (type.match(/^int($|[^1-9])/)) {
        type = "int256" + type.substring(3);
    }
    // @TODO: more verification
    return type;
}
// See: https://github.com/ethereum/solidity/blob/1f8f1a3db93a548d0555e3e14cfc55a10e25b60e/docs/grammar/SolidityLexer.g4#L234
const regexIdentifier = new RegExp("^[a-zA-Z$_][a-zA-Z0-9$_]*$");
function verifyIdentifier(value) {
    if (!value || !value.match(regexIdentifier)) {
        logger.throwArgumentError(`invalid identifier "${value}"`, "value", value);
    }
    return value;
}
const regexParen = new RegExp("^([^)(]*)\\((.*)\\)([^)(]*)$");
function splitNesting(value) {
    value = value.trim();
    let result = [];
    let accum = "";
    let depth = 0;
    for (let offset = 0; offset < value.length; offset++) {
        let c = value[offset];
        if (c === "," && depth === 0) {
            result.push(accum);
            accum = "";
        }
        else {
            accum += c;
            if (c === "(") {
                depth++;
            }
            else if (c === ")") {
                depth--;
                if (depth === -1) {
                    logger.throwArgumentError("unbalanced parenthesis", "value", value);
                }
            }
        }
    }
    if (accum) {
        result.push(accum);
    }
    return result;
}
//# sourceMappingURL=fragments.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/abi/lib.esm/interface.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ethersproject/abi/lib.esm/interface.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkResultErrors": function() { return /* reexport safe */ _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__.checkResultErrors; },
/* harmony export */   "LogDescription": function() { return /* binding */ LogDescription; },
/* harmony export */   "TransactionDescription": function() { return /* binding */ TransactionDescription; },
/* harmony export */   "ErrorDescription": function() { return /* binding */ ErrorDescription; },
/* harmony export */   "Indexed": function() { return /* binding */ Indexed; },
/* harmony export */   "Interface": function() { return /* binding */ Interface; }
/* harmony export */ });
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/address */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/hash */ "./node_modules/@ethersproject/hash/lib.esm/id.js");
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/keccak256 */ "./node_modules/@ethersproject/keccak256/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _abi_coder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abi-coder */ "./node_modules/@ethersproject/abi/lib.esm/abi-coder.js");
/* harmony import */ var _coders_abstract_coder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coders/abstract-coder */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");
/* harmony import */ var _fragments__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fragments */ "./node_modules/@ethersproject/abi/lib.esm/fragments.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/abi/lib.esm/_version.js");












const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);

class LogDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class TransactionDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class ErrorDescription extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
}
class Indexed extends _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.Description {
    static isIndexed(value) {
        return !!(value && value._isIndexed);
    }
}
const BuiltinErrors = {
    "0x08c379a0": { signature: "Error(string)", name: "Error", inputs: ["string"], reason: true },
    "0x4e487b71": { signature: "Panic(uint256)", name: "Panic", inputs: ["uint256"] }
};
function wrapAccessError(property, error) {
    const wrap = new Error(`deferred error during ABI decoding triggered accessing ${property}`);
    wrap.error = error;
    return wrap;
}
/*
function checkNames(fragment: Fragment, type: "input" | "output", params: Array<ParamType>): void {
    params.reduce((accum, param) => {
        if (param.name) {
            if (accum[param.name]) {
                logger.throwArgumentError(`duplicate ${ type } parameter ${ JSON.stringify(param.name) } in ${ fragment.format("full") }`, "fragment", fragment);
            }
            accum[param.name] = true;
        }
        return accum;
    }, <{ [ name: string ]: boolean }>{ });
}
*/
class Interface {
    constructor(fragments) {
        logger.checkNew(new.target, Interface);
        let abi = [];
        if (typeof (fragments) === "string") {
            abi = JSON.parse(fragments);
        }
        else {
            abi = fragments;
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragments", abi.map((fragment) => {
            return _fragments__WEBPACK_IMPORTED_MODULE_4__.Fragment.from(fragment);
        }).filter((fragment) => (fragment != null)));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_abiCoder", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getAbiCoder")());
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "errors", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "events", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "structs", {});
        // Add all fragments by their signature
        this.fragments.forEach((fragment) => {
            let bucket = null;
            switch (fragment.type) {
                case "constructor":
                    if (this.deploy) {
                        logger.warn("duplicate definition - constructor");
                        return;
                    }
                    //checkNames(fragment, "input", fragment.inputs);
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", fragment);
                    return;
                case "function":
                    //checkNames(fragment, "input", fragment.inputs);
                    //checkNames(fragment, "output", (<FunctionFragment>fragment).outputs);
                    bucket = this.functions;
                    break;
                case "event":
                    //checkNames(fragment, "input", fragment.inputs);
                    bucket = this.events;
                    break;
                case "error":
                    bucket = this.errors;
                    break;
                default:
                    return;
            }
            let signature = fragment.format();
            if (bucket[signature]) {
                logger.warn("duplicate definition - " + signature);
                return;
            }
            bucket[signature] = fragment;
        });
        // If we do not have a constructor add a default
        if (!this.deploy) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "deploy", _fragments__WEBPACK_IMPORTED_MODULE_4__.ConstructorFragment.from({
                payable: false,
                type: "constructor"
            }));
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_isInterface", true);
    }
    format(format) {
        if (!format) {
            format = _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.full;
        }
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.sighash) {
            logger.throwArgumentError("interface does not support formatting sighash", "format", format);
        }
        const abi = this.fragments.map((fragment) => fragment.format(format));
        // We need to re-bundle the JSON fragments a bit
        if (format === _fragments__WEBPACK_IMPORTED_MODULE_4__.FormatTypes.json) {
            return JSON.stringify(abi.map((j) => JSON.parse(j)));
        }
        return abi;
    }
    // Sub-classes can override these to handle other blockchains
    static getAbiCoder() {
        return _abi_coder__WEBPACK_IMPORTED_MODULE_5__.defaultAbiCoder;
    }
    static getAddress(address) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_6__.getAddress)(address);
    }
    static getSighash(fragment) {
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexDataSlice)((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(fragment.format()), 0, 4);
    }
    static getEventTopic(eventFragment) {
        return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(eventFragment.format());
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getFunction(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
            for (const name in this.functions) {
                if (nameOrSignatureOrSighash === this.getSighash(name)) {
                    return this.functions[name];
                }
            }
            logger.throwArgumentError("no matching function", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.functions).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching function", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching functions", "name", name);
            }
            return this.functions[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.functions[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching function", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Find an event definition by any means necessary (unless it is ambiguous)
    getEvent(nameOrSignatureOrTopic) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrTopic)) {
            const topichash = nameOrSignatureOrTopic.toLowerCase();
            for (const name in this.events) {
                if (topichash === this.getEventTopic(name)) {
                    return this.events[name];
                }
            }
            logger.throwArgumentError("no matching event", "topichash", topichash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrTopic.indexOf("(") === -1) {
            const name = nameOrSignatureOrTopic.trim();
            const matching = Object.keys(this.events).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching event", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching events", "name", name);
            }
            return this.events[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.events[_fragments__WEBPACK_IMPORTED_MODULE_4__.EventFragment.fromString(nameOrSignatureOrTopic).format()];
        if (!result) {
            logger.throwArgumentError("no matching event", "signature", nameOrSignatureOrTopic);
        }
        return result;
    }
    // Find a function definition by any means necessary (unless it is ambiguous)
    getError(nameOrSignatureOrSighash) {
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(nameOrSignatureOrSighash)) {
            const getSighash = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash");
            for (const name in this.errors) {
                const error = this.errors[name];
                if (nameOrSignatureOrSighash === getSighash(error)) {
                    return this.errors[name];
                }
            }
            logger.throwArgumentError("no matching error", "sighash", nameOrSignatureOrSighash);
        }
        // It is a bare name, look up the function (will return null if ambiguous)
        if (nameOrSignatureOrSighash.indexOf("(") === -1) {
            const name = nameOrSignatureOrSighash.trim();
            const matching = Object.keys(this.errors).filter((f) => (f.split("(" /* fix:) */)[0] === name));
            if (matching.length === 0) {
                logger.throwArgumentError("no matching error", "name", name);
            }
            else if (matching.length > 1) {
                logger.throwArgumentError("multiple matching errors", "name", name);
            }
            return this.errors[matching[0]];
        }
        // Normalize the signature and lookup the function
        const result = this.errors[_fragments__WEBPACK_IMPORTED_MODULE_4__.FunctionFragment.fromString(nameOrSignatureOrSighash).format()];
        if (!result) {
            logger.throwArgumentError("no matching error", "signature", nameOrSignatureOrSighash);
        }
        return result;
    }
    // Get the sighash (the bytes4 selector) used by Solidity to identify a function
    getSighash(fragment) {
        if (typeof (fragment) === "string") {
            try {
                fragment = this.getFunction(fragment);
            }
            catch (error) {
                try {
                    fragment = this.getError(fragment);
                }
                catch (_) {
                    throw error;
                }
            }
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getSighash")(fragment);
    }
    // Get the topic (the bytes32 hash) used by Solidity to identify an event
    getEventTopic(eventFragment) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        return (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getEventTopic")(eventFragment);
    }
    _decodeParams(params, data) {
        return this._abiCoder.decode(params, data);
    }
    _encodeParams(params, values) {
        return this._abiCoder.encode(params, values);
    }
    encodeDeploy(values) {
        return this._encodeParams(this.deploy.inputs, values || []);
    }
    decodeErrorResult(fragment, data) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(fragment)) {
            logger.throwArgumentError(`data signature does not match error ${fragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
        }
        return this._decodeParams(fragment.inputs, bytes.slice(4));
    }
    encodeErrorResult(fragment, values) {
        if (typeof (fragment) === "string") {
            fragment = this.getError(fragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([
            this.getSighash(fragment),
            this._encodeParams(fragment.inputs, values || [])
        ]));
    }
    // Decode the data for a function call (e.g. tx.data)
    decodeFunctionData(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4)) !== this.getSighash(functionFragment)) {
            logger.throwArgumentError(`data signature does not match function ${functionFragment.name}.`, "data", (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes));
        }
        return this._decodeParams(functionFragment.inputs, bytes.slice(4));
    }
    // Encode the data for a function call (e.g. tx.data)
    encodeFunctionData(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)([
            this.getSighash(functionFragment),
            this._encodeParams(functionFragment.inputs, values || [])
        ]));
    }
    // Decode the result from a function call (e.g. from eth_call)
    decodeFunctionResult(functionFragment, data) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        let bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.arrayify)(data);
        let reason = null;
        let errorArgs = null;
        let errorName = null;
        let errorSignature = null;
        switch (bytes.length % this._abiCoder._getWordSize()) {
            case 0:
                try {
                    return this._abiCoder.decode(functionFragment.outputs, bytes);
                }
                catch (error) { }
                break;
            case 4: {
                const selector = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(bytes.slice(0, 4));
                const builtin = BuiltinErrors[selector];
                if (builtin) {
                    errorArgs = this._abiCoder.decode(builtin.inputs, bytes.slice(4));
                    errorName = builtin.name;
                    errorSignature = builtin.signature;
                    if (builtin.reason) {
                        reason = errorArgs[0];
                    }
                }
                else {
                    try {
                        const error = this.getError(selector);
                        errorArgs = this._abiCoder.decode(error.inputs, bytes.slice(4));
                        errorName = error.name;
                        errorSignature = error.format();
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
                break;
            }
        }
        return logger.throwError("call revert exception", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION, {
            method: functionFragment.format(),
            errorArgs, errorName, errorSignature, reason
        });
    }
    // Encode the result for a function call (e.g. for eth_call)
    encodeFunctionResult(functionFragment, values) {
        if (typeof (functionFragment) === "string") {
            functionFragment = this.getFunction(functionFragment);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(this._abiCoder.encode(functionFragment.outputs, values || []));
    }
    // Create the filter for the event with search criteria (e.g. for eth_filterLog)
    encodeFilterTopics(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (values.length > eventFragment.inputs.length) {
            logger.throwError("too many arguments for " + eventFragment.format(), _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNEXPECTED_ARGUMENT, {
                argument: "values",
                value: values
            });
        }
        let topics = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        const encodeTopic = (param, value) => {
            if (param.type === "string") {
                return (0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value);
            }
            else if (param.type === "bytes") {
                return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value));
            }
            // Check addresses are valid
            if (param.type === "address") {
                this._abiCoder.encode(["address"], [value]);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexZeroPad)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(value), 32);
        };
        values.forEach((value, index) => {
            let param = eventFragment.inputs[index];
            if (!param.indexed) {
                if (value != null) {
                    logger.throwArgumentError("cannot filter non-indexed parameters; must be null", ("contract." + param.name), value);
                }
                return;
            }
            if (value == null) {
                topics.push(null);
            }
            else if (param.baseType === "array" || param.baseType === "tuple") {
                logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
            }
            else if (Array.isArray(value)) {
                topics.push(value.map((value) => encodeTopic(param, value)));
            }
            else {
                topics.push(encodeTopic(param, value));
            }
        });
        // Trim off trailing nulls
        while (topics.length && topics[topics.length - 1] === null) {
            topics.pop();
        }
        return topics;
    }
    encodeEventLog(eventFragment, values) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        const topics = [];
        const dataTypes = [];
        const dataValues = [];
        if (!eventFragment.anonymous) {
            topics.push(this.getEventTopic(eventFragment));
        }
        if (values.length !== eventFragment.inputs.length) {
            logger.throwArgumentError("event arguments/values mismatch", "values", values);
        }
        eventFragment.inputs.forEach((param, index) => {
            const value = values[index];
            if (param.indexed) {
                if (param.type === "string") {
                    topics.push((0,_ethersproject_hash__WEBPACK_IMPORTED_MODULE_8__.id)(value));
                }
                else if (param.type === "bytes") {
                    topics.push((0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_9__.keccak256)(value));
                }
                else if (param.baseType === "tuple" || param.baseType === "array") {
                    // @TODO
                    throw new Error("not implemented");
                }
                else {
                    topics.push(this._abiCoder.encode([param.type], [value]));
                }
            }
            else {
                dataTypes.push(param);
                dataValues.push(value);
            }
        });
        return {
            data: this._abiCoder.encode(dataTypes, dataValues),
            topics: topics
        };
    }
    // Decode a filter for the event and the search criteria
    decodeEventLog(eventFragment, data, topics) {
        if (typeof (eventFragment) === "string") {
            eventFragment = this.getEvent(eventFragment);
        }
        if (topics != null && !eventFragment.anonymous) {
            let topicHash = this.getEventTopic(eventFragment);
            if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.isHexString)(topics[0], 32) || topics[0].toLowerCase() !== topicHash) {
                logger.throwError("fragment/topic mismatch", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, { argument: "topics[0]", expected: topicHash, value: topics[0] });
            }
            topics = topics.slice(1);
        }
        let indexed = [];
        let nonIndexed = [];
        let dynamic = [];
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
                    indexed.push(_fragments__WEBPACK_IMPORTED_MODULE_4__.ParamType.fromObject({ type: "bytes32", name: param.name }));
                    dynamic.push(true);
                }
                else {
                    indexed.push(param);
                    dynamic.push(false);
                }
            }
            else {
                nonIndexed.push(param);
                dynamic.push(false);
            }
        });
        let resultIndexed = (topics != null) ? this._abiCoder.decode(indexed, (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.concat)(topics)) : null;
        let resultNonIndexed = this._abiCoder.decode(nonIndexed, data, true);
        let result = [];
        let nonIndexedIndex = 0, indexedIndex = 0;
        eventFragment.inputs.forEach((param, index) => {
            if (param.indexed) {
                if (resultIndexed == null) {
                    result[index] = new Indexed({ _isIndexed: true, hash: null });
                }
                else if (dynamic[index]) {
                    result[index] = new Indexed({ _isIndexed: true, hash: resultIndexed[indexedIndex++] });
                }
                else {
                    try {
                        result[index] = resultIndexed[indexedIndex++];
                    }
                    catch (error) {
                        result[index] = error;
                    }
                }
            }
            else {
                try {
                    result[index] = resultNonIndexed[nonIndexedIndex++];
                }
                catch (error) {
                    result[index] = error;
                }
            }
            // Add the keyword argument if named and safe
            if (param.name && result[param.name] == null) {
                const value = result[index];
                // Make error named values throw on access
                if (value instanceof Error) {
                    Object.defineProperty(result, param.name, {
                        enumerable: true,
                        get: () => { throw wrapAccessError(`property ${JSON.stringify(param.name)}`, value); }
                    });
                }
                else {
                    result[param.name] = value;
                }
            }
        });
        // Make all error indexed values throw on access
        for (let i = 0; i < result.length; i++) {
            const value = result[i];
            if (value instanceof Error) {
                Object.defineProperty(result, i, {
                    enumerable: true,
                    get: () => { throw wrapAccessError(`index ${i}`, value); }
                });
            }
        }
        return Object.freeze(result);
    }
    // Given a transaction, find the matching function fragment (if any) and
    // determine all its properties and call parameters
    parseTransaction(tx) {
        let fragment = this.getFunction(tx.data.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new TransactionDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + tx.data.substring(10)),
            functionFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
            value: _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_10__.BigNumber.from(tx.value || "0"),
        });
    }
    // @TODO
    //parseCallResult(data: BytesLike): ??
    // Given an event log, find the matching event fragment (if any) and
    // determine all its properties and values
    parseLog(log) {
        let fragment = this.getEvent(log.topics[0]);
        if (!fragment || fragment.anonymous) {
            return null;
        }
        // @TODO: If anonymous, and the only method, and the input count matches, should we parse?
        //        Probably not, because just because it is the only event in the ABI does
        //        not mean we have the full ABI; maybe just a fragment?
        return new LogDescription({
            eventFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            topic: this.getEventTopic(fragment),
            args: this.decodeEventLog(fragment, log.data, log.topics)
        });
    }
    parseError(data) {
        const hexData = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_7__.hexlify)(data);
        let fragment = this.getError(hexData.substring(0, 10).toLowerCase());
        if (!fragment) {
            return null;
        }
        return new ErrorDescription({
            args: this._abiCoder.decode(fragment.inputs, "0x" + hexData.substring(10)),
            errorFragment: fragment,
            name: fragment.name,
            signature: fragment.format(),
            sighash: this.getSighash(fragment),
        });
    }
    /*
    static from(value: Array<Fragment | string | JsonAbi> | string | Interface) {
        if (Interface.isInterface(value)) {
            return value;
        }
        if (typeof(value) === "string") {
            return new Interface(JSON.parse(value));
        }
        return new Interface(value);
    }
    */
    static isInterface(value) {
        return !!(value && value._isInterface);
    }
}
//# sourceMappingURL=interface.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/contracts/lib.esm/_version.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/_version.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "version": function() { return /* binding */ version; }
/* harmony export */ });
const version = "contracts/5.5.0";
//# sourceMappingURL=_version.js.map

/***/ }),

/***/ "./node_modules/@ethersproject/contracts/lib.esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ethersproject/contracts/lib.esm/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseContract": function() { return /* binding */ BaseContract; },
/* harmony export */   "Contract": function() { return /* binding */ Contract; },
/* harmony export */   "ContractFactory": function() { return /* binding */ ContractFactory; }
/* harmony export */ });
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/@ethersproject/abi/lib.esm/coders/abstract-coder.js");
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ethersproject/abi */ "./node_modules/@ethersproject/abi/lib.esm/interface.js");
/* harmony import */ var _ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/abstract-provider */ "./node_modules/@ethersproject/abstract-provider/lib.esm/index.js");
/* harmony import */ var _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/abstract-signer */ "./node_modules/@ethersproject/abstract-signer/lib.esm/index.js");
/* harmony import */ var _ethersproject_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/address */ "./node_modules/@ethersproject/address/lib.esm/index.js");
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ethersproject/bignumber */ "./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js");
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/bytes */ "./node_modules/@ethersproject/bytes/lib.esm/index.js");
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ethersproject/properties */ "./node_modules/@ethersproject/properties/lib.esm/index.js");
/* harmony import */ var _ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/transactions */ "./node_modules/@ethersproject/transactions/lib.esm/index.js");
/* harmony import */ var _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ethersproject/logger */ "./node_modules/@ethersproject/logger/lib.esm/index.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version */ "./node_modules/@ethersproject/contracts/lib.esm/_version.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










const logger = new _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger(_version__WEBPACK_IMPORTED_MODULE_1__.version);
;
;
///////////////////////////////
const allowedTransactionKeys = {
    chainId: true, data: true, from: true, gasLimit: true, gasPrice: true, nonce: true, to: true, value: true,
    type: true, accessList: true,
    maxFeePerGas: true, maxPriorityFeePerGas: true,
    customData: true
};
function resolveName(resolver, nameOrPromise) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = yield nameOrPromise;
        if (typeof (name) !== "string") {
            logger.throwArgumentError("invalid address or ENS name", "name", name);
        }
        // If it is already an address, just use it (after adding checksum)
        try {
            return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(name);
        }
        catch (error) { }
        if (!resolver) {
            logger.throwError("a provider or signer is needed to resolve ENS names", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "resolveName"
            });
        }
        const address = yield resolver.resolveName(name);
        if (address == null) {
            logger.throwArgumentError("resolver or addr is not configured for ENS name", "name", name);
        }
        return address;
    });
}
// Recursively replaces ENS names with promises to resolve the name and resolves all properties
function resolveAddresses(resolver, value, paramType) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Array.isArray(paramType)) {
            return yield Promise.all(paramType.map((paramType, index) => {
                return resolveAddresses(resolver, ((Array.isArray(value)) ? value[index] : value[paramType.name]), paramType);
            }));
        }
        if (paramType.type === "address") {
            return yield resolveName(resolver, value);
        }
        if (paramType.type === "tuple") {
            return yield resolveAddresses(resolver, value, paramType.components);
        }
        if (paramType.baseType === "array") {
            if (!Array.isArray(value)) {
                return Promise.reject(logger.makeError("invalid value for array", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.INVALID_ARGUMENT, {
                    argument: "value",
                    value
                }));
            }
            return yield Promise.all(value.map((v) => resolveAddresses(resolver, v, paramType.arrayChildren)));
        }
        return value;
    });
}
function populateTransaction(contract, fragment, args) {
    return __awaiter(this, void 0, void 0, function* () {
        // If an extra argument is given, it is overrides
        let overrides = {};
        if (args.length === fragment.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
            overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
        }
        // Make sure the parameter count matches
        logger.checkArgumentCount(args.length, fragment.inputs.length, "passed to contract");
        // Populate "from" override (allow promises)
        if (contract.signer) {
            if (overrides.from) {
                // Contracts with a Signer are from the Signer's frame-of-reference;
                // but we allow overriding "from" if it matches the signer
                overrides.from = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
                    override: resolveName(contract.signer, overrides.from),
                    signer: contract.signer.getAddress()
                }).then((check) => __awaiter(this, void 0, void 0, function* () {
                    if ((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(check.signer) !== check.override) {
                        logger.throwError("Contract with a Signer cannot override from", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                            operation: "overrides.from"
                        });
                    }
                    return check.override;
                }));
            }
            else {
                overrides.from = contract.signer.getAddress();
            }
        }
        else if (overrides.from) {
            overrides.from = resolveName(contract.provider, overrides.from);
            //} else {
            // Contracts without a signer can override "from", and if
            // unspecified the zero address is used
            //overrides.from = AddressZero;
        }
        // Wait for all dependencies to be resolved (prefer the signer over the provider)
        const resolved = yield (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)({
            args: resolveAddresses(contract.signer || contract.provider, args, fragment.inputs),
            address: contract.resolvedAddress,
            overrides: ((0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.resolveProperties)(overrides) || {})
        });
        // The ABI coded transaction
        const data = contract.interface.encodeFunctionData(fragment, resolved.args);
        const tx = {
            data: data,
            to: resolved.address
        };
        // Resolved Overrides
        const ro = resolved.overrides;
        // Populate simple overrides
        if (ro.nonce != null) {
            tx.nonce = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.nonce).toNumber();
        }
        if (ro.gasLimit != null) {
            tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasLimit);
        }
        if (ro.gasPrice != null) {
            tx.gasPrice = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.gasPrice);
        }
        if (ro.maxFeePerGas != null) {
            tx.maxFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxFeePerGas);
        }
        if (ro.maxPriorityFeePerGas != null) {
            tx.maxPriorityFeePerGas = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.maxPriorityFeePerGas);
        }
        if (ro.from != null) {
            tx.from = ro.from;
        }
        if (ro.type != null) {
            tx.type = ro.type;
        }
        if (ro.accessList != null) {
            tx.accessList = (0,_ethersproject_transactions__WEBPACK_IMPORTED_MODULE_5__.accessListify)(ro.accessList);
        }
        // If there was no "gasLimit" override, but the ABI specifies a default, use it
        if (tx.gasLimit == null && fragment.gas != null) {
            // Compute the intrinsic gas cost for this transaction
            // @TODO: This is based on the yellow paper as of Petersburg; this is something
            // we may wish to parameterize in v6 as part of the Network object. Since this
            // is always a non-nil to address, we can ignore G_create, but may wish to add
            // similar logic to the ContractFactory.
            let intrinsic = 21000;
            const bytes = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.arrayify)(data);
            for (let i = 0; i < bytes.length; i++) {
                intrinsic += 4;
                if (bytes[i]) {
                    intrinsic += 64;
                }
            }
            tx.gasLimit = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(fragment.gas).add(intrinsic);
        }
        // Populate "value" override
        if (ro.value) {
            const roValue = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(ro.value);
            if (!roValue.isZero() && !fragment.payable) {
                logger.throwError("non-payable method cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: overrides.value
                });
            }
            tx.value = roValue;
        }
        if (ro.customData) {
            tx.customData = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(ro.customData);
        }
        // Remove the overrides
        delete overrides.nonce;
        delete overrides.gasLimit;
        delete overrides.gasPrice;
        delete overrides.from;
        delete overrides.value;
        delete overrides.type;
        delete overrides.accessList;
        delete overrides.maxFeePerGas;
        delete overrides.maxPriorityFeePerGas;
        delete overrides.customData;
        // Make sure there are no stray overrides, which may indicate a
        // typo or using an unsupported key.
        const leftovers = Object.keys(overrides).filter((key) => (overrides[key] != null));
        if (leftovers.length) {
            logger.throwError(`cannot override ${leftovers.map((l) => JSON.stringify(l)).join(",")}`, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "overrides",
                overrides: leftovers
            });
        }
        return tx;
    });
}
function buildPopulate(contract, fragment) {
    return function (...args) {
        return populateTransaction(contract, fragment, args);
    };
}
function buildEstimate(contract, fragment) {
    const signerOrProvider = (contract.signer || contract.provider);
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!signerOrProvider) {
                logger.throwError("estimate require a provider or signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "estimateGas"
                });
            }
            const tx = yield populateTransaction(contract, fragment, args);
            return yield signerOrProvider.estimateGas(tx);
        });
    };
}
function addContractWait(contract, tx) {
    const wait = tx.wait.bind(tx);
    tx.wait = (confirmations) => {
        return wait(confirmations).then((receipt) => {
            receipt.events = receipt.logs.map((log) => {
                let event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
                let parsed = null;
                try {
                    parsed = contract.interface.parseLog(log);
                }
                catch (e) { }
                // Successfully parsed the event log; include it
                if (parsed) {
                    event.args = parsed.args;
                    event.decode = (data, topics) => {
                        return contract.interface.decodeEventLog(parsed.eventFragment, data, topics);
                    };
                    event.event = parsed.name;
                    event.eventSignature = parsed.signature;
                }
                // Useful operations
                event.removeListener = () => { return contract.provider; };
                event.getBlock = () => {
                    return contract.provider.getBlock(receipt.blockHash);
                };
                event.getTransaction = () => {
                    return contract.provider.getTransaction(receipt.transactionHash);
                };
                event.getTransactionReceipt = () => {
                    return Promise.resolve(receipt);
                };
                return event;
            });
            return receipt;
        });
    };
}
function buildCall(contract, fragment, collapseSimple) {
    const signerOrProvider = (contract.signer || contract.provider);
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            // Extract the "blockTag" override if present
            let blockTag = undefined;
            if (args.length === fragment.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
                const overrides = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
                if (overrides.blockTag != null) {
                    blockTag = yield overrides.blockTag;
                }
                delete overrides.blockTag;
                args.push(overrides);
            }
            // If the contract was just deployed, wait until it is mined
            if (contract.deployTransaction != null) {
                yield contract._deployed(blockTag);
            }
            // Call a node and get the result
            const tx = yield populateTransaction(contract, fragment, args);
            const result = yield signerOrProvider.call(tx, blockTag);
            try {
                let value = contract.interface.decodeFunctionResult(fragment, result);
                if (collapseSimple && fragment.outputs.length === 1) {
                    value = value[0];
                }
                return value;
            }
            catch (error) {
                if (error.code === _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.CALL_EXCEPTION) {
                    error.address = contract.address;
                    error.args = args;
                    error.transaction = tx;
                }
                throw error;
            }
        });
    };
}
function buildSend(contract, fragment) {
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!contract.signer) {
                logger.throwError("sending a transaction requires a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "sendTransaction"
                });
            }
            // If the contract was just deployed, wait until it is mined
            if (contract.deployTransaction != null) {
                yield contract._deployed();
            }
            const txRequest = yield populateTransaction(contract, fragment, args);
            const tx = yield contract.signer.sendTransaction(txRequest);
            // Tweak the tx.wait so the receipt has extra properties
            addContractWait(contract, tx);
            return tx;
        });
    };
}
function buildDefault(contract, fragment, collapseSimple) {
    if (fragment.constant) {
        return buildCall(contract, fragment, collapseSimple);
    }
    return buildSend(contract, fragment);
}
function getEventTag(filter) {
    if (filter.address && (filter.topics == null || filter.topics.length === 0)) {
        return "*";
    }
    return (filter.address || "*") + "@" + (filter.topics ? filter.topics.map((topic) => {
        if (Array.isArray(topic)) {
            return topic.join("|");
        }
        return topic;
    }).join(":") : "");
}
class RunningEvent {
    constructor(tag, filter) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "tag", tag);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filter", filter);
        this._listeners = [];
    }
    addListener(listener, once) {
        this._listeners.push({ listener: listener, once: once });
    }
    removeListener(listener) {
        let done = false;
        this._listeners = this._listeners.filter((item) => {
            if (done || item.listener !== listener) {
                return true;
            }
            done = true;
            return false;
        });
    }
    removeAllListeners() {
        this._listeners = [];
    }
    listeners() {
        return this._listeners.map((i) => i.listener);
    }
    listenerCount() {
        return this._listeners.length;
    }
    run(args) {
        const listenerCount = this.listenerCount();
        this._listeners = this._listeners.filter((item) => {
            const argsCopy = args.slice();
            // Call the callback in the next event loop
            setTimeout(() => {
                item.listener.apply(this, argsCopy);
            }, 0);
            // Reschedule it if it not "once"
            return !(item.once);
        });
        return listenerCount;
    }
    prepareEvent(event) {
    }
    // Returns the array that will be applied to an emit
    getEmit(event) {
        return [event];
    }
}
class ErrorRunningEvent extends RunningEvent {
    constructor() {
        super("error", null);
    }
}
// @TODO Fragment should inherit Wildcard? and just override getEmit?
//       or have a common abstract super class, with enough constructor
//       options to configure both.
// A Fragment Event will populate all the properties that Wildcard
// will, and additionally dereference the arguments when emitting
class FragmentRunningEvent extends RunningEvent {
    constructor(address, contractInterface, fragment, topics) {
        const filter = {
            address: address
        };
        let topic = contractInterface.getEventTopic(fragment);
        if (topics) {
            if (topic !== topics[0]) {
                logger.throwArgumentError("topic mismatch", "topics", topics);
            }
            filter.topics = topics.slice();
        }
        else {
            filter.topics = [topic];
        }
        super(getEventTag(filter), filter);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "fragment", fragment);
    }
    prepareEvent(event) {
        super.prepareEvent(event);
        event.event = this.fragment.name;
        event.eventSignature = this.fragment.format();
        event.decode = (data, topics) => {
            return this.interface.decodeEventLog(this.fragment, data, topics);
        };
        try {
            event.args = this.interface.decodeEventLog(this.fragment, event.data, event.topics);
        }
        catch (error) {
            event.args = null;
            event.decodeError = error;
        }
    }
    getEmit(event) {
        const errors = (0,_ethersproject_abi__WEBPACK_IMPORTED_MODULE_7__.checkResultErrors)(event.args);
        if (errors.length) {
            throw errors[0].error;
        }
        const args = (event.args || []).slice();
        args.push(event);
        return args;
    }
}
// A Wildcard Event will attempt to populate:
//  - event            The name of the event name
//  - eventSignature   The full signature of the event
//  - decode           A function to decode data and topics
//  - args             The decoded data and topics
class WildcardRunningEvent extends RunningEvent {
    constructor(address, contractInterface) {
        super("*", { address: address });
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", contractInterface);
    }
    prepareEvent(event) {
        super.prepareEvent(event);
        try {
            const parsed = this.interface.parseLog(event);
            event.event = parsed.name;
            event.eventSignature = parsed.signature;
            event.decode = (data, topics) => {
                return this.interface.decodeEventLog(parsed.eventFragment, data, topics);
            };
            event.args = parsed.args;
        }
        catch (error) {
            // No matching event
        }
    }
}
class BaseContract {
    constructor(addressOrName, contractInterface, signerOrProvider) {
        logger.checkNew(new.target, Contract);
        // @TODO: Maybe still check the addressOrName looks like a valid address or name?
        //address = getAddress(address);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
        if (signerOrProvider == null) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", null);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
        }
        else if (_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signerOrProvider)) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider.provider || null);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signerOrProvider);
        }
        else if (_ethersproject_abstract_provider__WEBPACK_IMPORTED_MODULE_9__.Provider.isProvider(signerOrProvider)) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "provider", signerOrProvider);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", null);
        }
        else {
            logger.throwArgumentError("invalid signer or provider", "signerOrProvider", signerOrProvider);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "callStatic", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "estimateGas", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "functions", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "populateTransaction", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "filters", {});
        {
            const uniqueFilters = {};
            Object.keys(this.interface.events).forEach((eventSignature) => {
                const event = this.interface.events[eventSignature];
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, eventSignature, (...args) => {
                    return {
                        address: this.address,
                        topics: this.interface.encodeFilterTopics(event, args)
                    };
                });
                if (!uniqueFilters[event.name]) {
                    uniqueFilters[event.name] = [];
                }
                uniqueFilters[event.name].push(eventSignature);
            });
            Object.keys(uniqueFilters).forEach((name) => {
                const filters = uniqueFilters[name];
                if (filters.length === 1) {
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.filters, name, this.filters[filters[0]]);
                }
                else {
                    logger.warn(`Duplicate definition of ${name} (${filters.join(", ")})`);
                }
            });
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_runningEvents", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "_wrappedEmits", {});
        if (addressOrName == null) {
            logger.throwArgumentError("invalid contract address or ENS name", "addressOrName", addressOrName);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "address", addressOrName);
        if (this.provider) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", resolveName(this.provider, addressOrName));
        }
        else {
            try {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "resolvedAddress", Promise.resolve((0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getAddress)(addressOrName)));
            }
            catch (error) {
                // Without a provider, we cannot use ENS names
                logger.throwError("provider is required to use ENS name as contract address", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new Contract"
                });
            }
        }
        const uniqueNames = {};
        const uniqueSignatures = {};
        Object.keys(this.interface.functions).forEach((signature) => {
            const fragment = this.interface.functions[signature];
            // Check that the signature is unique; if not the ABI generation has
            // not been cleaned or may be incorrectly generated
            if (uniqueSignatures[signature]) {
                logger.warn(`Duplicate ABI entry for ${JSON.stringify(signature)}`);
                return;
            }
            uniqueSignatures[signature] = true;
            // Track unique names; we only expose bare named functions if they
            // are ambiguous
            {
                const name = fragment.name;
                if (!uniqueNames[`%${name}`]) {
                    uniqueNames[`%${name}`] = [];
                }
                uniqueNames[`%${name}`].push(signature);
            }
            if (this[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, signature, buildDefault(this, fragment, true));
            }
            // We do not collapse simple calls on this bucket, which allows
            // frameworks to safely use this without introspection as well as
            // allows decoding error recovery.
            if (this.functions[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, signature, buildDefault(this, fragment, false));
            }
            if (this.callStatic[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, signature, buildCall(this, fragment, true));
            }
            if (this.populateTransaction[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, signature, buildPopulate(this, fragment));
            }
            if (this.estimateGas[signature] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, signature, buildEstimate(this, fragment));
            }
        });
        Object.keys(uniqueNames).forEach((name) => {
            // Ambiguous names to not get attached as bare names
            const signatures = uniqueNames[name];
            if (signatures.length > 1) {
                return;
            }
            // Strip off the leading "%" used for prototype protection
            name = name.substring(1);
            const signature = signatures[0];
            // If overwriting a member property that is null, swallow the error
            try {
                if (this[name] == null) {
                    (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, name, this[signature]);
                }
            }
            catch (e) { }
            if (this.functions[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.functions, name, this.functions[signature]);
            }
            if (this.callStatic[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.callStatic, name, this.callStatic[signature]);
            }
            if (this.populateTransaction[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.populateTransaction, name, this.populateTransaction[signature]);
            }
            if (this.estimateGas[name] == null) {
                (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this.estimateGas, name, this.estimateGas[signature]);
            }
        });
    }
    static getContractAddress(transaction) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(transaction);
    }
    static getInterface(contractInterface) {
        if (_ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface.isInterface(contractInterface)) {
            return contractInterface;
        }
        return new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Interface(contractInterface);
    }
    // @TODO: Allow timeout?
    deployed() {
        return this._deployed();
    }
    _deployed(blockTag) {
        if (!this._deployedPromise) {
            // If we were just deployed, we know the transaction we should occur in
            if (this.deployTransaction) {
                this._deployedPromise = this.deployTransaction.wait().then(() => {
                    return this;
                });
            }
            else {
                // @TODO: Once we allow a timeout to be passed in, we will wait
                // up to that many blocks for getCode
                // Otherwise, poll for our code to be deployed
                this._deployedPromise = this.provider.getCode(this.address, blockTag).then((code) => {
                    if (code === "0x") {
                        logger.throwError("contract not deployed", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                            contractAddress: this.address,
                            operation: "getDeployed"
                        });
                    }
                    return this;
                });
            }
        }
        return this._deployedPromise;
    }
    // @TODO:
    // estimateFallback(overrides?: TransactionRequest): Promise<BigNumber>
    // @TODO:
    // estimateDeploy(bytecode: string, ...args): Promise<BigNumber>
    fallback(overrides) {
        if (!this.signer) {
            logger.throwError("sending a transactions require a signer", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: "sendTransaction(fallback)" });
        }
        const tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(overrides || {});
        ["from", "to"].forEach(function (key) {
            if (tx[key] == null) {
                return;
            }
            logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: key });
        });
        tx.to = this.resolvedAddress;
        return this.deployed().then(() => {
            return this.signer.sendTransaction(tx);
        });
    }
    // Reconnect to a different signer or provider
    connect(signerOrProvider) {
        if (typeof (signerOrProvider) === "string") {
            signerOrProvider = new _ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.VoidSigner(signerOrProvider, this.provider);
        }
        const contract = new (this.constructor)(this.address, this.interface, signerOrProvider);
        if (this.deployTransaction) {
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", this.deployTransaction);
        }
        return contract;
    }
    // Re-attach to a different on-chain instance of this contract
    attach(addressOrName) {
        return new (this.constructor)(addressOrName, this.interface, this.signer || this.provider);
    }
    static isIndexed(value) {
        return _ethersproject_abi__WEBPACK_IMPORTED_MODULE_10__.Indexed.isIndexed(value);
    }
    _normalizeRunningEvent(runningEvent) {
        // Already have an instance of this event running; we can re-use it
        if (this._runningEvents[runningEvent.tag]) {
            return this._runningEvents[runningEvent.tag];
        }
        return runningEvent;
    }
    _getRunningEvent(eventName) {
        if (typeof (eventName) === "string") {
            // Listen for "error" events (if your contract has an error event, include
            // the full signature to bypass this special event keyword)
            if (eventName === "error") {
                return this._normalizeRunningEvent(new ErrorRunningEvent());
            }
            // Listen for any event that is registered
            if (eventName === "event") {
                return this._normalizeRunningEvent(new RunningEvent("event", null));
            }
            // Listen for any event
            if (eventName === "*") {
                return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
            }
            // Get the event Fragment (throws if ambiguous/unknown event)
            const fragment = this.interface.getEvent(eventName);
            return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment));
        }
        // We have topics to filter by...
        if (eventName.topics && eventName.topics.length > 0) {
            // Is it a known topichash? (throws if no matching topichash)
            try {
                const topic = eventName.topics[0];
                if (typeof (topic) !== "string") {
                    throw new Error("invalid topic"); // @TODO: May happen for anonymous events
                }
                const fragment = this.interface.getEvent(topic);
                return this._normalizeRunningEvent(new FragmentRunningEvent(this.address, this.interface, fragment, eventName.topics));
            }
            catch (error) { }
            // Filter by the unknown topichash
            const filter = {
                address: this.address,
                topics: eventName.topics
            };
            return this._normalizeRunningEvent(new RunningEvent(getEventTag(filter), filter));
        }
        return this._normalizeRunningEvent(new WildcardRunningEvent(this.address, this.interface));
    }
    _checkRunningEvents(runningEvent) {
        if (runningEvent.listenerCount() === 0) {
            delete this._runningEvents[runningEvent.tag];
            // If we have a poller for this, remove it
            const emit = this._wrappedEmits[runningEvent.tag];
            if (emit && runningEvent.filter) {
                this.provider.off(runningEvent.filter, emit);
                delete this._wrappedEmits[runningEvent.tag];
            }
        }
    }
    // Subclasses can override this to gracefully recover
    // from parse errors if they wish
    _wrapEvent(runningEvent, log, listener) {
        const event = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.deepCopy)(log);
        event.removeListener = () => {
            if (!listener) {
                return;
            }
            runningEvent.removeListener(listener);
            this._checkRunningEvents(runningEvent);
        };
        event.getBlock = () => { return this.provider.getBlock(log.blockHash); };
        event.getTransaction = () => { return this.provider.getTransaction(log.transactionHash); };
        event.getTransactionReceipt = () => { return this.provider.getTransactionReceipt(log.transactionHash); };
        // This may throw if the topics and data mismatch the signature
        runningEvent.prepareEvent(event);
        return event;
    }
    _addEventListener(runningEvent, listener, once) {
        if (!this.provider) {
            logger.throwError("events require a provider or a signer with a provider", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: "once" });
        }
        runningEvent.addListener(listener, once);
        // Track this running event and its listeners (may already be there; but no hard in updating)
        this._runningEvents[runningEvent.tag] = runningEvent;
        // If we are not polling the provider, start polling
        if (!this._wrappedEmits[runningEvent.tag]) {
            const wrappedEmit = (log) => {
                let event = this._wrapEvent(runningEvent, log, listener);
                // Try to emit the result for the parameterized event...
                if (event.decodeError == null) {
                    try {
                        const args = runningEvent.getEmit(event);
                        this.emit(runningEvent.filter, ...args);
                    }
                    catch (error) {
                        event.decodeError = error.error;
                    }
                }
                // Always emit "event" for fragment-base events
                if (runningEvent.filter != null) {
                    this.emit("event", event);
                }
                // Emit "error" if there was an error
                if (event.decodeError != null) {
                    this.emit("error", event.decodeError, event);
                }
            };
            this._wrappedEmits[runningEvent.tag] = wrappedEmit;
            // Special events, like "error" do not have a filter
            if (runningEvent.filter != null) {
                this.provider.on(runningEvent.filter, wrappedEmit);
            }
        }
    }
    queryFilter(event, fromBlockOrBlockhash, toBlock) {
        const runningEvent = this._getRunningEvent(event);
        const filter = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(runningEvent.filter);
        if (typeof (fromBlockOrBlockhash) === "string" && (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(fromBlockOrBlockhash, 32)) {
            if (toBlock != null) {
                logger.throwArgumentError("cannot specify toBlock with blockhash", "toBlock", toBlock);
            }
            filter.blockHash = fromBlockOrBlockhash;
        }
        else {
            filter.fromBlock = ((fromBlockOrBlockhash != null) ? fromBlockOrBlockhash : 0);
            filter.toBlock = ((toBlock != null) ? toBlock : "latest");
        }
        return this.provider.getLogs(filter).then((logs) => {
            return logs.map((log) => this._wrapEvent(runningEvent, log, null));
        });
    }
    on(event, listener) {
        this._addEventListener(this._getRunningEvent(event), listener, false);
        return this;
    }
    once(event, listener) {
        this._addEventListener(this._getRunningEvent(event), listener, true);
        return this;
    }
    emit(eventName, ...args) {
        if (!this.provider) {
            return false;
        }
        const runningEvent = this._getRunningEvent(eventName);
        const result = (runningEvent.run(args) > 0);
        // May have drained all the "once" events; check for living events
        this._checkRunningEvents(runningEvent);
        return result;
    }
    listenerCount(eventName) {
        if (!this.provider) {
            return 0;
        }
        if (eventName == null) {
            return Object.keys(this._runningEvents).reduce((accum, key) => {
                return accum + this._runningEvents[key].listenerCount();
            }, 0);
        }
        return this._getRunningEvent(eventName).listenerCount();
    }
    listeners(eventName) {
        if (!this.provider) {
            return [];
        }
        if (eventName == null) {
            const result = [];
            for (let tag in this._runningEvents) {
                this._runningEvents[tag].listeners().forEach((listener) => {
                    result.push(listener);
                });
            }
            return result;
        }
        return this._getRunningEvent(eventName).listeners();
    }
    removeAllListeners(eventName) {
        if (!this.provider) {
            return this;
        }
        if (eventName == null) {
            for (const tag in this._runningEvents) {
                const runningEvent = this._runningEvents[tag];
                runningEvent.removeAllListeners();
                this._checkRunningEvents(runningEvent);
            }
            return this;
        }
        // Delete any listeners
        const runningEvent = this._getRunningEvent(eventName);
        runningEvent.removeAllListeners();
        this._checkRunningEvents(runningEvent);
        return this;
    }
    off(eventName, listener) {
        if (!this.provider) {
            return this;
        }
        const runningEvent = this._getRunningEvent(eventName);
        runningEvent.removeListener(listener);
        this._checkRunningEvents(runningEvent);
        return this;
    }
    removeListener(eventName, listener) {
        return this.off(eventName, listener);
    }
}
class Contract extends BaseContract {
}
class ContractFactory {
    constructor(contractInterface, bytecode, signer) {
        let bytecodeHex = null;
        if (typeof (bytecode) === "string") {
            bytecodeHex = bytecode;
        }
        else if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isBytes)(bytecode)) {
            bytecodeHex = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)(bytecode);
        }
        else if (bytecode && typeof (bytecode.object) === "string") {
            // Allow the bytecode object from the Solidity compiler
            bytecodeHex = bytecode.object;
        }
        else {
            // Crash in the next verification step
            bytecodeHex = "!";
        }
        // Make sure it is 0x prefixed
        if (bytecodeHex.substring(0, 2) !== "0x") {
            bytecodeHex = "0x" + bytecodeHex;
        }
        // Make sure the final result is valid bytecode
        if (!(0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.isHexString)(bytecodeHex) || (bytecodeHex.length % 2)) {
            logger.throwArgumentError("invalid bytecode", "bytecode", bytecode);
        }
        // If we have a signer, make sure it is valid
        if (signer && !_ethersproject_abstract_signer__WEBPACK_IMPORTED_MODULE_8__.Signer.isSigner(signer)) {
            logger.throwArgumentError("invalid signer", "signer", signer);
        }
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "bytecode", bytecodeHex);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "interface", (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(new.target, "getInterface")(contractInterface));
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(this, "signer", signer || null);
    }
    // @TODO: Future; rename to populateTransaction?
    getDeployTransaction(...args) {
        let tx = {};
        // If we have 1 additional argument, we allow transaction overrides
        if (args.length === this.interface.deploy.inputs.length + 1 && typeof (args[args.length - 1]) === "object") {
            tx = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.shallowCopy)(args.pop());
            for (const key in tx) {
                if (!allowedTransactionKeys[key]) {
                    throw new Error("unknown transaction override " + key);
                }
            }
        }
        // Do not allow these to be overridden in a deployment transaction
        ["data", "from", "to"].forEach((key) => {
            if (tx[key] == null) {
                return;
            }
            logger.throwError("cannot override " + key, _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, { operation: key });
        });
        if (tx.value) {
            const value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_4__.BigNumber.from(tx.value);
            if (!value.isZero() && !this.interface.deploy.payable) {
                logger.throwError("non-payable constructor cannot override value", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "overrides.value",
                    value: tx.value
                });
            }
        }
        // Make sure the call matches the constructor signature
        logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
        // Set the data to the bytecode + the encoded constructor arguments
        tx.data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_6__.concat)([
            this.bytecode,
            this.interface.encodeDeploy(args)
        ]));
        return tx;
    }
    deploy(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            let overrides = {};
            // If 1 extra parameter was passed in, it contains overrides
            if (args.length === this.interface.deploy.inputs.length + 1) {
                overrides = args.pop();
            }
            // Make sure the call matches the constructor signature
            logger.checkArgumentCount(args.length, this.interface.deploy.inputs.length, " in Contract constructor");
            // Resolve ENS names and promises in the arguments
            const params = yield resolveAddresses(this.signer, args, this.interface.deploy.inputs);
            params.push(overrides);
            // Get the deployment transaction (with optional overrides)
            const unsignedTx = this.getDeployTransaction(...params);
            // Send the deployment transaction
            const tx = yield this.signer.sendTransaction(unsignedTx);
            const address = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContractAddress")(tx);
            const contract = (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.getStatic)(this.constructor, "getContract")(address, this.interface, this.signer);
            // Add the modified wait that wraps events
            addContractWait(contract, tx);
            (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_3__.defineReadOnly)(contract, "deployTransaction", tx);
            return contract;
        });
    }
    attach(address) {
        return (this.constructor).getContract(address, this.interface, this.signer);
    }
    connect(signer) {
        return new (this.constructor)(this.interface, this.bytecode, signer);
    }
    static fromSolidity(compilerOutput, signer) {
        if (compilerOutput == null) {
            logger.throwError("missing compiler output", _ethersproject_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.errors.MISSING_ARGUMENT, { argument: "compilerOutput" });
        }
        if (typeof (compilerOutput) === "string") {
            compilerOutput = JSON.parse(compilerOutput);
        }
        const abi = compilerOutput.abi;
        let bytecode = null;
        if (compilerOutput.bytecode) {
            bytecode = compilerOutput.bytecode;
        }
        else if (compilerOutput.evm && compilerOutput.evm.bytecode) {
            bytecode = compilerOutput.evm.bytecode;
        }
        return new this(abi, bytecode, signer);
    }
    static getInterface(contractInterface) {
        return Contract.getInterface(contractInterface);
    }
    static getContractAddress(tx) {
        return (0,_ethersproject_address__WEBPACK_IMPORTED_MODULE_2__.getContractAddress)(tx);
    }
    static getContract(address, contractInterface, signer) {
        return new Contract(address, contractInterface, signer);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./services/ERC721Singleton.js":
/*!*************************************!*\
  !*** ./services/ERC721Singleton.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ERC721Singleton; }
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ "./node_modules/@ethersproject/contracts/lib.esm/index.js");
/* harmony import */ var _contracts_deployments_testnet_aurora_AuroraERC721_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contracts/deployments/testnet_aurora/AuroraERC721.json */ "./contracts/deployments/testnet_aurora/AuroraERC721.json");


function ERC721Singleton(signer) {
  if (!ERC721Singleton._instance) {
    ERC721Singleton._instance = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(_contracts_deployments_testnet_aurora_AuroraERC721_json__WEBPACK_IMPORTED_MODULE_0__.address, _contracts_deployments_testnet_aurora_AuroraERC721_json__WEBPACK_IMPORTED_MODULE_0__.abi, signer);
  }

  return ERC721Singleton._instance;
}

/***/ }),

/***/ "./contracts/deployments/testnet_aurora/AuroraERC721.json":
/*!****************************************************************!*\
  !*** ./contracts/deployments/testnet_aurora/AuroraERC721.json ***!
  \****************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"address":"0xa3c8F4B9Bc6704235CC7DD6Ae3c59755A538fD5d","abi":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"string","name":"_eventURI","type":"string"}],"name":"_setEventURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"TokenId","type":"uint256"},{"internalType":"uint256","name":"EventId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"_setTokenEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_claimer","type":"address"},{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"uint256","name":"tokentId","type":"uint256"},{"internalType":"string","name":"_tokenURI","type":"string"}],"name":"claimToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"_bidURI","type":"string"}],"name":"createBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_eventURI","type":"string"}],"name":"createEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eventId","type":"uint256"}],"name":"eventURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestTokenID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}],"transactionHash":"0x152839cecb38039212bdd93b27a072a930d8499e798d95c61058be821d772985","receipt":{"to":null,"from":"0x168e007d9f5a794794E40035C5214963cb16BFB7","contractAddress":"0xa3c8F4B9Bc6704235CC7DD6Ae3c59755A538fD5d","transactionIndex":1,"gasUsed":"2622664","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","blockHash":"0x47c4cd5803b3203f57257d073d0fd95c7aee47adf196fdfcdbcf6f8dd1efcf21","transactionHash":"0x152839cecb38039212bdd93b27a072a930d8499e798d95c61058be821d772985","logs":[],"blockNumber":83297228,"cumulativeGasUsed":"0","status":1,"byzantium":true},"args":["Aurora","NEAR"],"numDeployments":6,"solcInputHash":"320c65a58f2458fee3e1797735bd4c37","metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.6+commit.11564f7e\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"symbol\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setEventURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"TokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"EventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"_setTokenEvent\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"_claimer\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokentId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_tokenURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"claimToken\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"string\\",\\"name\\":\\"_bidURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createBid\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_eventURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"createEvent\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"eventId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"eventURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"latestTokenID\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{\\"approve(address,uint256)\\":{\\"details\\":\\"See {IERC721-approve}.\\"},\\"balanceOf(address)\\":{\\"details\\":\\"See {IERC721-balanceOf}.\\"},\\"getApproved(uint256)\\":{\\"details\\":\\"See {IERC721-getApproved}.\\"},\\"isApprovedForAll(address,address)\\":{\\"details\\":\\"See {IERC721-isApprovedForAll}.\\"},\\"name()\\":{\\"details\\":\\"See {IERC721Metadata-name}.\\"},\\"ownerOf(uint256)\\":{\\"details\\":\\"See {IERC721-ownerOf}.\\"},\\"safeTransferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"safeTransferFrom(address,address,uint256,bytes)\\":{\\"details\\":\\"See {IERC721-safeTransferFrom}.\\"},\\"setApprovalForAll(address,bool)\\":{\\"details\\":\\"See {IERC721-setApprovalForAll}.\\"},\\"supportsInterface(bytes4)\\":{\\"details\\":\\"See {IERC165-supportsInterface}.\\"},\\"symbol()\\":{\\"details\\":\\"See {IERC721Metadata-symbol}.\\"},\\"tokenURI(uint256)\\":{\\"details\\":\\"See {IERC721Metadata-tokenURI}.\\"},\\"transferFrom(address,address,uint256)\\":{\\"details\\":\\"See {IERC721-transferFrom}.\\"}},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"contracts/AuroraERC721.sol\\":\\"AuroraERC721\\"},\\"evmVersion\\":\\"berlin\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\",\\"useLiteralContent\\":true},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts (last updated v4.5.0) (token/ERC721/ERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC721.sol\\\\\\";\\\\nimport \\\\\\"./IERC721Receiver.sol\\\\\\";\\\\nimport \\\\\\"./extensions/IERC721Metadata.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Address.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Context.sol\\\\\\";\\\\nimport \\\\\\"../../utils/Strings.sol\\\\\\";\\\\nimport \\\\\\"../../utils/introspection/ERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including\\\\n * the Metadata extension, but not including the Enumerable extension, which is available separately as\\\\n * {ERC721Enumerable}.\\\\n */\\\\ncontract ERC721 is Context, ERC165, IERC721, IERC721Metadata {\\\\n    using Address for address;\\\\n    using Strings for uint256;\\\\n\\\\n    // Token name\\\\n    string private _name;\\\\n\\\\n    // Token symbol\\\\n    string private _symbol;\\\\n\\\\n    // Mapping from token ID to owner address\\\\n    mapping(uint256 => address) private _owners;\\\\n\\\\n    // Mapping owner address to token count\\\\n    mapping(address => uint256) private _balances;\\\\n\\\\n    // Mapping from token ID to approved address\\\\n    mapping(uint256 => address) private _tokenApprovals;\\\\n\\\\n    // Mapping from owner to operator approvals\\\\n    mapping(address => mapping(address => bool)) private _operatorApprovals;\\\\n\\\\n    /**\\\\n     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.\\\\n     */\\\\n    constructor(string memory name_, string memory symbol_) {\\\\n        _name = name_;\\\\n        _symbol = symbol_;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {\\\\n        return\\\\n            interfaceId == type(IERC721).interfaceId ||\\\\n            interfaceId == type(IERC721Metadata).interfaceId ||\\\\n            super.supportsInterface(interfaceId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-balanceOf}.\\\\n     */\\\\n    function balanceOf(address owner) public view virtual override returns (uint256) {\\\\n        require(owner != address(0), \\\\\\"ERC721: balance query for the zero address\\\\\\");\\\\n        return _balances[owner];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-ownerOf}.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) public view virtual override returns (address) {\\\\n        address owner = _owners[tokenId];\\\\n        require(owner != address(0), \\\\\\"ERC721: owner query for nonexistent token\\\\\\");\\\\n        return owner;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-name}.\\\\n     */\\\\n    function name() public view virtual override returns (string memory) {\\\\n        return _name;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-symbol}.\\\\n     */\\\\n    function symbol() public view virtual override returns (string memory) {\\\\n        return _symbol;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721Metadata-tokenURI}.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721Metadata: URI query for nonexistent token\\\\\\");\\\\n\\\\n        string memory baseURI = _baseURI();\\\\n        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Base URI for computing {tokenURI}. If set, the resulting URI for each\\\\n     * token will be the concatenation of the `baseURI` and the `tokenId`. Empty\\\\n     * by default, can be overriden in child contracts.\\\\n     */\\\\n    function _baseURI() internal view virtual returns (string memory) {\\\\n        return \\\\\\"\\\\\\";\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-approve}.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) public virtual override {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        require(to != owner, \\\\\\"ERC721: approval to current owner\\\\\\");\\\\n\\\\n        require(\\\\n            _msgSender() == owner || isApprovedForAll(owner, _msgSender()),\\\\n            \\\\\\"ERC721: approve caller is not owner nor approved for all\\\\\\"\\\\n        );\\\\n\\\\n        _approve(to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-getApproved}.\\\\n     */\\\\n    function getApproved(uint256 tokenId) public view virtual override returns (address) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: approved query for nonexistent token\\\\\\");\\\\n\\\\n        return _tokenApprovals[tokenId];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-setApprovalForAll}.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool approved) public virtual override {\\\\n        _setApprovalForAll(_msgSender(), operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-isApprovedForAll}.\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) public view virtual override returns (bool) {\\\\n        return _operatorApprovals[owner][operator];\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-transferFrom}.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        //solhint-disable-next-line max-line-length\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n\\\\n        _transfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) public virtual override {\\\\n        safeTransferFrom(from, to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev See {IERC721-safeTransferFrom}.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) public virtual override {\\\\n        require(_isApprovedOrOwner(_msgSender(), tokenId), \\\\\\"ERC721: transfer caller is not owner nor approved\\\\\\");\\\\n        _safeTransfer(from, to, tokenId, _data);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * `_data` is additional data, it has no specified format and it is sent in call to `to`.\\\\n     *\\\\n     * This internal function is equivalent to {safeTransferFrom}, and can be used to e.g.\\\\n     * implement alternative mechanisms to perform token transfer, such as signature-based.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _transfer(from, to, tokenId);\\\\n        require(_checkOnERC721Received(from, to, tokenId, _data), \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `tokenId` exists.\\\\n     *\\\\n     * Tokens can be managed by their owner or approved accounts via {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Tokens start existing when they are minted (`_mint`),\\\\n     * and stop existing when they are burned (`_burn`).\\\\n     */\\\\n    function _exists(uint256 tokenId) internal view virtual returns (bool) {\\\\n        return _owners[tokenId] != address(0);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Returns whether `spender` is allowed to manage `tokenId`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function _isApprovedOrOwner(address spender, uint256 tokenId) internal view virtual returns (bool) {\\\\n        require(_exists(tokenId), \\\\\\"ERC721: operator query for nonexistent token\\\\\\");\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n        return (spender == owner || getApproved(tokenId) == spender || isApprovedForAll(owner, spender));\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Safely mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _safeMint(address to, uint256 tokenId) internal virtual {\\\\n        _safeMint(to, tokenId, \\\\\\"\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-ERC721-_safeMint-address-uint256-}[`_safeMint`], with an additional `data` parameter which is\\\\n     * forwarded in {IERC721Receiver-onERC721Received} to contract recipients.\\\\n     */\\\\n    function _safeMint(\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) internal virtual {\\\\n        _mint(to, tokenId);\\\\n        require(\\\\n            _checkOnERC721Received(address(0), to, tokenId, _data),\\\\n            \\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\"\\\\n        );\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Mints `tokenId` and transfers it to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must not exist.\\\\n     * - `to` cannot be the zero address.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _mint(address to, uint256 tokenId) internal virtual {\\\\n        require(to != address(0), \\\\\\"ERC721: mint to the zero address\\\\\\");\\\\n        require(!_exists(tokenId), \\\\\\"ERC721: token already minted\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(address(0), to, tokenId);\\\\n\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(address(0), to, tokenId);\\\\n\\\\n        _afterTokenTransfer(address(0), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Destroys `tokenId`.\\\\n     * The approval is cleared when the token is burned.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _burn(uint256 tokenId) internal virtual {\\\\n        address owner = ERC721.ownerOf(tokenId);\\\\n\\\\n        _beforeTokenTransfer(owner, address(0), tokenId);\\\\n\\\\n        // Clear approvals\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[owner] -= 1;\\\\n        delete _owners[tokenId];\\\\n\\\\n        emit Transfer(owner, address(0), tokenId);\\\\n\\\\n        _afterTokenTransfer(owner, address(0), tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` from `from` to `to`.\\\\n     *  As opposed to {transferFrom}, this imposes no restrictions on msg.sender.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function _transfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {\\\\n        require(ERC721.ownerOf(tokenId) == from, \\\\\\"ERC721: transfer from incorrect owner\\\\\\");\\\\n        require(to != address(0), \\\\\\"ERC721: transfer to the zero address\\\\\\");\\\\n\\\\n        _beforeTokenTransfer(from, to, tokenId);\\\\n\\\\n        // Clear approvals from the previous owner\\\\n        _approve(address(0), tokenId);\\\\n\\\\n        _balances[from] -= 1;\\\\n        _balances[to] += 1;\\\\n        _owners[tokenId] = to;\\\\n\\\\n        emit Transfer(from, to, tokenId);\\\\n\\\\n        _afterTokenTransfer(from, to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `to` to operate on `tokenId`\\\\n     *\\\\n     * Emits a {Approval} event.\\\\n     */\\\\n    function _approve(address to, uint256 tokenId) internal virtual {\\\\n        _tokenApprovals[tokenId] = to;\\\\n        emit Approval(ERC721.ownerOf(tokenId), to, tokenId);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Approve `operator` to operate on all of `owner` tokens\\\\n     *\\\\n     * Emits a {ApprovalForAll} event.\\\\n     */\\\\n    function _setApprovalForAll(\\\\n        address owner,\\\\n        address operator,\\\\n        bool approved\\\\n    ) internal virtual {\\\\n        require(owner != operator, \\\\\\"ERC721: approve to caller\\\\\\");\\\\n        _operatorApprovals[owner][operator] = approved;\\\\n        emit ApprovalForAll(owner, operator, approved);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Internal function to invoke {IERC721Receiver-onERC721Received} on a target address.\\\\n     * The call is not executed if the target address is not a contract.\\\\n     *\\\\n     * @param from address representing the previous owner of the given token ID\\\\n     * @param to target address that will receive the tokens\\\\n     * @param tokenId uint256 ID of the token to be transferred\\\\n     * @param _data bytes optional data to send along with the call\\\\n     * @return bool whether the call correctly returned the expected magic value\\\\n     */\\\\n    function _checkOnERC721Received(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes memory _data\\\\n    ) private returns (bool) {\\\\n        if (to.isContract()) {\\\\n            try IERC721Receiver(to).onERC721Received(_msgSender(), from, tokenId, _data) returns (bytes4 retval) {\\\\n                return retval == IERC721Receiver.onERC721Received.selector;\\\\n            } catch (bytes memory reason) {\\\\n                if (reason.length == 0) {\\\\n                    revert(\\\\\\"ERC721: transfer to non ERC721Receiver implementer\\\\\\");\\\\n                } else {\\\\n                    assembly {\\\\n                        revert(add(32, reason), mload(reason))\\\\n                    }\\\\n                }\\\\n            }\\\\n        } else {\\\\n            return true;\\\\n        }\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Hook that is called before any token transfer. This includes minting\\\\n     * and burning.\\\\n     *\\\\n     * Calling conditions:\\\\n     *\\\\n     * - When `from` and `to` are both non-zero, ``from``\'s `tokenId` will be\\\\n     * transferred to `to`.\\\\n     * - When `from` is zero, `tokenId` will be minted for `to`.\\\\n     * - When `to` is zero, ``from``\'s `tokenId` will be burned.\\\\n     * - `from` and `to` are never both zero.\\\\n     *\\\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\\\n     */\\\\n    function _beforeTokenTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {}\\\\n\\\\n    /**\\\\n     * @dev Hook that is called after any transfer of tokens. This includes\\\\n     * minting and burning.\\\\n     *\\\\n     * Calling conditions:\\\\n     *\\\\n     * - when `from` and `to` are both non-zero.\\\\n     * - `from` and `to` are never both zero.\\\\n     *\\\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\\\n     */\\\\n    function _afterTokenTransfer(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) internal virtual {}\\\\n}\\\\n\\",\\"keccak256\\":\\"0x11b84bb56dc112a6590bfe3e0efa118aa1b5891132342200d04c4ef544cb93de\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../../utils/introspection/IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Required interface of an ERC721 compliant contract.\\\\n */\\\\ninterface IERC721 is IERC165 {\\\\n    /**\\\\n     * @dev Emitted when `tokenId` token is transferred from `from` to `to`.\\\\n     */\\\\n    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables `approved` to manage the `tokenId` token.\\\\n     */\\\\n    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);\\\\n\\\\n    /**\\\\n     * @dev Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets.\\\\n     */\\\\n    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);\\\\n\\\\n    /**\\\\n     * @dev Returns the number of tokens in ``owner``\'s account.\\\\n     */\\\\n    function balanceOf(address owner) external view returns (uint256 balance);\\\\n\\\\n    /**\\\\n     * @dev Returns the owner of the `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function ownerOf(uint256 tokenId) external view returns (address owner);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients\\\\n     * are aware of the ERC721 protocol to prevent tokens from being forever locked.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function transferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId\\\\n    ) external;\\\\n\\\\n    /**\\\\n     * @dev Gives permission to `to` to transfer `tokenId` token to another account.\\\\n     * The approval is cleared when the token is transferred.\\\\n     *\\\\n     * Only a single account can be approved at a time, so approving the zero address clears previous approvals.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The caller must own the token or be an approved operator.\\\\n     * - `tokenId` must exist.\\\\n     *\\\\n     * Emits an {Approval} event.\\\\n     */\\\\n    function approve(address to, uint256 tokenId) external;\\\\n\\\\n    /**\\\\n     * @dev Returns the account approved for `tokenId` token.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `tokenId` must exist.\\\\n     */\\\\n    function getApproved(uint256 tokenId) external view returns (address operator);\\\\n\\\\n    /**\\\\n     * @dev Approve or remove `operator` as an operator for the caller.\\\\n     * Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - The `operator` cannot be the caller.\\\\n     *\\\\n     * Emits an {ApprovalForAll} event.\\\\n     */\\\\n    function setApprovalForAll(address operator, bool _approved) external;\\\\n\\\\n    /**\\\\n     * @dev Returns if the `operator` is allowed to manage all of the assets of `owner`.\\\\n     *\\\\n     * See {setApprovalForAll}\\\\n     */\\\\n    function isApprovedForAll(address owner, address operator) external view returns (bool);\\\\n\\\\n    /**\\\\n     * @dev Safely transfers `tokenId` token from `from` to `to`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `from` cannot be the zero address.\\\\n     * - `to` cannot be the zero address.\\\\n     * - `tokenId` token must exist and be owned by `from`.\\\\n     * - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}.\\\\n     * - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.\\\\n     *\\\\n     * Emits a {Transfer} event.\\\\n     */\\\\n    function safeTransferFrom(\\\\n        address from,\\\\n        address to,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external;\\\\n}\\\\n\\",\\"keccak256\\":\\"0x516a22876c1fab47f49b1bc22b4614491cd05338af8bd2e7b382da090a079990\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/IERC721Receiver.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @title ERC721 token receiver interface\\\\n * @dev Interface for any contract that wants to support safeTransfers\\\\n * from ERC721 asset contracts.\\\\n */\\\\ninterface IERC721Receiver {\\\\n    /**\\\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\\\n     * by `operator` from `from`, this function is called.\\\\n     *\\\\n     * It must return its Solidity selector to confirm the token transfer.\\\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\\\n     *\\\\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\\\\n     */\\\\n    function onERC721Received(\\\\n        address operator,\\\\n        address from,\\\\n        uint256 tokenId,\\\\n        bytes calldata data\\\\n    ) external returns (bytes4);\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd5fa74b4fb323776fa4a8158800fec9d5ac0fec0d6dd046dd93798632ada265f\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (token/ERC721/extensions/IERC721Metadata.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"../IERC721.sol\\\\\\";\\\\n\\\\n/**\\\\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\\\n * @dev See https://eips.ethereum.org/EIPS/eip-721\\\\n */\\\\ninterface IERC721Metadata is IERC721 {\\\\n    /**\\\\n     * @dev Returns the token collection name.\\\\n     */\\\\n    function name() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the token collection symbol.\\\\n     */\\\\n    function symbol() external view returns (string memory);\\\\n\\\\n    /**\\\\n     * @dev Returns the Uniform Resource Identifier (URI) for `tokenId` token.\\\\n     */\\\\n    function tokenURI(uint256 tokenId) external view returns (string memory);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Address.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/Address.sol)\\\\n\\\\npragma solidity ^0.8.1;\\\\n\\\\n/**\\\\n * @dev Collection of functions related to the address type\\\\n */\\\\nlibrary Address {\\\\n    /**\\\\n     * @dev Returns true if `account` is a contract.\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * It is unsafe to assume that an address for which this function returns\\\\n     * false is an externally-owned account (EOA) and not a contract.\\\\n     *\\\\n     * Among others, `isContract` will return false for the following\\\\n     * types of addresses:\\\\n     *\\\\n     *  - an externally-owned account\\\\n     *  - a contract in construction\\\\n     *  - an address where a contract will be created\\\\n     *  - an address where a contract lived, but was destroyed\\\\n     * ====\\\\n     *\\\\n     * [IMPORTANT]\\\\n     * ====\\\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\\\n     *\\\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\\\n     * constructor.\\\\n     * ====\\\\n     */\\\\n    function isContract(address account) internal view returns (bool) {\\\\n        // This method relies on extcodesize/address.code.length, which returns 0\\\\n        // for contracts in construction, since the code is only stored at the end\\\\n        // of the constructor execution.\\\\n\\\\n        return account.code.length > 0;\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\\\n     * `recipient`, forwarding all available gas and reverting on errors.\\\\n     *\\\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\\\n     * imposed by `transfer`, making them unable to receive funds via\\\\n     * `transfer`. {sendValue} removes this limitation.\\\\n     *\\\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\\\n     *\\\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\\\n     * taken to not create reentrancy vulnerabilities. Consider using\\\\n     * {ReentrancyGuard} or the\\\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\\\n     */\\\\n    function sendValue(address payable recipient, uint256 amount) internal {\\\\n        require(address(this).balance >= amount, \\\\\\"Address: insufficient balance\\\\\\");\\\\n\\\\n        (bool success, ) = recipient.call{value: amount}(\\\\\\"\\\\\\");\\\\n        require(success, \\\\\\"Address: unable to send value, recipient may have reverted\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Performs a Solidity function call using a low level `call`. A\\\\n     * plain `call` is an unsafe replacement for a function call: use this\\\\n     * function instead.\\\\n     *\\\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\\\n     * function (like regular Solidity function calls).\\\\n     *\\\\n     * Returns the raw returned data. To convert to the expected return value,\\\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - `target` must be a contract.\\\\n     * - calling `target` with `data` must not revert.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionCall(target, data, \\\\\\"Address: low-level call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, 0, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but also transferring `value` wei to `target`.\\\\n     *\\\\n     * Requirements:\\\\n     *\\\\n     * - the calling contract must have an ETH balance of at least `value`.\\\\n     * - the called Solidity function must be `payable`.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value\\\\n    ) internal returns (bytes memory) {\\\\n        return functionCallWithValue(target, data, value, \\\\\\"Address: low-level call with value failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\\\n     *\\\\n     * _Available since v3.1._\\\\n     */\\\\n    function functionCallWithValue(\\\\n        address target,\\\\n        bytes memory data,\\\\n        uint256 value,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(address(this).balance >= value, \\\\\\"Address: insufficient balance for call\\\\\\");\\\\n        require(isContract(target), \\\\\\"Address: call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\\\n        return functionStaticCall(target, data, \\\\\\"Address: low-level static call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a static call.\\\\n     *\\\\n     * _Available since v3.3._\\\\n     */\\\\n    function functionStaticCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal view returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: static call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\\\n        return functionDelegateCall(target, data, \\\\\\"Address: low-level delegate call failed\\\\\\");\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\\\n     * but performing a delegate call.\\\\n     *\\\\n     * _Available since v3.4._\\\\n     */\\\\n    function functionDelegateCall(\\\\n        address target,\\\\n        bytes memory data,\\\\n        string memory errorMessage\\\\n    ) internal returns (bytes memory) {\\\\n        require(isContract(target), \\\\\\"Address: delegate call to non-contract\\\\\\");\\\\n\\\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\\\n        return verifyCallResult(success, returndata, errorMessage);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\\\n     * revert reason using the provided one.\\\\n     *\\\\n     * _Available since v4.3._\\\\n     */\\\\n    function verifyCallResult(\\\\n        bool success,\\\\n        bytes memory returndata,\\\\n        string memory errorMessage\\\\n    ) internal pure returns (bytes memory) {\\\\n        if (success) {\\\\n            return returndata;\\\\n        } else {\\\\n            // Look for revert reason and bubble it up if present\\\\n            if (returndata.length > 0) {\\\\n                // The easiest way to bubble the revert reason is using memory via assembly\\\\n\\\\n                assembly {\\\\n                    let returndata_size := mload(returndata)\\\\n                    revert(add(32, returndata), returndata_size)\\\\n                }\\\\n            } else {\\\\n                revert(errorMessage);\\\\n            }\\\\n        }\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x2ccf9d2313a313d41a791505f2b5abfdc62191b5d4334f7f7a82691c088a1c87\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Context.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Provides information about the current execution context, including the\\\\n * sender of the transaction and its data. While these are generally available\\\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\\\n * manner, since when dealing with meta-transactions the account sending and\\\\n * paying for execution may not be the actual sender (as far as an application\\\\n * is concerned).\\\\n *\\\\n * This contract is only required for intermediate, library-like contracts.\\\\n */\\\\nabstract contract Context {\\\\n    function _msgSender() internal view virtual returns (address) {\\\\n        return msg.sender;\\\\n    }\\\\n\\\\n    function _msgData() internal view virtual returns (bytes calldata) {\\\\n        return msg.data;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/Strings.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/Strings.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev String operations.\\\\n */\\\\nlibrary Strings {\\\\n    bytes16 private constant _HEX_SYMBOLS = \\\\\\"0123456789abcdef\\\\\\";\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` decimal representation.\\\\n     */\\\\n    function toString(uint256 value) internal pure returns (string memory) {\\\\n        // Inspired by OraclizeAPI\'s implementation - MIT licence\\\\n        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol\\\\n\\\\n        if (value == 0) {\\\\n            return \\\\\\"0\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 digits;\\\\n        while (temp != 0) {\\\\n            digits++;\\\\n            temp /= 10;\\\\n        }\\\\n        bytes memory buffer = new bytes(digits);\\\\n        while (value != 0) {\\\\n            digits -= 1;\\\\n            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));\\\\n            value /= 10;\\\\n        }\\\\n        return string(buffer);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation.\\\\n     */\\\\n    function toHexString(uint256 value) internal pure returns (string memory) {\\\\n        if (value == 0) {\\\\n            return \\\\\\"0x00\\\\\\";\\\\n        }\\\\n        uint256 temp = value;\\\\n        uint256 length = 0;\\\\n        while (temp != 0) {\\\\n            length++;\\\\n            temp >>= 8;\\\\n        }\\\\n        return toHexString(value, length);\\\\n    }\\\\n\\\\n    /**\\\\n     * @dev Converts a `uint256` to its ASCII `string` hexadecimal representation with fixed length.\\\\n     */\\\\n    function toHexString(uint256 value, uint256 length) internal pure returns (string memory) {\\\\n        bytes memory buffer = new bytes(2 * length + 2);\\\\n        buffer[0] = \\\\\\"0\\\\\\";\\\\n        buffer[1] = \\\\\\"x\\\\\\";\\\\n        for (uint256 i = 2 * length + 1; i > 1; --i) {\\\\n            buffer[i] = _HEX_SYMBOLS[value & 0xf];\\\\n            value >>= 4;\\\\n        }\\\\n        require(value == 0, \\\\\\"Strings: hex length insufficient\\\\\\");\\\\n        return string(buffer);\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0x32c202bd28995dd20c4347b7c6467a6d3241c74c8ad3edcbb610cd9205916c45\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/ERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/ERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"./IERC165.sol\\\\\\";\\\\n\\\\n/**\\\\n * @dev Implementation of the {IERC165} interface.\\\\n *\\\\n * Contracts that want to implement ERC165 should inherit from this contract and override {supportsInterface} to check\\\\n * for the additional interface id that will be supported. For example:\\\\n *\\\\n * ```solidity\\\\n * function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n *     return interfaceId == type(MyInterface).interfaceId || super.supportsInterface(interfaceId);\\\\n * }\\\\n * ```\\\\n *\\\\n * Alternatively, {ERC165Storage} provides an easier to use but more expensive implementation.\\\\n */\\\\nabstract contract ERC165 is IERC165 {\\\\n    /**\\\\n     * @dev See {IERC165-supportsInterface}.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {\\\\n        return interfaceId == type(IERC165).interfaceId;\\\\n    }\\\\n}\\\\n\\",\\"keccak256\\":\\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\\",\\"license\\":\\"MIT\\"},\\"@openzeppelin/contracts/utils/introspection/IERC165.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\n// OpenZeppelin Contracts v4.4.1 (utils/introspection/IERC165.sol)\\\\n\\\\npragma solidity ^0.8.0;\\\\n\\\\n/**\\\\n * @dev Interface of the ERC165 standard, as defined in the\\\\n * https://eips.ethereum.org/EIPS/eip-165[EIP].\\\\n *\\\\n * Implementers can declare support of contract interfaces, which can then be\\\\n * queried by others ({ERC165Checker}).\\\\n *\\\\n * For an implementation, see {ERC165}.\\\\n */\\\\ninterface IERC165 {\\\\n    /**\\\\n     * @dev Returns true if this contract implements the interface defined by\\\\n     * `interfaceId`. See the corresponding\\\\n     * https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\\\\n     * to learn more about how these ids are created.\\\\n     *\\\\n     * This function call must use less than 30 000 gas.\\\\n     */\\\\n    function supportsInterface(bytes4 interfaceId) external view returns (bool);\\\\n}\\\\n\\",\\"keccak256\\":\\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\\",\\"license\\":\\"MIT\\"},\\"contracts/AuroraERC721.sol\\":{\\"content\\":\\"// SPDX-License-Identifier: MIT\\\\npragma solidity ^0.8.0;\\\\n\\\\nimport \\\\\\"@openzeppelin/contracts/token/ERC721/ERC721.sol\\\\\\";\\\\nimport \\\\\\"@openzeppelin/contracts/utils/Strings.sol\\\\\\";\\\\n\\\\ncontract AuroraERC721 is ERC721  {\\\\n\\\\n\\\\tuint256 private _tokenIds;\\\\n\\\\tuint256 private _bidIds;\\\\n\\\\tuint256 private _eventIds;\\\\n\\\\tmapping(uint256 => string) private _tokenURIs;\\\\n\\\\tmapping(uint256 => string) private _eventURIs;\\\\n\\\\tmapping(uint256 => string[2]) private AllTokensBids;\\\\n\\\\tmapping(uint256 => string[2]) private AllEventTokens;\\\\n\\\\nconstructor(string memory name, string memory symbol)\\\\n\\\\t\\\\tERC721(name, symbol)\\\\n\\\\t{}\\\\n\\\\n   \\\\n\\\\tfunction claimToken(address _claimer,uint256 eventId,uint256 tokentId,\\\\n\\\\t\\\\tstring memory _tokenURI) public  returns (uint256) {\\\\n\\\\t\\\\t_mint(_claimer, _tokenIds);\\\\n\\\\t\\\\t_setTokenEvent(tokentId,eventId, _tokenURI);\\\\n\\\\t\\\\t_tokenIds++;\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\tfunction _setTokenEvent(\\\\n\\\\t\\\\tuint256 TokenId,\\\\n\\\\t\\\\tuint256 EventId,\\\\n\\\\t\\\\tstring memory _tokenURI\\\\n\\\\t) public virtual {\\\\n\\\\t\\\\tAllEventTokens[TokenId] = [\\\\n\\\\t\\\\t\\\\tStrings.toString(EventId),\\\\n\\\\t\\\\t\\\\tstring(_tokenURI)\\\\n\\\\t\\\\t];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction createEvent( string memory _eventURI) public returns (uint256) {\\\\n\\\\t\\\\t_setEventURI(_eventIds, _eventURI);\\\\n\\\\t\\\\t_eventIds++;\\\\n\\\\t\\\\treturn _eventIds;\\\\n\\\\t}\\\\n\\\\tfunction _setEventURI(uint256 eventId, string memory _eventURI) public virtual {\\\\n\\\\t\\\\t_eventURIs[eventId] = _eventURI;\\\\n\\\\t}\\\\n\\\\n\\\\tfunction eventURI(uint256 eventId) public view returns (string memory) {\\\\n\\\\t\\\\treturn _eventURIs[eventId];\\\\n\\\\t}\\\\n\\\\n\\\\tfunction latestTokenID() public view returns ( uint256) {\\\\n\\\\t\\\\treturn _tokenIds;\\\\n\\\\t}\\\\n\\\\tfunction createBid(uint256 tokenId, string memory _bidURI) public returns (uint256) {\\\\n\\\\t\\\\tAllTokensBids[_bidIds] = [\\\\n\\\\t\\\\t\\\\tStrings.toString(tokenId),\\\\n\\\\t\\\\t\\\\tstring(_bidURI)\\\\n\\\\t\\\\t];\\\\n\\\\t\\\\t_bidIds++;\\\\n\\\\t\\\\treturn _bidIds;\\\\n\\\\t}\\\\t\\\\n}\\\\n\\\\n\\\\n\\",\\"keccak256\\":\\"0x7742938e57061afc2ea2fb935747298c2edbdeeea3a1bab8734e65f8550399d9\\",\\"license\\":\\"MIT\\"}},\\"version\\":1}","bytecode":"0x60806040523480156200001157600080fd5b5060405162003154380380620031548339818101604052810190620000379190620001a3565b818181600090805190602001906200005192919062000075565b5080600190805190602001906200006a92919062000075565b5050505050620003ac565b8280546200008390620002bd565b90600052602060002090601f016020900481019282620000a75760008555620000f3565b82601f10620000c257805160ff1916838001178555620000f3565b82800160010185558215620000f3579182015b82811115620000f2578251825591602001919060010190620000d5565b5b50905062000102919062000106565b5090565b5b808211156200012157600081600090555060010162000107565b5090565b60006200013c620001368462000251565b62000228565b9050828152602081018484840111156200015b576200015a6200038c565b5b6200016884828562000287565b509392505050565b600082601f83011262000188576200018762000387565b5b81516200019a84826020860162000125565b91505092915050565b60008060408385031215620001bd57620001bc62000396565b5b600083015167ffffffffffffffff811115620001de57620001dd62000391565b5b620001ec8582860162000170565b925050602083015167ffffffffffffffff81111562000210576200020f62000391565b5b6200021e8582860162000170565b9150509250929050565b60006200023462000247565b9050620002428282620002f3565b919050565b6000604051905090565b600067ffffffffffffffff8211156200026f576200026e62000358565b5b6200027a826200039b565b9050602081019050919050565b60005b83811015620002a75780820151818401526020810190506200028a565b83811115620002b7576000848401525b50505050565b60006002820490506001821680620002d657607f821691505b60208210811415620002ed57620002ec62000329565b5b50919050565b620002fe826200039b565b810181811067ffffffffffffffff8211171562000320576200031f62000358565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b612d9880620003bc6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370137593116100ad578063a22cb46511610071578063a22cb46514610367578063b88d4fde14610383578063c22aac201461039f578063c87b56dd146103cf578063e985e9c5146103ff5761012c565b8063701375931461028957806370a08231146102b957806395d89b41146102e95780639bc2bc7114610307578063a0fd0c6a146103375761012c565b806323b872dd116100f457806323b872dd146101e75780633074cb51146102035780633592dd801461022157806342842e0e1461023d5780636352211e146102595761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af5780631cd043d6146101cb575b600080fd5b61014b60048036038101906101469190611e06565b61042f565b60405161015891906122e6565b60405180910390f35b610169610511565b6040516101769190612301565b60405180910390f35b61019960048036038101906101949190611ea9565b6105a3565b6040516101a6919061227f565b60405180910390f35b6101c960048036038101906101c49190611d43565b610628565b005b6101e560048036038101906101e09190611ed6565b610740565b005b61020160048036038101906101fc9190611c2d565b61076c565b005b61020b6107cc565b60405161021891906124e3565b60405180910390f35b61023b60048036038101906102369190611f32565b6107d6565b005b61025760048036038101906102529190611c2d565b61081a565b005b610273600480360381019061026e9190611ea9565b61083a565b604051610280919061227f565b60405180910390f35b6102a3600480360381019061029e9190611ed6565b6108ec565b6040516102b091906124e3565b60405180910390f35b6102d360048036038101906102ce9190611bc0565b610952565b6040516102e091906124e3565b60405180910390f35b6102f1610a0a565b6040516102fe9190612301565b60405180910390f35b610321600480360381019061031c9190611e60565b610a9c565b60405161032e91906124e3565b60405180910390f35b610351600480360381019061034c9190611ea9565b610acc565b60405161035e9190612301565b60405180910390f35b610381600480360381019061037c9190611d03565b610b71565b005b61039d60048036038101906103989190611c80565b610b87565b005b6103b960048036038101906103b49190611d83565b610be9565b6040516103c691906124e3565b60405180910390f35b6103e960048036038101906103e49190611ea9565b610c27565b6040516103f69190612301565b60405180910390f35b61041960048036038101906104149190611bed565b610cce565b60405161042691906122e6565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104fa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a575061050982610d62565b5b9050919050565b60606000805461052090612739565b80601f016020809104026020016040519081016040528092919081815260200182805461054c90612739565b80156105995780601f1061056e57610100808354040283529160200191610599565b820191906000526020600020905b81548152906001019060200180831161057c57829003601f168201915b5050505050905090565b60006105ae82610dcc565b6105ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e490612463565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106338261083a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069b906124a3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106c3610e38565b73ffffffffffffffffffffffffffffffffffffffff1614806106f257506106f1816106ec610e38565b610cce565b5b610731576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610728906123e3565b60405180910390fd5b61073b8383610e40565b505050565b80600a6000848152602001908152602001600020908051906020019061076792919061191d565b505050565b61077d610777610e38565b82610ef9565b6107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b3906124c3565b60405180910390fd5b6107c7838383610fd7565b505050565b6000600654905090565b60405180604001604052806107ea8461123e565b815260200182815250600c60008581526020019081526020016000209060026108149291906119a3565b50505050565b61083583838360405180602001604052806000815250610b87565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108da90612423565b60405180910390fd5b80915050919050565b600060405180604001604052806109028561123e565b815260200183815250600b6000600754815260200190815260200160002090600261092e9291906119a3565b50600760008154809291906109429061279c565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ba90612403565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610a1990612739565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4590612739565b8015610a925780601f10610a6757610100808354040283529160200191610a92565b820191906000526020600020905b815481529060010190602001808311610a7557829003601f168201915b5050505050905090565b6000610aaa60085483610740565b60086000815480929190610abd9061279c565b91905055506008549050919050565b6060600a60008381526020019081526020016000208054610aec90612739565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1890612739565b8015610b655780601f10610b3a57610100808354040283529160200191610b65565b820191906000526020600020905b815481529060010190602001808311610b4857829003601f168201915b50505050509050919050565b610b83610b7c610e38565b838361139f565b5050565b610b98610b92610e38565b83610ef9565b610bd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bce906124c3565b60405180910390fd5b610be38484848461150c565b50505050565b6000610bf785600654611568565b610c028385846107d6565b60066000815480929190610c159061279c565b91905055506006549050949350505050565b6060610c3282610dcc565b610c71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6890612483565b60405180910390fd5b6000610c7b611742565b90506000815111610c9b5760405180602001604052806000815250610cc6565b80610ca58461123e565b604051602001610cb692919061225b565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610eb38361083a565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f0482610dcc565b610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3a906123c3565b60405180910390fd5b6000610f4e8361083a565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fbd57508373ffffffffffffffffffffffffffffffffffffffff16610fa5846105a3565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fce5750610fcd8185610cce565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ff78261083a565b73ffffffffffffffffffffffffffffffffffffffff161461104d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104490612343565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612383565b60405180910390fd5b6110c8838383611759565b6110d3600082610e40565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611123919061264f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461117a91906125c8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461123983838361175e565b505050565b60606000821415611286576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061139a565b600082905060005b600082146112b85780806112a19061279c565b915050600a826112b1919061261e565b915061128e565b60008167ffffffffffffffff8111156112d4576112d36128d2565b5b6040519080825280601f01601f1916602001820160405280156113065781602001600182028036833780820191505090505b5090505b600085146113935760018261131f919061264f565b9150600a8561132e91906127e5565b603061133a91906125c8565b60f81b8183815181106113505761134f6128a3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561138c919061261e565b945061130a565b8093505050505b919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561140e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611405906123a3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114ff91906122e6565b60405180910390a3505050565b611517848484610fd7565b61152384848484611763565b611562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155990612323565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cf90612443565b60405180910390fd5b6115e181610dcc565b15611621576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161890612363565b60405180910390fd5b61162d60008383611759565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461167d91906125c8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461173e6000838361175e565b5050565b606060405180602001604052806000815250905090565b505050565b505050565b60006117848473ffffffffffffffffffffffffffffffffffffffff166118fa565b156118ed578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117ad610e38565b8786866040518563ffffffff1660e01b81526004016117cf949392919061229a565b602060405180830381600087803b1580156117e957600080fd5b505af192505050801561181a57506040513d601f19601f820116820180604052508101906118179190611e33565b60015b61189d573d806000811461184a576040519150601f19603f3d011682016040523d82523d6000602084013e61184f565b606091505b50600081511415611895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188c90612323565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118f2565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b82805461192990612739565b90600052602060002090601f01602090048101928261194b5760008555611992565b82601f1061196457805160ff1916838001178555611992565b82800160010185558215611992579182015b82811115611991578251825591602001919060010190611976565b5b50905061199f91906119f6565b5090565b82600281019282156119e5579160200282015b828111156119e45782518290805190602001906119d492919061191d565b50916020019190600101906119b6565b5b5090506119f29190611a13565b5090565b5b80821115611a0f5760008160009055506001016119f7565b5090565b5b80821115611a335760008181611a2a9190611a37565b50600101611a14565b5090565b508054611a4390612739565b6000825580601f10611a555750611a74565b601f016020900490600052602060002090810190611a7391906119f6565b5b50565b6000611a8a611a8584612523565b6124fe565b905082815260208101848484011115611aa657611aa5612906565b5b611ab18482856126f7565b509392505050565b6000611acc611ac784612554565b6124fe565b905082815260208101848484011115611ae857611ae7612906565b5b611af38482856126f7565b509392505050565b600081359050611b0a81612d06565b92915050565b600081359050611b1f81612d1d565b92915050565b600081359050611b3481612d34565b92915050565b600081519050611b4981612d34565b92915050565b600082601f830112611b6457611b63612901565b5b8135611b74848260208601611a77565b91505092915050565b600082601f830112611b9257611b91612901565b5b8135611ba2848260208601611ab9565b91505092915050565b600081359050611bba81612d4b565b92915050565b600060208284031215611bd657611bd5612910565b5b6000611be484828501611afb565b91505092915050565b60008060408385031215611c0457611c03612910565b5b6000611c1285828601611afb565b9250506020611c2385828601611afb565b9150509250929050565b600080600060608486031215611c4657611c45612910565b5b6000611c5486828701611afb565b9350506020611c6586828701611afb565b9250506040611c7686828701611bab565b9150509250925092565b60008060008060808587031215611c9a57611c99612910565b5b6000611ca887828801611afb565b9450506020611cb987828801611afb565b9350506040611cca87828801611bab565b925050606085013567ffffffffffffffff811115611ceb57611cea61290b565b5b611cf787828801611b4f565b91505092959194509250565b60008060408385031215611d1a57611d19612910565b5b6000611d2885828601611afb565b9250506020611d3985828601611b10565b9150509250929050565b60008060408385031215611d5a57611d59612910565b5b6000611d6885828601611afb565b9250506020611d7985828601611bab565b9150509250929050565b60008060008060808587031215611d9d57611d9c612910565b5b6000611dab87828801611afb565b9450506020611dbc87828801611bab565b9350506040611dcd87828801611bab565b925050606085013567ffffffffffffffff811115611dee57611ded61290b565b5b611dfa87828801611b7d565b91505092959194509250565b600060208284031215611e1c57611e1b612910565b5b6000611e2a84828501611b25565b91505092915050565b600060208284031215611e4957611e48612910565b5b6000611e5784828501611b3a565b91505092915050565b600060208284031215611e7657611e75612910565b5b600082013567ffffffffffffffff811115611e9457611e9361290b565b5b611ea084828501611b7d565b91505092915050565b600060208284031215611ebf57611ebe612910565b5b6000611ecd84828501611bab565b91505092915050565b60008060408385031215611eed57611eec612910565b5b6000611efb85828601611bab565b925050602083013567ffffffffffffffff811115611f1c57611f1b61290b565b5b611f2885828601611b7d565b9150509250929050565b600080600060608486031215611f4b57611f4a612910565b5b6000611f5986828701611bab565b9350506020611f6a86828701611bab565b925050604084013567ffffffffffffffff811115611f8b57611f8a61290b565b5b611f9786828701611b7d565b9150509250925092565b611faa81612683565b82525050565b611fb981612695565b82525050565b6000611fca82612585565b611fd4818561259b565b9350611fe4818560208601612706565b611fed81612915565b840191505092915050565b600061200382612590565b61200d81856125ac565b935061201d818560208601612706565b61202681612915565b840191505092915050565b600061203c82612590565b61204681856125bd565b9350612056818560208601612706565b80840191505092915050565b600061206f6032836125ac565b915061207a82612926565b604082019050919050565b60006120926025836125ac565b915061209d82612975565b604082019050919050565b60006120b5601c836125ac565b91506120c0826129c4565b602082019050919050565b60006120d86024836125ac565b91506120e3826129ed565b604082019050919050565b60006120fb6019836125ac565b915061210682612a3c565b602082019050919050565b600061211e602c836125ac565b915061212982612a65565b604082019050919050565b60006121416038836125ac565b915061214c82612ab4565b604082019050919050565b6000612164602a836125ac565b915061216f82612b03565b604082019050919050565b60006121876029836125ac565b915061219282612b52565b604082019050919050565b60006121aa6020836125ac565b91506121b582612ba1565b602082019050919050565b60006121cd602c836125ac565b91506121d882612bca565b604082019050919050565b60006121f0602f836125ac565b91506121fb82612c19565b604082019050919050565b60006122136021836125ac565b915061221e82612c68565b604082019050919050565b60006122366031836125ac565b915061224182612cb7565b604082019050919050565b612255816126ed565b82525050565b60006122678285612031565b91506122738284612031565b91508190509392505050565b60006020820190506122946000830184611fa1565b92915050565b60006080820190506122af6000830187611fa1565b6122bc6020830186611fa1565b6122c9604083018561224c565b81810360608301526122db8184611fbf565b905095945050505050565b60006020820190506122fb6000830184611fb0565b92915050565b6000602082019050818103600083015261231b8184611ff8565b905092915050565b6000602082019050818103600083015261233c81612062565b9050919050565b6000602082019050818103600083015261235c81612085565b9050919050565b6000602082019050818103600083015261237c816120a8565b9050919050565b6000602082019050818103600083015261239c816120cb565b9050919050565b600060208201905081810360008301526123bc816120ee565b9050919050565b600060208201905081810360008301526123dc81612111565b9050919050565b600060208201905081810360008301526123fc81612134565b9050919050565b6000602082019050818103600083015261241c81612157565b9050919050565b6000602082019050818103600083015261243c8161217a565b9050919050565b6000602082019050818103600083015261245c8161219d565b9050919050565b6000602082019050818103600083015261247c816121c0565b9050919050565b6000602082019050818103600083015261249c816121e3565b9050919050565b600060208201905081810360008301526124bc81612206565b9050919050565b600060208201905081810360008301526124dc81612229565b9050919050565b60006020820190506124f8600083018461224c565b92915050565b6000612508612519565b9050612514828261276b565b919050565b6000604051905090565b600067ffffffffffffffff82111561253e5761253d6128d2565b5b61254782612915565b9050602081019050919050565b600067ffffffffffffffff82111561256f5761256e6128d2565b5b61257882612915565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125d3826126ed565b91506125de836126ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561261357612612612816565b5b828201905092915050565b6000612629826126ed565b9150612634836126ed565b92508261264457612643612845565b5b828204905092915050565b600061265a826126ed565b9150612665836126ed565b92508282101561267857612677612816565b5b828203905092915050565b600061268e826126cd565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612724578082015181840152602081019050612709565b83811115612733576000848401525b50505050565b6000600282049050600182168061275157607f821691505b6020821081141561276557612764612874565b5b50919050565b61277482612915565b810181811067ffffffffffffffff82111715612793576127926128d2565b5b80604052505050565b60006127a7826126ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127da576127d9612816565b5b600182019050919050565b60006127f0826126ed565b91506127fb836126ed565b92508261280b5761280a612845565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612d0f81612683565b8114612d1a57600080fd5b50565b612d2681612695565b8114612d3157600080fd5b50565b612d3d816126a1565b8114612d4857600080fd5b50565b612d54816126ed565b8114612d5f57600080fd5b5056fea264697066735822122078a6e45ebf9ee8e1e80686b6e87721fc5e126001a248ebc663a31d97d08669b564736f6c63430008060033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370137593116100ad578063a22cb46511610071578063a22cb46514610367578063b88d4fde14610383578063c22aac201461039f578063c87b56dd146103cf578063e985e9c5146103ff5761012c565b8063701375931461028957806370a08231146102b957806395d89b41146102e95780639bc2bc7114610307578063a0fd0c6a146103375761012c565b806323b872dd116100f457806323b872dd146101e75780633074cb51146102035780633592dd801461022157806342842e0e1461023d5780636352211e146102595761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af5780631cd043d6146101cb575b600080fd5b61014b60048036038101906101469190611e06565b61042f565b60405161015891906122e6565b60405180910390f35b610169610511565b6040516101769190612301565b60405180910390f35b61019960048036038101906101949190611ea9565b6105a3565b6040516101a6919061227f565b60405180910390f35b6101c960048036038101906101c49190611d43565b610628565b005b6101e560048036038101906101e09190611ed6565b610740565b005b61020160048036038101906101fc9190611c2d565b61076c565b005b61020b6107cc565b60405161021891906124e3565b60405180910390f35b61023b60048036038101906102369190611f32565b6107d6565b005b61025760048036038101906102529190611c2d565b61081a565b005b610273600480360381019061026e9190611ea9565b61083a565b604051610280919061227f565b60405180910390f35b6102a3600480360381019061029e9190611ed6565b6108ec565b6040516102b091906124e3565b60405180910390f35b6102d360048036038101906102ce9190611bc0565b610952565b6040516102e091906124e3565b60405180910390f35b6102f1610a0a565b6040516102fe9190612301565b60405180910390f35b610321600480360381019061031c9190611e60565b610a9c565b60405161032e91906124e3565b60405180910390f35b610351600480360381019061034c9190611ea9565b610acc565b60405161035e9190612301565b60405180910390f35b610381600480360381019061037c9190611d03565b610b71565b005b61039d60048036038101906103989190611c80565b610b87565b005b6103b960048036038101906103b49190611d83565b610be9565b6040516103c691906124e3565b60405180910390f35b6103e960048036038101906103e49190611ea9565b610c27565b6040516103f69190612301565b60405180910390f35b61041960048036038101906104149190611bed565b610cce565b60405161042691906122e6565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104fa57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061050a575061050982610d62565b5b9050919050565b60606000805461052090612739565b80601f016020809104026020016040519081016040528092919081815260200182805461054c90612739565b80156105995780601f1061056e57610100808354040283529160200191610599565b820191906000526020600020905b81548152906001019060200180831161057c57829003601f168201915b5050505050905090565b60006105ae82610dcc565b6105ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e490612463565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006106338261083a565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069b906124a3565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106c3610e38565b73ffffffffffffffffffffffffffffffffffffffff1614806106f257506106f1816106ec610e38565b610cce565b5b610731576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610728906123e3565b60405180910390fd5b61073b8383610e40565b505050565b80600a6000848152602001908152602001600020908051906020019061076792919061191d565b505050565b61077d610777610e38565b82610ef9565b6107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b3906124c3565b60405180910390fd5b6107c7838383610fd7565b505050565b6000600654905090565b60405180604001604052806107ea8461123e565b815260200182815250600c60008581526020019081526020016000209060026108149291906119a3565b50505050565b61083583838360405180602001604052806000815250610b87565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108da90612423565b60405180910390fd5b80915050919050565b600060405180604001604052806109028561123e565b815260200183815250600b6000600754815260200190815260200160002090600261092e9291906119a3565b50600760008154809291906109429061279c565b9190505550600754905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ba90612403565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060018054610a1990612739565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4590612739565b8015610a925780601f10610a6757610100808354040283529160200191610a92565b820191906000526020600020905b815481529060010190602001808311610a7557829003601f168201915b5050505050905090565b6000610aaa60085483610740565b60086000815480929190610abd9061279c565b91905055506008549050919050565b6060600a60008381526020019081526020016000208054610aec90612739565b80601f0160208091040260200160405190810160405280929190818152602001828054610b1890612739565b8015610b655780601f10610b3a57610100808354040283529160200191610b65565b820191906000526020600020905b815481529060010190602001808311610b4857829003601f168201915b50505050509050919050565b610b83610b7c610e38565b838361139f565b5050565b610b98610b92610e38565b83610ef9565b610bd7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bce906124c3565b60405180910390fd5b610be38484848461150c565b50505050565b6000610bf785600654611568565b610c028385846107d6565b60066000815480929190610c159061279c565b91905055506006549050949350505050565b6060610c3282610dcc565b610c71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6890612483565b60405180910390fd5b6000610c7b611742565b90506000815111610c9b5760405180602001604052806000815250610cc6565b80610ca58461123e565b604051602001610cb692919061225b565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610eb38361083a565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610f0482610dcc565b610f43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3a906123c3565b60405180910390fd5b6000610f4e8361083a565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610fbd57508373ffffffffffffffffffffffffffffffffffffffff16610fa5846105a3565b73ffffffffffffffffffffffffffffffffffffffff16145b80610fce5750610fcd8185610cce565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ff78261083a565b73ffffffffffffffffffffffffffffffffffffffff161461104d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104490612343565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612383565b60405180910390fd5b6110c8838383611759565b6110d3600082610e40565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611123919061264f565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461117a91906125c8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461123983838361175e565b505050565b60606000821415611286576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061139a565b600082905060005b600082146112b85780806112a19061279c565b915050600a826112b1919061261e565b915061128e565b60008167ffffffffffffffff8111156112d4576112d36128d2565b5b6040519080825280601f01601f1916602001820160405280156113065781602001600182028036833780820191505090505b5090505b600085146113935760018261131f919061264f565b9150600a8561132e91906127e5565b603061133a91906125c8565b60f81b8183815181106113505761134f6128a3565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561138c919061261e565b945061130a565b8093505050505b919050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561140e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611405906123a3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114ff91906122e6565b60405180910390a3505050565b611517848484610fd7565b61152384848484611763565b611562576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155990612323565b60405180910390fd5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115cf90612443565b60405180910390fd5b6115e181610dcc565b15611621576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161890612363565b60405180910390fd5b61162d60008383611759565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461167d91906125c8565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461173e6000838361175e565b5050565b606060405180602001604052806000815250905090565b505050565b505050565b60006117848473ffffffffffffffffffffffffffffffffffffffff166118fa565b156118ed578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026117ad610e38565b8786866040518563ffffffff1660e01b81526004016117cf949392919061229a565b602060405180830381600087803b1580156117e957600080fd5b505af192505050801561181a57506040513d601f19601f820116820180604052508101906118179190611e33565b60015b61189d573d806000811461184a576040519150601f19603f3d011682016040523d82523d6000602084013e61184f565b606091505b50600081511415611895576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161188c90612323565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506118f2565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b82805461192990612739565b90600052602060002090601f01602090048101928261194b5760008555611992565b82601f1061196457805160ff1916838001178555611992565b82800160010185558215611992579182015b82811115611991578251825591602001919060010190611976565b5b50905061199f91906119f6565b5090565b82600281019282156119e5579160200282015b828111156119e45782518290805190602001906119d492919061191d565b50916020019190600101906119b6565b5b5090506119f29190611a13565b5090565b5b80821115611a0f5760008160009055506001016119f7565b5090565b5b80821115611a335760008181611a2a9190611a37565b50600101611a14565b5090565b508054611a4390612739565b6000825580601f10611a555750611a74565b601f016020900490600052602060002090810190611a7391906119f6565b5b50565b6000611a8a611a8584612523565b6124fe565b905082815260208101848484011115611aa657611aa5612906565b5b611ab18482856126f7565b509392505050565b6000611acc611ac784612554565b6124fe565b905082815260208101848484011115611ae857611ae7612906565b5b611af38482856126f7565b509392505050565b600081359050611b0a81612d06565b92915050565b600081359050611b1f81612d1d565b92915050565b600081359050611b3481612d34565b92915050565b600081519050611b4981612d34565b92915050565b600082601f830112611b6457611b63612901565b5b8135611b74848260208601611a77565b91505092915050565b600082601f830112611b9257611b91612901565b5b8135611ba2848260208601611ab9565b91505092915050565b600081359050611bba81612d4b565b92915050565b600060208284031215611bd657611bd5612910565b5b6000611be484828501611afb565b91505092915050565b60008060408385031215611c0457611c03612910565b5b6000611c1285828601611afb565b9250506020611c2385828601611afb565b9150509250929050565b600080600060608486031215611c4657611c45612910565b5b6000611c5486828701611afb565b9350506020611c6586828701611afb565b9250506040611c7686828701611bab565b9150509250925092565b60008060008060808587031215611c9a57611c99612910565b5b6000611ca887828801611afb565b9450506020611cb987828801611afb565b9350506040611cca87828801611bab565b925050606085013567ffffffffffffffff811115611ceb57611cea61290b565b5b611cf787828801611b4f565b91505092959194509250565b60008060408385031215611d1a57611d19612910565b5b6000611d2885828601611afb565b9250506020611d3985828601611b10565b9150509250929050565b60008060408385031215611d5a57611d59612910565b5b6000611d6885828601611afb565b9250506020611d7985828601611bab565b9150509250929050565b60008060008060808587031215611d9d57611d9c612910565b5b6000611dab87828801611afb565b9450506020611dbc87828801611bab565b9350506040611dcd87828801611bab565b925050606085013567ffffffffffffffff811115611dee57611ded61290b565b5b611dfa87828801611b7d565b91505092959194509250565b600060208284031215611e1c57611e1b612910565b5b6000611e2a84828501611b25565b91505092915050565b600060208284031215611e4957611e48612910565b5b6000611e5784828501611b3a565b91505092915050565b600060208284031215611e7657611e75612910565b5b600082013567ffffffffffffffff811115611e9457611e9361290b565b5b611ea084828501611b7d565b91505092915050565b600060208284031215611ebf57611ebe612910565b5b6000611ecd84828501611bab565b91505092915050565b60008060408385031215611eed57611eec612910565b5b6000611efb85828601611bab565b925050602083013567ffffffffffffffff811115611f1c57611f1b61290b565b5b611f2885828601611b7d565b9150509250929050565b600080600060608486031215611f4b57611f4a612910565b5b6000611f5986828701611bab565b9350506020611f6a86828701611bab565b925050604084013567ffffffffffffffff811115611f8b57611f8a61290b565b5b611f9786828701611b7d565b9150509250925092565b611faa81612683565b82525050565b611fb981612695565b82525050565b6000611fca82612585565b611fd4818561259b565b9350611fe4818560208601612706565b611fed81612915565b840191505092915050565b600061200382612590565b61200d81856125ac565b935061201d818560208601612706565b61202681612915565b840191505092915050565b600061203c82612590565b61204681856125bd565b9350612056818560208601612706565b80840191505092915050565b600061206f6032836125ac565b915061207a82612926565b604082019050919050565b60006120926025836125ac565b915061209d82612975565b604082019050919050565b60006120b5601c836125ac565b91506120c0826129c4565b602082019050919050565b60006120d86024836125ac565b91506120e3826129ed565b604082019050919050565b60006120fb6019836125ac565b915061210682612a3c565b602082019050919050565b600061211e602c836125ac565b915061212982612a65565b604082019050919050565b60006121416038836125ac565b915061214c82612ab4565b604082019050919050565b6000612164602a836125ac565b915061216f82612b03565b604082019050919050565b60006121876029836125ac565b915061219282612b52565b604082019050919050565b60006121aa6020836125ac565b91506121b582612ba1565b602082019050919050565b60006121cd602c836125ac565b91506121d882612bca565b604082019050919050565b60006121f0602f836125ac565b91506121fb82612c19565b604082019050919050565b60006122136021836125ac565b915061221e82612c68565b604082019050919050565b60006122366031836125ac565b915061224182612cb7565b604082019050919050565b612255816126ed565b82525050565b60006122678285612031565b91506122738284612031565b91508190509392505050565b60006020820190506122946000830184611fa1565b92915050565b60006080820190506122af6000830187611fa1565b6122bc6020830186611fa1565b6122c9604083018561224c565b81810360608301526122db8184611fbf565b905095945050505050565b60006020820190506122fb6000830184611fb0565b92915050565b6000602082019050818103600083015261231b8184611ff8565b905092915050565b6000602082019050818103600083015261233c81612062565b9050919050565b6000602082019050818103600083015261235c81612085565b9050919050565b6000602082019050818103600083015261237c816120a8565b9050919050565b6000602082019050818103600083015261239c816120cb565b9050919050565b600060208201905081810360008301526123bc816120ee565b9050919050565b600060208201905081810360008301526123dc81612111565b9050919050565b600060208201905081810360008301526123fc81612134565b9050919050565b6000602082019050818103600083015261241c81612157565b9050919050565b6000602082019050818103600083015261243c8161217a565b9050919050565b6000602082019050818103600083015261245c8161219d565b9050919050565b6000602082019050818103600083015261247c816121c0565b9050919050565b6000602082019050818103600083015261249c816121e3565b9050919050565b600060208201905081810360008301526124bc81612206565b9050919050565b600060208201905081810360008301526124dc81612229565b9050919050565b60006020820190506124f8600083018461224c565b92915050565b6000612508612519565b9050612514828261276b565b919050565b6000604051905090565b600067ffffffffffffffff82111561253e5761253d6128d2565b5b61254782612915565b9050602081019050919050565b600067ffffffffffffffff82111561256f5761256e6128d2565b5b61257882612915565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006125d3826126ed565b91506125de836126ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561261357612612612816565b5b828201905092915050565b6000612629826126ed565b9150612634836126ed565b92508261264457612643612845565b5b828204905092915050565b600061265a826126ed565b9150612665836126ed565b92508282101561267857612677612816565b5b828203905092915050565b600061268e826126cd565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015612724578082015181840152602081019050612709565b83811115612733576000848401525b50505050565b6000600282049050600182168061275157607f821691505b6020821081141561276557612764612874565b5b50919050565b61277482612915565b810181811067ffffffffffffffff82111715612793576127926128d2565b5b80604052505050565b60006127a7826126ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156127da576127d9612816565b5b600182019050919050565b60006127f0826126ed565b91506127fb836126ed565b92508261280b5761280a612845565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b612d0f81612683565b8114612d1a57600080fd5b50565b612d2681612695565b8114612d3157600080fd5b50565b612d3d816126a1565b8114612d4857600080fd5b50565b612d54816126ed565b8114612d5f57600080fd5b5056fea264697066735822122078a6e45ebf9ee8e1e80686b6e87721fc5e126001a248ebc663a31d97d08669b564736f6c63430008060033","devdoc":{"kind":"dev","methods":{"approve(address,uint256)":{"details":"See {IERC721-approve}."},"balanceOf(address)":{"details":"See {IERC721-balanceOf}."},"getApproved(uint256)":{"details":"See {IERC721-getApproved}."},"isApprovedForAll(address,address)":{"details":"See {IERC721-isApprovedForAll}."},"name()":{"details":"See {IERC721Metadata-name}."},"ownerOf(uint256)":{"details":"See {IERC721-ownerOf}."},"safeTransferFrom(address,address,uint256)":{"details":"See {IERC721-safeTransferFrom}."},"safeTransferFrom(address,address,uint256,bytes)":{"details":"See {IERC721-safeTransferFrom}."},"setApprovalForAll(address,bool)":{"details":"See {IERC721-setApprovalForAll}."},"supportsInterface(bytes4)":{"details":"See {IERC165-supportsInterface}."},"symbol()":{"details":"See {IERC721Metadata-symbol}."},"tokenURI(uint256)":{"details":"See {IERC721Metadata-tokenURI}."},"transferFrom(address,address,uint256)":{"details":"See {IERC721-transferFrom}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1},"storageLayout":{"storage":[{"astId":25,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_name","offset":0,"slot":"0","type":"t_string_storage"},{"astId":27,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_symbol","offset":0,"slot":"1","type":"t_string_storage"},{"astId":31,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_owners","offset":0,"slot":"2","type":"t_mapping(t_uint256,t_address)"},{"astId":35,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_balances","offset":0,"slot":"3","type":"t_mapping(t_address,t_uint256)"},{"astId":39,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_tokenApprovals","offset":0,"slot":"4","type":"t_mapping(t_uint256,t_address)"},{"astId":45,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_operatorApprovals","offset":0,"slot":"5","type":"t_mapping(t_address,t_mapping(t_address,t_bool))"},{"astId":1590,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_tokenIds","offset":0,"slot":"6","type":"t_uint256"},{"astId":1592,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_bidIds","offset":0,"slot":"7","type":"t_uint256"},{"astId":1594,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_eventIds","offset":0,"slot":"8","type":"t_uint256"},{"astId":1598,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_tokenURIs","offset":0,"slot":"9","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1602,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"_eventURIs","offset":0,"slot":"10","type":"t_mapping(t_uint256,t_string_storage)"},{"astId":1608,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"AllTokensBids","offset":0,"slot":"11","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"},{"astId":1614,"contract":"contracts/AuroraERC721.sol:AuroraERC721","label":"AllEventTokens","offset":0,"slot":"12","type":"t_mapping(t_uint256,t_array(t_string_storage)2_storage)"}],"types":{"t_address":{"encoding":"inplace","label":"address","numberOfBytes":"20"},"t_array(t_string_storage)2_storage":{"base":"t_string_storage","encoding":"inplace","label":"string[2]","numberOfBytes":"64"},"t_bool":{"encoding":"inplace","label":"bool","numberOfBytes":"1"},"t_mapping(t_address,t_bool)":{"encoding":"mapping","key":"t_address","label":"mapping(address => bool)","numberOfBytes":"32","value":"t_bool"},"t_mapping(t_address,t_mapping(t_address,t_bool))":{"encoding":"mapping","key":"t_address","label":"mapping(address => mapping(address => bool))","numberOfBytes":"32","value":"t_mapping(t_address,t_bool)"},"t_mapping(t_address,t_uint256)":{"encoding":"mapping","key":"t_address","label":"mapping(address => uint256)","numberOfBytes":"32","value":"t_uint256"},"t_mapping(t_uint256,t_address)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => address)","numberOfBytes":"32","value":"t_address"},"t_mapping(t_uint256,t_array(t_string_storage)2_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string[2])","numberOfBytes":"32","value":"t_array(t_string_storage)2_storage"},"t_mapping(t_uint256,t_string_storage)":{"encoding":"mapping","key":"t_uint256","label":"mapping(uint256 => string)","numberOfBytes":"32","value":"t_string_storage"},"t_string_storage":{"encoding":"bytes","label":"string","numberOfBytes":"32"},"t_uint256":{"encoding":"inplace","label":"uint256","numberOfBytes":"32"}}}}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9ffff77a67fff4ecfce1"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmI2NmMyMDI4NWRlZmNkOWY1MTRhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RhO0FBQ2I7QUFDZ0Q7QUFDVztBQUNaO0FBQ1Y7QUFDckMsbUJBQW1CLHlEQUFNLENBQUMsNkNBQU87QUFDd0I7QUFDVDtBQUNKO0FBQ0k7QUFDSjtBQUNXO0FBQ2I7QUFDSTtBQUNBO0FBQ0Y7QUFDSjtBQUN4QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsUUFBUSx5RUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix5REFBWTtBQUN2QztBQUNBLDJCQUEyQix5REFBWTtBQUN2QztBQUNBLDJCQUEyQix1REFBVztBQUN0QztBQUNBLDJCQUEyQixxREFBVTtBQUNyQztBQUNBLDJCQUEyQixxREFBVTtBQUNyQztBQUNBLDJCQUEyQixxREFBVTtBQUNyQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLDJCQUEyQixtREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdEQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsbUJBQW1CLDJEQUFNO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQU07QUFDekI7QUFDQTtBQUNBLDBEQUEwRCx1REFBYztBQUN4RSwwQkFBMEIscURBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsaUZBQThCO0FBQzVGLHlCQUF5Qiw0Q0FBNEM7QUFDckUseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYjtBQUNBLDBEQUEwRCx1REFBYztBQUN4RSwyQkFBMkIscURBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCx1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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBNkM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBa0Q7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQWM7QUFDdEI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdEQUFnRCxzRkFBbUM7QUFDbkY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwwREFBMEQsc0ZBQW1DO0FBQzdGO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FBQ0UsU0FBdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9hYmkvbGliLmVzbS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2FiaS1jb2Rlci5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2NvZGVycy9hYnN0cmFjdC1jb2Rlci5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2NvZGVycy9hZGRyZXNzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWJpL2xpYi5lc20vY29kZXJzL2Fub255bW91cy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2NvZGVycy9hcnJheS5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2NvZGVycy9ib29sZWFuLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWJpL2xpYi5lc20vY29kZXJzL2J5dGVzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWJpL2xpYi5lc20vY29kZXJzL2ZpeGVkLWJ5dGVzLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWJpL2xpYi5lc20vY29kZXJzL251bGwuanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL25vZGVfbW9kdWxlcy9AZXRoZXJzcHJvamVjdC9hYmkvbGliLmVzbS9jb2RlcnMvbnVtYmVyLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvYWJpL2xpYi5lc20vY29kZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2NvZGVycy90dXBsZS5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2ZyYWdtZW50cy5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2FiaS9saWIuZXNtL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyLy4vbm9kZV9tb2R1bGVzL0BldGhlcnNwcm9qZWN0L2NvbnRyYWN0cy9saWIuZXNtL192ZXJzaW9uLmpzIiwid2VicGFjazovL2RlbWV0ZXIvLi9ub2RlX21vZHVsZXMvQGV0aGVyc3Byb2plY3QvY29udHJhY3RzL2xpYi5lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGVtZXRlci8uL3NlcnZpY2VzL0VSQzcyMVNpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9kZW1ldGVyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdmVyc2lvbiA9IFwiYWJpLzUuNS4wXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1fdmVyc2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtL3dpa2kvd2lraS9FdGhlcmV1bS1Db250cmFjdC1BQklcbmltcG9ydCB7IGFycmF5aWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBkZWZpbmVSZWFkT25seSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG5pbXBvcnQgeyBSZWFkZXIsIFdyaXRlciB9IGZyb20gXCIuL2NvZGVycy9hYnN0cmFjdC1jb2RlclwiO1xuaW1wb3J0IHsgQWRkcmVzc0NvZGVyIH0gZnJvbSBcIi4vY29kZXJzL2FkZHJlc3NcIjtcbmltcG9ydCB7IEFycmF5Q29kZXIgfSBmcm9tIFwiLi9jb2RlcnMvYXJyYXlcIjtcbmltcG9ydCB7IEJvb2xlYW5Db2RlciB9IGZyb20gXCIuL2NvZGVycy9ib29sZWFuXCI7XG5pbXBvcnQgeyBCeXRlc0NvZGVyIH0gZnJvbSBcIi4vY29kZXJzL2J5dGVzXCI7XG5pbXBvcnQgeyBGaXhlZEJ5dGVzQ29kZXIgfSBmcm9tIFwiLi9jb2RlcnMvZml4ZWQtYnl0ZXNcIjtcbmltcG9ydCB7IE51bGxDb2RlciB9IGZyb20gXCIuL2NvZGVycy9udWxsXCI7XG5pbXBvcnQgeyBOdW1iZXJDb2RlciB9IGZyb20gXCIuL2NvZGVycy9udW1iZXJcIjtcbmltcG9ydCB7IFN0cmluZ0NvZGVyIH0gZnJvbSBcIi4vY29kZXJzL3N0cmluZ1wiO1xuaW1wb3J0IHsgVHVwbGVDb2RlciB9IGZyb20gXCIuL2NvZGVycy90dXBsZVwiO1xuaW1wb3J0IHsgUGFyYW1UeXBlIH0gZnJvbSBcIi4vZnJhZ21lbnRzXCI7XG5jb25zdCBwYXJhbVR5cGVCeXRlcyA9IG5ldyBSZWdFeHAoL15ieXRlcyhbMC05XSopJC8pO1xuY29uc3QgcGFyYW1UeXBlTnVtYmVyID0gbmV3IFJlZ0V4cCgvXih1P2ludCkoWzAtOV0qKSQvKTtcbmV4cG9ydCBjbGFzcyBBYmlDb2RlciB7XG4gICAgY29uc3RydWN0b3IoY29lcmNlRnVuYykge1xuICAgICAgICBsb2dnZXIuY2hlY2tOZXcobmV3LnRhcmdldCwgQWJpQ29kZXIpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImNvZXJjZUZ1bmNcIiwgY29lcmNlRnVuYyB8fCBudWxsKTtcbiAgICB9XG4gICAgX2dldENvZGVyKHBhcmFtKSB7XG4gICAgICAgIHN3aXRjaCAocGFyYW0uYmFzZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJhZGRyZXNzXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzQ29kZXIocGFyYW0ubmFtZSk7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQm9vbGVhbkNvZGVyKHBhcmFtLm5hbWUpO1xuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU3RyaW5nQ29kZXIocGFyYW0ubmFtZSk7XG4gICAgICAgICAgICBjYXNlIFwiYnl0ZXNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJ5dGVzQ29kZXIocGFyYW0ubmFtZSk7XG4gICAgICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5Q29kZXIodGhpcy5fZ2V0Q29kZXIocGFyYW0uYXJyYXlDaGlsZHJlbiksIHBhcmFtLmFycmF5TGVuZ3RoLCBwYXJhbS5uYW1lKTtcbiAgICAgICAgICAgIGNhc2UgXCJ0dXBsZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVHVwbGVDb2RlcigocGFyYW0uY29tcG9uZW50cyB8fCBbXSkubWFwKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldENvZGVyKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgfSksIHBhcmFtLm5hbWUpO1xuICAgICAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTnVsbENvZGVyKHBhcmFtLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHU/aW50WzAtOV0qXG4gICAgICAgIGxldCBtYXRjaCA9IHBhcmFtLnR5cGUubWF0Y2gocGFyYW1UeXBlTnVtYmVyKTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IHBhcnNlSW50KG1hdGNoWzJdIHx8IFwiMjU2XCIpO1xuICAgICAgICAgICAgaWYgKHNpemUgPT09IDAgfHwgc2l6ZSA+IDI1NiB8fCAoc2l6ZSAlIDgpICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgXCIgKyBtYXRjaFsxXSArIFwiIGJpdCBsZW5ndGhcIiwgXCJwYXJhbVwiLCBwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IE51bWJlckNvZGVyKHNpemUgLyA4LCAobWF0Y2hbMV0gPT09IFwiaW50XCIpLCBwYXJhbS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBieXRlc1swLTldK1xuICAgICAgICBtYXRjaCA9IHBhcmFtLnR5cGUubWF0Y2gocGFyYW1UeXBlQnl0ZXMpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGxldCBzaXplID0gcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgICAgICAgICAgaWYgKHNpemUgPT09IDAgfHwgc2l6ZSA+IDMyKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgYnl0ZXMgbGVuZ3RoXCIsIFwicGFyYW1cIiwgcGFyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGaXhlZEJ5dGVzQ29kZXIoc2l6ZSwgcGFyYW0ubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIHR5cGVcIiwgXCJ0eXBlXCIsIHBhcmFtLnR5cGUpO1xuICAgIH1cbiAgICBfZ2V0V29yZFNpemUoKSB7IHJldHVybiAzMjsgfVxuICAgIF9nZXRSZWFkZXIoZGF0YSwgYWxsb3dMb29zZSkge1xuICAgICAgICByZXR1cm4gbmV3IFJlYWRlcihkYXRhLCB0aGlzLl9nZXRXb3JkU2l6ZSgpLCB0aGlzLmNvZXJjZUZ1bmMsIGFsbG93TG9vc2UpO1xuICAgIH1cbiAgICBfZ2V0V3JpdGVyKCkge1xuICAgICAgICByZXR1cm4gbmV3IFdyaXRlcih0aGlzLl9nZXRXb3JkU2l6ZSgpKTtcbiAgICB9XG4gICAgZ2V0RGVmYXVsdFZhbHVlKHR5cGVzKSB7XG4gICAgICAgIGNvbnN0IGNvZGVycyA9IHR5cGVzLm1hcCgodHlwZSkgPT4gdGhpcy5fZ2V0Q29kZXIoUGFyYW1UeXBlLmZyb20odHlwZSkpKTtcbiAgICAgICAgY29uc3QgY29kZXIgPSBuZXcgVHVwbGVDb2Rlcihjb2RlcnMsIFwiX1wiKTtcbiAgICAgICAgcmV0dXJuIGNvZGVyLmRlZmF1bHRWYWx1ZSgpO1xuICAgIH1cbiAgICBlbmNvZGUodHlwZXMsIHZhbHVlcykge1xuICAgICAgICBpZiAodHlwZXMubGVuZ3RoICE9PSB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInR5cGVzL3ZhbHVlcyBsZW5ndGggbWlzbWF0Y2hcIiwgTG9nZ2VyLmVycm9ycy5JTlZBTElEX0FSR1VNRU5ULCB7XG4gICAgICAgICAgICAgICAgY291bnQ6IHsgdHlwZXM6IHR5cGVzLmxlbmd0aCwgdmFsdWVzOiB2YWx1ZXMubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHsgdHlwZXM6IHR5cGVzLCB2YWx1ZXM6IHZhbHVlcyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2RlcnMgPSB0eXBlcy5tYXAoKHR5cGUpID0+IHRoaXMuX2dldENvZGVyKFBhcmFtVHlwZS5mcm9tKHR5cGUpKSk7XG4gICAgICAgIGNvbnN0IGNvZGVyID0gKG5ldyBUdXBsZUNvZGVyKGNvZGVycywgXCJfXCIpKTtcbiAgICAgICAgY29uc3Qgd3JpdGVyID0gdGhpcy5fZ2V0V3JpdGVyKCk7XG4gICAgICAgIGNvZGVyLmVuY29kZSh3cml0ZXIsIHZhbHVlcyk7XG4gICAgICAgIHJldHVybiB3cml0ZXIuZGF0YTtcbiAgICB9XG4gICAgZGVjb2RlKHR5cGVzLCBkYXRhLCBsb29zZSkge1xuICAgICAgICBjb25zdCBjb2RlcnMgPSB0eXBlcy5tYXAoKHR5cGUpID0+IHRoaXMuX2dldENvZGVyKFBhcmFtVHlwZS5mcm9tKHR5cGUpKSk7XG4gICAgICAgIGNvbnN0IGNvZGVyID0gbmV3IFR1cGxlQ29kZXIoY29kZXJzLCBcIl9cIik7XG4gICAgICAgIHJldHVybiBjb2Rlci5kZWNvZGUodGhpcy5fZ2V0UmVhZGVyKGFycmF5aWZ5KGRhdGEpLCBsb29zZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBkZWZhdWx0QWJpQ29kZXIgPSBuZXcgQWJpQ29kZXIoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFiaS1jb2Rlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGFycmF5aWZ5LCBjb25jYXQsIGhleENvbmNhdCwgaGV4bGlmeSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgZGVmaW5lUmVhZE9ubHkgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvcHJvcGVydGllc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuLi9fdmVyc2lvblwiO1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcih2ZXJzaW9uKTtcbmV4cG9ydCBmdW5jdGlvbiBjaGVja1Jlc3VsdEVycm9ycyhyZXN1bHQpIHtcbiAgICAvLyBGaW5kIHRoZSBmaXJzdCBlcnJvciAoaWYgYW55KVxuICAgIGNvbnN0IGVycm9ycyA9IFtdO1xuICAgIGNvbnN0IGNoZWNrRXJyb3JzID0gZnVuY3Rpb24gKHBhdGgsIG9iamVjdCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkUGF0aCA9IHBhdGguc2xpY2UoKTtcbiAgICAgICAgICAgIGNoaWxkUGF0aC5wdXNoKGtleSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNoZWNrRXJyb3JzKGNoaWxkUGF0aCwgb2JqZWN0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goeyBwYXRoOiBjaGlsZFBhdGgsIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hlY2tFcnJvcnMoW10sIHJlc3VsdCk7XG4gICAgcmV0dXJuIGVycm9ycztcbn1cbmV4cG9ydCBjbGFzcyBDb2RlciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgbG9jYWxOYW1lLCBkeW5hbWljKSB7XG4gICAgICAgIC8vIEBUT0RPOiBkZWZpbmVSZWFkT25seSB0aGVzZVxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmxvY2FsTmFtZSA9IGxvY2FsTmFtZTtcbiAgICAgICAgdGhpcy5keW5hbWljID0gZHluYW1pYztcbiAgICB9XG4gICAgX3Rocm93RXJyb3IobWVzc2FnZSwgdmFsdWUpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihtZXNzYWdlLCB0aGlzLmxvY2FsTmFtZSwgdmFsdWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBXcml0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHdvcmRTaXplKSB7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwid29yZFNpemVcIiwgd29yZFNpemUgfHwgMzIpO1xuICAgICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9wYWRkaW5nID0gbmV3IFVpbnQ4QXJyYXkod29yZFNpemUpO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIGhleENvbmNhdCh0aGlzLl9kYXRhKTtcbiAgICB9XG4gICAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuX2RhdGFMZW5ndGg7IH1cbiAgICBfd3JpdGVEYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICB0aGlzLl9kYXRhTGVuZ3RoICs9IGRhdGEubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGg7XG4gICAgfVxuICAgIGFwcGVuZFdyaXRlcih3cml0ZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXRlRGF0YShjb25jYXQod3JpdGVyLl9kYXRhKSk7XG4gICAgfVxuICAgIC8vIEFycmF5aXNoIGl0ZW1zOyBwYWRkZWQgb24gdGhlIHJpZ2h0IHRvIHdvcmRTaXplXG4gICAgd3JpdGVCeXRlcyh2YWx1ZSkge1xuICAgICAgICBsZXQgYnl0ZXMgPSBhcnJheWlmeSh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdPZmZzZXQgPSBieXRlcy5sZW5ndGggJSB0aGlzLndvcmRTaXplO1xuICAgICAgICBpZiAocGFkZGluZ09mZnNldCkge1xuICAgICAgICAgICAgYnl0ZXMgPSBjb25jYXQoW2J5dGVzLCB0aGlzLl9wYWRkaW5nLnNsaWNlKHBhZGRpbmdPZmZzZXQpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3dyaXRlRGF0YShieXRlcyk7XG4gICAgfVxuICAgIF9nZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBsZXQgYnl0ZXMgPSBhcnJheWlmeShCaWdOdW1iZXIuZnJvbSh2YWx1ZSkpO1xuICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoID4gdGhpcy53b3JkU2l6ZSkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJ2YWx1ZSBvdXQtb2YtYm91bmRzXCIsIExvZ2dlci5lcnJvcnMuQlVGRkVSX09WRVJSVU4sIHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMud29yZFNpemUsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBieXRlcy5sZW5ndGhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChieXRlcy5sZW5ndGggJSB0aGlzLndvcmRTaXplKSB7XG4gICAgICAgICAgICBieXRlcyA9IGNvbmNhdChbdGhpcy5fcGFkZGluZy5zbGljZShieXRlcy5sZW5ndGggJSB0aGlzLndvcmRTaXplKSwgYnl0ZXNdKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICAgIC8vIEJpZ051bWJlcmlzaCBpdGVtczsgcGFkZGVkIG9uIHRoZSBsZWZ0IHRvIHdvcmRTaXplXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fd3JpdGVEYXRhKHRoaXMuX2dldFZhbHVlKHZhbHVlKSk7XG4gICAgfVxuICAgIHdyaXRlVXBkYXRhYmxlVmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLl9kYXRhLnB1c2godGhpcy5fcGFkZGluZyk7XG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggKz0gdGhpcy53b3JkU2l6ZTtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZGF0YVtvZmZzZXRdID0gdGhpcy5fZ2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBSZWFkZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHdvcmRTaXplLCBjb2VyY2VGdW5jLCBhbGxvd0xvb3NlKSB7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2RhdGFcIiwgYXJyYXlpZnkoZGF0YSkpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcIndvcmRTaXplXCIsIHdvcmRTaXplIHx8IDMyKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJfY29lcmNlRnVuY1wiLCBjb2VyY2VGdW5jKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJhbGxvd0xvb3NlXCIsIGFsbG93TG9vc2UpO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSAwO1xuICAgIH1cbiAgICBnZXQgZGF0YSgpIHsgcmV0dXJuIGhleGxpZnkodGhpcy5fZGF0YSk7IH1cbiAgICBnZXQgY29uc3VtZWQoKSB7IHJldHVybiB0aGlzLl9vZmZzZXQ7IH1cbiAgICAvLyBUaGUgZGVmYXVsdCBDb2VyY2UgZnVuY3Rpb25cbiAgICBzdGF0aWMgY29lcmNlKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IG5hbWUubWF0Y2goXCJedT9pbnQoWzAtOV0rKSRcIik7XG4gICAgICAgIGlmIChtYXRjaCAmJiBwYXJzZUludChtYXRjaFsxXSkgPD0gNDgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9OdW1iZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGNvZXJjZShuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5fY29lcmNlRnVuYykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvZXJjZUZ1bmMobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFkZXIuY29lcmNlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gICAgX3BlZWtCeXRlcyhvZmZzZXQsIGxlbmd0aCwgbG9vc2UpIHtcbiAgICAgICAgbGV0IGFsaWduZWRMZW5ndGggPSBNYXRoLmNlaWwobGVuZ3RoIC8gdGhpcy53b3JkU2l6ZSkgKiB0aGlzLndvcmRTaXplO1xuICAgICAgICBpZiAodGhpcy5fb2Zmc2V0ICsgYWxpZ25lZExlbmd0aCA+IHRoaXMuX2RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxvd0xvb3NlICYmIGxvb3NlICYmIHRoaXMuX29mZnNldCArIGxlbmd0aCA8PSB0aGlzLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFsaWduZWRMZW5ndGggPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcImRhdGEgb3V0LW9mLWJvdW5kc1wiLCBMb2dnZXIuZXJyb3JzLkJVRkZFUl9PVkVSUlVOLCB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5fZGF0YS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogdGhpcy5fb2Zmc2V0ICsgYWxpZ25lZExlbmd0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhLnNsaWNlKHRoaXMuX29mZnNldCwgdGhpcy5fb2Zmc2V0ICsgYWxpZ25lZExlbmd0aCk7XG4gICAgfVxuICAgIHN1YlJlYWRlcihvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkZXIodGhpcy5fZGF0YS5zbGljZSh0aGlzLl9vZmZzZXQgKyBvZmZzZXQpLCB0aGlzLndvcmRTaXplLCB0aGlzLl9jb2VyY2VGdW5jLCB0aGlzLmFsbG93TG9vc2UpO1xuICAgIH1cbiAgICByZWFkQnl0ZXMobGVuZ3RoLCBsb29zZSkge1xuICAgICAgICBsZXQgYnl0ZXMgPSB0aGlzLl9wZWVrQnl0ZXMoMCwgbGVuZ3RoLCAhIWxvb3NlKTtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ICs9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgLy8gQFRPRE86IE1ha2Ugc3VyZSB0aGUgbGVuZ3RoLi5lbmQgYnl0ZXMgYXJlIGFsbCAwP1xuICAgICAgICByZXR1cm4gYnl0ZXMuc2xpY2UoMCwgbGVuZ3RoKTtcbiAgICB9XG4gICAgcmVhZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gQmlnTnVtYmVyLmZyb20odGhpcy5yZWFkQnl0ZXModGhpcy53b3JkU2l6ZSkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFic3RyYWN0LWNvZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgZ2V0QWRkcmVzcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hZGRyZXNzXCI7XG5pbXBvcnQgeyBoZXhaZXJvUGFkIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBDb2RlciB9IGZyb20gXCIuL2Fic3RyYWN0LWNvZGVyXCI7XG5leHBvcnQgY2xhc3MgQWRkcmVzc0NvZGVyIGV4dGVuZHMgQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsTmFtZSkge1xuICAgICAgICBzdXBlcihcImFkZHJlc3NcIiwgXCJhZGRyZXNzXCIsIGxvY2FsTmFtZSwgZmFsc2UpO1xuICAgIH1cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiO1xuICAgIH1cbiAgICBlbmNvZGUod3JpdGVyLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFsdWUgPSBnZXRBZGRyZXNzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rocm93RXJyb3IoZXJyb3IubWVzc2FnZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIGRlY29kZShyZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIGdldEFkZHJlc3MoaGV4WmVyb1BhZChyZWFkZXIucmVhZFZhbHVlKCkudG9IZXhTdHJpbmcoKSwgMjApKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZGRyZXNzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgQ29kZXIgfSBmcm9tIFwiLi9hYnN0cmFjdC1jb2RlclwiO1xuLy8gQ2xvbmVzIHRoZSBmdW5jdGlvbmFsaXR5IG9mIGFuIGV4aXN0aW5nIENvZGVyLCBidXQgd2l0aG91dCBhIGxvY2FsTmFtZVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvZGVyIGV4dGVuZHMgQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvZGVyKSB7XG4gICAgICAgIHN1cGVyKGNvZGVyLm5hbWUsIGNvZGVyLnR5cGUsIHVuZGVmaW5lZCwgY29kZXIuZHluYW1pYyk7XG4gICAgICAgIHRoaXMuY29kZXIgPSBjb2RlcjtcbiAgICB9XG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2Rlci5kZWZhdWx0VmFsdWUoKTtcbiAgICB9XG4gICAgZW5jb2RlKHdyaXRlciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29kZXIuZW5jb2RlKHdyaXRlciwgdmFsdWUpO1xuICAgIH1cbiAgICBkZWNvZGUocmVhZGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvZGVyLmRlY29kZShyZWFkZXIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFub255bW91cy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9sb2dnZXJcIjtcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG5pbXBvcnQgeyBDb2RlciwgV3JpdGVyIH0gZnJvbSBcIi4vYWJzdHJhY3QtY29kZXJcIjtcbmltcG9ydCB7IEFub255bW91c0NvZGVyIH0gZnJvbSBcIi4vYW5vbnltb3VzXCI7XG5leHBvcnQgZnVuY3Rpb24gcGFjayh3cml0ZXIsIGNvZGVycywgdmFsdWVzKSB7XG4gICAgbGV0IGFycmF5VmFsdWVzID0gbnVsbDtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGFycmF5VmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWx1ZXMgJiYgdHlwZW9mICh2YWx1ZXMpID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGxldCB1bmlxdWUgPSB7fTtcbiAgICAgICAgYXJyYXlWYWx1ZXMgPSBjb2RlcnMubWFwKChjb2RlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNvZGVyLmxvY2FsTmFtZTtcbiAgICAgICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiY2Fubm90IGVuY29kZSBvYmplY3QgZm9yIHNpZ25hdHVyZSB3aXRoIG1pc3NpbmcgbmFtZXNcIiwgTG9nZ2VyLmVycm9ycy5JTlZBTElEX0FSR1VNRU5ULCB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50OiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2RlcjogY29kZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1bmlxdWVbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcImNhbm5vdCBlbmNvZGUgb2JqZWN0IGZvciBzaWduYXR1cmUgd2l0aCBkdXBsaWNhdGUgbmFtZXNcIiwgTG9nZ2VyLmVycm9ycy5JTlZBTElEX0FSR1VNRU5ULCB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50OiBcInZhbHVlc1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2RlcjogY29kZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVuaXF1ZVtuYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzW25hbWVdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIHR1cGxlIHZhbHVlXCIsIFwidHVwbGVcIiwgdmFsdWVzKTtcbiAgICB9XG4gICAgaWYgKGNvZGVycy5sZW5ndGggIT09IGFycmF5VmFsdWVzLmxlbmd0aCkge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwidHlwZXMvdmFsdWUgbGVuZ3RoIG1pc21hdGNoXCIsIFwidHVwbGVcIiwgdmFsdWVzKTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1dyaXRlciA9IG5ldyBXcml0ZXIod3JpdGVyLndvcmRTaXplKTtcbiAgICBsZXQgZHluYW1pY1dyaXRlciA9IG5ldyBXcml0ZXIod3JpdGVyLndvcmRTaXplKTtcbiAgICBsZXQgdXBkYXRlRnVuY3MgPSBbXTtcbiAgICBjb2RlcnMuZm9yRWFjaCgoY29kZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IGFycmF5VmFsdWVzW2luZGV4XTtcbiAgICAgICAgaWYgKGNvZGVyLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IGR5bmFtaWMgb2Zmc2V0IChmb3IgdGhlIGZ1dHVyZSBwb2ludGVyKVxuICAgICAgICAgICAgbGV0IGR5bmFtaWNPZmZzZXQgPSBkeW5hbWljV3JpdGVyLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIEVuY29kZSB0aGUgZHluYW1pYyB2YWx1ZSBpbnRvIHRoZSBkeW5hbWljV3JpdGVyXG4gICAgICAgICAgICBjb2Rlci5lbmNvZGUoZHluYW1pY1dyaXRlciwgdmFsdWUpO1xuICAgICAgICAgICAgLy8gUHJlcGFyZSB0byBwb3B1bGF0ZSB0aGUgY29ycmVjdCBvZmZzZXQgb25jZSB3ZSBhcmUgZG9uZVxuICAgICAgICAgICAgbGV0IHVwZGF0ZUZ1bmMgPSBzdGF0aWNXcml0ZXIud3JpdGVVcGRhdGFibGVWYWx1ZSgpO1xuICAgICAgICAgICAgdXBkYXRlRnVuY3MucHVzaCgoYmFzZU9mZnNldCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmMoYmFzZU9mZnNldCArIGR5bmFtaWNPZmZzZXQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2Rlci5lbmNvZGUoc3RhdGljV3JpdGVyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBCYWNrZmlsbCBhbGwgdGhlIGR5bmFtaWMgb2Zmc2V0cywgbm93IHRoYXQgd2Uga25vdyB0aGUgc3RhdGljIGxlbmd0aFxuICAgIHVwZGF0ZUZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHsgZnVuYyhzdGF0aWNXcml0ZXIubGVuZ3RoKTsgfSk7XG4gICAgbGV0IGxlbmd0aCA9IHdyaXRlci5hcHBlbmRXcml0ZXIoc3RhdGljV3JpdGVyKTtcbiAgICBsZW5ndGggKz0gd3JpdGVyLmFwcGVuZFdyaXRlcihkeW5hbWljV3JpdGVyKTtcbiAgICByZXR1cm4gbGVuZ3RoO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVucGFjayhyZWFkZXIsIGNvZGVycykge1xuICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAvLyBBIHJlYWRlciBhbmNob3JlZCB0byB0aGlzIGJhc2VcbiAgICBsZXQgYmFzZVJlYWRlciA9IHJlYWRlci5zdWJSZWFkZXIoMCk7XG4gICAgY29kZXJzLmZvckVhY2goKGNvZGVyKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZSA9IG51bGw7XG4gICAgICAgIGlmIChjb2Rlci5keW5hbWljKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcmVhZGVyLnJlYWRWYWx1ZSgpO1xuICAgICAgICAgICAgbGV0IG9mZnNldFJlYWRlciA9IGJhc2VSZWFkZXIuc3ViUmVhZGVyKG9mZnNldC50b051bWJlcigpKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBjb2Rlci5kZWNvZGUob2Zmc2V0UmVhZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWNvdmVyIGZyb20gdGhpc1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBMb2dnZXIuZXJyb3JzLkJVRkZFUl9PVkVSUlVOKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGVycm9yO1xuICAgICAgICAgICAgICAgIHZhbHVlLmJhc2VUeXBlID0gY29kZXIubmFtZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5uYW1lID0gY29kZXIubG9jYWxOYW1lO1xuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSBjb2Rlci50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGNvZGVyLmRlY29kZShyZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2Fubm90IHJlY292ZXIgZnJvbSB0aGlzXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IExvZ2dlci5lcnJvcnMuQlVGRkVSX09WRVJSVU4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgdmFsdWUuYmFzZVR5cGUgPSBjb2Rlci5uYW1lO1xuICAgICAgICAgICAgICAgIHZhbHVlLm5hbWUgPSBjb2Rlci5sb2NhbE5hbWU7XG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9IGNvZGVyLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gV2Ugb25seSBvdXRwdXQgbmFtZWQgcHJvcGVydGllcyBmb3IgdW5pcXVlbHkgbmFtZWQgY29kZXJzXG4gICAgY29uc3QgdW5pcXVlTmFtZXMgPSBjb2RlcnMucmVkdWNlKChhY2N1bSwgY29kZXIpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGNvZGVyLmxvY2FsTmFtZTtcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghYWNjdW1bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBhY2N1bVtuYW1lXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2N1bVtuYW1lXSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCB7fSk7XG4gICAgLy8gQWRkIGFueSBuYW1lZCBwYXJhbWV0ZXJzIChpLmUuIHR1cGxlcylcbiAgICBjb2RlcnMuZm9yRWFjaCgoY29kZXIsIGluZGV4KSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gY29kZXIubG9jYWxOYW1lO1xuICAgICAgICBpZiAoIW5hbWUgfHwgdW5pcXVlTmFtZXNbbmFtZV0gIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgbmFtZSA9IFwiX2xlbmd0aFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZXMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogKCkgPT4geyB0aHJvdyB2YWx1ZTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbHVlcywgaSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB7IHRocm93IHZhbHVlOyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh2YWx1ZXMpO1xufVxuZXhwb3J0IGNsYXNzIEFycmF5Q29kZXIgZXh0ZW5kcyBDb2RlciB7XG4gICAgY29uc3RydWN0b3IoY29kZXIsIGxlbmd0aCwgbG9jYWxOYW1lKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAoY29kZXIudHlwZSArIFwiW1wiICsgKGxlbmd0aCA+PSAwID8gbGVuZ3RoIDogXCJcIikgKyBcIl1cIik7XG4gICAgICAgIGNvbnN0IGR5bmFtaWMgPSAobGVuZ3RoID09PSAtMSB8fCBjb2Rlci5keW5hbWljKTtcbiAgICAgICAgc3VwZXIoXCJhcnJheVwiLCB0eXBlLCBsb2NhbE5hbWUsIGR5bmFtaWMpO1xuICAgICAgICB0aGlzLmNvZGVyID0gY29kZXI7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIH1cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIC8vIFZlcmlmaWVzIHRoZSBjaGlsZCBjb2RlciBpcyB2YWxpZCAoZXZlbiBpZiB0aGUgYXJyYXkgaXMgZHluYW1pYyBvciAwLWxlbmd0aClcbiAgICAgICAgY29uc3QgZGVmYXVsdENoaWxkID0gdGhpcy5jb2Rlci5kZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGVmYXVsdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbmNvZGUod3JpdGVyLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLl90aHJvd0Vycm9yKFwiZXhwZWN0ZWQgYXJyYXkgdmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb3VudCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICBpZiAoY291bnQgPT09IC0xKSB7XG4gICAgICAgICAgICBjb3VudCA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICAgIHdyaXRlci53cml0ZVZhbHVlKHZhbHVlLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmNoZWNrQXJndW1lbnRDb3VudCh2YWx1ZS5sZW5ndGgsIGNvdW50LCBcImNvZGVyIGFycmF5XCIgKyAodGhpcy5sb2NhbE5hbWUgPyAoXCIgXCIgKyB0aGlzLmxvY2FsTmFtZSkgOiBcIlwiKSk7XG4gICAgICAgIGxldCBjb2RlcnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29kZXJzLnB1c2godGhpcy5jb2Rlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhY2sod3JpdGVyLCBjb2RlcnMsIHZhbHVlKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvdW50ID09PSAtMSkge1xuICAgICAgICAgICAgY291bnQgPSByZWFkZXIucmVhZFZhbHVlKCkudG9OdW1iZXIoKTtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgdGhlcmUgaXMgKnJvdWdobHkqIGVub3VnaCBkYXRhIHRvIGVuc3VyZVxuICAgICAgICAgICAgLy8gc3RyYXkgcmFuZG9tIGRhdGEgaXMgbm90IGJlaW5nIHJlYWQgYXMgYSBsZW5ndGguIEVhY2hcbiAgICAgICAgICAgIC8vIHNsb3QgcmVxdWlyZXMgYXQgbGVhc3QgMzIgYnl0ZXMgZm9yIHRoZWlyIHZhbHVlIChvciAzMlxuICAgICAgICAgICAgLy8gYnl0ZXMgYXMgYSBsaW5rIHRvIHRoZSBkYXRhKS4gVGhpcyBjb3VsZCB1c2UgYSBtdWNoXG4gICAgICAgICAgICAvLyB0aWdodGVyIGJvdW5kLCBidXQgd2UgYXJlIGVycm9yaW5nIG9uIHRoZSBzaWRlIG9mIHNhZmV0eS5cbiAgICAgICAgICAgIGlmIChjb3VudCAqIDMyID4gcmVhZGVyLl9kYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiaW5zdWZmaWNpZW50IGRhdGEgbGVuZ3RoXCIsIExvZ2dlci5lcnJvcnMuQlVGRkVSX09WRVJSVU4sIHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiByZWFkZXIuX2RhdGEubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogY291bnRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgY29kZXJzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29kZXJzLnB1c2gobmV3IEFub255bW91c0NvZGVyKHRoaXMuY29kZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVhZGVyLmNvZXJjZSh0aGlzLm5hbWUsIHVucGFjayhyZWFkZXIsIGNvZGVycykpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgQ29kZXIgfSBmcm9tIFwiLi9hYnN0cmFjdC1jb2RlclwiO1xuZXhwb3J0IGNsYXNzIEJvb2xlYW5Db2RlciBleHRlbmRzIENvZGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbE5hbWUpIHtcbiAgICAgICAgc3VwZXIoXCJib29sXCIsIFwiYm9vbFwiLCBsb2NhbE5hbWUsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVuY29kZSh3cml0ZXIsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGVWYWx1ZSh2YWx1ZSA/IDEgOiAwKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVhZGVyLmNvZXJjZSh0aGlzLnR5cGUsICFyZWFkZXIucmVhZFZhbHVlKCkuaXNaZXJvKCkpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJvb2xlYW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBhcnJheWlmeSwgaGV4bGlmeSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgQ29kZXIgfSBmcm9tIFwiLi9hYnN0cmFjdC1jb2RlclwiO1xuZXhwb3J0IGNsYXNzIER5bmFtaWNCeXRlc0NvZGVyIGV4dGVuZHMgQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGxvY2FsTmFtZSkge1xuICAgICAgICBzdXBlcih0eXBlLCB0eXBlLCBsb2NhbE5hbWUsIHRydWUpO1xuICAgIH1cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBcIjB4XCI7XG4gICAgfVxuICAgIGVuY29kZSh3cml0ZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gYXJyYXlpZnkodmFsdWUpO1xuICAgICAgICBsZXQgbGVuZ3RoID0gd3JpdGVyLndyaXRlVmFsdWUodmFsdWUubGVuZ3RoKTtcbiAgICAgICAgbGVuZ3RoICs9IHdyaXRlci53cml0ZUJ5dGVzKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVhZGVyLnJlYWRCeXRlcyhyZWFkZXIucmVhZFZhbHVlKCkudG9OdW1iZXIoKSwgdHJ1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJ5dGVzQ29kZXIgZXh0ZW5kcyBEeW5hbWljQnl0ZXNDb2RlciB7XG4gICAgY29uc3RydWN0b3IobG9jYWxOYW1lKSB7XG4gICAgICAgIHN1cGVyKFwiYnl0ZXNcIiwgbG9jYWxOYW1lKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVhZGVyLmNvZXJjZSh0aGlzLm5hbWUsIGhleGxpZnkoc3VwZXIuZGVjb2RlKHJlYWRlcikpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ieXRlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IGFycmF5aWZ5LCBoZXhsaWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2J5dGVzXCI7XG5pbXBvcnQgeyBDb2RlciB9IGZyb20gXCIuL2Fic3RyYWN0LWNvZGVyXCI7XG4vLyBAVE9ETzogTWVyZ2UgdGhpcyB3aXRoIGJ5dGVzXG5leHBvcnQgY2xhc3MgRml4ZWRCeXRlc0NvZGVyIGV4dGVuZHMgQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGxvY2FsTmFtZSkge1xuICAgICAgICBsZXQgbmFtZSA9IFwiYnl0ZXNcIiArIFN0cmluZyhzaXplKTtcbiAgICAgICAgc3VwZXIobmFtZSwgbmFtZSwgbG9jYWxOYW1lLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgfVxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIChcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiKS5zdWJzdHJpbmcoMCwgMiArIHRoaXMuc2l6ZSAqIDIpO1xuICAgIH1cbiAgICBlbmNvZGUod3JpdGVyLCB2YWx1ZSkge1xuICAgICAgICBsZXQgZGF0YSA9IGFycmF5aWZ5KHZhbHVlKTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoICE9PSB0aGlzLnNpemUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rocm93RXJyb3IoXCJpbmNvcnJlY3QgZGF0YSBsZW5ndGhcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGVCeXRlcyhkYXRhKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVhZGVyLmNvZXJjZSh0aGlzLm5hbWUsIGhleGxpZnkocmVhZGVyLnJlYWRCeXRlcyh0aGlzLnNpemUpKSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zml4ZWQtYnl0ZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBDb2RlciB9IGZyb20gXCIuL2Fic3RyYWN0LWNvZGVyXCI7XG5leHBvcnQgY2xhc3MgTnVsbENvZGVyIGV4dGVuZHMgQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsTmFtZSkge1xuICAgICAgICBzdXBlcihcIm51bGxcIiwgXCJcIiwgbG9jYWxOYW1lLCBmYWxzZSk7XG4gICAgfVxuICAgIGRlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVuY29kZSh3cml0ZXIsIHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl90aHJvd0Vycm9yKFwibm90IG51bGxcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGVCeXRlcyhbXSk7XG4gICAgfVxuICAgIGRlY29kZShyZWFkZXIpIHtcbiAgICAgICAgcmVhZGVyLnJlYWRCeXRlcygwKTtcbiAgICAgICAgcmV0dXJuIHJlYWRlci5jb2VyY2UodGhpcy5uYW1lLCBudWxsKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1udWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHsgQmlnTnVtYmVyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2JpZ251bWJlclwiO1xuaW1wb3J0IHsgTWF4VWludDI1NiwgTmVnYXRpdmVPbmUsIE9uZSwgWmVybyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9jb25zdGFudHNcIjtcbmltcG9ydCB7IENvZGVyIH0gZnJvbSBcIi4vYWJzdHJhY3QtY29kZXJcIjtcbmV4cG9ydCBjbGFzcyBOdW1iZXJDb2RlciBleHRlbmRzIENvZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzaXplLCBzaWduZWQsIGxvY2FsTmFtZSkge1xuICAgICAgICBjb25zdCBuYW1lID0gKChzaWduZWQgPyBcImludFwiIDogXCJ1aW50XCIpICsgKHNpemUgKiA4KSk7XG4gICAgICAgIHN1cGVyKG5hbWUsIG5hbWUsIGxvY2FsTmFtZSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnNpZ25lZCA9IHNpZ25lZDtcbiAgICB9XG4gICAgZGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZW5jb2RlKHdyaXRlciwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHYgPSBCaWdOdW1iZXIuZnJvbSh2YWx1ZSk7XG4gICAgICAgIC8vIENoZWNrIGJvdW5kcyBhcmUgc2FmZSBmb3IgZW5jb2RpbmdcbiAgICAgICAgbGV0IG1heFVpbnRWYWx1ZSA9IE1heFVpbnQyNTYubWFzayh3cml0ZXIud29yZFNpemUgKiA4KTtcbiAgICAgICAgaWYgKHRoaXMuc2lnbmVkKSB7XG4gICAgICAgICAgICBsZXQgYm91bmRzID0gbWF4VWludFZhbHVlLm1hc2sodGhpcy5zaXplICogOCAtIDEpO1xuICAgICAgICAgICAgaWYgKHYuZ3QoYm91bmRzKSB8fCB2Lmx0KGJvdW5kcy5hZGQoT25lKS5tdWwoTmVnYXRpdmVPbmUpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Rocm93RXJyb3IoXCJ2YWx1ZSBvdXQtb2YtYm91bmRzXCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2Lmx0KFplcm8pIHx8IHYuZ3QobWF4VWludFZhbHVlLm1hc2sodGhpcy5zaXplICogOCkpKSB7XG4gICAgICAgICAgICB0aGlzLl90aHJvd0Vycm9yKFwidmFsdWUgb3V0LW9mLWJvdW5kc1wiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdiA9IHYudG9Ud29zKHRoaXMuc2l6ZSAqIDgpLm1hc2sodGhpcy5zaXplICogOCk7XG4gICAgICAgIGlmICh0aGlzLnNpZ25lZCkge1xuICAgICAgICAgICAgdiA9IHYuZnJvbVR3b3ModGhpcy5zaXplICogOCkudG9Ud29zKDggKiB3cml0ZXIud29yZFNpemUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cml0ZXIud3JpdGVWYWx1ZSh2KTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICBsZXQgdmFsdWUgPSByZWFkZXIucmVhZFZhbHVlKCkubWFzayh0aGlzLnNpemUgKiA4KTtcbiAgICAgICAgaWYgKHRoaXMuc2lnbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmZyb21Ud29zKHRoaXMuc2l6ZSAqIDgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFkZXIuY29lcmNlKHRoaXMubmFtZSwgdmFsdWUpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bWJlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7IHRvVXRmOEJ5dGVzLCB0b1V0ZjhTdHJpbmcgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3Qvc3RyaW5nc1wiO1xuaW1wb3J0IHsgRHluYW1pY0J5dGVzQ29kZXIgfSBmcm9tIFwiLi9ieXRlc1wiO1xuZXhwb3J0IGNsYXNzIFN0cmluZ0NvZGVyIGV4dGVuZHMgRHluYW1pY0J5dGVzQ29kZXIge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsTmFtZSkge1xuICAgICAgICBzdXBlcihcInN0cmluZ1wiLCBsb2NhbE5hbWUpO1xuICAgIH1cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBlbmNvZGUod3JpdGVyLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuZW5jb2RlKHdyaXRlciwgdG9VdGY4Qnl0ZXModmFsdWUpKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gdG9VdGY4U3RyaW5nKHN1cGVyLmRlY29kZShyZWFkZXIpKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBDb2RlciB9IGZyb20gXCIuL2Fic3RyYWN0LWNvZGVyXCI7XG5pbXBvcnQgeyBwYWNrLCB1bnBhY2sgfSBmcm9tIFwiLi9hcnJheVwiO1xuZXhwb3J0IGNsYXNzIFR1cGxlQ29kZXIgZXh0ZW5kcyBDb2RlciB7XG4gICAgY29uc3RydWN0b3IoY29kZXJzLCBsb2NhbE5hbWUpIHtcbiAgICAgICAgbGV0IGR5bmFtaWMgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBbXTtcbiAgICAgICAgY29kZXJzLmZvckVhY2goKGNvZGVyKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29kZXIuZHluYW1pYykge1xuICAgICAgICAgICAgICAgIGR5bmFtaWMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHlwZXMucHVzaChjb2Rlci50eXBlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAoXCJ0dXBsZShcIiArIHR5cGVzLmpvaW4oXCIsXCIpICsgXCIpXCIpO1xuICAgICAgICBzdXBlcihcInR1cGxlXCIsIHR5cGUsIGxvY2FsTmFtZSwgZHluYW1pYyk7XG4gICAgICAgIHRoaXMuY29kZXJzID0gY29kZXJzO1xuICAgIH1cbiAgICBkZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvZGVycy5mb3JFYWNoKChjb2RlcikgPT4ge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goY29kZXIuZGVmYXVsdFZhbHVlKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gV2Ugb25seSBvdXRwdXQgbmFtZWQgcHJvcGVydGllcyBmb3IgdW5pcXVlbHkgbmFtZWQgY29kZXJzXG4gICAgICAgIGNvbnN0IHVuaXF1ZU5hbWVzID0gdGhpcy5jb2RlcnMucmVkdWNlKChhY2N1bSwgY29kZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjb2Rlci5sb2NhbE5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICghYWNjdW1bbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjdW1bbmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY2N1bVtuYW1lXSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgICAgICB9LCB7fSk7XG4gICAgICAgIC8vIEFkZCBuYW1lZCB2YWx1ZXNcbiAgICAgICAgdGhpcy5jb2RlcnMuZm9yRWFjaCgoY29kZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGNvZGVyLmxvY2FsTmFtZTtcbiAgICAgICAgICAgIGlmICghbmFtZSB8fCB1bmlxdWVOYW1lc1tuYW1lXSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcImxlbmd0aFwiKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiX2xlbmd0aFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWVzW25hbWVdID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHZhbHVlcyk7XG4gICAgfVxuICAgIGVuY29kZSh3cml0ZXIsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBwYWNrKHdyaXRlciwgdGhpcy5jb2RlcnMsIHZhbHVlKTtcbiAgICB9XG4gICAgZGVjb2RlKHJlYWRlcikge1xuICAgICAgICByZXR1cm4gcmVhZGVyLmNvZXJjZSh0aGlzLm5hbWUsIHVucGFjayhyZWFkZXIsIHRoaXMuY29kZXJzKSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHVwbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBkZWZpbmVSZWFkT25seSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG47XG5jb25zdCBfY29uc3RydWN0b3JHdWFyZCA9IHt9O1xubGV0IE1vZGlmaWVyc0J5dGVzID0geyBjYWxsZGF0YTogdHJ1ZSwgbWVtb3J5OiB0cnVlLCBzdG9yYWdlOiB0cnVlIH07XG5sZXQgTW9kaWZpZXJzTmVzdCA9IHsgY2FsbGRhdGE6IHRydWUsIG1lbW9yeTogdHJ1ZSB9O1xuZnVuY3Rpb24gY2hlY2tNb2RpZmllcih0eXBlLCBuYW1lKSB7XG4gICAgaWYgKHR5cGUgPT09IFwiYnl0ZXNcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChNb2RpZmllcnNCeXRlc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gXCJhZGRyZXNzXCIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwicGF5YWJsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlLmluZGV4T2YoXCJbXCIpID49IDAgfHwgdHlwZSA9PT0gXCJ0dXBsZVwiKSB7XG4gICAgICAgIGlmIChNb2RpZmllcnNOZXN0W25hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoTW9kaWZpZXJzQnl0ZXNbbmFtZV0gfHwgbmFtZSA9PT0gXCJwYXlhYmxlXCIpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgbW9kaWZpZXJcIiwgXCJuYW1lXCIsIG5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG4vLyBAVE9ETzogTWFrZSBzdXJlIHRoYXQgY2hpbGRyZW4gb2YgYW4gaW5kZXhlZCB0dXBsZSBhcmUgbWFya2VkIHdpdGggYSBudWxsIGluZGV4ZWRcbmZ1bmN0aW9uIHBhcnNlUGFyYW1UeXBlKHBhcmFtLCBhbGxvd0luZGV4ZWQpIHtcbiAgICBsZXQgb3JpZ2luYWxQYXJhbSA9IHBhcmFtO1xuICAgIGZ1bmN0aW9uIHRocm93RXJyb3IoaSkge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGB1bmV4cGVjdGVkIGNoYXJhY3RlciBhdCBwb3NpdGlvbiAke2l9YCwgXCJwYXJhbVwiLCBwYXJhbSk7XG4gICAgfVxuICAgIHBhcmFtID0gcGFyYW0ucmVwbGFjZSgvXFxzL2csIFwiIFwiKTtcbiAgICBmdW5jdGlvbiBuZXdOb2RlKHBhcmVudCkge1xuICAgICAgICBsZXQgbm9kZSA9IHsgdHlwZTogXCJcIiwgbmFtZTogXCJcIiwgcGFyZW50OiBwYXJlbnQsIHN0YXRlOiB7IGFsbG93VHlwZTogdHJ1ZSB9IH07XG4gICAgICAgIGlmIChhbGxvd0luZGV4ZWQpIHtcbiAgICAgICAgICAgIG5vZGUuaW5kZXhlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgICBsZXQgcGFyZW50ID0geyB0eXBlOiBcIlwiLCBuYW1lOiBcIlwiLCBzdGF0ZTogeyBhbGxvd1R5cGU6IHRydWUgfSB9O1xuICAgIGxldCBub2RlID0gcGFyZW50O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBwYXJhbVtpXTtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgICBjYXNlIFwiKFwiOlxuICAgICAgICAgICAgICAgIGlmIChub2RlLnN0YXRlLmFsbG93VHlwZSAmJiBub2RlLnR5cGUgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlID0gXCJ0dXBsZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghbm9kZS5zdGF0ZS5hbGxvd1BhcmFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93VHlwZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9IHZlcmlmeVR5cGUobm9kZS50eXBlKTtcbiAgICAgICAgICAgICAgICBub2RlLmNvbXBvbmVudHMgPSBbbmV3Tm9kZShub2RlKV07XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUuY29tcG9uZW50c1swXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCIpXCI6XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuc3RhdGU7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubmFtZSA9PT0gXCJpbmRleGVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd0luZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZS5pbmRleGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTW9kaWZpZXIobm9kZS50eXBlLCBub2RlLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5vZGUudHlwZSA9IHZlcmlmeVR5cGUobm9kZS50eXBlKTtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkLnBhcmVudDtcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93UGFyYW1zID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZS5zdGF0ZS5hbGxvd05hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhdGUuYWxsb3dBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiLFwiOlxuICAgICAgICAgICAgICAgIGRlbGV0ZSBub2RlLnN0YXRlO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09IFwiaW5kZXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsb3dJbmRleGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5kZXhlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjaGVja01vZGlmaWVyKG5vZGUudHlwZSwgbm9kZS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnR5cGUgPSB2ZXJpZnlUeXBlKG5vZGUudHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNpYmxpbmcgPSBuZXdOb2RlKG5vZGUucGFyZW50KTtcbiAgICAgICAgICAgICAgICAvL3sgdHlwZTogXCJcIiwgbmFtZTogXCJcIiwgcGFyZW50OiBub2RlLnBhcmVudCwgc3RhdGU6IHsgYWxsb3dUeXBlOiB0cnVlIH0gfTtcbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudC5jb21wb25lbnRzLnB1c2goc2libGluZyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIG5vZGUgPSBzaWJsaW5nO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gSGl0IGEgc3BhY2UuLi5cbiAgICAgICAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyB0eXBlLCB0aGUgdHlwZSBpcyBkb25lIGFuZCBtYXkgcmVhZCBhIHBhcmFtIG9yIG5hbWVcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zdGF0ZS5hbGxvd1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlID0gdmVyaWZ5VHlwZShub2RlLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuc3RhdGUuYWxsb3dUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdGF0ZS5hbGxvd05hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdGF0ZS5hbGxvd1BhcmFtcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgcmVhZGluZyBuYW1lLCB0aGUgbmFtZSBpcyBkb25lXG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuc3RhdGUuYWxsb3dOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5hbWUgPT09IFwiaW5kZXhlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxvd0luZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcihpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaW5kZXhlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmluZGV4ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGVja01vZGlmaWVyKG5vZGUudHlwZSwgbm9kZS5uYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93TmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIltcIjpcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuc3RhdGUuYWxsb3dBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnR5cGUgKz0gYztcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93QXJyYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93TmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhdGUucmVhZEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJdXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlLnN0YXRlLnJlYWRBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnR5cGUgKz0gYztcbiAgICAgICAgICAgICAgICBub2RlLnN0YXRlLnJlYWRBcnJheSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5vZGUuc3RhdGUuYWxsb3dBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbm9kZS5zdGF0ZS5hbGxvd05hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zdGF0ZS5hbGxvd1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlICs9IGM7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3RhdGUuYWxsb3dQYXJhbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0YXRlLmFsbG93QXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlLnN0YXRlLmFsbG93TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLm5hbWUgKz0gYztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG5vZGUuc3RhdGUuYWxsb3dBcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5zdGF0ZS5yZWFkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS50eXBlICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobm9kZS5wYXJlbnQpIHtcbiAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInVuZXhwZWN0ZWQgZW9mXCIsIFwicGFyYW1cIiwgcGFyYW0pO1xuICAgIH1cbiAgICBkZWxldGUgcGFyZW50LnN0YXRlO1xuICAgIGlmIChub2RlLm5hbWUgPT09IFwiaW5kZXhlZFwiKSB7XG4gICAgICAgIGlmICghYWxsb3dJbmRleGVkKSB7XG4gICAgICAgICAgICB0aHJvd0Vycm9yKG9yaWdpbmFsUGFyYW0ubGVuZ3RoIC0gNyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuaW5kZXhlZCkge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihvcmlnaW5hbFBhcmFtLmxlbmd0aCAtIDcpO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUuaW5kZXhlZCA9IHRydWU7XG4gICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrTW9kaWZpZXIobm9kZS50eXBlLCBub2RlLm5hbWUpKSB7XG4gICAgICAgIG5vZGUubmFtZSA9IFwiXCI7XG4gICAgfVxuICAgIHBhcmVudC50eXBlID0gdmVyaWZ5VHlwZShwYXJlbnQudHlwZSk7XG4gICAgcmV0dXJuIHBhcmVudDtcbn1cbmZ1bmN0aW9uIHBvcHVsYXRlKG9iamVjdCwgcGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHBhcmFtcykge1xuICAgICAgICBkZWZpbmVSZWFkT25seShvYmplY3QsIGtleSwgcGFyYW1zW2tleV0pO1xuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBGb3JtYXRUeXBlcyA9IE9iamVjdC5mcmVlemUoe1xuICAgIC8vIEJhcmUgZm9ybWF0dGluZywgYXMgaXMgbmVlZGVkIGZvciBjb21wdXRpbmcgYSBzaWdoYXNoIG9mIGFuIGV2ZW50IG9yIGZ1bmN0aW9uXG4gICAgc2lnaGFzaDogXCJzaWdoYXNoXCIsXG4gICAgLy8gSHVtYW4tUmVhZGFibGUgd2l0aCBNaW5pbWFsIHNwYWNpbmcgYW5kIHdpdGhvdXQgbmFtZXMgKGNvbXBhY3QgaHVtYW4tcmVhZGFibGUpXG4gICAgbWluaW1hbDogXCJtaW5pbWFsXCIsXG4gICAgLy8gSHVtYW4tUmVhZGFibGUgd2l0aCBuaWNlIHNwYWNpbmcsIGluY2x1ZGluZyBhbGwgbmFtZXNcbiAgICBmdWxsOiBcImZ1bGxcIixcbiAgICAvLyBKU09OLWZvcm1hdCBhIGxhIFNvbGlkaXR5XG4gICAganNvbjogXCJqc29uXCJcbn0pO1xuY29uc3QgcGFyYW1UeXBlQXJyYXkgPSBuZXcgUmVnRXhwKC9eKC4qKVxcWyhbMC05XSopXFxdJC8pO1xuZXhwb3J0IGNsYXNzIFBhcmFtVHlwZSB7XG4gICAgY29uc3RydWN0b3IoY29uc3RydWN0b3JHdWFyZCwgcGFyYW1zKSB7XG4gICAgICAgIGlmIChjb25zdHJ1Y3Rvckd1YXJkICE9PSBfY29uc3RydWN0b3JHdWFyZCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJ1c2UgZnJvbVN0cmluZ1wiLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJuZXcgUGFyYW1UeXBlKClcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9wdWxhdGUodGhpcywgcGFyYW1zKTtcbiAgICAgICAgbGV0IG1hdGNoID0gdGhpcy50eXBlLm1hdGNoKHBhcmFtVHlwZUFycmF5KTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYXJyYXlMZW5ndGg6IHBhcnNlSW50KG1hdGNoWzJdIHx8IFwiLTFcIiksXG4gICAgICAgICAgICAgICAgYXJyYXlDaGlsZHJlbjogUGFyYW1UeXBlLmZyb21PYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFsxXSxcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogdGhpcy5jb21wb25lbnRzXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgYmFzZVR5cGU6IFwiYXJyYXlcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwb3B1bGF0ZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgYXJyYXlMZW5ndGg6IG51bGwsXG4gICAgICAgICAgICAgICAgYXJyYXlDaGlsZHJlbjogbnVsbCxcbiAgICAgICAgICAgICAgICBiYXNlVHlwZTogKCh0aGlzLmNvbXBvbmVudHMgIT0gbnVsbCkgPyBcInR1cGxlXCIgOiB0aGlzLnR5cGUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1BhcmFtVHlwZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuICAgIC8vIEZvcm1hdCB0aGUgcGFyYW1ldGVyIGZyYWdtZW50XG4gICAgLy8gICAtIHNpZ2hhc2g6IFwiKHVpbnQyNTYsYWRkcmVzcylcIlxuICAgIC8vICAgLSBtaW5pbWFsOiBcInR1cGxlKHVpbnQyNTYsYWRkcmVzcykgaW5kZXhlZFwiXG4gICAgLy8gICAtIGZ1bGw6ICAgIFwidHVwbGUodWludDI1NiBmb28sIGFkZHJlc3MgYmFyKSBpbmRleGVkIGJhelwiXG4gICAgZm9ybWF0KGZvcm1hdCkge1xuICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgICAgZm9ybWF0ID0gRm9ybWF0VHlwZXMuc2lnaGFzaDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUZvcm1hdFR5cGVzW2Zvcm1hdF0pIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGZvcm1hdCB0eXBlXCIsIFwiZm9ybWF0XCIsIGZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuanNvbikge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAoKHRoaXMuYmFzZVR5cGUgPT09IFwidHVwbGVcIikgPyBcInR1cGxlXCIgOiB0aGlzLnR5cGUpLFxuICAgICAgICAgICAgICAgIG5hbWU6ICh0aGlzLm5hbWUgfHwgdW5kZWZpbmVkKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuaW5kZXhlZCkgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmluZGV4ZWQgPSB0aGlzLmluZGV4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbXBvbmVudHMgPSB0aGlzLmNvbXBvbmVudHMubWFwKChjb21wKSA9PiBKU09OLnBhcnNlKGNvbXAuZm9ybWF0KGZvcm1hdCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICAvLyBBcnJheVxuICAgICAgICBpZiAodGhpcy5iYXNlVHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5hcnJheUNoaWxkcmVuLmZvcm1hdChmb3JtYXQpO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiW1wiICsgKHRoaXMuYXJyYXlMZW5ndGggPCAwID8gXCJcIiA6IFN0cmluZyh0aGlzLmFycmF5TGVuZ3RoKSkgKyBcIl1cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VUeXBlID09PSBcInR1cGxlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybWF0ICE9PSBGb3JtYXRUeXBlcy5zaWdoYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIihcIiArIHRoaXMuY29tcG9uZW50cy5tYXAoKGNvbXApID0+IGNvbXAuZm9ybWF0KGZvcm1hdCkpLmpvaW4oKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuZnVsbCkgPyBcIiwgXCIgOiBcIixcIikgKyBcIilcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gRm9ybWF0VHlwZXMuc2lnaGFzaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXhlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiBpbmRleGVkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm9ybWF0ID09PSBGb3JtYXRUeXBlcy5mdWxsICYmIHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiBcIiArIHRoaXMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSh2YWx1ZSwgYWxsb3dJbmRleGVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIFBhcmFtVHlwZS5mcm9tU3RyaW5nKHZhbHVlLCBhbGxvd0luZGV4ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJhbVR5cGUuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmIChQYXJhbVR5cGUuaXNQYXJhbVR5cGUodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhbVR5cGUoX2NvbnN0cnVjdG9yR3VhcmQsIHtcbiAgICAgICAgICAgIG5hbWU6ICh2YWx1ZS5uYW1lIHx8IG51bGwpLFxuICAgICAgICAgICAgdHlwZTogdmVyaWZ5VHlwZSh2YWx1ZS50eXBlKSxcbiAgICAgICAgICAgIGluZGV4ZWQ6ICgodmFsdWUuaW5kZXhlZCA9PSBudWxsKSA/IG51bGwgOiAhIXZhbHVlLmluZGV4ZWQpLFxuICAgICAgICAgICAgY29tcG9uZW50czogKHZhbHVlLmNvbXBvbmVudHMgPyB2YWx1ZS5jb21wb25lbnRzLm1hcChQYXJhbVR5cGUuZnJvbU9iamVjdCkgOiBudWxsKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUsIGFsbG93SW5kZXhlZCkge1xuICAgICAgICBmdW5jdGlvbiBQYXJhbVR5cGlmeShub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gUGFyYW1UeXBlLmZyb21PYmplY3Qoe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgaW5kZXhlZDogbm9kZS5pbmRleGVkLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IG5vZGUuY29tcG9uZW50c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFBhcmFtVHlwaWZ5KHBhcnNlUGFyYW1UeXBlKHZhbHVlLCAhIWFsbG93SW5kZXhlZCkpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNQYXJhbVR5cGUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICEhKHZhbHVlICE9IG51bGwgJiYgdmFsdWUuX2lzUGFyYW1UeXBlKTtcbiAgICB9XG59XG47XG5mdW5jdGlvbiBwYXJzZVBhcmFtcyh2YWx1ZSwgYWxsb3dJbmRleCkge1xuICAgIHJldHVybiBzcGxpdE5lc3RpbmcodmFsdWUpLm1hcCgocGFyYW0pID0+IFBhcmFtVHlwZS5mcm9tU3RyaW5nKHBhcmFtLCBhbGxvd0luZGV4KSk7XG59XG5leHBvcnQgY2xhc3MgRnJhZ21lbnQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yR3VhcmQsIHBhcmFtcykge1xuICAgICAgICBpZiAoY29uc3RydWN0b3JHdWFyZCAhPT0gX2NvbnN0cnVjdG9yR3VhcmQpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwidXNlIGEgc3RhdGljIGZyb20gbWV0aG9kXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBcIm5ldyBGcmFnbWVudCgpXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHBvcHVsYXRlKHRoaXMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuX2lzRnJhZ21lbnQgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSh2YWx1ZSkge1xuICAgICAgICBpZiAoRnJhZ21lbnQuaXNGcmFnbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBGcmFnbWVudC5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRnJhZ21lbnQuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmIChGcmFnbWVudC5pc0ZyYWdtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImZ1bmN0aW9uXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uRnJhZ21lbnQuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFwiZXZlbnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gRXZlbnRGcmFnbWVudC5mcm9tT2JqZWN0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgXCJjb25zdHJ1Y3RvclwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvckZyYWdtZW50LmZyb21PYmplY3QodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBcImVycm9yXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIEVycm9yRnJhZ21lbnQuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFwiZmFsbGJhY2tcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyZWNlaXZlXCI6XG4gICAgICAgICAgICAgICAgLy8gQFRPRE86IFNvbWV0aGluZz8gTWF5YmUgcmV0dXJuIGEgRnVuY3Rpb25GcmFnbWVudD8gQSBjdXN0b20gRGVmYXVsdEZ1bmN0aW9uRnJhZ21lbnQ/XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGZyYWdtZW50IG9iamVjdFwiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21TdHJpbmcodmFsdWUpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBcInJldHVybnNcIiBpcyBzdXJyb3VuZGVkIGJ5IGEgc3BhY2UgYW5kIGFsbCB3aGl0ZXNwYWNlIGlzIGV4YWN0bHkgb25lIHNwYWNlXG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csIFwiIFwiKTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXCgvZywgXCIgKFwiKS5yZXBsYWNlKC9cXCkvZywgXCIpIFwiKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIGlmICh2YWx1ZS5zcGxpdChcIiBcIilbMF0gPT09IFwiZXZlbnRcIikge1xuICAgICAgICAgICAgcmV0dXJuIEV2ZW50RnJhZ21lbnQuZnJvbVN0cmluZyh2YWx1ZS5zdWJzdHJpbmcoNSkudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5zcGxpdChcIiBcIilbMF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uRnJhZ21lbnQuZnJvbVN0cmluZyh2YWx1ZS5zdWJzdHJpbmcoOCkudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5zcGxpdChcIihcIilbMF0udHJpbSgpID09PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvckZyYWdtZW50LmZyb21TdHJpbmcodmFsdWUudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5zcGxpdChcIiBcIilbMF0gPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgcmV0dXJuIEVycm9yRnJhZ21lbnQuZnJvbVN0cmluZyh2YWx1ZS5zdWJzdHJpbmcoNSkudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInVuc3VwcG9ydGVkIGZyYWdtZW50XCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNGcmFnbWVudCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX2lzRnJhZ21lbnQpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFdmVudEZyYWdtZW50IGV4dGVuZHMgRnJhZ21lbnQge1xuICAgIGZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdFR5cGVzLnNpZ2hhc2g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFGb3JtYXRUeXBlc1tmb3JtYXRdKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBmb3JtYXQgdHlwZVwiLCBcImZvcm1hdFwiLCBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IEZvcm1hdFR5cGVzLmpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJldmVudFwiLFxuICAgICAgICAgICAgICAgIGFub255bW91czogdGhpcy5hbm9ueW1vdXMsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGlucHV0czogdGhpcy5pbnB1dHMubWFwKChpbnB1dCkgPT4gSlNPTi5wYXJzZShpbnB1dC5mb3JtYXQoZm9ybWF0KSkpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gRm9ybWF0VHlwZXMuc2lnaGFzaCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiZXZlbnQgXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ICs9IHRoaXMubmFtZSArIFwiKFwiICsgdGhpcy5pbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQuZm9ybWF0KGZvcm1hdCkpLmpvaW4oKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuZnVsbCkgPyBcIiwgXCIgOiBcIixcIikgKyBcIikgXCI7XG4gICAgICAgIGlmIChmb3JtYXQgIT09IEZvcm1hdFR5cGVzLnNpZ2hhc2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFub255bW91cykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcImFub255bW91cyBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LnRyaW0oKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb20odmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAodmFsdWUpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gRXZlbnRGcmFnbWVudC5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXZlbnRGcmFnbWVudC5mcm9tT2JqZWN0KHZhbHVlKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21PYmplY3QodmFsdWUpIHtcbiAgICAgICAgaWYgKEV2ZW50RnJhZ21lbnQuaXNFdmVudEZyYWdtZW50KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZS50eXBlICE9PSBcImV2ZW50XCIpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGV2ZW50IG9iamVjdFwiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBuYW1lOiB2ZXJpZnlJZGVudGlmaWVyKHZhbHVlLm5hbWUpLFxuICAgICAgICAgICAgYW5vbnltb3VzOiB2YWx1ZS5hbm9ueW1vdXMsXG4gICAgICAgICAgICBpbnB1dHM6ICh2YWx1ZS5pbnB1dHMgPyB2YWx1ZS5pbnB1dHMubWFwKFBhcmFtVHlwZS5mcm9tT2JqZWN0KSA6IFtdKSxcbiAgICAgICAgICAgIHR5cGU6IFwiZXZlbnRcIlxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IEV2ZW50RnJhZ21lbnQoX2NvbnN0cnVjdG9yR3VhcmQsIHBhcmFtcyk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGxldCBtYXRjaCA9IHZhbHVlLm1hdGNoKHJlZ2V4UGFyZW4pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBldmVudCBzdHJpbmdcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFub255bW91cyA9IGZhbHNlO1xuICAgICAgICBtYXRjaFszXS5zcGxpdChcIiBcIikuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFub255bW91c1wiOlxuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKFwidW5rbm93biBtb2RpZmllcjogXCIgKyBtb2RpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gRXZlbnRGcmFnbWVudC5mcm9tT2JqZWN0KHtcbiAgICAgICAgICAgIG5hbWU6IG1hdGNoWzFdLnRyaW0oKSxcbiAgICAgICAgICAgIGFub255bW91czogYW5vbnltb3VzLFxuICAgICAgICAgICAgaW5wdXRzOiBwYXJzZVBhcmFtcyhtYXRjaFsyXSwgdHJ1ZSksXG4gICAgICAgICAgICB0eXBlOiBcImV2ZW50XCJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0V2ZW50RnJhZ21lbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5faXNGcmFnbWVudCAmJiB2YWx1ZS50eXBlID09PSBcImV2ZW50XCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBhcnNlR2FzKHZhbHVlLCBwYXJhbXMpIHtcbiAgICBwYXJhbXMuZ2FzID0gbnVsbDtcbiAgICBsZXQgY29tcHMgPSB2YWx1ZS5zcGxpdChcIkBcIik7XG4gICAgaWYgKGNvbXBzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICBpZiAoY29tcHMubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgaHVtYW4tcmVhZGFibGUgQUJJIHNpZ25hdHVyZVwiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbXBzWzFdLm1hdGNoKC9eWzAtOV0rJC8pKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBodW1hbi1yZWFkYWJsZSBBQkkgc2lnbmF0dXJlIGdhc1wiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuZ2FzID0gQmlnTnVtYmVyLmZyb20oY29tcHNbMV0pO1xuICAgICAgICByZXR1cm4gY29tcHNbMF07XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKHZhbHVlLCBwYXJhbXMpIHtcbiAgICBwYXJhbXMuY29uc3RhbnQgPSBmYWxzZTtcbiAgICBwYXJhbXMucGF5YWJsZSA9IGZhbHNlO1xuICAgIHBhcmFtcy5zdGF0ZU11dGFiaWxpdHkgPSBcIm5vbnBheWFibGVcIjtcbiAgICB2YWx1ZS5zcGxpdChcIiBcIikuZm9yRWFjaCgobW9kaWZpZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChtb2RpZmllci50cmltKCkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJjb25zdGFudFwiOlxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb25zdGFudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicGF5YWJsZVwiOlxuICAgICAgICAgICAgICAgIHBhcmFtcy5wYXlhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc3RhdGVNdXRhYmlsaXR5ID0gXCJwYXlhYmxlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibm9ucGF5YWJsZVwiOlxuICAgICAgICAgICAgICAgIHBhcmFtcy5wYXlhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcGFyYW1zLnN0YXRlTXV0YWJpbGl0eSA9IFwibm9ucGF5YWJsZVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInB1cmVcIjpcbiAgICAgICAgICAgICAgICBwYXJhbXMuY29uc3RhbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBhcmFtcy5zdGF0ZU11dGFiaWxpdHkgPSBcInB1cmVcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ2aWV3XCI6XG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvbnN0YW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYXJhbXMuc3RhdGVNdXRhYmlsaXR5ID0gXCJ2aWV3XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZXh0ZXJuYWxcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwdWJsaWNcIjpcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1bmtub3duIG1vZGlmaWVyOiBcIiArIG1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gdmVyaWZ5U3RhdGUodmFsdWUpIHtcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICBjb25zdGFudDogZmFsc2UsXG4gICAgICAgIHBheWFibGU6IHRydWUsXG4gICAgICAgIHN0YXRlTXV0YWJpbGl0eTogXCJwYXlhYmxlXCJcbiAgICB9O1xuICAgIGlmICh2YWx1ZS5zdGF0ZU11dGFiaWxpdHkgIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQuc3RhdGVNdXRhYmlsaXR5ID0gdmFsdWUuc3RhdGVNdXRhYmlsaXR5O1xuICAgICAgICAvLyBTZXQgKGFuZCBjaGVjayB0aGluZ3MgYXJlIGNvbnNpc3RlbnQpIHRoZSBjb25zdGFudCBwcm9wZXJ0eVxuICAgICAgICByZXN1bHQuY29uc3RhbnQgPSAocmVzdWx0LnN0YXRlTXV0YWJpbGl0eSA9PT0gXCJ2aWV3XCIgfHwgcmVzdWx0LnN0YXRlTXV0YWJpbGl0eSA9PT0gXCJwdXJlXCIpO1xuICAgICAgICBpZiAodmFsdWUuY29uc3RhbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKCghIXZhbHVlLmNvbnN0YW50KSAhPT0gcmVzdWx0LmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImNhbm5vdCBoYXZlIGNvbnN0YW50IGZ1bmN0aW9uIHdpdGggbXV0YWJpbGl0eSBcIiArIHJlc3VsdC5zdGF0ZU11dGFiaWxpdHksIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFNldCAoYW5kIGNoZWNrIHRoaW5ncyBhcmUgY29uc2lzdGVudCkgdGhlIHBheWFibGUgcHJvcGVydHlcbiAgICAgICAgcmVzdWx0LnBheWFibGUgPSAocmVzdWx0LnN0YXRlTXV0YWJpbGl0eSA9PT0gXCJwYXlhYmxlXCIpO1xuICAgICAgICBpZiAodmFsdWUucGF5YWJsZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoKCEhdmFsdWUucGF5YWJsZSkgIT09IHJlc3VsdC5wYXlhYmxlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImNhbm5vdCBoYXZlIHBheWFibGUgZnVuY3Rpb24gd2l0aCBtdXRhYmlsaXR5IFwiICsgcmVzdWx0LnN0YXRlTXV0YWJpbGl0eSwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUucGF5YWJsZSAhPSBudWxsKSB7XG4gICAgICAgIHJlc3VsdC5wYXlhYmxlID0gISF2YWx1ZS5wYXlhYmxlO1xuICAgICAgICAvLyBJZiBwYXlhYmxlIHdlIGNhbiBhc3N1bWUgbm9uLWNvbnN0YW50OyBvdGhlcndpc2Ugd2UgY2FuJ3QgYXNzdW1lXG4gICAgICAgIGlmICh2YWx1ZS5jb25zdGFudCA9PSBudWxsICYmICFyZXN1bHQucGF5YWJsZSAmJiB2YWx1ZS50eXBlICE9PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJ1bmFibGUgdG8gZGV0ZXJtaW5lIHN0YXRlTXV0YWJpbGl0eVwiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuY29uc3RhbnQgPSAhIXZhbHVlLmNvbnN0YW50O1xuICAgICAgICBpZiAocmVzdWx0LmNvbnN0YW50KSB7XG4gICAgICAgICAgICByZXN1bHQuc3RhdGVNdXRhYmlsaXR5ID0gXCJ2aWV3XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQuc3RhdGVNdXRhYmlsaXR5ID0gKHJlc3VsdC5wYXlhYmxlID8gXCJwYXlhYmxlXCIgOiBcIm5vbnBheWFibGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5wYXlhYmxlICYmIHJlc3VsdC5jb25zdGFudCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImNhbm5vdCBoYXZlIGNvbnN0YW50IHBheWFibGUgZnVuY3Rpb25cIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodmFsdWUuY29uc3RhbnQgIT0gbnVsbCkge1xuICAgICAgICByZXN1bHQuY29uc3RhbnQgPSAhIXZhbHVlLmNvbnN0YW50O1xuICAgICAgICByZXN1bHQucGF5YWJsZSA9ICFyZXN1bHQuY29uc3RhbnQ7XG4gICAgICAgIHJlc3VsdC5zdGF0ZU11dGFiaWxpdHkgPSAocmVzdWx0LmNvbnN0YW50ID8gXCJ2aWV3XCIgOiBcInBheWFibGVcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlLnR5cGUgIT09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwidW5hYmxlIHRvIGRldGVybWluZSBzdGF0ZU11dGFiaWxpdHlcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgY2xhc3MgQ29uc3RydWN0b3JGcmFnbWVudCBleHRlbmRzIEZyYWdtZW50IHtcbiAgICBmb3JtYXQoZm9ybWF0KSB7XG4gICAgICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAgICAgICBmb3JtYXQgPSBGb3JtYXRUeXBlcy5zaWdoYXNoO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRm9ybWF0VHlwZXNbZm9ybWF0XSkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgZm9ybWF0IHR5cGVcIiwgXCJmb3JtYXRcIiwgZm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZm9ybWF0ID09PSBGb3JtYXRUeXBlcy5qc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29uc3RydWN0b3JcIixcbiAgICAgICAgICAgICAgICBzdGF0ZU11dGFiaWxpdHk6ICgodGhpcy5zdGF0ZU11dGFiaWxpdHkgIT09IFwibm9ucGF5YWJsZVwiKSA/IHRoaXMuc3RhdGVNdXRhYmlsaXR5IDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBwYXlhYmxlOiB0aGlzLnBheWFibGUsXG4gICAgICAgICAgICAgICAgZ2FzOiAodGhpcy5nYXMgPyB0aGlzLmdhcy50b051bWJlcigpIDogdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHRoaXMuaW5wdXRzLm1hcCgoaW5wdXQpID0+IEpTT04ucGFyc2UoaW5wdXQuZm9ybWF0KGZvcm1hdCkpKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuc2lnaGFzaCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJjYW5ub3QgZm9ybWF0IGEgY29uc3RydWN0b3IgZm9yIHNpZ2hhc2hcIiwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwiZm9ybWF0KHNpZ2hhc2gpXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBcImNvbnN0cnVjdG9yKFwiICsgdGhpcy5pbnB1dHMubWFwKChpbnB1dCkgPT4gaW5wdXQuZm9ybWF0KGZvcm1hdCkpLmpvaW4oKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuZnVsbCkgPyBcIiwgXCIgOiBcIixcIikgKyBcIikgXCI7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlTXV0YWJpbGl0eSAmJiB0aGlzLnN0YXRlTXV0YWJpbGl0eSAhPT0gXCJub25wYXlhYmxlXCIpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB0aGlzLnN0YXRlTXV0YWJpbGl0eSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQudHJpbSgpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mICh2YWx1ZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBDb25zdHJ1Y3RvckZyYWdtZW50LmZyb21TdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBDb25zdHJ1Y3RvckZyYWdtZW50LmZyb21PYmplY3QodmFsdWUpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbU9iamVjdCh2YWx1ZSkge1xuICAgICAgICBpZiAoQ29uc3RydWN0b3JGcmFnbWVudC5pc0NvbnN0cnVjdG9yRnJhZ21lbnQodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlLnR5cGUgIT09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgY29uc3RydWN0b3Igb2JqZWN0XCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdGF0ZSA9IHZlcmlmeVN0YXRlKHZhbHVlKTtcbiAgICAgICAgaWYgKHN0YXRlLmNvbnN0YW50KSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiY29uc3RydWN0b3IgY2Fubm90IGJlIGNvbnN0YW50XCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiB2YWx1ZS50eXBlLFxuICAgICAgICAgICAgaW5wdXRzOiAodmFsdWUuaW5wdXRzID8gdmFsdWUuaW5wdXRzLm1hcChQYXJhbVR5cGUuZnJvbU9iamVjdCkgOiBbXSksXG4gICAgICAgICAgICBwYXlhYmxlOiBzdGF0ZS5wYXlhYmxlLFxuICAgICAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBzdGF0ZS5zdGF0ZU11dGFiaWxpdHksXG4gICAgICAgICAgICBnYXM6ICh2YWx1ZS5nYXMgPyBCaWdOdW1iZXIuZnJvbSh2YWx1ZS5nYXMpIDogbnVsbClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvckZyYWdtZW50KF9jb25zdHJ1Y3Rvckd1YXJkLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgcGFyYW1zID0geyB0eXBlOiBcImNvbnN0cnVjdG9yXCIgfTtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUdhcyh2YWx1ZSwgcGFyYW1zKTtcbiAgICAgICAgbGV0IHBhcmVucyA9IHZhbHVlLm1hdGNoKHJlZ2V4UGFyZW4pO1xuICAgICAgICBpZiAoIXBhcmVucyB8fCBwYXJlbnNbMV0udHJpbSgpICE9PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGNvbnN0cnVjdG9yIHN0cmluZ1wiLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuaW5wdXRzID0gcGFyc2VQYXJhbXMocGFyZW5zWzJdLnRyaW0oKSwgZmFsc2UpO1xuICAgICAgICBwYXJzZU1vZGlmaWVycyhwYXJlbnNbM10udHJpbSgpLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gQ29uc3RydWN0b3JGcmFnbWVudC5mcm9tT2JqZWN0KHBhcmFtcyk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0NvbnN0cnVjdG9yRnJhZ21lbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5faXNGcmFnbWVudCAmJiB2YWx1ZS50eXBlID09PSBcImNvbnN0cnVjdG9yXCIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkZyYWdtZW50IGV4dGVuZHMgQ29uc3RydWN0b3JGcmFnbWVudCB7XG4gICAgZm9ybWF0KGZvcm1hdCkge1xuICAgICAgICBpZiAoIWZvcm1hdCkge1xuICAgICAgICAgICAgZm9ybWF0ID0gRm9ybWF0VHlwZXMuc2lnaGFzaDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUZvcm1hdFR5cGVzW2Zvcm1hdF0pIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIGZvcm1hdCB0eXBlXCIsIFwiZm9ybWF0XCIsIGZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuanNvbikge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZ1bmN0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0aGlzLmNvbnN0YW50LFxuICAgICAgICAgICAgICAgIHN0YXRlTXV0YWJpbGl0eTogKCh0aGlzLnN0YXRlTXV0YWJpbGl0eSAhPT0gXCJub25wYXlhYmxlXCIpID8gdGhpcy5zdGF0ZU11dGFiaWxpdHkgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIHBheWFibGU6IHRoaXMucGF5YWJsZSxcbiAgICAgICAgICAgICAgICBnYXM6ICh0aGlzLmdhcyA/IHRoaXMuZ2FzLnRvTnVtYmVyKCkgOiB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGlucHV0czogdGhpcy5pbnB1dHMubWFwKChpbnB1dCkgPT4gSlNPTi5wYXJzZShpbnB1dC5mb3JtYXQoZm9ybWF0KSkpLFxuICAgICAgICAgICAgICAgIG91dHB1dHM6IHRoaXMub3V0cHV0cy5tYXAoKG91dHB1dCkgPT4gSlNPTi5wYXJzZShvdXRwdXQuZm9ybWF0KGZvcm1hdCkpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBpZiAoZm9ybWF0ICE9PSBGb3JtYXRUeXBlcy5zaWdoYXNoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCJmdW5jdGlvbiBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gdGhpcy5uYW1lICsgXCIoXCIgKyB0aGlzLmlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC5mb3JtYXQoZm9ybWF0KSkuam9pbigoZm9ybWF0ID09PSBGb3JtYXRUeXBlcy5mdWxsKSA/IFwiLCBcIiA6IFwiLFwiKSArIFwiKSBcIjtcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gRm9ybWF0VHlwZXMuc2lnaGFzaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVNdXRhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVNdXRhYmlsaXR5ICE9PSBcIm5vbnBheWFibGVcIikge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gKHRoaXMuc3RhdGVNdXRhYmlsaXR5ICsgXCIgXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJ2aWV3IFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3V0cHV0cyAmJiB0aGlzLm91dHB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwicmV0dXJucyAoXCIgKyB0aGlzLm91dHB1dHMubWFwKChvdXRwdXQpID0+IG91dHB1dC5mb3JtYXQoZm9ybWF0KSkuam9pbihcIiwgXCIpICsgXCIpIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJAXCIgKyB0aGlzLmdhcy50b1N0cmluZygpICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIEZ1bmN0aW9uRnJhZ21lbnQuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uRnJhZ21lbnQuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmIChGdW5jdGlvbkZyYWdtZW50LmlzRnVuY3Rpb25GcmFnbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUudHlwZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBmdW5jdGlvbiBvYmplY3RcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXRlID0gdmVyaWZ5U3RhdGUodmFsdWUpO1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICB0eXBlOiB2YWx1ZS50eXBlLFxuICAgICAgICAgICAgbmFtZTogdmVyaWZ5SWRlbnRpZmllcih2YWx1ZS5uYW1lKSxcbiAgICAgICAgICAgIGNvbnN0YW50OiBzdGF0ZS5jb25zdGFudCxcbiAgICAgICAgICAgIGlucHV0czogKHZhbHVlLmlucHV0cyA/IHZhbHVlLmlucHV0cy5tYXAoUGFyYW1UeXBlLmZyb21PYmplY3QpIDogW10pLFxuICAgICAgICAgICAgb3V0cHV0czogKHZhbHVlLm91dHB1dHMgPyB2YWx1ZS5vdXRwdXRzLm1hcChQYXJhbVR5cGUuZnJvbU9iamVjdCkgOiBbXSksXG4gICAgICAgICAgICBwYXlhYmxlOiBzdGF0ZS5wYXlhYmxlLFxuICAgICAgICAgICAgc3RhdGVNdXRhYmlsaXR5OiBzdGF0ZS5zdGF0ZU11dGFiaWxpdHksXG4gICAgICAgICAgICBnYXM6ICh2YWx1ZS5nYXMgPyBCaWdOdW1iZXIuZnJvbSh2YWx1ZS5nYXMpIDogbnVsbClcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbkZyYWdtZW50KF9jb25zdHJ1Y3Rvckd1YXJkLCBwYXJhbXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgcGFyYW1zID0geyB0eXBlOiBcImZ1bmN0aW9uXCIgfTtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUdhcyh2YWx1ZSwgcGFyYW1zKTtcbiAgICAgICAgbGV0IGNvbXBzID0gdmFsdWUuc3BsaXQoXCIgcmV0dXJucyBcIik7XG4gICAgICAgIGlmIChjb21wcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBmdW5jdGlvbiBzdHJpbmdcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcmVucyA9IGNvbXBzWzBdLm1hdGNoKHJlZ2V4UGFyZW4pO1xuICAgICAgICBpZiAoIXBhcmVucykge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgZnVuY3Rpb24gc2lnbmF0dXJlXCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5uYW1lID0gcGFyZW5zWzFdLnRyaW0oKTtcbiAgICAgICAgaWYgKHBhcmFtcy5uYW1lKSB7XG4gICAgICAgICAgICB2ZXJpZnlJZGVudGlmaWVyKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuaW5wdXRzID0gcGFyc2VQYXJhbXMocGFyZW5zWzJdLCBmYWxzZSk7XG4gICAgICAgIHBhcnNlTW9kaWZpZXJzKHBhcmVuc1szXS50cmltKCksIHBhcmFtcyk7XG4gICAgICAgIC8vIFdlIGhhdmUgb3V0cHV0c1xuICAgICAgICBpZiAoY29tcHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHJldHVybnMgPSBjb21wc1sxXS5tYXRjaChyZWdleFBhcmVuKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5zWzFdLnRyaW0oKSAhPSBcIlwiIHx8IHJldHVybnNbM10udHJpbSgpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwidW5leHBlY3RlZCB0b2tlbnNcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbXMub3V0cHV0cyA9IHBhcnNlUGFyYW1zKHJldHVybnNbMl0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5vdXRwdXRzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uRnJhZ21lbnQuZnJvbU9iamVjdChwYXJhbXMpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNGdW5jdGlvbkZyYWdtZW50KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuX2lzRnJhZ21lbnQgJiYgdmFsdWUudHlwZSA9PT0gXCJmdW5jdGlvblwiKTtcbiAgICB9XG59XG4vL2V4cG9ydCBjbGFzcyBTdHJ1Y3RGcmFnbWVudCBleHRlbmRzIEZyYWdtZW50IHtcbi8vfVxuZnVuY3Rpb24gY2hlY2tGb3JiaWRkZW4oZnJhZ21lbnQpIHtcbiAgICBjb25zdCBzaWcgPSBmcmFnbWVudC5mb3JtYXQoKTtcbiAgICBpZiAoc2lnID09PSBcIkVycm9yKHN0cmluZylcIiB8fCBzaWcgPT09IFwiUGFuaWModWludDI1NilcIikge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGBjYW5ub3Qgc3BlY2lmeSB1c2VyIGRlZmluZWQgJHtzaWd9IGVycm9yYCwgXCJmcmFnbWVudFwiLCBmcmFnbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBmcmFnbWVudDtcbn1cbmV4cG9ydCBjbGFzcyBFcnJvckZyYWdtZW50IGV4dGVuZHMgRnJhZ21lbnQge1xuICAgIGZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdFR5cGVzLnNpZ2hhc2g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFGb3JtYXRUeXBlc1tmb3JtYXRdKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBmb3JtYXQgdHlwZVwiLCBcImZvcm1hdFwiLCBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09IEZvcm1hdFR5cGVzLmpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHRoaXMuaW5wdXRzLm1hcCgoaW5wdXQpID0+IEpTT04ucGFyc2UoaW5wdXQuZm9ybWF0KGZvcm1hdCkpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZXN1bHQgPSBcIlwiO1xuICAgICAgICBpZiAoZm9ybWF0ICE9PSBGb3JtYXRUeXBlcy5zaWdoYXNoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gXCJlcnJvciBcIjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgKz0gdGhpcy5uYW1lICsgXCIoXCIgKyB0aGlzLmlucHV0cy5tYXAoKGlucHV0KSA9PiBpbnB1dC5mb3JtYXQoZm9ybWF0KSkuam9pbigoZm9ybWF0ID09PSBGb3JtYXRUeXBlcy5mdWxsKSA/IFwiLCBcIiA6IFwiLFwiKSArIFwiKSBcIjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIEVycm9yRnJhZ21lbnQuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVycm9yRnJhZ21lbnQuZnJvbU9iamVjdCh2YWx1ZSk7XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIGlmIChFcnJvckZyYWdtZW50LmlzRXJyb3JGcmFnbWVudCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUudHlwZSAhPT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBlcnJvciBvYmplY3RcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgdHlwZTogdmFsdWUudHlwZSxcbiAgICAgICAgICAgIG5hbWU6IHZlcmlmeUlkZW50aWZpZXIodmFsdWUubmFtZSksXG4gICAgICAgICAgICBpbnB1dHM6ICh2YWx1ZS5pbnB1dHMgPyB2YWx1ZS5pbnB1dHMubWFwKFBhcmFtVHlwZS5mcm9tT2JqZWN0KSA6IFtdKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2hlY2tGb3JiaWRkZW4obmV3IEVycm9yRnJhZ21lbnQoX2NvbnN0cnVjdG9yR3VhcmQsIHBhcmFtcykpO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVN0cmluZyh2YWx1ZSkge1xuICAgICAgICBsZXQgcGFyYW1zID0geyB0eXBlOiBcImVycm9yXCIgfTtcbiAgICAgICAgbGV0IHBhcmVucyA9IHZhbHVlLm1hdGNoKHJlZ2V4UGFyZW4pO1xuICAgICAgICBpZiAoIXBhcmVucykge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgZXJyb3Igc2lnbmF0dXJlXCIsIFwidmFsdWVcIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHBhcmFtcy5uYW1lID0gcGFyZW5zWzFdLnRyaW0oKTtcbiAgICAgICAgaWYgKHBhcmFtcy5uYW1lKSB7XG4gICAgICAgICAgICB2ZXJpZnlJZGVudGlmaWVyKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJhbXMuaW5wdXRzID0gcGFyc2VQYXJhbXMocGFyZW5zWzJdLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjaGVja0ZvcmJpZGRlbihFcnJvckZyYWdtZW50LmZyb21PYmplY3QocGFyYW1zKSk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0Vycm9yRnJhZ21lbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5faXNGcmFnbWVudCAmJiB2YWx1ZS50eXBlID09PSBcImVycm9yXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIC8vIFRoZXNlIG5lZWQgdG8gYmUgdHJhbnNmb3JtZWQgdG8gdGhlaXIgZnVsbCBkZXNjcmlwdGlvblxuICAgIGlmICh0eXBlLm1hdGNoKC9edWludCgkfFteMS05XSkvKSkge1xuICAgICAgICB0eXBlID0gXCJ1aW50MjU2XCIgKyB0eXBlLnN1YnN0cmluZyg0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZS5tYXRjaCgvXmludCgkfFteMS05XSkvKSkge1xuICAgICAgICB0eXBlID0gXCJpbnQyNTZcIiArIHR5cGUuc3Vic3RyaW5nKDMpO1xuICAgIH1cbiAgICAvLyBAVE9ETzogbW9yZSB2ZXJpZmljYXRpb25cbiAgICByZXR1cm4gdHlwZTtcbn1cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2V0aGVyZXVtL3NvbGlkaXR5L2Jsb2IvMWY4ZjFhM2RiOTNhNTQ4ZDA1NTVlM2UxNGNmYzU1YTEwZTI1YjYwZS9kb2NzL2dyYW1tYXIvU29saWRpdHlMZXhlci5nNCNMMjM0XG5jb25zdCByZWdleElkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiXlthLXpBLVokX11bYS16QS1aMC05JF9dKiRcIik7XG5mdW5jdGlvbiB2ZXJpZnlJZGVudGlmaWVyKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUubWF0Y2gocmVnZXhJZGVudGlmaWVyKSkge1xuICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGBpbnZhbGlkIGlkZW50aWZpZXIgXCIke3ZhbHVlfVwiYCwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IHJlZ2V4UGFyZW4gPSBuZXcgUmVnRXhwKFwiXihbXikoXSopXFxcXCgoLiopXFxcXCkoW14pKF0qKSRcIik7XG5mdW5jdGlvbiBzcGxpdE5lc3RpbmcodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IGFjY3VtID0gXCJcIjtcbiAgICBsZXQgZGVwdGggPSAwO1xuICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IHZhbHVlLmxlbmd0aDsgb2Zmc2V0KyspIHtcbiAgICAgICAgbGV0IGMgPSB2YWx1ZVtvZmZzZXRdO1xuICAgICAgICBpZiAoYyA9PT0gXCIsXCIgJiYgZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFjY3VtKTtcbiAgICAgICAgICAgIGFjY3VtID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjY3VtICs9IGM7XG4gICAgICAgICAgICBpZiAoYyA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICBkZXB0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICBkZXB0aC0tO1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcInVuYmFsYW5jZWQgcGFyZW50aGVzaXNcIiwgXCJ2YWx1ZVwiLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhY2N1bSkge1xuICAgICAgICByZXN1bHQucHVzaChhY2N1bSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcmFnbWVudHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgeyBnZXRBZGRyZXNzIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2FkZHJlc3NcIjtcbmltcG9ydCB7IEJpZ051bWJlciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9iaWdudW1iZXJcIjtcbmltcG9ydCB7IGFycmF5aWZ5LCBjb25jYXQsIGhleERhdGFTbGljZSwgaGV4bGlmeSwgaGV4WmVyb1BhZCwgaXNIZXhTdHJpbmcgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYnl0ZXNcIjtcbmltcG9ydCB7IGlkIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2hhc2hcIjtcbmltcG9ydCB7IGtlY2NhazI1NiB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9rZWNjYWsyNTZcIjtcbmltcG9ydCB7IGRlZmluZVJlYWRPbmx5LCBEZXNjcmlwdGlvbiwgZ2V0U3RhdGljIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3Byb3BlcnRpZXNcIjtcbmltcG9ydCB7IGRlZmF1bHRBYmlDb2RlciB9IGZyb20gXCIuL2FiaS1jb2RlclwiO1xuaW1wb3J0IHsgY2hlY2tSZXN1bHRFcnJvcnMgfSBmcm9tIFwiLi9jb2RlcnMvYWJzdHJhY3QtY29kZXJcIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yRnJhZ21lbnQsIEV2ZW50RnJhZ21lbnQsIEZvcm1hdFR5cGVzLCBGcmFnbWVudCwgRnVuY3Rpb25GcmFnbWVudCwgUGFyYW1UeXBlIH0gZnJvbSBcIi4vZnJhZ21lbnRzXCI7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvbG9nZ2VyXCI7XG5pbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSBcIi4vX3ZlcnNpb25cIjtcbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIodmVyc2lvbik7XG5leHBvcnQgeyBjaGVja1Jlc3VsdEVycm9ycyB9O1xuZXhwb3J0IGNsYXNzIExvZ0Rlc2NyaXB0aW9uIGV4dGVuZHMgRGVzY3JpcHRpb24ge1xufVxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uRGVzY3JpcHRpb24gZXh0ZW5kcyBEZXNjcmlwdGlvbiB7XG59XG5leHBvcnQgY2xhc3MgRXJyb3JEZXNjcmlwdGlvbiBleHRlbmRzIERlc2NyaXB0aW9uIHtcbn1cbmV4cG9ydCBjbGFzcyBJbmRleGVkIGV4dGVuZHMgRGVzY3JpcHRpb24ge1xuICAgIHN0YXRpYyBpc0luZGV4ZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9pc0luZGV4ZWQpO1xuICAgIH1cbn1cbmNvbnN0IEJ1aWx0aW5FcnJvcnMgPSB7XG4gICAgXCIweDA4YzM3OWEwXCI6IHsgc2lnbmF0dXJlOiBcIkVycm9yKHN0cmluZylcIiwgbmFtZTogXCJFcnJvclwiLCBpbnB1dHM6IFtcInN0cmluZ1wiXSwgcmVhc29uOiB0cnVlIH0sXG4gICAgXCIweDRlNDg3YjcxXCI6IHsgc2lnbmF0dXJlOiBcIlBhbmljKHVpbnQyNTYpXCIsIG5hbWU6IFwiUGFuaWNcIiwgaW5wdXRzOiBbXCJ1aW50MjU2XCJdIH1cbn07XG5mdW5jdGlvbiB3cmFwQWNjZXNzRXJyb3IocHJvcGVydHksIGVycm9yKSB7XG4gICAgY29uc3Qgd3JhcCA9IG5ldyBFcnJvcihgZGVmZXJyZWQgZXJyb3IgZHVyaW5nIEFCSSBkZWNvZGluZyB0cmlnZ2VyZWQgYWNjZXNzaW5nICR7cHJvcGVydHl9YCk7XG4gICAgd3JhcC5lcnJvciA9IGVycm9yO1xuICAgIHJldHVybiB3cmFwO1xufVxuLypcbmZ1bmN0aW9uIGNoZWNrTmFtZXMoZnJhZ21lbnQ6IEZyYWdtZW50LCB0eXBlOiBcImlucHV0XCIgfCBcIm91dHB1dFwiLCBwYXJhbXM6IEFycmF5PFBhcmFtVHlwZT4pOiB2b2lkIHtcbiAgICBwYXJhbXMucmVkdWNlKChhY2N1bSwgcGFyYW0pID0+IHtcbiAgICAgICAgaWYgKHBhcmFtLm5hbWUpIHtcbiAgICAgICAgICAgIGlmIChhY2N1bVtwYXJhbS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoYGR1cGxpY2F0ZSAkeyB0eXBlIH0gcGFyYW1ldGVyICR7IEpTT04uc3RyaW5naWZ5KHBhcmFtLm5hbWUpIH0gaW4gJHsgZnJhZ21lbnQuZm9ybWF0KFwiZnVsbFwiKSB9YCwgXCJmcmFnbWVudFwiLCBmcmFnbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2N1bVtwYXJhbS5uYW1lXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sIDx7IFsgbmFtZTogc3RyaW5nIF06IGJvb2xlYW4gfT57IH0pO1xufVxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2Uge1xuICAgIGNvbnN0cnVjdG9yKGZyYWdtZW50cykge1xuICAgICAgICBsb2dnZXIuY2hlY2tOZXcobmV3LnRhcmdldCwgSW50ZXJmYWNlKTtcbiAgICAgICAgbGV0IGFiaSA9IFtdO1xuICAgICAgICBpZiAodHlwZW9mIChmcmFnbWVudHMpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBhYmkgPSBKU09OLnBhcnNlKGZyYWdtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhYmkgPSBmcmFnbWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJmcmFnbWVudHNcIiwgYWJpLm1hcCgoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBGcmFnbWVudC5mcm9tKGZyYWdtZW50KTtcbiAgICAgICAgfSkuZmlsdGVyKChmcmFnbWVudCkgPT4gKGZyYWdtZW50ICE9IG51bGwpKSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX2FiaUNvZGVyXCIsIGdldFN0YXRpYyhuZXcudGFyZ2V0LCBcImdldEFiaUNvZGVyXCIpKCkpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImZ1bmN0aW9uc1wiLCB7fSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiZXJyb3JzXCIsIHt9KTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJldmVudHNcIiwge30pO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInN0cnVjdHNcIiwge30pO1xuICAgICAgICAvLyBBZGQgYWxsIGZyYWdtZW50cyBieSB0aGVpciBzaWduYXR1cmVcbiAgICAgICAgdGhpcy5mcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBidWNrZXQgPSBudWxsO1xuICAgICAgICAgICAgc3dpdGNoIChmcmFnbWVudC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNvbnN0cnVjdG9yXCI6XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlcGxveSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJkdXBsaWNhdGUgZGVmaW5pdGlvbiAtIGNvbnN0cnVjdG9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tOYW1lcyhmcmFnbWVudCwgXCJpbnB1dFwiLCBmcmFnbWVudC5pbnB1dHMpO1xuICAgICAgICAgICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImRlcGxveVwiLCBmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnVuY3Rpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVja05hbWVzKGZyYWdtZW50LCBcImlucHV0XCIsIGZyYWdtZW50LmlucHV0cyk7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2tOYW1lcyhmcmFnbWVudCwgXCJvdXRwdXRcIiwgKDxGdW5jdGlvbkZyYWdtZW50PmZyYWdtZW50KS5vdXRwdXRzKTtcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gdGhpcy5mdW5jdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJldmVudFwiOlxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrTmFtZXMoZnJhZ21lbnQsIFwiaW5wdXRcIiwgZnJhZ21lbnQuaW5wdXRzKTtcbiAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gdGhpcy5ldmVudHM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlcnJvclwiOlxuICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSB0aGlzLmVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNpZ25hdHVyZSA9IGZyYWdtZW50LmZvcm1hdCgpO1xuICAgICAgICAgICAgaWYgKGJ1Y2tldFtzaWduYXR1cmVdKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJkdXBsaWNhdGUgZGVmaW5pdGlvbiAtIFwiICsgc2lnbmF0dXJlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidWNrZXRbc2lnbmF0dXJlXSA9IGZyYWdtZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgd2UgZG8gbm90IGhhdmUgYSBjb25zdHJ1Y3RvciBhZGQgYSBkZWZhdWx0XG4gICAgICAgIGlmICghdGhpcy5kZXBsb3kpIHtcbiAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiZGVwbG95XCIsIENvbnN0cnVjdG9yRnJhZ21lbnQuZnJvbSh7XG4gICAgICAgICAgICAgICAgcGF5YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb25zdHJ1Y3RvclwiXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJfaXNJbnRlcmZhY2VcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGZvcm1hdChmb3JtYXQpIHtcbiAgICAgICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgICAgICAgIGZvcm1hdCA9IEZvcm1hdFR5cGVzLmZ1bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gRm9ybWF0VHlwZXMuc2lnaGFzaCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludGVyZmFjZSBkb2VzIG5vdCBzdXBwb3J0IGZvcm1hdHRpbmcgc2lnaGFzaFwiLCBcImZvcm1hdFwiLCBmb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFiaSA9IHRoaXMuZnJhZ21lbnRzLm1hcCgoZnJhZ21lbnQpID0+IGZyYWdtZW50LmZvcm1hdChmb3JtYXQpKTtcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZS1idW5kbGUgdGhlIEpTT04gZnJhZ21lbnRzIGEgYml0XG4gICAgICAgIGlmIChmb3JtYXQgPT09IEZvcm1hdFR5cGVzLmpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhYmkubWFwKChqKSA9PiBKU09OLnBhcnNlKGopKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFiaTtcbiAgICB9XG4gICAgLy8gU3ViLWNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoZXNlIHRvIGhhbmRsZSBvdGhlciBibG9ja2NoYWluc1xuICAgIHN0YXRpYyBnZXRBYmlDb2RlcigpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRBYmlDb2RlcjtcbiAgICB9XG4gICAgc3RhdGljIGdldEFkZHJlc3MoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gZ2V0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICB9XG4gICAgc3RhdGljIGdldFNpZ2hhc2goZnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIGhleERhdGFTbGljZShpZChmcmFnbWVudC5mb3JtYXQoKSksIDAsIDQpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRUb3BpYyhldmVudEZyYWdtZW50KSB7XG4gICAgICAgIHJldHVybiBpZChldmVudEZyYWdtZW50LmZvcm1hdCgpKTtcbiAgICB9XG4gICAgLy8gRmluZCBhIGZ1bmN0aW9uIGRlZmluaXRpb24gYnkgYW55IG1lYW5zIG5lY2Vzc2FyeSAodW5sZXNzIGl0IGlzIGFtYmlndW91cylcbiAgICBnZXRGdW5jdGlvbihuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2gpIHtcbiAgICAgICAgaWYgKGlzSGV4U3RyaW5nKG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLmZ1bmN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2ggPT09IHRoaXMuZ2V0U2lnaGFzaChuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGZ1bmN0aW9uXCIsIFwic2lnaGFzaFwiLCBuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2gpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0IGlzIGEgYmFyZSBuYW1lLCBsb29rIHVwIHRoZSBmdW5jdGlvbiAod2lsbCByZXR1cm4gbnVsbCBpZiBhbWJpZ3VvdXMpXG4gICAgICAgIGlmIChuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2guaW5kZXhPZihcIihcIikgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZU9yU2lnbmF0dXJlT3JTaWdoYXNoLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nID0gT2JqZWN0LmtleXModGhpcy5mdW5jdGlvbnMpLmZpbHRlcigoZikgPT4gKGYuc3BsaXQoXCIoXCIgLyogZml4OikgKi8pWzBdID09PSBuYW1lKSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGZ1bmN0aW9uXCIsIFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoaW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwibXVsdGlwbGUgbWF0Y2hpbmcgZnVuY3Rpb25zXCIsIFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uc1ttYXRjaGluZ1swXV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBzaWduYXR1cmUgYW5kIGxvb2t1cCB0aGUgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5mdW5jdGlvbnNbRnVuY3Rpb25GcmFnbWVudC5mcm9tU3RyaW5nKG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCkuZm9ybWF0KCldO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGZ1bmN0aW9uXCIsIFwic2lnbmF0dXJlXCIsIG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gRmluZCBhbiBldmVudCBkZWZpbml0aW9uIGJ5IGFueSBtZWFucyBuZWNlc3NhcnkgKHVubGVzcyBpdCBpcyBhbWJpZ3VvdXMpXG4gICAgZ2V0RXZlbnQobmFtZU9yU2lnbmF0dXJlT3JUb3BpYykge1xuICAgICAgICBpZiAoaXNIZXhTdHJpbmcobmFtZU9yU2lnbmF0dXJlT3JUb3BpYykpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcGljaGFzaCA9IG5hbWVPclNpZ25hdHVyZU9yVG9waWMudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiB0aGlzLmV2ZW50cykge1xuICAgICAgICAgICAgICAgIGlmICh0b3BpY2hhc2ggPT09IHRoaXMuZ2V0RXZlbnRUb3BpYyhuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGV2ZW50XCIsIFwidG9waWNoYXNoXCIsIHRvcGljaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQgaXMgYSBiYXJlIG5hbWUsIGxvb2sgdXAgdGhlIGZ1bmN0aW9uICh3aWxsIHJldHVybiBudWxsIGlmIGFtYmlndW91cylcbiAgICAgICAgaWYgKG5hbWVPclNpZ25hdHVyZU9yVG9waWMuaW5kZXhPZihcIihcIikgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZU9yU2lnbmF0dXJlT3JUb3BpYy50cmltKCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGluZyA9IE9iamVjdC5rZXlzKHRoaXMuZXZlbnRzKS5maWx0ZXIoKGYpID0+IChmLnNwbGl0KFwiKFwiIC8qIGZpeDopICovKVswXSA9PT0gbmFtZSkpO1xuICAgICAgICAgICAgaWYgKG1hdGNoaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJubyBtYXRjaGluZyBldmVudFwiLCBcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRjaGluZy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm11bHRpcGxlIG1hdGNoaW5nIGV2ZW50c1wiLCBcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbbWF0Y2hpbmdbMF1dO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgc2lnbmF0dXJlIGFuZCBsb29rdXAgdGhlIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXZlbnRzW0V2ZW50RnJhZ21lbnQuZnJvbVN0cmluZyhuYW1lT3JTaWduYXR1cmVPclRvcGljKS5mb3JtYXQoKV07XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwibm8gbWF0Y2hpbmcgZXZlbnRcIiwgXCJzaWduYXR1cmVcIiwgbmFtZU9yU2lnbmF0dXJlT3JUb3BpYyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gRmluZCBhIGZ1bmN0aW9uIGRlZmluaXRpb24gYnkgYW55IG1lYW5zIG5lY2Vzc2FyeSAodW5sZXNzIGl0IGlzIGFtYmlndW91cylcbiAgICBnZXRFcnJvcihuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2gpIHtcbiAgICAgICAgaWYgKGlzSGV4U3RyaW5nKG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGdldFNpZ2hhc2ggPSBnZXRTdGF0aWModGhpcy5jb25zdHJ1Y3RvciwgXCJnZXRTaWdoYXNoXCIpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHRoaXMuZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLmVycm9yc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZU9yU2lnbmF0dXJlT3JTaWdoYXNoID09PSBnZXRTaWdoYXNoKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGVycm9yXCIsIFwic2lnaGFzaFwiLCBuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2gpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0IGlzIGEgYmFyZSBuYW1lLCBsb29rIHVwIHRoZSBmdW5jdGlvbiAod2lsbCByZXR1cm4gbnVsbCBpZiBhbWJpZ3VvdXMpXG4gICAgICAgIGlmIChuYW1lT3JTaWduYXR1cmVPclNpZ2hhc2guaW5kZXhPZihcIihcIikgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZU9yU2lnbmF0dXJlT3JTaWdoYXNoLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoaW5nID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmZpbHRlcigoZikgPT4gKGYuc3BsaXQoXCIoXCIgLyogZml4OikgKi8pWzBdID09PSBuYW1lKSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGVycm9yXCIsIFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoaW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwibXVsdGlwbGUgbWF0Y2hpbmcgZXJyb3JzXCIsIFwibmFtZVwiLCBuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1ttYXRjaGluZ1swXV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm9ybWFsaXplIHRoZSBzaWduYXR1cmUgYW5kIGxvb2t1cCB0aGUgZnVuY3Rpb25cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5lcnJvcnNbRnVuY3Rpb25GcmFnbWVudC5mcm9tU3RyaW5nKG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCkuZm9ybWF0KCldO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcIm5vIG1hdGNoaW5nIGVycm9yXCIsIFwic2lnbmF0dXJlXCIsIG5hbWVPclNpZ25hdHVyZU9yU2lnaGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBzaWdoYXNoICh0aGUgYnl0ZXM0IHNlbGVjdG9yKSB1c2VkIGJ5IFNvbGlkaXR5IHRvIGlkZW50aWZ5IGEgZnVuY3Rpb25cbiAgICBnZXRTaWdoYXNoKGZyYWdtZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGZyYWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuZ2V0RnVuY3Rpb24oZnJhZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZnJhZ21lbnQgPSB0aGlzLmdldEVycm9yKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRTdGF0aWModGhpcy5jb25zdHJ1Y3RvciwgXCJnZXRTaWdoYXNoXCIpKGZyYWdtZW50KTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSB0b3BpYyAodGhlIGJ5dGVzMzIgaGFzaCkgdXNlZCBieSBTb2xpZGl0eSB0byBpZGVudGlmeSBhbiBldmVudFxuICAgIGdldEV2ZW50VG9waWMoZXZlbnRGcmFnbWVudCkge1xuICAgICAgICBpZiAodHlwZW9mIChldmVudEZyYWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZXZlbnRGcmFnbWVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnRGcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImdldEV2ZW50VG9waWNcIikoZXZlbnRGcmFnbWVudCk7XG4gICAgfVxuICAgIF9kZWNvZGVQYXJhbXMocGFyYW1zLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hYmlDb2Rlci5kZWNvZGUocGFyYW1zLCBkYXRhKTtcbiAgICB9XG4gICAgX2VuY29kZVBhcmFtcyhwYXJhbXMsIHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWJpQ29kZXIuZW5jb2RlKHBhcmFtcywgdmFsdWVzKTtcbiAgICB9XG4gICAgZW5jb2RlRGVwbG95KHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5jb2RlUGFyYW1zKHRoaXMuZGVwbG95LmlucHV0cywgdmFsdWVzIHx8IFtdKTtcbiAgICB9XG4gICAgZGVjb2RlRXJyb3JSZXN1bHQoZnJhZ21lbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZnJhZ21lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuZ2V0RXJyb3IoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXJyYXlpZnkoZGF0YSk7XG4gICAgICAgIGlmIChoZXhsaWZ5KGJ5dGVzLnNsaWNlKDAsIDQpKSAhPT0gdGhpcy5nZXRTaWdoYXNoKGZyYWdtZW50KSkge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihgZGF0YSBzaWduYXR1cmUgZG9lcyBub3QgbWF0Y2ggZXJyb3IgJHtmcmFnbWVudC5uYW1lfS5gLCBcImRhdGFcIiwgaGV4bGlmeShieXRlcykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWNvZGVQYXJhbXMoZnJhZ21lbnQuaW5wdXRzLCBieXRlcy5zbGljZSg0KSk7XG4gICAgfVxuICAgIGVuY29kZUVycm9yUmVzdWx0KGZyYWdtZW50LCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZnJhZ21lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMuZ2V0RXJyb3IoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXhsaWZ5KGNvbmNhdChbXG4gICAgICAgICAgICB0aGlzLmdldFNpZ2hhc2goZnJhZ21lbnQpLFxuICAgICAgICAgICAgdGhpcy5fZW5jb2RlUGFyYW1zKGZyYWdtZW50LmlucHV0cywgdmFsdWVzIHx8IFtdKVxuICAgICAgICBdKSk7XG4gICAgfVxuICAgIC8vIERlY29kZSB0aGUgZGF0YSBmb3IgYSBmdW5jdGlvbiBjYWxsIChlLmcuIHR4LmRhdGEpXG4gICAgZGVjb2RlRnVuY3Rpb25EYXRhKGZ1bmN0aW9uRnJhZ21lbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZnVuY3Rpb25GcmFnbWVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uRnJhZ21lbnQgPSB0aGlzLmdldEZ1bmN0aW9uKGZ1bmN0aW9uRnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gYXJyYXlpZnkoZGF0YSk7XG4gICAgICAgIGlmIChoZXhsaWZ5KGJ5dGVzLnNsaWNlKDAsIDQpKSAhPT0gdGhpcy5nZXRTaWdoYXNoKGZ1bmN0aW9uRnJhZ21lbnQpKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKGBkYXRhIHNpZ25hdHVyZSBkb2VzIG5vdCBtYXRjaCBmdW5jdGlvbiAke2Z1bmN0aW9uRnJhZ21lbnQubmFtZX0uYCwgXCJkYXRhXCIsIGhleGxpZnkoYnl0ZXMpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGVjb2RlUGFyYW1zKGZ1bmN0aW9uRnJhZ21lbnQuaW5wdXRzLCBieXRlcy5zbGljZSg0KSk7XG4gICAgfVxuICAgIC8vIEVuY29kZSB0aGUgZGF0YSBmb3IgYSBmdW5jdGlvbiBjYWxsIChlLmcuIHR4LmRhdGEpXG4gICAgZW5jb2RlRnVuY3Rpb25EYXRhKGZ1bmN0aW9uRnJhZ21lbnQsIHZhbHVlcykge1xuICAgICAgICBpZiAodHlwZW9mIChmdW5jdGlvbkZyYWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZnVuY3Rpb25GcmFnbWVudCA9IHRoaXMuZ2V0RnVuY3Rpb24oZnVuY3Rpb25GcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhleGxpZnkoY29uY2F0KFtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2lnaGFzaChmdW5jdGlvbkZyYWdtZW50KSxcbiAgICAgICAgICAgIHRoaXMuX2VuY29kZVBhcmFtcyhmdW5jdGlvbkZyYWdtZW50LmlucHV0cywgdmFsdWVzIHx8IFtdKVxuICAgICAgICBdKSk7XG4gICAgfVxuICAgIC8vIERlY29kZSB0aGUgcmVzdWx0IGZyb20gYSBmdW5jdGlvbiBjYWxsIChlLmcuIGZyb20gZXRoX2NhbGwpXG4gICAgZGVjb2RlRnVuY3Rpb25SZXN1bHQoZnVuY3Rpb25GcmFnbWVudCwgZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIChmdW5jdGlvbkZyYWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZnVuY3Rpb25GcmFnbWVudCA9IHRoaXMuZ2V0RnVuY3Rpb24oZnVuY3Rpb25GcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ5dGVzID0gYXJyYXlpZnkoZGF0YSk7XG4gICAgICAgIGxldCByZWFzb24gPSBudWxsO1xuICAgICAgICBsZXQgZXJyb3JBcmdzID0gbnVsbDtcbiAgICAgICAgbGV0IGVycm9yTmFtZSA9IG51bGw7XG4gICAgICAgIGxldCBlcnJvclNpZ25hdHVyZSA9IG51bGw7XG4gICAgICAgIHN3aXRjaCAoYnl0ZXMubGVuZ3RoICUgdGhpcy5fYWJpQ29kZXIuX2dldFdvcmRTaXplKCkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYWJpQ29kZXIuZGVjb2RlKGZ1bmN0aW9uRnJhZ21lbnQub3V0cHV0cywgYnl0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHsgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBoZXhsaWZ5KGJ5dGVzLnNsaWNlKDAsIDQpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsdGluID0gQnVpbHRpbkVycm9yc1tzZWxlY3Rvcl07XG4gICAgICAgICAgICAgICAgaWYgKGJ1aWx0aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JBcmdzID0gdGhpcy5fYWJpQ29kZXIuZGVjb2RlKGJ1aWx0aW4uaW5wdXRzLCBieXRlcy5zbGljZSg0KSk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yTmFtZSA9IGJ1aWx0aW4ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JTaWduYXR1cmUgPSBidWlsdGluLnNpZ25hdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1aWx0aW4ucmVhc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFzb24gPSBlcnJvckFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuZ2V0RXJyb3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JBcmdzID0gdGhpcy5fYWJpQ29kZXIuZGVjb2RlKGVycm9yLmlucHV0cywgYnl0ZXMuc2xpY2UoNCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JOYW1lID0gZXJyb3IubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yU2lnbmF0dXJlID0gZXJyb3IuZm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvZ2dlci50aHJvd0Vycm9yKFwiY2FsbCByZXZlcnQgZXhjZXB0aW9uXCIsIExvZ2dlci5lcnJvcnMuQ0FMTF9FWENFUFRJT04sIHtcbiAgICAgICAgICAgIG1ldGhvZDogZnVuY3Rpb25GcmFnbWVudC5mb3JtYXQoKSxcbiAgICAgICAgICAgIGVycm9yQXJncywgZXJyb3JOYW1lLCBlcnJvclNpZ25hdHVyZSwgcmVhc29uXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBFbmNvZGUgdGhlIHJlc3VsdCBmb3IgYSBmdW5jdGlvbiBjYWxsIChlLmcuIGZvciBldGhfY2FsbClcbiAgICBlbmNvZGVGdW5jdGlvblJlc3VsdChmdW5jdGlvbkZyYWdtZW50LCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZnVuY3Rpb25GcmFnbWVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uRnJhZ21lbnQgPSB0aGlzLmdldEZ1bmN0aW9uKGZ1bmN0aW9uRnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXhsaWZ5KHRoaXMuX2FiaUNvZGVyLmVuY29kZShmdW5jdGlvbkZyYWdtZW50Lm91dHB1dHMsIHZhbHVlcyB8fCBbXSkpO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgdGhlIGZpbHRlciBmb3IgdGhlIGV2ZW50IHdpdGggc2VhcmNoIGNyaXRlcmlhIChlLmcuIGZvciBldGhfZmlsdGVyTG9nKVxuICAgIGVuY29kZUZpbHRlclRvcGljcyhldmVudEZyYWdtZW50LCB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZXZlbnRGcmFnbWVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGV2ZW50RnJhZ21lbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50RnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID4gZXZlbnRGcmFnbWVudC5pbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInRvbyBtYW55IGFyZ3VtZW50cyBmb3IgXCIgKyBldmVudEZyYWdtZW50LmZvcm1hdCgpLCBMb2dnZXIuZXJyb3JzLlVORVhQRUNURURfQVJHVU1FTlQsIHtcbiAgICAgICAgICAgICAgICBhcmd1bWVudDogXCJ2YWx1ZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdG9waWNzID0gW107XG4gICAgICAgIGlmICghZXZlbnRGcmFnbWVudC5hbm9ueW1vdXMpIHtcbiAgICAgICAgICAgIHRvcGljcy5wdXNoKHRoaXMuZ2V0RXZlbnRUb3BpYyhldmVudEZyYWdtZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5jb2RlVG9waWMgPSAocGFyYW0sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFyYW0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbS50eXBlID09PSBcImJ5dGVzXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2VjY2FrMjU2KGhleGxpZnkodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGFkZHJlc3NlcyBhcmUgdmFsaWRcbiAgICAgICAgICAgIGlmIChwYXJhbS50eXBlID09PSBcImFkZHJlc3NcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FiaUNvZGVyLmVuY29kZShbXCJhZGRyZXNzXCJdLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoZXhaZXJvUGFkKGhleGxpZnkodmFsdWUpLCAzMik7XG4gICAgICAgIH07XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJhbSA9IGV2ZW50RnJhZ21lbnQuaW5wdXRzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghcGFyYW0uaW5kZXhlZCkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJjYW5ub3QgZmlsdGVyIG5vbi1pbmRleGVkIHBhcmFtZXRlcnM7IG11c3QgYmUgbnVsbFwiLCAoXCJjb250cmFjdC5cIiArIHBhcmFtLm5hbWUpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdG9waWNzLnB1c2gobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJhbS5iYXNlVHlwZSA9PT0gXCJhcnJheVwiIHx8IHBhcmFtLmJhc2VUeXBlID09PSBcInR1cGxlXCIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiZmlsdGVyaW5nIHdpdGggdHVwbGVzIG9yIGFycmF5cyBub3Qgc3VwcG9ydGVkXCIsIChcImNvbnRyYWN0LlwiICsgcGFyYW0ubmFtZSksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdG9waWNzLnB1c2godmFsdWUubWFwKCh2YWx1ZSkgPT4gZW5jb2RlVG9waWMocGFyYW0sIHZhbHVlKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9waWNzLnB1c2goZW5jb2RlVG9waWMocGFyYW0sIHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUcmltIG9mZiB0cmFpbGluZyBudWxsc1xuICAgICAgICB3aGlsZSAodG9waWNzLmxlbmd0aCAmJiB0b3BpY3NbdG9waWNzLmxlbmd0aCAtIDFdID09PSBudWxsKSB7XG4gICAgICAgICAgICB0b3BpY3MucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRvcGljcztcbiAgICB9XG4gICAgZW5jb2RlRXZlbnRMb2coZXZlbnRGcmFnbWVudCwgdmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGV2ZW50RnJhZ21lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBldmVudEZyYWdtZW50ID0gdGhpcy5nZXRFdmVudChldmVudEZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3BpY3MgPSBbXTtcbiAgICAgICAgY29uc3QgZGF0YVR5cGVzID0gW107XG4gICAgICAgIGNvbnN0IGRhdGFWYWx1ZXMgPSBbXTtcbiAgICAgICAgaWYgKCFldmVudEZyYWdtZW50LmFub255bW91cykge1xuICAgICAgICAgICAgdG9waWNzLnB1c2godGhpcy5nZXRFdmVudFRvcGljKGV2ZW50RnJhZ21lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCAhPT0gZXZlbnRGcmFnbWVudC5pbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiZXZlbnQgYXJndW1lbnRzL3ZhbHVlcyBtaXNtYXRjaFwiLCBcInZhbHVlc1wiLCB2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50RnJhZ21lbnQuaW5wdXRzLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHBhcmFtLmluZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0udHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0b3BpY3MucHVzaChpZCh2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJhbS50eXBlID09PSBcImJ5dGVzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9waWNzLnB1c2goa2VjY2FrMjU2KHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmFtLmJhc2VUeXBlID09PSBcInR1cGxlXCIgfHwgcGFyYW0uYmFzZVR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBAVE9ET1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3BpY3MucHVzaCh0aGlzLl9hYmlDb2Rlci5lbmNvZGUoW3BhcmFtLnR5cGVdLCBbdmFsdWVdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVR5cGVzLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgICAgIGRhdGFWYWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogdGhpcy5fYWJpQ29kZXIuZW5jb2RlKGRhdGFUeXBlcywgZGF0YVZhbHVlcyksXG4gICAgICAgICAgICB0b3BpY3M6IHRvcGljc1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBEZWNvZGUgYSBmaWx0ZXIgZm9yIHRoZSBldmVudCBhbmQgdGhlIHNlYXJjaCBjcml0ZXJpYVxuICAgIGRlY29kZUV2ZW50TG9nKGV2ZW50RnJhZ21lbnQsIGRhdGEsIHRvcGljcykge1xuICAgICAgICBpZiAodHlwZW9mIChldmVudEZyYWdtZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZXZlbnRGcmFnbWVudCA9IHRoaXMuZ2V0RXZlbnQoZXZlbnRGcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRvcGljcyAhPSBudWxsICYmICFldmVudEZyYWdtZW50LmFub255bW91cykge1xuICAgICAgICAgICAgbGV0IHRvcGljSGFzaCA9IHRoaXMuZ2V0RXZlbnRUb3BpYyhldmVudEZyYWdtZW50KTtcbiAgICAgICAgICAgIGlmICghaXNIZXhTdHJpbmcodG9waWNzWzBdLCAzMikgfHwgdG9waWNzWzBdLnRvTG93ZXJDYXNlKCkgIT09IHRvcGljSGFzaCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiZnJhZ21lbnQvdG9waWMgbWlzbWF0Y2hcIiwgTG9nZ2VyLmVycm9ycy5JTlZBTElEX0FSR1VNRU5ULCB7IGFyZ3VtZW50OiBcInRvcGljc1swXVwiLCBleHBlY3RlZDogdG9waWNIYXNoLCB2YWx1ZTogdG9waWNzWzBdIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9waWNzID0gdG9waWNzLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbmRleGVkID0gW107XG4gICAgICAgIGxldCBub25JbmRleGVkID0gW107XG4gICAgICAgIGxldCBkeW5hbWljID0gW107XG4gICAgICAgIGV2ZW50RnJhZ21lbnQuaW5wdXRzLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLmluZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0udHlwZSA9PT0gXCJzdHJpbmdcIiB8fCBwYXJhbS50eXBlID09PSBcImJ5dGVzXCIgfHwgcGFyYW0uYmFzZVR5cGUgPT09IFwidHVwbGVcIiB8fCBwYXJhbS5iYXNlVHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZWQucHVzaChQYXJhbVR5cGUuZnJvbU9iamVjdCh7IHR5cGU6IFwiYnl0ZXMzMlwiLCBuYW1lOiBwYXJhbS5uYW1lIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYy5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlZC5wdXNoKHBhcmFtKTtcbiAgICAgICAgICAgICAgICAgICAgZHluYW1pYy5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub25JbmRleGVkLnB1c2gocGFyYW0pO1xuICAgICAgICAgICAgICAgIGR5bmFtaWMucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmVzdWx0SW5kZXhlZCA9ICh0b3BpY3MgIT0gbnVsbCkgPyB0aGlzLl9hYmlDb2Rlci5kZWNvZGUoaW5kZXhlZCwgY29uY2F0KHRvcGljcykpIDogbnVsbDtcbiAgICAgICAgbGV0IHJlc3VsdE5vbkluZGV4ZWQgPSB0aGlzLl9hYmlDb2Rlci5kZWNvZGUobm9uSW5kZXhlZCwgZGF0YSwgdHJ1ZSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IG5vbkluZGV4ZWRJbmRleCA9IDAsIGluZGV4ZWRJbmRleCA9IDA7XG4gICAgICAgIGV2ZW50RnJhZ21lbnQuaW5wdXRzLmZvckVhY2goKHBhcmFtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhcmFtLmluZGV4ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0SW5kZXhlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBuZXcgSW5kZXhlZCh7IF9pc0luZGV4ZWQ6IHRydWUsIGhhc2g6IG51bGwgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGR5bmFtaWNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBuZXcgSW5kZXhlZCh7IF9pc0luZGV4ZWQ6IHRydWUsIGhhc2g6IHJlc3VsdEluZGV4ZWRbaW5kZXhlZEluZGV4KytdIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSByZXN1bHRJbmRleGVkW2luZGV4ZWRJbmRleCsrXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSByZXN1bHROb25JbmRleGVkW25vbkluZGV4ZWRJbmRleCsrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtpbmRleF0gPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGtleXdvcmQgYXJndW1lbnQgaWYgbmFtZWQgYW5kIHNhZmVcbiAgICAgICAgICAgIGlmIChwYXJhbS5uYW1lICYmIHJlc3VsdFtwYXJhbS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIC8vIE1ha2UgZXJyb3IgbmFtZWQgdmFsdWVzIHRocm93IG9uIGFjY2Vzc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsIHBhcmFtLm5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IHsgdGhyb3cgd3JhcEFjY2Vzc0Vycm9yKGBwcm9wZXJ0eSAke0pTT04uc3RyaW5naWZ5KHBhcmFtLm5hbWUpfWAsIHZhbHVlKTsgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwYXJhbS5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1ha2UgYWxsIGVycm9yIGluZGV4ZWQgdmFsdWVzIHRocm93IG9uIGFjY2Vzc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRbaV07XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXN1bHQsIGksIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAoKSA9PiB7IHRocm93IHdyYXBBY2Nlc3NFcnJvcihgaW5kZXggJHtpfWAsIHZhbHVlKTsgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHJlc3VsdCk7XG4gICAgfVxuICAgIC8vIEdpdmVuIGEgdHJhbnNhY3Rpb24sIGZpbmQgdGhlIG1hdGNoaW5nIGZ1bmN0aW9uIGZyYWdtZW50IChpZiBhbnkpIGFuZFxuICAgIC8vIGRldGVybWluZSBhbGwgaXRzIHByb3BlcnRpZXMgYW5kIGNhbGwgcGFyYW1ldGVyc1xuICAgIHBhcnNlVHJhbnNhY3Rpb24odHgpIHtcbiAgICAgICAgbGV0IGZyYWdtZW50ID0gdGhpcy5nZXRGdW5jdGlvbih0eC5kYXRhLnN1YnN0cmluZygwLCAxMCkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGlmICghZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb25EZXNjcmlwdGlvbih7XG4gICAgICAgICAgICBhcmdzOiB0aGlzLl9hYmlDb2Rlci5kZWNvZGUoZnJhZ21lbnQuaW5wdXRzLCBcIjB4XCIgKyB0eC5kYXRhLnN1YnN0cmluZygxMCkpLFxuICAgICAgICAgICAgZnVuY3Rpb25GcmFnbWVudDogZnJhZ21lbnQsXG4gICAgICAgICAgICBuYW1lOiBmcmFnbWVudC5uYW1lLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiBmcmFnbWVudC5mb3JtYXQoKSxcbiAgICAgICAgICAgIHNpZ2hhc2g6IHRoaXMuZ2V0U2lnaGFzaChmcmFnbWVudCksXG4gICAgICAgICAgICB2YWx1ZTogQmlnTnVtYmVyLmZyb20odHgudmFsdWUgfHwgXCIwXCIpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gQFRPRE9cbiAgICAvL3BhcnNlQ2FsbFJlc3VsdChkYXRhOiBCeXRlc0xpa2UpOiA/P1xuICAgIC8vIEdpdmVuIGFuIGV2ZW50IGxvZywgZmluZCB0aGUgbWF0Y2hpbmcgZXZlbnQgZnJhZ21lbnQgKGlmIGFueSkgYW5kXG4gICAgLy8gZGV0ZXJtaW5lIGFsbCBpdHMgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgcGFyc2VMb2cobG9nKSB7XG4gICAgICAgIGxldCBmcmFnbWVudCA9IHRoaXMuZ2V0RXZlbnQobG9nLnRvcGljc1swXSk7XG4gICAgICAgIGlmICghZnJhZ21lbnQgfHwgZnJhZ21lbnQuYW5vbnltb3VzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBAVE9ETzogSWYgYW5vbnltb3VzLCBhbmQgdGhlIG9ubHkgbWV0aG9kLCBhbmQgdGhlIGlucHV0IGNvdW50IG1hdGNoZXMsIHNob3VsZCB3ZSBwYXJzZT9cbiAgICAgICAgLy8gICAgICAgIFByb2JhYmx5IG5vdCwgYmVjYXVzZSBqdXN0IGJlY2F1c2UgaXQgaXMgdGhlIG9ubHkgZXZlbnQgaW4gdGhlIEFCSSBkb2VzXG4gICAgICAgIC8vICAgICAgICBub3QgbWVhbiB3ZSBoYXZlIHRoZSBmdWxsIEFCSTsgbWF5YmUganVzdCBhIGZyYWdtZW50P1xuICAgICAgICByZXR1cm4gbmV3IExvZ0Rlc2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGV2ZW50RnJhZ21lbnQ6IGZyYWdtZW50LFxuICAgICAgICAgICAgbmFtZTogZnJhZ21lbnQubmFtZSxcbiAgICAgICAgICAgIHNpZ25hdHVyZTogZnJhZ21lbnQuZm9ybWF0KCksXG4gICAgICAgICAgICB0b3BpYzogdGhpcy5nZXRFdmVudFRvcGljKGZyYWdtZW50KSxcbiAgICAgICAgICAgIGFyZ3M6IHRoaXMuZGVjb2RlRXZlbnRMb2coZnJhZ21lbnQsIGxvZy5kYXRhLCBsb2cudG9waWNzKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGFyc2VFcnJvcihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGhleERhdGEgPSBoZXhsaWZ5KGRhdGEpO1xuICAgICAgICBsZXQgZnJhZ21lbnQgPSB0aGlzLmdldEVycm9yKGhleERhdGEuc3Vic3RyaW5nKDAsIDEwKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKCFmcmFnbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvckRlc2NyaXB0aW9uKHtcbiAgICAgICAgICAgIGFyZ3M6IHRoaXMuX2FiaUNvZGVyLmRlY29kZShmcmFnbWVudC5pbnB1dHMsIFwiMHhcIiArIGhleERhdGEuc3Vic3RyaW5nKDEwKSksXG4gICAgICAgICAgICBlcnJvckZyYWdtZW50OiBmcmFnbWVudCxcbiAgICAgICAgICAgIG5hbWU6IGZyYWdtZW50Lm5hbWUsXG4gICAgICAgICAgICBzaWduYXR1cmU6IGZyYWdtZW50LmZvcm1hdCgpLFxuICAgICAgICAgICAgc2lnaGFzaDogdGhpcy5nZXRTaWdoYXNoKGZyYWdtZW50KSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qXG4gICAgc3RhdGljIGZyb20odmFsdWU6IEFycmF5PEZyYWdtZW50IHwgc3RyaW5nIHwgSnNvbkFiaT4gfCBzdHJpbmcgfCBJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYgKEludGVyZmFjZS5pc0ludGVyZmFjZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnRlcmZhY2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJmYWNlKHZhbHVlKTtcbiAgICB9XG4gICAgKi9cbiAgICBzdGF0aWMgaXNJbnRlcmZhY2UodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9pc0ludGVyZmFjZSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW50ZXJmYWNlLmpzLm1hcCIsImV4cG9ydCBjb25zdCB2ZXJzaW9uID0gXCJjb250cmFjdHMvNS41LjBcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV92ZXJzaW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBjaGVja1Jlc3VsdEVycm9ycywgSW5kZXhlZCwgSW50ZXJmYWNlIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2FiaVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYWJzdHJhY3QtcHJvdmlkZXJcIjtcbmltcG9ydCB7IFNpZ25lciwgVm9pZFNpZ25lciB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hYnN0cmFjdC1zaWduZXJcIjtcbmltcG9ydCB7IGdldEFkZHJlc3MsIGdldENvbnRyYWN0QWRkcmVzcyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9hZGRyZXNzXCI7XG5pbXBvcnQgeyBCaWdOdW1iZXIgfSBmcm9tIFwiQGV0aGVyc3Byb2plY3QvYmlnbnVtYmVyXCI7XG5pbXBvcnQgeyBhcnJheWlmeSwgY29uY2F0LCBoZXhsaWZ5LCBpc0J5dGVzLCBpc0hleFN0cmluZyB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9ieXRlc1wiO1xuaW1wb3J0IHsgZGVmaW5lUmVhZE9ubHksIGRlZXBDb3B5LCBnZXRTdGF0aWMsIHJlc29sdmVQcm9wZXJ0aWVzLCBzaGFsbG93Q29weSB9IGZyb20gXCJAZXRoZXJzcHJvamVjdC9wcm9wZXJ0aWVzXCI7XG5pbXBvcnQgeyBhY2Nlc3NMaXN0aWZ5IH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L3RyYW5zYWN0aW9uc1wiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIkBldGhlcnNwcm9qZWN0L2xvZ2dlclwiO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gXCIuL192ZXJzaW9uXCI7XG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKHZlcnNpb24pO1xuO1xuO1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgYWxsb3dlZFRyYW5zYWN0aW9uS2V5cyA9IHtcbiAgICBjaGFpbklkOiB0cnVlLCBkYXRhOiB0cnVlLCBmcm9tOiB0cnVlLCBnYXNMaW1pdDogdHJ1ZSwgZ2FzUHJpY2U6IHRydWUsIG5vbmNlOiB0cnVlLCB0bzogdHJ1ZSwgdmFsdWU6IHRydWUsXG4gICAgdHlwZTogdHJ1ZSwgYWNjZXNzTGlzdDogdHJ1ZSxcbiAgICBtYXhGZWVQZXJHYXM6IHRydWUsIG1heFByaW9yaXR5RmVlUGVyR2FzOiB0cnVlLFxuICAgIGN1c3RvbURhdGE6IHRydWVcbn07XG5mdW5jdGlvbiByZXNvbHZlTmFtZShyZXNvbHZlciwgbmFtZU9yUHJvbWlzZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB5aWVsZCBuYW1lT3JQcm9taXNlO1xuICAgICAgICBpZiAodHlwZW9mIChuYW1lKSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImludmFsaWQgYWRkcmVzcyBvciBFTlMgbmFtZVwiLCBcIm5hbWVcIiwgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgaXQgaXMgYWxyZWFkeSBhbiBhZGRyZXNzLCBqdXN0IHVzZSBpdCAoYWZ0ZXIgYWRkaW5nIGNoZWNrc3VtKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEFkZHJlc3MobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7IH1cbiAgICAgICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJhIHByb3ZpZGVyIG9yIHNpZ25lciBpcyBuZWVkZWQgdG8gcmVzb2x2ZSBFTlMgbmFtZXNcIiwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwicmVzb2x2ZU5hbWVcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IHlpZWxkIHJlc29sdmVyLnJlc29sdmVOYW1lKG5hbWUpO1xuICAgICAgICBpZiAoYWRkcmVzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwicmVzb2x2ZXIgb3IgYWRkciBpcyBub3QgY29uZmlndXJlZCBmb3IgRU5TIG5hbWVcIiwgXCJuYW1lXCIsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGRyZXNzO1xuICAgIH0pO1xufVxuLy8gUmVjdXJzaXZlbHkgcmVwbGFjZXMgRU5TIG5hbWVzIHdpdGggcHJvbWlzZXMgdG8gcmVzb2x2ZSB0aGUgbmFtZSBhbmQgcmVzb2x2ZXMgYWxsIHByb3BlcnRpZXNcbmZ1bmN0aW9uIHJlc29sdmVBZGRyZXNzZXMocmVzb2x2ZXIsIHZhbHVlLCBwYXJhbVR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgUHJvbWlzZS5hbGwocGFyYW1UeXBlLm1hcCgocGFyYW1UeXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlQWRkcmVzc2VzKHJlc29sdmVyLCAoKEFycmF5LmlzQXJyYXkodmFsdWUpKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlW3BhcmFtVHlwZS5uYW1lXSksIHBhcmFtVHlwZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtVHlwZS50eXBlID09PSBcImFkZHJlc3NcIikge1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHJlc29sdmVOYW1lKHJlc29sdmVyLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtVHlwZS50eXBlID09PSBcInR1cGxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCByZXNvbHZlQWRkcmVzc2VzKHJlc29sdmVyLCB2YWx1ZSwgcGFyYW1UeXBlLmNvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbVR5cGUuYmFzZVR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChsb2dnZXIubWFrZUVycm9yKFwiaW52YWxpZCB2YWx1ZSBmb3IgYXJyYXlcIiwgTG9nZ2VyLmVycm9ycy5JTlZBTElEX0FSR1VNRU5ULCB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50OiBcInZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIFByb21pc2UuYWxsKHZhbHVlLm1hcCgodikgPT4gcmVzb2x2ZUFkZHJlc3NlcyhyZXNvbHZlciwgdiwgcGFyYW1UeXBlLmFycmF5Q2hpbGRyZW4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcG9wdWxhdGVUcmFuc2FjdGlvbihjb250cmFjdCwgZnJhZ21lbnQsIGFyZ3MpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBJZiBhbiBleHRyYSBhcmd1bWVudCBpcyBnaXZlbiwgaXQgaXMgb3ZlcnJpZGVzXG4gICAgICAgIGxldCBvdmVycmlkZXMgPSB7fTtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSBmcmFnbWVudC5pbnB1dHMubGVuZ3RoICsgMSAmJiB0eXBlb2YgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIG92ZXJyaWRlcyA9IHNoYWxsb3dDb3B5KGFyZ3MucG9wKCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcGFyYW1ldGVyIGNvdW50IG1hdGNoZXNcbiAgICAgICAgbG9nZ2VyLmNoZWNrQXJndW1lbnRDb3VudChhcmdzLmxlbmd0aCwgZnJhZ21lbnQuaW5wdXRzLmxlbmd0aCwgXCJwYXNzZWQgdG8gY29udHJhY3RcIik7XG4gICAgICAgIC8vIFBvcHVsYXRlIFwiZnJvbVwiIG92ZXJyaWRlIChhbGxvdyBwcm9taXNlcylcbiAgICAgICAgaWYgKGNvbnRyYWN0LnNpZ25lcikge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlcy5mcm9tKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29udHJhY3RzIHdpdGggYSBTaWduZXIgYXJlIGZyb20gdGhlIFNpZ25lcidzIGZyYW1lLW9mLXJlZmVyZW5jZTtcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgYWxsb3cgb3ZlcnJpZGluZyBcImZyb21cIiBpZiBpdCBtYXRjaGVzIHRoZSBzaWduZXJcbiAgICAgICAgICAgICAgICBvdmVycmlkZXMuZnJvbSA9IHJlc29sdmVQcm9wZXJ0aWVzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcnJpZGU6IHJlc29sdmVOYW1lKGNvbnRyYWN0LnNpZ25lciwgb3ZlcnJpZGVzLmZyb20pLFxuICAgICAgICAgICAgICAgICAgICBzaWduZXI6IGNvbnRyYWN0LnNpZ25lci5nZXRBZGRyZXNzKClcbiAgICAgICAgICAgICAgICB9KS50aGVuKChjaGVjaykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0QWRkcmVzcyhjaGVjay5zaWduZXIpICE9PSBjaGVjay5vdmVycmlkZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJDb250cmFjdCB3aXRoIGEgU2lnbmVyIGNhbm5vdCBvdmVycmlkZSBmcm9tXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBcIm92ZXJyaWRlcy5mcm9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGVjay5vdmVycmlkZTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdmVycmlkZXMuZnJvbSA9IGNvbnRyYWN0LnNpZ25lci5nZXRBZGRyZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3ZlcnJpZGVzLmZyb20pIHtcbiAgICAgICAgICAgIG92ZXJyaWRlcy5mcm9tID0gcmVzb2x2ZU5hbWUoY29udHJhY3QucHJvdmlkZXIsIG92ZXJyaWRlcy5mcm9tKTtcbiAgICAgICAgICAgIC8vfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbnRyYWN0cyB3aXRob3V0IGEgc2lnbmVyIGNhbiBvdmVycmlkZSBcImZyb21cIiwgYW5kIGlmXG4gICAgICAgICAgICAvLyB1bnNwZWNpZmllZCB0aGUgemVybyBhZGRyZXNzIGlzIHVzZWRcbiAgICAgICAgICAgIC8vb3ZlcnJpZGVzLmZyb20gPSBBZGRyZXNzWmVybztcbiAgICAgICAgfVxuICAgICAgICAvLyBXYWl0IGZvciBhbGwgZGVwZW5kZW5jaWVzIHRvIGJlIHJlc29sdmVkIChwcmVmZXIgdGhlIHNpZ25lciBvdmVyIHRoZSBwcm92aWRlcilcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB5aWVsZCByZXNvbHZlUHJvcGVydGllcyh7XG4gICAgICAgICAgICBhcmdzOiByZXNvbHZlQWRkcmVzc2VzKGNvbnRyYWN0LnNpZ25lciB8fCBjb250cmFjdC5wcm92aWRlciwgYXJncywgZnJhZ21lbnQuaW5wdXRzKSxcbiAgICAgICAgICAgIGFkZHJlc3M6IGNvbnRyYWN0LnJlc29sdmVkQWRkcmVzcyxcbiAgICAgICAgICAgIG92ZXJyaWRlczogKHJlc29sdmVQcm9wZXJ0aWVzKG92ZXJyaWRlcykgfHwge30pXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGUgQUJJIGNvZGVkIHRyYW5zYWN0aW9uXG4gICAgICAgIGNvbnN0IGRhdGEgPSBjb250cmFjdC5pbnRlcmZhY2UuZW5jb2RlRnVuY3Rpb25EYXRhKGZyYWdtZW50LCByZXNvbHZlZC5hcmdzKTtcbiAgICAgICAgY29uc3QgdHggPSB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgdG86IHJlc29sdmVkLmFkZHJlc3NcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUmVzb2x2ZWQgT3ZlcnJpZGVzXG4gICAgICAgIGNvbnN0IHJvID0gcmVzb2x2ZWQub3ZlcnJpZGVzO1xuICAgICAgICAvLyBQb3B1bGF0ZSBzaW1wbGUgb3ZlcnJpZGVzXG4gICAgICAgIGlmIChyby5ub25jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5ub25jZSA9IEJpZ051bWJlci5mcm9tKHJvLm5vbmNlKS50b051bWJlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyby5nYXNMaW1pdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5nYXNMaW1pdCA9IEJpZ051bWJlci5mcm9tKHJvLmdhc0xpbWl0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm8uZ2FzUHJpY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgdHguZ2FzUHJpY2UgPSBCaWdOdW1iZXIuZnJvbShyby5nYXNQcmljZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvLm1heEZlZVBlckdhcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5tYXhGZWVQZXJHYXMgPSBCaWdOdW1iZXIuZnJvbShyby5tYXhGZWVQZXJHYXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyby5tYXhQcmlvcml0eUZlZVBlckdhcyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5tYXhQcmlvcml0eUZlZVBlckdhcyA9IEJpZ051bWJlci5mcm9tKHJvLm1heFByaW9yaXR5RmVlUGVyR2FzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm8uZnJvbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5mcm9tID0gcm8uZnJvbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm8udHlwZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC50eXBlID0gcm8udHlwZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm8uYWNjZXNzTGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0eC5hY2Nlc3NMaXN0ID0gYWNjZXNzTGlzdGlmeShyby5hY2Nlc3NMaXN0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgbm8gXCJnYXNMaW1pdFwiIG92ZXJyaWRlLCBidXQgdGhlIEFCSSBzcGVjaWZpZXMgYSBkZWZhdWx0LCB1c2UgaXRcbiAgICAgICAgaWYgKHR4Lmdhc0xpbWl0ID09IG51bGwgJiYgZnJhZ21lbnQuZ2FzICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIENvbXB1dGUgdGhlIGludHJpbnNpYyBnYXMgY29zdCBmb3IgdGhpcyB0cmFuc2FjdGlvblxuICAgICAgICAgICAgLy8gQFRPRE86IFRoaXMgaXMgYmFzZWQgb24gdGhlIHllbGxvdyBwYXBlciBhcyBvZiBQZXRlcnNidXJnOyB0aGlzIGlzIHNvbWV0aGluZ1xuICAgICAgICAgICAgLy8gd2UgbWF5IHdpc2ggdG8gcGFyYW1ldGVyaXplIGluIHY2IGFzIHBhcnQgb2YgdGhlIE5ldHdvcmsgb2JqZWN0LiBTaW5jZSB0aGlzXG4gICAgICAgICAgICAvLyBpcyBhbHdheXMgYSBub24tbmlsIHRvIGFkZHJlc3MsIHdlIGNhbiBpZ25vcmUgR19jcmVhdGUsIGJ1dCBtYXkgd2lzaCB0byBhZGRcbiAgICAgICAgICAgIC8vIHNpbWlsYXIgbG9naWMgdG8gdGhlIENvbnRyYWN0RmFjdG9yeS5cbiAgICAgICAgICAgIGxldCBpbnRyaW5zaWMgPSAyMTAwMDtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gYXJyYXlpZnkoZGF0YSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW50cmluc2ljICs9IDQ7XG4gICAgICAgICAgICAgICAgaWYgKGJ5dGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGludHJpbnNpYyArPSA2NDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eC5nYXNMaW1pdCA9IEJpZ051bWJlci5mcm9tKGZyYWdtZW50LmdhcykuYWRkKGludHJpbnNpYyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUG9wdWxhdGUgXCJ2YWx1ZVwiIG92ZXJyaWRlXG4gICAgICAgIGlmIChyby52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgcm9WYWx1ZSA9IEJpZ051bWJlci5mcm9tKHJvLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICghcm9WYWx1ZS5pc1plcm8oKSAmJiAhZnJhZ21lbnQucGF5YWJsZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwibm9uLXBheWFibGUgbWV0aG9kIGNhbm5vdCBvdmVycmlkZSB2YWx1ZVwiLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwib3ZlcnJpZGVzLnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvdmVycmlkZXMudmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR4LnZhbHVlID0gcm9WYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm8uY3VzdG9tRGF0YSkge1xuICAgICAgICAgICAgdHguY3VzdG9tRGF0YSA9IHNoYWxsb3dDb3B5KHJvLmN1c3RvbURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgb3ZlcnJpZGVzXG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXMubm9uY2U7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXMuZ2FzTGltaXQ7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXMuZ2FzUHJpY2U7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXMuZnJvbTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlcy52YWx1ZTtcbiAgICAgICAgZGVsZXRlIG92ZXJyaWRlcy50eXBlO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzLmFjY2Vzc0xpc3Q7XG4gICAgICAgIGRlbGV0ZSBvdmVycmlkZXMubWF4RmVlUGVyR2FzO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzLm1heFByaW9yaXR5RmVlUGVyR2FzO1xuICAgICAgICBkZWxldGUgb3ZlcnJpZGVzLmN1c3RvbURhdGE7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gc3RyYXkgb3ZlcnJpZGVzLCB3aGljaCBtYXkgaW5kaWNhdGUgYVxuICAgICAgICAvLyB0eXBvIG9yIHVzaW5nIGFuIHVuc3VwcG9ydGVkIGtleS5cbiAgICAgICAgY29uc3QgbGVmdG92ZXJzID0gT2JqZWN0LmtleXMob3ZlcnJpZGVzKS5maWx0ZXIoKGtleSkgPT4gKG92ZXJyaWRlc1trZXldICE9IG51bGwpKTtcbiAgICAgICAgaWYgKGxlZnRvdmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKGBjYW5ub3Qgb3ZlcnJpZGUgJHtsZWZ0b3ZlcnMubWFwKChsKSA9PiBKU09OLnN0cmluZ2lmeShsKSkuam9pbihcIixcIil9YCwgTG9nZ2VyLmVycm9ycy5VTlNVUFBPUlRFRF9PUEVSQVRJT04sIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwib3ZlcnJpZGVzXCIsXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzOiBsZWZ0b3ZlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkUG9wdWxhdGUoY29udHJhY3QsIGZyYWdtZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZVRyYW5zYWN0aW9uKGNvbnRyYWN0LCBmcmFnbWVudCwgYXJncyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGJ1aWxkRXN0aW1hdGUoY29udHJhY3QsIGZyYWdtZW50KSB7XG4gICAgY29uc3Qgc2lnbmVyT3JQcm92aWRlciA9IChjb250cmFjdC5zaWduZXIgfHwgY29udHJhY3QucHJvdmlkZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFzaWduZXJPclByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJlc3RpbWF0ZSByZXF1aXJlIGEgcHJvdmlkZXIgb3Igc2lnbmVyXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJlc3RpbWF0ZUdhc1wiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0eCA9IHlpZWxkIHBvcHVsYXRlVHJhbnNhY3Rpb24oY29udHJhY3QsIGZyYWdtZW50LCBhcmdzKTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCBzaWduZXJPclByb3ZpZGVyLmVzdGltYXRlR2FzKHR4KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRyYWN0V2FpdChjb250cmFjdCwgdHgpIHtcbiAgICBjb25zdCB3YWl0ID0gdHgud2FpdC5iaW5kKHR4KTtcbiAgICB0eC53YWl0ID0gKGNvbmZpcm1hdGlvbnMpID0+IHtcbiAgICAgICAgcmV0dXJuIHdhaXQoY29uZmlybWF0aW9ucykudGhlbigocmVjZWlwdCkgPT4ge1xuICAgICAgICAgICAgcmVjZWlwdC5ldmVudHMgPSByZWNlaXB0LmxvZ3MubWFwKChsb2cpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBkZWVwQ29weShsb2cpO1xuICAgICAgICAgICAgICAgIGxldCBwYXJzZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZCA9IGNvbnRyYWN0LmludGVyZmFjZS5wYXJzZUxvZyhsb2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICAgICAgLy8gU3VjY2Vzc2Z1bGx5IHBhcnNlZCB0aGUgZXZlbnQgbG9nOyBpbmNsdWRlIGl0XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5hcmdzID0gcGFyc2VkLmFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRlY29kZSA9IChkYXRhLCB0b3BpY3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250cmFjdC5pbnRlcmZhY2UuZGVjb2RlRXZlbnRMb2cocGFyc2VkLmV2ZW50RnJhZ21lbnQsIGRhdGEsIHRvcGljcyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50ID0gcGFyc2VkLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmV2ZW50U2lnbmF0dXJlID0gcGFyc2VkLnNpZ25hdHVyZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIG9wZXJhdGlvbnNcbiAgICAgICAgICAgICAgICBldmVudC5yZW1vdmVMaXN0ZW5lciA9ICgpID0+IHsgcmV0dXJuIGNvbnRyYWN0LnByb3ZpZGVyOyB9O1xuICAgICAgICAgICAgICAgIGV2ZW50LmdldEJsb2NrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udHJhY3QucHJvdmlkZXIuZ2V0QmxvY2socmVjZWlwdC5ibG9ja0hhc2gpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZXZlbnQuZ2V0VHJhbnNhY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250cmFjdC5wcm92aWRlci5nZXRUcmFuc2FjdGlvbihyZWNlaXB0LnRyYW5zYWN0aW9uSGFzaCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBldmVudC5nZXRUcmFuc2FjdGlvblJlY2VpcHQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVjZWlwdCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZWNlaXB0O1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYnVpbGRDYWxsKGNvbnRyYWN0LCBmcmFnbWVudCwgY29sbGFwc2VTaW1wbGUpIHtcbiAgICBjb25zdCBzaWduZXJPclByb3ZpZGVyID0gKGNvbnRyYWN0LnNpZ25lciB8fCBjb250cmFjdC5wcm92aWRlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBcImJsb2NrVGFnXCIgb3ZlcnJpZGUgaWYgcHJlc2VudFxuICAgICAgICAgICAgbGV0IGJsb2NrVGFnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSBmcmFnbWVudC5pbnB1dHMubGVuZ3RoICsgMSAmJiB0eXBlb2YgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdmVycmlkZXMgPSBzaGFsbG93Q29weShhcmdzLnBvcCgpKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzLmJsb2NrVGFnICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUYWcgPSB5aWVsZCBvdmVycmlkZXMuYmxvY2tUYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdmVycmlkZXMuYmxvY2tUYWc7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgY29udHJhY3Qgd2FzIGp1c3QgZGVwbG95ZWQsIHdhaXQgdW50aWwgaXQgaXMgbWluZWRcbiAgICAgICAgICAgIGlmIChjb250cmFjdC5kZXBsb3lUcmFuc2FjdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgY29udHJhY3QuX2RlcGxveWVkKGJsb2NrVGFnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhbGwgYSBub2RlIGFuZCBnZXQgdGhlIHJlc3VsdFxuICAgICAgICAgICAgY29uc3QgdHggPSB5aWVsZCBwb3B1bGF0ZVRyYW5zYWN0aW9uKGNvbnRyYWN0LCBmcmFnbWVudCwgYXJncyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBzaWduZXJPclByb3ZpZGVyLmNhbGwodHgsIGJsb2NrVGFnKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gY29udHJhY3QuaW50ZXJmYWNlLmRlY29kZUZ1bmN0aW9uUmVzdWx0KGZyYWdtZW50LCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlmIChjb2xsYXBzZVNpbXBsZSAmJiBmcmFnbWVudC5vdXRwdXRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSA9PT0gTG9nZ2VyLmVycm9ycy5DQUxMX0VYQ0VQVElPTikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5hZGRyZXNzID0gY29udHJhY3QuYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IuYXJncyA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yLnRyYW5zYWN0aW9uID0gdHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYnVpbGRTZW5kKGNvbnRyYWN0LCBmcmFnbWVudCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKCFjb250cmFjdC5zaWduZXIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInNlbmRpbmcgYSB0cmFuc2FjdGlvbiByZXF1aXJlcyBhIHNpZ25lclwiLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwic2VuZFRyYW5zYWN0aW9uXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBjb250cmFjdCB3YXMganVzdCBkZXBsb3llZCwgd2FpdCB1bnRpbCBpdCBpcyBtaW5lZFxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0LmRlcGxveVRyYW5zYWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBjb250cmFjdC5fZGVwbG95ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHR4UmVxdWVzdCA9IHlpZWxkIHBvcHVsYXRlVHJhbnNhY3Rpb24oY29udHJhY3QsIGZyYWdtZW50LCBhcmdzKTtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0geWllbGQgY29udHJhY3Quc2lnbmVyLnNlbmRUcmFuc2FjdGlvbih0eFJlcXVlc3QpO1xuICAgICAgICAgICAgLy8gVHdlYWsgdGhlIHR4LndhaXQgc28gdGhlIHJlY2VpcHQgaGFzIGV4dHJhIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGFkZENvbnRyYWN0V2FpdChjb250cmFjdCwgdHgpO1xuICAgICAgICAgICAgcmV0dXJuIHR4O1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYnVpbGREZWZhdWx0KGNvbnRyYWN0LCBmcmFnbWVudCwgY29sbGFwc2VTaW1wbGUpIHtcbiAgICBpZiAoZnJhZ21lbnQuY29uc3RhbnQpIHtcbiAgICAgICAgcmV0dXJuIGJ1aWxkQ2FsbChjb250cmFjdCwgZnJhZ21lbnQsIGNvbGxhcHNlU2ltcGxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1aWxkU2VuZChjb250cmFjdCwgZnJhZ21lbnQpO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRUYWcoZmlsdGVyKSB7XG4gICAgaWYgKGZpbHRlci5hZGRyZXNzICYmIChmaWx0ZXIudG9waWNzID09IG51bGwgfHwgZmlsdGVyLnRvcGljcy5sZW5ndGggPT09IDApKSB7XG4gICAgICAgIHJldHVybiBcIipcIjtcbiAgICB9XG4gICAgcmV0dXJuIChmaWx0ZXIuYWRkcmVzcyB8fCBcIipcIikgKyBcIkBcIiArIChmaWx0ZXIudG9waWNzID8gZmlsdGVyLnRvcGljcy5tYXAoKHRvcGljKSA9PiB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRvcGljKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRvcGljLmpvaW4oXCJ8XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b3BpYztcbiAgICB9KS5qb2luKFwiOlwiKSA6IFwiXCIpO1xufVxuY2xhc3MgUnVubmluZ0V2ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YWcsIGZpbHRlcikge1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInRhZ1wiLCB0YWcpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImZpbHRlclwiLCBmaWx0ZXIpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gICAgYWRkTGlzdGVuZXIobGlzdGVuZXIsIG9uY2UpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2goeyBsaXN0ZW5lcjogbGlzdGVuZXIsIG9uY2U6IG9uY2UgfSk7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChkb25lIHx8IGl0ZW0ubGlzdGVuZXIgIT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUFsbExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGxpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVycy5tYXAoKGkpID0+IGkubGlzdGVuZXIpO1xuICAgIH1cbiAgICBsaXN0ZW5lckNvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzLmxlbmd0aDtcbiAgICB9XG4gICAgcnVuKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgbGlzdGVuZXJDb3VudCA9IHRoaXMubGlzdGVuZXJDb3VudCgpO1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcmdzQ29weSA9IGFyZ3Muc2xpY2UoKTtcbiAgICAgICAgICAgIC8vIENhbGwgdGhlIGNhbGxiYWNrIGluIHRoZSBuZXh0IGV2ZW50IGxvb3BcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ubGlzdGVuZXIuYXBwbHkodGhpcywgYXJnc0NvcHkpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAvLyBSZXNjaGVkdWxlIGl0IGlmIGl0IG5vdCBcIm9uY2VcIlxuICAgICAgICAgICAgcmV0dXJuICEoaXRlbS5vbmNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lckNvdW50O1xuICAgIH1cbiAgICBwcmVwYXJlRXZlbnQoZXZlbnQpIHtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgYXJyYXkgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYW4gZW1pdFxuICAgIGdldEVtaXQoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIFtldmVudF07XG4gICAgfVxufVxuY2xhc3MgRXJyb3JSdW5uaW5nRXZlbnQgZXh0ZW5kcyBSdW5uaW5nRXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihcImVycm9yXCIsIG51bGwpO1xuICAgIH1cbn1cbi8vIEBUT0RPIEZyYWdtZW50IHNob3VsZCBpbmhlcml0IFdpbGRjYXJkPyBhbmQganVzdCBvdmVycmlkZSBnZXRFbWl0P1xuLy8gICAgICAgb3IgaGF2ZSBhIGNvbW1vbiBhYnN0cmFjdCBzdXBlciBjbGFzcywgd2l0aCBlbm91Z2ggY29uc3RydWN0b3Jcbi8vICAgICAgIG9wdGlvbnMgdG8gY29uZmlndXJlIGJvdGguXG4vLyBBIEZyYWdtZW50IEV2ZW50IHdpbGwgcG9wdWxhdGUgYWxsIHRoZSBwcm9wZXJ0aWVzIHRoYXQgV2lsZGNhcmRcbi8vIHdpbGwsIGFuZCBhZGRpdGlvbmFsbHkgZGVyZWZlcmVuY2UgdGhlIGFyZ3VtZW50cyB3aGVuIGVtaXR0aW5nXG5jbGFzcyBGcmFnbWVudFJ1bm5pbmdFdmVudCBleHRlbmRzIFJ1bm5pbmdFdmVudCB7XG4gICAgY29uc3RydWN0b3IoYWRkcmVzcywgY29udHJhY3RJbnRlcmZhY2UsIGZyYWdtZW50LCB0b3BpY3MpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyID0ge1xuICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzc1xuICAgICAgICB9O1xuICAgICAgICBsZXQgdG9waWMgPSBjb250cmFjdEludGVyZmFjZS5nZXRFdmVudFRvcGljKGZyYWdtZW50KTtcbiAgICAgICAgaWYgKHRvcGljcykge1xuICAgICAgICAgICAgaWYgKHRvcGljICE9PSB0b3BpY3NbMF0pIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwidG9waWMgbWlzbWF0Y2hcIiwgXCJ0b3BpY3NcIiwgdG9waWNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlci50b3BpY3MgPSB0b3BpY3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlci50b3BpY3MgPSBbdG9waWNdO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKGdldEV2ZW50VGFnKGZpbHRlciksIGZpbHRlcik7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiYWRkcmVzc1wiLCBhZGRyZXNzKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJpbnRlcmZhY2VcIiwgY29udHJhY3RJbnRlcmZhY2UpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImZyYWdtZW50XCIsIGZyYWdtZW50KTtcbiAgICB9XG4gICAgcHJlcGFyZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLnByZXBhcmVFdmVudChldmVudCk7XG4gICAgICAgIGV2ZW50LmV2ZW50ID0gdGhpcy5mcmFnbWVudC5uYW1lO1xuICAgICAgICBldmVudC5ldmVudFNpZ25hdHVyZSA9IHRoaXMuZnJhZ21lbnQuZm9ybWF0KCk7XG4gICAgICAgIGV2ZW50LmRlY29kZSA9IChkYXRhLCB0b3BpY3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVyZmFjZS5kZWNvZGVFdmVudExvZyh0aGlzLmZyYWdtZW50LCBkYXRhLCB0b3BpY3MpO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQuYXJncyA9IHRoaXMuaW50ZXJmYWNlLmRlY29kZUV2ZW50TG9nKHRoaXMuZnJhZ21lbnQsIGV2ZW50LmRhdGEsIGV2ZW50LnRvcGljcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBldmVudC5hcmdzID0gbnVsbDtcbiAgICAgICAgICAgIGV2ZW50LmRlY29kZUVycm9yID0gZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RW1pdChldmVudCkge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSBjaGVja1Jlc3VsdEVycm9ycyhldmVudC5hcmdzKTtcbiAgICAgICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IGVycm9yc1swXS5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhcmdzID0gKGV2ZW50LmFyZ3MgfHwgW10pLnNsaWNlKCk7XG4gICAgICAgIGFyZ3MucHVzaChldmVudCk7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cbn1cbi8vIEEgV2lsZGNhcmQgRXZlbnQgd2lsbCBhdHRlbXB0IHRvIHBvcHVsYXRlOlxuLy8gIC0gZXZlbnQgICAgICAgICAgICBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgbmFtZVxuLy8gIC0gZXZlbnRTaWduYXR1cmUgICBUaGUgZnVsbCBzaWduYXR1cmUgb2YgdGhlIGV2ZW50XG4vLyAgLSBkZWNvZGUgICAgICAgICAgIEEgZnVuY3Rpb24gdG8gZGVjb2RlIGRhdGEgYW5kIHRvcGljc1xuLy8gIC0gYXJncyAgICAgICAgICAgICBUaGUgZGVjb2RlZCBkYXRhIGFuZCB0b3BpY3NcbmNsYXNzIFdpbGRjYXJkUnVubmluZ0V2ZW50IGV4dGVuZHMgUnVubmluZ0V2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhZGRyZXNzLCBjb250cmFjdEludGVyZmFjZSkge1xuICAgICAgICBzdXBlcihcIipcIiwgeyBhZGRyZXNzOiBhZGRyZXNzIH0pO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImFkZHJlc3NcIiwgYWRkcmVzcyk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiaW50ZXJmYWNlXCIsIGNvbnRyYWN0SW50ZXJmYWNlKTtcbiAgICB9XG4gICAgcHJlcGFyZUV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHN1cGVyLnByZXBhcmVFdmVudChldmVudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLmludGVyZmFjZS5wYXJzZUxvZyhldmVudCk7XG4gICAgICAgICAgICBldmVudC5ldmVudCA9IHBhcnNlZC5uYW1lO1xuICAgICAgICAgICAgZXZlbnQuZXZlbnRTaWduYXR1cmUgPSBwYXJzZWQuc2lnbmF0dXJlO1xuICAgICAgICAgICAgZXZlbnQuZGVjb2RlID0gKGRhdGEsIHRvcGljcykgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVyZmFjZS5kZWNvZGVFdmVudExvZyhwYXJzZWQuZXZlbnRGcmFnbWVudCwgZGF0YSwgdG9waWNzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBldmVudC5hcmdzID0gcGFyc2VkLmFyZ3M7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBObyBtYXRjaGluZyBldmVudFxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEJhc2VDb250cmFjdCB7XG4gICAgY29uc3RydWN0b3IoYWRkcmVzc09yTmFtZSwgY29udHJhY3RJbnRlcmZhY2UsIHNpZ25lck9yUHJvdmlkZXIpIHtcbiAgICAgICAgbG9nZ2VyLmNoZWNrTmV3KG5ldy50YXJnZXQsIENvbnRyYWN0KTtcbiAgICAgICAgLy8gQFRPRE86IE1heWJlIHN0aWxsIGNoZWNrIHRoZSBhZGRyZXNzT3JOYW1lIGxvb2tzIGxpa2UgYSB2YWxpZCBhZGRyZXNzIG9yIG5hbWU/XG4gICAgICAgIC8vYWRkcmVzcyA9IGdldEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiaW50ZXJmYWNlXCIsIGdldFN0YXRpYyhuZXcudGFyZ2V0LCBcImdldEludGVyZmFjZVwiKShjb250cmFjdEludGVyZmFjZSkpO1xuICAgICAgICBpZiAoc2lnbmVyT3JQcm92aWRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInByb3ZpZGVyXCIsIG51bGwpO1xuICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJzaWduZXJcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoU2lnbmVyLmlzU2lnbmVyKHNpZ25lck9yUHJvdmlkZXIpKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInByb3ZpZGVyXCIsIHNpZ25lck9yUHJvdmlkZXIucHJvdmlkZXIgfHwgbnVsbCk7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInNpZ25lclwiLCBzaWduZXJPclByb3ZpZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChQcm92aWRlci5pc1Byb3ZpZGVyKHNpZ25lck9yUHJvdmlkZXIpKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInByb3ZpZGVyXCIsIHNpZ25lck9yUHJvdmlkZXIpO1xuICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJzaWduZXJcIiwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBzaWduZXIgb3IgcHJvdmlkZXJcIiwgXCJzaWduZXJPclByb3ZpZGVyXCIsIHNpZ25lck9yUHJvdmlkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiY2FsbFN0YXRpY1wiLCB7fSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiZXN0aW1hdGVHYXNcIiwge30pO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImZ1bmN0aW9uc1wiLCB7fSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwicG9wdWxhdGVUcmFuc2FjdGlvblwiLCB7fSk7XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiZmlsdGVyc1wiLCB7fSk7XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUZpbHRlcnMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaW50ZXJmYWNlLmV2ZW50cykuZm9yRWFjaCgoZXZlbnRTaWduYXR1cmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudCA9IHRoaXMuaW50ZXJmYWNlLmV2ZW50c1tldmVudFNpZ25hdHVyZV07XG4gICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcy5maWx0ZXJzLCBldmVudFNpZ25hdHVyZSwgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljczogdGhpcy5pbnRlcmZhY2UuZW5jb2RlRmlsdGVyVG9waWNzKGV2ZW50LCBhcmdzKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghdW5pcXVlRmlsdGVyc1tldmVudC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICB1bmlxdWVGaWx0ZXJzW2V2ZW50Lm5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuaXF1ZUZpbHRlcnNbZXZlbnQubmFtZV0ucHVzaChldmVudFNpZ25hdHVyZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVuaXF1ZUZpbHRlcnMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWx0ZXJzID0gdW5pcXVlRmlsdGVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcy5maWx0ZXJzLCBuYW1lLCB0aGlzLmZpbHRlcnNbZmlsdGVyc1swXV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYER1cGxpY2F0ZSBkZWZpbml0aW9uIG9mICR7bmFtZX0gKCR7ZmlsdGVycy5qb2luKFwiLCBcIil9KWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiX3J1bm5pbmdFdmVudHNcIiwge30pO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcIl93cmFwcGVkRW1pdHNcIiwge30pO1xuICAgICAgICBpZiAoYWRkcmVzc09yTmFtZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBjb250cmFjdCBhZGRyZXNzIG9yIEVOUyBuYW1lXCIsIFwiYWRkcmVzc09yTmFtZVwiLCBhZGRyZXNzT3JOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImFkZHJlc3NcIiwgYWRkcmVzc09yTmFtZSk7XG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcInJlc29sdmVkQWRkcmVzc1wiLCByZXNvbHZlTmFtZSh0aGlzLnByb3ZpZGVyLCBhZGRyZXNzT3JOYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwicmVzb2x2ZWRBZGRyZXNzXCIsIFByb21pc2UucmVzb2x2ZShnZXRBZGRyZXNzKGFkZHJlc3NPck5hbWUpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBXaXRob3V0IGEgcHJvdmlkZXIsIHdlIGNhbm5vdCB1c2UgRU5TIG5hbWVzXG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93RXJyb3IoXCJwcm92aWRlciBpcyByZXF1aXJlZCB0byB1c2UgRU5TIG5hbWUgYXMgY29udHJhY3QgYWRkcmVzc1wiLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IFwibmV3IENvbnRyYWN0XCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1bmlxdWVOYW1lcyA9IHt9O1xuICAgICAgICBjb25zdCB1bmlxdWVTaWduYXR1cmVzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaW50ZXJmYWNlLmZ1bmN0aW9ucykuZm9yRWFjaCgoc2lnbmF0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMuaW50ZXJmYWNlLmZ1bmN0aW9uc1tzaWduYXR1cmVdO1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhhdCB0aGUgc2lnbmF0dXJlIGlzIHVuaXF1ZTsgaWYgbm90IHRoZSBBQkkgZ2VuZXJhdGlvbiBoYXNcbiAgICAgICAgICAgIC8vIG5vdCBiZWVuIGNsZWFuZWQgb3IgbWF5IGJlIGluY29ycmVjdGx5IGdlbmVyYXRlZFxuICAgICAgICAgICAgaWYgKHVuaXF1ZVNpZ25hdHVyZXNbc2lnbmF0dXJlXSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKGBEdXBsaWNhdGUgQUJJIGVudHJ5IGZvciAke0pTT04uc3RyaW5naWZ5KHNpZ25hdHVyZSl9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5pcXVlU2lnbmF0dXJlc1tzaWduYXR1cmVdID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFRyYWNrIHVuaXF1ZSBuYW1lczsgd2Ugb25seSBleHBvc2UgYmFyZSBuYW1lZCBmdW5jdGlvbnMgaWYgdGhleVxuICAgICAgICAgICAgLy8gYXJlIGFtYmlndW91c1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBmcmFnbWVudC5uYW1lO1xuICAgICAgICAgICAgICAgIGlmICghdW5pcXVlTmFtZXNbYCUke25hbWV9YF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlTmFtZXNbYCUke25hbWV9YF0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW5pcXVlTmFtZXNbYCUke25hbWV9YF0ucHVzaChzaWduYXR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXNbc2lnbmF0dXJlXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgc2lnbmF0dXJlLCBidWlsZERlZmF1bHQodGhpcywgZnJhZ21lbnQsIHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdlIGRvIG5vdCBjb2xsYXBzZSBzaW1wbGUgY2FsbHMgb24gdGhpcyBidWNrZXQsIHdoaWNoIGFsbG93c1xuICAgICAgICAgICAgLy8gZnJhbWV3b3JrcyB0byBzYWZlbHkgdXNlIHRoaXMgd2l0aG91dCBpbnRyb3NwZWN0aW9uIGFzIHdlbGwgYXNcbiAgICAgICAgICAgIC8vIGFsbG93cyBkZWNvZGluZyBlcnJvciByZWNvdmVyeS5cbiAgICAgICAgICAgIGlmICh0aGlzLmZ1bmN0aW9uc1tzaWduYXR1cmVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLmZ1bmN0aW9ucywgc2lnbmF0dXJlLCBidWlsZERlZmF1bHQodGhpcywgZnJhZ21lbnQsIGZhbHNlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jYWxsU3RhdGljW3NpZ25hdHVyZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMuY2FsbFN0YXRpYywgc2lnbmF0dXJlLCBidWlsZENhbGwodGhpcywgZnJhZ21lbnQsIHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvcHVsYXRlVHJhbnNhY3Rpb25bc2lnbmF0dXJlXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcy5wb3B1bGF0ZVRyYW5zYWN0aW9uLCBzaWduYXR1cmUsIGJ1aWxkUG9wdWxhdGUodGhpcywgZnJhZ21lbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVzdGltYXRlR2FzW3NpZ25hdHVyZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMuZXN0aW1hdGVHYXMsIHNpZ25hdHVyZSwgYnVpbGRFc3RpbWF0ZSh0aGlzLCBmcmFnbWVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmtleXModW5pcXVlTmFtZXMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIC8vIEFtYmlndW91cyBuYW1lcyB0byBub3QgZ2V0IGF0dGFjaGVkIGFzIGJhcmUgbmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZXMgPSB1bmlxdWVOYW1lc1tuYW1lXTtcbiAgICAgICAgICAgIGlmIChzaWduYXR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTdHJpcCBvZmYgdGhlIGxlYWRpbmcgXCIlXCIgdXNlZCBmb3IgcHJvdG90eXBlIHByb3RlY3Rpb25cbiAgICAgICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHNpZ25hdHVyZXNbMF07XG4gICAgICAgICAgICAvLyBJZiBvdmVyd3JpdGluZyBhIG1lbWJlciBwcm9wZXJ0eSB0aGF0IGlzIG51bGwsIHN3YWxsb3cgdGhlIGVycm9yXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgbmFtZSwgdGhpc1tzaWduYXR1cmVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICBpZiAodGhpcy5mdW5jdGlvbnNbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMuZnVuY3Rpb25zLCBuYW1lLCB0aGlzLmZ1bmN0aW9uc1tzaWduYXR1cmVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNhbGxTdGF0aWNbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMuY2FsbFN0YXRpYywgbmFtZSwgdGhpcy5jYWxsU3RhdGljW3NpZ25hdHVyZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9wdWxhdGVUcmFuc2FjdGlvbltuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcy5wb3B1bGF0ZVRyYW5zYWN0aW9uLCBuYW1lLCB0aGlzLnBvcHVsYXRlVHJhbnNhY3Rpb25bc2lnbmF0dXJlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lc3RpbWF0ZUdhc1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcy5lc3RpbWF0ZUdhcywgbmFtZSwgdGhpcy5lc3RpbWF0ZUdhc1tzaWduYXR1cmVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDb250cmFjdEFkZHJlc3ModHJhbnNhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGdldENvbnRyYWN0QWRkcmVzcyh0cmFuc2FjdGlvbik7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnRlcmZhY2UoY29udHJhY3RJbnRlcmZhY2UpIHtcbiAgICAgICAgaWYgKEludGVyZmFjZS5pc0ludGVyZmFjZShjb250cmFjdEludGVyZmFjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cmFjdEludGVyZmFjZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEludGVyZmFjZShjb250cmFjdEludGVyZmFjZSk7XG4gICAgfVxuICAgIC8vIEBUT0RPOiBBbGxvdyB0aW1lb3V0P1xuICAgIGRlcGxveWVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVwbG95ZWQoKTtcbiAgICB9XG4gICAgX2RlcGxveWVkKGJsb2NrVGFnKSB7XG4gICAgICAgIGlmICghdGhpcy5fZGVwbG95ZWRQcm9taXNlKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSB3ZXJlIGp1c3QgZGVwbG95ZWQsIHdlIGtub3cgdGhlIHRyYW5zYWN0aW9uIHdlIHNob3VsZCBvY2N1ciBpblxuICAgICAgICAgICAgaWYgKHRoaXMuZGVwbG95VHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kZXBsb3llZFByb21pc2UgPSB0aGlzLmRlcGxveVRyYW5zYWN0aW9uLndhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBAVE9ETzogT25jZSB3ZSBhbGxvdyBhIHRpbWVvdXQgdG8gYmUgcGFzc2VkIGluLCB3ZSB3aWxsIHdhaXRcbiAgICAgICAgICAgICAgICAvLyB1cCB0byB0aGF0IG1hbnkgYmxvY2tzIGZvciBnZXRDb2RlXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBwb2xsIGZvciBvdXIgY29kZSB0byBiZSBkZXBsb3llZFxuICAgICAgICAgICAgICAgIHRoaXMuX2RlcGxveWVkUHJvbWlzZSA9IHRoaXMucHJvdmlkZXIuZ2V0Q29kZSh0aGlzLmFkZHJlc3MsIGJsb2NrVGFnKS50aGVuKChjb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2RlID09PSBcIjB4XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiY29udHJhY3Qgbm90IGRlcGxveWVkXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJhY3RBZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uOiBcImdldERlcGxveWVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXBsb3llZFByb21pc2U7XG4gICAgfVxuICAgIC8vIEBUT0RPOlxuICAgIC8vIGVzdGltYXRlRmFsbGJhY2sob3ZlcnJpZGVzPzogVHJhbnNhY3Rpb25SZXF1ZXN0KTogUHJvbWlzZTxCaWdOdW1iZXI+XG4gICAgLy8gQFRPRE86XG4gICAgLy8gZXN0aW1hdGVEZXBsb3koYnl0ZWNvZGU6IHN0cmluZywgLi4uYXJncyk6IFByb21pc2U8QmlnTnVtYmVyPlxuICAgIGZhbGxiYWNrKG92ZXJyaWRlcykge1xuICAgICAgICBpZiAoIXRoaXMuc2lnbmVyKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcInNlbmRpbmcgYSB0cmFuc2FjdGlvbnMgcmVxdWlyZSBhIHNpZ25lclwiLCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwgeyBvcGVyYXRpb246IFwic2VuZFRyYW5zYWN0aW9uKGZhbGxiYWNrKVwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHR4ID0gc2hhbGxvd0NvcHkob3ZlcnJpZGVzIHx8IHt9KTtcbiAgICAgICAgW1wiZnJvbVwiLCBcInRvXCJdLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR4W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiY2Fubm90IG92ZXJyaWRlIFwiICsga2V5LCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwgeyBvcGVyYXRpb246IGtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHR4LnRvID0gdGhpcy5yZXNvbHZlZEFkZHJlc3M7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveWVkKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduZXIuc2VuZFRyYW5zYWN0aW9uKHR4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFJlY29ubmVjdCB0byBhIGRpZmZlcmVudCBzaWduZXIgb3IgcHJvdmlkZXJcbiAgICBjb25uZWN0KHNpZ25lck9yUHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoc2lnbmVyT3JQcm92aWRlcikgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHNpZ25lck9yUHJvdmlkZXIgPSBuZXcgVm9pZFNpZ25lcihzaWduZXJPclByb3ZpZGVyLCB0aGlzLnByb3ZpZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy5hZGRyZXNzLCB0aGlzLmludGVyZmFjZSwgc2lnbmVyT3JQcm92aWRlcik7XG4gICAgICAgIGlmICh0aGlzLmRlcGxveVRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICBkZWZpbmVSZWFkT25seShjb250cmFjdCwgXCJkZXBsb3lUcmFuc2FjdGlvblwiLCB0aGlzLmRlcGxveVRyYW5zYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udHJhY3Q7XG4gICAgfVxuICAgIC8vIFJlLWF0dGFjaCB0byBhIGRpZmZlcmVudCBvbi1jaGFpbiBpbnN0YW5jZSBvZiB0aGlzIGNvbnRyYWN0XG4gICAgYXR0YWNoKGFkZHJlc3NPck5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoYWRkcmVzc09yTmFtZSwgdGhpcy5pbnRlcmZhY2UsIHRoaXMuc2lnbmVyIHx8IHRoaXMucHJvdmlkZXIpO1xuICAgIH1cbiAgICBzdGF0aWMgaXNJbmRleGVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBJbmRleGVkLmlzSW5kZXhlZCh2YWx1ZSk7XG4gICAgfVxuICAgIF9ub3JtYWxpemVSdW5uaW5nRXZlbnQocnVubmluZ0V2ZW50KSB7XG4gICAgICAgIC8vIEFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZSBvZiB0aGlzIGV2ZW50IHJ1bm5pbmc7IHdlIGNhbiByZS11c2UgaXRcbiAgICAgICAgaWYgKHRoaXMuX3J1bm5pbmdFdmVudHNbcnVubmluZ0V2ZW50LnRhZ10pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ydW5uaW5nRXZlbnRzW3J1bm5pbmdFdmVudC50YWddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBydW5uaW5nRXZlbnQ7XG4gICAgfVxuICAgIF9nZXRSdW5uaW5nRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGV2ZW50TmFtZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgXCJlcnJvclwiIGV2ZW50cyAoaWYgeW91ciBjb250cmFjdCBoYXMgYW4gZXJyb3IgZXZlbnQsIGluY2x1ZGVcbiAgICAgICAgICAgIC8vIHRoZSBmdWxsIHNpZ25hdHVyZSB0byBieXBhc3MgdGhpcyBzcGVjaWFsIGV2ZW50IGtleXdvcmQpXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplUnVubmluZ0V2ZW50KG5ldyBFcnJvclJ1bm5pbmdFdmVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpc3RlbiBmb3IgYW55IGV2ZW50IHRoYXQgaXMgcmVnaXN0ZXJlZFxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gXCJldmVudFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZVJ1bm5pbmdFdmVudChuZXcgUnVubmluZ0V2ZW50KFwiZXZlbnRcIiwgbnVsbCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGlzdGVuIGZvciBhbnkgZXZlbnRcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZVJ1bm5pbmdFdmVudChuZXcgV2lsZGNhcmRSdW5uaW5nRXZlbnQodGhpcy5hZGRyZXNzLCB0aGlzLmludGVyZmFjZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gR2V0IHRoZSBldmVudCBGcmFnbWVudCAodGhyb3dzIGlmIGFtYmlndW91cy91bmtub3duIGV2ZW50KVxuICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLmludGVyZmFjZS5nZXRFdmVudChldmVudE5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZVJ1bm5pbmdFdmVudChuZXcgRnJhZ21lbnRSdW5uaW5nRXZlbnQodGhpcy5hZGRyZXNzLCB0aGlzLmludGVyZmFjZSwgZnJhZ21lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBoYXZlIHRvcGljcyB0byBmaWx0ZXIgYnkuLi5cbiAgICAgICAgaWYgKGV2ZW50TmFtZS50b3BpY3MgJiYgZXZlbnROYW1lLnRvcGljcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBJcyBpdCBhIGtub3duIHRvcGljaGFzaD8gKHRocm93cyBpZiBubyBtYXRjaGluZyB0b3BpY2hhc2gpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcGljID0gZXZlbnROYW1lLnRvcGljc1swXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0b3BpYykgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCB0b3BpY1wiKTsgLy8gQFRPRE86IE1heSBoYXBwZW4gZm9yIGFub255bW91cyBldmVudHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLmludGVyZmFjZS5nZXRFdmVudCh0b3BpYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vcm1hbGl6ZVJ1bm5pbmdFdmVudChuZXcgRnJhZ21lbnRSdW5uaW5nRXZlbnQodGhpcy5hZGRyZXNzLCB0aGlzLmludGVyZmFjZSwgZnJhZ21lbnQsIGV2ZW50TmFtZS50b3BpY3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikgeyB9XG4gICAgICAgICAgICAvLyBGaWx0ZXIgYnkgdGhlIHVua25vd24gdG9waWNoYXNoXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXIgPSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIHRvcGljczogZXZlbnROYW1lLnRvcGljc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub3JtYWxpemVSdW5uaW5nRXZlbnQobmV3IFJ1bm5pbmdFdmVudChnZXRFdmVudFRhZyhmaWx0ZXIpLCBmaWx0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbm9ybWFsaXplUnVubmluZ0V2ZW50KG5ldyBXaWxkY2FyZFJ1bm5pbmdFdmVudCh0aGlzLmFkZHJlc3MsIHRoaXMuaW50ZXJmYWNlKSk7XG4gICAgfVxuICAgIF9jaGVja1J1bm5pbmdFdmVudHMocnVubmluZ0V2ZW50KSB7XG4gICAgICAgIGlmIChydW5uaW5nRXZlbnQubGlzdGVuZXJDb3VudCgpID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcnVubmluZ0V2ZW50c1tydW5uaW5nRXZlbnQudGFnXTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBwb2xsZXIgZm9yIHRoaXMsIHJlbW92ZSBpdFxuICAgICAgICAgICAgY29uc3QgZW1pdCA9IHRoaXMuX3dyYXBwZWRFbWl0c1tydW5uaW5nRXZlbnQudGFnXTtcbiAgICAgICAgICAgIGlmIChlbWl0ICYmIHJ1bm5pbmdFdmVudC5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyLm9mZihydW5uaW5nRXZlbnQuZmlsdGVyLCBlbWl0KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fd3JhcHBlZEVtaXRzW3J1bm5pbmdFdmVudC50YWddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFN1YmNsYXNzZXMgY2FuIG92ZXJyaWRlIHRoaXMgdG8gZ3JhY2VmdWxseSByZWNvdmVyXG4gICAgLy8gZnJvbSBwYXJzZSBlcnJvcnMgaWYgdGhleSB3aXNoXG4gICAgX3dyYXBFdmVudChydW5uaW5nRXZlbnQsIGxvZywgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBkZWVwQ29weShsb2cpO1xuICAgICAgICBldmVudC5yZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBydW5uaW5nRXZlbnQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5fY2hlY2tSdW5uaW5nRXZlbnRzKHJ1bm5pbmdFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIGV2ZW50LmdldEJsb2NrID0gKCkgPT4geyByZXR1cm4gdGhpcy5wcm92aWRlci5nZXRCbG9jayhsb2cuYmxvY2tIYXNoKTsgfTtcbiAgICAgICAgZXZlbnQuZ2V0VHJhbnNhY3Rpb24gPSAoKSA9PiB7IHJldHVybiB0aGlzLnByb3ZpZGVyLmdldFRyYW5zYWN0aW9uKGxvZy50cmFuc2FjdGlvbkhhc2gpOyB9O1xuICAgICAgICBldmVudC5nZXRUcmFuc2FjdGlvblJlY2VpcHQgPSAoKSA9PiB7IHJldHVybiB0aGlzLnByb3ZpZGVyLmdldFRyYW5zYWN0aW9uUmVjZWlwdChsb2cudHJhbnNhY3Rpb25IYXNoKTsgfTtcbiAgICAgICAgLy8gVGhpcyBtYXkgdGhyb3cgaWYgdGhlIHRvcGljcyBhbmQgZGF0YSBtaXNtYXRjaCB0aGUgc2lnbmF0dXJlXG4gICAgICAgIHJ1bm5pbmdFdmVudC5wcmVwYXJlRXZlbnQoZXZlbnQpO1xuICAgICAgICByZXR1cm4gZXZlbnQ7XG4gICAgfVxuICAgIF9hZGRFdmVudExpc3RlbmVyKHJ1bm5pbmdFdmVudCwgbGlzdGVuZXIsIG9uY2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcImV2ZW50cyByZXF1aXJlIGEgcHJvdmlkZXIgb3IgYSBzaWduZXIgd2l0aCBhIHByb3ZpZGVyXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7IG9wZXJhdGlvbjogXCJvbmNlXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcnVubmluZ0V2ZW50LmFkZExpc3RlbmVyKGxpc3RlbmVyLCBvbmNlKTtcbiAgICAgICAgLy8gVHJhY2sgdGhpcyBydW5uaW5nIGV2ZW50IGFuZCBpdHMgbGlzdGVuZXJzIChtYXkgYWxyZWFkeSBiZSB0aGVyZTsgYnV0IG5vIGhhcmQgaW4gdXBkYXRpbmcpXG4gICAgICAgIHRoaXMuX3J1bm5pbmdFdmVudHNbcnVubmluZ0V2ZW50LnRhZ10gPSBydW5uaW5nRXZlbnQ7XG4gICAgICAgIC8vIElmIHdlIGFyZSBub3QgcG9sbGluZyB0aGUgcHJvdmlkZXIsIHN0YXJ0IHBvbGxpbmdcbiAgICAgICAgaWYgKCF0aGlzLl93cmFwcGVkRW1pdHNbcnVubmluZ0V2ZW50LnRhZ10pIHtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRFbWl0ID0gKGxvZykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IHRoaXMuX3dyYXBFdmVudChydW5uaW5nRXZlbnQsIGxvZywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIC8vIFRyeSB0byBlbWl0IHRoZSByZXN1bHQgZm9yIHRoZSBwYXJhbWV0ZXJpemVkIGV2ZW50Li4uXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRlY29kZUVycm9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBydW5uaW5nRXZlbnQuZ2V0RW1pdChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQocnVubmluZ0V2ZW50LmZpbHRlciwgLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5kZWNvZGVFcnJvciA9IGVycm9yLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEFsd2F5cyBlbWl0IFwiZXZlbnRcIiBmb3IgZnJhZ21lbnQtYmFzZSBldmVudHNcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ0V2ZW50LmZpbHRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdChcImV2ZW50XCIsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRW1pdCBcImVycm9yXCIgaWYgdGhlcmUgd2FzIGFuIGVycm9yXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRlY29kZUVycm9yICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KFwiZXJyb3JcIiwgZXZlbnQuZGVjb2RlRXJyb3IsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5fd3JhcHBlZEVtaXRzW3J1bm5pbmdFdmVudC50YWddID0gd3JhcHBlZEVtaXQ7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGV2ZW50cywgbGlrZSBcImVycm9yXCIgZG8gbm90IGhhdmUgYSBmaWx0ZXJcbiAgICAgICAgICAgIGlmIChydW5uaW5nRXZlbnQuZmlsdGVyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3ZpZGVyLm9uKHJ1bm5pbmdFdmVudC5maWx0ZXIsIHdyYXBwZWRFbWl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWVyeUZpbHRlcihldmVudCwgZnJvbUJsb2NrT3JCbG9ja2hhc2gsIHRvQmxvY2spIHtcbiAgICAgICAgY29uc3QgcnVubmluZ0V2ZW50ID0gdGhpcy5fZ2V0UnVubmluZ0V2ZW50KGV2ZW50KTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0gc2hhbGxvd0NvcHkocnVubmluZ0V2ZW50LmZpbHRlcik7XG4gICAgICAgIGlmICh0eXBlb2YgKGZyb21CbG9ja09yQmxvY2toYXNoKSA9PT0gXCJzdHJpbmdcIiAmJiBpc0hleFN0cmluZyhmcm9tQmxvY2tPckJsb2NraGFzaCwgMzIpKSB7XG4gICAgICAgICAgICBpZiAodG9CbG9jayAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLnRocm93QXJndW1lbnRFcnJvcihcImNhbm5vdCBzcGVjaWZ5IHRvQmxvY2sgd2l0aCBibG9ja2hhc2hcIiwgXCJ0b0Jsb2NrXCIsIHRvQmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlsdGVyLmJsb2NrSGFzaCA9IGZyb21CbG9ja09yQmxvY2toYXNoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyLmZyb21CbG9jayA9ICgoZnJvbUJsb2NrT3JCbG9ja2hhc2ggIT0gbnVsbCkgPyBmcm9tQmxvY2tPckJsb2NraGFzaCA6IDApO1xuICAgICAgICAgICAgZmlsdGVyLnRvQmxvY2sgPSAoKHRvQmxvY2sgIT0gbnVsbCkgPyB0b0Jsb2NrIDogXCJsYXRlc3RcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXIuZ2V0TG9ncyhmaWx0ZXIpLnRoZW4oKGxvZ3MpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsb2dzLm1hcCgobG9nKSA9PiB0aGlzLl93cmFwRXZlbnQocnVubmluZ0V2ZW50LCBsb2csIG51bGwpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKHRoaXMuX2dldFJ1bm5pbmdFdmVudChldmVudCksIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVyKHRoaXMuX2dldFJ1bm5pbmdFdmVudChldmVudCksIGxpc3RlbmVyLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm92aWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bm5pbmdFdmVudCA9IHRoaXMuX2dldFJ1bm5pbmdFdmVudChldmVudE5hbWUpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSAocnVubmluZ0V2ZW50LnJ1bihhcmdzKSA+IDApO1xuICAgICAgICAvLyBNYXkgaGF2ZSBkcmFpbmVkIGFsbCB0aGUgXCJvbmNlXCIgZXZlbnRzOyBjaGVjayBmb3IgbGl2aW5nIGV2ZW50c1xuICAgICAgICB0aGlzLl9jaGVja1J1bm5pbmdFdmVudHMocnVubmluZ0V2ZW50KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgbGlzdGVuZXJDb3VudChldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9ydW5uaW5nRXZlbnRzKS5yZWR1Y2UoKGFjY3VtLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjdW0gKyB0aGlzLl9ydW5uaW5nRXZlbnRzW2tleV0ubGlzdGVuZXJDb3VudCgpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFJ1bm5pbmdFdmVudChldmVudE5hbWUpLmxpc3RlbmVyQ291bnQoKTtcbiAgICB9XG4gICAgbGlzdGVuZXJzKGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgdGFnIGluIHRoaXMuX3J1bm5pbmdFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ydW5uaW5nRXZlbnRzW3RhZ10ubGlzdGVuZXJzKCkuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UnVubmluZ0V2ZW50KGV2ZW50TmFtZSkubGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHJlbW92ZUFsbExpc3RlbmVycyhldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnROYW1lID09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFnIGluIHRoaXMuX3J1bm5pbmdFdmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBydW5uaW5nRXZlbnQgPSB0aGlzLl9ydW5uaW5nRXZlbnRzW3RhZ107XG4gICAgICAgICAgICAgICAgcnVubmluZ0V2ZW50LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoZWNrUnVubmluZ0V2ZW50cyhydW5uaW5nRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVsZXRlIGFueSBsaXN0ZW5lcnNcbiAgICAgICAgY29uc3QgcnVubmluZ0V2ZW50ID0gdGhpcy5fZ2V0UnVubmluZ0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIHJ1bm5pbmdFdmVudC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fY2hlY2tSdW5uaW5nRXZlbnRzKHJ1bm5pbmdFdmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvZmYoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMucHJvdmlkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bm5pbmdFdmVudCA9IHRoaXMuX2dldFJ1bm5pbmdFdmVudChldmVudE5hbWUpO1xuICAgICAgICBydW5uaW5nRXZlbnQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB0aGlzLl9jaGVja1J1bm5pbmdFdmVudHMocnVubmluZ0V2ZW50KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250cmFjdCBleHRlbmRzIEJhc2VDb250cmFjdCB7XG59XG5leHBvcnQgY2xhc3MgQ29udHJhY3RGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250cmFjdEludGVyZmFjZSwgYnl0ZWNvZGUsIHNpZ25lcikge1xuICAgICAgICBsZXQgYnl0ZWNvZGVIZXggPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIChieXRlY29kZSkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGJ5dGVjb2RlSGV4ID0gYnl0ZWNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNCeXRlcyhieXRlY29kZSkpIHtcbiAgICAgICAgICAgIGJ5dGVjb2RlSGV4ID0gaGV4bGlmeShieXRlY29kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYnl0ZWNvZGUgJiYgdHlwZW9mIChieXRlY29kZS5vYmplY3QpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgYnl0ZWNvZGUgb2JqZWN0IGZyb20gdGhlIFNvbGlkaXR5IGNvbXBpbGVyXG4gICAgICAgICAgICBieXRlY29kZUhleCA9IGJ5dGVjb2RlLm9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIENyYXNoIGluIHRoZSBuZXh0IHZlcmlmaWNhdGlvbiBzdGVwXG4gICAgICAgICAgICBieXRlY29kZUhleCA9IFwiIVwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBpdCBpcyAweCBwcmVmaXhlZFxuICAgICAgICBpZiAoYnl0ZWNvZGVIZXguc3Vic3RyaW5nKDAsIDIpICE9PSBcIjB4XCIpIHtcbiAgICAgICAgICAgIGJ5dGVjb2RlSGV4ID0gXCIweFwiICsgYnl0ZWNvZGVIZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBmaW5hbCByZXN1bHQgaXMgdmFsaWQgYnl0ZWNvZGVcbiAgICAgICAgaWYgKCFpc0hleFN0cmluZyhieXRlY29kZUhleCkgfHwgKGJ5dGVjb2RlSGV4Lmxlbmd0aCAlIDIpKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dBcmd1bWVudEVycm9yKFwiaW52YWxpZCBieXRlY29kZVwiLCBcImJ5dGVjb2RlXCIsIGJ5dGVjb2RlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgc2lnbmVyLCBtYWtlIHN1cmUgaXQgaXMgdmFsaWRcbiAgICAgICAgaWYgKHNpZ25lciAmJiAhU2lnbmVyLmlzU2lnbmVyKHNpZ25lcikpIHtcbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0FyZ3VtZW50RXJyb3IoXCJpbnZhbGlkIHNpZ25lclwiLCBcInNpZ25lclwiLCBzaWduZXIpO1xuICAgICAgICB9XG4gICAgICAgIGRlZmluZVJlYWRPbmx5KHRoaXMsIFwiYnl0ZWNvZGVcIiwgYnl0ZWNvZGVIZXgpO1xuICAgICAgICBkZWZpbmVSZWFkT25seSh0aGlzLCBcImludGVyZmFjZVwiLCBnZXRTdGF0aWMobmV3LnRhcmdldCwgXCJnZXRJbnRlcmZhY2VcIikoY29udHJhY3RJbnRlcmZhY2UpKTtcbiAgICAgICAgZGVmaW5lUmVhZE9ubHkodGhpcywgXCJzaWduZXJcIiwgc2lnbmVyIHx8IG51bGwpO1xuICAgIH1cbiAgICAvLyBAVE9ETzogRnV0dXJlOyByZW5hbWUgdG8gcG9wdWxhdGVUcmFuc2FjdGlvbj9cbiAgICBnZXREZXBsb3lUcmFuc2FjdGlvbiguLi5hcmdzKSB7XG4gICAgICAgIGxldCB0eCA9IHt9O1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIDEgYWRkaXRpb25hbCBhcmd1bWVudCwgd2UgYWxsb3cgdHJhbnNhY3Rpb24gb3ZlcnJpZGVzXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gdGhpcy5pbnRlcmZhY2UuZGVwbG95LmlucHV0cy5sZW5ndGggKyAxICYmIHR5cGVvZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdHggPSBzaGFsbG93Q29weShhcmdzLnBvcCgpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHR4KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbGxvd2VkVHJhbnNhY3Rpb25LZXlzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0cmFuc2FjdGlvbiBvdmVycmlkZSBcIiArIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERvIG5vdCBhbGxvdyB0aGVzZSB0byBiZSBvdmVycmlkZGVuIGluIGEgZGVwbG95bWVudCB0cmFuc2FjdGlvblxuICAgICAgICBbXCJkYXRhXCIsIFwiZnJvbVwiLCBcInRvXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR4W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwiY2Fubm90IG92ZXJyaWRlIFwiICsga2V5LCBMb2dnZXIuZXJyb3JzLlVOU1VQUE9SVEVEX09QRVJBVElPTiwgeyBvcGVyYXRpb246IGtleSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0eC52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBCaWdOdW1iZXIuZnJvbSh0eC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoIXZhbHVlLmlzWmVybygpICYmICF0aGlzLmludGVyZmFjZS5kZXBsb3kucGF5YWJsZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci50aHJvd0Vycm9yKFwibm9uLXBheWFibGUgY29uc3RydWN0b3IgY2Fubm90IG92ZXJyaWRlIHZhbHVlXCIsIExvZ2dlci5lcnJvcnMuVU5TVVBQT1JURURfT1BFUkFUSU9OLCB7XG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbjogXCJvdmVycmlkZXMudmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR4LnZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gTWFrZSBzdXJlIHRoZSBjYWxsIG1hdGNoZXMgdGhlIGNvbnN0cnVjdG9yIHNpZ25hdHVyZVxuICAgICAgICBsb2dnZXIuY2hlY2tBcmd1bWVudENvdW50KGFyZ3MubGVuZ3RoLCB0aGlzLmludGVyZmFjZS5kZXBsb3kuaW5wdXRzLmxlbmd0aCwgXCIgaW4gQ29udHJhY3QgY29uc3RydWN0b3JcIik7XG4gICAgICAgIC8vIFNldCB0aGUgZGF0YSB0byB0aGUgYnl0ZWNvZGUgKyB0aGUgZW5jb2RlZCBjb25zdHJ1Y3RvciBhcmd1bWVudHNcbiAgICAgICAgdHguZGF0YSA9IGhleGxpZnkoY29uY2F0KFtcbiAgICAgICAgICAgIHRoaXMuYnl0ZWNvZGUsXG4gICAgICAgICAgICB0aGlzLmludGVyZmFjZS5lbmNvZGVEZXBsb3koYXJncylcbiAgICAgICAgXSkpO1xuICAgICAgICByZXR1cm4gdHg7XG4gICAgfVxuICAgIGRlcGxveSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBsZXQgb3ZlcnJpZGVzID0ge307XG4gICAgICAgICAgICAvLyBJZiAxIGV4dHJhIHBhcmFtZXRlciB3YXMgcGFzc2VkIGluLCBpdCBjb250YWlucyBvdmVycmlkZXNcbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gdGhpcy5pbnRlcmZhY2UuZGVwbG95LmlucHV0cy5sZW5ndGggKyAxKSB7XG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVzID0gYXJncy5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgY2FsbCBtYXRjaGVzIHRoZSBjb25zdHJ1Y3RvciBzaWduYXR1cmVcbiAgICAgICAgICAgIGxvZ2dlci5jaGVja0FyZ3VtZW50Q291bnQoYXJncy5sZW5ndGgsIHRoaXMuaW50ZXJmYWNlLmRlcGxveS5pbnB1dHMubGVuZ3RoLCBcIiBpbiBDb250cmFjdCBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgRU5TIG5hbWVzIGFuZCBwcm9taXNlcyBpbiB0aGUgYXJndW1lbnRzXG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB5aWVsZCByZXNvbHZlQWRkcmVzc2VzKHRoaXMuc2lnbmVyLCBhcmdzLCB0aGlzLmludGVyZmFjZS5kZXBsb3kuaW5wdXRzKTtcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKG92ZXJyaWRlcyk7XG4gICAgICAgICAgICAvLyBHZXQgdGhlIGRlcGxveW1lbnQgdHJhbnNhY3Rpb24gKHdpdGggb3B0aW9uYWwgb3ZlcnJpZGVzKVxuICAgICAgICAgICAgY29uc3QgdW5zaWduZWRUeCA9IHRoaXMuZ2V0RGVwbG95VHJhbnNhY3Rpb24oLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIC8vIFNlbmQgdGhlIGRlcGxveW1lbnQgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHR4ID0geWllbGQgdGhpcy5zaWduZXIuc2VuZFRyYW5zYWN0aW9uKHVuc2lnbmVkVHgpO1xuICAgICAgICAgICAgY29uc3QgYWRkcmVzcyA9IGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImdldENvbnRyYWN0QWRkcmVzc1wiKSh0eCk7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGdldFN0YXRpYyh0aGlzLmNvbnN0cnVjdG9yLCBcImdldENvbnRyYWN0XCIpKGFkZHJlc3MsIHRoaXMuaW50ZXJmYWNlLCB0aGlzLnNpZ25lcik7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIG1vZGlmaWVkIHdhaXQgdGhhdCB3cmFwcyBldmVudHNcbiAgICAgICAgICAgIGFkZENvbnRyYWN0V2FpdChjb250cmFjdCwgdHgpO1xuICAgICAgICAgICAgZGVmaW5lUmVhZE9ubHkoY29udHJhY3QsIFwiZGVwbG95VHJhbnNhY3Rpb25cIiwgdHgpO1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyYWN0O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXR0YWNoKGFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbnN0cnVjdG9yKS5nZXRDb250cmFjdChhZGRyZXNzLCB0aGlzLmludGVyZmFjZSwgdGhpcy5zaWduZXIpO1xuICAgIH1cbiAgICBjb25uZWN0KHNpZ25lcikge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLmludGVyZmFjZSwgdGhpcy5ieXRlY29kZSwgc2lnbmVyKTtcbiAgICB9XG4gICAgc3RhdGljIGZyb21Tb2xpZGl0eShjb21waWxlck91dHB1dCwgc2lnbmVyKSB7XG4gICAgICAgIGlmIChjb21waWxlck91dHB1dCA9PSBudWxsKSB7XG4gICAgICAgICAgICBsb2dnZXIudGhyb3dFcnJvcihcIm1pc3NpbmcgY29tcGlsZXIgb3V0cHV0XCIsIExvZ2dlci5lcnJvcnMuTUlTU0lOR19BUkdVTUVOVCwgeyBhcmd1bWVudDogXCJjb21waWxlck91dHB1dFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgKGNvbXBpbGVyT3V0cHV0KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgY29tcGlsZXJPdXRwdXQgPSBKU09OLnBhcnNlKGNvbXBpbGVyT3V0cHV0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhYmkgPSBjb21waWxlck91dHB1dC5hYmk7XG4gICAgICAgIGxldCBieXRlY29kZSA9IG51bGw7XG4gICAgICAgIGlmIChjb21waWxlck91dHB1dC5ieXRlY29kZSkge1xuICAgICAgICAgICAgYnl0ZWNvZGUgPSBjb21waWxlck91dHB1dC5ieXRlY29kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21waWxlck91dHB1dC5ldm0gJiYgY29tcGlsZXJPdXRwdXQuZXZtLmJ5dGVjb2RlKSB7XG4gICAgICAgICAgICBieXRlY29kZSA9IGNvbXBpbGVyT3V0cHV0LmV2bS5ieXRlY29kZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IHRoaXMoYWJpLCBieXRlY29kZSwgc2lnbmVyKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEludGVyZmFjZShjb250cmFjdEludGVyZmFjZSkge1xuICAgICAgICByZXR1cm4gQ29udHJhY3QuZ2V0SW50ZXJmYWNlKGNvbnRyYWN0SW50ZXJmYWNlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldENvbnRyYWN0QWRkcmVzcyh0eCkge1xuICAgICAgICByZXR1cm4gZ2V0Q29udHJhY3RBZGRyZXNzKHR4KTtcbiAgICB9XG4gICAgc3RhdGljIGdldENvbnRyYWN0KGFkZHJlc3MsIGNvbnRyYWN0SW50ZXJmYWNlLCBzaWduZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBjb250cmFjdEludGVyZmFjZSwgc2lnbmVyKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuXG5pbXBvcnQgZXJjNzIxIGZyb20gJy4uL2NvbnRyYWN0cy9kZXBsb3ltZW50cy90ZXN0bmV0X2F1cm9yYS9BdXJvcmFFUkM3MjEuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVSQzcyMVNpbmdsZXRvbihzaWduZXIpIHtcblx0aWYgKCFFUkM3MjFTaW5nbGV0b24uX2luc3RhbmNlKSB7XG5cdFx0RVJDNzIxU2luZ2xldG9uLl9pbnN0YW5jZSA9IG5ldyBldGhlcnMuQ29udHJhY3QoXG5cdFx0XHRlcmM3MjEuYWRkcmVzcyxcblx0XHRcdGVyYzcyMS5hYmksXG5cdFx0XHRzaWduZXJcblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIEVSQzcyMVNpbmdsZXRvbi5faW5zdGFuY2U7XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiOWZmZmY3N2E2N2ZmZjRlY2ZjZTFcIjsgfSJdLCJuYW1lcyI6WyJldGhlcnMiLCJlcmM3MjEiLCJFUkM3MjFTaW5nbGV0b24iLCJzaWduZXIiLCJfaW5zdGFuY2UiLCJDb250cmFjdCIsImFkZHJlc3MiLCJhYmkiXSwic291cmNlUm9vdCI6IiJ9