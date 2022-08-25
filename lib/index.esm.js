import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import React, { forwardRef, useRef, useState, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var reduceHexValue$1 = reduceHexValue;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

// Global style variables
var background = {
    app: '#F6F9FC',
    appInverse: '#7A8997',
    positive: '#E1FFD4',
    negative: '#FEDED2',
    warning: '#FFF5CF',
};
var color = {
    primary: {
        "jungle": "#00C09A",
        "punch": "#E94C36",
        "studio": "#9B56B7",
        "havelock": "#2E97DE",
        "default": "#697785" // NO se destaca, color comodín. Variación de nile
    },
    "grayscale": {
        "black": "#474747",
        "shark": "#4A4A4A",
        "tundora": "#505050",
        "storm": "#6C6C6C",
        "grav": "#898989",
        "dust": "#A9A9A9",
        "silver": "#C1C1C1",
        "iron": "#D7D7D7",
        "gallery": "#F0F0F0",
        "white": "#FFFFFF"
    },
    "secondary": {
        "nile": "#2C3E51"
    },
    "general": {
        "positive": "#66BF3C"
    },
    orange: '#FC521F',
    gold: '#FFAE00',
    green: '#66BF3C',
    seafoam: '#37D5D3',
    purple: '#6F2CAC',
    ultraviolet: '#2A0481',
    // Monochrome
    lightest: '#FFFFFF',
    lighter: '#F8F8F8',
    light: '#F3F3F3',
    mediumlight: '#EEEEEE',
    medium: '#DDDDDD',
    mediumdark: '#999999',
    dark: '#666666',
    darker: '#444444',
    darkest: '#333333',
    border: 'rgba(0,0,0,.1)',
    // Status
    positive: '#66BF3C',
    negative: '#FF4400',
    warning: '#E69D00',
};
var THEMES = {
    JUNGLE: 'jungle',
    PUNCH: 'punch',
    STUDIO: 'studio',
    HAVELOCK: 'havelock',
    DEFAULT: 'default',
};
var spacing = {
    padding: {
        small: 10,
        medium: 20,
        large: 30,
    },
    borderRadius: {
        small: 3,
        default: 6,
    },
};
var typography = {
    type: {
        primary: '"Urbanist", sans-serif',
        code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        black: '900',
    },
    lineHeight: {
        l1: 19,
    },
    size: {
        h1: 3.5,
        h2: 2.8,
        h3: 2.25,
        h4: 1.8,
        h5: 1.4,
        h6: 1,
        s1: 10,
        s2: 11,
        s3: 12,
        s4: 13,
        m1: 14,
        m2: 15,
        m3: 17,
        m4: 18,
        code: 15,
    },
};
var breakpoint = 600;
var pageMargin = 5.55555;
var pageMargins = css(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n"], ["\n  padding: 0 ", "px;\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n  @media (min-width: ", "px) {\n    margin: 0 ", "%;\n  }\n"])), spacing.padding.medium, breakpoint * 1, pageMargin * 1, breakpoint * 2, pageMargin * 2, breakpoint * 3, pageMargin * 3, breakpoint * 4, pageMargin * 4);
var hoverEffect = css(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ", ";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n"], ["\n  border: 1px solid ", ";\n  border-radius: ", "px;\n  transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n\n  &:hover,\n  &.__hover {\n    border-color: ", ";\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  &:active,\n  &.__active {\n    border-color: ", ";\n    transform: translate3d(0, 0, 0);\n  }\n"])), color.border, spacing.borderRadius.small, rgba(color.primary.jungle, 0.5), rgba(color.primary.jungle, 1));
var zIndex = {
    tooltip: 2147483647,
};
var templateObject_1$p, templateObject_2$j;

var styles = /*#__PURE__*/Object.freeze({
    __proto__: null,
    background: background,
    color: color,
    THEMES: THEMES,
    spacing: spacing,
    typography: typography,
    breakpoint: breakpoint,
    pageMargin: pageMargin,
    pageMargins: pageMargins,
    hoverEffect: hoverEffect,
    zIndex: zIndex
});

var bodyStyles = css(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n  * {\n    box-sizing: border-box;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ", ";\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n  }\n  button,\n  input,\n  textarea,\n  select {\n    font-family: ", ";\n  }\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n  sub {\n    bottom: -0.2em;\n  }\n  sup {\n    top: -0.2em;\n  }\n  b,\n  em {\n    font-weight: ", ";\n  }\n  hr {\n    border: none;\n    border-top: 1px solid ", ";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n  code,\n  pre {\n    font-family: ", ";\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n    color: ", ";\n  }\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"], ["\n  font-family: ", ";\n  font-size: ", "px;\n  color: ", ";\n  margin: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-overflow-scrolling: touch;\n  * {\n    box-sizing: border-box;\n  }\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: ", ";\n    margin: 0;\n    padding: 0;\n    line-height: 1;\n  }\n  button,\n  input,\n  textarea,\n  select {\n    font-family: ", ";\n  }\n  sub,\n  sup {\n    font-size: 0.8em;\n  }\n  sub {\n    bottom: -0.2em;\n  }\n  sup {\n    top: -0.2em;\n  }\n  b,\n  em {\n    font-weight: ", ";\n  }\n  hr {\n    border: none;\n    border-top: 1px solid ", ";\n    clear: both;\n    margin-bottom: 1.25rem;\n  }\n  code,\n  pre {\n    font-family: ", ";\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  code {\n    display: inline-block;\n    padding-left: 2px;\n    padding-right: 2px;\n    vertical-align: baseline;\n    color: ", ";\n  }\n  pre {\n    line-height: 18px;\n    padding: 11px 1rem;\n    white-space: pre-wrap;\n    background: rgba(0, 0, 0, 0.05);\n    color: ", ";\n    border-radius: 3px;\n    margin: 1rem 0;\n  }\n  &.ReactModal__Body--open {\n    overflow: hidden;\n    &.hide-intercom #intercom-container {\n      display: none;\n    }\n  }\n  .ReactModalPortal > div {\n    opacity: 0;\n  }\n  .ReactModalPortal .ReactModal__Overlay {\n    transition: all 200ms ease-in;\n    &--after-open {\n      opacity: 1;\n    }\n    &--before-close {\n      opacity: 0;\n    }\n  }\n"])), typography.type.primary, typography.size.m1, color.grayscale.shark, typography.weight.bold, typography.type.primary, typography.weight.bold, color.border, typography.type.code, typography.size.s3, color.grayscale.gallery, color.grayscale.storm);
var GlobalStyle = createGlobalStyle(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  :root {\n    --leftSidebarWidth: 55px;\n    --topNavigationHeight: 250px;\n  }\n  html{\n    -webkit-text-size-adjust: 100%;\n  }\n  *, button{font-family: ", ";}\n  body {\n    ", "\n  }\n  // prevent mouse-clicks from focusing elements\n  // this removes the ugly blue outline\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"], ["\n  :root {\n    --leftSidebarWidth: 55px;\n    --topNavigationHeight: 250px;\n  }\n  html{\n    -webkit-text-size-adjust: 100%;\n  }\n  *, button{font-family: ", ";}\n  body {\n    ", "\n  }\n  // prevent mouse-clicks from focusing elements\n  // this removes the ugly blue outline\n  :focus:not(:focus-visible) {\n    outline: none;\n  }\n"])), typography.type.primary, bodyStyles);
var templateObject_1$o, templateObject_2$i;

var global = /*#__PURE__*/Object.freeze({
    __proto__: null,
    bodyStyles: bodyStyles,
    GlobalStyle: GlobalStyle
});

var StyledDiv = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  line-height: ", ";\n  text-align: ", ";\n"], ["\n  line-height: ", ";\n  text-align: ", ";\n"])), function (p) { return (p.line ? p.line + 'px' : 'normal'); }, function (p) { return (p.align ? p.align : 'initial'); });
var H1 = styled.h1(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.h1, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.regular); }, typography.size.h1 - .5, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.h1 + .5, "vmax;\n    }\n  "); });
var H2 = styled.h2(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.h2, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.bold); }, typography.size.h2 - .5, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.h2 + .5, "vmax;\n    }\n  "); });
var H3 = styled.h3(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.h3, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.bold); }, typography.size.h3 - .5, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.h3 + .5, "vmax;\n    }\n  "); });
var H4 = styled.h4(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.h4, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.bold); }, typography.size.h4 - .5, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.h4 + .5, "vmax;\n    }\n  "); });
var H5 = styled.h5(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (max-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.h5, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.bold); }, typography.size.h5 - .4, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.h5 + .5, "vmax;\n    }\n  "); });
var H6 = styled.h6(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  color: ", ";\n  font-weight: ", ";\n"])), typography.size.h6, function (p) { return (p.color ? p.color : color.secondary.nile); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.bold); });
var P = styled.p(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  line-height: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (min-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "em;\n  line-height: ", "em;\n  color: ", ";\n  font-weight: ", ";\n  @media only screen and (min-width: 734px){\n    font-size: ", "em;\n  }\n  ", "\n"])), typography.size.m3, typography.size.m3 + .5, function (p) { return (p.color ? p.color : color.grayscale.shark); }, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.regular); }, typography.size.m3, function (p) { return p.responsive && "\n    @media only screen and (min-width: 1235px){\n      font-size: ".concat(typography.size.m3, "em;\n    }\n  "); });
var Label$1 = styled.label(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  display: inline-block;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 7px;\n  color: ", ";\n\n"], ["\n  display: inline-block;\n  font-family: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  margin-bottom: 7px;\n  color: ", ";\n\n"])), typography.type.primary, typography.size.s4, function (p) { return (p.weight ? weightProcessor$1(p.weight) : typography.weight.semibold); }, function (p) { return (p.color ? p.color : color.grayscale.black); });
var Medium = styled.span(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: 11px;\n  & *{font-size: 11px !important;}\n  color: ", ";\n  font-weight: ", ";\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: 11px;\n  & *{font-size: 11px !important;}\n  color: ", ";\n  font-weight: ", ";\n"])), function (p) { return (p.color ? p.color : color.grayscale.grav); }, typography.weight.medium);
var Small = styled.small(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "px;\n  line-height: ", "px;\n  color: ", ";\n  font-weight: ", ";\n"], ["\n  font-family: 'Urbanist', sans-serif;\n  font-size: ", "px;\n  line-height: ", "px;\n  color: ", ";\n  font-weight: ", ";\n"])), typography.size.s1, typography.size.m2, function (p) { return (p.color ? p.color : color.grayscale.grav); }, typography.weight.regular);
var Div = forwardRef(function (_a, ref
// ref={ref as ComponentProps<typeof StyledBigButton>['ref']}
) {
    var children = _a.children, line = _a.line, align = _a.align, rest = __rest(_a, ["children", "line", "align"]);
    return (jsx(StyledDiv, __assign({}, rest, { line: line, align: align, ref: ref }, { children: jsx(Fragment, { children: children }) })));
});
// TODO:v0.2
// Cambiar "weightProcessor" 
// por consulta directa en arreglo en todas las declaraciones.
function weightProcessor$1(weight) {
    var newWeight = typography.weight.regular;
    if (weight == 'light')
        newWeight = typography.weight.light;
    if (weight == 'medium')
        newWeight = typography.weight.medium;
    if (weight == 'semibold')
        newWeight = typography.weight.semibold;
    if (weight == 'bold')
        newWeight = typography.weight.bold;
    if (weight == 'black')
        newWeight = typography.weight.black;
    return newWeight;
}
var templateObject_1$n, templateObject_2$h, templateObject_3$c, templateObject_4$6, templateObject_5$4, templateObject_6$4, templateObject_7$4, templateObject_8$2, templateObject_9$2, templateObject_10$2, templateObject_11$1;

var SIZES$2 = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
};
var StyledButton = styled.button(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  border-width: ", ";\n  border-style: solid;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-color: ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  font-family: ", ";\n  border-radius: ", ";\n  min-width: 8.0625em;\n  ", "\n  min-height: 2.8125em;\n  // TODO:v0.2 Testear las propiedades comentadas \n  // y evaluar si se quedan o eliminan\n  // overflow: hidden;\n  // position: relative;\n  // text-align: center;\n  // will-change: transform;\n  // vertical-align: top;\n  // user-select: none;\n  // transform: translate3d(0, 0, 0);\n  transition: all 150ms ease-out;\n  white-space: nowrap;\n  margin: 0;\n  line-height: 1;\n  place-self: flex-end;\n\n  &:hover{\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  &:active{\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", " !important;\n    color: ", ";\n    border: 1px solid ", " !important;\n    box-shadow: none;\n    cursor: no-drop;\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n  span{\n    margin: 0 .6rem 0 0;\n  }\n  ", "\n"], ["\n  border-width: ", ";\n  border-style: solid;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-color: ", ";\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n  font-size: ", "px;\n  font-weight: ", ";\n  font-family: ", ";\n  border-radius: ", ";\n  min-width: 8.0625em;\n  ", "\n  min-height: 2.8125em;\n  // TODO:v0.2 Testear las propiedades comentadas \n  // y evaluar si se quedan o eliminan\n  // overflow: hidden;\n  // position: relative;\n  // text-align: center;\n  // will-change: transform;\n  // vertical-align: top;\n  // user-select: none;\n  // transform: translate3d(0, 0, 0);\n  transition: all 150ms ease-out;\n  white-space: nowrap;\n  margin: 0;\n  line-height: 1;\n  place-self: flex-end;\n\n  &:hover{\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  &:active{\n    background-color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", " !important;\n    color: ", ";\n    border: 1px solid ", " !important;\n    box-shadow: none;\n    cursor: no-drop;\n  }\n\n  svg {\n    height: ", "px;\n    width: ", "px;\n    vertical-align: top;\n    margin-right: ", "px;\n    margin-top: ", "px;\n    margin-bottom: ", "px;\n    /* Necessary for js mouse events to not glitch out when hovering on svgs */\n    pointer-events: none;\n  }\n  span{\n    margin: 0 .6rem 0 0;\n  }\n  ", "\n"])), function (p) { return (p.outline ? "1px" : "0"); }, function (p) {
    return color.primary[p.theme ? p.theme : "default"];
}, function (p) {
    return p.outline ? "transparent" : color.primary[p.theme ? p.theme : "default"];
}, function (p) {
    return !p.outline
        ? color.grayscale.white
        : color.primary[p.theme ? p.theme : "default"];
}, function (p) {
    return p.size === SIZES$2.SMALL ? "11px 0.9125em" : "11px 0.9125em";
}, function (p) {
    return p.size === SIZES$2.SMALL ? typography.size.s3 : p.size === SIZES$2.LARGE ? typography.size.m2 : typography.size.m1;
}, function (p) { return (p.weight ? weightProcessor(p.weight) : typography.weight.medium); }, typography.type.primary, function (p) { return p.rounded ? "100px" : "3px"; }, function (p) { return p.fullWidth && "width: 100%;"; }, function (p) {
    return !p.outline ? color.primary[p.theme ? p.theme : "default"] + "E6" : color.primary[p.theme ? p.theme : "default"] + 33;
}, function (p) {
    return !p.outline ? color.primary[p.theme ? p.theme : "default"] : color.primary[p.theme ? p.theme : "default"] + "4D";
}, color.grayscale.white, color.grayscale.silver, color.grayscale.iron, function (p) { return (p.size === SIZES$2.SMALL ? "14" : "16"); }, function (p) { return (p.size === SIZES$2.SMALL ? "14" : "16"); }, function (p) { return (p.size === SIZES$2.SMALL ? "4" : "6"); }, function (p) { return (p.size === SIZES$2.SMALL ? "-1" : "-2"); }, function (p) { return (p.size === SIZES$2.SMALL ? "-1" : "-2"); }, function (p) {
    return p.containsIcon &&
        "\n      svg {\n        display: block;\n        margin: 0;\n      }\n      padding: ".concat(p.size === SIZES$2.SMALL ? "7" : "12", "px;\n    ");
});
var Button = function (_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "default" : _b, rest = __rest(_a, ["children", "theme"]);
    return (jsx(StyledButton, __assign({ theme: theme }, rest, { children: children })));
};
// TODO:v0.2
// Cambiar "weightProcessor" 
// por consulta directa en arreglo en todas las declaraciones.
function weightProcessor(weight) {
    var newWeight = typography.weight.regular;
    if (weight == 'light')
        newWeight = typography.weight.light;
    if (weight == 'medium')
        newWeight = typography.weight.medium;
    if (weight == 'semibold')
        newWeight = typography.weight.semibold;
    if (weight == 'bold')
        newWeight = typography.weight.bold;
    if (weight == 'black')
        newWeight = typography.weight.black;
    return newWeight;
}
var templateObject_1$m;

var Icon = styled.span(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  vertical-align: unset;\n  color: ", ";\n  font-size: ", ";\n"], ["\n  vertical-align: unset;\n  color: ", ";\n  font-size: ", ";\n"])), color.secondary.nile, typography.size.m1);
var StyledButtonIcon = styled.button(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  width: 35px;\n  border: none;\n  height: 35px;\n  cursor: pointer;\n  text-align:center;\n  border-radius: 100%;\n  background : ", ";\n"], ["\n  width: 35px;\n  border: none;\n  height: 35px;\n  cursor: pointer;\n  text-align:center;\n  border-radius: 100%;\n  background : ", ";\n"])), color.grayscale.iron);
var ButtonIcon = forwardRef(function (_a, ref) {
    var id = _a.id, icon = _a.icon, rest = __rest(_a, ["id", "icon"]);
    return (jsx(StyledButtonIcon, __assign({ id: id, ref: ref }, rest, { children: jsx(Icon, { className: "icon-" + icon }) })));
});
var templateObject_1$l, templateObject_2$g;

var WrapperBigButton = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var StyledBigButton = styled.button(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  width: 10em;\n  height: 10em;\n  display: flex;\n  cursor: pointer;\n  transition: 350ms;\n  position: relative;\n  border-radius: 6px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background: ", ";\n  border: 1px solid ", ";\n\n  & > [class^=\"icon-\"] {\n    font-size: 3.9em;\n    color: ", ";\n  }\n\n  &:focus-visible,\n  &:focus,\n  &:hover {\n    outline: none;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n\n  &:active {\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"], ["\n  width: 10em;\n  height: 10em;\n  display: flex;\n  cursor: pointer;\n  transition: 350ms;\n  position: relative;\n  border-radius: 6px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  background: ", ";\n  border: 1px solid ", ";\n\n  & > [class^=\"icon-\"] {\n    font-size: 3.9em;\n    color: ", ";\n  }\n\n  &:focus-visible,\n  &:focus,\n  &:hover {\n    outline: none;\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n\n  &:active {\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"])), color.grayscale.white, color.grayscale.dust, color.secondary.nile, function (props) {
    return props.theme == THEMES.JUNGLE &&
        "\n      box-shadow: 0 0 2px ".concat(color.primary.jungle, ";\n    ");
}, function (props) {
    return props.theme == THEMES.PUNCH &&
        "\n      box-shadow: 0 0 2px ".concat(color.primary.punch, ";\n    ");
}, function (props) {
    return props.theme == THEMES.STUDIO &&
        "\n      box-shadow: 0 0 2px ".concat(color.primary.studio, ";\n    ");
}, function (props) {
    return props.theme == THEMES.HAVELOCK &&
        "\n      box-shadow: 0 0 2px ".concat(color.primary.havelock, ";\n    ");
}, function (props) {
    return props.theme == THEMES.JUNGLE &&
        "\n      background-color: ".concat(color.primary.jungle, "22;\n    ");
}, function (props) {
    return props.theme == THEMES.PUNCH &&
        "\n      background-color: ".concat(color.primary.punch, "22;\n    ");
}, function (props) {
    return props.theme == THEMES.STUDIO &&
        "\n      background-color: ".concat(color.primary.studio, "22;\n    ");
}, function (props) {
    return props.theme == THEMES.HAVELOCK &&
        "\n      background-color: ".concat(color.primary.havelock, "22;\n    ");
});
var Label = styled.span(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  bottom: 10px;\n  font-size: .86em;\n  position: absolute;\n  color: ", ";\n"], ["\n  bottom: 10px;\n  font-size: .86em;\n  position: absolute;\n  color: ", ";\n"])), color.grayscale.shark);
var BigButton = forwardRef(function (_a, ref) {
    var id = _a.id, _b = _a.theme, theme = _b === void 0 ? THEMES.JUNGLE : _b, _c = _a.type, type = _c === void 0 ? "email" : _c;
    return (jsx(WrapperBigButton, { children: jsxs(StyledBigButton, __assign({ id: id, name: id, theme: theme, ref: ref }, { children: [jsx("span", { className: "icon-" + type }), jsx(Label, { children: type === "email"
                        ? "Correo electrónico"
                        : type === "link" && "Enlace" })] })) }));
});
var templateObject_1$k, templateObject_2$f, templateObject_3$b;

var KINDS = {
    DEFAULT: "default",
    WITHCP: "withclipboard",
};
var SIZES$1 = {
    SMALL: "small",
    LARGE: "large",
    MEDIUM: "medium",
};
var InputWrapper = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  ", "\n  ", "\n  display: ", ";\n"], ["\n  position: relative;\n  width: ", ";\n  ", "\n  ", "\n  display: ", ";\n"])), function (p) { return p.width; }, function (p) { return p.mv && "\n    margin-top: ".concat(p.mv, "px;\n    margin-bottom: ").concat(p.mv, "px;\n  "); }, function (p) { return p.mh && "\n    margin-left: ".concat(p.mh, "px;\n    margin-right: ").concat(p.mh, "px;\n  "); }, function (p) { return (p.block ? "block" : "inline-block"); });
var StyledInput = styled.input(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  width: 100%;\n  outline: none;\n  overflow: hidden;\n  appearance: none;\n  -moz-appearance: none;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  color: ", ";\n  padding: ", ";\n  border-radius: 3px;\n  color: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  &:not(:placeholder-shown)[type=\"password\"]{\n    font-size: 14px;\n    letter-spacing: 1px;\n    font-family: Verdana;\n  }\n\n  &:focus-visible,\n  &:focus {\n    -webkit-box-shadow: 0 0 2px\n      ", ";\n    outline: none;\n    box-shadow: 0 0 2px\n      ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"], ["\n  width: 100%;\n  outline: none;\n  overflow: hidden;\n  appearance: none;\n  -moz-appearance: none;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  -webkit-appearance: none;\n  color: ", ";\n  padding: ", ";\n  border-radius: 3px;\n  color: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  font-weight: ", ";\n  font-size: ", "px;\n  &:not(:placeholder-shown)[type=\"password\"]{\n    font-size: 14px;\n    letter-spacing: 1px;\n    font-family: Verdana;\n  }\n\n  &:focus-visible,\n  &:focus {\n    -webkit-box-shadow: 0 0 2px\n      ", ";\n    outline: none;\n    box-shadow: 0 0 2px\n      ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"])), color.grayscale.black, function (p) {
    return p.appearance == "large"
        ? "18px 20px"
        : p.appearance == "small"
            ? "5px 6px"
            : "10px 11px";
}, color.grayscale.shark, typography.type.primary, color.grayscale.dust, typography.weight.regular, function (p) {
    return p.appearance == "large"
        ? typography.size.m3
        : p.appearance == "small"
            ? typography.size.s3
            : typography.size.m1;
}, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, color.grayscale.silver, function (p) {
    return p.kind === KINDS.WITHCP && p.appearance == "large"
        ? "padding-right: 45px;"
        : (p.kind === KINDS.WITHCP && p.appearance == "medium") ||
            p.appearance == "small"
            ? "padding-right: 30px;"
            : null;
});
var InputIcon = styled.span(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  cursor: pointer;\n  position: absolute;\n  margin-left: ", ";\n"], ["\n  cursor: pointer;\n  position: absolute;\n  margin-left: ", ";\n"])), function (p) { return (p.appearance == "large" ? "-30px" : "-20px"); });
var Input = forwardRef(function (_a, ref) {
    var id = _a.id, mv = _a.mv, mh = _a.mh, block = _a.block, label = _a.label, width = _a.width, required = _a.required; _a.children; var _b = _a.kind, kind = _b === void 0 ? "default" : _b, _c = _a.theme, theme = _c === void 0 ? "default" : _c, _d = _a.appearance, appearance = _d === void 0 ? SIZES$1.MEDIUM : _d, rest = __rest(_a, ["id", "mv", "mh", "block", "label", "width", "required", "children", "kind", "theme", "appearance"]);
    var inputRef = useRef(ref);
    return (jsxs(InputWrapper, __assign({ width: width, block: block, mv: mv, mh: mh }, { children: [label && (jsxs(Fragment, { children: [jsxs(Label$1, __assign({ htmlFor: id }, { children: [label, required ? "*" : ""] })), jsx("br", {})] })), jsx(StyledInput, __assign({ id: id, name: id, theme: theme, appearance: appearance, required: required, kind: kind }, rest, { ref: inputRef })), kind === KINDS.WITHCP && (jsx(InputIcon, { appearance: appearance, className: "icon-clipboard", 
                // FIXME:v0.2 Move this style into className
                style: { top: "".concat(label ? "calc(50% + 3px)" : "calc(22% + 3px)") }, onClick: function (e) { return copyToClipboard(); } }))] })));
    function copyToClipboard() {
        var value = inputRef.current.value;
        navigator.clipboard.writeText(value);
    }
});
var templateObject_1$j, templateObject_2$e, templateObject_3$a;

var StyledScrollbar = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n"], ["\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n"])));
var WrapperScroll = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  overflow: scroll;\n  height: 100%;\n  ", ";\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n  &:hover div {\n    opacity: 1;\n  }\n"], ["\n  overflow: scroll;\n  height: 100%;\n  ", ";\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n  &:hover div {\n    opacity: 1;\n  }\n"])), function (p) { return p.height && "max-height: ".concat(p.height); });
var Bar$1 = styled.div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  z-index: 10;\n  border-radius: 4px;\n  opacity: 0;\n  background: transparent;\n  transition: opacity 120ms ease-out;\n\n  &.is-vertical {\n    width: 6px;\n    height: 100%;\n    top: 2px;\n  }\n"], ["\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  z-index: 10;\n  border-radius: 4px;\n  opacity: 0;\n  background: transparent;\n  transition: opacity 120ms ease-out;\n\n  &.is-vertical {\n    width: 6px;\n    height: 100%;\n    top: 2px;\n  }\n"])));
var Thumb = styled.div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 0;\n  cursor: grab;\n  border-radius: inherit;\n  background-color: #babacc;\n  transition: 0.3s background-color easy-out;\n\n  &:hover {\n    background-color: #747487;\n  }\n"], ["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 0;\n  cursor: grab;\n  border-radius: inherit;\n  background-color: #babacc;\n  transition: 0.3s background-color easy-out;\n\n  &:hover {\n    background-color: #747487;\n  }\n"])));
var Scrollbar = forwardRef(function (_a, ref) {
    var children = _a.children, height = _a.height, rest = __rest(_a, ["children", "height"]);
    var _b = useState("0%"), scrollY = _b[0], setScrollY = _b[1];
    var _c = useState("0%"), thumbHeight = _c[0], setThumbHeight = _c[1];
    return (jsx(StyledScrollbar, __assign({}, rest, { ref: ref }, { children: jsxs(WrapperScroll, __assign({ onScroll: handleScroll, onMouseOver: calcHeightThumb, height: height }, { children: [children, jsx(Bar$1, __assign({ className: "is-vertical" }, { children: jsx(Thumb, { style: { transform: "translateY(".concat(scrollY, ")"), height: thumbHeight } }) }))] })) })));
    function calcHeightThumb(e) {
        var thumbHeight = (e.currentTarget.offsetHeight * 100) / e.currentTarget.scrollHeight; //100:regla de 3
        if (thumbHeight != 100)
            setThumbHeight(thumbHeight + "%");
    }
    function handleScroll(e) {
        var totalHeight = e.currentTarget.offsetHeight + 6; // El número 6 sale del is-vertical>top*3 (para dar espacio. no tocar borde)
        var scrollPosition = e.currentTarget.scrollTop;
        var y = (scrollPosition * 100) / totalHeight; //100:regla de 3
        setScrollY(y + "%");
    }
});
var templateObject_1$i, templateObject_2$d, templateObject_3$9, templateObject_4$5;

var WrapperInput = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  display: inline-block;\n  *{font-family: ", ";}\n\n"], ["\n  display: inline-block;\n  *{font-family: ", ";}\n\n"])), typography.type.primary);
var Toggle = styled.div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  width:auto;\n  position: relative;\n  border-radius: 3px;\n  display: inline-block;\n  text-overflow: ellipsis;\n  padding: 1.25em 1.0625em;\n  color: ", ";\n  font-size: ", "px;\n  border: 1px solid ", ";\n  font-weight: ", ";\n\n  &:focus-visible, &:focus {\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  width:auto;\n  position: relative;\n  border-radius: 3px;\n  display: inline-block;\n  text-overflow: ellipsis;\n  padding: 1.25em 1.0625em;\n  color: ", ";\n  font-size: ", "px;\n  border: 1px solid ", ";\n  font-weight: ", ";\n\n  &:focus-visible, &:focus {\n  outline: none;\n  ", "\n  ", "\n  ", "\n  ", "\n"])), color.grayscale.black, typography.size.m1, color.grayscale.dust, typography.weight.regular, function (p) { return p.theme == THEMES.PUNCH && "box-shadow: 0 0 2px ".concat(color.primary.punch, ";"); }, function (p) { return p.theme == THEMES.STUDIO && "box-shadow: 0 0 2px ".concat(color.primary.studio, ";"); }, function (p) { return p.theme == THEMES.JUNGLE && " box-shadow: 0 0 2px ".concat(color.primary.jungle, ";"); }, function (p) { return p.theme == THEMES.HAVELOCK && "box-shadow: 0 0 2px ".concat(color.primary.havelock, ";"); });
var ToggleDate = styled.span(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  height: 100%;\n  max-width: 82px;\n  position: relative;\n  display: inline-block;\n\n  &:nth-child(2) {\n    margin-left: 15px;\n    & > input {\n      text-align: right;\n    }\n  }\n"], ["\n  height: 100%;\n  max-width: 82px;\n  position: relative;\n  display: inline-block;\n\n  &:nth-child(2) {\n    margin-left: 15px;\n    & > input {\n      text-align: right;\n    }\n  }\n"])));
var StyledInputDate = styled.input(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  border: none;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  box-sizing: border-box;\n\n  &::-webkit-calendar-picker-indicator {\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    position: absolute;\n  }\n"], ["\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  border: none;\n  height: 100%;\n  cursor: pointer;\n  position: absolute;\n  box-sizing: border-box;\n\n  &::-webkit-calendar-picker-indicator {\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n    position: absolute;\n  }\n"])));
var InputTarget = styled.input(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  width: 100%;\n  border: none;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n"], ["\n  width: 100%;\n  border: none;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n"])));
// Timepicker elements..
// --------------------------------------------------------------------------------
var TimePicker = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  z-index:9;\n  width: 102px;\n  display: none;\n  margin-left: 10px;\n  position: absolute;\n  border-radius: 4px;\n  background-color: white;\n  ", ";\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  border: 0.5px solid ", ";\n"], ["\n  z-index:9;\n  width: 102px;\n  display: none;\n  margin-left: 10px;\n  position: absolute;\n  border-radius: 4px;\n  background-color: white;\n  ", ";\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);\n  border: 0.5px solid ", ";\n"])), function (p) { return p.visible && "display:block;"; }, color.grayscale.gallery);
var ListHours = styled(Scrollbar)(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  padding: 0 6.5px;\n"], ["\n  padding: 0 6.5px;\n"])));
var StyledHour = styled.span(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  height: 20px;\n  display: block;\n  margin: 7.5px 0;\n  cursor: pointer;\n  font-size: 16px;\n  transition: 120ms;\n  letter-spacing: 0.5px;\n  color: ", ";\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: ", ";\n\n  &:hover,\n  &.selected {\n    color: ", ";\n  }\n\n  &.selected {\n    font-weight: ", ";\n  }\n"], ["\n  height: 20px;\n  display: block;\n  margin: 7.5px 0;\n  cursor: pointer;\n  font-size: 16px;\n  transition: 120ms;\n  letter-spacing: 0.5px;\n  color: ", ";\n  font-family: \"Urbanist\", sans-serif;\n  font-weight: ", ";\n\n  &:hover,\n  &.selected {\n    color: ", ";\n  }\n\n  &.selected {\n    font-weight: ", ";\n  }\n"])), color.grayscale.shark, typography.weight.regular, color.primary.jungle, typography.weight.medium);
var ContainerTimeSlot = styled.div(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  top: 0;\n  right: 0;\n  position: absolute;\n  padding-right: 6.5px;\n"], ["\n  top: 0;\n  right: 0;\n  position: absolute;\n  padding-right: 6.5px;\n"])));
var TimeSlot = styled.span(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  margin-top: 10px;\n  padding: 3px 7px;\n  transition: 120ms;\n  border-radius: 3px;\n  text-align: center;\n  background: #ffffff;\n  font-size: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &.selected {\n    color: #ffffff;\n    background: ", "D9;\n    border: 1px solid ", ";\n  }\n"], ["\n  display: block;\n  cursor: pointer;\n  margin-top: 10px;\n  padding: 3px 7px;\n  transition: 120ms;\n  border-radius: 3px;\n  text-align: center;\n  background: #ffffff;\n  font-size: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n\n  &:hover,\n  &.selected {\n    color: #ffffff;\n    background: ", "D9;\n    border: 1px solid ", ";\n  }\n"])), typography.size.m1, color.grayscale.silver, color.grayscale.silver, color.primary.jungle, color.primary.jungle);
var InputDate = forwardRef(function (_a, ref) {
    var id = _a.id, label = _a.label, _b = _a.inputDisplay, inputDisplay = _b === void 0 ? "both" : _b, rest = __rest(_a, ["id", "label", "inputDisplay"]);
    var dateRef = useRef(ref);
    var timeRef = useRef(ref);
    // Date
    var _c = useState(""), textDate = _c[0], settextDate = _c[1];
    var _d = useState(""), inputDate = _d[0], setInputDate = _d[1];
    // Time
    var _e = useState(""), textTime = _e[0], setTextTime = _e[1];
    var _f = useState(""), timeSlot = _f[0], setTimeSlot = _f[1];
    var _g = useState(-1), hourSelected = _g[0], setHourSelected = _g[1];
    var _h = useState(false), visibleTimePicker = _h[0], setVisibleTimePicker = _h[1];
    var ESmonths = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ];
    var hours = [
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
    ];
    useEffect(function () {
        document.addEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);
    return (jsxs(WrapperInput, __assign({}, rest, { children: [label && jsx(Label$1, { children: label }), jsx("br", {}), jsxs(Toggle, { children: [inputDisplay !== "time" && (jsxs(ToggleDate, { children: [jsx(StyledInputDate, { ref: dateRef, type: "date", id: id + "-date", value: inputDate, name: id + "-date", onChange: handleChangeDate }), jsx(InputTarget, { readOnly: true, type: "text", value: textDate, placeholder: "01/Oct/2021" })] })), inputDisplay !== "calendar" && (jsxs(ToggleDate, __assign({ id: id + "-time", ref: timeRef }, { children: [jsx(InputTarget, { readOnly: true, type: "text", value: textTime, placeholder: "00:00 AM", onClick: toggleTimePicker }), jsxs(TimePicker, __assign({ visible: visibleTimePicker, onBlur: toggleTimePicker }, { children: [jsx(ListHours, __assign({ height: "179px" }, { children: hours.map(function (hour, index) {
                                            return (jsx(StyledHour, __assign({ onClick: function () { return handleChangeTime(hour, index); }, className: hourSelected === index ? "selected" : "" }, { children: hour }), "hour-" + index));
                                        }) })), jsxs(ContainerTimeSlot, { children: [jsx(TimeSlot, __assign({ onClick: handleSelectTimeSlot, className: timeSlot === "AM" ? "selected" : "" }, { children: "AM" })), jsx(TimeSlot, __assign({ onClick: handleSelectTimeSlot, className: timeSlot === "PM" ? "selected" : "" }, { children: "PM" }))] })] }))] })))] })] })));
    function handleClickOutside(event) {
        if (timeRef.current && !timeRef.current.contains(event.target))
            setVisibleTimePicker(false);
    }
    function handleChangeDate(e) {
        var value = e.target.value;
        var split = value.split("-");
        var month = ESmonths[parseInt(split[1]) - 1];
        setInputDate(value);
        if (value !== "")
            // day / month / year
            settextDate(split[2] + "/" + month + "/" + split[0]);
    }
    function handleChangeTime(hour, index) {
        var timeSlotSelected = timeSlot !== "" ? timeSlot : " --";
        setHourSelected(index);
        setTextTime(hour + " " + timeSlotSelected);
        if (timeSlot !== "")
            toggleTimePicker();
    }
    function handleSelectTimeSlot(e) {
        var vHour = hourSelected !== -1 ? hours[hourSelected] : "--:--";
        setTimeSlot(e.currentTarget.innerHTML);
        setTextTime(vHour + " " + e.currentTarget.innerHTML);
        if (hourSelected !== -1)
            toggleTimePicker();
    }
    function toggleTimePicker() {
        setVisibleTimePicker(!visibleTimePicker);
    }
});
var templateObject_1$h, templateObject_2$c, templateObject_3$8, templateObject_4$4, templateObject_5$3, templateObject_6$3, templateObject_7$3, templateObject_8$1, templateObject_9$1, templateObject_10$1;

var ContainerTextarea = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var StyledTextarea = styled.textarea(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  width: 100%;\n  font-size: 1em;\n  line-height: 1.5em;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: ", ";\n  padding: 1.25em 1em 2.625em 1.0625em;\n  font-family: ", ";\n  border: 1px solid ", ";\n\n  &:focus-visible,\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 2px ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  width: 100%;\n  font-size: 1em;\n  line-height: 1.5em;\n  border-radius: 3px;\n  box-sizing: border-box;\n  color: ", ";\n  padding: 1.25em 1em 2.625em 1.0625em;\n  font-family: ", ";\n  border: 1px solid ", ";\n\n  &:focus-visible,\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 2px ", ";\n  }\n\n  &::placeholder {\n    color: ", ";\n  }\n"])), color.grayscale.shark, typography.type.primary, color.grayscale.dust, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, color.grayscale.silver);
var TextCounter = styled.p(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  margin-top: 0;\n  text-align: right;\n  margin-bottom: 20px;\n  color: ", ";\n  font-family: ", ";\n"], ["\n  margin-top: 0;\n  text-align: right;\n  margin-bottom: 20px;\n  color: ", ";\n  font-family: ", ";\n"])), color.grayscale.dust, typography.type.primary);
var Textarea = forwardRef(function (_a, ref) {
    var id = _a.id, label = _a.label, maxLength = _a.maxLength, value = _a.value, placeholder = _a.placeholder, required = _a.required, _b = _a.theme, theme = _b === void 0 ? THEMES.DEFAULT : _b;
    var textareaRef = useRef(ref);
    var _c = useState(maxLength), characterCount = _c[0], setcharacterCount = _c[1];
    return (jsxs("div", { children: [label && jsxs(Label$1, __assign({ htmlFor: id }, { children: [label, required ? "*" : ""] })), jsxs(ContainerTextarea, { children: [jsx(StyledTextarea, __assign({ id: id, maxLength: maxLength, theme: theme, placeholder: placeholder, ref: textareaRef, required: required, onChange: function (e) {
                            return setcharacterCount(e.target.maxLength - e.target.value.length);
                        } }, { children: value })), characterCount && characterCount >= 0 ? (jsx(TextCounter, { children: characterCount })) : characterCount === 0 ? (jsx(TextCounter, { children: "0" })) : null] })] }));
});
var templateObject_1$g, templateObject_2$b, templateObject_3$7;

var SIZES = {
    LARGE: 'large',
    SMALL: 'small',
    MEDIUM: 'medium',
};
var SelectWrapper = styled.span(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: relative;\n  display:inline-block;\n"], ["\n  position: relative;\n  display:inline-block;\n"])));
var IconSelect = styled.span(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  font-size:10px;\n  position:absolute;\n  top: calc(50% - 2px);\n  color: ", ";\n  margin-left: ", ";\n"], ["\n  font-size:10px;\n  position:absolute;\n  top: calc(50% - 2px);\n  color: ", ";\n  margin-left: ", ";\n"])), color.grayscale.shark, function (p) { return (p.appearance == 'large' ? '-30px' : '-30px'); });
var StyledSelect = styled.select(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  width:100%;\n  appearance: none;\n  overflow: hidden;\n  border-radius: 3px;\n  padding-right: 50px;\n  margin-bottom: 1.25em;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  font-weight: ", ";\n  padding: ", ";\n  font-size: ", "px;\n\n  &:focus-visible, &:focus {\n    outline: none;\n    box-shadow: 0 0 2px ", ";\n"], ["\n  width:100%;\n  appearance: none;\n  overflow: hidden;\n  border-radius: 3px;\n  padding-right: 50px;\n  margin-bottom: 1.25em;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-family: ", ";\n  border: 1px solid ", ";\n  font-weight: ", ";\n  padding: ", ";\n  font-size: ", "px;\n\n  &:focus-visible, &:focus {\n    outline: none;\n    box-shadow: 0 0 2px ", ";\n"])), color.grayscale.black, typography.type.primary, color.grayscale.dust, typography.weight.regular, function (p) { return (p.appearance == 'large' ? '18px 20px' : p.appearance == 'small' ? '5px 6px' : '10px 11px'); }, function (p) { return (p.appearance == 'large' ? typography.size.m3 : p.appearance == 'small' ? typography.size.s3 : typography.size.m1); }, function (p) { return color.primary[p.theme ? p.theme : "jungle"]; });
var Select = forwardRef(function (_a, ref) {
    var id = _a.id, children = _a.children, _b = _a.appearance, appearance = _b === void 0 ? SIZES.MEDIUM : _b, legend = _a.legend, rest = __rest(_a, ["id", "children", "appearance", "legend"]);
    var selectRef = useRef(ref);
    return (jsxs(SelectWrapper, { children: [legend && jsx(Label$1, __assign({ htmlFor: id }, { children: legend })), jsx("br", {}), jsx(StyledSelect, __assign({ id: id, name: id, appearance: appearance }, rest, { ref: selectRef }, { children: children })), jsx(IconSelect, { appearance: appearance, className: "icon-arrow-dropdown" })] }));
});
var Option = styled.option(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n"], ["\n"])));
var templateObject_1$f, templateObject_2$a, templateObject_3$6, templateObject_4$3;

var Radio = forwardRef(function (_a, ref) {
    var label = _a.label, name = _a.name, _b = _a.theme, theme = _b === void 0 ? "default" : _b, checked = _a.checked, disabled = _a.disabled;
    var inputRef = useRef(ref);
    return (jsxs(Container$2, __assign({ theme: theme, disabled: disabled, ref: inputRef }, { children: [label, jsx("input", { type: "radio", name: name, defaultChecked: checked, disabled: disabled }), jsx("span", { className: "checkmark" })] })));
});
var Container$2 = styled.label(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: block;\n  font-size: 16px;\n  cursor: pointer;\n  user-select: none;\n  padding-left: 25px;\n  position: relative;\n  margin-bottom: 10px;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  color: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n\n  & input {\n    opacity: 0;\n    position: absolute;\n  }\n\n  .checkmark {\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    position: absolute;\n    border: 1px solid ", ";\n  }\n\n  & input:checked ~ .checkmark {\n    border: 1px solid #979797;\n  }\n\n  .checkmark:after {\n    content: \"\";\n    display: none;\n    position: absolute;\n  }\n\n  & input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  & .checkmark:after {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    top: calc(50% - 5px);\n    left: calc(50% - 5px);\n    background: ", ";\n  }\n\n  // Disabled ...\n  ", "\n"], ["\n  display: block;\n  font-size: 16px;\n  cursor: pointer;\n  user-select: none;\n  padding-left: 25px;\n  position: relative;\n  margin-bottom: 10px;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  color: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n\n  & input {\n    opacity: 0;\n    position: absolute;\n  }\n\n  .checkmark {\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    position: absolute;\n    border: 1px solid ", ";\n  }\n\n  & input:checked ~ .checkmark {\n    border: 1px solid #979797;\n  }\n\n  .checkmark:after {\n    content: \"\";\n    display: none;\n    position: absolute;\n  }\n\n  & input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  & .checkmark:after {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    top: calc(50% - 5px);\n    left: calc(50% - 5px);\n    background: ", ";\n  }\n\n  // Disabled ...\n  ", "\n"])), color.grayscale.black, typography.size.m1, typography.type.primary, color.grayscale.grav, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (props) {
    return props.disabled && "\n    cursor: default;\n    color: ".concat(color.grayscale.iron, ";\n    & .checkmark:after{\n      background: ").concat(color.grayscale.iron, ";\n    }\n    & input ~ .checkmark {\n      border: 1px solid ").concat(color.grayscale.iron, ";\n    }\n    & input:checked ~ .checkmark {\n      border: 1px solid ").concat(color.grayscale.iron, ";\n    }\n  ");
});
var templateObject_1$e;

var Checkbox = forwardRef(function (_a, ref) {
    var _b = _a.theme, theme = _b === void 0 ? "default" : _b, disabled = _a.disabled, name = _a.name, checked = _a.checked, label = _a.label, children = _a.children;
    var inputRef = useRef(ref);
    return (jsxs(Container$1, __assign({ className: "container", theme: theme, disabled: disabled, ref: inputRef }, { children: [label, children, jsx("input", { type: "checkbox", defaultChecked: checked, disabled: disabled, name: name }), jsx("span", { className: "checkmark" })] })));
});
var Container$1 = styled.label(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  display: block;\n  cursor: pointer;\n  font-size: 16px;\n  user-select: none;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  color: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n\n\n  & input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    cursor: pointer;\n    position: absolute;\n  }\n\n  .checkmark {\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    position: absolute;\n    border-radius: 2px;\n    border: 1px solid ", ";\n\n    &:after {\n      width: 3px;\n      content: \"\";\n      height: 8px;\n      display: none;\n      position: absolute;\n      border: solid white;\n      top: calc(50% - 6px);\n      left: calc(50% - 2px);\n      transform: rotate(45deg);\n      border-width: 0 2px 2px 0;\n      -ms-transform: rotate(45deg);\n      -webkit-transform: rotate(45deg);\n    }\n  }\n\n  & input:checked ~ .checkmark {\n    border: 1px solid ", ";\n    background-color: ", ";\n  }\n\n  & input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  // Disabled ...\n  ", "\n"], ["\n  display: block;\n  cursor: pointer;\n  font-size: 16px;\n  user-select: none;\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n  -ms-user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  color: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n\n\n  & input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    cursor: pointer;\n    position: absolute;\n  }\n\n  .checkmark {\n    top: 0;\n    left: 0;\n    width: 18px;\n    height: 18px;\n    position: absolute;\n    border-radius: 2px;\n    border: 1px solid ", ";\n\n    &:after {\n      width: 3px;\n      content: \"\";\n      height: 8px;\n      display: none;\n      position: absolute;\n      border: solid white;\n      top: calc(50% - 6px);\n      left: calc(50% - 2px);\n      transform: rotate(45deg);\n      border-width: 0 2px 2px 0;\n      -ms-transform: rotate(45deg);\n      -webkit-transform: rotate(45deg);\n    }\n  }\n\n  & input:checked ~ .checkmark {\n    border: 1px solid ", ";\n    background-color: ", ";\n  }\n\n  & input:checked ~ .checkmark:after {\n    display: block;\n  }\n\n  // Disabled ...\n  ", "\n"])), color.grayscale.shark, typography.size.m1, typography.type.primary, color.grayscale.grav, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (p) {
    return p.disabled &&
        "\n    cursor: default;\n    color: ".concat(color.grayscale.iron, ";\n    & .checkmark:after{\n      background: ").concat(color.grayscale.iron, ";\n    }\n    & input ~ .checkmark {\n      border: 1px solid ").concat(color.grayscale.iron, ";\n    }\n    & input:checked ~ .checkmark {\n      background-color: ").concat(color.grayscale.iron, ";\n      border: 1px solid ").concat(color.grayscale.iron, ";\n    }\n  ");
});
var templateObject_1$d;

var Switch = forwardRef(function (_a, ref) {
    var _b = _a.theme, theme = _b === void 0 ? "default" : _b, label = _a.label, name = _a.name, checked = _a.checked, disabled = _a.disabled;
    var inputRef = useRef(ref);
    return (jsxs(Container, { children: [jsxs(StyledSwitch, __assign({ theme: theme, disabled: disabled, ref: inputRef }, { children: [jsx("input", { type: "checkbox", name: name, defaultChecked: checked, disabled: disabled }), jsx("span", { className: "slider round" })] })), jsx("span", __assign({ className: "label" }, { children: label }))] }));
});
var Container = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 10px;\n\n  .label {\n    color: ", ";\n    font-size: ", "px;\n    font-family: ", ";\n  }\n"], ["\n  display: block;\n  margin-bottom: 10px;\n\n  .label {\n    color: ", ";\n    font-size: ", "px;\n    font-family: ", ";\n  }\n"])), color.grayscale.black, typography.size.m1, typography.type.primary);
var StyledSwitch = styled.label(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  width: 35px;\n  height: 18px;\n  margin-right: 7px;\n  position: relative;\n  display: inline-block;\n\n  & input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n\n  .slider {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    cursor: pointer;\n    transition: 0.4s;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n\n    &:before {\n      left: 1px;\n      content: \"\";\n      width: 16px;\n      bottom: 1px;\n      height: 16px;\n      transition: 0.4s;\n      position: absolute;\n      background-color: white;\n      -webkit-transition: 0.4s;\n    }\n  }\n\n  input:checked + .slider {\n    background-color: ", ";\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px\n      ", ";\n  }\n\n  input:checked + .slider:before {\n    transform: translateX(17px);\n    -ms-transform: translateX(17px);\n    -webkit-transform: translateX(17px);\n  }\n\n  .slider.round {\n    border-radius: 34px;\n    &:before {\n      border-radius: 50%;\n    }\n  }\n\n  // Disabled ...\n  ", "\n"], ["\n  width: 35px;\n  height: 18px;\n  margin-right: 7px;\n  position: relative;\n  display: inline-block;\n\n  & input {\n    width: 0;\n    height: 0;\n    opacity: 0;\n  }\n\n  .slider {\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    cursor: pointer;\n    transition: 0.4s;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n\n    &:before {\n      left: 1px;\n      content: \"\";\n      width: 16px;\n      bottom: 1px;\n      height: 16px;\n      transition: 0.4s;\n      position: absolute;\n      background-color: white;\n      -webkit-transition: 0.4s;\n    }\n  }\n\n  input:checked + .slider {\n    background-color: ", ";\n  }\n\n  input:focus + .slider {\n    box-shadow: 0 0 1px\n      ", ";\n  }\n\n  input:checked + .slider:before {\n    transform: translateX(17px);\n    -ms-transform: translateX(17px);\n    -webkit-transform: translateX(17px);\n  }\n\n  .slider.round {\n    border-radius: 34px;\n    &:before {\n      border-radius: 50%;\n    }\n  }\n\n  // Disabled ...\n  ", "\n"])), function (p) {
    return color.primary[p.theme ? p.theme : "default"];
}, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (props) {
    return props.disabled && "\n    cursor: default;\n    color:".concat(color.grayscale.iron, ";\n\n    input:focus + .slider {\n      box-shadow: 0 0 1px ").concat(color.grayscale.iron, ";\n    }\n\n    input:checked + .slider {\n      background-color: ").concat(color.grayscale.iron, ";\n    }\n  ");
});
var templateObject_1$c, templateObject_2$9;

var StyledSection = styled.section(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  padding-bottom: 60px;\n"], ["\n  padding-bottom: 60px;\n"])));
var Heading = styled(H4)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n\n  position: relative;\n  color: ", ";\n  padding-bottom: 30px;\n\n  &:after{\n    content: \"\";\n    position: absolute;\n    border-bottom: 1px solid ", ";\n    width: 100%;\n    left:0;\n    top: 30%;\n  }\n"], ["\n\n  position: relative;\n  color: ", ";\n  padding-bottom: 30px;\n\n  &:after{\n    content: \"\";\n    position: absolute;\n    border-bottom: 1px solid ", ";\n    width: 100%;\n    left:0;\n    top: 30%;\n  }\n"])), color.grayscale.shark, color.grayscale.gallery);
var Mask = styled.span(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  background-color: white;\n  position: sticky;\n  z-index:1;\n  padding-right: 12px;\n"], ["\n  background-color: white;\n  position: sticky;\n  z-index:1;\n  padding-right: 12px;\n"])));
var Section = forwardRef(function (_a, ref) {
    var heading = _a.heading, children = _a.children, rest = __rest(_a, ["heading", "children"]);
    return (jsx(StyledSection, __assign({}, rest, { ref: ref }, { children: jsxs(Fragment, { children: [jsx(Heading, { children: heading && jsx(Mask, { children: heading }) }), children] }) })));
});
var templateObject_1$b, templateObject_2$8, templateObject_3$5;

var StyledTable = styled.table(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  width: 100%;\n  position: relative;\n  border-collapse: collapse;\n"], ["\n  width: 100%;\n  position: relative;\n  border-collapse: collapse;\n"])));
var TH = styled.th(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  text-align: left;\n  padding: 7px 5px;\n  margin-bottom: 8px;\n"], ["\n  text-align: left;\n  padding: 7px 5px;\n  margin-bottom: 8px;\n"])));
var THEAD = styled.thead(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  border-bottom: 1px solid ", ";\n"], ["\n  border-bottom: 1px solid ", ";\n"])), color.grayscale.silver);
var TR = styled.tr(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  margin: 0;\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n"], ["\n  margin: 0;\n  &:hover {\n    background-color: ", ";\n  }\n  ", "\n"])), color.grayscale.gallery, function (p) {
    return p.underline && "border-bottom: 1px solid ".concat(color.grayscale.gallery, ";");
});
var WrapperMobile = styled.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  & * {\n    border: none;\n  }\n"], ["\n  & * {\n    border: none;\n  }\n"])));
var InnerWrap = styled.div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  display: flex;\n  & th:not(:last-child),\n    td:not(:last-child) {\n      width: 100%;\n      border-bottom: 1px solid ", ";\n    }\n    border-bottom: 1px solid ", ";\n  & th {\n    padding: 11px 5px;\n    margin: 0;\n  }\n  & tr {\n    display: grid;\n    &:hover {\n      background-color: transparent;\n    }\n  }\n"], ["\n  display: flex;\n  & th:not(:last-child),\n    td:not(:last-child) {\n      width: 100%;\n      border-bottom: 1px solid ", ";\n    }\n    border-bottom: 1px solid ", ";\n  & th {\n    padding: 11px 5px;\n    margin: 0;\n  }\n  & tr {\n    display: grid;\n    &:hover {\n      background-color: transparent;\n    }\n  }\n"])), color.grayscale.gallery, color.grayscale.silver);
var TD = styled.td(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  margin: 0;\n  padding: 11px 5px;\n"], ["\n  margin: 0;\n  padding: 11px 5px;\n"])));
var TABLE = forwardRef(function (_a, ref) {
    var children = _a.children, heading = _a.heading, orientation = _a.orientation, rest = __rest(_a, ["children", "heading", "orientation"]);
    return (jsx(StyledTable, __assign({ ref: ref }, rest, { children: jsx(Fragment, { children: orientation == "vertical" ? (jsx(Fragment, { children: children && (jsx(WrapperMobile, { children: React.Children.map(children, function (child) { return (jsxs(InnerWrap, { children: [jsx(THEAD, { children: jsx("tr", { children: heading === null || heading === void 0 ? void 0 : heading.map(function (item, index) {
                                        return jsx(TH, { children: item }, index);
                                    }) }) }), jsx("tbody", { children: child })] })); }) })) })) : (jsxs(Fragment, { children: [jsx(THEAD, { children: jsx("tr", { children: heading === null || heading === void 0 ? void 0 : heading.map(function (item, index) {
                                return jsx(TH, { children: item }, index);
                            }) }) }), children] })) }) })));
});
var templateObject_1$a, templateObject_2$7, templateObject_3$4, templateObject_4$2, templateObject_5$2, templateObject_6$2, templateObject_7$2;

/**
 * Inner style
 * ------------------
 */
var StyledTabs = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject([""], [""])));
var HeaderTab = styled.span(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: block;\n  border-bottom: 1px solid ", ";\n"], ["\n  display: block;\n  border-bottom: 1px solid ", ";\n"])), color.grayscale.gallery);
var LinkTab = styled.span(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  ", "\n"], ["\n  display: inline-block;\n  padding: 10px 20px;\n  cursor: pointer;\n  ", "\n"])), function (p) {
    return p.active && css(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n      border-bottom: 3px solid\n        ", ";\n      & > span {\n        color: ", ";\n      }\n    "], ["\n      border-bottom: 3px solid\n        ", ";\n      & > span {\n        color: ", ";\n      }\n    "])), function (p) { return color.primary[p.theme ? p.theme : "default"]; }, color.secondary.nile);
});
/**
 * Export elements and style
 * ---------------------------
 */
var Tab = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject([""], [""])));
var Title = styled.h5(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  color: ", ";\n  text-align: center;\n  font-weight: ", ";\n"], ["\n  font-family: \"Urbanist\", sans-serif;\n  font-size: 16px;\n  color: ", ";\n  text-align: center;\n  font-weight: ", ";\n"])), color.grayscale.silver, typography.weight.bold);
var Content = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  margin-top: 20px;\n"], ["\n  margin-top: 20px;\n"])));
var Tabs = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "default" : _b, rest = __rest(_a, ["children", "theme"]);
    var _c = useState(0), activeTab = _c[0], setActiveTab = _c[1];
    var title = [];
    var content = [];
    React.Children.map(children, function (tab) {
        //@ts-ignore
        var tab_props = tab === null || tab === void 0 ? void 0 : tab.props.children;
        tab_props.map(function (element) {
            if (element.type.target == "h5") {
                title.push(element);
            }
            if (element.type.target == "div") {
                content.push(element);
            }
        });
    });
    return (jsx(StyledTabs, __assign({ ref: ref }, rest, { theme: theme }, { children: jsxs(Fragment, { children: [jsx(HeaderTab, { children: title.map(function (item, index) { return (jsx(LinkTab, __assign({ onClick: function () { return handleClick(index); }, theme: theme, active: activeTab === index }, { children: item }), index)); }) }), content.map(function (item, index) {
                    if (activeTab === index)
                        return item;
                })] }) })));
    function handleClick(index) {
        setActiveTab(index);
    }
});
var templateObject_1$9, templateObject_2$6, templateObject_3$3, templateObject_4$1, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var StyledHeader = styled.header(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n\n"], ["\n\n"])));
var StyledNav = styled.nav(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), function (props) {
    return props.orientation === "vertical"
        ? "flex-direction: column;\n        ".concat(props.align === "center" ? "align-items:center;" :
            props.align === "split" ? "align-items:stretch;" :
                props.align === "end" ? "align-items:end;" :
                    props.align === "start" && "align-items:start;")
        : "\n        align-items: center;\n        ".concat(props.align === "center" ? "justify-content:center;" :
            props.align === "split" ? "justify-content:space-between;" :
                props.align === "end" ? "justify-content:end;" :
                    "justify-content:start;", "\n  ");
});
var StyledNavItem = styled.span(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  display: inherit;\n  align-items:center;\n"], ["\n  display: inherit;\n  align-items:center;\n"])));
var templateObject_1$8, templateObject_2$5, templateObject_3$2;

function Header(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledHeader, __assign({}, rest, { children: children }));
}
function Nav(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledNav, __assign({}, rest, { children: children }));
}
Nav.Item = function NavItem(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledNavItem, __assign({}, rest, { children: children }));
};
Nav.Section = function NavSection(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledNavItem, __assign({}, rest, { children: children }));
};

var spin = keyframes(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"], ["\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n"])));
var StyledSpinner = styled.span(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  display: ", "block;\n  vertical-align: middle;\n  border: 1px solid ", "40;\n  border-top: 1px solid;\n  border-top-color: ", ";\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation-name: ", ";\n  animation-duration: 1.6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"], ["\n  display: ", "block;\n  vertical-align: middle;\n  border: 1px solid ", "40;\n  border-top: 1px solid;\n  border-top-color: ", ";\n  border-radius: 50%;\n  width: ", "px;\n  height: ", "px;\n  animation-name: ", ";\n  animation-duration: 1.6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n"])), function (p) { return p.inline && "inline-"; }, color.secondary.nile, function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (p) {
    return p.size === "large" ? 45 : p.size === "small" ? 20 : 30;
}, function (p) {
    return p.size === "large" ? 45 : p.size === "small" ? 20 : 30;
}, spin);
var Spinner = forwardRef(function (_a, ref) {
    var children = _a.children, inline = _a.inline, theme = _a.theme, rest = __rest(_a, ["children", "inline", "theme"]);
    return (jsx(StyledSpinner, __assign({ inline: inline, theme: theme }, rest, { ref: ref }, { children: jsx(Fragment, { children: children }) })));
});
var templateObject_1$7, templateObject_2$4;

var StyledProgressbar = styled.span(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  height: 6px;\n  border-radius: 6px;\n  position: relative;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background: ", ";\n"], ["\n  display: block;\n  width: 100%;\n  height: 6px;\n  border-radius: 6px;\n  position: relative;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background: ", ";\n"])), color.grayscale.gallery);
var StyledBar$1 = styled.span(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: absolute;\n  background-color: ", ";\n  width: ", "%;\n  transition: .3s;\n  height: 100%;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n"], ["\n  position: absolute;\n  background-color: ", ";\n  width: ", "%;\n  transition: .3s;\n  height: 100%;\n  box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 6px;\n"])), function (p) { return color.primary[p.theme ? p.theme : "default"]; }, function (p) { return p.progress; });
var Progressbar = forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "default" : _b, _c = _a.progress, progress = _c === void 0 ? 0 : _c, rest = __rest(_a, ["children", "theme", "progress"]);
    return (jsx(StyledProgressbar, __assign({ theme: theme }, rest, { ref: ref }, { children: jsxs(Fragment, { children: [jsx(StyledBar$1, { theme: theme, progress: progress }), children] }) })));
});
var templateObject_1$6, templateObject_2$3;

function Row(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledRow, __assign({}, rest, { children: children }));
}
var Col = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledCol, __assign({}, rest, { children: children }));
};
var Hcol = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx(StyledHcol, __assign({}, rest, { ref: ref }, { children: children })));
});
var StyledRow = styled(Div)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row wrap;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-flow: row wrap;\n  box-sizing: border-box;\n\n  ", "\n\n  ", "\n"])), function (props) { return props.mb && "margin-bottom:".concat(props.mb, "px;"); }, function (props) {
    return props.fullWidth
        ? "padding-right:0;padding-left:0;"
        : "\n    @media (min-width: 1064px) {\n      padding-right: 40px;\n      padding-left: 40px;\n    }\n    padding-right: 20px; padding-left: 20px;\n  ";
});
var StyledCol = styled(Div)(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  min-width: 0;\n  box-sizing: border-box;\n\n  @media (min-width: 1064px) {\n  }\n\n  // Padding Horizontal\n  // -----\n  //TODO:v0.2 Evaluar si este media query cumple su funci\u00F3n\n  @media only screen and (min-width: 734px)  {\n  ", "\n\n  // Padding Vertical\n  // -----\n  ", "\n  }\n\n  // Margin Vertical\n  // -----\n  ", "\n  ", "\n  // Margin Horizontal\n  // -----\n  ", "\n  ", "\n\n  ", "\n  ", "\n  @media (max-width: 750px) {\n    ", "\n    ", "\n  }\n"], ["\n  min-width: 0;\n  box-sizing: border-box;\n\n  @media (min-width: 1064px) {\n  }\n\n  // Padding Horizontal\n  // -----\n  //TODO:v0.2 Evaluar si este media query cumple su funci\u00F3n\n  @media only screen and (min-width: 734px)  {\n  ", "\n\n  // Padding Vertical\n  // -----\n  ", "\n  }\n\n  // Margin Vertical\n  // -----\n  ", "\n  ", "\n  // Margin Horizontal\n  // -----\n  ", "\n  ", "\n\n  ", "\n  ", "\n  @media (max-width: 750px) {\n    ", "\n    ", "\n  }\n"])), function (p) {
    return p.ph &&
        "\n    padding-left:".concat(p.ph, "px;\n    padding-right:").concat(p.ph, "px;\n  ");
}, function (p) {
    return p.pv &&
        "\n    padding-top:".concat(p.pv, "px;\n    padding-bottom:").concat(p.pv, "px;\n  ");
}, function (p) {
    return p.mt &&
        "\n    margin-top:".concat(p.mt, "px;\n  ");
}, function (p) {
    return p.mb &&
        "\n    margin-bottom:".concat(p.mb, "px;\n  ");
}, function (p) {
    return p.ml &&
        "\n    margin-left:".concat(p.ml, "px;\n  ");
}, function (p) {
    return p.mr &&
        "\n    margin-right:".concat(p.mr, "px;\n  ");
}, function (p) {
    return p.size ? "max-width: ".concat((p.size * 100) / 4, "%;") : "max-width: 25%;";
}, function (p) {
    return p.size ? "flex: 0 0 ".concat((p.size * 100) / 4, "%;") : "flex: 0 0 25%;";
}, function (p) {
    return p.size == 21 || p.size == 31
        ? "max-width: ".concat((p.size * 100) / 4, "%;")
        : "max-width: 100%;";
}, function (p) {
    return p.size == 21 || p.size == 31
        ? "flex: 0 0 ".concat((p.size * 100) / 4, "%;")
        : "flex: 0 0 100%;";
});
var StyledHcol = styled(Div)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  flex: 0 0 12.5%;\n  max-width: 12.5%;\n  min-width: 0;\n  box-sizing: border-box;\n"], ["\n  flex: 0 0 12.5%;\n  max-width: 12.5%;\n  min-width: 0;\n  box-sizing: border-box;\n"])));
var templateObject_1$5, templateObject_2$2, templateObject_3$1;

// **Animations
var outItem = keyframes(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  from {margin-left:0px; opacity: 1;}\n  to {margin-left: 0px; opacity: 0;}\n"], ["\n  from {margin-left:0px; opacity: 1;}\n  to {margin-left: 0px; opacity: 0;}\n"])));
var inItem = keyframes(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  from {margin-left: 0px; opacity: 0;}\n  to {margin-left:0px; opacity: 1;}\n"], ["\n  from {margin-left: 0px; opacity: 0;}\n  to {margin-left:0px; opacity: 1;}\n"])));
var StyledLayout = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  min-height: 100%;\n  background: #f4f8f9;\n  ", "\n  ul {\n    & > li.li-item {\n      &.active{\n        color: ", ";\n        fill: ", ";\n      }\n      &:hover {\n          color: ", ";\n          background-color: ", "33;\n        }\n      }\n    }\n  }\n"], ["\n  width: 100%;\n  min-height: 100%;\n  background: #f4f8f9;\n  ", "\n  ul {\n    & > li.li-item {\n      &.active{\n        color: ", ";\n        fill: ", ";\n      }\n      &:hover {\n          color: ", ";\n          background-color: ", "33;\n        }\n      }\n    }\n  }\n"])), function (p) { return p.dark ? "\n    #b{background-color: #2A2E3E;}\n    .li-item{color: ".concat(color.grayscale.gallery, ";}\n  ") : "\n    #b{background-color: #f9fbfc;}\n    .li-item{color: ".concat(color.grayscale.storm, ";}\n  "); }, function (p) { return color.primary[p.theme ? p.theme : "jungle"]; }, function (p) { return color.primary[p.theme ? p.theme : "jungle"]; }, function (p) { return color.primary[p.theme ? p.theme : "jungle"]; }, function (p) {
    return color.primary[p.theme ? p.theme : "jungle"];
});
var SIZE_SIDEBAR = 220;
var StyledBar = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #e5eaed;\n  // box-shadow: 0 1px 5px #dfdfdf;\n  transition: 300ms;\n  padding: 0.8rem;\n  ", "\n  \n  .li-item .item-text{\n    animation-duration: 0.3s;\n    animation-name: ", ";\n  }\n\n  #btnOpenSidebar{\n    ", "\n    ", "\n  }\n"], ["\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  border-right: 1px solid #e5eaed;\n  // box-shadow: 0 1px 5px #dfdfdf;\n  transition: 300ms;\n  padding: 0.8rem;\n  ", "\n  \n  .li-item .item-text{\n    animation-duration: 0.3s;\n    animation-name: ", ";\n  }\n\n  #btnOpenSidebar{\n    ", "\n    ", "\n  }\n"])), function (p) { return "width: ".concat(p.isOpen ? SIZE_SIDEBAR + "px" : "55px", ";"); }, function (p) {
    return !p.isOpen
        ? css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            ", ";\n            opacity: 0;\n          "], ["\n            ", ";\n            opacity: 0;\n          "])), outItem) : css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            ", ";\n            opacity: 1;\n          "], ["\n            ", ";\n            opacity: 1;\n          "])), inItem);
}, function (p) { return "margin-left: ".concat(p.isOpen ? "calc(".concat(SIZE_SIDEBAR, "px - 1.85rem)") : "calc(55px - 1.85rem)", ";"); }, function (p) { return "transform: ".concat(p.isOpen ? "rotate(0deg)" : "rotate(180deg)", ";"); });
var StyledBarMenu = styled.ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  list-style: none;\n  padding: 0;\n  width: 100%;\n\n  a {\n    text-decoration: none;\n    color: var(--main-color-gray);\n  }\n"], ["\n  list-style: none;\n  padding: 0;\n  width: 100%;\n\n  a {\n    text-decoration: none;\n    color: var(--main-color-gray);\n  }\n"])));
var StyledBarItem = styled.li(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  word-break: keep-all;\n  \n  margin: 3px 0;\n  white-space: nowrap;\n  position: relative;\n  transition: 0.2s;\n  border-radius: 3px;\n  font-weight: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  .item-icon{\n    margin-right: 15px;\n    padding-left: .4rem;\n    position: absolute;\n  }\n\n  .item-text{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    height: 30px;\n    width: 100%;\n    padding: .4rem 0 .4rem calc(25px + .4rem);\n\n    & >*:first-child{\n      position: absolute;\n      left:0;\n      top:0;\n      padding: .4rem 0 .4rem calc(25px + .4rem);\n      width: 100%;\n      margin:0;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  word-break: keep-all;\n  \n  margin: 3px 0;\n  white-space: nowrap;\n  position: relative;\n  transition: 0.2s;\n  border-radius: 3px;\n  font-weight: ", ";\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  .item-icon{\n    margin-right: 15px;\n    padding-left: .4rem;\n    position: absolute;\n  }\n\n  .item-text{\n    overflow: hidden;\n    text-overflow: ellipsis;\n    height: 30px;\n    width: 100%;\n    padding: .4rem 0 .4rem calc(25px + .4rem);\n\n    & >*:first-child{\n      position: absolute;\n      left:0;\n      top:0;\n      padding: .4rem 0 .4rem calc(25px + .4rem);\n      width: 100%;\n      margin:0;\n    }\n  }\n"])), typography.weight.medium);
var SidebarTrigger = styled(ButtonIcon)(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1;\n  top: 86vh;\n  transition: 300ms;\n  width: 28px;\n  height: 28px;\n  font-size: 18px;\n  padding-top: 3px;\n  padding-left: 4px;\n"], ["\n  position: fixed;\n  z-index: 1;\n  top: 86vh;\n  transition: 300ms;\n  width: 28px;\n  height: 28px;\n  font-size: 18px;\n  padding-top: 3px;\n  padding-left: 4px;\n"])));
var StyledBarFooter = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.8rem;\n\n  & > li:hover{\n    color: ", ";\n    text-shadow: 0 0 1px ", ";\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding: 0.8rem;\n\n  & > li:hover{\n    color: ", ";\n    text-shadow: 0 0 1px ", ";\n  }\n"])), color.grayscale.black, color.grayscale.iron);
var StyledContentOut = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: #F4F8F9;\n  position:absolute;\n  left: var(--leftSidebarWidth);\n  width: calc(100vw - var(--leftSidebarWidth,0px));\n  min-height: 100%;\n  transition: 300ms;\n  overflow: hidden;\n"], ["\n  background-color: #F4F8F9;\n  position:absolute;\n  left: var(--leftSidebarWidth);\n  width: calc(100vw - var(--leftSidebarWidth,0px));\n  min-height: 100%;\n  transition: 300ms;\n  overflow: hidden;\n"])));
var templateObject_1$4, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

function SidebarLayout(_a) {
    var children = _a.children, _b = _a.theme, theme = _b === void 0 ? "default" : _b, rest = __rest(_a, ["children", "theme"]);
    return (jsx(StyledLayout, __assign({ theme: theme }, rest, { children: children })));
}
function Bar(_a) {
    var children = _a.children, isOpen = _a.isOpen, rest = __rest(_a, ["children", "isOpen"]);
    if (isOpen) {
        document.documentElement.style.setProperty("--leftSidebarWidth", "220px");
    }
    else {
        document.documentElement.style.setProperty("--leftSidebarWidth", "55px");
    }
    return (jsx(StyledBar, __assign({ id: "b" }, rest, { isOpen: isOpen }, { children: children })));
}
Bar.Menu = function BarMenu(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledBarMenu, __assign({}, rest, { children: children }));
};
Bar.Item = function BarItem(_a) {
    var children = _a.children, active = _a.active, icon = _a.icon, rest = __rest(_a, ["children", "active", "icon"]);
    return (jsxs(StyledBarItem, __assign({ className: "li-item ".concat(active && "active"), active: active }, rest, { children: [icon && jsx("span", __assign({ className: "item-icon" }, { children: icon })), jsx("span", __assign({ className: "item-text" }, { children: children }))] })));
};
Bar.FloatArrowTrigger = function BarFloatArrowTrigger(_a) {
    _a.children; var rest = __rest(_a, ["children"]);
    return jsx(SidebarTrigger, __assign({ id: "btnOpenSidebar", icon: "arrow-left" }, rest));
};
Bar.Footer = function BarFooter(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledBarFooter, __assign({}, rest, { children: children }));
};
function ContentOut(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return jsx(StyledContentOut, __assign({}, rest, { children: children }));
}

var StylingLink = styled.span(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  text-decoration: none;\n  font-size: ", "px;\n  font-weight: 500;\n  cursor: pointer;\n  vertical-align: middle;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover>.lbl {\n    text-decoration: underline;\n  }\n  .icon {\n    margin-right: 11px;\n  }\n"], ["\n  text-decoration: none;\n  font-size: ", "px;\n  font-weight: 500;\n  cursor: pointer;\n  vertical-align: middle;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  &:hover>.lbl {\n    text-decoration: underline;\n  }\n  .icon {\n    margin-right: 11px;\n  }\n"])), typography.size.m2, function (props) {
    return props.theme == "jungle" &&
        "\n    color: ".concat(color.primary.jungle, ";\n  ");
}, function (props) {
    return props.theme == THEMES.HAVELOCK &&
        "\n    color: ".concat(color.primary.havelock, ";\n  ");
}, function (props) {
    return props.theme == THEMES.PUNCH &&
        "\n    color: ".concat(color.primary.punch, ";\n  ");
}, function (props) {
    return props.theme == THEMES.STUDIO &&
        "\n    color: ".concat(color.primary.studio, ";\n  ");
});
var LblLink = forwardRef(function (_a, ref
// ref={ref as ComponentProps<typeof StyledBigButton>['ref']}
) {
    var children = _a.children, id = _a.id, _b = _a.theme, theme = _b === void 0 ? "jungle" : _b, backButton = _a.backButton, rest = __rest(_a, ["children", "id", "theme", "backButton"]);
    return (
    // <StylingLink>
    jsx(Fragment, { children: jsx(StylingLink, __assign({ className: "lbl", id: id }, rest, { theme: theme, ref: ref }, { children: jsxs(Fragment, { children: [backButton && jsx("span", { className: "icon icon-arrow-left" }), children] }) })) })
    // </StylingLink>
    );
});
var templateObject_1$3;

var StyledCard = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 3px;\n  background-color: white;\n  padding: 25px 20px;\n  width: fit-content;\n"], ["\n  border: 1px solid ", ";\n  border-radius: 3px;\n  background-color: white;\n  padding: 25px 20px;\n  width: fit-content;\n"])), color.grayscale.dust);
var Card = forwardRef(function (_a, ref) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx(StyledCard, __assign({}, rest, { ref: ref }, { children: jsx(Fragment, { children: children }) })));
});
var templateObject_1$2;

var StyledSubheader = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid ", "33;\n  padding: 15px 10px;\n  min-height: 30.5px;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  width: 100%;\n  border-bottom: 1px solid ", "33;\n  padding: 15px 10px;\n  min-height: 30.5px;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), color.grayscale.silver, function (props) {
    return props.verticalAlign === "top" &&
        "\n      align-items: flex-start;\n    ";
}, function (props) {
    return props.verticalAlign === "middle" &&
        "\n    align-items: center;\n  ";
}, function (props) {
    return props.verticalAlign === "bottom" &&
        "\n    align-items: flex-end;\n  ";
}, function (props) {
    return props.horizontalAlign === "spacing" &&
        "\n      justify-content: space-between;\n    ";
}, function (props) {
    return props.horizontalAlign === "center" &&
        "\n      justify-content: center;\n    ";
});
var Subheader = forwardRef(function (_a, ref) {
    var title = _a.title, _b = _a.horizontalAlign, horizontalAlign = _b === void 0 ? "spacing" : _b, verticalAlign = _a.verticalAlign, children = _a.children, rest = __rest(_a, ["title", "horizontalAlign", "verticalAlign", "children"]);
    return (jsx(StyledSubheader, __assign({}, rest, { horizontalAlign: horizontalAlign, verticalAlign: verticalAlign, ref: ref }, { children: jsxs(Fragment, { children: [title ? jsx(H1, { children: title }) : null, children] }) })));
});
var templateObject_1$1;

var WrapperLighbox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledLightbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: ", "E6;\n  z-index: 9;\n  display: none;\n  ", ";\n"], ["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: ", "E6;\n  z-index: 9;\n  display: none;\n  ", ";\n"])), color.secondary.nile, function (props) {
    return props.visible &&
        "\n    display:block;\n  ";
});
var Lightbox = forwardRef(function (_a, ref) {
    var children = _a.children, id = _a.id, _b = _a.visible, visible = _b === void 0 ? false : _b, rest = __rest(_a, ["children", "id", "visible"]);
    var _c = useState(false), useVisible = _c[0]; _c[1];
    return (jsx(WrapperLighbox, __assign({}, rest, { ref: ref }, { children: jsx(Fragment, { children: jsx(StyledLightbox, __assign({ id: id, visible: useVisible || visible }, { children: jsx(Fragment, { children: children }) })) }) })));
});
var templateObject_1, templateObject_2;

export { Bar, BigButton, Button, ButtonIcon, Card, Checkbox, Col, Content, ContentOut, Div, H1, H2, H3, H4, H5, H6, Hcol, Header, Input, InputDate, Label$1 as Label, LblLink, Lightbox, Medium, Nav, Option, P, Progressbar, Radio, Row, Scrollbar, Section, Select, SidebarLayout, Small, Spinner, StyledButton, StyledButtonIcon, Subheader, Switch, TABLE, TD, TR, Tab, Tabs, TextCounter, Textarea, Title, color, global, styles };
//# sourceMappingURL=index.esm.js.map
