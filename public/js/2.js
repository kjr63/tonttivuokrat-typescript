(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/geotiff/dist-module/compression/basedecoder.js":
/*!*********************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/basedecoder.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseDecoder; });\n/* harmony import */ var _predictor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predictor.js */ \"./node_modules/geotiff/dist-module/predictor.js\");\n\n\nclass BaseDecoder {\n  async decode(fileDirectory, buffer) {\n    const decoded = await this.decodeBlock(buffer);\n    const predictor = fileDirectory.Predictor || 1;\n    if (predictor !== 1) {\n      const isTiled = !fileDirectory.StripOffsets;\n      const tileWidth = isTiled ? fileDirectory.TileWidth : fileDirectory.ImageWidth;\n      const tileHeight = isTiled ? fileDirectory.TileLength : (\n        fileDirectory.RowsPerStrip || fileDirectory.ImageLength\n      );\n      return Object(_predictor_js__WEBPACK_IMPORTED_MODULE_0__[\"applyPredictor\"])(\n        decoded, predictor, tileWidth, tileHeight, fileDirectory.BitsPerSample,\n        fileDirectory.PlanarConfiguration,\n      );\n    }\n    return decoded;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9iYXNlZGVjb2Rlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZW90aWZmL2Rpc3QtbW9kdWxlL2NvbXByZXNzaW9uL2Jhc2VkZWNvZGVyLmpzP2IzZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlQcmVkaWN0b3IgfSBmcm9tICcuLi9wcmVkaWN0b3IuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlRGVjb2RlciB7XG4gIGFzeW5jIGRlY29kZShmaWxlRGlyZWN0b3J5LCBidWZmZXIpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgdGhpcy5kZWNvZGVCbG9jayhidWZmZXIpO1xuICAgIGNvbnN0IHByZWRpY3RvciA9IGZpbGVEaXJlY3RvcnkuUHJlZGljdG9yIHx8IDE7XG4gICAgaWYgKHByZWRpY3RvciAhPT0gMSkge1xuICAgICAgY29uc3QgaXNUaWxlZCA9ICFmaWxlRGlyZWN0b3J5LlN0cmlwT2Zmc2V0cztcbiAgICAgIGNvbnN0IHRpbGVXaWR0aCA9IGlzVGlsZWQgPyBmaWxlRGlyZWN0b3J5LlRpbGVXaWR0aCA6IGZpbGVEaXJlY3RvcnkuSW1hZ2VXaWR0aDtcbiAgICAgIGNvbnN0IHRpbGVIZWlnaHQgPSBpc1RpbGVkID8gZmlsZURpcmVjdG9yeS5UaWxlTGVuZ3RoIDogKFxuICAgICAgICBmaWxlRGlyZWN0b3J5LlJvd3NQZXJTdHJpcCB8fCBmaWxlRGlyZWN0b3J5LkltYWdlTGVuZ3RoXG4gICAgICApO1xuICAgICAgcmV0dXJuIGFwcGx5UHJlZGljdG9yKFxuICAgICAgICBkZWNvZGVkLCBwcmVkaWN0b3IsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCwgZmlsZURpcmVjdG9yeS5CaXRzUGVyU2FtcGxlLFxuICAgICAgICBmaWxlRGlyZWN0b3J5LlBsYW5hckNvbmZpZ3VyYXRpb24sXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/geotiff/dist-module/compression/basedecoder.js\n");

/***/ }),

/***/ "./node_modules/geotiff/dist-module/compression/lzw.js":
/*!*************************************************************!*\
  !*** ./node_modules/geotiff/dist-module/compression/lzw.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LZWDecoder; });\n/* harmony import */ var _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder.js */ \"./node_modules/geotiff/dist-module/compression/basedecoder.js\");\n\n\nconst MIN_BITS = 9;\nconst CLEAR_CODE = 256; // clear code\nconst EOI_CODE = 257; // end of information\nconst MAX_BYTELENGTH = 12;\n\nfunction getByte(array, position, length) {\n  const d = position % 8;\n  const a = Math.floor(position / 8);\n  const de = 8 - d;\n  const ef = (position + length) - ((a + 1) * 8);\n  let fg = (8 * (a + 2)) - (position + length);\n  const dg = ((a + 2) * 8) - position;\n  fg = Math.max(0, fg);\n  if (a >= array.length) {\n    console.warn('ran off the end of the buffer before finding EOI_CODE (end on input code)');\n    return EOI_CODE;\n  }\n  let chunk1 = array[a] & ((2 ** (8 - d)) - 1);\n  chunk1 <<= (length - de);\n  let chunks = chunk1;\n  if (a + 1 < array.length) {\n    let chunk2 = array[a + 1] >>> fg;\n    chunk2 <<= Math.max(0, (length - dg));\n    chunks += chunk2;\n  }\n  if (ef > 8 && a + 2 < array.length) {\n    const hi = ((a + 3) * 8) - (position + length);\n    const chunk3 = array[a + 2] >>> hi;\n    chunks += chunk3;\n  }\n  return chunks;\n}\n\nfunction appendReversed(dest, source) {\n  for (let i = source.length - 1; i >= 0; i--) {\n    dest.push(source[i]);\n  }\n  return dest;\n}\n\nfunction decompress(input) {\n  const dictionaryIndex = new Uint16Array(4093);\n  const dictionaryChar = new Uint8Array(4093);\n  for (let i = 0; i <= 257; i++) {\n    dictionaryIndex[i] = 4096;\n    dictionaryChar[i] = i;\n  }\n  let dictionaryLength = 258;\n  let byteLength = MIN_BITS;\n  let position = 0;\n\n  function initDictionary() {\n    dictionaryLength = 258;\n    byteLength = MIN_BITS;\n  }\n  function getNext(array) {\n    const byte = getByte(array, position, byteLength);\n    position += byteLength;\n    return byte;\n  }\n  function addToDictionary(i, c) {\n    dictionaryChar[dictionaryLength] = c;\n    dictionaryIndex[dictionaryLength] = i;\n    dictionaryLength++;\n    return dictionaryLength - 1;\n  }\n  function getDictionaryReversed(n) {\n    const rev = [];\n    for (let i = n; i !== 4096; i = dictionaryIndex[i]) {\n      rev.push(dictionaryChar[i]);\n    }\n    return rev;\n  }\n\n  const result = [];\n  initDictionary();\n  const array = new Uint8Array(input);\n  let code = getNext(array);\n  let oldCode;\n  while (code !== EOI_CODE) {\n    if (code === CLEAR_CODE) {\n      initDictionary();\n      code = getNext(array);\n      while (code === CLEAR_CODE) {\n        code = getNext(array);\n      }\n\n      if (code === EOI_CODE) {\n        break;\n      } else if (code > CLEAR_CODE) {\n        throw new Error(`corrupted code at scanline ${code}`);\n      } else {\n        const val = getDictionaryReversed(code);\n        appendReversed(result, val);\n        oldCode = code;\n      }\n    } else if (code < dictionaryLength) {\n      const val = getDictionaryReversed(code);\n      appendReversed(result, val);\n      addToDictionary(oldCode, val[val.length - 1]);\n      oldCode = code;\n    } else {\n      const oldVal = getDictionaryReversed(oldCode);\n      if (!oldVal) {\n        throw new Error(`Bogus entry. Not in dictionary, ${oldCode} / ${dictionaryLength}, position: ${position}`);\n      }\n      appendReversed(result, oldVal);\n      result.push(oldVal[oldVal.length - 1]);\n      addToDictionary(oldCode, oldVal[oldVal.length - 1]);\n      oldCode = code;\n    }\n\n    if (dictionaryLength + 1 >= (2 ** byteLength)) {\n      if (byteLength === MAX_BYTELENGTH) {\n        oldCode = undefined;\n      } else {\n        byteLength++;\n      }\n    }\n    code = getNext(array);\n  }\n  return new Uint8Array(result);\n}\n\nclass LZWDecoder extends _basedecoder_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  decodeBlock(buffer) {\n    return decompress(buffer, false).buffer;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9sencuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9jb21wcmVzc2lvbi9sencuanM/ODUyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFzZURlY29kZXIgZnJvbSAnLi9iYXNlZGVjb2Rlci5qcyc7XG5cbmNvbnN0IE1JTl9CSVRTID0gOTtcbmNvbnN0IENMRUFSX0NPREUgPSAyNTY7IC8vIGNsZWFyIGNvZGVcbmNvbnN0IEVPSV9DT0RFID0gMjU3OyAvLyBlbmQgb2YgaW5mb3JtYXRpb25cbmNvbnN0IE1BWF9CWVRFTEVOR1RIID0gMTI7XG5cbmZ1bmN0aW9uIGdldEJ5dGUoYXJyYXksIHBvc2l0aW9uLCBsZW5ndGgpIHtcbiAgY29uc3QgZCA9IHBvc2l0aW9uICUgODtcbiAgY29uc3QgYSA9IE1hdGguZmxvb3IocG9zaXRpb24gLyA4KTtcbiAgY29uc3QgZGUgPSA4IC0gZDtcbiAgY29uc3QgZWYgPSAocG9zaXRpb24gKyBsZW5ndGgpIC0gKChhICsgMSkgKiA4KTtcbiAgbGV0IGZnID0gKDggKiAoYSArIDIpKSAtIChwb3NpdGlvbiArIGxlbmd0aCk7XG4gIGNvbnN0IGRnID0gKChhICsgMikgKiA4KSAtIHBvc2l0aW9uO1xuICBmZyA9IE1hdGgubWF4KDAsIGZnKTtcbiAgaWYgKGEgPj0gYXJyYXkubGVuZ3RoKSB7XG4gICAgY29uc29sZS53YXJuKCdyYW4gb2ZmIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlciBiZWZvcmUgZmluZGluZyBFT0lfQ09ERSAoZW5kIG9uIGlucHV0IGNvZGUpJyk7XG4gICAgcmV0dXJuIEVPSV9DT0RFO1xuICB9XG4gIGxldCBjaHVuazEgPSBhcnJheVthXSAmICgoMiAqKiAoOCAtIGQpKSAtIDEpO1xuICBjaHVuazEgPDw9IChsZW5ndGggLSBkZSk7XG4gIGxldCBjaHVua3MgPSBjaHVuazE7XG4gIGlmIChhICsgMSA8IGFycmF5Lmxlbmd0aCkge1xuICAgIGxldCBjaHVuazIgPSBhcnJheVthICsgMV0gPj4+IGZnO1xuICAgIGNodW5rMiA8PD0gTWF0aC5tYXgoMCwgKGxlbmd0aCAtIGRnKSk7XG4gICAgY2h1bmtzICs9IGNodW5rMjtcbiAgfVxuICBpZiAoZWYgPiA4ICYmIGEgKyAyIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgY29uc3QgaGkgPSAoKGEgKyAzKSAqIDgpIC0gKHBvc2l0aW9uICsgbGVuZ3RoKTtcbiAgICBjb25zdCBjaHVuazMgPSBhcnJheVthICsgMl0gPj4+IGhpO1xuICAgIGNodW5rcyArPSBjaHVuazM7XG4gIH1cbiAgcmV0dXJuIGNodW5rcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmV2ZXJzZWQoZGVzdCwgc291cmNlKSB7XG4gIGZvciAobGV0IGkgPSBzb3VyY2UubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBkZXN0LnB1c2goc291cmNlW2ldKTtcbiAgfVxuICByZXR1cm4gZGVzdDtcbn1cblxuZnVuY3Rpb24gZGVjb21wcmVzcyhpbnB1dCkge1xuICBjb25zdCBkaWN0aW9uYXJ5SW5kZXggPSBuZXcgVWludDE2QXJyYXkoNDA5Myk7XG4gIGNvbnN0IGRpY3Rpb25hcnlDaGFyID0gbmV3IFVpbnQ4QXJyYXkoNDA5Myk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDI1NzsgaSsrKSB7XG4gICAgZGljdGlvbmFyeUluZGV4W2ldID0gNDA5NjtcbiAgICBkaWN0aW9uYXJ5Q2hhcltpXSA9IGk7XG4gIH1cbiAgbGV0IGRpY3Rpb25hcnlMZW5ndGggPSAyNTg7XG4gIGxldCBieXRlTGVuZ3RoID0gTUlOX0JJVFM7XG4gIGxldCBwb3NpdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gaW5pdERpY3Rpb25hcnkoKSB7XG4gICAgZGljdGlvbmFyeUxlbmd0aCA9IDI1ODtcbiAgICBieXRlTGVuZ3RoID0gTUlOX0JJVFM7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0TmV4dChhcnJheSkge1xuICAgIGNvbnN0IGJ5dGUgPSBnZXRCeXRlKGFycmF5LCBwb3NpdGlvbiwgYnl0ZUxlbmd0aCk7XG4gICAgcG9zaXRpb24gKz0gYnl0ZUxlbmd0aDtcbiAgICByZXR1cm4gYnl0ZTtcbiAgfVxuICBmdW5jdGlvbiBhZGRUb0RpY3Rpb25hcnkoaSwgYykge1xuICAgIGRpY3Rpb25hcnlDaGFyW2RpY3Rpb25hcnlMZW5ndGhdID0gYztcbiAgICBkaWN0aW9uYXJ5SW5kZXhbZGljdGlvbmFyeUxlbmd0aF0gPSBpO1xuICAgIGRpY3Rpb25hcnlMZW5ndGgrKztcbiAgICByZXR1cm4gZGljdGlvbmFyeUxlbmd0aCAtIDE7XG4gIH1cbiAgZnVuY3Rpb24gZ2V0RGljdGlvbmFyeVJldmVyc2VkKG4pIHtcbiAgICBjb25zdCByZXYgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gbjsgaSAhPT0gNDA5NjsgaSA9IGRpY3Rpb25hcnlJbmRleFtpXSkge1xuICAgICAgcmV2LnB1c2goZGljdGlvbmFyeUNoYXJbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV2O1xuICB9XG5cbiAgY29uc3QgcmVzdWx0ID0gW107XG4gIGluaXREaWN0aW9uYXJ5KCk7XG4gIGNvbnN0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoaW5wdXQpO1xuICBsZXQgY29kZSA9IGdldE5leHQoYXJyYXkpO1xuICBsZXQgb2xkQ29kZTtcbiAgd2hpbGUgKGNvZGUgIT09IEVPSV9DT0RFKSB7XG4gICAgaWYgKGNvZGUgPT09IENMRUFSX0NPREUpIHtcbiAgICAgIGluaXREaWN0aW9uYXJ5KCk7XG4gICAgICBjb2RlID0gZ2V0TmV4dChhcnJheSk7XG4gICAgICB3aGlsZSAoY29kZSA9PT0gQ0xFQVJfQ09ERSkge1xuICAgICAgICBjb2RlID0gZ2V0TmV4dChhcnJheSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb2RlID09PSBFT0lfQ09ERSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoY29kZSA+IENMRUFSX0NPREUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBjb3JydXB0ZWQgY29kZSBhdCBzY2FubGluZSAke2NvZGV9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWwgPSBnZXREaWN0aW9uYXJ5UmV2ZXJzZWQoY29kZSk7XG4gICAgICAgIGFwcGVuZFJldmVyc2VkKHJlc3VsdCwgdmFsKTtcbiAgICAgICAgb2xkQ29kZSA9IGNvZGU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb2RlIDwgZGljdGlvbmFyeUxlbmd0aCkge1xuICAgICAgY29uc3QgdmFsID0gZ2V0RGljdGlvbmFyeVJldmVyc2VkKGNvZGUpO1xuICAgICAgYXBwZW5kUmV2ZXJzZWQocmVzdWx0LCB2YWwpO1xuICAgICAgYWRkVG9EaWN0aW9uYXJ5KG9sZENvZGUsIHZhbFt2YWwubGVuZ3RoIC0gMV0pO1xuICAgICAgb2xkQ29kZSA9IGNvZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9sZFZhbCA9IGdldERpY3Rpb25hcnlSZXZlcnNlZChvbGRDb2RlKTtcbiAgICAgIGlmICghb2xkVmFsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQm9ndXMgZW50cnkuIE5vdCBpbiBkaWN0aW9uYXJ5LCAke29sZENvZGV9IC8gJHtkaWN0aW9uYXJ5TGVuZ3RofSwgcG9zaXRpb246ICR7cG9zaXRpb259YCk7XG4gICAgICB9XG4gICAgICBhcHBlbmRSZXZlcnNlZChyZXN1bHQsIG9sZFZhbCk7XG4gICAgICByZXN1bHQucHVzaChvbGRWYWxbb2xkVmFsLmxlbmd0aCAtIDFdKTtcbiAgICAgIGFkZFRvRGljdGlvbmFyeShvbGRDb2RlLCBvbGRWYWxbb2xkVmFsLmxlbmd0aCAtIDFdKTtcbiAgICAgIG9sZENvZGUgPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChkaWN0aW9uYXJ5TGVuZ3RoICsgMSA+PSAoMiAqKiBieXRlTGVuZ3RoKSkge1xuICAgICAgaWYgKGJ5dGVMZW5ndGggPT09IE1BWF9CWVRFTEVOR1RIKSB7XG4gICAgICAgIG9sZENvZGUgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBieXRlTGVuZ3RoKys7XG4gICAgICB9XG4gICAgfVxuICAgIGNvZGUgPSBnZXROZXh0KGFycmF5KTtcbiAgfVxuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkocmVzdWx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTFpXRGVjb2RlciBleHRlbmRzIEJhc2VEZWNvZGVyIHtcbiAgZGVjb2RlQmxvY2soYnVmZmVyKSB7XG4gICAgcmV0dXJuIGRlY29tcHJlc3MoYnVmZmVyLCBmYWxzZSkuYnVmZmVyO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/geotiff/dist-module/compression/lzw.js\n");

/***/ }),

/***/ "./node_modules/geotiff/dist-module/predictor.js":
/*!*******************************************************!*\
  !*** ./node_modules/geotiff/dist-module/predictor.js ***!
  \*******************************************************/
/*! exports provided: applyPredictor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyPredictor\", function() { return applyPredictor; });\nfunction decodeRowAcc(row, stride) {\n  let length = row.length - stride;\n  let offset = 0;\n  do {\n    for (let i = stride; i > 0; i--) {\n      row[offset + stride] += row[offset];\n      offset++;\n    }\n\n    length -= stride;\n  } while (length > 0);\n}\n\nfunction decodeRowFloatingPoint(row, stride, bytesPerSample) {\n  let index = 0;\n  let count = row.length;\n  const wc = count / bytesPerSample;\n\n  while (count > stride) {\n    for (let i = stride; i > 0; --i) {\n      row[index + stride] += row[index];\n      ++index;\n    }\n    count -= stride;\n  }\n\n  const copy = row.slice();\n  for (let i = 0; i < wc; ++i) {\n    for (let b = 0; b < bytesPerSample; ++b) {\n      row[(bytesPerSample * i) + b] = copy[((bytesPerSample - b - 1) * wc) + i];\n    }\n  }\n}\n\nfunction applyPredictor(block, predictor, width, height, bitsPerSample,\n  planarConfiguration) {\n  if (!predictor || predictor === 1) {\n    return block;\n  }\n\n  for (let i = 0; i < bitsPerSample.length; ++i) {\n    if (bitsPerSample[i] % 8 !== 0) {\n      throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');\n    }\n    if (bitsPerSample[i] !== bitsPerSample[0]) {\n      throw new Error('When decoding with predictor, all samples must have the same size.');\n    }\n  }\n\n  const bytesPerSample = bitsPerSample[0] / 8;\n  const stride = planarConfiguration === 2 ? 1 : bitsPerSample.length;\n\n  for (let i = 0; i < height; ++i) {\n    // Last strip will be truncated if height % stripHeight != 0\n    if (i * stride * width * bytesPerSample >= block.byteLength) {\n      break;\n    }\n    let row;\n    if (predictor === 2) { // horizontal prediction\n      switch (bitsPerSample[0]) {\n        case 8:\n          row = new Uint8Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,\n          );\n          break;\n        case 16:\n          row = new Uint16Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 2,\n          );\n          break;\n        case 32:\n          row = new Uint32Array(\n            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 4,\n          );\n          break;\n        default:\n          throw new Error(`Predictor 2 not allowed with ${bitsPerSample[0]} bits per sample.`);\n      }\n      decodeRowAcc(row, stride, bytesPerSample);\n    } else if (predictor === 3) { // horizontal floating point\n      row = new Uint8Array(\n        block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,\n      );\n      decodeRowFloatingPoint(row, stride, bytesPerSample);\n    }\n  }\n  return block;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9wcmVkaWN0b3IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VvdGlmZi9kaXN0LW1vZHVsZS9wcmVkaWN0b3IuanM/NWQ0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWNvZGVSb3dBY2Mocm93LCBzdHJpZGUpIHtcbiAgbGV0IGxlbmd0aCA9IHJvdy5sZW5ndGggLSBzdHJpZGU7XG4gIGxldCBvZmZzZXQgPSAwO1xuICBkbyB7XG4gICAgZm9yIChsZXQgaSA9IHN0cmlkZTsgaSA+IDA7IGktLSkge1xuICAgICAgcm93W29mZnNldCArIHN0cmlkZV0gKz0gcm93W29mZnNldF07XG4gICAgICBvZmZzZXQrKztcbiAgICB9XG5cbiAgICBsZW5ndGggLT0gc3RyaWRlO1xuICB9IHdoaWxlIChsZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlUm93RmxvYXRpbmdQb2ludChyb3csIHN0cmlkZSwgYnl0ZXNQZXJTYW1wbGUpIHtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGNvdW50ID0gcm93Lmxlbmd0aDtcbiAgY29uc3Qgd2MgPSBjb3VudCAvIGJ5dGVzUGVyU2FtcGxlO1xuXG4gIHdoaWxlIChjb3VudCA+IHN0cmlkZSkge1xuICAgIGZvciAobGV0IGkgPSBzdHJpZGU7IGkgPiAwOyAtLWkpIHtcbiAgICAgIHJvd1tpbmRleCArIHN0cmlkZV0gKz0gcm93W2luZGV4XTtcbiAgICAgICsraW5kZXg7XG4gICAgfVxuICAgIGNvdW50IC09IHN0cmlkZTtcbiAgfVxuXG4gIGNvbnN0IGNvcHkgPSByb3cuc2xpY2UoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YzsgKytpKSB7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBieXRlc1BlclNhbXBsZTsgKytiKSB7XG4gICAgICByb3dbKGJ5dGVzUGVyU2FtcGxlICogaSkgKyBiXSA9IGNvcHlbKChieXRlc1BlclNhbXBsZSAtIGIgLSAxKSAqIHdjKSArIGldO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQcmVkaWN0b3IoYmxvY2ssIHByZWRpY3Rvciwgd2lkdGgsIGhlaWdodCwgYml0c1BlclNhbXBsZSxcbiAgcGxhbmFyQ29uZmlndXJhdGlvbikge1xuICBpZiAoIXByZWRpY3RvciB8fCBwcmVkaWN0b3IgPT09IDEpIHtcbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpdHNQZXJTYW1wbGUubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYml0c1BlclNhbXBsZVtpXSAlIDggIT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiBkZWNvZGluZyB3aXRoIHByZWRpY3Rvciwgb25seSBtdWx0aXBsZSBvZiA4IGJpdHMgYXJlIHN1cHBvcnRlZC4nKTtcbiAgICB9XG4gICAgaWYgKGJpdHNQZXJTYW1wbGVbaV0gIT09IGJpdHNQZXJTYW1wbGVbMF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignV2hlbiBkZWNvZGluZyB3aXRoIHByZWRpY3RvciwgYWxsIHNhbXBsZXMgbXVzdCBoYXZlIHRoZSBzYW1lIHNpemUuJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgYnl0ZXNQZXJTYW1wbGUgPSBiaXRzUGVyU2FtcGxlWzBdIC8gODtcbiAgY29uc3Qgc3RyaWRlID0gcGxhbmFyQ29uZmlndXJhdGlvbiA9PT0gMiA/IDEgOiBiaXRzUGVyU2FtcGxlLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhlaWdodDsgKytpKSB7XG4gICAgLy8gTGFzdCBzdHJpcCB3aWxsIGJlIHRydW5jYXRlZCBpZiBoZWlnaHQgJSBzdHJpcEhlaWdodCAhPSAwXG4gICAgaWYgKGkgKiBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlID49IGJsb2NrLmJ5dGVMZW5ndGgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgcm93O1xuICAgIGlmIChwcmVkaWN0b3IgPT09IDIpIHsgLy8gaG9yaXpvbnRhbCBwcmVkaWN0aW9uXG4gICAgICBzd2l0Y2ggKGJpdHNQZXJTYW1wbGVbMF0pIHtcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgIHJvdyA9IG5ldyBVaW50OEFycmF5KFxuICAgICAgICAgICAgYmxvY2ssIGkgKiBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlLCBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgcm93ID0gbmV3IFVpbnQxNkFycmF5KFxuICAgICAgICAgICAgYmxvY2ssIGkgKiBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlLCBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlIC8gMixcbiAgICAgICAgICApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIHJvdyA9IG5ldyBVaW50MzJBcnJheShcbiAgICAgICAgICAgIGJsb2NrLCBpICogc3RyaWRlICogd2lkdGggKiBieXRlc1BlclNhbXBsZSwgc3RyaWRlICogd2lkdGggKiBieXRlc1BlclNhbXBsZSAvIDQsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByZWRpY3RvciAyIG5vdCBhbGxvd2VkIHdpdGggJHtiaXRzUGVyU2FtcGxlWzBdfSBiaXRzIHBlciBzYW1wbGUuYCk7XG4gICAgICB9XG4gICAgICBkZWNvZGVSb3dBY2Mocm93LCBzdHJpZGUsIGJ5dGVzUGVyU2FtcGxlKTtcbiAgICB9IGVsc2UgaWYgKHByZWRpY3RvciA9PT0gMykgeyAvLyBob3Jpem9udGFsIGZsb2F0aW5nIHBvaW50XG4gICAgICByb3cgPSBuZXcgVWludDhBcnJheShcbiAgICAgICAgYmxvY2ssIGkgKiBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlLCBzdHJpZGUgKiB3aWR0aCAqIGJ5dGVzUGVyU2FtcGxlLFxuICAgICAgKTtcbiAgICAgIGRlY29kZVJvd0Zsb2F0aW5nUG9pbnQocm93LCBzdHJpZGUsIGJ5dGVzUGVyU2FtcGxlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJsb2NrO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/geotiff/dist-module/predictor.js\n");

/***/ })

}]);