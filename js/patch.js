var CABLES;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ core)
});

// NAMESPACE OBJECT: ./src/core/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, {
  UTILS: () => (UTILS),
  ajax: () => (ajax),
  ajaxSync: () => (ajaxSync),
  basename: () => (basename),
  cacheBust: () => (cacheBust),
  clamp: () => (clamp),
  cleanJson: () => (cleanJson),
  copyArray: () => (copyArray),
  filename: () => (filename),
  generateUUID: () => (generateUUID),
  getShortOpName: () => (getShortOpName),
  keyCodeToName: () => (keyCodeToName),
  logErrorConsole: () => (logErrorConsole),
  logStack: () => (logStack),
  map: () => (map),
  prefixedHash: () => (prefixedHash),
  request: () => (request),
  shortId: () => (shortId),
  shuffleArray: () => (shuffleArray),
  simpleId: () => (simpleId),
  smoothStep: () => (smoothStep),
  smootherStep: () => (smootherStep),
  uuid: () => (uuid)
});

// NAMESPACE OBJECT: ./src/core/anim.js
var anim_namespaceObject = {};
__webpack_require__.r(anim_namespaceObject);
__webpack_require__.d(anim_namespaceObject, {
  ANIM: () => (ANIM),
  Anim: () => (Anim)
});

;// CONCATENATED MODULE: ./src/core/constants.js
const CONSTANTS = {
    "ANIM": {
        "EASINGS": [
            "linear",
            "absolute",
            "smoothstep",
            "smootherstep",
            "Cubic In",
            "Cubic Out",
            "Cubic In Out",
            "Expo In",
            "Expo Out",
            "Expo In Out",
            "Sin In",
            "Sin Out",
            "Sin In Out",
            "Quart In",
            "Quart Out",
            "Quart In Out",
            "Quint In",
            "Quint Out",
            "Quint In Out",
            "Back In",
            "Back Out",
            "Back In Out",
            "Elastic In",
            "Elastic Out",
            "Bounce In",
            "Bounce Out",
        ],
        "EASING_LINEAR": 0,
        "EASING_ABSOLUTE": 1,
        "EASING_SMOOTHSTEP": 2,
        "EASING_SMOOTHERSTEP": 3,
        "EASING_CUBICSPLINE": 4,

        "EASING_CUBIC_IN": 5,
        "EASING_CUBIC_OUT": 6,
        "EASING_CUBIC_INOUT": 7,

        "EASING_EXPO_IN": 8,
        "EASING_EXPO_OUT": 9,
        "EASING_EXPO_INOUT": 10,

        "EASING_SIN_IN": 11,
        "EASING_SIN_OUT": 12,
        "EASING_SIN_INOUT": 13,

        "EASING_BACK_IN": 14,
        "EASING_BACK_OUT": 15,
        "EASING_BACK_INOUT": 16,

        "EASING_ELASTIC_IN": 17,
        "EASING_ELASTIC_OUT": 18,

        "EASING_BOUNCE_IN": 19,
        "EASING_BOUNCE_OUT": 21,

        "EASING_QUART_IN": 22,
        "EASING_QUART_OUT": 23,
        "EASING_QUART_INOUT": 24,

        "EASING_QUINT_IN": 25,
        "EASING_QUINT_OUT": 26,
        "EASING_QUINT_INOUT": 27,
    },

    "OP": {
        "OP_PORT_TYPE_VALUE": 0,
        "OP_PORT_TYPE_NUMBER": 0,
        "OP_PORT_TYPE_FUNCTION": 1,
        "OP_PORT_TYPE_TRIGGER": 1,
        "OP_PORT_TYPE_OBJECT": 2,
        "OP_PORT_TYPE_TEXTURE": 2,
        "OP_PORT_TYPE_ARRAY": 3,
        "OP_PORT_TYPE_DYNAMIC": 4,
        "OP_PORT_TYPE_STRING": 5,

        "OP_VERSION_PREFIX": "_v",
    },

    "PORT": {
        "PORT_DIR_IN": 0,
        "PORT_DIR_OUT": 1,
    },

    "PACO": {
        "PACO_CLEAR": 0,
        "PACO_VALUECHANGE": 1,
        "PACO_OP_DELETE": 2,
        "PACO_UNLINK": 3,
        "PACO_LINK": 4,
        "PACO_LOAD": 5,
        "PACO_OP_CREATE": 6,
        "PACO_OP_ENABLE": 7,
        "PACO_OP_DISABLE": 8,
        "PACO_UIATTRIBS": 9,
        "PACO_VARIABLES": 10,
        "PACO_TRIGGERS": 11,
        "PACO_PORT_SETVARIABLE": 12,
        "PACO_PORT_SETANIMATED": 13,
        "PACO_PORT_ANIM_UPDATED": 14,
        "PACO_DESERIALIZE": 15,
        "PACO_OP_RELOAD": 16
    },
};

;// CONCATENATED MODULE: ./src/core/utils.js

/**
 * @namespace external:CABLES#Utils
 */



const UTILS = {};
/**
 * Merge two Float32Arrays.
 * @function float32Concat
 * @memberof Utils
 * @param {Float32Array} first Left-hand side array
 * @param {Float32Array} second Right-hand side array
 * @return {Float32Array}
 * @static
 */
UTILS.float32Concat = function (first, second)
{
    if (!(first instanceof Float32Array)) first = new Float32Array(first);
    if (!(second instanceof Float32Array)) second = new Float32Array(second);

    const result = new Float32Array(first.length + second.length);

    result.set(first);
    result.set(second, first.length);

    return result;
};

/**
 * get op shortname: only last part of fullname and without version
 * @function getShortOpName
 * @memberof CABLES
 * @param {string} fullname full op name
 * @static
 */
const getShortOpName = function (fullname)
{
    let name = fullname.split(".")[fullname.split(".").length - 1];

    if (name.contains(CONSTANTS.OP.OP_VERSION_PREFIX))
    {
        const n = name.split(CONSTANTS.OP.OP_VERSION_PREFIX)[1];
        name = name.substring(0, name.length - (CONSTANTS.OP.OP_VERSION_PREFIX + n).length);
    }
    return name;
};

/**
 * randomize order of an array
 * @function shuffleArray
 * @memberof Utils
 * @param {Array|Float32Array} array {Array} original
 * @return {Array|Float32Array} shuffled array
 * @static
 */
const shuffleArray = function (array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.seededRandom() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};


/**
 * generate a short "relativly unique" id
 * @function shortId
 * @memberof Utils
 * @return {String} generated ID
 * @static
 */

const _shortIds = {};
const _shortId = function ()
{
    let str = Math.random().toString(36).substr(2, 9);

    if (_shortIds.hasOwnProperty(str)) str = _shortId();
    _shortIds[str] = true;
    return str;
};
const shortId = _shortId;


/**
 * generate a UUID
 * @function uuid
 * @memberof Utils
 * @return {String} generated UUID
 * @static
 */
const _uuid = function ()
{
    let d = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};
const uuid = _uuid;
const generateUUID = _uuid;



function cleanJson(obj)
{
    for (const i in obj)
    {
        if (obj[i] && typeof objValue === "object" && obj[i].constructor === Object) obj[i] = cleanJson(obj[i]);

        if (obj[i] === null || obj[i] === undefined) delete obj[i];
        else if (Array.isArray(obj[i]) && obj[i].length == 0) delete obj[i];
    }

    return obj;
}


/**
 * @see http://stackoverflow.com/q/7616461/940217
 * @memberof Utils
 * @param str
 * @param prefix
 * @return {string}
 */
const _prefixedHash = function (str, prefix = "id")
{
    let hash = 0;
    if (Array.prototype.reduce)
    {
        hash = str.split("").reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a; }, 0);
    }
    else
    {
        if (str.length > 0)
        {
            for (let i = 0; i < str.length; i++)
            {
                let character = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + character;
                hash &= hash; // Convert to 32bit integer
            }
        }
    }
    return prefix + "" + hash;
};
const prefixedHash = _prefixedHash;

/**
 * generate a simple ID
 * @function simpleId
 * @memberof Utils
 * @return {Number} new id
 * @static
 */
let simpleIdCounter = 0;
const simpleId = function ()
{
    simpleIdCounter++;
    return simpleIdCounter;
};

/**
 * smoothStep a value
 * @function smoothStep
 * @memberof Utils
 * @function
 * @param {Number} perc value value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smoothStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * (3 - 2 * x); // smoothstep
    return perc;
};

/**
 * smootherstep a value
 * @function smootherStep
 * @memberof Utils
 * @param {Number} perc value to be smoothed [0-1]
 * @return {Number} smoothed value
 * @static
 */
const smootherStep = function (perc)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return perc;
};


/**
 * clamp number / make sure its between min/max
 * @function clamp
 * @memberof Utils
 * @param {Number} value value to be mapped
 * @param {Number} min minimum value
 * @param {Number} max maximum value
 * @static
 */
const clamp = function (value, min, max)
{
    return Math.min(Math.max(value, min), max);
};

/**
 * map a value in a range to a value in another range
 * @function map
 * @memberof Utils
 * @param {Number} x value to be mapped
 * @param {Number} _oldMin old range minimum value
 * @param {Number} _oldMax old range maximum value
 * @param {Number} _newMin new range minimum value
 * @param {Number} _newMax new range maximum value
 * @param {Number} _easing
 * @return {Number} mapped value
 * @static
 */
const map = function (x, _oldMin, _oldMax, _newMin, _newMax, _easing)
{
    if (x >= _oldMax) return _newMax;
    if (x <= _oldMin) return _newMin;

    let reverseInput = false;
    const oldMin = Math.min(_oldMin, _oldMax);
    const oldMax = Math.max(_oldMin, _oldMax);
    if (oldMin != _oldMin) reverseInput = true;

    let reverseOutput = false;
    const newMin = Math.min(_newMin, _newMax);
    const newMax = Math.max(_newMin, _newMax);
    if (newMin != _newMin) reverseOutput = true;

    let portion = 0;
    let r = 0;

    if (reverseInput) portion = ((oldMax - x) * (newMax - newMin)) / (oldMax - oldMin);
    else portion = ((x - oldMin) * (newMax - newMin)) / (oldMax - oldMin);

    if (reverseOutput) r = newMax - portion;
    else r = portion + newMin;

    if (!_easing) return r;
    if (_easing == 1)
    {
        // smoothstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * (3 - 2 * x) * (_newMax - _newMin);
    }
    if (_easing == 2)
    {
        // smootherstep
        x = Math.max(0, Math.min(1, (r - _newMin) / (_newMax - _newMin)));
        return _newMin + x * x * x * (x * (x * 6 - 15) + 10) * (_newMax - _newMin);
    }

    return r;
};

/**
 * @namespace Math
 */
/**
 * set random seed for seededRandom()
 * @memberof Math
 * @type Number
 * @static
 */
Math.randomSeed = 1;


Math.setRandomSeed = function (seed)
{
    // https://github.com/cables-gl/cables_docs/issues/622
    Math.randomSeed = seed * 50728129;
    if (seed != 0)
    {
        Math.randomSeed = Math.seededRandom() * 17624813;
        Math.randomSeed = Math.seededRandom() * 9737333;
    }
};


/**
 * generate a seeded random number
 * @function seededRandom
 * @memberof Math
 * @param {Number} max minimum possible random number
 * @param {Number} min maximum possible random number
 * @return {Number} random value
 * @static
 */
Math.seededRandom = function (max, min)
{
    if (Math.randomSeed === 0) Math.randomSeed = Math.random() * 999;
    max = max || 1;
    min = min || 0;

    Math.randomSeed = (Math.randomSeed * 9301 + 49297) % 233280;
    const rnd = Math.randomSeed / 233280.0;

    return min + rnd * (max - min);
};


// ----------------------------------------------------------------

/**
 * returns true if parameter is a number
 * @function isNumeric
 * @memberof Utils
 * @param {Any} n value The value to check.
 * @return {Boolean}
 * @static
 */
UTILS.isNumeric = function (n)
{
    return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * returns true if parameter is array
 * @function isArray
 * @param {Any} v value Value to check
 * @memberof Utils
 * @return {Boolean}
 * @static
 */
UTILS.isArray = function (v)
{
    return Object.prototype.toString.call(v) === "[object Array]";
};

/**
 * @namespace String
 */

/**
 * append a linebreak to a string
 * @function endl
 * @memberof String
 * @return {String} string with newline break appended ('\n')
 */
String.prototype.endl = function ()
{
    return this + "\n";
};

/**
 * return true if string starts with prefix
 * @function startsWith
 * @memberof String
 * @param {String} prefix The prefix to check.
 * @return {Boolean}
 */
String.prototype.startsWith = function (prefix)
{
    if (!this || !prefix) return false;
    if (this.length >= prefix.length)
    {
        if (this.substring(0, prefix.length) == prefix) return true;
    }
    return false;
    // return this.indexOf(prefix) === 0;
};

/**
 * return true if string ends with suffix
 * @function endsWith
 * @memberof String
 * @param {String} suffix
 * @return {Boolean}
 */
String.prototype.endsWith = String.prototype.endsWith || function (suffix)
{
    return this.match(suffix + "$") == suffix;
};

/**
 * return true if string contains string
 * @function contains
 * @memberof String
 * @param {String} searchStr
 * @return {Boolean}
 */
String.prototype.contains = String.prototype.contains || function (searchStr)
{
    return this.indexOf(searchStr) > -1;
};



// ----------------------------------------------------------------

/**
 * append a unique/random parameter to a url, so the browser is forced to reload the file, even if its cached
 * @function cacheBust
 * @static
 * @memberof Utils
 * @param {String} url The url to append the cachebuster parameter to.
 * @return {String} url with cachebuster parameter
 */
const cacheBust = function (url = "")
{
    if (!url) return "";
    if (url.startsWith("data:")) return;
    if (url.contains("?")) url += "&";
    else url += "?";
    return url + "cache=" + CABLES.uuid();
};

/**
 * copy the content of an array
 * @function copyArray
 * @static
 * @memberof Utils
 * @param {Array} src sourceArray
 * @param {Array} dst optional
 * @return {Array} dst
 */
const copyArray = function (src, dst)
{
    if (!src) return null;
    dst = dst || [];
    dst.length = src.length;
    for (let i = 0; i < src.length; i++)
    {
        dst[i] = src[i];
    }

    return dst;
};


/**
 * return the filename part of a url without extension
 * @function basename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const basename = function (url)
{
    let name = CABLES.filename(url);

    const parts2 = name.split(".");
    name = parts2[0];

    return name;
};

/**
 * output a stacktrace to the console
 * @function logStack
 * @static
 * @memberof Utils
 */
const logStack = function ()
{
    console.log("logstack", (new Error()).stack);
};

/**
 * return the filename part of a url
 * @function filename
 * @static
 * @memberof Utils
 * @param {String} url
 * @return {String} just the filename
 */
const filename = function (url)
{
    let name = "";
    if (!url) return "";

    if (url.startsWith("data:") && url.contains(":"))
    {
        const parts = url.split(",");
        return parts[0];
    }

    let parts = (url + "").split("/");
    if (parts.length > 0)
    {
        const str = parts[parts.length - 1];
        let parts2 = str.split("?");
        name = parts2[0];
    }

    return name || "";
};


const ajaxSync = function (url, cb, method, post, contenttype)
{
    request({
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": true,
    });
};

/**
 * make an ajax request
 * @static
 * @function ajax
 * @param url
 * @param cb
 * @param method
 * @param post
 * @param contenttype
 * @param jsonP
 * @param headers
 * @param options
 */
const ajax = function (url, cb, method, post, contenttype, jsonP, headers = {}, options = {})
{
    const requestOptions = {
        "url": url,
        "cb": cb,
        "method": method,
        "data": post,
        "contenttype": contenttype,
        "sync": false,
        "jsonP": jsonP,
        "headers": headers,
    };
    if (options && options.credentials) requestOptions.credentials = options.credentials;
    request(requestOptions);
};

const request = function (options)
{
    if (!options.hasOwnProperty("asynch")) options.asynch = true;

    let xhr;
    try
    {
        xhr = new XMLHttpRequest();
    }
    catch (e) {}

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState != 4) return;

        if (options.cb)
        {
            if (xhr.status == 200 || xhr.status == 0) options.cb(false, xhr.responseText, xhr);
            else options.cb(true, xhr.responseText, xhr);
        }
    };

    try
    {
        xhr.open(options.method ? options.method.toUpperCase() : "GET", options.url, !options.sync);
    }
    catch (e)
    {
        if (options.cb && e) options.cb(true, e.msg, xhr);
    }

    if (typeof options.headers === "object")
    {
        if (options.headers)
        {
            const keys = Object.keys(options.headers);
            for (let i = 0; i < keys.length; i++)
            {
                const name = keys[i];
                const value = options.headers[name];
                xhr.setRequestHeader(name, value);
            }
        }
    }

    if (options.credentials && options.credentials !== "omit")
    {
        xhr.withCredentials = true;
    }

    try
    {
        if (!options.post && !options.data)
        {
            xhr.send();
        }
        else
        {
            xhr.setRequestHeader(
                "Content-type",
                options.contenttype ? options.contenttype : "application/x-www-form-urlencoded",
            );
            xhr.send(options.data || options.post);
        }
    }
    catch (e)
    {
        if (options.cb) options.cb(true, e.msg, xhr);
    }
};


const keyCodeToName = function (keyCode)
{
    if (!keyCode && keyCode !== 0) return "Unidentified";
    const keys = {
        "8": "Backspace",
        "9": "Tab",
        "12": "Clear",
        "13": "Enter",
        "16": "Shift",
        "17": "Control",
        "18": "Alt",
        "19": "Pause",
        "20": "CapsLock",
        "27": "Escape",
        "32": "Space",
        "33": "PageUp",
        "34": "PageDown",
        "35": "End",
        "36": "Home",
        "37": "ArrowLeft",
        "38": "ArrowUp",
        "39": "ArrowRight",
        "40": "ArrowDown",
        "45": "Insert",
        "46": "Delete",
        "112": "F1",
        "113": "F2",
        "114": "F3",
        "115": "F4",
        "116": "F5",
        "117": "F6",
        "118": "F7",
        "119": "F8",
        "120": "F9",
        "121": "F10",
        "122": "F11",
        "123": "F12",
        "144": "NumLock",
        "145": "ScrollLock",
        "224": "Meta"
    };
    if (keys[keyCode])
    {
        return keys[keyCode];
    }
    else
    {
        return String.fromCharCode(keyCode);
    }
};
// ----------------------------------------------------------------

window.performance = window.performance || {
    "offset": Date.now(),
    "now": function now()
    {
        return Date.now() - this.offset;
    },
};


const logErrorConsole = function (initiator)
{
    CABLES.errorConsole = CABLES.errorConsole || { "log": [] };
    CABLES.errorConsole.log.push({ "initiator": initiator, "arguments": arguments });

    if (!CABLES.errorConsole.ele)
    {
        const ele = document.createElement("div");
        ele.id = "cablesErrorConsole";
        ele.style.width = "90%";
        ele.style.height = "300px";
        ele.style.zIndex = "9999999";
        ele.style.display = "inline-block";
        ele.style.position = "absolute";
        ele.style.padding = "10px";
        ele.style.fontFamily = "monospace";
        ele.style.color = "red";
        ele.style.backgroundColor = "#200";

        CABLES.errorConsole.ele = ele;
        document.body.appendChild(ele);
    }

    let logHtml = "ERROR<br/>for more info, open your browsers dev tools console (Ctrl+Shift+I or Command+Alt+I)<br/>";

    for (let l = 0; l < CABLES.errorConsole.log.length; l++)
    {
        logHtml += CABLES.errorConsole.log[l].initiator + " ";
        for (let i = 1; i < CABLES.errorConsole.log[l].arguments.length; i++)
        {
            if (i > 2)logHtml += ", ";
            let arg = CABLES.errorConsole.log[l].arguments[i];
            if (arg.constructor.name.indexOf("Error") > -1 || arg.constructor.name.indexOf("error") > -1)
            {
                let txt = "Uncaught ErrorEvent ";
                if (arg.message)txt += " message: " + arg.message;
                logHtml += txt;
            }
            else if (typeof arg == "string")
                logHtml += arg;
            else if (typeof arg == "number")
                logHtml += String(arg) + " ";
        }
        logHtml += "<br/>";
    }


    CABLES.errorConsole.ele.innerHTML = logHtml;
};




;// CONCATENATED MODULE: ../shared/client/src/logger.js
/* eslint-disable no-console */

class Logger
{
    constructor(initiator, options)
    {
        this.initiator = initiator;
        this._options = options;
    }

    stack(t)
    {
        console.info("[" + this.initiator + "] ", t);
        console.log((new Error()).stack);
    }

    groupCollapsed(t)
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent) console.log("[" + this.initiator + "]", ...arguments);

        console.groupCollapsed("[" + this.initiator + "] " + t);
    }

    table(t)
    {
        console.table(t);
    }

    groupEnd()
    {
        console.groupEnd();
    }

    error()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments)) || !CABLES.UI)
        {
            console.error("[" + this.initiator + "]", ...arguments);
        }

        if (this._options && this._options.onError)
        {
            this._options.onError(this.initiator, ...arguments);
            // console.log("emitevent onerror...");
            // CABLES.patch.emitEvent("onError", this.initiator, ...arguments);
            // CABLES.logErrorConsole("[" + this.initiator + "]", ...arguments);
        }
    }

    errorGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 2 }, ...arguments);
    }

    warn()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 1 }, ...arguments)) || !CABLES.logSilent)
            console.warn("[" + this.initiator + "]", ...arguments);
    }

    verbose()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    info()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.info("[" + this.initiator + "]", ...arguments);
    }

    log()
    {
        if ((CABLES.UI && CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments)) || !CABLES.logSilent)
            console.log("[" + this.initiator + "]", ...arguments);
    }

    logGui()
    {
        if (CABLES.UI) CABLES.UI.logFilter.filterLog({ "initiator": this.initiator, "level": 0 }, ...arguments);
    }

    userInteraction(text)
    {
        // this.log({ "initiator": "userinteraction", "text": text });
    }
}

;// CONCATENATED MODULE: ./src/core/anim_key.js


const Key = function (obj)
{
    this.time = 0.0;
    this.value = 0.0;
    // this.ui = null;
    this.onChange = null;
    this._easing = 0;
    // this.bezTangIn = 0;
    // this.bezTangOut = 0;
    // this.bezTime = 0.5;
    // this.bezValue = 0;
    // this.bezTimeIn = -0.5;
    // this.bezValueIn = 0;

    this.cb = null;
    this.cbTriggered = false;

    // const bezierAnim = null;
    // this._updateBezier = false;

    this.setEasing(CONSTANTS.ANIM.EASING_LINEAR);
    this.set(obj);
};

Key.cubicSpline = function (perc, key1, key2)
{
    let
        previousPoint = key1.value,
        previousTangent = key1.bezTangOut,
        nextPoint = key2.value,
        nextTangent = key2.bezTangIn;
    let t = perc;
    let t2 = t * t;
    let t3 = t2 * t;

    return (2 * t3 - 3 * t2 + 1) * previousPoint + (t3 - 2 * t2 + t) * previousTangent + (-2 * t3 + 3 * t2) * nextPoint + (t3 - t2) * nextTangent;
};

Key.easeCubicSpline = function (perc, key2)
{
    return Key.cubicSpline(perc, this, key2);
};


Key.linear = function (perc, key1, key2)
{
    return parseFloat(key1.value) + parseFloat(key2.value - key1.value) * perc;
};

Key.easeLinear = function (perc, key2)
{
    return Key.linear(perc, this, key2);
};

Key.easeAbsolute = function (perc, key2)
{
    return this.value;
};

const easeExpoIn = function (t)
{
    return (t = 2 ** (10 * (t - 1)));
};

Key.easeExpoIn = function (t, key2)
{
    t = easeExpoIn(t);
    return Key.linear(t, this, key2);
};

const easeExpoOut = function (t)
{
    t = -(2 ** (-10 * t)) + 1;
    return t;
};

Key.easeExpoOut = function (t, key2)
{
    t = easeExpoOut(t);
    return Key.linear(t, this, key2);
};

const easeExpoInOut = function (t)
{
    t *= 2;
    if (t < 1)
    {
        t = 0.5 * 2 ** (10 * (t - 1));
    }
    else
    {
        t--;
        t = 0.5 * (-(2 ** (-10 * t)) + 2);
    }
    return t;
};

Key.easeExpoInOut = function (t, key2)
{
    t = easeExpoInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSinIn = function (t, key2)
{
    t = -1 * Math.cos((t * Math.PI) / 2) + 1;
    return Key.linear(t, this, key2);
};

Key.easeSinOut = function (t, key2)
{
    t = Math.sin((t * Math.PI) / 2);
    return Key.linear(t, this, key2);
};

Key.easeSinInOut = function (t, key2)
{
    t = -0.5 * (Math.cos(Math.PI * t) - 1.0);
    return Key.linear(t, this, key2);
};

const easeCubicIn = function (t)
{
    t = t * t * t;
    return t;
};

Key.easeCubicIn = function (t, key2)
{
    t = easeCubicIn(t);
    return Key.linear(t, this, key2);
};


// b 0
// c 1/2 or 1
// d always 1
// easeOutCubic: function (x, t, b, c, d) {
//     return c*((t=t/d-1)*t*t + 1) + b;

Key.easeInQuint = function (t, key2)
{
    t = t * t * t * t * t;
    return Key.linear(t, this, key2);
};
Key.easeOutQuint = function (t, key2)
{
    t = (t -= 1) * t * t * t * t + 1;
    return Key.linear(t, this, key2);
};
Key.easeInOutQuint = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t * t;
    else t = 0.5 * ((t -= 2) * t * t * t * t + 2);
    return Key.linear(t, this, key2);
};

Key.easeInQuart = function (t, key2)
{
    t = t * t * t * t;
    return Key.linear(t, this, key2);
};

Key.easeOutQuart = function (t, key2)
{
    // return -c * ((t=t/d-1)*t*t*t - 1) + b;
    t = -1 * ((t -= 1) * t * t * t - 1);
    return Key.linear(t, this, key2);
};

Key.easeInOutQuart = function (t, key2)
{
    if ((t /= 0.5) < 1) t = 0.5 * t * t * t * t;
    else t = -0.5 * ((t -= 2) * t * t * t - 2);
    return Key.linear(t, this, key2);
};

Key.bounce = function (t)
{
    if ((t /= 1) < 1 / 2.75) t = 7.5625 * t * t;
    else if (t < 2 / 2.75) t = 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    else if (t < 2.5 / 2.75) t = 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    else t = 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    return t;
};

Key.easeInBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
    // return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d);
};

Key.easeOutBounce = function (t, key2)
{
    return Key.linear(Key.bounce(t), this, key2);
};

Key.easeInElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = -(a * 2 ** (10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }

    return Key.linear(t, this, key2);
};


Key.easeOutElastic = function (t, key2)
{
    let s = 1.70158;
    let p = 0;
    let a = 1;

    const b = 0;
    const d = 1;
    const c = 1;

    if (t === 0) t = b;
    else if ((t /= d) == 1) t = b + c;
    else
    {
        if (!p) p = d * 0.3;
        if (a < Math.abs(c))
        {
            a = c;
            s = p / 4;
        }
        else s = (p / (2 * Math.PI)) * Math.asin(c / a);
        t = a * 2 ** (-10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
    }

    return Key.linear(t, this, key2);
};

Key.easeInBack = function (t, key2)
{
    const s = 1.70158;
    t = t * t * ((s + 1) * t - s);

    return Key.linear(t, this, key2);
};

Key.easeOutBack = function (t, key2)
{
    const s = 1.70158;
    t = (t = t / 1 - 1) * t * ((s + 1) * t + s) + 1;

    return Key.linear(t, this, key2);
};

Key.easeInOutBack = function (t, key2)
{
    let s = 1.70158;
    const c = 1 / 2;
    if ((t /= 1 / 2) < 1) t = c * (t * t * (((s *= 1.525) + 1) * t - s));
    else t = c * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);

    return Key.linear(t, this, key2);
};

const easeCubicOut = function (t)
{
    t--;
    t = t * t * t + 1;
    return t;
};

Key.easeCubicOut = function (t, key2)
{
    t = easeCubicOut(t);
    return Key.linear(t, this, key2);
};

const easeCubicInOut = function (t)
{
    t *= 2;
    if (t < 1) t = 0.5 * t * t * t;
    else
    {
        t -= 2;
        t = 0.5 * (t * t * t + 2);
    }
    return t;
};

Key.easeCubicInOut = function (t, key2)
{
    t = easeCubicInOut(t);
    return Key.linear(t, this, key2);
};

Key.easeSmoothStep = function (perc, key2)
{
    // var x = Math.max(0, Math.min(1, (perc-0)/(1-0)));
    const x = Math.max(0, Math.min(1, perc));
    perc = x * x * (3 - 2 * x); // smoothstep
    return Key.linear(perc, this, key2);
};

Key.easeSmootherStep = function (perc, key2)
{
    const x = Math.max(0, Math.min(1, (perc - 0) / (1 - 0)));
    perc = x * x * x * (x * (x * 6 - 15) + 10); // smootherstep
    return Key.linear(perc, this, key2);
};

Key.prototype.setEasing = function (e)
{
    this._easing = e;

    if (this._easing == CONSTANTS.ANIM.EASING_LINEAR) this.ease = Key.easeLinear;
    else if (this._easing == CONSTANTS.ANIM.EASING_ABSOLUTE) this.ease = Key.easeAbsolute;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHSTEP) this.ease = Key.easeSmoothStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_SMOOTHERSTEP) this.ease = Key.easeSmootherStep;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_IN) this.ease = Key.easeCubicIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_OUT) this.ease = Key.easeCubicOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBIC_INOUT) this.ease = Key.easeCubicInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_IN) this.ease = Key.easeExpoIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_OUT) this.ease = Key.easeExpoOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_EXPO_INOUT) this.ease = Key.easeExpoInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_IN) this.ease = Key.easeSinIn;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_OUT) this.ease = Key.easeSinOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_SIN_INOUT) this.ease = Key.easeSinInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_OUT) this.ease = Key.easeOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_IN) this.ease = Key.easeInBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_BACK_INOUT) this.ease = Key.easeInOutBack;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_IN) this.ease = Key.easeInElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_OUT) this.ease = Key.easeOutElastic;
    else if (this._easing == CONSTANTS.ANIM.EASING_ELASTIC_INOUT) this.ease = Key.easeElasticInOut;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_IN) this.ease = Key.easeInBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_BOUNCE_OUT) this.ease = Key.easeOutBounce;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_OUT) this.ease = Key.easeOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_IN) this.ease = Key.easeInQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUART_INOUT) this.ease = Key.easeInOutQuart;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_OUT) this.ease = Key.easeOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_IN) this.ease = Key.easeInQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_QUINT_INOUT) this.ease = Key.easeInOutQuint;
    else if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE)
    {
        // this._updateBezier = true;
        this.ease = Key.easeCubicSpline;
    }
    else
    {
        this._easing = CONSTANTS.ANIM.EASING_LINEAR;
        this.ease = Key.easeLinear;
    }
};

Key.prototype.trigger = function ()
{
    this.cb();
    this.cbTriggered = true;
};

Key.prototype.setValue = function (v)
{
    this.value = v;
    // this._updateBezier = true;
    if (this.onChange !== null) this.onChange();
};

Key.prototype.set = function (obj)
{
    if (obj)
    {
        if (obj.e) this.setEasing(obj.e);
        if (obj.cb)
        {
            this.cb = obj.cb;
            this.cbTriggered = false;
        }

        if (obj.b)
        {
            // this.bezTime = obj.b[0];
            // this.bezValue = obj.b[1];
            // this.bezTimeIn = obj.b[2];
            // this.bezValueIn = obj.b[3];
            // this._updateBezier = true;
        }

        if (obj.hasOwnProperty("t")) this.time = obj.t;
        if (obj.hasOwnProperty("time")) this.time = obj.time;
        if (obj.hasOwnProperty("v")) this.value = obj.v;
        else if (obj.hasOwnProperty("value")) this.value = obj.value;
    }
    if (this.onChange !== null) this.onChange();
};

Key.prototype.getSerialized = function ()
{
    const obj = {};
    obj.t = this.time;
    obj.v = this.value;
    obj.e = this._easing;
    // if (this._easing == CONSTANTS.ANIM.EASING_CUBICSPLINE) obj.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn];

    return obj;
};

Key.prototype.getEasing = function ()
{
    return this._easing;
};



;// CONCATENATED MODULE: ./src/core/eventtarget.js


const EventTarget = function ()
{
    this._log = new Logger("eventtarget");
    this._eventCallbacks = {};
    this._logName = "";
    this._logEvents = false;
    this._listeners = {};

    this.addEventListener = this.on = function (which, cb, idPrefix)
    {
        const event =
        {
            "id": (idPrefix || "") + CABLES.simpleId(),
            "name": which,
            "cb": cb,
        };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    };

    this.hasEventListener = function (which, cb)
    {
        if (which && !cb)
        {
            // check by id
            if (this._listeners[which]) return true;
            else return false;
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (which && cb)
            {
                if (this._eventCallbacks[which])
                {
                    const idx = this._eventCallbacks[which].indexOf(cb);
                    if (idx == -1) return false;
                    return true;
                }
            }
        }
    };

    this.hasListenerForEventName = function (eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    };

    this.removeEventListener = this.off = function (which, cb)
    {
        if (which === null || which === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[which];
            if (!event)
            {
                this._log.log("removeEvent: could not find event...", which, this);
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.startsWith(which)) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[which];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[which].length; i++)
            if (this._eventCallbacks[which][i].cb == cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + which);
    };

    this.logEvents = function (enabled, name)
    {
        this._logEvents = enabled;
        this._logName = name;
    };

    this.emitEvent = function (which, param1, param2, param3, param4, param5, param6)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    };
};



;// CONCATENATED MODULE: ./src/core/anim.js





/**
 * Keyframed interpolated animation.
 *
 * Available Easings:
 * <code>
 * CONSTANTS.ANIM.EASING_LINEAR
 * CONSTANTS.ANIM.EASING_ABSOLUTE
 * CONSTANTS.ANIM.EASING_SMOOTHSTEP
 * CONSTANTS.ANIM.EASING_SMOOTHERSTEP
 * CONSTANTS.ANIM.EASING_CUBICSPLINE

 * CONSTANTS.ANIM.EASING_CUBIC_IN
 * CONSTANTS.ANIM.EASING_CUBIC_OUT
 * CONSTANTS.ANIM.EASING_CUBIC_INOUT

 * CONSTANTS.ANIM.EASING_EXPO_IN
 * CONSTANTS.ANIM.EASING_EXPO_OUT
 * CONSTANTS.ANIM.EASING_EXPO_INOUT

 * CONSTANTS.ANIM.EASING_SIN_IN
 * CONSTANTS.ANIM.EASING_SIN_OUT
 * CONSTANTS.ANIM.EASING_SIN_INOUT

 * CONSTANTS.ANIM.EASING_BACK_IN
 * CONSTANTS.ANIM.EASING_BACK_OUT
 * CONSTANTS.ANIM.EASING_BACK_INOUT

 * CONSTANTS.ANIM.EASING_ELASTIC_IN
 * CONSTANTS.ANIM.EASING_ELASTIC_OUT

 * CONSTANTS.ANIM.EASING_BOUNCE_IN
 * CONSTANTS.ANIM.EASING_BOUNCE_OUT

 * CONSTANTS.ANIM.EASING_QUART_IN
 * CONSTANTS.ANIM.EASING_QUART_OUT
 * CONSTANTS.ANIM.EASING_QUART_INOUT

 * CONSTANTS.ANIM.EASING_QUINT_IN
 * CONSTANTS.ANIM.EASING_QUINT_OUT
 * CONSTANTS.ANIM.EASING_QUINT_INOUT
 * </code>
 * @class
 * @param cfg
 * @example
 * var anim=new CABLES.Anim();
 * anim.setValue(0,0);  // set value 0 at 0 seconds
 * anim.setValue(10,1); // set value 1 at 10 seconds
 * anim.getValue(5);    // get value at 5 seconds - this returns 0.5
 */

const Anim = function (cfg)
{
    EventTarget.apply(this);

    cfg = cfg || {};
    this.keys = [];
    this.onChange = null;
    this.stayInTimeline = false;
    this.loop = false;
    this._log = new Logger("Anim");
    this._lastKeyIndex = 0;
    this._cachedIndex = 0;
    this.name = cfg.name || null;

    /**
     * @member defaultEasing
     * @memberof Anim
     * @instance
     * @type {Number}
     */
    this.defaultEasing = cfg.defaultEasing || CONSTANTS.ANIM.EASING_LINEAR;
    this.onLooped = null;

    this._timesLooped = 0;
    this._needsSort = false;
};

Anim.prototype.forceChangeCallback = function ()
{
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.getLoop = function ()
{
    return this.loop;
};

Anim.prototype.setLoop = function (target)
{
    this.loop = target;
    this.emitEvent("onChange", this);
};

/**
 * returns true if animation has ended at @time
 * checks if last key time is < time
 * @param {Number} time
 * @returns {Boolean}
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.hasEnded = function (time)
{
    if (this.keys.length === 0) return true;
    if (this.keys[this._lastKeyIndex].time <= time) return true;
    return false;
};

Anim.prototype.isRising = function (time)
{
    if (this.hasEnded(time)) return false;
    const ki = this.getKeyIndex(time);
    if (this.keys[ki].value < this.keys[ki + 1].value) return true;
    return false;
};

/**
 * remove all keys from animation before time
 * @param {Number} time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clearBefore = function (time)
{
    const v = this.getValue(time);
    const ki = this.getKeyIndex(time);

    this.setValue(time, v);

    if (ki > 1) this.keys.splice(0, ki);
    this._updateLastIndex();
};
/**
 * remove all keys from animation
 * @param {Number} [time=0] set a new key at time with the old value at time
 * @memberof Anim
 * @instance
 * @function
 */
Anim.prototype.clear = function (time)
{
    let v = 0;
    if (time) v = this.getValue(time);
    this.keys.length = 0;
    this._updateLastIndex();
    if (time) this.setValue(time, v);
    if (this.onChange !== null) this.onChange();
    this.emitEvent("onChange", this);
};

Anim.prototype.sortKeys = function ()
{
    this.keys.sort((a, b) => { return parseFloat(a.time) - parseFloat(b.time); });
    this._updateLastIndex();
    this._needsSort = false;
    if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
};

Anim.prototype.getLength = function ()
{
    if (this.keys.length === 0) return 0;
    return this.keys[this.keys.length - 1].time;
};

Anim.prototype.getKeyIndex = function (time)
{
    let index = 0;
    let start = 0;
    if (this._cachedIndex && this.keys.length > this._cachedIndex && time >= this.keys[this._cachedIndex].time) start = this._cachedIndex;
    for (let i = start; i < this.keys.length; i++)
    {
        if (time >= this.keys[i].time) index = i;
        if (this.keys[i].time > time)
        {
            if (time != 0) this._cachedIndex = index;
            return index;
        }
    }

    return index;
};

/**
 * set value at time
 * @function setValue
 * @memberof Anim
 * @instance
 * @param {Number} time
 * @param {Number} value
 * @param {Function} cb callback
 */
Anim.prototype.setValue = function (time, value, cb)
{
    let found = null;

    if (this.keys.length == 0 || time <= this.keys[this.keys.length - 1].time)
        for (let i = 0; i < this.keys.length; i++)
            if (this.keys[i].time == time)
            {
                found = this.keys[i];
                this.keys[i].setValue(value);
                this.keys[i].cb = cb;
                break;
            }

    if (!found)
    {
        found = new Key(
            {
                "time": time,
                "value": value,
                "e": this.defaultEasing,
                "cb": cb,
            });
        this.keys.push(found);

        // if (this.keys.length % 1000 == 0)console.log(this.name, this.keys.length);
        this._updateLastIndex();
    }

    if (this.onChange) this.onChange();
    this.emitEvent("onChange", this);
    this._needsSort = true;
    return found;
};

Anim.prototype.setKeyEasing = function (index, e)
{
    if (this.keys[index])
    {
        this.keys[index].setEasing(e);
        this.emitEvent("onChange", this);
    }
};

Anim.prototype.getSerialized = function ()
{
    const obj = {};
    obj.keys = [];
    obj.loop = this.loop;

    for (let i = 0; i < this.keys.length; i++)
        obj.keys.push(this.keys[i].getSerialized());

    return obj;
};

Anim.prototype.getKey = function (time)
{
    const index = this.getKeyIndex(time);
    return this.keys[index];
};

Anim.prototype.getNextKey = function (time)
{
    let index = this.getKeyIndex(time) + 1;
    if (index >= this.keys.length) index = this.keys.length - 1;

    return this.keys[index];
};

Anim.prototype.isFinished = function (time)
{
    if (this.keys.length <= 0) return true;
    return time > this.keys[this.keys.length - 1].time;
};

Anim.prototype.isStarted = function (time)
{
    if (this.keys.length <= 0) return false;
    return time >= this.keys[0].time;
};

/**
 * get value at time
 * @function getValue
 * @memberof Anim
 * @instance
 * @param {Number} [time] time
 * @returns {Number} interpolated value at time
 */
Anim.prototype.getValue = function (time)
{
    if (this.keys.length === 0)
    {
        return 0;
    }
    if (this._needsSort) this.sortKeys();

    if (!this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }

    if (time < this.keys[0].time)
    {
        // if (this.name)console.log("A");

        return this.keys[0].value;
    }

    if (this.loop && time > this.keys[this._lastKeyIndex].time)
    {
        const currentLoop = time / this.keys[this._lastKeyIndex].time;
        if (currentLoop > this._timesLooped)
        {
            this._timesLooped++;
            if (this.onLooped) this.onLooped();
        }
        time = (time - this.keys[0].time) % (this.keys[this._lastKeyIndex].time - this.keys[0].time);
        time += this.keys[0].time;
    }

    const index = this.getKeyIndex(time);
    if (index >= this._lastKeyIndex)
    {
        if (this.keys[this._lastKeyIndex].cb && !this.keys[this._lastKeyIndex].cbTriggered) this.keys[this._lastKeyIndex].trigger();

        return this.keys[this._lastKeyIndex].value;
    }


    const index2 = index + 1;
    const key1 = this.keys[index];
    const key2 = this.keys[index2];

    if (key1.cb && !key1.cbTriggered) key1.trigger();

    if (!key2) return -1;

    const perc = (time - key1.time) / (key2.time - key1.time);

    if (!key1.ease) this.log._warn("has no ease", key1, key2);

    return key1.ease(perc, key2);
};

Anim.prototype._updateLastIndex = function ()
{
    this._lastKeyIndex = this.keys.length - 1;
};

Anim.prototype.addKey = function (k)
{
    if (k.time === undefined)
    {
        this.log.warn("key time undefined, ignoring!");
    }
    else
    {
        this.keys.push(k);
        if (this.onChange !== null) this.onChange();
        this.emitEvent("onChange", this);
    }
    this._updateLastIndex();
};

Anim.prototype.easingFromString = function (str)
{
    if (str == "linear") return CONSTANTS.ANIM.EASING_LINEAR;
    if (str == "absolute") return CONSTANTS.ANIM.EASING_ABSOLUTE;
    if (str == "smoothstep") return CONSTANTS.ANIM.EASING_SMOOTHSTEP;
    if (str == "smootherstep") return CONSTANTS.ANIM.EASING_SMOOTHERSTEP;

    if (str == "Cubic In") return CONSTANTS.ANIM.EASING_CUBIC_IN;
    if (str == "Cubic Out") return CONSTANTS.ANIM.EASING_CUBIC_OUT;
    if (str == "Cubic In Out") return CONSTANTS.ANIM.EASING_CUBIC_INOUT;

    if (str == "Expo In") return CONSTANTS.ANIM.EASING_EXPO_IN;
    if (str == "Expo Out") return CONSTANTS.ANIM.EASING_EXPO_OUT;
    if (str == "Expo In Out") return CONSTANTS.ANIM.EASING_EXPO_INOUT;

    if (str == "Sin In") return CONSTANTS.ANIM.EASING_SIN_IN;
    if (str == "Sin Out") return CONSTANTS.ANIM.EASING_SIN_OUT;
    if (str == "Sin In Out") return CONSTANTS.ANIM.EASING_SIN_INOUT;

    if (str == "Back In") return CONSTANTS.ANIM.EASING_BACK_IN;
    if (str == "Back Out") return CONSTANTS.ANIM.EASING_BACK_OUT;
    if (str == "Back In Out") return CONSTANTS.ANIM.EASING_BACK_INOUT;

    if (str == "Elastic In") return CONSTANTS.ANIM.EASING_ELASTIC_IN;
    if (str == "Elastic Out") return CONSTANTS.ANIM.EASING_ELASTIC_OUT;

    if (str == "Bounce In") return CONSTANTS.ANIM.EASING_BOUNCE_IN;
    if (str == "Bounce Out") return CONSTANTS.ANIM.EASING_BOUNCE_OUT;

    if (str == "Quart Out") return CONSTANTS.ANIM.EASING_QUART_OUT;
    if (str == "Quart In") return CONSTANTS.ANIM.EASING_QUART_IN;
    if (str == "Quart In Out") return CONSTANTS.ANIM.EASING_QUART_INOUT;

    if (str == "Quint Out") return CONSTANTS.ANIM.EASING_QUINT_OUT;
    if (str == "Quint In") return CONSTANTS.ANIM.EASING_QUINT_IN;
    if (str == "Quint In Out") return CONSTANTS.ANIM.EASING_QUINT_INOUT;
};

Anim.prototype.createPort = function (op, title, cb)
{
    const port = op.inDropDown(title, CONSTANTS.ANIM.EASINGS, "Cubic Out");

    // const port = op.addInPort(
    //     new Port(op, title, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
    //         "display": "dropdown",
    //         "values": CONSTANTS.ANIM.EASINGS,
    //     }),
    // );

    port.set("linear");
    port.defaultValue = "linear";

    port.onChange = function ()
    {
        this.defaultEasing = this.easingFromString(port.get());
        this.emitEvent("onChangeDefaultEasing", this);

        if (cb) cb();
    }.bind(this);

    return port;
};

// ------------------------------

Anim.slerpQuaternion = function (time, q, animx, animy, animz, animw)
{
    if (!Anim.slerpQuaternion.q1)
    {
        Anim.slerpQuaternion.q1 = quat.create();
        Anim.slerpQuaternion.q2 = quat.create();
    }

    const i1 = animx.getKeyIndex(time);
    let i2 = i1 + 1;
    if (i2 >= animx.keys.length) i2 = animx.keys.length - 1;

    if (i1 == i2)
    {
        quat.set(q, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);
    }
    else
    {
        const key1Time = animx.keys[i1].time;
        const key2Time = animx.keys[i2].time;
        const perc = (time - key1Time) / (key2Time - key1Time);

        quat.set(Anim.slerpQuaternion.q1, animx.keys[i1].value, animy.keys[i1].value, animz.keys[i1].value, animw.keys[i1].value);

        quat.set(Anim.slerpQuaternion.q2, animx.keys[i2].value, animy.keys[i2].value, animz.keys[i2].value, animw.keys[i2].value);

        quat.slerp(q, Anim.slerpQuaternion.q1, Anim.slerpQuaternion.q2, perc);
    }
    return q;
};

const ANIM = { "Key": Key };




;// CONCATENATED MODULE: ./src/core/core_link.js



/**
 * @namespace external:CABLES#Link
 * @param {Object} scene The patch object
 * @description a link is a connection between two ops/ports -> one input and one output port
 * @hideconstructor
 * @class
 */
const Link = function (scene)
{
    EventTarget.apply(this);

    this.id = CABLES.simpleId();
    this.portIn = null;
    this.portOut = null;
    this.scene = scene; // todo: make private and rename to patch
    this.activityCounter = 0;
    this.ignoreInSerialize = false;
};

Link.prototype.setValue = function (v)
{
    if (v === undefined) this._setValue();
    else this.portIn.set(v);
};

Link.prototype.activity = function ()
{
    this.activityCounter++;
    // if(Date.now()-this.lastTime>100)
    // {
    //     // this.lastTime=Date.now();
    //     // this.changesPerSecond=this.changesCounter*10;
    //     this.changesCounter=0;
    // }
};

Link.prototype._setValue = function ()
{
    if (!this.portOut)
    {
        this.remove();
        return;
    }
    const v = this.portOut.get();

    if (v == v) // NaN is the only JavaScript value that is treated as unequal to itself
    {
        if (this.portIn.type != CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) this.activity();

        if (this.portIn.get() !== v)
        {
            this.portIn.set(v);
        }
        else
        {
            if (this.portIn.changeAlways) this.portIn.set(v);
            if (this.portOut.forceRefChange) this.portIn.forceChange();
        }
    }
};

/**
 * @function getOtherPort
 * @memberof Link
 * @instance
 * @param {Port} p port
 * @description returns the port of the link, which is not port
 */
Link.prototype.getOtherPort = function (p)
{
    if (p == this.portIn) return this.portOut;
    return this.portIn;
};

/**
 * @function remove
 * @memberof Link
 * @instance
 * @description unlink/remove this link from all ports
 */
Link.prototype.remove = function ()
{
    if (this.portIn) this.portIn.removeLink(this);
    if (this.portOut) this.portOut.removeLink(this);
    if (this.scene)
    {
        this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this);
    }

    if (this.portIn && (this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT || this.portIn.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY))
    {
        this.portIn.set(null);
        if (this.portIn.links.length > 0) this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get());
    }

    if (this.portIn) this.portIn.op._checkLinksNeededToWork();
    if (this.portOut) this.portOut.op._checkLinksNeededToWork();

    this.portIn = null;
    this.portOut = null;
    this.scene = null;
};

/**
 * @function link
 * @memberof Link
 * @instance
 * @description link those two ports
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.prototype.link = function (p1, p2)
{
    if (!Link.canLink(p1, p2))
    {
        console.warn("[core_link] cannot link ports!", p1, p2);
        return false;
    }

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        this.portIn = p1;
        this.portOut = p2;
    }
    else
    {
        this.portIn = p2;
        this.portOut = p1;
    }

    p1.addLink(this);
    p2.addLink(this);

    this.setValue();

    if (p1.onLink) p1.onLink(this);
    if (p2.onLink) p2.onLink(this);

    p1.op._checkLinksNeededToWork();
    p2.op._checkLinksNeededToWork();
};

Link.prototype.getSerialized = function ()
{
    const obj = {};

    obj.portIn = this.portIn.getName();
    obj.portOut = this.portOut.getName();
    obj.objIn = this.portIn.op.id;
    obj.objOut = this.portOut.op.id;

    return obj;
};

// --------------------------------------------

/**
 * @function canLinkText
 * @memberof Link
 * @instance
 * @description return a text message with human readable reason if ports can not be linked, or can be
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 */
Link.canLinkText = function (p1, p2)
{
    if (p1.direction == p2.direction)
    {
        let txt = "(out)";
        if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN) txt = "(in)";
        return "can not link: same direction " + txt;
    }
    if (p1.op == p2.op) return "can not link: same op";
    if (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)
    {
        if (p1.type != p2.type) return "can not link: different type";
    }

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return "incompatible objects";
    }


    if (!p1) return "can not link: port 1 invalid";
    if (!p2) return "can not link: port 2 invalid";

    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return "can not link: is animated";
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return "can not link: is animated";

    // if(p1.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p1.links.length>0)return 'input port already busy';
    // if(p2.direction==CABLES.CONSTANTS.PORT.PORT_DIR_IN && p2.links.length>0)return 'input port already busy';
    if (p1.isLinkedTo(p2)) return "ports already linked";

    if ((p1.canLink && !p1.canLink(p2)) || (p2.canLink && !p2.canLink(p1))) return "Incompatible";

    return "can link";
};

/**
 * @function canLink
 * @memberof Link
 * @instance
 * @description return true if ports can be linked
 * @param {Port} p1 port1
 * @param {Port} p2 port2
 * @returns {Boolean}
 */
Link.canLink = function (p1, p2)
{
    if (!p1) return false;
    if (!p2) return false;
    if (p1.direction == CONSTANTS.PORT.PORT_DIR_IN && p1.isAnimated()) return false;
    if (p2.direction == CONSTANTS.PORT.PORT_DIR_IN && p2.isAnimated()) return false;

    if (p1.isHidden() || p2.isHidden()) return false;

    if (p1.isLinkedTo(p2)) return false;

    if (p1.direction == p2.direction) return false;

    if (CABLES.UI && p1.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && p2.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
    {
        if (p1.uiAttribs.objType && p2.uiAttribs.objType)
        {
            if (p1.uiAttribs.objType.indexOf("sg_") == 0 && p2.uiAttribs.objType.indexOf("sg_") == 0) return true;
            if (p1.uiAttribs.objType != p2.uiAttribs.objType)
                return false;
        }
    }

    if (p1.type != p2.type && (p1.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC && p2.type != CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC)) return false;
    if (p1.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC || p2.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;

    if (p1.op == p2.op) return false;

    if (p1.canLink && !p1.canLink(p2)) return false;
    if (p2.canLink && !p2.canLink(p1)) return false;

    return true;
};



;// CONCATENATED MODULE: ./src/core/core_port.js







/**
 * data is coming into and out of ops through input and output ports
 * @namespace external:CABLES#Port
 * @class
 * @hideconstructor
 * @param ___op
 * @param name
 * @param type
 * @param uiAttribs
 * @example
 * const myPort=op.inString("String Port");
 */
const Port = function (___op, name, type, uiAttribs)
{
    EventTarget.apply(this);

    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this._log = new Logger("core_port");
    /**
     * @type {Number}
     * @name direction
     * @instance
     * @memberof Port
     * @description direction of port (input(0) or output(1))
     */
    this.direction = CONSTANTS.PORT.PORT_DIR_IN;
    this.id = String(CABLES.simpleId());
    this._op = ___op;

    /**
     * @type {Array<Link>}
     * @name links
     * @instance
     * @memberof Port
     * @description links of port
     */
    this.links = [];
    this.value = 0.0;
    this.name = name;
    this.type = type || CONSTANTS.OP.OP_PORT_TYPE_VALUE;
    this.uiAttribs = uiAttribs || {};
    this.anim = null;
    this._oldAnimVal = -5711;
    this.defaultValue = null;


    this._uiActiveState = true;
    this.ignoreValueSerialize = false;
    this.onLinkChanged = null;
    this.crashed = false;

    this._valueBeforeLink = null;
    this._lastAnimFrame = -1;
    this._animated = false;

    this.onValueChanged = null;
    this.onTriggered = null;
    this.onUiActiveStateChange = null;
    this.changeAlways = false;
    this.forceRefChange = false;

    this._useVariableName = null;

    this.activityCounter = 0;
    this.apf = 0;
    this.activityCounterStartFrame = 0;

    this._tempLastUiValue = null;

    Object.defineProperty(this, "title", {
        get()
        {
            return this.uiAttribs.title || this.name;
        } });

    Object.defineProperty(this, "parent", {
        get()
        {
            this._log.stack("use port.op, not .parent");
            return this._op;
        } });

    Object.defineProperty(this, "op", {
        get()
        {
            return this._op;
        } });

    Object.defineProperty(this, "val", {
        get()
        {
            // this._log.warn("val getter deprecated!", this);
            // this._log.stack("val getter deprecated");
            return this.get();
        },
        set(v)
        {
            // this._log.warn("val setter deprecated!", this);
            // this._log.stack("val setter deprecated");
            this.setValue(v);
        }
    });
};


/**
 * copy over a uiattrib from an external connected port to another port
 * @function copyLinkedUiAttrib
 * @memberof Port
 * @param {string} which attrib name
 * @param {Port} port source port
 * @instance
 * @example

inArray.onLinkChanged=()=>
{
    if(inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

 */
Port.prototype.copyLinkedUiAttrib = function (which, port)
{
    if (!CABLES.UI) return;
    if (!this.isLinked()) return;

    const attr = {};
    attr[which] = this.links[0].getOtherPort(this).getUiAttrib(which);
    port.setUiAttribs(attr);
};


// TODO make extend class for ports, like for ops only for ui
Port.prototype.getValueForDisplay = function ()
{
    let str = this.value;

    if (typeof this.value === "string" || this.value instanceof String)
    {
        if (str.length > 1000)
        {
            str = str.substring(0, 999);
            str += "...";
        }
        if (this.uiAttribs && (this.uiAttribs.display == "boolnum"))
        {
            str += " - ";

            if (!this.value) str += "false";
            else str += "true";
        }

        str = str.replace(/[\u00A0-\u9999<>\&]/g, function (i)
        {
            return "&#" + i.charCodeAt(0) + ";";
        });


        if (str.length > 100) str = str.substring(0, 100);
    }
    else
    {
        str = this.value;
    }
    return str;
};

/**
 * change listener for input value ports, overwrite to react to changes
 * @function onChange
 * @memberof Port
 * @instance
 * @example
 * const myPort=op.inString("MyPort");
 * myPort.onChange=function()
 * {
 *   console.log("was changed to: ",myPort.get());
 * }
 *
 */
Port.prototype.onAnimToggle = function () {};
Port.prototype._onAnimToggle = function ()
{
    this.onAnimToggle();
};


/**
 * @function remove
 * @memberof Port
 * @instance
 * @description remove port
 */
Port.prototype.remove = function ()
{
    // this.setUiAttribs({ "hidePort": true });
    this.removeLinks();
    this._op.removePort(this);
};

/**
 * set ui attributes
 * @function setUiAttribs
 * @memberof Port
 * @instance
 * @param {Object} newAttribs
 * <pre>
 * title - overwrite title of port (by default this is portname)
 * greyout - port paramater will appear greyed out, can not be
 * hidePort - port will be hidden from op
 * hideParam - port params will be hidden from parameter panel
 * showIndex - only for dropdowns - show value index (e.g. `0 - normal` )
 * editorSyntax - set syntax highlighting theme for editor port
 * ignoreObjTypeErrors - do not auto check object types
 * </pre>
 * @example
 * myPort.setUiAttribs({greyout:true});
 */
Port.prototype.setUiAttribs = function (newAttribs)
{
    let changed = false;
    if (!this.uiAttribs) this.uiAttribs = {};

    for (const p in newAttribs)
    {
        if (newAttribs[p] === undefined)
        {
            // delete newAttribs[p];
            delete this.uiAttribs[p];
            continue;
        }
        if (this.uiAttribs[p] != newAttribs[p]) changed = true;
        this.uiAttribs[p] = newAttribs[p];

        if (p == "group" && this.indexPort) this.indexPort.setUiAttribs({ "group": newAttribs[p] });
    }

    if (newAttribs.hasOwnProperty("expose")) this._op.patch.emitEvent("subpatchExpose", this._op.uiAttribs.subPatch);

    if (changed) this.emitEvent("onUiAttrChange", newAttribs, this);
};

/**
 * get ui attributes
 * @function getUiAttribs
 * @memberof Port
 * @example
 * myPort.getUiAttribs();
 */
Port.prototype.getUiAttribs = function ()
{
    return this.uiAttribs;
};

/**
 * get ui attribute
 * @function getUiAttrib
 * @memberof Port
 * @instance
 * @param {String} attribName
 * <pre>
 * attribName - return value of the ui-attribute, or null on unknown attribute
 * </pre>
 * @example
 * myPort.setUiAttribs("values");
 */
Port.prototype.getUiAttrib = function (attribName)
{
    if (!this.uiAttribs || !this.uiAttribs.hasOwnProperty(attribName))
    {
        return null;
    }
    return this.uiAttribs[attribName];
};

/**
 * @function get
 * @memberof Port
 * @instance
 * @description get value of port
 */
Port.prototype.get = function ()
{
    if (this._animated && this._lastAnimFrame != this._op.patch.getFrameNum())
    {
        this._lastAnimFrame = this._op.patch.getFrameNum();

        let animval = this.anim.getValue(this._op.patch.timer.getTime());

        if (this.value != animval)
        {
            this.value = animval;
            this._oldAnimVal = this.value;
            this.forceChange();
        }
    }

    return this.value;
};

Port.prototype.setRef = function (v)
{
    this.forceRefChange = true;
    this.set(v);
};

/**
 * @function setValue
 * @memberof Port
 * @instance
 * @description set value of port / will send value to all linked ports (only for output ports)
 */
Port.prototype.set = Port.prototype.setValue = function (v)
{
    if (v === undefined) v = null;


    if (CABLES.UI && CABLES.UI.showDevInfos)
        if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT && this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && v && !this.forceRefChange)
            this._log.warn("object port uses .set", this.name, this.op.objName);


    if (this._op.enabled && !this.crashed)
    {
        if (v !== this.value || this.changeAlways || this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE || this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY)
        {
            if (this._animated)
            {
                this.anim.setValue(this._op.patch.timer.getTime(), v);
            }
            else
            {
                try
                {
                    this.value = v;
                    this.forceChange();
                }
                catch (ex)
                {
                    this.crashed = true;

                    this.setValue = function (_v) {};
                    this.onTriggered = function () {};

                    this._log.error("exception in ", this._op);
                    this._log.error(ex);

                    this._op.patch.emitEvent("exception", ex, this._op);
                }

                if (this._op && this._op.patch && this._op.patch.isEditorMode() && this.type == CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) gui.texturePreview().updateTexturePort(this);
            }

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) for (let i = 0; i < this.links.length; ++i) this.links[i].setValue();
        }
    }
};

Port.prototype.updateAnim = function ()
{
    if (this._animated)
    {
        this.value = this.get();

        if (this._oldAnimVal != this.value || this.changeAlways)
        {
            this._oldAnimVal = this.value;
            this.forceChange();
        }
        this._oldAnimVal = this.value;
    }
};

Port.prototype.forceChange = function ()
{
    if (this.onValueChanged || this.onChange)
    {
        // very temporary: deprecated warning!!!!!!!!!
        // if(params.length>0) this._log.warn('TOM: port has onchange params!',this._op.objName,this.name);
    }
    this._activity();
    this.emitEvent("change", this.value, this);

    // try
    // {
    if (this.onChange) this.onChange(this, this.value);
    else if (this.onValueChanged) this.onValueChanged(this, this.value); // deprecated
    // }
    // catch (e)
    // {
    //     console.log(e);
    // }
};

/**
 * @function getTypeString
 * @memberof Port
 * @instance
 * @description get port type as string, e.g. "Function","Value"...
 * @return {String} type
 */
Port.prototype.getTypeString = function ()
{
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "Number";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "Trigger";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "Object";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "Dynamic";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "Array";
    if (this.type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "String";
    return "Unknown";
};

Port.prototype.deSerializeSettings = function (objPort)
{
    if (!objPort) return;
    if (objPort.animated) this.setAnimated(objPort.animated);
    if (objPort.useVariable) this.setVariableName(objPort.useVariable);
    if (objPort.title) this.setUiAttribs({ "title": objPort.title });
    if (objPort.expose) this.setUiAttribs({ "expose": true });
    if (objPort.order) this.setUiAttribs({ "order": objPort.order });

    if (objPort.multiPortManual) this.setUiAttribs({ "multiPortManual": objPort.multiPortManual });
    if (objPort.multiPortNum) this.setUiAttribs({ "multiPortNum": objPort.multiPortNum });

    if (objPort.anim)
    {
        if (!this.anim) this.anim = new Anim({ "name": "port " + this.name });
        this._op._hasAnimPort = true;
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
        if (objPort.anim.loop) this.anim.loop = objPort.anim.loop;
        for (const ani in objPort.anim.keys)
        {
            this.anim.keys.push(new ANIM.Key(objPort.anim.keys[ani]));
        }
        this.anim.sortKeys();
    }
};


Port.prototype.setInitialValue = function (v)
{
    if (this.op.preservedPortLinks[this.name])
    {
        for (let i = 0; i < this.op.preservedPortLinks[this.name].length; i++)
        {
            const lobj = this.op.preservedPortLinks[this.name][i];
            this.op.patch._addLink(
                lobj.objIn,
                lobj.objOut,
                lobj.portIn,
                lobj.portOut);
        }
    }


    if (this.op.preservedPortValues && this.op.preservedPortValues.hasOwnProperty(this.name) && this.op.preservedPortValues[this.name] !== undefined)
    {
        this.set(this.op.preservedPortValues[this.name]);
    }
    else
    if (v !== undefined) this.set(v);
    if (v !== undefined) this.defaultValue = v;
};




Port.prototype.getSerialized = function ()
{
    let obj = { "name": this.getName() };


    if (!this.ignoreValueSerialize && this.links.length === 0)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex) {}
        else obj.value = this.value;
    }
    if (this._useVariableName) obj.useVariable = this._useVariableName;
    if (this._animated) obj.animated = true;
    if (this.anim) obj.anim = this.anim.getSerialized();
    if (this.uiAttribs.multiPortNum) obj.multiPortNum = this.uiAttribs.multiPortNum;
    if (this.uiAttribs.multiPortManual) obj.multiPortManual = this.uiAttribs.multiPortManual;

    if (this.uiAttribs.display == "file") obj.display = this.uiAttribs.display;
    if (this.uiAttribs.expose)
    {
        obj.expose = true;
        if (this.uiAttribs.hasOwnProperty("order")) obj.order = this.uiAttribs.order;
    }
    if (this.uiAttribs.title) obj.title = this.uiAttribs.title;
    if ((this.preserveLinks || this.direction == CONSTANTS.PORT.PORT_DIR_OUT) && this.links.length > 0)
    {
        obj.links = [];
        for (const i in this.links)
        {
            if (!this.links[i].ignoreInSerialize && (this.links[i].portIn && this.links[i].portOut)) obj.links.push(this.links[i].getSerialized());
        }
    }

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN && this.links.length > 0)
    {
        for (const i in this.links)
        {
            if (!this.links[i].portIn || !this.links[i].portOut) continue;

            const otherp = this.links[i].getOtherPort(this);
            // check if functions exist, are defined in core_extend_ops code in ui
            if (otherp.op.isInBlueprint2 && this.op.isInBlueprint2)
            {
                if (otherp.op.isInBlueprint2() && !this.op.isInBlueprint2())
                {
                    obj.links = obj.links || [];
                    obj.links.push(this.links[i].getSerialized());
                }
            }
        }
    }

    if (obj.links && obj.links.length == 0) delete obj.links;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) delete obj.value;
    if (this.type === CONSTANTS.OP.OP_PORT_TYPE_FUNCTION && this.links.length == 0) obj = null;
    if (obj && Object.keys(obj).length == 1 && obj.name)obj = null; // obj is null if there is no real information other than name

    // console.log(obj);
    cleanJson(obj);

    return obj;
};

Port.prototype.shouldLink = function ()
{
    return true;
};

/**
 * @function removeLinks
 * @memberof Port
 * @instance
 * @description remove all links from port
 */
Port.prototype.removeLinks = function ()
{
    let count = 0;
    while (this.links.length > 0)
    {
        count++;
        if (count > 5000)
        {
            this._log.warn("could not delete links... / infinite loop");
            this.links.length = 0;
            break;
        }
        this.links[0].remove();
    }
};

/**
 * @function removeLink
 * @memberof Port
 * @instance
 * @description remove all link from port
 * @param {CABLES.Link} link
 */
Port.prototype.removeLink = function (link)
{
    for (const i in this.links)
        if (this.links[i] == link)
            this.links.splice(i, 1);

    if (this.direction == CONSTANTS.PORT.PORT_DIR_IN)
    {
        if (this.type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) this.setValue(this._valueBeforeLink || 0);
        else this.setValue(this._valueBeforeLink || null);
    }

    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    try
    {
        if (this.onLinkChanged) this.onLinkChanged();
        this.emitEvent("onLinkChanged");
        this.emitEvent("onLinkRemoved");
        this._op.emitEvent("onLinkChanged");
    }
    catch (e)
    {
        this._log.error(e);
    }
};

/**
 * @function getName
 * @memberof Port
 * @instance
 * @description return port name
 */
Port.prototype.getName = function ()
{
    return this.name;
};

/**
 * @function getTitle
 * @memberof Port
 * @instance
 * @description return port name or title
 */
Port.prototype.getTitle = function ()
{
    if (this.uiAttribs.title) return this.uiAttribs.title;
    return this.name;
};

Port.prototype.addLink = function (l)
{
    this._valueBeforeLink = this.value;
    this.links.push(l);
    if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

    try
    {
        if (this.onLinkChanged) this.onLinkChanged();
        this.emitEvent("onLinkChanged");
        this._op.emitEvent("onLinkChanged");
    }
    catch (e)
    {
        this._log.error(e);
    }
};

/**
 * @function getLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description return link, which is linked to otherPort
 */
Port.prototype.getLinkTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return this.links[i];
};

/**
 * @function removeLinkTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description removes link, which is linked to otherPort
 */
Port.prototype.removeLinkTo = function (p2)
{
    for (const i in this.links)
    {
        if (this.links[i].portIn == p2 || this.links[i].portOut == p2)
        {
            this.links[i].remove();
            if (CABLES.UI && this._op.checkLinkTimeWarnings) this._op.checkLinkTimeWarnings();

            if (this.onLinkChanged) this.onLinkChanged();
            this.emitEvent("onLinkChanged");
            this.emitEvent("onLinkRemoved");
            return;
        }
    }
};

/**
 * @function isLinkedTo
 * @memberof Port
 * @instance
 * @param {Port} p2 otherPort
 * @description returns true if port is linked to otherPort
 */
Port.prototype.isLinkedTo = function (p2)
{
    for (const i in this.links) if (this.links[i].portIn == p2 || this.links[i].portOut == p2) return true;

    return false;
};

Port.prototype._activity = function ()
{
    this.activityCounter++;
};

/**
 * @function trigger
 * @memberof Port
 * @instance
 * @description trigger the linked port (usually invoked on an output function port)
 */
Port.prototype.trigger = function ()
{
    const linksLength = this.links.length;

    this._activity();
    if (linksLength === 0) return;
    if (!this._op.enabled) return;

    let portTriggered = null;
    try
    {
        for (let i = 0; i < linksLength; ++i)
        {
            if (this.links[i].portIn)
            {
                portTriggered = this.links[i].portIn;

                portTriggered.op.patch.pushTriggerStack(portTriggered);
                portTriggered._onTriggered();

                portTriggered.op.patch.popTriggerStack();
            }
            if (this.links[i]) this.links[i].activity();
        }
    }
    catch (ex)
    {
        portTriggered.op.enabled = false;

        if (this._op.patch.isEditorMode())
        {
            // this._op.patch.emitEvent("exception", ex, portTriggered.op);
            // this._op.patch.emitEvent("opcrash", portTriggered);
            // console.log("crash", portTriggered.op.objName);

            if (portTriggered.op.onError) portTriggered.op.onError(ex);
        }
        this._log.error("exception in port: ", portTriggered.name, portTriggered.op.name, portTriggered.op);
        this._log.error(ex);
    }
};

Port.prototype.call = function ()
{
    this._log.warn("call deprecated - use trigger() ");
    this.trigger();
};

Port.prototype.execute = function ()
{
    this._log.warn("### execute port: " + this.getName(), this.goals.length);
};

Port.prototype.setVariableName = function (n)
{
    this._useVariableName = n;


    this._op.patch.on("variableRename", (oldname, newname) =>
    {
        if (oldname != this._useVariableName) return;
        this._useVariableName = newname;
    });
};

Port.prototype.getVariableName = function ()
{
    return this._useVariableName;
};

Port.prototype.setVariable = function (v)
{
    this.setAnimated(false);
    const attr = { "useVariable": false };

    if (this._variableIn && this._varChangeListenerId)
    {
        this._variableIn.off(this._varChangeListenerId);
        this._variableIn = null;
    }

    if (v)
    {
        this._variableIn = this._op.patch.getVar(v);

        if (!this._variableIn)
        {
            this._log.warn("PORT VAR NOT FOUND!!!", v);
        }
        else
        {
            if (this.type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT)
            {
                this._varChangeListenerId = this._variableIn.on("change", () => { this.set(null); this.set(this._variableIn.getValue()); });
            }
            else
            {
                this._varChangeListenerId = this._variableIn.on("change", this.set.bind(this));
            }
            this.set(this._variableIn.getValue());
        }
        this._useVariableName = v;
        attr.useVariable = true;
        attr.variableName = this._useVariableName;
    }
    else
    {
        attr.variableName = this._useVariableName = null;
        attr.useVariable = false;
    }

    this.setUiAttribs(attr);
    this._op.patch.emitEvent("portSetVariable", this._op, this, v);
};

Port.prototype._handleNoTriggerOpAnimUpdates = function (a)
{
    let hasTriggerPort = false;
    for (let i = 0; i < this._op.portsIn.length; i++)
    {
        if (this._op.portsIn.type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        {
            hasTriggerPort = true;
            break;
        }
    }

    if (!hasTriggerPort)
    {
        if (a) this._notriggerAnimUpdate = this._op.patch.on("onRenderFrame",
            () =>
            {
                this.updateAnim();
            });
        else this._op.patch.removeEventListener(this._notriggerAnimUpdate);
    }
};

Port.prototype.setAnimated = function (a)
{
    if (this._animated != a)
    {
        this._animated = a;
        this._op._hasAnimPort = true;

        if (this._animated && !this.anim)
        {
            this.anim = new Anim({ "name": "port " + this.name });
            this.anim.addEventListener("onChange", () =>
            {
                this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
            });
        }
        this._onAnimToggle();
    }

    this._handleNoTriggerOpAnimUpdates(a);
    if (!a)
    {
        this.anim = null;
    }

    this.setUiAttribs({ "isAnimated": this._animated });
};

Port.prototype.toggleAnim = function ()
{
    this._animated = !this._animated;
    if (this._animated && !this.anim)
    {
        this.anim = new Anim({ "name": "port " + this.name });
        this.anim.addEventListener("onChange", () =>
        {
            this._op.patch.emitEvent("portAnimUpdated", this._op, this, this.anim);
        });
    }
    this.setAnimated(this._animated);
    this._onAnimToggle();
    this.setUiAttribs({ "isAnimated": this._animated });
};

/**
 * <pre>
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_VALUE = 0;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_FUNCTION = 1;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_TEXTURE = 2;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_ARRAY = 3;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC = 4;
 * CABLES.CONSTANTS.OP.OP_PORT_TYPE_STRING = 5;
 * </pre>
 * @function getType
 * @memberof Port
 * @instance
 * @return {Number} type of port
 */
Port.prototype.getType = function ()
{
    return this.type;
};

/**
 * @function isLinked
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is linked
 */
Port.prototype.isLinked = function ()
{
    return this.links.length > 0 || this._animated || this._useVariableName != null;
};

Port.prototype.isBoundToVar = function ()
{
    const b = this._useVariableName != null;
    this.uiAttribs.boundToVar = b;
    return b;
};
/**
 * @function isAnimated
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is animated
 */
Port.prototype.isAnimated = function ()
{
    return this._animated;
};

/**
 * @function isHidden
 * @memberof Port
 * @instance
 * @return {Boolean} true if port is hidden
 */
Port.prototype.isHidden = function ()
{
    return this.uiAttribs.hidePort;
};

/**
 * @function onTriggered
 * @memberof Port
 * @instance
 * @param {function} a onTriggeredCallback
 * @description set callback, which will be executed when port was triggered (usually output port)
 */
Port.prototype._onTriggered = function (a)
{
    this._activity();
    this._op.updateAnims();
    if (this._op.enabled && this.onTriggered) this.onTriggered(a);

    if (this._op.enabled) this.emitEvent("trigger");
};

Port.prototype._onSetProfiling = function (v)
{
    this._op.patch.profiler.add("port", this);
    this.setValue(v);
    this._op.patch.profiler.add("port", null);
};

Port.prototype._onTriggeredProfiling = function ()
{
    if (this._op.enabled && this.onTriggered)
    {
        this._op.patch.profiler.add("port", this);
        this.onTriggered();
        this._op.patch.profiler.add("port", null);
    }
};



Port.prototype.getUiActiveState = function ()
{
    return this._uiActiveState;
};

Port.prototype.setUiActiveState = function (onoff)
{
    this._uiActiveState = onoff;
    if (this.onUiActiveStateChange) this.onUiActiveStateChange();
};

/**
 * @deprecated
 * @param {function} cb
 */
Port.prototype.onValueChange = function (cb)
{
    this.onChange = cb;
};

/**
 * @deprecated
 */
Port.prototype.hidePort = function () {};


/**
 * Returns the port type string, e.g. "value" based on the port type number
 * @function portTypeNumberToString
 * @instance
 * @memberof Port
 * @param {Number} type - The port type number
 * @returns {String} - The port type as string
 */
Port.portTypeNumberToString = function (type)
{
    if (type == CONSTANTS.OP.OP_PORT_TYPE_VALUE) return "value";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION) return "function";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_OBJECT) return "object";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY) return "array";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) return "string";
    if (type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return "dynamic";
    return "unknown";
};



;// CONCATENATED MODULE: ./src/core/core_port_switch.js




class SwitchPort extends Port
{
    constructor(__parent, name, type, uiAttribs, indexPort)
    {
        super(__parent, name, type, uiAttribs);

        this.get = () =>
        {
            let s = super.get();

            if (CABLES.UI)
            {
                if (
                    s === "" ||
                    s === null ||
                    s === undefined ||
                    (uiAttribs.values && uiAttribs.values.indexOf(String(s)) === -1)
                )
                {
                    this.op.setUiError("invalidswitch", "Invalid Value [" + this.name + "]: \"" + s + "\"", 1);
                }
                else this.op.setUiError("invalidswitch", null);
            }

            if (s === null || s === undefined)s = "";

            return s;
        };

        this.indexPort = indexPort;
        this.indexPort.set = (value) =>
        {
            const values = uiAttribs.values;

            if (!values)
            {
                // console.log("switch port has no values", this);
                return;
            }

            let intValue = Math.floor(value);

            intValue = Math.min(intValue, values.length - 1);
            intValue = Math.max(intValue, 0);

            this.indexPort.setValue(intValue);
            this.set(values[intValue]);

            if (this.op.patch.isEditorMode() && performance.now() - (this.lastTime || 0) > 100 && window.gui && gui.patchView.isCurrentOp(this.op))
            {
                gui.opParams.show(this.op);
                this.lastTime = performance.now();
            }
        };
    }

    setUiAttribs(attribs)
    {
        const hidePort = attribs.hidePort;
        attribs.hidePort = true;
        super.setUiAttribs(attribs);
        if (typeof hidePort !== "undefined")
        {
            this.indexPort.setUiAttribs({ hidePort });
        }
    }
}



;// CONCATENATED MODULE: ./src/core/core_port_select.js




class ValueSelectPort extends SwitchPort
{
    setUiAttribs(newAttribs)
    {
        // never unhide valuePort when indexPort is linked
        if (this.indexPort.isLinked())
        {
            for (const p in newAttribs)
            {
                if (p == "greyout" && !newAttribs[p]) newAttribs[p] = "true";
            }
        }
        super.setUiAttribs(newAttribs);
    }
}





;// CONCATENATED MODULE: ./src/core/core_port_multi.js



const MIN_NUM_PORTS = 2;

class MultiPort extends Port
{
    constructor(__parent, name, type, dir, uiAttribs, uiAttribsPorts)
    {
        super(__parent, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, uiAttribs);

        this.setUiAttribs({ "multiPort": true, "group": this.name, "order": -1 });
        this.ports = [];
        this.direction = dir;
        this._uiAttribsPorts = uiAttribsPorts;

        // console.log("uiattribs", uiAttribs);

        const updateArray = () =>
        {
            const arr = [];

            let ll = 1;
            if (this.uiAttribs.multiPortManual)ll = 0;

            for (let i = 0; i < this.ports.length - ll; i++)
                arr[i] = this.ports[i];

            this.setRef(arr);
        };

        const updateUi = () =>
        {
            let grey = !this.uiAttribs.multiPortManual || undefined;

            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT)grey = false;

            for (let i = 0; i < this.ports.length; i++)
            {
                let lp; // undefined to remove/not set it
                // let opacity;// undefined to remove/not set it
                // let grey;// undefined to remove/not set it
                let addPort = false;
                let title;
                let o = {};


                // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
                if (this.op.preservedPortTitles && this.op.preservedPortTitles[this.ports[i].name]) title = this.op.preservedPortTitles[this.ports[i].name];


                // if (!this.uiAttribs.multiPortManual)grey = true;
                if (i == 0) lp = this.ports.length;

                if (!this.uiAttribs.multiPortManual)
                    if (i == this.ports.length - 1)
                    {
                        title = "add port";
                        addPort = true;
                        grey = true;
                    }

                for (const attin in this._uiAttribsPorts)
                {
                    o[attin] = this._uiAttribsPorts[attin];
                }

                o.addPort = addPort;
                o.longPort = lp;
                o.title = title;
                o.greyout = grey;
                o.group = this.name;

                this.ports[i].setUiAttribs(o);
            }
        };

        this.removeInvalidPorts = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                if (!this.ports[i]) this.ports.splice(i, 1);
            }

            if (!this.uiAttribs.multiPortManual)
            {
                if (this.ports.length > MIN_NUM_PORTS)

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (!this.ports[i].isLinked()) this.uiAttribs.multiPortNum = i;
                        else break;
                    }
            }

            updateArray();
        };

        this.countPorts = () =>
        {
            if (CABLES.UI && !gui.isRemoteClient && gui.patchView && gui.patchView.patchRenderer && gui.patchView.patchRenderer.isDraggingPort())
            {
                clearTimeout(this.retryTo);
                this.retryTo = setTimeout(this.countPorts.bind(this));
                return;
            }
            this.retryTo = null;

            let redo = false;
            this.removeListeners();
            this.removeInvalidPorts();

            for (let i = 0; i < this.ports.length; i++)
            {
                if (this.ports[i] && this.ports[i].links.length > 1)
                {
                    const po = this.ports[i + 1];
                    const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);

                    if (!po || !otherPort)
                    {
                        this._log.warn("no port found?");
                    }
                    else
                    {
                        this.ports[i].links[0].remove();
                        this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                        redo = true;
                    }
                    break;
                }
            }

            if (!this.uiAttribs.multiPortManual)
            {
                let foundHole = true;
                while (foundHole)
                {
                    // console.log("search holes...");
                    foundHole = false;

                    for (let i = this.ports.length - 1; i > 1; i--)
                    {
                        if (this.ports[i] && this.ports[i].links.length > 0 && this.ports[i - 1].links.length == 0)
                        {
                            // console.log("found hole!");

                            // found hole
                            const otherPort = this.ports[i].links[0].getOtherPort(this.ports[i]);
                            this.ports[i].links[0].remove();

                            const po = this.ports[i - 1];

                            if (po && this.ports[i])
                            {
                                // console.log("move ", this.ports[i].name, "to", po.name);
                                this.op.patch.link(this.op, po.name, otherPort.op, otherPort.name);
                                foundHole = true;
                                redo = true;
                                break;
                            }
                        }
                    }


                    // this.checkNum();
                }

                // this.removeInvalidPorts();
            }


            if (!this.uiAttribs.multiPortManual) // if auto
            {
                while (this.ports.length > MIN_NUM_PORTS && !this.ports[this.ports.length - 1].isLinked() && !this.ports[this.ports.length - 2].isLinked())
                {
                    let i = this.ports.length - 1;
                    if (!this.ports[i].isLinked() && this.ports[i - 1] && !this.ports[i - 1].isLinked())
                    {
                        this.ports[i].setUiAttribs({ "removed": true });
                        this.ports[i].remove();
                        // this.ports[i] = null;
                        this.ports.splice(i, 1);
                    }
                }
            }

            this.removeInvalidPorts();

            if (!this.uiAttribs.multiPortManual && this.ports.length > 0 && this.ports[this.ports.length - 1].isLinked()) this.newPort();

            updateArray();
            updateUi();

            if (redo) this.countPorts();
            else this.addListeners();
        };

        this.removeListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
            }
        };

        this.addListeners = () =>
        {
            for (let i = 0; i < this.ports.length; i++)
            {
                const po = this.ports[i];
                const idx = i;

                if (po.multiPortChangeListener)po.multiPortChangeListener = po.off(po.multiPortChangeListener);
                po.multiPortChangeListener = po.on("change", updateArray.bind(this));


                if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                po.multiPortTriggerListener = po.on("trigger", () => { this._onTriggered(idx); });


                // if (po.multiPortTriggerListener)po.multiPortTriggerListener = po.off(po.multiPortTriggerListener);
                // po.multiPortTriggerListener = po.on("trigger", this.trigger());

                if (po.multiLinkChangeListener)po.multiLinkChangeListener = po.off(po.multiLinkChangeListener);
                po.multiLinkChangeListener = po.on("onLinkChanged", () =>
                {
                    this.countPorts();
                    this.emitEvent("onLinkChanged");
                });

                if (po.multiLinkRemoveListener)po.multiLinkRemoveListener = po.off(po.multiLinkRemoveListener);
                po.multiLinkRemoveListener = po.on("onLinkRemoved", () =>
                {
                    // this.removeInvalidPorts();
                    // this.checkNum();
                    // this.countPorts();
                    updateUi();
                    this.emitEvent("onLinkChanged");
                    // this.countPorts.bind(this);
                });
            }
        };

        this.newPort = () =>
        {
            const attrs = {};
            // if (type == CABLES.OP_PORT_TYPE_STRING) attrs.type = "string";
            attrs.type = type;
            const po = new Port(this.op, name + "_" + this.ports.length, type, attrs);

            po.direction = dir;
            this.ports.push(po);
            // console.log("CONSTANTS.PORT_DIR_OUT", CONSTANTS.PORT.PORT_DIR_OUT, this.direction);
            if (this.direction == CONSTANTS.PORT.PORT_DIR_OUT) this.op.addOutPort(po);
            else this.op.addInPort(po);

            if (type == CONSTANTS.OP.OP_PORT_TYPE_NUMBER) po.setInitialValue(0);
            else if (type == CONSTANTS.OP.OP_PORT_TYPE_STRING) po.setInitialValue("");

            this.addListeners();

            updateUi();
            updateArray();
            this.emitEvent("onLinkChanged");
            // console.log("this.op.preservedPortTitles", this.op.preservedPortTitles, this.op.preservedPortTitles[po.name], po.name);
            if (this.op.preservedPortTitles && this.op.preservedPortTitles[po.name]) po.setUiAttribs({ "title": this.op.preservedPortTitles[po.name] });

            return po;
        };

        this.initPorts = () =>
        {
            for (let i = 0; i < MIN_NUM_PORTS; i++) this.newPort();
            updateArray();
            updateUi();
        };

        this.checkNum = () =>
        {
            this.uiAttribs.multiPortNum = Math.max(MIN_NUM_PORTS, this.uiAttribs.multiPortNum);

            while (this.ports.length < this.uiAttribs.multiPortNum) this.newPort();
            while (this.ports.length > this.uiAttribs.multiPortNum) if (this.ports[this.ports.length - 1]) this.ports.pop().remove();

            this.removeInvalidPorts();
        };

        this.incDec = (incDir) =>
        {
            this.uiAttribs.multiPortNum = this.uiAttribs.multiPortNum || MIN_NUM_PORTS;
            // console.log("this.uiAttribs.multiPortNum", this.uiAttribs.multiPortNum, this.uiAttribs.multiPortNum + incDir);
            this.setUiAttribs({ "multiPortNum": this.uiAttribs.multiPortNum + incDir });
            this.checkNum();

            updateUi();
        };

        this.toggleManual = () =>
        {
            this.setUiAttribs({ "multiPortManual": !this.uiAttribs.multiPortManual });
            this.op.refreshParams();
        };

        this.on("onUiAttrChange", (attribs) =>
        {
            if (attribs.hasOwnProperty("multiPortManual"))
            {
                updateUi();
                this.removeInvalidPorts();
                this.checkNum();
                this.countPorts();
                updateUi();
            }
        });


        this.on("onUiAttrChange", this.checkNum.bind(this));
        this.checkNum();
        this.countPorts();
        this.removeInvalidPorts();
        updateUi();
    }
}





;// CONCATENATED MODULE: ./src/core/core_op.js









/**
 * op the class of all operators
 * @namespace external:CABLES#Op
 * @hideconstructor
 */

/**
 * @type {Object}
 * @name attachments
 * @instance
 * @memberof Op
 * @description access file attachments as String values
 * @example
 * // set shader source to attached files (files are called shader.vert / shader.frag)
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */

const Ops = {};

const Op = function ()
{
    EventTarget.apply(this);

    this._log = new Logger("core_op");
    this.data = {}; // UNUSED, DEPRECATED, only left in for backwards compatibility with userops
    this.storage = {}; // op-specific data to be included in export
    this.__objName = "";
    this.portsOut = [];
    this.portsIn = [];
    this.portsInData = []; // original loaded patch data
    this.opId = ""; // unique op id
    this.uiAttribs = {};
    this.enabled = true;
    this.patch = arguments[0];
    this._name = arguments[1];
    this.preservedPortTitles = {};
    this.preservedPortValues = {};
    this.preservedPortLinks = {};

    this._linkTimeRules = {
        "needsLinkedToWork": [],
        "needsParentOp": null
    };

    this.shouldWork = {};
    this.hasUiErrors = false;
    this._uiErrors = {};
    this._hasAnimPort = false;

    if (arguments[1])
    {
        this._shortOpName = CABLES.getShortOpName(arguments[1]);
        this.getTitle();
    }

    this.id = arguments[2] || shortId(); // instance id
    this.onAddPort = null;
    this.onCreate = null;
    this.onResize = null;
    this.onLoaded = null;
    this.onDelete = null;
    this.onError = null;

    this._instances = null;

    /**
     * overwrite this to prerender shader and meshes / will be called by op `loadingStatus`
     * @function preRender
     * @memberof Op
     * @instance
     */
    this.preRender = null;

    /**
     * overwrite this to initialize your op
     * @function init
     * @memberof Op
     * @instance
     */
    this.init = null;

    Object.defineProperty(this, "name", {
        get() { return this.getTitle(); },
        set(v)
        {
            this.setTitle(v);
        }
    });

    Object.defineProperty(this, "_objName", { set(on)
    {
        this.__objName = on; this._log = new Logger("op " + on);
    } });

    Object.defineProperty(this, "objName", { get() { return this.__objName; } });
    Object.defineProperty(this, "shortName", { get() { return this._shortOpName; } });

    if (this.initUi) this.initUi();
};

{
    Op.prototype.clearUiAttrib = function (name)
    {
        const obj = {};
        // obj.name = null;
        this.uiAttrib(obj);
    };

    Op.prototype.require = function (name)
    {
        if (CABLES.platform && CABLES.StandaloneElectron && !CABLES.platform.frontendOptions.isStandalone)
            this.setUiError("notstandalone", "This op will only work in cables standalone version", 3);

        return null;
    };


    Op.prototype.checkMainloopExists = function ()
    {
        if (!CABLES.UI) return;
        if (!this.patch.tempData.mainloopOp) this.setUiError("nomainloop", "patch should have a mainloop to use this op");
        else this.setUiError("nomainloop", null);
    };

    Op.prototype.getTitle = function ()
    {
        if (!this.uiAttribs) return "nouiattribs" + this._name;

        // if ((this.uiAttribs.title === undefined || this.uiAttribs.title === "") && this.objName.indexOf("Ops.Ui.") == -1)
        //     this.uiAttribs.title = this._shortOpName;

        return this.uiAttribs.title || this._shortOpName;
    };

    Op.prototype.setTitle = function (title)
    {
        // this._log.log("settitle", title);
        // this._log.log(
        //     (new Error()).stack
        // );

        if (title != this.getTitle()) this.uiAttr({ "title": title });
    };

    Op.prototype.setStorage = function (newAttribs)
    {
        if (!newAttribs) return;
        this.storage = this.storage || {};

        let changed = false;
        for (const p in newAttribs)
        {
            if (this.storage[p] != newAttribs[p]) changed = true;
            this.storage[p] = newAttribs[p];
        }

        if (changed) this.emitEvent("onStorageChange", newAttribs);
    };

    Op.prototype.isSubPatchOp = function ()
    {
        if (this.patchId && this.storage) return (this.storage.subPatchVer || this.storage.blueprintVer || 0);
        return false;
    };

    const _setUiAttrib = function (newAttribs)
    {
        if (!newAttribs) return;

        if (newAttribs.error || newAttribs.warning || newAttribs.hint)
        {
            this._log.warn("old ui error/warning attribute in " + this._name + ", use op.setUiError !", newAttribs);
        }


        if (typeof newAttribs != "object") this._log.error("op.uiAttrib attribs are not of type object");
        if (!this.uiAttribs) this.uiAttribs = {};

        let changed = false;
        let emitMove = false;
        if (
            CABLES.UI &&
            newAttribs.hasOwnProperty("translate") &&
            (
                !this.uiAttribs.translate ||
                this.uiAttribs.translate.x != newAttribs.translate.x ||
                this.uiAttribs.translate.y != newAttribs.translate.y
            )) emitMove = true;


        if (newAttribs.hasOwnProperty("title") && newAttribs.title != this.uiAttribs.title)
        {
            // const doEmitEvent = newAttribs.title != this.getTitle();
            this.uiAttribs.title = newAttribs.title;
            // if (doEmitEvent) this.emitEvent("onTitleChange", newAttribs.title);
            changed = true;
            // this.setTitle(newAttribs.title);
        }

        if (newAttribs.hasOwnProperty("disabled")) this.setEnabled(!newAttribs.disabled);

        for (const p in newAttribs)
        {
            if (this.uiAttribs[p] != newAttribs[p]) changed = true;
            this.uiAttribs[p] = newAttribs[p];
        }


        if (this.uiAttribs.hasOwnProperty("selected") && this.uiAttribs.selected == false) delete this.uiAttribs.selected;


        if (changed)
        {
            this.emitEvent("onUiAttribsChange", newAttribs);
            this.patch.emitEvent("onUiAttribsChange", this, newAttribs);
        }


        if (emitMove) this.emitEvent("move");
    };
    /**
     * setUiAttrib
     * possible values:
     * <pre>
     * warning - warning message - showing up in op parameter panel
     * error - error message - showing up in op parameter panel
     * extendTitle - op title extension, e.g. [ + ]
     * </pre>
     * @function setUiAttrib
     * @param {Object} newAttribs, e.g. {"attrib":value}
     * @memberof Op
     * @instance
     * @example
     * op.setUiAttrib({"extendTitle":str});
     */
    Op.prototype.setUiAttribs = Op.prototype.setUiAttrib = Op.prototype.uiAttr = _setUiAttrib;

    Op.prototype.getName = function ()
    {
        if (this.uiAttribs.name) return this.uiAttribs.name;
        return this._name;
    };

    Op.prototype.addOutPort = function (p)
    {
        p.direction = CONSTANTS.PORT.PORT_DIR_OUT;
        p._op = this;
        this.portsOut.push(p);
        this.emitEvent("onPortAdd", p);
        return p;
    };

    Op.prototype.hasDynamicPort = function ()
    {
        let i = 0;
        for (i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsIn[i].getName() == "dyn") return true;
        }
        for (i = 0; i < this.portsOut.length; i++)
        {
            if (this.portsOut[i].type == CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC) return true;
            if (this.portsOut[i].getName() == "dyn") return true;
        }

        return false;
    };

    Op.prototype.addInPort = function (p)
    {
        if (!(p instanceof Port)) throw new Error("parameter is not a port!");

        p.direction = CONSTANTS.PORT.PORT_DIR_IN;
        p._op = this;

        this.portsIn.push(p);
        this.emitEvent("onPortAdd", p);

        return p;
    };

    /**
     * create a trigger input port
     * @function inTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     *
     */
    Op.prototype.inFunction = Op.prototype.inTrigger = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create multiple UI trigger buttons
     * @function inTriggerButton
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Array} names
     * @return {Port} created port
     */
    Op.prototype.inFunctionButton = Op.prototype.inTriggerButton = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "button"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inFunctionButton = Op.prototype.inUiTriggerButtons = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION, {
                "display": "buttons"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };



    /**
     * create a number value input port
     * @function inFloat
     * @memberof Op
     * @instance
     * @param {String} name
     * @param {Number} value
     * @return {Port} created port
     */
    Op.prototype.inValueFloat = Op.prototype.inValue = Op.prototype.inFloat = function (name, v)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));

        p.setInitialValue(v);

        return p;
    };

    /**
     * create a boolean input port, displayed as a checkbox
     * @function inBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Boolean} value
     * @return {Port} created port
     */
    Op.prototype.inValueBool = Op.prototype.inBool = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "display": "bool"
            })
        );

        if (v === true)v = 1;
        if (v === false)v = 0;
        p.setInitialValue(v);

        return p;
    };


    Op.prototype.inMultiPort = function (name, type)
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_IN,
            {
                "addPort": true,
                "hidePort": true
            }
        );
        p.ignoreValueSerialize = true;

        this.addInPort(p);
        p.initPorts();

        return p;
    };

    Op.prototype.outMultiPort = function (name, type, uiAttribsPort = {})
    {
        const p = new MultiPort(
            this,
            name,
            type,
            CONSTANTS.PORT.PORT_DIR_OUT,
            {
                "display": "multiport",
                "hidePort": true
            },
            uiAttribsPort
        );
        p.ignoreValueSerialize = true;

        this.addOutPort(p);
        p.initPorts();

        return p;
    };



    Op.prototype.inValueString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port
     * @function inString
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inString = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        v = v || "";
        // p.value = v;

        p.setInitialValue(v);
        return p;
    };

    /**
     * create a String value input port displayed as TextArea
     * @function inValueText
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueText = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";

        p.setInitialValue(v);
        // if (v !== undefined)
        // {
        //     p.set(v);
        //     p.defaultValue = v;
        // }
        return p;
    };

    Op.prototype.inTextarea = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "text"
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a String value input port displayed as editor
     * @function inStringEditor
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {String} value default value
     * @return {Port} created port
     */
    // new string
    Op.prototype.inStringEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string",
                "display": "editor",
                "editShortcut": true,
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            }));

        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    // old
    Op.prototype.inValueEditor = function (name, v, syntax, hideFormatButton = true)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "type": "string",
                "display": "editor",
                "editorSyntax": syntax,
                "hideFormatButton": hideFormatButton
            })
        );
        p.value = "";
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a string select box
     * @function inDropDown
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueSelect = Op.prototype.inDropDown = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_NUMBER, {
                "increment": "integer",
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const valuePort = new ValueSelectPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_NUMBER,
                {
                    "display": "dropdown",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            valuePort.indexPort = indexPort;

            valuePort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                valuePort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };

            p = this.addInPort(valuePort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const valuePort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "dropdown",
                "hidePort": true,
                "type": "string",
                values
            });

            p = this.addInPort(valuePort);
        }

        return p;
    };

    /**
     * create a string switch box
     * @function inSwitch
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} values
     * @param {String} value default value
     * @return {Port} created port
     */
    Op.prototype.inSwitch = function (name, values, v, noindex)
    {
        let p = null;
        if (!noindex)
        {
            if (!v)v = values[0];
            const indexPort = new Port(this, name + " index", CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer",
                "values": values,
                "hideParam": true
            });
            const n = this.addInPort(indexPort);

            if (values) for (let i = 0; i < values.length; i++) values[i] = String(values[i]);

            const switchPort = new SwitchPort(
                this,
                name,
                CONSTANTS.OP.OP_PORT_TYPE_STRING,
                {
                    "display": "switch",
                    "hidePort": true,
                    "type": "string",
                    "values": values
                },
                n
            );

            switchPort.indexPort = indexPort;

            switchPort.on("change", (val, thePort) =>
            {
                if (!thePort.indexPort.isLinked() && thePort.uiAttribs.values)
                {
                    const idx = thePort.uiAttribs.values.indexOf(val);
                    if (idx > -1) thePort.indexPort.set(idx);
                }
            });

            indexPort.onLinkChanged = function ()
            {
                switchPort.setUiAttribs({ "greyout": indexPort.isLinked() });
            };
            p = this.addInPort(switchPort);

            if (v !== undefined)
            {
                p.set(v);
                const index = values.findIndex((item) => { return item == v; });
                n.setValue(index);
                p.defaultValue = v;
                n.defaultValue = index;
            }
        }
        else
        {
            const switchPort = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "switch",
                "hidePort": true,
                "type": "string",
                "values": values
            });
            p = this.addInPort(switchPort);
        }

        return p;
    };

    /**
     * create a integer input port
     * @function inInt
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} value default value
     * @return {Port} created port
     */
    Op.prototype.inValueInt = Op.prototype.inInt = function (name, v)
    {
        // old
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "increment": "integer"
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a file/URL input port
     * @function inURL
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inFile = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.inUrl = function (name, filter, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "display": "file",
                "type": "string",
                "filter": filter
            })
        );
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create a texture input port
     * @function inTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inTexture = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "display": "texture",
                "objType": "texture",
                "preview": true
            })
        );
        p.ignoreValueSerialize = true;
        if (v !== undefined) p.set(v);
        return p;
    };


    /**
     * create a object input port
     * @function inObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inObject = function (name, v, objType)
    {
        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType }));
        p.ignoreValueSerialize = true;

        if (v !== undefined) p.set(v);
        return p;
    };

    Op.prototype.inGradient = function (name, v)
    {
        const p = this.addInPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "gradient"
                // "hidePort": true
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };


    Op.prototype.getPortVisibleIndex = function (p)
    {
        let ports = this.portsIn;
        if (p.direction == CONSTANTS.PORT_DIR_OUT)ports = this.portsOut;

        let index = 0;
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i].uiAttribs.hidePort) continue;
            index++;
            if (ports[i] == p) return index;
        }
    };

    /**
     * create a array input port
     * @function inArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.inArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));

        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        // if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create a value slider input port
     * @function inFloatSlider
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} defaultvalue
     * @param {number} min
     * @param {number} max
     * @return {Port} created port
     */
    Op.prototype.inValueSlider = Op.prototype.inFloatSlider = function (name, v, min, max)
    {
        const uiattribs = { "display": "range" };

        if (min != undefined && max != undefined)
        {
            uiattribs.min = min;
            uiattribs.max = max;
        }

        const p = this.addInPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, uiattribs));
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    /**
     * create output trigger port
     * @function outTrigger
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outFunction = Op.prototype.outTrigger = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_FUNCTION));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * create output value port
     * @function outNumber
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {number} default value
     * @return {Port} created port
     */
    Op.prototype.outValue = Op.prototype.outNumber = function (name, v)
    {
        // old
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE));
        if (v !== undefined) p.set(v);
        return p;
    };

    /**
     * deprecated create output boolean port
     * @deprecated
     * @function outBool
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueBool = Op.prototype.outBool = function (name, v)
    {
        // old: use outBoolNum
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "bool"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output boolean port,value will be converted to 0 or 1
     * @function outBoolNum
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outBoolNum = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "display": "boolnum"
            })
        );

        p.set = function (b)
        {
            this.setValue(b ? 1 : 0);
            // this._log.log("bool set", b, this.get());
        }.bind(p);

        if (v !== undefined) p.set(v);
        else p.set(0);
        return p;
    };

    /**
     * create output string port
     * @function outString
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outValueString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_VALUE, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        return p;
    };
    Op.prototype.outString = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_STRING, {
                "type": "string"
            })
        );
        if (v !== undefined) p.set(v);
        else p.set("");
        return p;
    };

    /**
     * create output object port
     * @function outObject
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outObject = function (name, v, objType)
    {
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, { "objType": objType || null }));
        p.set(v || null);
        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output array port
     * @function outArray
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outArray = function (name, v, stride)
    {
        if (!stride && CABLES.UTILS.isNumeric(v))stride = v;
        const p = this.addOutPort(new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_ARRAY, { "stride": stride }));
        if (v !== undefined && (Array.isArray(v) || v == null)) p.set(v);

        p.ignoreValueSerialize = true;
        return p;
    };

    /**
     * create output texture port
     * @function outTexture
     * @instance
     * @memberof Op
     * @param {String} name
     * @return {Port} created port
     */
    Op.prototype.outTexture = function (name, v)
    {
        const p = this.addOutPort(
            new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_OBJECT, {
                "preview": true,
                "objType": "texture",
                "display": "texture"
            })
        );
        if (v !== undefined) p.setRef(v || CGL.Texture.getEmptyTexture(this.patch.cgl));

        p.ignoreValueSerialize = true;
        return p;
    };

    Op.prototype.inDynamic = function (name, filter, options, v)
    {
        const p = new Port(this, name, CONSTANTS.OP.OP_PORT_TYPE_DYNAMIC, options);

        p.shouldLink = function (p1, p2)
        {
            if (filter && UTILS.isArray(filter))
            {
                for (let i = 0; i < filter.length; i++)
                {
                    if (p1 == this && p2.type === filter[i]) return true;
                    if (p2 == this && p1.type === filter[i]) return true;
                }
                return false; // types do not match
            }
            return true; // no filter set
        };

        this.addInPort(p);
        if (v !== undefined)
        {
            p.set(v);
            p.defaultValue = v;
        }
        return p;
    };

    Op.prototype.removeLinks = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].removeLinks();
        for (let i = 0; i < this.portsOut.length; i++) this.portsOut[i].removeLinks();
    };

    Op.prototype.getSerialized = function ()
    {
        const opObj = {};

        if (this.opId) opObj.opId = this.opId;
        if (this.patch.storeObjNames) opObj.objName = this.objName;

        opObj.id = this.id;
        opObj.uiAttribs = JSON.parse(JSON.stringify(this.uiAttribs)) || {};

        if (this.storage && Object.keys(this.storage).length > 0) opObj.storage = JSON.parse(JSON.stringify(this.storage));
        if (this.uiAttribs.hasOwnProperty("working") && this.uiAttribs.working == true) delete this.uiAttribs.working;
        if (opObj.uiAttribs.hasOwnProperty("uierrors")) delete opObj.uiAttribs.uierrors;

        if (opObj.uiAttribs.title === "") delete opObj.uiAttribs.title;
        if (opObj.uiAttribs.color === null) delete opObj.uiAttribs.color;
        if (opObj.uiAttribs.comment === null) delete opObj.uiAttribs.comment;

        if (opObj.uiAttribs.title == this._shortOpName ||
            (this.uiAttribs.title || "").toLowerCase() == this._shortOpName.toLowerCase()) delete opObj.uiAttribs.title;

        opObj.portsIn = [];
        opObj.portsOut = [];

        for (let i = 0; i < this.portsIn.length; i++)
        {
            const s = this.portsIn[i].getSerialized();
            if (s) opObj.portsIn.push(s);
        }

        for (let i = 0; i < this.portsOut.length; i++)
        {
            const s = this.portsOut[i].getSerialized();
            if (s) opObj.portsOut.push(s);
        }

        if (opObj.portsIn.length == 0) delete opObj.portsIn;
        if (opObj.portsOut.length == 0) delete opObj.portsOut;
        cleanJson(opObj);

        return opObj;
    };

    Op.prototype.getFirstOutPortByType = function (type)
    {
        for (const ipo in this.portsOut) if (this.portsOut[ipo].type == type) return this.portsOut[ipo];
    };

    Op.prototype.getFirstInPortByType = function (type)
    {
        for (const ipo in this.portsIn) if (this.portsIn[ipo].type == type) return this.portsIn[ipo];
    };

    /**
     * return port by the name portName
     * @function getPort
     * @instance
     * @memberof Op
     * @param {String} portName
     * @return {Port}
     */
    Op.prototype.getPort = Op.prototype.getPortByName = function (name, lowerCase)
    {
        if (lowerCase)
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName().toLowerCase() == name || this.portsIn[ipi].id.toLowerCase() == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName().toLowerCase() == name || this.portsOut[ipo].id.toLowerCase() == name)
                    return this.portsOut[ipo];
        }
        else
        {
            for (let ipi = 0; ipi < this.portsIn.length; ipi++)
                if (this.portsIn[ipi].getName() == name || this.portsIn[ipi].id == name)
                    return this.portsIn[ipi];

            for (let ipo = 0; ipo < this.portsOut.length; ipo++)
                if (this.portsOut[ipo].getName() == name || this.portsOut[ipo].id == name)
                    return this.portsOut[ipo];
        }
    };


    /**
     * return port by the name id
     * @function getPortById
     * @instance
     * @memberof Op
     * @param {String} id
     * @return {Port}
     */
    Op.prototype.getPortById = function (id)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++) if (this.portsIn[ipi].id == id) return this.portsIn[ipi];
        for (let ipo = 0; ipo < this.portsOut.length; ipo++) if (this.portsOut[ipo].id == id) return this.portsOut[ipo];
    };

    Op.prototype.updateAnims = function ()
    {
        if (this._hasAnimPort)
            for (let i = 0; i < this.portsIn.length; i++) this.portsIn[i].updateAnim();
    };

    Op.prototype.log = function ()
    {
        this._log.log(...arguments);
    };

    Op.prototype.error = Op.prototype.logError = function ()
    {
        // if (!this)
        // {
        //     this._log.error("no this...!!!");
        //     debugger;
        //     return;
        // }
        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 2 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.error, [console, args]);// eslint-disable-line
        // if (window.gui) window.gui.emitEvent("opLogEvent", this.objName, "error", arguments);
        this._log.error(...arguments);
    };

    Op.prototype.warn = Op.prototype.logWarn = function ()
    {
        this._log.warn(...arguments);

        // const initiator = "op " + this.objName;
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 1 }, ...arguments)) return;

        // // if (this.patch.silent) return;
        // const args = ["[op " + CABLES.getShortOpName(this.objName) + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.warn, [console, args]);// eslint-disable-line
    };

    Op.prototype.verbose = Op.prototype.logVerbose = function ()
    {
        // const initiator = "op " + CABLES.getShortOpName(this.objName);
        // if (CABLES.UI && !CABLES.UI.logFilter.filterLog({ "initiator": initiator, "opInstId": this.id, "level": 0 }, ...arguments)) return;

        // if (!CABLES.UI && this.patch.silent) return;

        // const args = ["[" + initiator + "]"];
        // args.push.apply(args, arguments);
        // Function.prototype.apply.apply(this._log.info, [console, args]);// eslint-disable-line
        this._log.verbose(...arguments);
    };


    Op.prototype.profile = function (enable)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            this.portsIn[ipi]._onTriggered = this.portsIn[ipi]._onTriggeredProfiling;
            this.portsIn[ipi].set = this.portsIn[ipi]._onSetProfiling;
        }
    };

    Op.prototype.findParent = function (objName)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi].isLinked())
            {
                if (this.portsIn[ipi].links[0].portOut.parent.objName == objName)
                    return this.portsIn[ipi].links[0].portOut.parent;

                let found = null;
                found = this.portsIn[ipi].links[0].portOut.parent.findParent(objName);
                if (found) return found;
            }
        }
        return null;
    };


    // todo: check instancing stuff?
    Op.prototype.cleanUp = function ()
    {
        if (this._instances)
        {
            for (let i = 0; i < this._instances.length; i++)
            {
                if (this._instances[i].onDelete) this._instances[i].onDelete();
            }


            this._instances.length = 0;
        }
        for (let i = 0; i < this.portsIn.length; i++)
        {
            this.portsIn[i].setAnimated(false);
        }

        if (this.onAnimFrame) this.patch.removeOnAnimFrame(this);
    };

    // todo: check instancing stuff?
    Op.prototype.instanced = function (triggerPort)
    {
        return false;
        // this._log.log("instanced", this.patch.instancing.numCycles());
        // if (this.patch.instancing.numCycles() === 0) return false;


        // let i = 0;
        // let ipi = 0;
        // if (!this._instances || this._instances.length != this.patch.instancing.numCycles())
        // {
        //     if (!this._instances) this._instances = [];
        //     this._.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length);
        //     this._instances.length = this.patch.instancing.numCycles();

        //     for (i = 0; i < this._instances.length; i++)
        //     {
        //         this._instances[i] = this.patch.createOp(this.objName, true);
        //         this._instances[i].instanced = function ()
        //         {
        //             return false;
        //         };
        //         this._instances[i].uiAttr(this.uiAttribs);

        //         for (let ipo = 0; ipo < this.portsOut.length; ipo++)
        //         {
        //             if (this.portsOut[ipo].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 this._instances[i].getPortByName(this.portsOut[ipo].name).trigger = this.portsOut[ipo].trigger.bind(this.portsOut[ipo]);
        //             }
        //         }
        //     }

        //     for (ipi = 0; ipi < this.portsIn.length; ipi++)
        //     {
        //         this.portsIn[ipi].onChange = null;
        //         this.portsIn[ipi].onValueChanged = null;
        //     }
        // }

        // const theTriggerPort = null;
        // for (ipi = 0; ipi < this.portsIn.length; ipi++)
        // {
        //     if (
        //         this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE ||
        //         this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_ARRAY
        //     )
        //     {
        //         this._instances[this.patch.instancing.index()].portsIn[ipi].set(this.portsIn[ipi].get());
        //     }
        //     if (this.portsIn[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //     {
        //         // if(this._instances[ this.patch.instancing.index() ].portsIn[ipi].name==triggerPort.name)
        //         // theTriggerPort=this._instances[ this.patch.instancing.index() ].portsIn[ipi];
        //     }
        // }

        // if (theTriggerPort) theTriggerPort.onTriggered();

        // for (ipi = 0; ipi < this.portsOut.length; ipi++)
        // {
        //     if (this.portsOut[ipi].type == CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //     {
        //         this.portsOut[ipi].set(this._instances[this.patch.instancing.index()].portsOut[ipi].get());
        //     }
        // }

        // return true;
    };

    // todo: check instancing stuff?
    Op.prototype.initInstancable = function ()
    {
        //         if(this.isInstanced)
        //         {
        //             this._log.log('cancel instancing');
        //             return;
        //         }
        //         this._instances=[];
        //         for(var ipi=0;ipi<this.portsIn.length;ipi++)
        //         {
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_VALUE)
        //             {
        //
        //             }
        //             if(this.portsIn[ipi].type==CONSTANTS.OP.OP_PORT_TYPE_FUNCTION)
        //             {
        //                 // var piIndex=ipi;
        //                 this.portsIn[ipi].onTriggered=function(piIndex)
        //                 {
        //
        //                     var i=0;
        // // this._log.log('trigger',this._instances.length);
        //
        //                 }.bind(this,ipi );
        //
        //             }
        // };
        // this._instances=null;
    };

    Op.prototype.setValues = function (obj)
    {
        for (const i in obj)
        {
            const port = this.getPortByName(i);
            if (port) port.set(obj[i]);
            else this._log.warn("op.setValues: port not found:", i);
        }
    };

    /**
     * return true if op has this error message id
     * @function hasUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @returns {Boolean} - has id
     */
    Op.prototype.hasUiError = function (id)
    {
        return this._uiErrors.hasOwnProperty(id) && this._uiErrors[id];
    };

    /**
     * show op error message - set message to null to remove error message
     * @function setUiError
     * @instance
     * @memberof Op
     * @param {id} error id
     * @param {txt} text message
     * @param {level} level
     */
    Op.prototype.setUiError = function (id, txt, level)
    {
        // overwritten in ui: core_extend_op
    };

    // todo: remove
    Op.prototype.setError = function (id, txt)
    {
        this._log.warn("old error message op.error() - use op.setUiError()");
    };


    /**
     * enable/disable op
     * @function
     * @instance
     * @memberof Op
     * @param {boolean}
     */
    Op.prototype.setEnabled = function (b)
    {
        this.enabled = b;
        this.emitEvent("onEnabledChange", b);
    };

    /**
     * organize ports into a group
     * @function
     * @instance
     * @memberof Op
     * @param {String} name
     * @param {Array} ports
     */
    Op.prototype.setPortGroup = function (name, ports)
    {
        for (let i = 0; i < ports.length; i++)
        {
            if (ports[i])
                if (ports[i].setUiAttribs) ports[i].setUiAttribs({ "group": name });
                else
                {
                    this._log.error("setPortGroup: invalid port!");
                }
        }
    };

    /**
     * visually indicate ports that they are coordinate inputs
     * @function
     * @instance
     * @memberof Op
     * @param {Port} portX
     * @param {Port} portY
     * @param {Port} portZ
     */
    Op.prototype.setUiAxisPorts = function (px, py, pz)
    {
        if (px) px.setUiAttribs({ "axis": "X" });
        if (py) py.setUiAttribs({ "axis": "Y" });
        if (pz) pz.setUiAttribs({ "axis": "Z" });
    };

    /**
     * remove port from op
     * @function removePort
     * @instance
     * @memberof Op
     * @param {Port} port to remove
     */
    Op.prototype.removePort = function (port)
    {
        for (let ipi = 0; ipi < this.portsIn.length; ipi++)
        {
            if (this.portsIn[ipi] == port)
            {
                this.portsIn.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
        for (let ipi = 0; ipi < this.portsOut.length; ipi++)
        {
            if (this.portsOut[ipi] == port)
            {
                this.portsOut.splice(ipi, 1);
                this.emitEvent("onUiAttribsChange", {});
                this.emitEvent("onPortRemoved", {});
                return;
            }
        }
    };

    Op.prototype._checkLinksNeededToWork = function () {};

    /**
     * show a warning of this op is not a child of parentOpName
     * @function
     * @instance
     * @memberof Op
     * @param {String} parentOpName
     */
    Op.prototype.toWorkNeedsParent = function (parentOpName)
    {
        this._linkTimeRules.needsParentOp = parentOpName;
    };

    // /**
    //  * show a warning of this op is a child of parentOpName
    //  * @function
    //  * @instance
    //  * @memberof Op
    //  * @param {String} parentOpName
    //  */
    Op.prototype.toWorkShouldNotBeChild = function (parentOpName, type)
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.forbiddenParent = parentOpName;
        if (type != undefined) this._linkTimeRules.forbiddenParentType = type;
    };


    /**
     * show a small X to indicate op is not working when given ports are not linked
     * @function
     * @instance
     * @memberof Op
     * @param {Port} port1
     * @param {Port} port2
     * @param {Port} port3
     */
    Op.prototype.toWorkPortsNeedToBeLinked = function ()
    {
        if (!this.patch.isEditorMode()) return;
        for (let i = 0; i < arguments.length; i++)
            if (this._linkTimeRules.needsLinkedToWork.indexOf(arguments[i]) == -1) this._linkTimeRules.needsLinkedToWork.push(arguments[i]);
    };
    Op.prototype.toWorkPortsNeedToBeLinkedReset = function ()
    {
        if (!this.patch.isEditorMode()) return;
        this._linkTimeRules.needsLinkedToWork.length = 0;
        if (this.checkLinkTimeWarnings) this.checkLinkTimeWarnings();
    };

    Op.prototype.initVarPorts = function ()
    {
        for (let i = 0; i < this.portsIn.length; i++)
        {
            if (this.portsIn[i].getVariableName()) this.portsIn[i].setVariable(this.portsIn[i].getVariableName());
        }
    };

    /**
     * refresh op parameters, if current op is selected
     * @function
     * @instance
     * @memberof Op
     */
    Op.prototype.refreshParams = function ()
    {
        if (this.patch && this.patch.isEditorMode() && this.isCurrentUiOp())
        {
            gui.opParams.show(this);
        }
    };

    /**
     * Returns true if op is selected and parameter are shown in the editor, can only return true if in editor/ui
     * @function isCurrentUiOp
     * @instance
     * @memberof Op
     * @returns {Boolean} - is current ui op
     */
    Op.prototype.isCurrentUiOp = function ()
    {
        if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };

    /**
     * Implement to render 2d canvas based graphics from in an op
     * @function renderVizLayer
     * @instance
     * @memberof Op
     * @param {ctx} context of canvas 2d
     * @param {Object} layer info
     * @param {number} layer.x x position on canvas
     * @param {number} layer.y y position on canvas
     * @param {number} layer.width width of canvas
     * @param {number} layer.height height of canvas
     * @param {number} layer.scale current scaling of patchfield view
     */
    Op.prototype.renderVizLayer = null; // optionaly defined in op instance
}



;// CONCATENATED MODULE: ./src/core/loadingstatus.js




/**
 * LoadingStatus class, manages asynchronous loading jobs
 *
 * @namespace external:CABLES#LoadingStatus
 * @hideconstructor
 * @class
 * @param patch
 */
const LoadingStatus = function (patch)
{
    EventTarget.apply(this);

    this._log = new Logger("LoadingStatus");
    this._loadingAssets = {};
    this._cbFinished = [];
    this._assetTasks = [];
    this._percent = 0;
    this._count = 0;
    this._countFinished = 0;
    this._order = 0;
    this._startTime = 0;
    this._patch = patch;
    this._wasFinishedPrinted = false;
    this._loadingAssetTaskCb = false;
};

LoadingStatus.prototype.setOnFinishedLoading = function (cb)
{
    this._cbFinished.push(cb);
};

LoadingStatus.prototype.getNumAssets = function ()
{
    return this._countFinished;
};

LoadingStatus.prototype.getProgress = function ()
{
    return this._percent;
};

LoadingStatus.prototype.checkStatus = function ()
{
    this._countFinished = 0;
    this._count = 0;

    for (const i in this._loadingAssets)
    {
        this._count++;
        if (!this._loadingAssets[i].finished)
        {
            this._countFinished++;
        }
    }

    this._percent = (this._count - this._countFinished) / this._count;

    if (this._countFinished === 0)
    {
        for (let j = 0; j < this._cbFinished.length; j++)
        {
            if (this._cbFinished[j])
            {
                const cb = this._cbFinished[j];
                setTimeout(() => { cb(this._patch); this.emitEvent("finishedAll"); }, 100);
            }
        }

        if (!this._wasFinishedPrinted)
        {
            this._wasFinishedPrinted = true;
            this.print();
        }
        this.emitEvent("finishedAll");
    }
};

LoadingStatus.prototype.getList = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        arr.push(this._loadingAssets[i]);
    }

    return arr;
};


LoadingStatus.prototype.getListJobs = function ()
{
    let arr = [];
    for (const i in this._loadingAssets)
    {
        if (!this._loadingAssets[i].finished)arr.push(this._loadingAssets[i].name);
    }

    return arr;
};

LoadingStatus.prototype.print = function ()
{
    if (this._patch.config.silent) return;

    const rows = [];

    for (const i in this._loadingAssets)
    {
        rows.push([
            this._loadingAssets[i].order,
            this._loadingAssets[i].type,
            this._loadingAssets[i].name,
            (this._loadingAssets[i].timeEnd - this._loadingAssets[i].timeStart) / 1000 + "s",
        ]);
    }

    this._log.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1000 + "s");
    this._log.table(rows);
    this._log.groupEnd();
};

LoadingStatus.prototype.finished = function (id)
{
    const l = this._loadingAssets[id];
    if (l)
    {
        if (l.finished) this._log.warn("loading job was already finished", l);

        if (l.op) l.op.setUiAttribs({ "loading": false });
        l.finished = true;
        l.timeEnd = Date.now();
    }

    this.checkStatus();
    this.emitEvent("finishedTask");
    return null;
};

LoadingStatus.prototype._startAssetTasks = function ()
{
    for (let i = 0; i < this._assetTasks.length; i++) this._assetTasks[i]();
    this._assetTasks.length = 0;
};

/**
 * delay an asset loading task, mainly to wait for ui to be finished loading and showing, and only then start loading assets
 * @function addAssetLoadingTask
 * @instance
 * @memberof LoadingStatus
 * @param {function} cb callback
 */
LoadingStatus.prototype.addAssetLoadingTask = function (cb)
{
    if (this._patch.isEditorMode() && !CABLES.UI.loaded)
    {
        this._assetTasks.push(cb);

        if (!this._loadingAssetTaskCb)window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this));
        this._loadingAssetTaskCb = true;
    }
    else
    {
        cb();
    }
    this.emitEvent("addAssetTask");
};

LoadingStatus.prototype.existByName = function (name)
{
    for (let i in this._loadingAssets)
    {
        if (this._loadingAssets[i].name == name && !this._loadingAssets[i].finished)
            return true;
    }
};

LoadingStatus.prototype.start = function (type, name, op)
{
    if (this._startTime == 0) this._startTime = Date.now();
    const id = generateUUID();

    name = name || "unknown";
    if (name.length > 100)name = name.substring(0, 100);


    if (op)op.setUiAttribs({ "loading": true });

    this._loadingAssets[id] = {
        "id": id,
        "op": op,
        "type": type,
        "name": name,
        "finished": false,
        "timeStart": Date.now(),
        "order": this._order,
    };
    this._order++;

    this.emitEvent("startTask");

    return id;
};



;// CONCATENATED MODULE: ./src/core/timer.js


/** @namespace CABLES */

const internalNow = function ()
{
    return window.performance.now();
};



/**
 * current time in milliseconds
 * @memberof CABLES
 * @function now
 * @static
 */
const now = function ()
{
    return internalNow();
};

// ----------------------------

/**
 * Measuring time
 * @namespace external:CABLES#Timer
 * @hideconstructor
 * @class
 */
const Timer = function ()
{
    EventTarget.apply(this);

    this._timeStart = internalNow();
    this._timeOffset = 0;

    this._currentTime = 0;
    this._lastTime = 0;
    this._paused = true;
    this._delay = 0;
    this.overwriteTime = -1;
};


Timer.prototype._internalNow = function ()
{
    if (this._ts) return this._ts;
    return internalNow();
};

Timer.prototype._getTime = function ()
{
    this._lastTime = (this._internalNow() - this._timeStart) / 1000;
    return this._lastTime + this._timeOffset;
};

Timer.prototype.setDelay = function (d)
{
    this._delay = d;
    this.emitEvent("timeChange");
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @description returns true if timer is playing
 * @return {Boolean} value
 */
Timer.prototype.isPlaying = function ()
{
    return !this._paused;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @param ts
 * @description update timer
 * @return {Number} time
 */
Timer.prototype.update = function (ts)
{
    if (ts) this._ts = ts;
    if (this._paused) return;
    this._currentTime = this._getTime();

    return this._currentTime;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} time in milliseconds
 */
Timer.prototype.getMillis = function ()
{
    return this.get() * 1000;
};

/**
 * @function
 * @memberof Timer
 * @instance
 * @return {Number} value time in seconds
 */
Timer.prototype.get = Timer.prototype.getTime = function ()
{
    if (this.overwriteTime >= 0) return this.overwriteTime - this._delay;
    return this._currentTime - this._delay;
};

/**
 * toggle between play/pause state
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.togglePlay = function ()
{
    if (this._paused) this.play();
    else this.pause();
};

/**
 * set current time
 * @function
 * @memberof Timer
 * @instance
 * @param {Number} t
 */
Timer.prototype.setTime = function (t)
{
    if (isNaN(t) || t < 0) t = 0;
    this._timeStart = this._internalNow();
    this._timeOffset = t;
    this._currentTime = t;
    this.emitEvent("timeChange");
};

Timer.prototype.setOffset = function (val)
{
    if (this._currentTime + val < 0)
    {
        this._timeStart = this._internalNow();
        this._timeOffset = 0;
        this._currentTime = 0;
    }
    else
    {
        this._timeOffset += val;
        this._currentTime = this._lastTime + this._timeOffset;
    }
    this.emitEvent("timeChange");
};

/**
 * (re)starts the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.play = function ()
{
    this._timeStart = this._internalNow();
    this._paused = false;
    this.emitEvent("playPause");
};

/**
 * pauses the timer
 * @function
 * @memberof Timer
 * @instance
 */
Timer.prototype.pause = function ()
{
    this._timeOffset = this._currentTime;
    this._paused = true;
    this.emitEvent("playPause");
};



;// CONCATENATED MODULE: ./src/core/core_profiler.js


class Profiler
{
    constructor(patch)
    {
        this.startFrame = patch.getFrameNum();
        this.items = {};
        this.currentId = null;
        this.currentStart = 0;
        this._patch = patch;
    }

    getItems()
    {
        return this.items;
    }

    clear()
    {
        if (this.paused) return;
        this.items = {};
    }

    togglePause()
    {
        this.paused = !this.paused;
        if (!this.paused)
        {
            this.items = {};
            this.currentStart = performance.now();
        }
    }

    add(type, object)
    {
        if (this.paused) return;

        if (this.currentId !== null)
        {
            if (!object || object.id != this.currentId)
            {
                if (this.items[this.currentId])
                {
                    this.items[this.currentId].timeUsed += performance.now() - this.currentStart;

                    if (!this.items[this.currentId].peakTime || now() - this.items[this.currentId].peakTime > 5000)
                    {
                        this.items[this.currentId].peak = 0;
                        this.items[this.currentId].peakTime = now();
                    }
                    this.items[this.currentId].peak = Math.max(this.items[this.currentId].peak, performance.now() - this.currentStart);
                }
            }
        }

        if (object !== null)
        {
            if (!this.items[object.id])
            {
                this.items[object.id] = {
                    "numTriggers": 0,
                    "timeUsed": 0,
                };
            }

            if (this.items[object.id].lastFrame != this._patch.getFrameNum()) this.items[object.id].numTriggers = 0;

            this.items[object.id].lastFrame = this._patch.getFrameNum();
            this.items[object.id].numTriggers++;
            this.items[object.id].opid = object.op.id;
            this.items[object.id].title = object.op.name + "." + object.name;
            this.items[object.id].subPatch = object.op.uiAttribs.subPatch;

            this.currentId = object.id;
            this.currentStart = performance.now();
        }
        else
        {
            this.currentId = null;
        }
    }

    print()
    {
        console.log("--------");
        for (const i in this.items)
        {
            console.log(this.items[i].title + ": " + this.items[i].numTriggers + " / " + this.items[i].timeUsed);
        }
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/constants.js
const SHADER = {
    // default attributes
    "SHADERVAR_VERTEX_POSITION": "vPosition",
    "SHADERVAR_VERTEX_NUMBER": "attrVertIndex",
    "SHADERVAR_VERTEX_NORMAL": "attrVertNormal",
    "SHADERVAR_VERTEX_TEXCOORD": "attrTexCoord",
    "SHADERVAR_INSTANCE_MMATRIX": "instMat",
    "SHADERVAR_VERTEX_COLOR": "attrVertColor",

    "SHADERVAR_INSTANCE_INDEX": "instanceIndex",

    // default uniforms
    "SHADERVAR_UNI_PROJMAT": "projMatrix",
    "SHADERVAR_UNI_VIEWMAT": "viewMatrix",
    "SHADERVAR_UNI_MODELMAT": "modelMatrix",
    "SHADERVAR_UNI_NORMALMAT": "normalMatrix",
    "SHADERVAR_UNI_INVVIEWMAT": "inverseViewMatrix",
    "SHADERVAR_UNI_INVPROJMAT": "invProjMatrix",
    "SHADERVAR_UNI_MATERIALID": "materialId",
    "SHADERVAR_UNI_OBJECTID": "objectId",

    "SHADERVAR_UNI_VIEWPOS": "camPos",
};


const BLEND_MODES = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};





const RAD2DEG = 180.0 / Math.PI;
const DEG2RAD = Math.PI / 180.0;

const constants_CONSTANTS = {
    "MATH": {
        "DEG2RAD": DEG2RAD,
        "RAD2DEG": RAD2DEG,
    },
    "SHADER": SHADER,
    "BLEND_MODES": BLEND_MODES,
};




;// CONCATENATED MODULE: ./src/core/cg/cg_uniform.js



class CgUniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        this._log = new Logger("cg_uniform");
        this._type = __type;
        this._name = __name;
        this._shader = __shader;
        this._value = 0.00001;
        this._oldValue = null;
        this._port = null;
        this._structName = _structName;
        this._structUniformName = _structUniformName;
        this._propertyName = _propertyName;

        this._shader._addUniform(this);
        this.needsUpdate = true;
        this.shaderType = null;
        this.comment = null;

        if (__type == "f")
        {
            this.set = this.setValue = this.setValueF.bind(this);
            this.updateValue = this.updateValueF.bind(this);
        }
        else if (__type == "f[]")
        {
            this.set = this.setValue = this.setValueArrayF.bind(this);
            this.updateValue = this.updateValueArrayF.bind(this);
        }
        else if (__type == "2f[]")
        {
            this.set = this.setValue = this.setValueArray2F.bind(this);
            this.updateValue = this.updateValueArray2F.bind(this);
        }
        else if (__type == "3f[]")
        {
            this.set = this.setValue = this.setValueArray3F.bind(this);
            this.updateValue = this.updateValueArray3F.bind(this);
        }
        else if (__type == "4f[]")
        {
            this.set = this.setValue = this.setValueArray4F.bind(this);
            this.updateValue = this.updateValueArray4F.bind(this);
        }
        else if (__type == "i")
        {
            this.set = this.setValue = this.setValueI.bind(this);
            this.updateValue = this.updateValueI.bind(this);
        }
        else if (__type == "2i")
        {
            this.set = this.setValue = this.setValue2I.bind(this);
            this.updateValue = this.updateValue2I.bind(this);
        }
        else if (__type == "3i")
        {
            this.set = this.setValue = this.setValue3I.bind(this);
            this.updateValue = this.updateValue3I.bind(this);
        }
        else if (__type == "4i")
        {
            this.set = this.setValue = this.setValue4I.bind(this);
            this.updateValue = this.updateValue4I.bind(this);
        }
        else if (__type == "b")
        {
            this.set = this.setValue = this.setValueBool.bind(this);
            this.updateValue = this.updateValueBool.bind(this);
        }
        else if (__type == "4f")
        {
            this.set = this.setValue = this.setValue4F.bind(this);
            this.updateValue = this.updateValue4F.bind(this);
        }
        else if (__type == "3f")
        {
            this.set = this.setValue = this.setValue3F.bind(this);
            this.updateValue = this.updateValue3F.bind(this);
        }
        else if (__type == "2f")
        {
            this.set = this.setValue = this.setValue2F.bind(this);
            this.updateValue = this.updateValue2F.bind(this);
        }
        else if (__type == "t")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "sampler")
        {
            if (this.setValueAny)
            {
                this.set = this.setValue = this.setValueAny.bind(this);
                this.updateValue = this.updateValueAny.bind(this);
            }
        }
        else if (__type == "tc")
        {
            this.set = this.setValue = this.setValueT.bind(this);
            this.updateValue = this.updateValueT.bind(this);
        }
        else if (__type == "t[]")
        {
            this.set = this.setValue = this.setValueArrayT.bind(this);
            this.updateValue = this.updateValueArrayT.bind(this);
        }
        else if (__type == "m4" || __type == "m4[]")
        {
            this.set = this.setValue = this.setValueM4.bind(this);
            this.updateValue = this.updateValueM4.bind(this);
        }
        else
        {
            // console.error("unknown");
            this._log.error("Unknown uniform type " + __type);
        }

        if (typeof _value == "object" && _value instanceof Port)
        {
            this._port = _value;
            this._value = this._port.get();


            if (_port2 && _port3 && _port4)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port) || !(_port4 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                this._port4 = _port4;

                this._port.on("change", this.updateFromPort4f.bind(this));
                this._port2.on("change", this.updateFromPort4f.bind(this));
                this._port3.on("change", this.updateFromPort4f.bind(this));
                this._port4.on("change", this.updateFromPort4f.bind(this));

                // this._port.onChange = this._port2.onChange = this._port3.onChange = this._port4.onChange = this.updateFromPort4f.bind(this);
                this.updateFromPort4f();
            }
            else if (_port2 && _port3)
            {
                if (!(_port2 instanceof Port) || !(_port3 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0, 0];
                this._port2 = _port2;
                this._port3 = _port3;
                // this._port.onChange = this._port2.onChange = this._port3.onChange = this.updateFromPort3f.bind(this);
                this._port.on("change", this.updateFromPort3f.bind(this));
                this._port2.on("change", this.updateFromPort3f.bind(this));
                this._port3.on("change", this.updateFromPort3f.bind(this));

                this.updateFromPort3f();
            }
            else if (_port2)
            {
                if (!(_port2 instanceof Port))
                {
                    this._log.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name);
                }

                this._value = [0, 0];
                this._port2 = _port2;
                // this._port.onChange = this._port2.onChange = this.updateFromPort2f.bind(this);
                this._port.on("change", this.updateFromPort2f.bind(this));
                this._port2.on("change", this.updateFromPort2f.bind(this));

                this.updateFromPort2f();
            }
            else
            {
                // this._port.on = this.updateFromPort.bind(this);
                this._port.on("change", this.updateFromPort.bind(this));
            }
        }
        else this._value = _value;


        if (this._value == undefined)
        {
            console.log("value undefined", this);
            this._value = 0;
        }

        this.setValue(this._value);

        this.needsUpdate = true;
    }

    getType()
    {
        return this._type;
    }

    get type()
    {
        return this._type;
    }

    get name()
    {
        return this._name;
    }

    getName()
    {
        return this._name;
    }

    getValue()
    {
        return this._value;
    }

    getShaderType()
    {
        return this.shaderType;
    }

    isStructMember()
    {
        return !!this._structName;
    }


    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }
}

/* harmony default export */ const cg_uniform = (CgUniform);

;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_uniform.js




/**
 * Shader uniforms
 *
 * types:
 * <pre>
 * f    - float
 * 2f   - vec2
 * 3f   - vec3
 * 4f   - vec4
 * i    - integer
 * t    - texture
 * m4   - mat4, 4x4 float matrix
 * f[]  - array of floats
 * 2f[] - array of float vec2
 * 3f[] - array of float vec3
 * 4f[] - array of float vec4
 * </pre>
 *
 * @namespace external:CGL
 * @class
 * @param {Shader} shader
 * @param {String} [type=f]
 * @param {String} name
 * @param {Number|Port} value  can be a Number,Matrix or Port
 * @example
 * // bind float uniform called myfloat and initialize with value 1.0
 * const unir=new CGL.Uniform(shader,'f','myfloat',1.0);
 * unir.setValue(1.0);
 *
 * // bind float uniform called myfloat and automatically set it to input port value
 * const myPort=op.inFloat("input");
 * const pv=new CGL.Uniform(shader,'f','myfloat',myPort);
 *
 */


// export const Uniform(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)

class Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._loc = -1;
        this._cgl = __shader._cgl;
    }

    get name()
    {
        return this._name;
    }

    copy(newShader)
    {
        const uni = new Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;
        return uni;
    }

    /**
     * returns type as glsl type string. e.g. 'f' returns 'float'
     * @function getGlslTypeString
     * @memberof Uniform
     * @instance
     * @return {string} type as string
     */
    getGlslTypeString()
    {
        return Uniform.glslTypeString(this._type);
    }

    _isValidLoc()
    {
        return this._loc != -1;// && this._loc != null;
    }

    resetLoc()
    {
        this._loc = -1;
        this.needsUpdate = true;
    }

    bindTextures() {}

    getLoc()
    {
        return this._loc;
    }

    updateFromPort4f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this._value[3] = this._port4.get();
        this.setValue(this._value);
    }

    updateFromPort3f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this._value[2] = this._port3.get();
        this.setValue(this._value);
    }

    updateFromPort2f()
    {
        this._value[0] = this._port.get();
        this._value[1] = this._port2.get();
        this.setValue(this._value);
    }

    updateFromPort()
    {
        this.setValue(this._port.get());
    }

    updateValueF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1f(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueF(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    updateValueI()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue2I()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]);

        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue3I()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    updateValue4I()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueI(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValue2I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue3I(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    setValue4I(v)
    {
        this.needsUpdate = true;
        this._value = v || vec4.create();
    }

    updateValueBool()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0);

        this._cgl.profileData.profileUniformCount++;
    }

    setValueBool(v)
    {
        if (v != this._value)
        {
            this.needsUpdate = true;
            this._value = v;
        }
    }

    setValueArray4F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray4F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform4fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray3F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform3fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArray2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArray2F()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform2fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueArrayF()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1fv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueArrayT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }


    updateValue3F()
    {
        if (!this._value) return;
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue3F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValue2F()
    {
        if (!this._value) return;

        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]);
        this.needsUpdate = false;
        this._cgl.profileData.profileUniformCount++;
    }

    setValue2F(v)
    {
        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this.needsUpdate = true;
        }
        this._value = v;
    }

    updateValue4F()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        if (!this._value)
        {
            this._log.warn("no value for uniform", this._name, this);
            this._value = [0, 0, 0, 0];
        }

        this.needsUpdate = false;
        this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]);
        this._cgl.profileData.profileUniformCount++;
    }

    setValue4F(v)
    {
        if (typeof this.value == "number") this.value = vec4.create(); // this should not be needed, but somehow it crashes with some shadermods

        if (!v) return;
        if (!this._oldValue)
        {
            this._oldValue = [v[0] - 1, 1, 2, 3];
            this.needsUpdate = true;
        }
        else if (v[0] != this._oldValue[0] || v[1] != this._oldValue[1] || v[2] != this._oldValue[2] || v[3] != this._oldValue[3])
        {
            this._oldValue[0] = v[0];
            this._oldValue[1] = v[1];
            this._oldValue[2] = v[2];
            this.needsUpdate = true;
        }

        this._value = v;
    }

    updateValueM4()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }
        if (!this._value || this._value.length % 16 != 0) return console.log("this.name", this._name, this._value);

        this._shader.getCgl().gl.uniformMatrix4fv(this._loc, false, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v || mat4.create();
    }

    updateValueArrayT()
    {
        if (!this._isValidLoc()) this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
        else this.needsUpdate = false;

        if (!this._value) return;
        this._shader.getCgl().gl.uniform1iv(this._loc, this._value);
        this._cgl.profileData.profileUniformCount++;
    }

    updateValueT()
    {
        if (!this._isValidLoc())
        {
            this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name);
            this._cgl.profileData.profileShaderGetUniform++;
            this._cgl.profileData.profileShaderGetUniformName = this._name;
        }

        this._cgl.profileData.profileUniformCount++;
        this._shader.getCgl().gl.uniform1i(this._loc, this._value);
        this.needsUpdate = false;
    }

    setValueT(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }
}


Uniform.glslTypeString = (t) =>
{
    if (t == "f") return "float";
    if (t == "b") return "bool";
    if (t == "i") return "int";
    if (t == "2i") return "ivec2";
    if (t == "2f") return "vec2";
    if (t == "3f") return "vec3";
    if (t == "4f") return "vec4";
    if (t == "m4") return "mat4";

    if (t == "t") return "sampler2D";
    if (t == "tc") return "samplerCube";

    if (t == "3f[]") return null; // ignore this for now...
    if (t == "m4[]") return null; // ignore this for now...
    if (t == "f[]") return null; // ignore this for now...

    console.warn("[CGL UNIFORM] unknown glsl type string ", t);
};


/**
 * @function setValue
 * @memberof Uniform
 * @instance
 * @param {Number|Array|Matrix|Texture} value
 */



;// CONCATENATED MODULE: ./src/core/cg/cg_texture.js
const DEFAULT_TEXTURE_SIZE = 8;

class CgTexture
{
    constructor(options = {})
    {
        this.id = CABLES.uuid();
        this.width = 0;
        this.height = 0;
        this.name = "unknown";

        options = options || {};
        this.pixelFormat = options.pixelFormat || CgTexture.PFORMATSTR_RGBA8UB;

        this.name = options.name || "unknown";

        if (!options.width) options.width = DEFAULT_TEXTURE_SIZE;
        if (!options.height) options.height = DEFAULT_TEXTURE_SIZE;
    }
}


CgTexture.getDefaultTextureData = (name, size, options = {}) =>
{
    if (name == "empty")
    {
        return new Uint8Array(size * size * 4).fill(0);
    }
    else
    if (name == "color")
    {
        const data = new Uint8Array(size * size * 4);
        let r = options.r || 1;
        let g = options.g || 1;
        let b = options.b || 1;

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = r;
            data[x * 4 + 1] = g;
            data[x * 4 + 2] = b;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "randomUInt")
    {
        const data = new Uint8Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = Math.random() * 255;
            data[x * 4 + 1] = Math.random() * 255;
            data[x * 4 + 2] = Math.random() * 255;
            data[x * 4 + 3] = 255;
        }
        return data;
    }
    else
    if (name == "random" || name == "randomFloat")
    {
        const data = new Float32Array(size * size * 4);

        for (let x = 0; x < size * size; x++)
        {
            data[x * 4 + 0] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 1] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 2] = (Math.random() - 0.5) * 2.0;
            data[x * 4 + 3] = 1;
        }
        return data;
    }
    else
    if (name == "stripes")
    {
        const arr = [];

        let r = options.r;
        let g = options.g;
        let b = options.b;

        if (r === undefined)r = 1;
        if (g === undefined)g = 1;
        if (b === undefined)b = 1;

        for (let y = 0; y < size; y++)
        {
            for (let x = 0; x < size; x++)
            {
                if ((x + y) % 64 < 32)
                {
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((200 + (y / size) * 25 + (x / size) * 25) * b);
                }
                else
                {
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * r);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * g);
                    arr.push((40 + (y / size) * 25 + (x / size) * 25) * b);
                }
                arr.push(255);
            }
        }

        return new Uint8Array(arr);
    }
    else
    {
        console.warn("unknown default texture", name);
        return CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 });
    }
};



CgTexture.FILTER_NEAREST = 0;
CgTexture.FILTER_LINEAR = 1;
CgTexture.FILTER_MIPMAP = 2;

CgTexture.WRAP_REPEAT = 0;
CgTexture.WRAP_MIRRORED_REPEAT = 1;
CgTexture.WRAP_CLAMP_TO_EDGE = 2;

CgTexture.TYPE_DEFAULT = 0;
CgTexture.TYPE_DEPTH = 1;
CgTexture.TYPE_FLOAT = 2;


CgTexture.PFORMATSTR_RGB565 = "RGB 5/6/5bit ubyte";

CgTexture.PFORMATSTR_R8UB = "R 8bit ubyte";
CgTexture.PFORMATSTR_RG8UB = "RG 8bit ubyte";
CgTexture.PFORMATSTR_RGB8UB = "RGB 8bit ubyte";
CgTexture.PFORMATSTR_RGBA8UB = "RGBA 8bit ubyte";

CgTexture.PFORMATSTR_SRGBA8 = "SRGBA 8bit ubyte";

CgTexture.PFORMATSTR_R11FG11FB10F = "RGB 11/11/10bit float";

CgTexture.PFORMATSTR_R16F = "R 16bit float";
CgTexture.PFORMATSTR_RG16F = "RG 16bit float";
CgTexture.PFORMATSTR_RGB16F = "RGB 16bit float";
CgTexture.PFORMATSTR_RGBA16F = "RGBA 16bit float";


CgTexture.PFORMATSTR_R32F = "R 32bit float";
CgTexture.PFORMATSTR_RG32F = "RG 32bit float";
CgTexture.PFORMATSTR_RGB32F = "RGB 32bit float";
CgTexture.PFORMATSTR_RGBA32F = "RGBA 32bit float";

CgTexture.PFORMATSTR_DEPTH = "DEPTH";


CgTexture.PIXELFORMATS = [

    CgTexture.PFORMATSTR_RGB565,

    CgTexture.PFORMATSTR_R8UB,
    CgTexture.PFORMATSTR_RG8UB,
    CgTexture.PFORMATSTR_RGB8UB,
    CgTexture.PFORMATSTR_RGBA8UB,

    CgTexture.PFORMATSTR_SRGBA8,

    CgTexture.PFORMATSTR_R11FG11FB10F,
    CgTexture.PFORMATSTR_R16F,
    CgTexture.PFORMATSTR_RG16F,
    CgTexture.PFORMATSTR_RGBA16F,

    CgTexture.PFORMATSTR_R32F,
    CgTexture.PFORMATSTR_RGBA32F

];

;// CONCATENATED MODULE: ./src/core/cgl/cgl_texture.js




const cgl_texture_DEFAULT_TEXTURE_SIZE = 8;

/**
 * A Texture
 * @namespace external:CGL
 * @class
 * @param {Context} __cgl cgl
 * @param {Object} options
 * @hideconstructor
 * @example
 * // generate a 256x256 pixel texture of random colors
 * const size=256;
 * const data = new Uint8Array(size*size*4);
 *
 * for(var x=0;x<size*size*4;x++) data[ x*4+3]=255;
 *
 * const tex=new CGL.Texture(cgl);
 * tex.initFromData(data,size,size,CGL.Texture.FILTER_NEAREST,CGL.Texture.WRAP_REPEAT);
 */
class Texture extends CgTexture
{
    constructor(__cgl, options = {})
    {
        super(options);
        if (!__cgl) throw new Error("no cgl");
        this._log = new Logger("cgl_texture");
        this._cgl = __cgl;
        this.tex = this._cgl.gl.createTexture();
        this.loading = false;
        this.flip = true;
        this.flipped = false;
        this.shadowMap = false;
        this.deleted = false;
        this.image = null;
        this.anisotropic = 0;
        this.filter = Texture.FILTER_NEAREST;
        this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.texTarget = this._cgl.gl.TEXTURE_2D;
        if (options && options.type) this.texTarget = options.type;
        this.textureType = Texture.TYPE_DEFAULT;
        this.unpackAlpha = true;
        this._fromData = true;

        this._glDataType = -1;
        this._glInternalFormat = -1;
        this._glDataFormat = -1;


        if (options)
        {
            if (options.isDepthTexture) this.textureType = Texture.TYPE_DEPTH;
            if (options.isFloatingPointTexture === true) this.textureType = Texture.TYPE_FLOAT;

            if ("textureType" in options) this.textureType = options.textureType;
            if ("filter" in options) this.filter = options.filter;
            if ("wrap" in options) this.wrap = options.wrap;
            if ("unpackAlpha" in options) this.unpackAlpha = options.unpackAlpha;
            if ("flip" in options) this.flip = options.flip;
            if ("shadowMap" in options) this.shadowMap = options.shadowMap;
            if ("anisotropic" in options) this.anisotropic = options.anisotropic;
        }
        else
        {
            options = {};
        }

        if (!options.pixelFormat && options.isFloatingPointTexture) this.pixelFormat = Texture.PFORMATSTR_RGBA32F;

        if (this.textureType == Texture.TYPE_DEPTH) this.pixelFormat = Texture.PFORMATSTR_DEPTH;

        this._cgl.profileData.profileTextureNew++;


        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));
        this._cgl.profileData.addHeavyEvent("texture created", this.name, options.width + "x" + options.height);

        this.setSize(options.width, options.height);
        this.getInfoOneLine();
    }



    isFloatingPoint()
    {
        return Texture.isPixelFormatFloat(this.pixelFormat);
    }

    /**
     * returns true if otherTexture has same options (width/height/filter/wrap etc)
     * @function compareSettings
     * @memberof Texture
     * @instance
     * @param {Texture} tex otherTexture
     * @returns {Boolean}
     */
    compareSettings(tex)
    {
    // if (!tex) { this._log.warn("compare: no tex"); return false; }
    // if (tex.width != this.width) this._log.warn("tex.width not equal", tex.width, this.width);
    // if (tex.height != this.height) this._log.warn("tex.height not equal", tex.height, this.height);
    // if (tex.filter != this.filter) this._log.warn("tex.filter not equal");
    // if (tex.wrap != this.wrap) this._log.warn("tex.wrap not equal");
    // if (tex.textureType != this.textureType) this._log.warn("tex.textureType not equal");
    // if (tex.unpackAlpha != this.unpackAlpha) this._log.warn("tex.unpackAlpha not equal");
    // if (tex.anisotropic != this.anisotropic) this._log.warn("tex.anisotropic not equal");
    // if (tex.shadowMap != this.shadowMap) this._log.warn("tex.shadowMap not equal");
    // if (tex.texTarget != this.texTarget) this._log.warn("tex.texTarget not equal");
    // if (tex.flip != this.flip) this._log.warn("tex.flip not equal");

        if (!tex) return false;
        return (
            tex.width == this.width &&
            tex.height == this.height &&
            tex.filter == this.filter &&
            tex.wrap == this.wrap &&
            tex.textureType == this.textureType &&
            tex.unpackAlpha == this.unpackAlpha &&
            tex.anisotropic == this.anisotropic &&
            tex.shadowMap == this.shadowMap &&
            tex.texTarget == this.texTarget &&
            tex.flip == this.flip
        );
    }

    /**
     * returns a new texture with the same settings (does not copy texture itself)
     * @function clone
     * @memberof Texture
     * @instance
     * @returns {Texture}
     */
    clone()
    {
        const newTex = new Texture(this._cgl, {
            "name": this.name,
            "filter": this.filter,
            "anisotropic": this.anisotropic,
            "wrap": this.wrap,
            "textureType": this.textureType,
            "pixelFormat": this.pixelFormat,
            "unpackAlpha": this.unpackAlpha,
            "flip": this.flip,
            "width": this.width,
            "height": this.height,
        });

        this._cgl.profileData.addHeavyEvent("texture created", this.name, this.width + "x" + this.height);

        if (!this.compareSettings(newTex))
        {
            this._log.error("Cloned texture settings do not compare!");
            this._log.error(this);
            this._log.error(newTex);
        }

        return newTex;
    }


    setFormat(o)
    {
        this.pixelFormat = o.pixelFormat;
        this._glDataFormat = o.glDataFormat;
        this._glInternalFormat = o.glInternalFormat;
        this._glDataType = o.glDataType;
    }



    /**
     * set pixel size of texture
     * @function setSize
     * @memberof Texture
     * @instance
     * @param {Number} w width
     * @param {Number} h height
     */
    setSize(w, h)
    {
        if (this._cgl.aborted) return;
        if (w != w || w <= 0 || !w) w = cgl_texture_DEFAULT_TEXTURE_SIZE;
        if (h != h || h <= 0 || !h) h = cgl_texture_DEFAULT_TEXTURE_SIZE;

        if (w > this._cgl.maxTexSize || h > this._cgl.maxTexSize) this._log.error("texture size too big! " + w + "x" + h + " / max: " + this._cgl.maxTexSize);

        w = Math.min(w, this._cgl.maxTexSize);
        h = Math.min(h, this._cgl.maxTexSize);

        w = Math.floor(w);
        h = Math.floor(h);
        if (this.width == w && this.height == h) return;

        w = this._cgl.checkTextureSize(w);
        h = this._cgl.checkTextureSize(h);

        this.width = w;
        this.height = h;
        this.deleted = false;

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this.shortInfoString = this.getInfoOneLine();// w + "x" + h + "";

        this._cgl.gl.bindTexture(this.texTarget, this.tex);
        this._cgl.profileData.profileTextureResize++;

        const uarr = null;

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, uarr);

        this._setFilter();

        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
    }


    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        this.filter = filter;
        this.wrap = wrap;
        if (filter == undefined) this.filter = Texture.FILTER_LINEAR;
        if (wrap == undefined) this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        this.width = w;
        this.height = h;
        this._fromData = true;
        this.deleted = false;

        if (this.height > this._cgl.maxTexSize || this.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", this.width, this.height, this._cgl.maxTexSize);
            return;
        }

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flip);

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, w, h, 0, this._glDataFormat, this._glDataType, data);

        this._setFilter();
        this.updateMipMap();

        if (this.flip) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);
        this._cgl.gl.bindTexture(this.texTarget, null);
    }

    updateMipMap()
    {
        if ((this._cgl.glVersion == 2 || this.isPowerOfTwo()) && this.filter == Texture.FILTER_MIPMAP)
        {
            this._cgl.gl.generateMipmap(this.texTarget);
            this._cgl.profileData.profileGenMipMap++;
        }
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this._cgl.printError("before initTexture");
        this._cgl.checkFrameStarted("texture inittexture");
        this._fromData = false;

        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        if (img.width || img.videoWidth) this.width = img.videoWidth || img.width;
        if (img.height || img.videoHeight) this.height = img.videoHeight || img.height;

        if (filter !== undefined) this.filter = filter; // todo: can we remove this filter param?

        if (img.height > this._cgl.maxTexSize || img.width > this._cgl.maxTexSize)
        {
            const t = CGL.Texture.getTempTexture(this._cgl);
            this.width = t.width;
            this.height = t.height;
            this.tex = t.tex;
            this._log.warn("[cgl_texture] texture size too big!", img.width, img.height, this._cgl.maxTexSize);
            return;
        }

        this._cgl.gl.bindTexture(this.texTarget, this.tex);

        this.deleted = false;
        this.flipped = !this.flip;
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped);


        this.setFormat(Texture.setUpGlPixelFormat(this._cgl, this.pixelFormat));

        this._cgl.gl.texImage2D(this.texTarget, 0, this._glInternalFormat, this._glDataFormat, this._glDataType, img);

        this._setFilter();
        this.updateMipMap();

        this._cgl.gl.bindTexture(this.texTarget, null);
        this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        if (this.flipped) this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, false);

        this.getInfoOneLine();
        this._cgl.printError("initTexture");
    }

    /**
     * delete texture. use this when texture is no longer needed
     * @function delete
     * @memberof Texture
     * @instance
     */
    dispose()
    {
        this.delete();
    }

    delete()
    {
        if (this.loading)
        {
        // cant delete texture when still loading
        // setTimeout(this.delete.bind(this), 50);
            return;
        }

        this.deleted = true;
        this.width = 0;
        this.height = 0;
        this._cgl.profileData.profileTextureDelete++;
        this._cgl.gl.deleteTexture(this.tex);
        this.image = null;

        this.tex = null;
    }

    /**
     * @function isPowerOfTwo
     * @memberof Texture
     * @instance
     * @description return true if texture width and height are both power of two
     * @return {Boolean}
     */
    isPowerOfTwo()
    {
        return Texture.isPowerOfTwo(this.width) && Texture.isPowerOfTwo(this.height);
    }

    printInfo()
    {
        console.log(this.getInfo());
    }

    getInfoReadable()
    {
        const info = this.getInfo();
        let html = "";

        info.name = info.name.substr(0, info.name.indexOf("?rnd="));

        for (const i in info)
        {
            html += "* " + i + ":  **" + info[i] + "**\n";
        }

        return html;
    }

    getInfoOneLine()
    {
        let txt = "" + this.width + "x" + this.height;
        txt += " ";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += this.pixelFormat;

        if (this.filter === CGL.Texture.FILTER_NEAREST) txt += " nearest";
        if (this.filter === CGL.Texture.FILTER_LINEAR) txt += " linear";
        if (this.filter === CGL.Texture.FILTER_MIPMAP) txt += " mipmap";

        if (this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE) txt += " clamp";
        if (this.wrap === CGL.Texture.WRAP_REPEAT) txt += " repeat";
        if (this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT) txt += " repeatmir";

        this.shortInfoString = txt;

        return txt;
    }

    getInfoOneLineShort()
    {
        let txt = "" + this.width + "x" + this.height;
        // if (this.textureType === CGL.Texture.TYPE_FLOAT) txt += " 32bit"; else txt += " 8bit";
        txt += " ";
        txt += this.pixelFormat;

        this.shortInfoString = txt;

        return txt;
    }


    getInfo()
    {
        return Texture.getTexInfo(this);
    }


    _setFilter()
    {
        this._cgl.printError("before _setFilter");

        if (!this._fromData)
        {
            this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha);
        }

        if (this.shadowMap)
        {
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE);
            this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL);
        }

        if (this.textureType == Texture.TYPE_FLOAT && this.filter == Texture.FILTER_MIPMAP)
        {
            this.filter = Texture.FILTER_LINEAR;
            this._log.stack("texture: HDR and mipmap filtering at the same time is not possible");
        }

        if (this._cgl.glVersion == 1 && !this.isPowerOfTwo())
        {
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);

            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
            this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);

            this.filter = Texture.FILTER_NEAREST;
            this.wrap = Texture.WRAP_CLAMP_TO_EDGE;
        }
        else
        {
            if (this.wrap == Texture.WRAP_CLAMP_TO_EDGE)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE);
            }
            else if (this.wrap == Texture.WRAP_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT);
            }
            else if (this.wrap == Texture.WRAP_MIRRORED_REPEAT)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT);
            }

            if (this.filter == Texture.FILTER_NEAREST)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
            }
            else if (this.filter == Texture.FILTER_LINEAR)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
            }
            else if (this.filter == Texture.FILTER_MIPMAP)
            {
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
                this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
            }
            else
            {
                this._log.log("unknown texture filter!", this.filter);
                throw new Error("unknown texture filter!" + this.filter);
            }

            if (this.anisotropic)
            {
                const ext = this._cgl.enableExtension("EXT_texture_filter_anisotropic");



                if (this._cgl.maxAnisotropic)
                {
                    const aniso = Math.min(this._cgl.maxAnisotropic, this.anisotropic);
                    this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, ext.TEXTURE_MAX_ANISOTROPY_EXT, aniso);
                }
            }
        }
        this.getInfoOneLine();
        this._cgl.printError("_setFilter");
    }
}


























/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgl
 * @param {String} url
 * @param {Function} finishedCallback
 * @param {Object} settings
 * @return {Texture}
 */
Texture.load = function (cgl, url, finishedCallback, settings)
{
    if (!url) return finishedCallback({ "error": true });
    let loadingId = null;
    if (!cgl.patch.loading.existByName(url)) loadingId = cgl.patch.loading.start("cgl.texture", url);

    const texture = new Texture(cgl);
    texture.name = url;

    texture.image = new Image();
    texture.image.crossOrigin = "anonymous";
    texture.loading = true;

    if (settings && settings.hasOwnProperty("filter")) texture.filter = settings.filter;
    if (settings && settings.hasOwnProperty("flip")) texture.flip = settings.flip;
    if (settings && settings.hasOwnProperty("wrap")) texture.wrap = settings.wrap;
    if (settings && settings.hasOwnProperty("anisotropic")) texture.anisotropic = settings.anisotropic;
    if (settings && settings.hasOwnProperty("unpackAlpha")) texture.unpackAlpha = settings.unpackAlpha;
    if (settings && settings.hasOwnProperty("pixelFormat")) texture.pixelFormat = settings.pixelFormat;

    texture.image.onabort = texture.image.onerror = (e) =>
    {
        console.warn("[cgl.texture.load] error loading texture", url, e);
        texture.loading = false;
        if (loadingId) cgl.patch.loading.finished(loadingId);
        const error = { "error": true };
        if (finishedCallback) finishedCallback(error, texture);
    };

    texture.image.onload = function (e)
    {
        cgl.addNextFrameOnceCallback(() =>
        {
            texture.initTexture(texture.image);
            if (loadingId) cgl.patch.loading.finished(loadingId);
            texture.loading = false;

            if (finishedCallback) finishedCallback(null, texture);
        });
    };
    texture.image.src = url;

    return texture;
};






/**
 * @static
 * @function getTempTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getTempTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.tempTexture) cgl.tempTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT);
    return cgl.tempTexture;
};

/**
 * @static
 * @function getErrorTexture
 * @memberof Texture
 * @description returns the default temporary texture (grey diagonal stipes)
 * @param {Context} cgl
 * @return {Texture}
 */
Texture.getErrorTexture = function (cgl)
{
    if (!cgl) console.error("[getTempTexture] no cgl!");
    if (!cgl.errorTexture) cgl.errorTexture = Texture.getTemporaryTexture(cgl, 256, Texture.FILTER_LINEAR, Texture.REPEAT, 1, 0.2, 0.2);
    return cgl.errorTexture;
};


/**
 * @function getEmptyTexture
 * @memberof Texture
 * @instance
 * @param cgl
 * @param fp
 * @description returns a reference to a small empty (transparent) texture
 * @return {Texture}
 */
Texture.getEmptyTexture = function (cgl, fp)
{
    if (fp) return Texture.getEmptyTextureFloat(cgl);
    if (!cgl) console.error("[getEmptyTexture] no cgl!");
    if (cgl.tempTextureEmpty) return cgl.tempTextureEmpty;

    let size = 8;

    cgl.tempTextureEmpty = new Texture(cgl, { "name": "emptyTexture" });
    const data = Texture.getDefaultTextureData("empty", size);

    cgl.tempTextureEmpty.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmpty;
};

/**
 * @function getEmptyTextureFloat
 * @memberof Texture
 * @instance
 * @param cgl
 * @description returns a reference to a small empty (transparent) 32bit texture
 * @return {Texture}
 */
Texture.getEmptyTextureFloat = function (cgl)
{
    if (!cgl) console.error("[getEmptyTextureFloat] no cgl!");
    if (cgl.tempTextureEmptyFloat) return cgl.tempTextureEmptyFloat;

    cgl.tempTextureEmptyFloat = new Texture(cgl, { "name": "emptyTexture", "isFloatingPointTexture": true });
    const data = new Float32Array(8 * 8 * 4).fill(1);
    for (let i = 0; i < 8 * 8 * 4; i += 4) data[i + 3] = 0;

    cgl.tempTextureEmptyFloat.initFromData(data, 8, 8, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.tempTextureEmptyFloat;
};


/**
 * @function getRandomTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a random texture
 * @return {Texture}
 */
Texture.getRandomTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.randomTexture) return cgl.randomTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomUInt", size);

    cgl.randomTexture = new Texture(cgl);
    cgl.randomTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.randomTexture;
};

/**
 * @function getRandomFloatTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a texture containing random numbers between -1 and 1
 * @return {Texture}
 */
Texture.getRandomFloatTexture = function (cgl)
{
    if (!cgl) console.error("[getRandomTexture] no cgl!");
    if (cgl.getRandomFloatTexture) return cgl.getRandomFloatTexture;

    const size = 256;
    const data = Texture.getDefaultTextureData("randomFloat", size);

    cgl.getRandomFloatTexture = new Texture(cgl, { "isFloatingPointTexture": true });
    cgl.getRandomFloatTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.getRandomFloatTexture;
};

/**
 * @function getBlackTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns a reference to a black texture
 * @return {Texture}
 */
Texture.getBlackTexture = function (cgl)
{
    if (!cgl) this._log.error("[getBlackTexture] no cgl!");
    if (cgl.blackTexture) return cgl.blackTexture;

    const size = 8;
    const data = Texture.getDefaultTextureData("color", size, { "r": 0, "g": 0, "b": 0 });

    cgl.blackTexture = new Texture(cgl);
    cgl.blackTexture.initFromData(data, size, size, Texture.FILTER_NEAREST, Texture.WRAP_REPEAT);

    return cgl.blackTexture;
};


/**
 * @function getEmptyCubemapTexture
 * @memberof Texture
 * @static
 * @param cgl
 * @description returns an empty cubemap texture with rgba = [0, 0, 0, 0]
 * @return {Texture}
 */
Texture.getEmptyCubemapTexture = function (cgl)
{
    const faces = [
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        cgl.gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
        cgl.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
    ];

    const tex = cgl.gl.createTexture();
    const target = cgl.gl.TEXTURE_CUBE_MAP;
    const filter = Texture.FILTER_NEAREST;
    const wrap = Texture.WRAP_CLAMP_TO_EDGE;
    const width = 8;
    const height = 8;

    cgl.profileData.profileTextureNew++;


    cgl.gl.bindTexture(target, tex);
    cgl.profileData.profileTextureResize++;

    for (let i = 0; i < 6; i += 1)
    {
        const data = new Uint8Array(8 * 8 * 4);

        cgl.gl.texImage2D(faces[i], 0, cgl.gl.RGBA, 8, 8, 0, cgl.gl.RGBA, cgl.gl.UNSIGNED_BYTE, data);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MAG_FILTER, cgl.gl.NEAREST);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_MIN_FILTER, cgl.gl.NEAREST);

        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_S, cgl.gl.CLAMP_TO_EDGE);
        cgl.gl.texParameteri(target, cgl.gl.TEXTURE_WRAP_T, cgl.gl.CLAMP_TO_EDGE);
    }


    cgl.gl.bindTexture(target, null);

    return {
        "id": CABLES.uuid(),
        "tex": tex,
        "cubemap": tex,
        "width": width,
        "height": height,
        "filter": filter,
        "wrap": wrap,
        "unpackAlpha": true,
        "flip": true,
        "_fromData": true,
        "name": "emptyCubemapTexture",
        "anisotropic": 0,
    };
};


Texture.getTempGradientTexture = function (cgl) // deprecated...
{
    if (!cgl) console.error("[getTempGradientTexture] no cgl!");
    return Texture.getTempTexture(cgl);
};

Texture.getTemporaryTexture = function (cgl, size, filter, wrap, r, g, b)
{
    const data = Texture.getDefaultTextureData("stripes", 256, { "r": r, "g": g, "b": b });
    const temptex = new Texture(cgl);
    temptex.initFromData(data, size, size, filter, wrap);
    return temptex;
};

/**
 * @static
 * @function createFromImage
 * @memberof Texture
 * @description create texturem from image data (e.g. image or canvas)
 * @param {Context} cgl
 * @param {Object} img image
 * @param {Object} options
 */
Texture.createFromImage = function (cgl, img, options)
{
    options = options || {};
    const texture = new Texture(cgl, options);
    texture.flip = false;
    texture.image = img;
    texture.width = img.videoWidth || img.width || 8;
    texture.height = img.videoHeight || img.height || 8;
    if (options.hasOwnProperty("wrap"))texture.wrap = options.wrap;

    texture.initTexture(img, options.filter);

    return texture;
};

// deprecated!
Texture.fromImage = function (cgl, img, filter, wrap)
{
    console.error("deprecated texture from image...");

    const texture = new Texture(cgl);
    texture.flip = false;
    if (filter) texture.filter = filter;
    if (wrap) texture.wrap = wrap;
    texture.image = img;
    texture.initTexture(img);
    return texture;
};

/**
 * @static
 * @function isPowerOfTwo
 * @memberof Texture
 * @description returns true if x is power of two
 * @param {Number} x
 * @return {Boolean}
 */
Texture.isPowerOfTwo = function (x)
{
    return x == 1 || x == 2 || x == 4 || x == 8 || x == 16 || x == 32 || x == 64 || x == 128 || x == 256 || x == 512 || x == 1024 || x == 2048 || x == 4096 || x == 8192 || x == 16384;
};

Texture.getTexInfo = function (tex)
{
    const obj = {};

    obj.name = tex.name;
    obj["power of two"] = tex.isPowerOfTwo();
    obj.size = tex.width + " x " + tex.height;

    let targetString = tex.texTarget;
    if (tex.texTarget == tex._cgl.gl.TEXTURE_2D) targetString = "TEXTURE_2D";
    obj.target = targetString;

    obj.unpackAlpha = tex.unpackAlpha;

    if (tex.cubemap)obj.cubemap = true;

    if (tex.textureType == Texture.TYPE_FLOAT) obj.textureType = "TYPE_FLOAT";
    if (tex.textureType == Texture.TYPE_HALF_FLOAT) obj.textureType = "TYPE_HALF_FLOAT";
    else if (tex.textureType == Texture.TYPE_DEPTH) obj.textureType = "TYPE_DEPTH";
    else if (tex.textureType == Texture.TYPE_DEFAULT) obj.textureType = "TYPE_DEFAULT";
    else obj.textureType = "UNKNOWN " + this.textureType;

    if (tex.wrap == Texture.WRAP_CLAMP_TO_EDGE) obj.wrap = "CLAMP_TO_EDGE";
    else if (tex.wrap == Texture.WRAP_REPEAT) obj.wrap = "WRAP_REPEAT";
    else if (tex.wrap == Texture.WRAP_MIRRORED_REPEAT) obj.wrap = "WRAP_MIRRORED_REPEAT";
    else obj.wrap = "UNKNOWN";

    if (tex.filter == Texture.FILTER_NEAREST) obj.filter = "FILTER_NEAREST";
    else if (tex.filter == Texture.FILTER_LINEAR) obj.filter = "FILTER_LINEAR";
    else if (tex.filter == Texture.FILTER_MIPMAP) obj.filter = "FILTER_MIPMAP";
    else obj.filter = "UNKNOWN";

    obj.pixelFormat = tex.pixelFormat || "unknown";

    return obj;
};

Texture.setUpGlPixelFormat = function (cgl, pixelFormatStr)
{
    const o = {};

    if (!pixelFormatStr)
    {
        cgl._log.error("no pixelformatstr!");
        cgl._log.log(new Error());
        pixelFormatStr = Texture.PFORMATSTR_RGBA8UB;
    }

    o.pixelFormatBase = pixelFormatStr;
    o.pixelFormat = pixelFormatStr;
    o.glDataType = cgl.gl.UNSIGNED_BYTE;
    o.glInternalFormat = cgl.gl.RGBA8;
    o.glDataFormat = cgl.gl.RGBA;

    let floatDatatype = cgl.gl.FLOAT;

    if (cgl.glUseHalfFloatTex)
    {
        if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F) pixelFormatStr = Texture.PFORMATSTR_RGBA16F;
        if (pixelFormatStr == Texture.PFORMATSTR_RG32F) pixelFormatStr = Texture.PFORMATSTR_RG16F;
        if (pixelFormatStr == Texture.PFORMATSTR_R32F) pixelFormatStr = Texture.PFORMATSTR_R16F;
    }

    if (pixelFormatStr.contains("16bit"))
    {
        if (cgl.glVersion == 2)
        {
            // cgl.enableExtension("OES_texture_half_float");
            const hasExt = cgl.enableExtension("EXT_color_buffer_half_float");

            if (!hasExt)
            {
                console.warn("no 16bit extension, fallback to 32bit", pixelFormatStr);
                // fallback to 32 bit?
                if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F) pixelFormatStr = Texture.PFORMATSTR_RGBA32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RGB16F) pixelFormatStr = Texture.PFORMATSTR_RGB32F;
                if (pixelFormatStr == Texture.PFORMATSTR_RG16F) pixelFormatStr = Texture.PFORMATSTR_RG32F;
                if (pixelFormatStr == Texture.PFORMATSTR_R16F) pixelFormatStr = Texture.PFORMATSTR_R32F;
            }
            else
            {
                floatDatatype = cgl.gl.HALF_FLOAT;
            }
        }
    }

    if (cgl.glVersion == 1)
    {
        o.glInternalFormat = cgl.gl.RGBA;

        if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F || pixelFormatStr == Texture.PFORMATSTR_RG16F || pixelFormatStr == Texture.PFORMATSTR_R16F)
        {
            const ext = cgl.enableExtension("OES_texture_half_float");
            if (!ext) throw new Error("no half float texture extension");

            floatDatatype = ext.HALF_FLOAT_OES;
        }
    }


    if (pixelFormatStr == Texture.PFORMATSTR_RGBA8UB)
    {
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB565)
    {
        o.glInternalFormat = cgl.gl.RGB565;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R8UB)
    {
        o.glInternalFormat = cgl.gl.R8;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG8UB)
    {
        o.glInternalFormat = cgl.gl.RG8;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGB8UB)
    {
        o.glInternalFormat = cgl.gl.RGB8;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_SRGBA8)
    {
        o.glInternalFormat = cgl.gl.SRGB8_ALPHA8;
    }

    else if (pixelFormatStr == Texture.PFORMATSTR_R32F)
    {
        o.glInternalFormat = cgl.gl.R32F;
        o.glDataFormat = cgl.gl.RED;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R16F)
    {
        o.glInternalFormat = cgl.gl.R16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RED;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RG16F)
    {
        o.glInternalFormat = cgl.gl.RG16F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RG;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA16F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA16F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        o.glInternalFormat = cgl.gl.R11F_G11F_B10F;
        o.glDataType = floatDatatype;
        o.glDataFormat = cgl.gl.RGB;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_RGBA32F)
    {
        if (cgl.glVersion == 1) o.glInternalFormat = cgl.gl.RGBA;
        else o.glInternalFormat = cgl.gl.RGBA32F;
        o.glDataType = floatDatatype;
    }
    else if (pixelFormatStr == Texture.PFORMATSTR_DEPTH)
    {
        if (cgl.glVersion == 1)
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT;
            o.glDataType = cgl.gl.UNSIGNED_SHORT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
        else
        {
            o.glInternalFormat = cgl.gl.DEPTH_COMPONENT32F;
            o.glDataType = cgl.gl.FLOAT;
            o.glDataFormat = cgl.gl.DEPTH_COMPONENT;
        }
    }
    else
    {
        console.log("unknown pixelformat ", pixelFormatStr);
    }

    /// //////

    if (pixelFormatStr.contains("32bit") || pixelFormatStr == Texture.PFORMATSTR_R11FG11FB10F)
    {
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_color_buffer_float");
        if (cgl.glVersion == 2) cgl.enableExtension("EXT_float_blend");

        cgl.enableExtension("OES_texture_float_linear"); // yes, i am sure, this is a webgl 1 and 2 ext
    }


    o.numColorChannels = Texture.getPixelFormatNumChannels(pixelFormatStr);


    if (!o.glDataType || !o.glInternalFormat || !o.glDataFormat) console.log("pixelformat wrong ?!", pixelFormatStr, o.glDataType, o.glInternalFormat, o.glDataFormat, this);

    return o;
};



Texture.getPixelFormatNumChannels =
    (pxlFrmtStr) =>
    {
        if (pxlFrmtStr.startsWith("RGBA")) return 4;
        if (pxlFrmtStr.startsWith("RGB")) return 3;
        if (pxlFrmtStr.startsWith("RG")) return 2;
        return 1;
    };

Texture.isPixelFormatFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").contains("float");
    };

Texture.isPixelFormatHalfFloat =
    (pxlFrmtStr) =>
    {
        return (pxlFrmtStr || "").contains("float") && (pxlFrmtStr || "").contains("16bit");
    };






;// CONCATENATED MODULE: ./src/core/cg/cg_boundingbox.js


/**
 * bounding box
 *
 * @namespace external:CGL
 * @param {Geometry} geometry or bounding box
 */
class BoundingBox
{
    constructor(geom)
    {
        this._init();
        this._first = true;
        this._wireMesh = null;

        if (geom) this.apply(geom);
    }

    _init()
    {
        this._max = [-0, -0, -0];
        this._min = [0, 0, 0];
        this._center = [0, 0, 0];
        this._size = [0, 0, 0];
        this._maxAxis = 0.0;
        this._first = true;
    }

    /**
     * get biggest number of maxX,maxY,maxZ
     * @type {Number}
     */
    get maxAxis() { return this._maxAxis || 1; }

    /**
     * size of bounding box
     * @type {vec3}
     */
    get size() { return this._size; }

    /**
     * center of bounding box
     * @type {vec3}
     */
    get center() { return this._center; }

    /**
     * center x
     * @type {Number}
     */
    get x() { return this._center[0]; }

    /**
     * center y
     * @type {Number}
     */
    get y() { return this._center[1]; }

    /**
     * center z
     * @type {Number}
     */
    get z() { return this._center[2]; }


    /**
     * minimum x
     * @type {Number}
     */
    get minX() { return this._min[0]; }

    /**
     * minimum y
     * @type {Number}
     */
    get minY() { return this._min[1]; }

    /**
     * minimum z
     * @type {Number}
     */
    get minZ() { return this._min[2]; }

    /**
     * maximum x
     * @type {Number}
     */
    get maxX() { return this._max[0]; }

    /**
     * maximum y
     * @type {Number}
     */
    get maxY() { return this._max[1]; }

    /**
     * maximum z
     * @type {Number}
     */
    get maxZ() { return this._max[2]; }


    apply(geom, mat)
    {
        if (!geom)
        {
            // console.warn("[boundingbox] no geom/vertices", geom);
            return;
        }

        if (geom instanceof BoundingBox)
        {
            const bb = geom;

            this.applyPos(bb.maxX, bb.maxY, bb.maxZ);
            this.applyPos(bb.minX, bb.minY, bb.minZ);
        }
        else
        {
            for (let i = 0; i < geom.vertices.length; i += 3)
                this.applyPos(geom.vertices[i], geom.vertices[i + 1], geom.vertices[i + 2]);
        }
        this.calcCenterSize();
    }

    /**
     * returns a copy of the bounding box
     * @function copy
     * @memberof BoundingBox
     * @instance
     */
    copy()
    {
        return new BoundingBox(this);
    }

    get changed()
    {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
    }

    applyPos(x, y, z)
    {
        if (x == Number.MAX_VALUE || x == -Number.MAX_VALUE ||
            y == Number.MAX_VALUE || y == -Number.MAX_VALUE ||
            z == Number.MAX_VALUE || z == -Number.MAX_VALUE) return;

        if (!CABLES.UTILS.isNumeric(x) || !CABLES.UTILS.isNumeric(y) || !CABLES.UTILS.isNumeric(z)) return;

        if (this._first)
        {
            this._max[0] = x;
            this._max[1] = y;
            this._max[2] = z;

            this._min[0] = x;
            this._min[1] = y;
            this._min[2] = z;
            this._first = false;
            return;
        }

        this._max[0] = Math.max(this._max[0], x);
        this._max[1] = Math.max(this._max[1], y);
        this._max[2] = Math.max(this._max[2], z);

        this._min[0] = Math.min(this._min[0], x);
        this._min[1] = Math.min(this._min[1], y);
        this._min[2] = Math.min(this._min[2], z);
    }

    calcCenterSize()
    {
        if (this._first) return;


        this._size[0] = this._max[0] - this._min[0];
        this._size[1] = this._max[1] - this._min[1];
        this._size[2] = this._max[2] - this._min[2];

        this._center[0] = (this._min[0] + this._max[0]) / 2;
        this._center[1] = (this._min[1] + this._max[1]) / 2;
        this._center[2] = (this._min[2] + this._max[2]) / 2;

        this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1]));
    }

    mulMat4(m)
    {
        if (this._first)
        {
            this._max[0] = 0;
            this._max[1] = 0;
            this._max[2] = 0;

            this._min[0] = 0;
            this._min[1] = 0;
            this._min[2] = 0;
            this._first = false;
        }
        vec3.transformMat4(this._max, this._max, m);
        vec3.transformMat4(this._min, this._min, m);
        this.calcCenterSize();
    }

    render(cgl, shader, op)
    {
        if (!this._wireMesh) this._wireMesh = new CGL.WireCube(cgl);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, this._center);

        if (CABLES.UI && op)
        {
            CABLES.UI.OverlayMeshes.drawCube(op, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2);
        }

        cgl.popModelMatrix();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_geom.js
// import { vec2, vec3 } from "gl-matrix";




/**
 * a geometry contains all information about a mesh, vertices, texturecoordinates etc. etc.
 * @namespace external:CGL#Geometry
 * @param {String} name
 * @class
 * @example
 * // create a triangle with all attributes
 * const geom=new Geometry("triangle"),
 *
 * geom.vertices = [
 *      0.0,           sizeH.get(),  0.0,
 *     -sizeW.get(),  -sizeH.get(),  0.0,
 *      sizeW.get(),  -sizeH.get(),  0.0 ];
 *
 * geom.vertexNormals = [
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0,
 *      0.0,  0.0,  1.0 ];
 *
 * geom.tangents = [
 *     1,0,0,
 *     1,0,0,
 *     1,0,0 ];
 *
 * geom.biTangents = [
 *     0,1,0,
 *     0,1,0,
 *     0,1,0 ];
 *
 * geom.texCoords = [
 *      0.5,  0.0,
 *      1.0,  1.0,
 *      0.0,  1.0, ];
 *
 * geom.verticesIndices = [
 *     0, 1, 2 ];
 *
 */
const Geometry = function (name)
{
    this.name = name || "unknown";
    this._log = new Logger("cgl_geometry");

    this.faceVertCount = 3;
    this.glPrimitive = null;
    this._attributes = {};

    this._vertices = [];
    this.verticesIndices = [];

    this.isGeometry = true;

    this.morphTargets = [];

    Object.defineProperty(this, "vertices", {
        get()
        {
            return this._vertices;
        },
        set(v)
        {
            this.setVertices(v);
        },
    });

    Object.defineProperty(this, "texCoords", {
        get()
        {
            const att = this.getAttribute("texCoords");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("texCoords", v, 2);
        },
    });

    Object.defineProperty(this, "vertexNormals", {
        get()
        {
            const att = this.getAttribute("vertexNormals");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexNormals", v, 3);
        },
    });

    Object.defineProperty(this, "tangents", {
        get()
        {
            const att = this.getAttribute("tangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("tangents", v, 3);
        },
    });

    Object.defineProperty(this, "biTangents", {
        get()
        {
            const att = this.getAttribute("biTangents");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("biTangents", v, 3);
        },
    });

    Object.defineProperty(this, "vertexColors", {
        get()
        {
            const att = this.getAttribute("vertexColors");
            if (!att) return [];
            return att.data;
        },
        set(v)
        {
            this.setAttribute("vertexColors", v, 4);
        },
    });
};

/**
 * @function clear
 * @memberof Geometry
 * @instance
 * @description clear all buffers/set them to length 0
 */
Geometry.prototype.clear = function ()
{
    this._vertices = new Float32Array([]);
    this.verticesIndices = [];
    this.texCoords = new Float32Array([]);
    this.vertexNormals = new Float32Array([]);
    this.tangents = [];
    this.biTangents = [];
    this._attributes = {};
};



/**
 * @function getAttributes
   @memberof Geometry
 * @instance
 * @return {Array<Object>} returns array of attribute objects
 */
Geometry.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function getAttribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @return {Object}
 */
Geometry.prototype.getAttribute = function (name)
{
    for (const i in this._attributes)
    {
        if (this._attributes[i].name == name) return this._attributes[i];
    }
    return null;
};

/**
 * @function setAttribute
 * @description create an attribute
 * @memberof Geometry
 * @instance
 * @param {String} name
 * @param {Array} arr
 * @param {Number} itemSize
 */
Geometry.prototype.setAttribute = function (name, arr, itemSize)
{
    let attrType = "";
    if (!itemSize || itemSize > 4)
    {
        console.log("itemsize wrong?", itemSize, name);
        this._log.stack("itemsize");

        itemSize = 3;
    }

    if (itemSize == 1) attrType = "float";
    else if (itemSize == 2) attrType = "vec2";
    else if (itemSize == 3) attrType = "vec3";
    else if (itemSize == 4) attrType = "vec4";


    const attr = {
        "name": name,
        "data": arr,
        "itemSize": itemSize,
        "type": attrType,
    };

    this._attributes[name] = attr;
};

Geometry.prototype.copyAttribute = function (name, newgeom)
{
    const attr = this.getAttribute(name);
    newgeom.setAttribute(name, new Float32Array(attr.data), attr.itemSize);
};


/**
 * @function setVertices
 * @memberof Geometry
 * @instance
 * @description set vertices
 * @param {Array|Float32Array} arr [x,y,z,x,y,z,...]
 */
Geometry.prototype.setVertices = function (arr)
{
    if (arr instanceof Float32Array) this._vertices = arr;
    else this._vertices = new Float32Array(arr);
};

/**
 * @function setTexCoords
 * @memberof Geometry
 * @instance
 * @description set texcoords
 * @param {Array|Float32Array} arr [u,v,u,v,...]
 */
Geometry.prototype.setTexCoords = function (arr)
{
    if (arr instanceof Float32Array) this.texCoords = arr;
    else this.texCoords = new Float32Array(arr);
};

// Geometry.prototype.testIndices = function ()
// {
//     var foundError = false;
//     for (var i = 0; i < this.verticesIndices.length; i++)
//     {
//         if (this.verticesIndices[i * 3 + 0] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 1] >= this._vertices.length / 3 || this.verticesIndices[i * 3 + 2] >= this._vertices.length / 3)
//         {
//             foundError = true;
//             console.log("index error!");
//         }
//     }
// };

// deprecated
Geometry.prototype.calcNormals = function (smooth)
{
    const options = { "smooth": smooth };
    this.calculateNormals(options);
};

/**
 * @function flipNormals
 * @memberof Geometry
 * @param x
 * @param y
 * @param z
 * @description flip normals
 */
Geometry.prototype.flipNormals = function (x, y, z)
{
    let vec = vec3.create();

    if (x == undefined)x = 1;
    if (y == undefined)y = 1;
    if (z == undefined)z = 1;


    for (let i = 0; i < this.vertexNormals.length; i += 3)
    {
        vec3.set(vec,
            this.vertexNormals[i + 0],
            this.vertexNormals[i + 1],
            this.vertexNormals[i + 2]);

        vec[0] *= -x;
        vec[1] *= -y;
        vec[2] *= -z;

        vec3.normalize(vec, vec);

        this.vertexNormals[i + 0] = vec[0];
        this.vertexNormals[i + 1] = vec[1];
        this.vertexNormals[i + 2] = vec[2];
    }
};

Geometry.prototype.getNumTriangles = function ()
{
    if (this.verticesIndices && this.verticesIndices.length) return this.verticesIndices.length / 3;
    return this.vertices.length / 3;
};


/**
 * @function flipVertDir
 * @memberof Geometry
 * @description flip order of vertices in geom faces
 */
Geometry.prototype.flipVertDir = function ()
{
    const newInd = [];
    newInd.length = this.verticesIndices.length;
    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newInd[i] = this.verticesIndices[i + 2];
        newInd[i + 1] = this.verticesIndices[i + 1];
        newInd[i + 2] = this.verticesIndices[i];
    }
    this.verticesIndices = newInd;
};


Geometry.prototype.setPointVertices = function (verts)
{
    if (verts.length % 3 !== 0)
    {
        this._log.error("SetPointVertices: Array must be multiple of three.");
        return;
    }

    if (!(verts instanceof Float32Array)) this.vertices = new Float32Array(verts);
    else this.vertices = verts;

    if (!(this.texCoords instanceof Float32Array)) this.texCoords = new Float32Array((verts.length / 3) * 2);

    // this.texCoords.length=verts.length/3*2;
    this.verticesIndices.length = verts.length / 3;
    // this.verticesIndices=[];

    for (let i = 0; i < verts.length / 3; i++)
    {
        this.verticesIndices[i] = i;
        this.texCoords[i * 2] = 0;
        this.texCoords[i * 2 + 1] = 0;
    }
};

/**
 * merge a different geometry into the this geometry
 * @function merge
 * @param {Geometry} geom
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.merge = function (geom)
{
    if (!geom) return;

    if (this.isIndexed() != geom.isIndexed())
    {
        if (this.isIndexed())
        {
            this.unIndex(false, true);
        }
        if (geom.isIndexed())
        {
            const g = geom.copy();
            g.unIndex(false, true);
            geom = g;
        }
    }

    const oldIndizesLength = this.verticesIndices.length;
    const vertLength = this._vertices.length / 3;

    this.verticesIndices.length += geom.verticesIndices.length;
    for (let i = 0; i < geom.verticesIndices.length; i++)
        this.verticesIndices[oldIndizesLength + i] = geom.verticesIndices[i] + vertLength;

    this.vertices = UTILS.float32Concat(this._vertices, geom.vertices);
    this.texCoords = UTILS.float32Concat(this.texCoords, geom.texCoords);
    this.vertexNormals = UTILS.float32Concat(this.vertexNormals, geom.vertexNormals);
    this.tangents = UTILS.float32Concat(this.tangents, geom.tangents);
    this.biTangents = UTILS.float32Concat(this.biTangents, geom.biTangents);
};

/**
 *   a copy of the geometry
 * @function copy
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.copy = function ()
{
    const geom = new Geometry(this.name + " copy");
    geom.faceVertCount = this.faceVertCount;
    geom.glPrimitive = this.glPrimitive;

    geom.setVertices(this._vertices.slice(0));

    if (this.verticesIndices)
    {
        geom.verticesIndices.length = this.verticesIndices.length;
        for (let i = 0; i < this.verticesIndices.length; i++) geom.verticesIndices[i] = this.verticesIndices[i];
    }

    for (let i in this._attributes) this.copyAttribute(i, geom);

    geom.morphTargets.length = this.morphTargets.length;
    for (let i = 0; i < this.morphTargets.length; i++) geom.morphTargets[i] = this.morphTargets[i];

    return geom;
};

/**
 * Calculaten normals
 * @function calculateNormals
 * @memberof Geometry
 * @param options
 * @instance
 */
Geometry.prototype.calculateNormals = function (options)
{
    // todo: should check angle of normals to get edges    https://community.khronos.org/t/calculating-accurate-vertex-normals/28152
    options = options || {};
    if (options.smooth === false) this.unIndex();

    const u = vec3.create();
    const v = vec3.create();
    const n = vec3.create();

    function calcNormal(triangle)
    {
        vec3.subtract(u, triangle[0], triangle[1]);
        vec3.subtract(v, triangle[0], triangle[2]);
        vec3.cross(n, u, v);
        vec3.normalize(n, n);

        if (options && options.forceZUp)
        {
            if (n[2] < 0)
            {
                n[0] *= -1;
                n[1] *= -1;
                n[2] *= -1;
            }
        }
        return n;
    }

    this.getVertexVec = function (which)
    {
        const vec = [0, 0, 0];
        vec[0] = this.vertices[which * 3 + 0];
        vec[1] = this.vertices[which * 3 + 1];
        vec[2] = this.vertices[which * 3 + 2];
        return vec;
    };

    if (!(this.vertexNormals instanceof Float32Array) || this.vertexNormals.length != this.vertices.length) this.vertexNormals = new Float32Array(this.vertices.length);

    for (let i = 0; i < this.vertices.length; i++)
    {
        this.vertexNormals[i] = 0;
    }

    if (!this.isIndexed())
    {
        const norms = [];
        for (let i = 0; i < this.vertices.length; i += 9)
        {
            const triangle = [[this.vertices[i + 0], this.vertices[i + 1], this.vertices[i + 2]], [this.vertices[i + 3], this.vertices[i + 4], this.vertices[i + 5]], [this.vertices[i + 6], this.vertices[i + 7], this.vertices[i + 8]]];
            const nn = calcNormal(triangle);
            norms.push(nn[0], nn[1], nn[2], nn[0], nn[1], nn[2], nn[0], nn[1], nn[2]);
        }
        this.vertexNormals = norms;
    }
    else
    {
        const faceNormals = [];

        faceNormals.length = Math.floor(this.verticesIndices.length / 3);

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            const triangle = [this.getVertexVec(this.verticesIndices[i + 0]), this.getVertexVec(this.verticesIndices[i + 1]), this.getVertexVec(this.verticesIndices[i + 2])];

            faceNormals[i / 3] = calcNormal(triangle);

            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 0] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 1] * 3 + 2] += faceNormals[i / 3][2];

            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 0] += faceNormals[i / 3][0];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 1] += faceNormals[i / 3][1];
            this.vertexNormals[this.verticesIndices[i + 2] * 3 + 2] += faceNormals[i / 3][2];
        }


        for (let i = 0; i < this.verticesIndices.length; i += 3) // faces
        {
            for (let k = 0; k < 3; k++) // triangles
            {
                const vv = [this.vertexNormals[this.verticesIndices[i + k] * 3 + 0], this.vertexNormals[this.verticesIndices[i + k] * 3 + 1], this.vertexNormals[this.verticesIndices[i + k] * 3 + 2]];
                vec3.normalize(vv, vv);
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 0] = vv[0];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 1] = vv[1];
                this.vertexNormals[this.verticesIndices[i + k] * 3 + 2] = vv[2];
            }
        }
    }
};

/**
 * Calculates tangents & bitangents with the help of uv-coordinates. Adapted from
 * Lengyel, Eric. “Computing Tangent Space Basis Vectors for an Arbitrary Mesh”.
 * Terathon Software 3D Graphics Library.
 * https://fenix.tecnico.ulisboa.pt/downloadFile/845043405449073/Tangent%20Space%20Calculation.pdf
 *
 * @function calcTangentsBitangents
 * @memberof Geometry
 * @instance
 */
Geometry.prototype.calcTangentsBitangents = function ()
{
    if (!this.vertices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertices.");
        return;
    }
    if (!this.vertexNormals.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without normals.");
        return;
    }
    if (!this.texCoords.length)
    {
        // console.warn("No texcoords. Replacing with default values [0, 0].");
        const texCoordLength = (this.vertices.length / 3) * 2;
        this.texCoords = new Float32Array(texCoordLength);
        for (let i = 0; i < texCoordLength; i += 1) this.texCoords[i] = 0;
    }
    if (!this.verticesIndices || !this.verticesIndices.length)
    {
        // this._log.error("Cannot calculate tangents/bitangents without vertex indices.");
        return;
    }
    // this code assumes that we have three indices per triangle
    if (this.verticesIndices.length % 3 !== 0)
    {
        this._log.error("Vertex indices mismatch!");
        return;
    }

    const triangleCount = this.verticesIndices.length / 3;
    const vertexCount = this.vertices.length / 3;

    this.tangents = new Float32Array(this.vertexNormals.length);
    this.biTangents = new Float32Array(this.vertexNormals.length);

    // temporary buffers
    const tempVertices = [];
    tempVertices.length = vertexCount * 2;
    const v1 = vec3.create();
    const v2 = vec3.create();
    const v3 = vec3.create();

    const w1 = vec2.create();
    const w2 = vec2.create();
    const w3 = vec2.create();

    const sdir = vec3.create();
    const tdir = vec3.create();

    // for details on calculation, see article referenced above
    for (let tri = 0; tri < triangleCount; tri += 1)
    {
        // indices of the three vertices for a triangle
        const i1 = this.verticesIndices[tri * 3];
        const i2 = this.verticesIndices[tri * 3 + 1];
        const i3 = this.verticesIndices[tri * 3 + 2];

        // vertex position as vec3
        vec3.set(v1, this.vertices[i1 * 3], this.vertices[i1 * 3 + 1], this.vertices[i1 * 3 + 2]);
        vec3.set(v2, this.vertices[i2 * 3], this.vertices[i2 * 3 + 1], this.vertices[i2 * 3 + 2]);
        vec3.set(v3, this.vertices[i3 * 3], this.vertices[i3 * 3 + 1], this.vertices[i3 * 3 + 2]);

        // texture coordinate as vec2
        vec2.set(w1, this.texCoords[i1 * 2], this.texCoords[i1 * 2 + 1]);
        vec2.set(w2, this.texCoords[i2 * 2], this.texCoords[i2 * 2 + 1]);
        vec2.set(w3, this.texCoords[i3 * 2], this.texCoords[i3 * 2 + 1]);

        const x1 = v2[0] - v1[0];
        const x2 = v3[0] - v1[0];
        const y1 = v2[1] - v1[1];
        const y2 = v3[1] - v1[1];
        const z1 = v2[2] - v1[2];
        const z2 = v3[2] - v1[2];

        const s1 = w2[0] - w1[0];
        const s2 = w3[0] - w1[0];
        const t1 = w2[1] - w1[1];
        const t2 = w3[1] - w1[1];

        const r = 1.0 / (s1 * t2 - s2 * t1);

        vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
        vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

        tempVertices[i1] = sdir;
        tempVertices[i2] = sdir;
        tempVertices[i3] = sdir;

        tempVertices[i1 + vertexCount] = tdir;
        tempVertices[i2 + vertexCount] = tdir;
        tempVertices[i3 + vertexCount] = tdir;
    }

    const normal = vec3.create();
    const tempVert = vec3.create();
    const tan = vec3.create();
    const bitan = vec3.create();
    const temp1 = vec3.create();
    const temp2 = vec3.create();
    const crossPd = vec3.create();
    const normalized = vec3.create();

    for (let vert = 0; vert < vertexCount; vert += 1)
    {
        // NOTE: some meshes don't have index 0 - n in their indexbuffer, if this is the case, skip calculation of this vertex
        if (!tempVertices[vert]) continue;

        vec3.set(normal, this.vertexNormals[vert * 3], this.vertexNormals[vert * 3 + 1], this.vertexNormals[vert * 3 + 2]);
        vec3.set(tempVert, tempVertices[vert][0], tempVertices[vert][1], tempVertices[vert][2]);

        // Gram-Schmidt orthagonalize
        const _dp = vec3.dot(normal, tempVert);
        vec3.scale(temp1, normal, _dp);
        vec3.subtract(temp2, tempVert, temp1);

        vec3.normalize(normalized, temp2);
        vec3.cross(crossPd, normal, tempVert);

        // const intermDot = vec3.dot(crossPd, tempVertices[vert + vertexCount]);
        const w = 1.0;// intermDot < 0.0 ? -1.0 : 1.0;

        vec3.scale(tan, normalized, 1 / w);
        vec3.cross(bitan, normal, tan);

        this.tangents[vert * 3 + 0] = tan[0];
        this.tangents[vert * 3 + 1] = tan[1];
        this.tangents[vert * 3 + 2] = tan[2];
        this.biTangents[vert * 3 + 0] = bitan[0];
        this.biTangents[vert * 3 + 1] = bitan[1];
        this.biTangents[vert * 3 + 2] = bitan[2];
    }
};

Geometry.prototype.isIndexed = function ()
{
    if (this._vertices.length == 0) return true;
    return this.verticesIndices.length != 0;
};

/**
 * @function unIndex
 * @memberof Geometry
 * @instance
 * @description remove all vertex indizes, vertices array will contain 3*XYZ for every triangle
 * @param {boolean} reIndex
 * @param {boolean} dontCalcNormals
 */
Geometry.prototype.unIndex = function (reIndex, dontCalcNormals)
{
    const newVerts = [];
    const newIndizes = [];
    let count = 0;

    for (let j in this._attributes)
    {
        const attr = this._attributes[j];
        let na = [];

        for (let i = 0; i < this.verticesIndices.length; i += 3)
        {
            for (let s = 0; s < 3; s++)
            {
                if (attr.itemSize == 3)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 3 + 0],
                        attr.data[this.verticesIndices[i + s] * 3 + 1],
                        attr.data[this.verticesIndices[i + s] * 3 + 2]);
                else if (attr.itemSize == 4)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 4 + 0],
                        attr.data[this.verticesIndices[i + s] * 4 + 1],
                        attr.data[this.verticesIndices[i + s] * 4 + 2],
                        attr.data[this.verticesIndices[i + s] * 4 + 3]);
                else if (attr.itemSize == 2)
                    na.push(
                        attr.data[this.verticesIndices[i + s] * 2 + 0],
                        attr.data[this.verticesIndices[i + s] * 2 + 1]);
                else if (attr.itemSize == 1)
                    na.push(
                        attr.data[this.verticesIndices[i + s]]);
                else console.log("unknown attr", attr);
            }
        }
        this.setAttribute(attr.name, na, attr.itemSize);
    }

    for (let i = 0; i < this.verticesIndices.length; i += 3)
    {
        newVerts.push(
            this.vertices[this.verticesIndices[i + 0] * 3 + 0],
            this.vertices[this.verticesIndices[i + 0] * 3 + 1],
            this.vertices[this.verticesIndices[i + 0] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 1] * 3 + 0],
            this.vertices[this.verticesIndices[i + 1] * 3 + 1],
            this.vertices[this.verticesIndices[i + 1] * 3 + 2]);

        newIndizes.push(count);
        count++;

        newVerts.push(
            this.vertices[this.verticesIndices[i + 2] * 3 + 0],
            this.vertices[this.verticesIndices[i + 2] * 3 + 1],
            this.vertices[this.verticesIndices[i + 2] * 3 + 2]);

        newIndizes.push(count);
        count++;
    }

    this.vertices = newVerts;

    this.verticesIndices = [];
    if (reIndex) this.verticesIndices = newIndizes;

    if (!dontCalcNormals) this.calculateNormals();
};

Geometry.prototype.calcBarycentric = function ()
{
    let barycentrics = [];
    barycentrics.length = this.vertices.length;
    for (let i = 0; i < this.vertices.length; i++) barycentrics[i] = 0;

    let count = 0;
    for (let i = 0; i < this.vertices.length; i += 3)
    {
        barycentrics[i + count] = 1;
        count++;
        if (count == 3) count = 0;
    }

    this.setAttribute("attrBarycentric", barycentrics, 3);
};

Geometry.prototype.getBounds = function ()
{
    return new BoundingBox(this);
};

Geometry.prototype.center = function (x, y, z)
{
    if (x === undefined)
    {
        x = true;
        y = true;
        z = true;
    }

    let i = 0;
    const bounds = this.getBounds();
    const offset = [bounds.minX + (bounds.maxX - bounds.minX) / 2, bounds.minY + (bounds.maxY - bounds.minY) / 2, bounds.minZ + (bounds.maxZ - bounds.minZ) / 2];

    for (i = 0; i < this.vertices.length; i += 3)
    {
        if (this.vertices[i + 0] == this.vertices[i + 0])
        {
            if (x) this.vertices[i + 0] -= offset[0];
            if (y) this.vertices[i + 1] -= offset[1];
            if (z) this.vertices[i + 2] -= offset[2];
        }
    }

    return offset;
};

Geometry.prototype.mapTexCoords2d = function ()
{
    const bounds = this.getBounds();
    const num = this.vertices.length / 3;

    this.texCoords = new Float32Array(num * 2);

    for (let i = 0; i < num; i++)
    {
        const vertX = this.vertices[i * 3 + 0];
        const vertY = this.vertices[i * 3 + 1];
        this.texCoords[i * 2 + 0] = vertX / (bounds.maxX - bounds.minX) + 0.5;
        this.texCoords[i * 2 + 1] = 1.0 - vertY / (bounds.maxY - bounds.minY) + 0.5;
    }
};


Geometry.prototype.getInfoOneLine = function ()
{
    let txt = "";
    if (this.faceVertCount == 3 && this.verticesIndices)txt += this.verticesIndices.length / 3;
    else txt += 0;

    txt += " tris ";

    if (this.vertices)txt += this.vertices.length / 3;
    else txt += 0;

    txt += " verts";

    return txt;
};

Geometry.prototype.getInfo = function ()
{
    const info = {};

    if (this.faceVertCount == 3 && this.verticesIndices)info.numFaces = this.verticesIndices.length / 3;
    else info.numFaces = 0;

    if (this.verticesIndices && this.verticesIndices.length)info.indices = this.verticesIndices.length;

    if (this.vertices)info.numVerts = this.vertices.length / 3;
    else info.numVerts = 0;

    if (this.vertexNormals) info.numNormals = this.vertexNormals.length / 3;
    else info.numNormals = 0;

    if (this.texCoords) info.numTexCoords = this.texCoords.length / 2;
    else info.numTexCoords = 0;

    if (this.tangents) info.numTangents = this.tangents.length / 3;
    else info.numTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.biTangents) info.numBiTangents = this.biTangents.length / 3;
    else info.numBiTangents = 0;

    if (this.vertexColors) info.numVertexColors = this.vertexColors.length / 4;
    else info.numVertexColors = 0;

    if (this.getAttributes()) info.numAttribs = Object.keys(this.getAttributes()).length;
    else info.numAttribs = 0;

    info.isIndexed = this.isIndexed();

    return info;
};

// -----------------

// TODO : rewritwe circle op
Geometry.buildFromFaces = function (arr, name, optimize)
{
    const vertices = [];
    const verticesIndices = [];

    for (let i = 0; i < arr.length; i += 3)
    {
        const a = arr[i + 0];
        const b = arr[i + 1];
        const c = arr[i + 2];
        const face = [-1, -1, -1];

        if (optimize)
            for (let iv = 0; iv < vertices.length; iv += 3)
            {
                if (vertices[iv + 0] == a[0] && vertices[iv + 1] == a[1] && vertices[iv + 2] == a[2]) face[0] = iv / 3;
                if (vertices[iv + 0] == b[0] && vertices[iv + 1] == b[1] && vertices[iv + 2] == b[2]) face[1] = iv / 3;
                if (vertices[iv + 0] == c[0] && vertices[iv + 1] == c[1] && vertices[iv + 2] == c[2]) face[2] = iv / 3;
            }

        if (face[0] == -1)
        {
            vertices.push(a[0], a[1], a[2]);
            face[0] = (vertices.length - 1) / 3;
        }

        if (face[1] == -1)
        {
            vertices.push(b[0], b[1], b[2]);
            face[1] = (vertices.length - 1) / 3;
        }

        if (face[2] == -1)
        {
            vertices.push(c[0], c[1], c[2]);
            face[2] = (vertices.length - 1) / 3;
        }

        verticesIndices.push(parseInt(face[0], 10));
        verticesIndices.push(parseInt(face[1], 10));
        verticesIndices.push(parseInt(face[2], 10));
    }

    const geom = new Geometry(name);
    geom.name = name;
    geom.vertices = vertices;
    geom.verticesIndices = verticesIndices;

    return geom;
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_mesh.js




const MESH = {};
MESH.lastMesh = null;

/**
 * webgl renderable 3d object
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param {Context} _cgl cgl
 * @param {Geometry} __geom geometry
 * @param {Number} _options glPrimitive
 * @example
 * const cgl=this._cgl
 * const mesh=new CGL.Mesh(cgl, geometry);
 *
 * function render()
 * {
 *   mesh.render(cgl.getShader());
 * }
 */
const Mesh = function (_cgl, __geom, _options)
{
    this._cgl = _cgl;

    let options = _options || {};
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": _options }; // old constructor fallback...
    this._log = new Logger("cgl_mesh");
    this._bufVertexAttrib = null;
    this._bufVerticesIndizes = this._cgl.gl.createBuffer();
    this._indexType = this._cgl.gl.UNSIGNED_SHORT;
    this._attributes = [];
    this._attribLocs = {};
    this._geom = null;
    this._lastShader = null;
    this._numInstances = 0;
    this._glPrimitive = options.glPrimitive;

    this.opId = options.opId || "";
    this._preWireframeGeom = null;
    this.addVertexNumbers = false;
    this._name = "unknown";

    this.feedBackAttributes = [];
    this.setGeom(__geom);

    this._feedBacks = [];
    this._feedBacksChanged = false;
    this._transformFeedBackLoc = -1;
    this._lastAttrUpdate = 0;

    this.memFreed = false;

    this._cgl.profileData.addHeavyEvent("mesh constructed", this._name);

    this._queryExt = null;

    Object.defineProperty(this, "numInstances", {
        get()
        {
            return this._numInstances;
        },
        set(v)
        {
            this.setNumInstances(v);
        },
    });
};

Mesh.prototype.freeMem = function ()
{
    this.memFreed = true;

    for (let i = 0; i < this._attributes.length; i++)
    {
        this._attributes[i].floatArray = null;
    }
};

/**
 * @function updateVertices
 * @memberof Mesh
 * @instance
 * @description update vertices only from a geometry
 * @param {Geometry} geom
 */
Mesh.prototype.updateVertices = function (geom)
{
    this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION, geom.vertices, 3);
    this._numVerts = geom.vertices.length / 3;
};

Mesh.prototype.setAttributePointer = function (attrName, name, stride, offset)
{
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].name == attrName)
        {
            if (!this._attributes[i].pointer) this._attributes[i].pointer = [];

            this._attributes[i].pointer.push(
                {
                    "loc": -1,
                    "name": name,
                    "stride": stride,
                    "offset": offset,
                    "instanced": attrName == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX,
                }
            );
        }
    }
};

Mesh.prototype.getAttribute = function (name)
{
    for (let i = 0; i < this._attributes.length; i++) if (this._attributes[i].name == name) return this._attributes[i];
};

Mesh.prototype.setAttributeRange = function (attr, array, start, end)
{
    if (!attr) return;
    if (!start && !end) return;

    if (!attr.name)
    {
        this._log.stack("no attrname?!");
    }

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._cgl.profileData.profileMeshAttributes += (end - start) || 0;

    this._cgl.profileData.profileSingleMeshAttribute[this._name] = this._cgl.profileData.profileSingleMeshAttribute[this._name] || 0;
    this._cgl.profileData.profileSingleMeshAttribute[this._name] += (end - start) || 0;

    if (attr.numItems < array.length / attr.itemSize)
    {
        this._resizeAttr(array, attr);
    }

    if (end > array.length)
    {
        if (CABLES.platform.isDevEnv())
            this._log.log(this._cgl.canvas.id + " " + attr.name + " buffersubdata out of bounds ?", array.length, end, start, attr);
        // end = array.length - 1;
        return;
    }

    if (this._cgl.glVersion == 1) this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, array); // probably slow/ maybe create and array with only changed size ??
    else this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, start * 4, array, start, (end - start));
};

Mesh.prototype._resizeAttr = function (array, attr)
{
    if (attr.buffer)
        this._cgl.gl.deleteBuffer(attr.buffer);

    attr.buffer = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
    this._bufferArray(array, attr);
    attr.numItems = array.length / attr.itemSize;// numItems;
};


Mesh.prototype._bufferArray = function (array, attr)
{
    let floatArray = attr.floatArray || null;
    if (!array) return;


    if (this._cgl.debugOneFrame)
    {
        console.log("_bufferArray", array.length, attr.name); // eslint-disable-line
    }

    if (!(array instanceof Float32Array))
    {
        if (attr && floatArray && floatArray.length == array.length)
        {
            floatArray.set(array);
            // floatArray = floatArray;
        }
        else
        {
            floatArray = new Float32Array(array);

            if (this._cgl.debugOneFrame)
            {
                console.log("_bufferArray create new float32array", array.length, attr.name); // eslint-disable-line
            }

            if (array.length > 10000)
            {
                this._cgl.profileData.profileNonTypedAttrib++;
                this._cgl.profileData.profileNonTypedAttribNames = "(" + this._name + ":" + attr.name + ")";
            }
        }
    }
    else floatArray = array;

    attr.arrayLength = floatArray.length;
    attr.floatArray = null;// floatArray;

    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);
};

/**
 * @function setAttribute
 * @description update attribute
 * @memberof Mesh
 * @instance
 * @param {String} attribute name
 * @param {Array} data
 * @param {Number} itemSize
 * @param {Object} options
 */
Mesh.prototype.addAttribute = Mesh.prototype.updateAttribute = Mesh.prototype.setAttribute = function (name, array, itemSize, options)
{
    if (!array)
    {
        this._log.error("mesh addAttribute - no array given! " + name);
        throw new Error();
    }
    let cb = null;
    let instanced = false;
    let i = 0;
    const numItems = array.length / itemSize;

    this._cgl.profileData.profileMeshAttributes += numItems || 0;

    if (typeof options == "function")
    {
        cb = options;
    }

    if (typeof options == "object")
    {
        if (options.cb) cb = options.cb;
        if (options.instanced) instanced = options.instanced;
    }

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_MMATRIX) instanced = true;


    for (i = 0; i < this._attributes.length; i++)
    {
        const attr = this._attributes[i];
        if (attr.name == name)
        {
            if (attr.numItems === numItems)
            {
            }
            else
            {
                // this._log.log("wrong buffer size", this._geom.name, attr.name, attr.numItems, numItems);
                this._resizeAttr(array, attr);
            }

            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attr.buffer);
            this._bufferArray(array, attr);

            return attr;
        }
    }

    // create new buffer...

    const buffer = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, buffer);
    // this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, floatArray, this._cgl.gl.DYNAMIC_DRAW);

    let type = this._cgl.gl.FLOAT;
    if (options && options.type) type = options.type;
    const attr = {
        "buffer": buffer,
        "name": name,
        "cb": cb,
        "itemSize": itemSize,
        "numItems": numItems,
        "startItem": 0,
        "instanced": instanced,
        "type": type
    };

    this._bufferArray(array, attr);

    if (name == constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION) this._bufVertexAttrib = attr;
    this._attributes.push(attr);
    this._attribLocs = {};

    return attr;
};

Mesh.prototype.getAttributes = function ()
{
    return this._attributes;
};

/**
 * @function updateTexCoords
 * @description update texture coordinates only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateTexCoords = function (geom)
{
    if (geom.texCoords && geom.texCoords.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, geom.texCoords, 2);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length / 3) * 2));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD, tcBuff, 2);
    }
};


/**
 * @function updateNormals
 * @description update normals only from a geometry
 * @memberof Mesh
 * @instance
 * @param {Geometry} geom
 */
Mesh.prototype.updateNormals = function (geom)
{
    if (geom.vertexNormals && geom.vertexNormals.length > 0)
    {
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, geom.vertexNormals, 3);
    }
    else
    {
        const tcBuff = new Float32Array(Math.round((geom.vertices.length)));
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL, tcBuff, 3);
    }
};


Mesh.prototype._setVertexNumbers = function (arr)
{
    if (!this._verticesNumbers || this._verticesNumbers.length != this._numVerts || arr)
    {
        if (arr) this._verticesNumbers = arr;
        else
        {
            this._verticesNumbers = new Float32Array(this._numVerts);
            for (let i = 0; i < this._numVerts; i++) this._verticesNumbers[i] = i;
        }

        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (attr, geom, shader) =>
        {
            if (!shader.uniformNumVertices) shader.uniformNumVertices = new Uniform(shader, "f", "numVertices", this._numVerts);
            shader.uniformNumVertices.setValue(this._numVerts);

            // console.log("this._numVerts", this._numVerts, attr, shader.uniformNumVertices);
        });
    }
};

/**
 * @function setVertexIndices
 * @description update vertex indices / faces
 * @memberof Mesh
 * @instance
 * @param {array} vertIndices
 */
Mesh.prototype.setVertexIndices = function (vertIndices)
{
    if (!this._bufVerticesIndizes)
    {
        this._log.warn("no bufVerticesIndizes: " + this._name);
        return;
    }
    if (vertIndices.length > 0)
    {
        if (vertIndices instanceof Float32Array) this._log.warn("vertIndices float32Array: " + this._name);

        for (let i = 0; i < vertIndices.length; i++)
        {
            if (vertIndices[i] >= this._numVerts)
            {
                this._log.warn("invalid index in " + this._name, i, vertIndices[i]);
                return;
            }
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);

        // todo cache this ?
        // if(!this.vertIndicesTyped || this.vertIndicesTyped.length!=this._geom.verticesIndices.length)

        if (vertIndices.length > 65535)
        {
            this.vertIndicesTyped = new Uint32Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (vertIndices instanceof Uint32Array)
        {
            this.vertIndicesTyped = vertIndices;
            this._indexType = this._cgl.gl.UNSIGNED_INT;
        }
        else
        if (!(vertIndices instanceof Uint16Array))
        {
            this.vertIndicesTyped = new Uint16Array(vertIndices);
            this._indexType = this._cgl.gl.UNSIGNED_SHORT;
        }
        else this.vertIndicesTyped = vertIndices;

        this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW);
        this._bufVerticesIndizes.itemSize = 1;
        this._bufVerticesIndizes.numItems = vertIndices.length;
    }
    else this._bufVerticesIndizes.numItems = 0;
};

/**
 * @function setGeom
 * @memberof Mesh
 * @instance
 * @description set geometry for mesh
 * @param {Geometry} geom
 * @param {boolean} removeRef
 */
Mesh.prototype.setGeom = function (geom, removeRef)
{
    this._geom = geom;
    if (geom.glPrimitive != null) this._glPrimitive = geom.glPrimitive;
    if (this._geom && this._geom.name) this._name = "mesh " + this._geom.name;

    MESH.lastMesh = null;
    this._cgl.profileData.profileMeshSetGeom++;

    this._disposeAttributes();

    this.updateVertices(this._geom);
    this.setVertexIndices(this._geom.verticesIndices);

    if (this.addVertexNumbers) this._setVertexNumbers();

    const geomAttribs = this._geom.getAttributes();

    const attribAssoc = {
        "texCoords": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_TEXCOORD,
        "vertexNormals": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_NORMAL,
        "vertexColors": constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_COLOR,
        "tangents": "attrTangent",
        "biTangents": "attrBiTangent",
    };

    for (const index in geomAttribs)
        if (geomAttribs[index].data && geomAttribs[index].data.length)
            this.setAttribute(attribAssoc[index] || index, geomAttribs[index].data, geomAttribs[index].itemSize);


    if (removeRef)
    {
        this._geom = null;
    }
};

Mesh.prototype._preBind = function (shader)
{
    for (let i = 0; i < this._attributes.length; i++)
        if (this._attributes[i].cb)
            this._attributes[i].cb(this._attributes[i], this._geom, shader);
};

Mesh.prototype._checkAttrLengths = function ()
{
    if (this.memFreed) return;
    // check length
    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].arrayLength / this._attributes[i].itemSize < this._attributes[0].arrayLength / this._attributes[0].itemSize)
        {
            let name = "unknown";
            if (this._geom)name = this._geom.name;
            // this._log.warn(
            //     name + ": " + this._attributes[i].name +
            //     " wrong attr length. is:", this._attributes[i].arrayLength / this._attributes[i].itemSize,
            //     " should be:", this._attributes[0].arrayLength / this._attributes[0].itemSize,
            // );
        }
    }
};

Mesh.prototype._bind = function (shader)
{
    if (!shader.isValid()) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    this._lastShader = shader;
    if (shader.lastCompile > this._lastAttrUpdate || attrLocs.length != this._attributes.length)
    {
        this._lastAttrUpdate = shader.lastCompile;
        for (let i = 0; i < this._attributes.length; i++) attrLocs[i] = -1;
    }

    for (let i = 0; i < this._attributes.length; i++)
    {
        const attribute = this._attributes[i];
        if (attrLocs[i] == -1)
        {
            if (attribute._attrLocationLastShaderTime != shader.lastCompile)
            {
                attribute._attrLocationLastShaderTime = shader.lastCompile;
                attrLocs[i] = this._cgl.glGetAttribLocation(shader.getProgram(), attribute.name);
                // this._log.log('attribloc',attribute.name,attrLocs[i]);
                this._cgl.profileData.profileAttrLoc++;
            }
        }

        if (attrLocs[i] != -1)
        {
            this._cgl.gl.enableVertexAttribArray(attrLocs[i]);
            this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, attribute.buffer);

            if (attribute.instanced)
            {
                // todo: easier way to fill mat4 attribs...
                if (attribute.itemSize <= 4)
                {
                    if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("instanced attrib itemsize error", this._geom.name, attribute);

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                }
                else if (attribute.itemSize == 16)
                {
                    const stride = 16 * 4;

                    this._cgl.gl.vertexAttribPointer(attrLocs[i], 4, attribute.type, false, stride, 0);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 1);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 1, 4, attribute.type, false, stride, 4 * 4 * 1);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 2);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 2, 4, attribute.type, false, stride, 4 * 4 * 2);
                    this._cgl.gl.enableVertexAttribArray(attrLocs[i] + 3);
                    this._cgl.gl.vertexAttribPointer(attrLocs[i] + 3, 4, attribute.type, false, stride, 4 * 4 * 3);

                    this._cgl.gl.vertexAttribDivisor(attrLocs[i], 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 1);
                    this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 1);
                }
                else
                {
                    this._log.warn("unknown instance attrib size", attribute.name);
                }
            }
            else
            {
                if (!attribute.itemSize || attribute.itemSize == 0) this._log.warn("attrib itemsize error", this._name, attribute);
                this._cgl.gl.vertexAttribPointer(attrLocs[i], attribute.itemSize, attribute.type, false, attribute.itemSize * 4, 0);

                if (attribute.pointer)
                {
                    for (let ip = 0; ip < attribute.pointer.length; ip++)
                    {
                        const pointer = attribute.pointer[ip];

                        if (pointer.loc == -1)
                            pointer.loc = this._cgl.glGetAttribLocation(shader.getProgram(), pointer.name);

                        this._cgl.profileData.profileAttrLoc++;

                        this._cgl.gl.enableVertexAttribArray(pointer.loc);
                        this._cgl.gl.vertexAttribPointer(pointer.loc, attribute.itemSize, attribute.type, false, pointer.stride, pointer.offset);
                    }
                }
                if (this.bindFeedback) this.bindFeedback(attribute);
            }
        }
    }

    if (this._bufVerticesIndizes && this._bufVerticesIndizes.numItems !== 0) this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
};

Mesh.prototype.unBind = function ()
{
    const shader = this._lastShader;
    this._lastShader = null;
    if (!shader) return;

    let attrLocs = [];
    if (this._attribLocs[shader.id]) attrLocs = this._attribLocs[shader.id];
    else this._attribLocs[shader.id] = attrLocs;

    MESH.lastMesh = null;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].instanced)
        {
            // todo: easier way to fill mat4 attribs...
            if (this._attributes[i].itemSize <= 4)
            {
                if (attrLocs[i] != -1) this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                if (attrLocs[i] >= 0) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
            }
            else
            {
                this._cgl.gl.vertexAttribDivisor(attrLocs[i], 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 1, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 2, 0);
                this._cgl.gl.vertexAttribDivisor(attrLocs[i] + 3, 0);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 1);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 2);
                this._cgl.gl.disableVertexAttribArray(attrLocs[i] + 3);
            }
        }

        if (attrLocs[i] != -1) this._cgl.gl.disableVertexAttribArray(attrLocs[i]);
    }
};

Mesh.prototype.meshChanged = function ()
{
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
};

Mesh.prototype.printDebug = function (shader)
{
    console.log("--attributes");
    for (let i = 0; i < this._attributes.length; i++)
    {
        console.log("attribute " + i + " " + this._attributes[i].name);
    }
};

Mesh.prototype.setNumVertices = function (num)
{
    this._bufVertexAttrib.numItems = num;
};

Mesh.prototype.getNumVertices = function ()
{
    return this._bufVertexAttrib.numItems;
};


/**
 * @function render
 * @memberof Mesh
 * @instance
 * @description draw mesh to screen
 * @param {Shader} shader
 */
Mesh.prototype.render = function (shader)
{
    // TODO: enable/disablevertex only if the mesh has changed... think drawing 10000x the same mesh

    if (!shader || !shader.isValid() || this._cgl.aborted) return;

    this._checkAttrLengths();

    if (this._geom)
    {
        if (this._preWireframeGeom && !shader.wireframe && !this._geom.isIndexed())
        {
            this.setGeom(this._preWireframeGeom);
            this._preWireframeGeom = null;
            // console.log("remove prewireframe geom");
        }

        if (shader.wireframe)
        {
            let changed = false;

            if (this._geom.isIndexed())
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }

                this._geom.unIndex();
                changed = true;
            }

            if (!this._geom.getAttribute("attrBarycentric"))
            {
                if (!this._preWireframeGeom)
                {
                    this._preWireframeGeom = this._geom;
                    this._geom = this._geom.copy();
                }
                changed = true;

                this._geom.calcBarycentric();
            }
            if (changed) this.setGeom(this._geom);
        }
        // if (shader.wireframe)
        // console.log(shader.wireframe, this._geom.isIndexed());
    }

    let needsBind = false;
    if (MESH.lastMesh != this)
    {
        if (MESH.lastMesh) MESH.lastMesh.unBind();
        needsBind = true;
    }


    // var needsBind=false;
    // {
    //     needsBind=true;
    // }
    if (needsBind) this._preBind(shader);

    if (!shader.bind()) return;

    // if(needsBind)
    this._bind(shader);
    if (this.addVertexNumbers) this._setVertexNumbers();

    MESH.lastMesh = this;

    let prim = this._cgl.gl.TRIANGLES;
    if (this._glPrimitive !== undefined) prim = this._glPrimitive;
    if (shader.glPrimitive !== null) prim = shader.glPrimitive;

    let elementDiv = 1;
    let doQuery = this._cgl.profileData.doProfileGlQuery;
    let queryStarted = false;
    if (doQuery)
    {
        let id = this._name + " - " + shader.getName() + " #" + shader.id;
        if (this._numInstances) id += " instanced " + this._numInstances + "x";

        let queryProfilerData = this._cgl.profileData.glQueryData[id];

        if (!queryProfilerData) queryProfilerData = { "id": id, "num": 0 };

        if (shader.opId)queryProfilerData.shaderOp = shader.opId;
        if (this.opId)queryProfilerData.meshOp = this.opId;

        this._cgl.profileData.glQueryData[id] = queryProfilerData;

        if (!this._queryExt && this._queryExt !== false) this._queryExt = this._cgl.enableExtension("EXT_disjoint_timer_query_webgl2") || false;
        if (this._queryExt)
        {
            if (queryProfilerData._drawQuery)
            {
                const available = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE);
                if (available)
                {
                    const elapsedNanos = this._cgl.gl.getQueryParameter(queryProfilerData._drawQuery, this._cgl.gl.QUERY_RESULT);
                    const currentTimeGPU = elapsedNanos / 1000000;

                    queryProfilerData._times = queryProfilerData._times || 0;
                    queryProfilerData._times += currentTimeGPU;
                    queryProfilerData._numcount++;
                    queryProfilerData.when = performance.now();
                    queryProfilerData._drawQuery = null;
                    queryProfilerData.queryStarted = false;
                }
            }

            if (!queryProfilerData.queryStarted)
            {
                queryProfilerData._drawQuery = this._cgl.gl.createQuery();
                this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, queryProfilerData._drawQuery);
                queryStarted = queryProfilerData.queryStarted = true;
            }
        }
    }


    if (this.hasFeedbacks && this.hasFeedbacks()) this.drawFeedbacks(shader, prim);
    else if (!this._bufVerticesIndizes || this._bufVerticesIndizes.numItems === 0)
    {
        // for (let i = 0; i < this._attributes.length; i++)
        // {
        //     if (this._attributes[i].arrayLength / this._attributes[i].itemSize != this._bufVertexAttrib.floatArray.length / 3)
        //     {
        //         this._log.warn("attrib buffer length wrong! ", this._attributes[i].name, this._attributes[i].arrayLength / this._attributes[i].itemSize, this._bufVertexAttrib.floatArray.length / 3, this._attributes[i].itemSize);
        //         // this._log.log(this);
        //         // debugger;
        //         return;
        //     }
        // }


        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0) this._cgl.gl.drawArrays(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem);
        else this._cgl.gl.drawArraysInstanced(prim, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances);
    }
    else
    {
        if (prim == this._cgl.gl.TRIANGLES)elementDiv = 3;
        if (this._numInstances === 0)
        {
            // console.log("la", this._bufVerticesIndizes.numItems);

            this._cgl.gl.drawElements(prim, this._bufVerticesIndizes.numItems, this._indexType, 0);
        }
        else
        {
            this._cgl.gl.drawElementsInstanced(prim, this._bufVerticesIndizes.numItems, this._indexType, 0, this._numInstances);
        }
    }

    if (this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR)
    {
        this._log.error("mesh draw gl error");
        this._log.error("mesh", this);
        this._log.error("shader", shader);

        const attribNames = [];
        for (let i = 0; i < this._cgl.gl.getProgramParameter(shader.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); i++)
        {
            const name = this._cgl.gl.getActiveAttrib(shader.getProgram(), i).name;
            this._log.error("attrib ", name);
        }
    }

    this._cgl.profileData.profileMeshNumElements += (this._bufVertexAttrib.numItems / elementDiv) * (this._numInstances || 1);
    this._cgl.profileData.profileMeshDraw++;

    if (doQuery && queryStarted)
    {
        this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT);
    }

    this._cgl.printError("mesh render " + this._name);

    this.unBind();
};

Mesh.prototype.setNumInstances = function (n)
{
    n = Math.max(0, n);
    if (this._numInstances != n)
    {
        this._numInstances = n;
        const indexArr = new Float32Array(n);
        for (let i = 0; i < n; i++) indexArr[i] = i;
        this.setAttribute(constants_CONSTANTS.SHADER.SHADERVAR_INSTANCE_INDEX, indexArr, 1, { "instanced": true });
    }
};

Mesh.prototype._disposeAttributes = function ()
{
    if (!this._attributes) return;

    for (let i = 0; i < this._attributes.length; i++)
    {
        if (this._attributes[i].buffer)
        {
            this._cgl.gl.deleteBuffer(this._attributes[i].buffer);
            this._attributes[i].buffer = null;
        }
    }
    this._attributes.length = 0;
};

Mesh.prototype.dispose = function ()
{
    if (this._bufVertexAttrib && this._bufVertexAttrib.buffer) this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer);
    if (this._bufVerticesIndizes) this._cgl.gl.deleteBuffer(this._bufVerticesIndizes);
    this._bufVerticesIndizes = null;

    this._disposeAttributes();
};





;// CONCATENATED MODULE: ./src/core/cgl/cgl_simplerect.js




const MESHES = {};

MESHES.getSimpleRect = function (cgl, name, size = 1.0)
{
    const geom = new Geometry(name);



    geom.vertices = [1.0 * size, 1.0 * size, 0.0, -1.0 * size, 1.0 * size, 0.0, 1.0 * size, -1.0 * size, 0.0, -1.0 * size, -1.0 * size, 0.0];
    geom.texCoords = [1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    geom.verticesIndices = [0, 1, 2, 2, 1, 3];
    geom.vertexNormals = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

    return cgl.createMesh(geom);
    // return new Mesh(cgl, geom);
};


MESHES.getSimpleCube = function (cgl, name)
{
    const geom = new Geometry(name);
    geom.vertices = [-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1, 1, -1, 1, 1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1];
    geom.setTexCoords([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0,]);
    geom.verticesIndices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    geom.vertexNormals = new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]);
    geom.tangents = new Float32Array([0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    geom.biTangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1]);

    return new Mesh(cgl, geom);
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_textureeffect.js




const TextureEffect = function (cgl, options)
{
    this._cgl = cgl;
    this._log = new Logger("cgl_TextureEffect");

    if (!cgl.TextureEffectMesh) this.createMesh();

    this._textureSource = null;
    this._options = options;
    this.name = options.name || "unknown";

    // TODO: do we still need the options ?
    // var opts=options ||
    //     {
    //         isFloatingPointTexture:false,
    //         filter:CGL.Texture.FILTER_LINEAR
    //     };
    // if(options && options.fp)opts.isFloatingPointTexture=true;

    this.imgCompVer = 0;
    this.aspectRatio = 1;
    this._textureTarget = null; // new CGL.Texture(this._cgl,opts);
    this._frameBuf = this._cgl.gl.createFramebuffer();
    this._frameBuf2 = this._cgl.gl.createFramebuffer();
    this._renderbuffer = this._cgl.gl.createRenderbuffer();
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer();
    this.switched = false;
    this.depth = false;
};

TextureEffect.prototype.dispose = function ()
{
    if (this._renderbuffer) this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    if (this._frameBuf) this._cgl.gl.deleteFramebuffer(this._frameBuf);
    if (this._renderbuffer2) this._cgl.gl.deleteRenderbuffer(this._renderbuffer2);
    if (this._frameBuf2) this._cgl.gl.deleteFramebuffer(this._frameBuf2);
};

TextureEffect.prototype.getWidth = function ()
{
    return this._textureSource.width;
};

TextureEffect.prototype.getHeight = function ()
{
    return this._textureSource.height;
};

TextureEffect.prototype.setSourceTexture = function (tex)
{
    if (tex === null)
    {
        this._textureSource = new Texture(this._cgl);
        this._textureSource.setSize(16, 16);
    }
    else
    {
        this._textureSource = tex;
    }

    if (!this._textureSource.compareSettings(this._textureTarget))
    {
        if (this._textureTarget) this._textureTarget.delete();

        this._textureTarget = this._textureSource.clone();

        this._cgl.profileData.profileEffectBuffercreate++;

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);
        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // if(tex.textureType==CGL.Texture.TYPE_FLOAT) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA32F, this._textureSource.width,this._textureSource.height);
        // else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,this._cgl.gl.RGBA8, this._textureSource.width,this._textureSource.height);

        if (this.depth) this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        if (this.depth) this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2);

        // this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0);

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    }

    this.aspectRatio = this._textureSource.width / this._textureSource.height;
};
TextureEffect.prototype.continueEffect = function ()
{
    this._cgl.pushDepthTest(false);
    this._cgl.pushModelMatrix();
    this._cgl.pushPMatrix();
    // todo why two pushs?



    this._cgl.pushViewPort(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height);



    mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100.0); // todo: why?

    this._cgl.pushPMatrix();
    mat4.identity(this._cgl.pMatrix);

    this._cgl.pushViewMatrix();
    mat4.identity(this._cgl.vMatrix);

    this._cgl.pushModelMatrix();
    mat4.identity(this._cgl.mMatrix);
};


TextureEffect.prototype.startEffect = function (bgTex)
{
    if (!this._textureTarget)
    {
        this._log.warn("effect has no target");
        return;
    }

    this.switched = false;

    this.continueEffect();

    if (bgTex)
    {
        this._bgTex = bgTex;
    }
    this._countEffects = 0;
};

TextureEffect.prototype.endEffect = function ()
{
    this._cgl.popDepthTest();
    this._cgl.popModelMatrix();

    this._cgl.popPMatrix();
    this._cgl.popModelMatrix();
    this._cgl.popViewMatrix();

    this._cgl.popPMatrix();
    this._cgl.popViewPort();
};

TextureEffect.prototype.bind = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    if (!this.switched)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf);
        this._cgl.pushGlFrameBuffer(this._frameBuf);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2);
        this._cgl.pushGlFrameBuffer(this._frameBuf2);
    }
};

TextureEffect.prototype.finish = function ()
{
    if (this._textureSource === null)
    {
        this._log.warn("no base texture set!");
        return;
    }

    this._cgl.TextureEffectMesh.render(this._cgl.getShader());

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());

    this._cgl.profileData.profileTextureEffect++;

    if (this._textureTarget.filter == Texture.FILTER_MIPMAP)
    {
        if (!this.switched)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex);
            this._textureTarget.updateMipMap();
        }
        else
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex);
            this._textureSource.updateMipMap();
        }

        this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }

    this.switched = !this.switched;
    this._countEffects++;
};

TextureEffect.prototype.getCurrentTargetTexture = function ()
{
    if (this.switched) return this._textureSource;
    return this._textureTarget;
};

TextureEffect.prototype.getCurrentSourceTexture = function ()
{
    if (this._countEffects == 0 && this._bgTex) return this._bgTex;

    if (this.switched) return this._textureTarget;
    return this._textureSource;
};

TextureEffect.prototype.delete = function ()
{
    if (this._textureTarget) this._textureTarget.delete();
    if (this._textureSource) this._textureSource.delete();
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuf);
};

TextureEffect.prototype.createMesh = function ()
{
    this._cgl.TextureEffectMesh = MESHES.getSimpleRect(this._cgl, "texEffectRect");
};

// ---------------------------------------------------------------------------------

TextureEffect.checkOpNotInTextureEffect = function (op)
{
    if (!op.patch.cgl) return true;
    if (op.uiAttribs.error && !op.patch.cgl.currentTextureEffect)
    {
        op.setUiError("textureeffect", null);
        return true;
    }
    if (!op.patch.cgl.currentTextureEffect) return true;

    if (op.patch.cgl.currentTextureEffect && !op.uiAttribs.error)
    {
        op.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0);
        return false;
    }

    if (op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.checkOpInEffect = function (op, minver)
{
    minver = minver || 0;

    if (op.patch.cgl.currentTextureEffect)
    {
        if (op.uiAttribs.uierrors && op.patch.cgl.currentTextureEffect.imgCompVer >= minver)
        {
            op.setUiError("texeffect", null);
            return true;
        }

        if (minver && op.patch.cgl.currentTextureEffect.imgCompVer < minver)
        {
            op.setUiError("texeffect", "This op must be a child of an ImageCompose op with version >=" + minver + " <span class=\"button-small\" onclick=\"gui.patchView.downGradeOp('" + op.id + "','" + op.name + "')\">Downgrade</span> to previous version", 1);
        }
    }

    if (op.patch.cgl.currentTextureEffect) return true;

    if (!op.patch.cgl.currentTextureEffect && (!op.uiAttribs.uierrors || op.uiAttribs.uierrors.length == 0))
    {
        op.setUiError("texeffect", "This op must be a child of an ImageCompose op! More infos <a href=\"https://cables.gl/docs/image_composition/image_composition.html\" target=\"_blank\">here</a>. ", 1);
        return false;
    }

    if (!op.patch.cgl.currentTextureEffect) return false;
    return true;
};

TextureEffect.getBlendCode = function (ver)
{
    let src = "".endl()
        + "vec3 _blend(vec3 base,vec3 blend)".endl()
        + "{".endl()
        + "   vec3 colNew=blend;".endl()
        + "   #ifdef BM_MULTIPLY".endl()
        + "       colNew=base*blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_MULTIPLY_INV".endl()
        + "       colNew=base* vec3(1.0)-blend;".endl()
        + "   #endif".endl()
        + "   #ifdef BM_AVERAGE".endl()
        + "       colNew=((base + blend) / 2.0);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_ADD".endl()
        + "       colNew=min(base + blend, vec3(1.0));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SUBTRACT_ONE".endl()
        + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl()
        + "   #endif".endl()

        + "   #ifdef BM_SUBTRACT".endl()
        + "       colNew=base - blend;".endl()
        + "   #endif".endl()

        + "   #ifdef BM_DIFFERENCE".endl()
        + "       colNew=abs(base - blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_NEGATION".endl()
        + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_EXCLUSION".endl()
        + "       colNew=(base + blend - 2.0 * base * blend);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_LIGHTEN".endl()
        + "       colNew=max(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_DARKEN".endl()
        + "       colNew=min(blend, base);".endl()
        + "   #endif".endl()
        + "   #ifdef BM_OVERLAY".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SCREEN".endl()
        + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendScreen(base, blend)        Blend(base, blend, BlendScreenf)'
            // .endl()+'      colNew=Blend(base, blend, BlendScreenf);'
            .endl()
        + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_SOFTLIGHT".endl()
        + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))"
            // .endl()+'       #define BlendSoftLight(base, blend)     Blend(base, blend, BlendSoftLightf)'
            //    .endl()+'      colNew=Blend(base, blend, BlendSoftLightf);'
            .endl()
        + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_HARDLIGHT".endl()
        + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))"
            // .endl()+'       #define BlendOverlay(base, blend)       Blend(base, blend, BlendOverlayf)'
            // .endl()+'      colNew=Blend(blend, base, BlendOverlayf);'
            .endl()
        + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORDODGE".endl()
        + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorDodgef);'
            .endl()
        + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl()
        + "   #endif".endl()
        + "   #ifdef BM_COLORBURN".endl()
        + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))"
            // .endl()+'      colNew=Blend(base, blend, BlendColorBurnf);'
            .endl()
        + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl()
        + "   #endif".endl()










        + "   return colNew;".endl()
        + "}".endl();

    if (!ver)
        src += "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl()
                + "{".endl()
                    + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl()
                    + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl()
                    + "return col;".endl()
                + "}".endl();

    if (ver >= 3)
        src += "vec4 cgl_blendPixel(vec4 base,vec4 col,float amount)".endl() +
                "{".endl() +

                "#ifdef BM_MATH_ADD".endl() +
                "   return vec4(base.rgb+col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_SUB".endl() +
                "   return vec4(base.rgb-col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_MUL".endl() +
                "   return vec4(base.rgb*col.rgb*amount,1.0);".endl() +
                "#endif".endl() +

                "#ifdef BM_MATH_DIV".endl() +
                "   return vec4(base.rgb/col.rgb*amount,1.0);".endl() +
                "#endif".endl() +


                    "#ifndef BM_MATH".endl() +
                        "vec3 colNew=_blend(base.rgb,col.rgb);".endl() +

                        "float newA=clamp(base.a+(col.a*amount),0.,1.);".endl() +

                        "#ifdef BM_ALPHAMASKED".endl() +
                            "newA=base.a;".endl() +
                        "#endif".endl() +

                        "return vec4(".endl() +
                            "mix(colNew,base.rgb,1.0-(amount*col.a)),".endl() +
                            "newA);".endl() +

                    "#endif".endl() +
    "}".endl();

    return src;
};

TextureEffect.onChangeBlendSelect = function (shader, blendName, maskAlpha = false)
{
    blendName = String(blendName);
    shader.toggleDefine("BM_NORMAL", blendName == "normal");
    shader.toggleDefine("BM_MULTIPLY", blendName == "multiply");
    shader.toggleDefine("BM_MULTIPLY_INV", blendName == "multiply invert");
    shader.toggleDefine("BM_AVERAGE", blendName == "average");
    shader.toggleDefine("BM_ADD", blendName == "add");
    shader.toggleDefine("BM_SUBTRACT_ONE", blendName == "subtract one");
    shader.toggleDefine("BM_SUBTRACT", blendName == "subtract");
    shader.toggleDefine("BM_DIFFERENCE", blendName == "difference");
    shader.toggleDefine("BM_NEGATION", blendName == "negation");
    shader.toggleDefine("BM_EXCLUSION", blendName == "exclusion");
    shader.toggleDefine("BM_LIGHTEN", blendName == "lighten");
    shader.toggleDefine("BM_DARKEN", blendName == "darken");
    shader.toggleDefine("BM_OVERLAY", blendName == "overlay");
    shader.toggleDefine("BM_SCREEN", blendName == "screen");
    shader.toggleDefine("BM_SOFTLIGHT", blendName == "softlight");
    shader.toggleDefine("BM_HARDLIGHT", blendName == "hardlight");
    shader.toggleDefine("BM_COLORDODGE", blendName == "color dodge");
    shader.toggleDefine("BM_COLORBURN", blendName == "color burn");

    shader.toggleDefine("BM_MATH_ADD", blendName == "Math Add");
    shader.toggleDefine("BM_MATH_SUB", blendName == "Math Subtract");
    shader.toggleDefine("BM_MATH_MUL", blendName == "Math Multiply");
    shader.toggleDefine("BM_MATH_DIV", blendName == "Math Divide");

    shader.toggleDefine("BM_MATH", blendName.indexOf("Math ") == 0);


    shader.toggleDefine("BM_ALPHAMASKED", maskAlpha);
};

TextureEffect.AddBlendSelect = function (op, name, defaultMode)
{
    const p = op.inValueSelect(name || "Blend Mode", [
        "normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "subtract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight", "subtract one",
        "Math Add",
        "Math Subtract",
        "Math Multiply",
        "Math Divide",

    ], defaultMode || "normal");
    return p;
};

TextureEffect.AddBlendAlphaMask = function (op, name, defaultMode)
{
    const p = op.inSwitch(name || "Alpha Mask", ["Off", "On"], defaultMode || "Off");
    return p;
};

TextureEffect.setupBlending = function (op, shader, blendPort, amountPort, alphaMaskPort)
{
    const onChange = () =>
    {
        let maskAlpha = false;
        if (alphaMaskPort) maskAlpha = alphaMaskPort.get() == "On";
        TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);

        let str = blendPort.get();
        if (str == "normal") str = null;
        else if (str == "multiply") str = "mul";
        else if (str == "multiply invert") str = "mulinv";
        else if (str == "lighten") str = "light";
        else if (str == "darken") str = "darken";
        else if (str == "average") str = "avg";
        else if (str == "subtract one") str = "sub one";
        else if (str == "subtract") str = "sub";
        else if (str == "difference") str = "diff";
        else if (str == "negation") str = "neg";
        else if (str == "exclusion") str = "exc";
        else if (str == "overlay") str = "ovl";
        else if (str == "color dodge") str = "dodge";
        else if (str == "color burn") str = "burn";
        else if (str == "softlight") str = "soft";
        else if (str == "hardlight") str = "hard";
        else if (str == "Math Add") str = "+";
        else if (str == "Math Subtract") str = "-";
        else if (str == "Math Multiply") str = "*";
        else if (str == "Math Divide") str = "/";

        op.setUiAttrib({ "extendTitle": str });
    };
    op.setPortGroup("Blending", [blendPort, amountPort, alphaMaskPort]);

    let maskAlpha = false;

    blendPort.onChange = onChange;
    if (alphaMaskPort)
    {
        alphaMaskPort.onChange = onChange;
        maskAlpha = alphaMaskPort.get() == "On";
    }

    TextureEffect.onChangeBlendSelect(shader, blendPort.get(), maskAlpha);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_lib.js




const ShaderLibMods = {
    "CGL.BLENDMODES": function ()
    {
        this.name = "blendmodes";
        this.srcHeadFrag = TextureEffect.getBlendCode();
    },
    "CGL.BLENDMODES3": function ()
    {
        this.name = "blendmodes3";
        this.srcHeadFrag = TextureEffect.getBlendCode(3);
    },

    "CGL.LUMINANCE": function ()
    {
        this.name = "luminance";
        this.srcHeadFrag = "".endl()
            + "float cgl_luminance(vec3 c)".endl()
            + "{".endl()
            + "    return dot(vec3(0.2126,0.7152,0.0722),c);".endl()
            + "}".endl();
    },


    // quite good random numbers, but somehow don't work in ANGLE
    "CGL.RANDOM_OLD": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },


    // low quality generative ranodm numbers
    "CGL.RANDOM_LOW": function ()
    {
        this.name = "randomNumber";
        this.srcHeadFrag = "".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl()
            + "}";
    },

    // texture based random numbers
    "CGL.RANDOM_TEX": function ()
    {
        this.name = "randomNumbertex";
        this.srcHeadFrag = "".endl()
            + "UNI sampler2D CGLRNDTEX;".endl()
            + "float cgl_random(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).r;".endl()
            + "}".endl()
            + "vec3 cgl_random3(vec2 co)".endl()
            + "{".endl()
            + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl()
            + "}";

        this.initUniforms = function (shader)
        {
            return [new Uniform(shader, "t", "CGLRNDTEX", 7)];
        };

        this.onBind = function (cgl, shader)
        {
            Texture.getRandomTexture(cgl);
            cgl.setTexture(7, Texture.getRandomTexture(cgl).tex);
        };
    },
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_utils.js
/** @namespace CGL */

/**
 * multiply to get radians from degree, e.g. `360 * CGL.DEG2RAD`
 * @const {Number}
 * @memberof CGL
 * @static
 */
const cgl_utils_DEG2RAD = Math.PI / 180.0;

/**
 * to get degrees from radians, e.g. `3.14 * CGL.RAD2DEG`
 * @const {number}
 * @memberof CGL
 */
const cgl_utils_RAD2DEG = 180.0 / Math.PI;

const onLoadingAssetsFinished = null; // deprecated / remove later

/**
 * get normalized mouse wheel delta (including browser specific adjustment)
 * @function getWheelDelta
 * @static
 * @memberof CGL
 * @param {MouseEvent} event
 * @return {Number} normalized delta
 */
const isWindows = window.navigator.userAgent.contains("Windows");
const getWheelDelta_ = function (event)
{
    let normalized;
    if (event.wheelDelta)
    {
        // chrome
        normalized = (event.wheelDelta % 120) - 0 == -0 ? event.wheelDelta / 120 : event.wheelDelta / 30;
        normalized *= -1.5;
        if (isWindows) normalized *= 2;
    }
    else
    {
        // firefox
        let d = event.deltaY;
        if (event.shiftKey) d = event.deltaX;
        const rawAmmount = d || event.detail;
        normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
        normalized *= -3;
    }

    if (normalized > 20) normalized = 20;
    if (normalized < -20) normalized = -20;

    return normalized;
};

const getWheelSpeed = getWheelDelta_;
const getWheelDelta = getWheelDelta_;

// from https://github.com/lodash/lodash/blob/master/escape.js

const htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;",
};

/** Used to match HTML entities and HTML characters. */
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/*  eslint-disable */
const escapeHTML = function(string)
{
    return string && reHasUnescapedHtml.test(string) ?
        string.replace(reUnescapedHtml, function(chr) { return htmlEscapes[chr]; })
        : string || "";
}
/* eslint-enable */

;// CONCATENATED MODULE: ./src/core/cg/cg_shader.js



class CgShader extends EventTarget
{
    constructor()
    {
        super();
        this.id = simpleId();
        this._isValid = true;
        this._defines = [];

        this._moduleNames = [];
        this._modules = [];
        this._moduleNumId = 0;
    }

    /**
     * easily enable/disable a define without a value
     * @function toggleDefine
     * @memberof Shader
     * @instance
     * @param {name} name
     * @param {any} enabled value or port
     */
    toggleDefine(name, enabled)
    {
        if (enabled && typeof (enabled) == "object" && enabled.addEventListener) // port
        {
            if (enabled.changeListener)enabled.removeEventListener(enabled.changeListener);

            enabled.onToggleDefine = (v) =>
            {
                this.toggleDefine(name, v);
            };

            enabled.changeListener = enabled.on("change", enabled.onToggleDefine);
            enabled = enabled.get();
        }

        if (enabled) this.define(name);
        else this.removeDefine(name);
    }

    /**
     * add a define to a shader, e.g.  #define DO_THIS_THAT 1
     * @function define
     * @memberof Shader
     * @instance
     * @param {String} name
     * @param {Any} value (can be empty)
     */
    define(name, value)
    {
        if (value === null || value === undefined) value = "";

        if (typeof (value) == "object") // port
        {
            value.removeEventListener("change", value.onDefineChange);
            value.onDefineChange = (v) =>
            {
                this.define(name, v);
            };
            value.on("change", value.onDefineChange);

            value = value.get();
        }


        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name && this._defines[i][1] == value) return;
            if (this._defines[i][0] == name)
            {
                this._defines[i][1] = value;
                this.setWhyCompile("define " + name + " " + value);

                this._needsRecompile = true;
                return;
            }
        }
        this.setWhyCompile("define " + name + " " + value);
        this._needsRecompile = true;
        this._defines.push([name, value]);
    }

    getDefines()
    {
        return this._defines;
    }

    getDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return this._defines[i][1];
        return null;
    }

    /**
     * return true if shader has define
     * @function hasDefine
     * @memberof Shader
     * @instance
     * @param {String} name
     * @return {Boolean}
     */
    hasDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
            if (this._defines[i][0] == name) return true;
    }

    /**
     * remove a define from a shader
     * @param {name} name
     * @function removeDefine
     * @memberof Shader
     * @instance
     */
    removeDefine(name)
    {
        for (let i = 0; i < this._defines.length; i++)
        {
            if (this._defines[i][0] == name)
            {
                this._defines.splice(i, 1);
                this._needsRecompile = true;

                this.setWhyCompile("define removed:" + name);

                return;
            }
        }
    }


    hasModule(modId)
    {
        for (let i = 0; i < this._modules.length; i++)
        {
            if (this._modules[i].id == modId) return true;
        }
        return false;
    }

    setModules(names)
    {
        this._moduleNames = names;
    }


    /**
     * remove a module from shader
     * @function removeModule
     * @memberof Shader
     * @instance
     * @param {shaderModule} mod the module to be removed
     */
    removeModule(mod)
    {
        for (let i = 0; i < this._modules.length; i++)
        {
            if (mod && mod.id)
            {
                if (this._modules[i].id == mod.id || !this._modules[i])
                {
                    let found = true;
                    while (found)
                    {
                        found = false;
                        for (let j = 0; j < this._uniforms.length; j++)
                        {
                            if (this._uniforms[j].getName().startsWith(mod.prefix))
                            {
                                this._uniforms.splice(j, 1);
                                found = true;
                                continue;
                            }
                        }
                    }

                    this._needsRecompile = true;
                    this.setWhyCompile("remove module " + mod.title);
                    this._modules.splice(i, 1);
                    break;
                }
            }
        }
    }


    getNumModules()
    {
        return this._modules.length;
    }


    getCurrentModules() { return this._modules; }


    /**
     * add a module
     * @function addModule
     * @memberof Shader
     * @instance
     * @param {shaderModule} mod the module to be added
     * @param {shaderModule} [sibling] sibling module, new module will share the same group
     */
    addModule(mod, sibling)
    {
        if (this.hasModule(mod.id)) return;
        if (!mod.id) mod.id = CABLES.simpleId();
        if (!mod.numId) mod.numId = this._moduleNumId;
        if (!mod.num)mod.num = this._modules.length;
        if (sibling && !sibling.group) sibling.group = simpleId();

        if (!mod.group)
            if (sibling) mod.group = sibling.group;
            else mod.group = simpleId();

        mod.prefix = "mod" + mod.group + "_";
        this._modules.push(mod);

        this._needsRecompile = true;
        this.setWhyCompile("add module " + mod.title);
        this._moduleNumId++;

        return mod;
    }

    getAttributeSrc(mod, srcHeadVert, srcVert)
    {
        if (mod.attributes)
            for (let k = 0; k < mod.attributes.length; k++)
            {
                const r = this._getAttrSrc(mod.attributes[k], false);
                if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                if (r.srcVert)srcVert += r.srcVert;
            }

        return { "srcHeadVert": srcHeadVert, "srcVert": srcVert };
    }

    replaceModuleSrc()
    {
        let srcHeadVert = "";

        for (let j = 0; j < this._modules.length; j++)
        {
            const mod = this._modules[j];
            if (mod.name == this._moduleNames[i])
            {
                srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";


                if (mod.getAttributeSrc)
                {
                    const r = getAttributeSrc(mod, srcHeadVert, srcVert);
                    if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                    if (r.srcVert)srcVert += r.srcVert;
                }


                srcHeadVert += mod.srcHeadVert || "";
                srcVert += mod.srcBodyVert || "";

                srcHeadVert += "\n//---- end mod ------\n";

                srcVert += "\n//---- end mod ------\n";

                srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

                srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
            }
        }


        vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
    }
}



;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader_default_glsl.vert
/* harmony default export */ const cgl_shader_default_glsl = ("{{MODULES_HEAD}}\nIN vec3 vPosition; //!@\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN vec3 attrTangent,attrBiTangent;\n\nIN float attrVertIndex;\n\nOUT vec2 texCoord;\nOUT vec3 norm;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\nvoid main()\n{\n    texCoord=attrTexCoord;\n    norm=attrVertNormal;\n    vec4 pos=vec4(vPosition,  1.0);\n    vec3 tangent=attrTangent;\n    vec3 bitangent=attrBiTangent;\n    mat4 mMatrix=modelMatrix;\n    gl_PointSize=10.0;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n    {{MODULE_VERTEX_MODELVIEW}}\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n");
;// CONCATENATED MODULE: ./src/core/cgl/cgl_shader.js









// ---------------------------------------------------------------------------


/*

proposal default shader variable names:

attrVertex - currently: vPosition
attrVertexIndex - currently: attrVertIndex
attrTexCoord
attrInstMat - currently: instMat
attrVertColor
attrTangent
attrBiTangent

uProjMatrix - currently: projMatrix
uModelMatrix - currently: modelMatrix
uNormalMatrix - currently: normalMatrix
uCamPosition - currently: camPos

*/


// ---------------------------------------------------------------------------

let materialIdCounter = 0;




function getDefaultVertexShader()
{
    return cgl_shader_default_glsl;
}


function getDefaultFragmentShader(r, g, b)
{
    if (r == undefined)
    {
        r = 0.5;
        g = 0.5;
        b = 0.5;
    }
    return ""
        .endl() + "IN vec2 texCoord;"
        .endl() + "{{MODULES_HEAD}}"
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "    vec4 col=vec4(" + r + "," + g + "," + b + ",1.0);"
        .endl() + "    {{MODULE_COLOR}}"
        .endl() + "    outColor = col;"
        .endl() + "}";
};


/**
 * @class
 * @namespace external:CGL
 * @hideconstructor
 * @param _cgl
 * @param _name
 * @param _op
 * @example
 * var shader=new CGL.Shader(cgl,'MinimalMaterial');
 * shader.setSource(attachments.shader_vert,attachments.shader_frag);
 */
class Shader extends CgShader
{
    constructor (_cgl, _name, _op)
    {
        super();
        if (!_cgl) throw new Error("shader constructed without cgl " + _name);

        this._log = new Logger("cgl_shader");
        this._cgl = _cgl;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";

        if (_op) this.opId = _op.id;
        this.glslVersion = 0;
        if (_cgl.glVersion > 1) this.glslVersion = 300;

        this._materialId = ++materialIdCounter;

        this._program = null;
        this._uniforms = [];
        this._drawBuffers = [true];

        this._needsRecompile = true;
        this._compileReason = "initial";

        this.ignoreMissingUniforms = false;
        this._projMatrixUniform = null;
        this._mvMatrixUniform = null;
        this._mMatrixUniform = null;
        this._vMatrixUniform = null;
        this._camPosUniform = null;
        this._normalMatrixUniform = null;
        this._inverseViewMatrixUniform = null;
        this._fromUserInteraction = false;

        this._attrVertexPos = -1;
        this.precision = _cgl.patch.config.glslPrecision || "highp";

        this._pMatrixState = -1;
        this._vMatrixState = -1;

        this._countMissingUniforms = 0;
        this._modGroupCount = 0; // not needed anymore...
        this._feedBackNames = [];
        this._attributes = [];

        this.glPrimitive = null;
        this.offScreenPass = false;
        this._extensions = [];
        this.srcVert = getDefaultVertexShader();
        this.srcFrag = getDefaultFragmentShader();
        this.lastCompile = 0;


        this._libs = [];
        this._structNames = [];
        this._structUniformNames = [];
        this._textureStackUni = [];
        this._textureStackTex = [];
        this._textureStackType = [];
        this._textureStackTexCgl = [];

        this._tempNormalMatrix = mat4.create();
        this._tempCamPosMatrix = mat4.create();
        this._tempInverseViewMatrix = mat4.create();
        this._tempInverseProjMatrix = mat4.create();

        this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
    };







    isValid()
    {
        return this._isValid;
    };

    getCgl()
    {
        return this._cgl;
    };

    getName()
    {
        return this._name;
    };

    /**
     * enable an extension for the shader
     * @function enableExtension
     * @memberof Shader
     * @instance
     * @param name extension name
     */
    enableExtension(name)
    {
        this.setWhyCompile("enable extension " + name);
        this._needsRecompile = true;
        this._extensions.push(name);
    };

    getAttrVertexPos()
    {
        return this._attrVertexPos;
    };

    hasTextureUniforms()
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getType() == "t") return true;
        return false;
    };

    setWhyCompile(why)
    {
        this._compileReason = why;
    };

    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        // console.log(origShader._uniforms);
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }

            // this._log.log(origShader._uniforms[i].getName());
            // this.getUniform(origShader._uniforms[i].)
            // this._uniforms[i].set(origShader._uniforms[i].getValue());


            // if (origShader._uniforms[i].getName().contains("pathPoints"))
            //     console.log("copyUniformValues", origShader._uniforms[i].getName(), origShader._uniforms[i].getValue());

            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        this.popTextures();
        for (let i = 0; i < origShader._textureStackUni.length; i++)
        {
            this._textureStackUni[i] = origShader._textureStackUni[i];
            this._textureStackTex[i] = origShader._textureStackTex[i];
            this._textureStackType[i] = origShader._textureStackType[i];
            this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        }

        // this._textureStackUni = [];
        // this._textureStackTex = [];
        // this._textureStackType = [];
        // this._textureStackTexCgl = [];
    };

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new Shader(this._cgl, this._name + " copy");
        shader.setSource(this.srcVert, this.srcFrag);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;
        shader.glPrimitive = this.glPrimitive;
        shader.offScreenPass = this.offScreenPass;
        shader._extensions = this._extensions;
        shader.wireframe = this.wireframe;
        shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++)
        {
            const u = this._uniforms[i].copy(shader);
            u.resetLoc();
        }

        this.setWhyCompile("copy");
        shader._needsRecompile = true;
        return shader;
    };


    /**
     * set shader source code
     * @function setSource
     * @memberof Shader
     * @instance
     * @param {String} srcVert
     * @param {String} srcFrag
     * @param {Bool} fromUserInteraction
     */
    setSource(srcVert, srcFrag, fromUserInteraction)
    {
        this._fromUserInteraction = fromUserInteraction;
        this.srcVert = srcVert;
        this.srcFrag = srcFrag;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
        this._isValid = true;
    };

    _addLibs(src)
    {
        for (const id in ShaderLibMods)
        {
            if (src.contains(id))
            {
                const lib = new ShaderLibMods[id]();
                src = src.replace("{{" + id + "}}", lib.srcHeadFrag);
                this._libs.push(lib);
                if (lib.initUniforms)lib.initUniforms(this);
            }
        }

        return src;
    };

    createStructUniforms()
    {
        // * create structs
        let structStrFrag = "";
        let structStrVert = ""; // TODO: not used yet

        this._structNames = [];
        // * reset the arrays holding the value each recompile so we don't skip structs
        // * key value mapping so the same struct can be added twice (two times the same modifier)
        this._injectedStringsFrag = {};
        this._injectedStringsVert = {};

        this._structUniformNamesIndicesFrag = [];
        this._structUniformNamesIndicesVert = [];

        for (let i = 0; i < this._uniforms.length; i++)
        {
            // * only add uniforms to struct that are a member of a struct
            if (this._uniforms[i].isStructMember())
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[i]._structName + "}}";

                // * check if struct is not already part of shader
                if (!this._structNames.includes(this._uniforms[i]._structName))
                {
                    // * create struct definition with placeholder string to inject
                    const structDefinition = "struct "
                        + this._uniforms[i]._structName + " {".endl()
                        + injectionString
                        + "};".endl().endl();

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "frag")
                        structStrFrag = structStrFrag.concat(structDefinition);

                    if (this._uniforms[i].getShaderType() === "both" || this._uniforms[i].getShaderType() === "vert")
                        structStrVert = structStrVert.concat(structDefinition);

                    this._structNames.push(this._uniforms[i]._structName);
                    this._injectedStringsFrag[this._uniforms[i]._structName] = [];
                    this._injectedStringsVert[this._uniforms[i]._structName] = [];
                }

                // * create member & comment
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                let stringToInsert = "";
                if (this._uniforms[i].getGlslTypeString() == undefined)stringToInsert += "//";
                stringToInsert += "  " + this._uniforms[i].getGlslTypeString()
                        + " " + this._uniforms[i]._propertyName + ";"
                        + comment;

                if (this._uniforms[i].getShaderType() === "both")
                {
                    // * inject member before {injectionString}
                    if (
                        !this._injectedStringsFrag[this._uniforms[i]._structName].contains(stringToInsert)
                    && !this._injectedStringsVert[this._uniforms[i]._structName].contains(stringToInsert))
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "frag")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsFrag[this._uniforms[i]._structName].includes(stringToInsert)) //
                    {
                        const insertionIndexFrag = structStrFrag.lastIndexOf(injectionString);

                        structStrFrag =
                            structStrFrag.slice(0, insertionIndexFrag)
                            + stringToInsert + structStrFrag.slice(insertionIndexFrag - 1);

                        this._injectedStringsFrag[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesFrag.includes(i)) this._structUniformNamesIndicesFrag.push(i);
                }
                else if (this._uniforms[i].getShaderType() === "vert")
                {
                    // * inject member before {injectionString}
                    if (!this._injectedStringsVert[this._uniforms[i]._structName].includes(stringToInsert))
                    {
                        const insertionIndexVert = structStrVert.lastIndexOf(injectionString);

                        structStrVert =
                            structStrVert.slice(0, insertionIndexVert)
                            + stringToInsert + structStrVert.slice(insertionIndexVert - 1);

                        this._injectedStringsVert[this._uniforms[i]._structName].push(stringToInsert);
                    }

                    if (!this._structUniformNamesIndicesVert.includes(i)) this._structUniformNamesIndicesVert.push(i);
                }
            }
        }

        // * dedupe injected uni declarations
        this._uniDeclarationsFrag = [];
        this._uniDeclarationsVert = [];

        // * remove struct injection points and add uniform in fragment
        for (let i = 0; i < this._structUniformNamesIndicesFrag.length; i += 1)
        {
            const index = this._structUniformNamesIndicesFrag[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsFrag.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrFrag = structStrFrag.replace(injectionString, "");
                structStrFrag += uniDeclarationString;

                this._uniDeclarationsFrag.push(uniDeclarationString);
            }
        }

        // * remove struct injection points and add uniform in vertex
        for (let i = 0; i < this._structUniformNamesIndicesVert.length; i += 1)
        {
            const index = this._structUniformNamesIndicesVert[i];
            const uniDeclarationString = "UNI " + this._uniforms[index]._structName + " " + this._uniforms[index]._structUniformName + ";".endl();

            if (!this._uniDeclarationsVert.includes(uniDeclarationString))
            {
                const injectionString = "{{INJECTION_POINT_STRUCT_" + this._uniforms[index]._structName + "}}";

                structStrVert = structStrVert.replace(injectionString, "");
                structStrVert += uniDeclarationString;
                this._uniDeclarationsVert.push(uniDeclarationString);
            }
        }

        return [structStrVert, structStrFrag];
    };

    _getAttrSrc(attr, firstLevel)
    {
        const r = {};
        if (attr.name && attr.type)
        {
            r.srcHeadVert = "";
            if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "#define ATTRIB_" + attr.name.endl();
            r.srcHeadVert += "IN " + attr.type + " " + attr.name + ";".endl();
            if (!firstLevel) r.srcHeadVert += "#endif".endl();

            if (attr.nameFrag)
            {
                r.srcHeadVert += "";
                if (!firstLevel) r.srcHeadVert += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadVert += "OUT " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadVert += "#endif".endl();

                r.srcVert = "".endl() + attr.nameFrag + "=" + attr.name + ";";

                r.srcHeadFrag = "";
                if (!firstLevel) r.srcHeadFrag += "#ifndef ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "#define ATTRIB_" + attr.nameFrag.endl();
                r.srcHeadFrag += "IN " + attr.type + " " + attr.nameFrag + ";".endl();
                if (!firstLevel) r.srcHeadFrag += "#endif".endl();
            }
        }
        return r;
    };

    compile()
    {
        if (this._cgl.aborted) return;
        const startTime = performance.now();



        this._cgl.profileData.profileShaderCompiles++;
        this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";

        let extensionString = "";
        if (this._extensions)
            for (let i = 0; i < this._extensions.length; i++)
                extensionString += "#extension " + this._extensions[i] + " : enable".endl();

        let definesStr = "";
        if (this._defines.length) definesStr = "\n// cgl generated".endl();
        for (let i = 0; i < this._defines.length; i++)
            definesStr += "#define " + this._defines[i][0] + " " + this._defines[i][1] + "".endl();

        const structStrings = this.createStructUniforms();
        this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]");
        this._compileReason = "";



        if (this._uniforms)
        {
            // * we create an array of the uniform names to check our indices & an array to save them
            const uniNames = this._uniforms.map((uni) => { return uni._name; });
            const indicesToRemove = [];

            // * we go through our uniforms and check if the same name is contained somewhere further in the array
            // * if so, we add the current index to be removed later
            for (let i = 0; i < this._uniforms.length; i++)
            {
                const uni = this._uniforms[i];
                const nextIndex = uniNames.indexOf(uni._name, i + 1);
                if (nextIndex > -1) indicesToRemove.push(i);
            }

            // * after that, we go through the uniforms backwards (so we keep the order) and remove the indices
            // * also, we reset the locations of all the other valid uniforms
            for (let j = this._uniforms.length - 1; j >= 0; j -= 1)
            {
                if (indicesToRemove.includes(j)) this._uniforms.splice(j, 1);
                else this._uniforms[j].resetLoc();
            }
        }

        this._cgl.printError("uniform resets");

        if (this.hasTextureUniforms()) definesStr += "#define HAS_TEXTURES".endl();

        let vs = "";
        let fs = "";

        if (!this.srcFrag)
        {
            this._log.warn("[cgl shader] has no fragment source!", this._name, this);
            this.srcVert = getDefaultVertexShader();
            this.srcFrag = getDefaultFragmentShader();
            // return;
        }

        if (this.glslVersion == 300)
        {
            vs = "#version 300 es"
                .endl() + "// "
                .endl() + "// vertex shader " + this._name
                .endl() + "// "
                .endl() + "precision " + this.precision + " float;"
                .endl() + "precision " + this.precision + " sampler2D;"
                .endl() + ""
                .endl() + "#define WEBGL2"
                .endl() + "#define texture2D texture"
                .endl() + "#define UNI uniform"
                .endl() + "#define IN in"
                .endl() + "#define OUT out"
                .endl();

            fs = "#version 300 es"
                .endl() + "// "
                .endl() + "// fragment shader " + this._name
                .endl() + "// "
                .endl() + "precision " + this.precision + " float;"
                .endl() + "precision " + this.precision + " sampler2D;"
                .endl() + ""
                .endl() + "#define WEBGL2"
                .endl() + "#define texture2D texture"
                .endl() + "#define IN in"
                .endl() + "#define OUT out"
                .endl() + "#define UNI uniform"
                .endl() + "{{DRAWBUFFER}}"

                .endl();
        }
        else
        {
            fs = ""
                .endl() + "// "
                .endl() + "// fragment shader " + this._name
                .endl() + "// "
                .endl() + "#define WEBGL1"
                .endl() + "#define texture texture2D"
                .endl() + "#define outColor gl_FragColor"
                .endl() + "#define IN varying"
                .endl() + "#define UNI uniform"
                .endl();

            vs = ""
                .endl() + "// "
                .endl() + "// vertex shader " + this._name
                .endl() + "// "
                .endl() + "#define WEBGL1"
                .endl() + "#define texture texture2D"
                .endl() + "#define OUT varying"
                .endl() + "#define IN attribute"
                .endl() + "#define UNI uniform"
                .endl();
        }

        let uniformsStrVert = "\n// cgl generated".endl();
        let uniformsStrFrag = "\n// cgl generated".endl();


        fs += "\n// active mods: --------------- ";
        vs += "\n// active mods: --------------- ";

        let foundModsFrag = false;
        let foundModsVert = false;
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            for (let j = 0; j < this._modules.length; j++)
            {
                if (this._modules[j].name == this._moduleNames[i])
                {
                    if (this._modules[j].srcBodyFrag || this._modules[j].srcHeadFrag)
                    {
                        foundModsFrag = true;
                        fs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                    }
                    if (this._modules[j].srcBodyVert || this._modules[j].srcHeadVert)
                    {
                        vs += "\n// " + i + "." + j + ". " + this._modules[j].title + " (" + this._modules[j].name + ")";
                        foundModsVert = true;
                    }
                }
            }
        }
        if (!foundModsVert)fs += "\n// no mods used...";
        if (!foundModsFrag)fs += "\n// no mods used...";
        fs += "\n";
        vs += "\n";

        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                let uniStr = "";
                if (!this._uniforms[i].getGlslTypeString())uniStr += "// ";
                uniStr += "UNI " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName();
                let comment = "";
                if (this._uniforms[i].comment) comment = " // " + this._uniforms[i].comment;

                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both")
                    if (!this.srcVert.contains(uniStr) && !this.srcVert.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrVert += uniStr + ";" + comment.endl();

                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both")
                    if (!this.srcFrag.contains(uniStr) && !this.srcFrag.contains("uniform " + this._uniforms[i].getGlslTypeString() + " " + this._uniforms[i].getName()))
                        uniformsStrFrag += uniStr + ";" + comment.endl();
            }
        }


        let countUniFrag = 0;
        let countUniVert = 0;
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].shaderType && !this._uniforms[i].isStructMember())
            {
                if (this._uniforms[i].shaderType == "vert" || this._uniforms[i].shaderType == "both") countUniVert++;
                if (this._uniforms[i].shaderType == "frag" || this._uniforms[i].shaderType == "both") countUniFrag++;
            }
        }
        if (countUniFrag >= this._cgl.maxUniformsFrag) this._log.warn("[cgl_shader] num uniforms frag: " + countUniFrag + " / " + this._cgl.maxUniformsFrag);
        if (countUniVert >= this._cgl.maxUniformsVert) this._log.warn("[cgl_shader] num uniforms vert: " + countUniVert + " / " + this._cgl.maxUniformsVert);


        if (!fs.contains("precision")) fs = "precision " + this.precision + " float;".endl() + fs;
        if (!vs.contains("precision")) vs = "precision " + this.precision + " float;".endl() + vs;
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        {
            fs += "#define MOBILE".endl();
            vs += "#define MOBILE".endl();
        }
        vs = extensionString + vs + definesStr + structStrings[0] + uniformsStrVert + "\n// -- \n" + this.srcVert;
        fs = extensionString + fs + definesStr + structStrings[1] + uniformsStrFrag + "\n// -- \n" + this.srcFrag;


        let srcHeadVert = "";
        let srcHeadFrag = "";

        // testing if this breaks things...
        // this._modules.sort(function (a, b)
        // {
        //     return a.group - b.group;
        // });

        this._modules.sort(function (a, b)
        {
            return a.priority || 0 - b.priority || 0;
        });


        let addedAttribs = false;

        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";
            let srcFrag = "";

            if (!addedAttribs)
            {
                addedAttribs = true;

                for (let k = 0; k < this._attributes.length; k++)
                {
                    const r = this._getAttrSrc(this._attributes[k], true);
                    if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                    if (r.srcVert)srcVert += r.srcVert;
                    if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                }
            }

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";
                    srcHeadFrag += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";
                    srcFrag += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                            if (r.srcHeadFrag)srcHeadFrag += r.srcHeadFrag;
                        }

                    srcHeadVert += mod.srcHeadVert || "";
                    srcHeadFrag += mod.srcHeadFrag || "";
                    srcVert += mod.srcBodyVert || "";
                    srcFrag += mod.srcBodyFrag || "";

                    srcHeadVert += "\n//---- end mod ------\n";
                    srcHeadFrag += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";
                    srcFrag += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcFrag = srcFrag.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcFrag = srcFrag.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                    srcHeadFrag = srcHeadFrag.replace(/MOD_/g, mod.prefix);
                }
            }


            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
            fs = fs.replace("{{" + this._moduleNames[i] + "}}", srcFrag);
        }


        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        fs = fs.replace("{{MODULES_HEAD}}", srcHeadFrag);


        vs = this._addLibs(vs);
        fs = this._addLibs(fs);


        // SETUP draw buffers / multi texture render targets

        let drawBufferStr = "";
        for (let i = 0; i < 16; i++)
            if (fs.contains("outColor" + i)) this._drawBuffers[i] = true;

        if (this._drawBuffers.length == 1)
        {
            drawBufferStr = "out vec4 outColor;".endl();
            drawBufferStr += "#define gl_FragColor outColor".endl();
        }
        else
        {
            drawBufferStr += "#define MULTI_COLORTARGETS".endl();
            drawBufferStr += "vec4 outColor;".endl();

            let count = 0;
            for (let i = 0; i < this._drawBuffers.length; i++)
            {
                if (count == 0) drawBufferStr += "#define gl_FragColor outColor" + i + "".endl();
                drawBufferStr += "layout(location = " + i + ") out vec4 outColor" + i + ";".endl();
                count++;
            }
        }

        fs = fs.replace("{{DRAWBUFFER}}", drawBufferStr);
        // //////


        if (!this._program)
        {
            this._program = this._createProgram(vs, fs);
        }
        else
        {
            // this.vshader=createShader(vs, gl.VERTEX_SHADER, this.vshader );
            // this.fshader=createShader(fs, gl.FRAGMENT_SHADER, this.fshader );
            // linkProgram(program);
            this._program = this._createProgram(vs, fs);

            this._projMatrixUniform = null;

            for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
        }

        this.finalShaderFrag = fs;
        this.finalShaderVert = vs;


        MESH.lastMesh = null;
        MESH.lastShader = null;

        this._countMissingUniforms = 0;
        this._needsRecompile = false;
        this.lastCompile = now();

        // this._cgl.printError("shader compile");

        this._cgl.profileData.shaderCompileTime += performance.now() - startTime;
    };

    hasChanged()
    {
        return this._needsRecompile;
    }


    bind()
    {
        if (!this._isValid || this._cgl.aborted) return;

        MESH.lastShader = this;

        if (!this._program || this._needsRecompile) this.compile();
        if (!this._isValid) return;

        if (!this._projMatrixUniform && !this.ignoreMissingUniforms)
        {
            this._countMissingUniforms++;
            // if (this._countMissingUniforms == 10)console.log("stopping getlocation of missing uniforms...", this._name);
            if (this._countMissingUniforms < 10)
            {
                this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_PROJMAT);
                this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_VERTEX_POSITION);
                this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix");
                this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWMAT);
                this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MODELMAT);
                this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_VIEWPOS);
                this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_NORMALMAT);
                this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVVIEWMAT);
                this._inverseProjMatrixUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_INVPROJMAT);
                this._materialIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_MATERIALID);
                this._objectIdUniform = this._cgl.gl.getUniformLocation(this._program, constants_CONSTANTS.SHADER.SHADERVAR_UNI_OBJECTID);

                for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].needsUpdate = true;
            }
        }


        if (this._cgl.currentProgram != this._program)
        {
            this._cgl.profileData.profileShaderBinds++;
            this._cgl.gl.useProgram(this._program);
            this._cgl.currentProgram = this._program;
        }

        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].needsUpdate) this._uniforms[i].updateValue();

        if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount())
        {
            this._pMatrixState = this._cgl.getProjectionMatrixStateCount();
            this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, false, this._cgl.pMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._objectIdUniform)
            this._cgl.gl.uniform1f(this._objectIdUniform, ++this._cgl.tempData.objectIdCounter);

        if (this._materialIdUniform)
            this._cgl.gl.uniform1f(this._materialIdUniform, this._materialId);

        if (this._vMatrixUniform)
        {
            if (this._vMatrixState != this._cgl.getViewMatrixStateCount())
            {
                this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, false, this._cgl.vMatrix);
                this._cgl.profileData.profileMVPMatrixCount++;
                this._vMatrixState = this._cgl.getViewMatrixStateCount();

                if (this._inverseViewMatrixUniform)
                {
                    mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, false, this._tempInverseViewMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
                if (this._inverseProjMatrixUniform)
                {
                    mat4.invert(this._tempInverseProjMatrix, this._cgl.pMatrix);
                    this._cgl.gl.uniformMatrix4fv(this._inverseProjMatrixUniform, false, this._tempInverseProjMatrix);
                    this._cgl.profileData.profileMVPMatrixCount++;
                }
            }
            this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, false, this._cgl.mMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;

            if (this._camPosUniform)
            {
                mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix);
                this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]);
                this._cgl.profileData.profileMVPMatrixCount++;
            }
        }
        else
        {
            // mvmatrix deprecated....
            const tempmv = mat4.create();

            mat4.mul(tempmv, this._cgl.vMatrix, this._cgl.mMatrix);
            this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, false, tempmv);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        if (this._normalMatrixUniform)
        {
            // mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix);
            mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);

            this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, false, this._tempNormalMatrix);
            this._cgl.profileData.profileMVPMatrixCount++;
        }

        for (let i = 0; i < this._libs.length; i++)
        {
            if (this._libs[i].onBind) this._libs[i].onBind.bind(this._libs[i])(this._cgl, this);
        }

        this._bindTextures();

        return this._isValid;
    };

    unBind()
    {
    };


    dispose()
    {
        this._cgl.gl.deleteProgram(this._program);
    };

    needsRecompile()
    {
        return this._needsRecompile;
    };

    setDrawBuffers(arr)
    {
        console.log("useless drawbuffers...?!");
        // if (this._drawBuffers.length !== arr.length)
        // {
        //     this._drawBuffers = arr;
        //     this._needsRecompile = true;
        //     this.setWhyCompile("setDrawBuffers");
        //     return;
        // }
        // for (let i = 0; i < arr.length; i++)
        // {
        //     if (arr[i] !== this._drawBuffers[i])
        //     {
        //         this._drawBuffers = arr;
        //         this._needsRecompile = true;
        //         this.setWhyCompile("setDrawBuffers");
        //         return;
        //     }
        // }
    };

    getUniforms()
    {
        return this._uniforms;
    };

    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
            if (this._uniforms[i].getName() == name)
                return this._uniforms[i];
        return null;
    };

    removeAllUniforms()
    {
        this._uniforms = [];
        // for (let i = 0; i < this._uniforms.length; i++)
        //     this.removeUniform(this._uniforms[i].name);
    };

    removeUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name)
            {
                this._uniforms.splice(i, 1);
            }
        }
        this._needsRecompile = true;
        this.setWhyCompile("remove uniform " + name);
    };


    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    };

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {CGL.Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";
        return uni;
    };

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {CGL.Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";
        return uni;
    };
    /**
     * add a uniform to both shaders
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformBoth
     * @returns {CGL.Uniform}
     */
    addUniformBoth(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new CGL.Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    };

    /**
     * add a struct & its uniforms to the fragment shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructFrag
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructFrag("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructFrag(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "frag";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    /**
     * add a struct & its uniforms to the vertex shader
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructVert
     * @returns {CGL.Uniform}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructVert("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructVert(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "vert";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    /**
     * add a struct & its uniforms to the both shaders. PLEASE NOTE: it is not possible to add the same struct to both shaders when it contains ANY integer members.
     * @param {String} structName name of the struct, i.e.: LightStruct
     * @param {String} uniformName name of the struct uniform in the shader, i.e.: lightUni
     * @param {Array} members array of objects containing the struct members. see example for structure

     * @memberof Shader
     * @instance
     * @function addUniformStructBoth
     * @returns {Object}
     * @example
     * const shader = new CGL.Shader(cgl, 'MinimalMaterial');
     * shader.setSource(attachments.shader_vert, attachments.shader_frag);
     * shader.addUniformStructBoth("Light", "uniformLight", [
     * { "type": "3f", "name": "position", "v1": null },
     * { "type": "4f", "name": "color", "v1": inR, v2: inG, v3: inB, v4: inAlpha }
     * ]);
     */
    addUniformStructBoth(structName, uniformName, members)
    {
        const uniforms = {};

        if (!members) return uniforms;

        for (let i = 0; i < members.length; i += 1)
        {
            const member = members[i];
            if ((member.type === "2i" || member.type === "i" || member.type === "3i"))
                this._log.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", structName, " with member:", member.name, " of type:", member.type, ".");
            if (!this.hasUniform(uniformName + "." + member.name))
            {
                const uni = new CGL.Uniform(this, member.type, uniformName + "." + member.name, member.v1, member.v2, member.v3, member.v4, uniformName, structName, member.name);
                uni.shaderType = "both";
                uniforms[uniformName + "." + member.name] = uni;
            }
        }

        return uniforms;
    };

    hasUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return true;
        }
        return false;
    };

    _createProgram(vstr, fstr)
    {
        this._cgl.printError("before _createprogram");

        const program = this._cgl.gl.createProgram();

        this.vshader = Shader.createShader(this._cgl, vstr, this._cgl.gl.VERTEX_SHADER, this);
        this.fshader = Shader.createShader(this._cgl, fstr, this._cgl.gl.FRAGMENT_SHADER, this);


        if (this.vshader && this.fshader)
        {
            this._cgl.gl.attachShader(program, this.vshader);
            this._cgl.gl.attachShader(program, this.fshader);

            this._linkProgram(program, vstr, fstr);
        }
        else
        {
            this._isValid = false;
            this._cgl.printError("shader _createProgram");
            this._log.error("could not link shaderprogram");
            return null;
        }

        this._cgl.printError("shader _createProgram");
        return program;
    };

    hasErrors()
    {
        return this._hasErrors;
    };

    _linkProgram(program, vstr, fstr)
    {
        this._cgl.printError("before _linkprogram");

        if (this._feedBackNames.length > 0)
        {
            this._cgl.gl.transformFeedbackVaryings(program, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS);
            // INTERLEAVED_ATTRIBS
            // SEPARATE_ATTRIBS
        }

        this._cgl.gl.linkProgram(program);
        this._cgl.printError("gl.linkprogram");
        this._isValid = true;

        this._hasErrors = false;

        if (this._cgl.patch.config.glValidateShader !== false)
        {
            this._cgl.gl.validateProgram(program);

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.VALIDATE_STATUS))
            {
                // validation failed
                console.log("shaderprogram validation failed...");
                console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
            }

            if (!this._cgl.gl.getProgramParameter(program, this._cgl.gl.LINK_STATUS))
            {
                this._hasErrors = true;

                const infoLogFrag = this._cgl.gl.getShaderInfoLog(this.fshader);
                const infoLogVert = this._cgl.gl.getShaderInfoLog(this.vshader);

                if (infoLogFrag) this._log.warn(this._cgl.gl.getShaderInfoLog(this.fshader));
                if (infoLogVert) this._log.warn(this._cgl.gl.getShaderInfoLog(this.vshader));

                this._log.error(this._name + " shader linking fail...");

                console.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(program));
                console.log(this);
                this._isValid = false;

                this._name = "errorshader";
                this.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
                this._cgl.printError("shader link err");
            }
        }
    };

    getProgram()
    {
        return this._program;
    };

    setFeedbackNames(names)
    {
        this.setWhyCompile("setFeedbackNames");
        this._needsRecompile = true;
        this._feedBackNames = names;
    };

    // getDefaultVertexShader()
    // {
    //     return defaultShaderSrcVert;
    // }

    // getDefaultFragmentShader()
    // {
    //     return this.getDefaultFragmentShader()
    // }


    /**
      * adds attribute definition to shader header without colliding with other shader modules...
     * when attrFrag is defined, vertex shader will output this attribute to the fragment shader
     * @function
     * @memberof Shader
     * @instance
     * @param {Object} attr {type:x,name:x,[nameFrag:x]}
     * @return {Object}
     */
    addAttribute = function (attr)
    {
        for (let i = 0; i < this._attributes.length; i++)
        {
            if (this._attributes[i].name == attr.name && this._attributes[i].nameFrag == attr.nameFrag) return;
        }
        this._attributes.push(attr);
        this._needsRecompile = true;
        this.setWhyCompile("addAttribute");
    };

    bindTextures()
    {
        this._bindTextures();
    }
    _bindTextures()
    {
        if (this._textureStackTex.length > this._cgl.maxTextureUnits)
        {
            this._log.warn("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);
        }

        // for (let i = this._textureStackTex.length + 1; i < this._cgl.maxTextureUnits; i++) this._cgl.setTexture(i, null);

        for (let i = 0; i < this._textureStackTex.length; i++)
        {
            // console.log(this._textureStackTex.length, i);
            if (!this._textureStackTex[i] && !this._textureStackTexCgl[i])
            {
                this._log.warn("no texture for pushtexture", this._name);
            }
            else
            {
                let t = this._textureStackTex[i];
                if (this._textureStackTexCgl[i])
                {
                    t = this._textureStackTexCgl[i].tex || CGL.Texture.getEmptyTexture(this._cgl).tex;
                }

                let bindOk = true;

                if (!this._textureStackUni[i])
                {
                    // throw(new Error('no uniform given to texturestack'));
                    this._log.warn("no uniform for pushtexture", this._name);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);
                }
                else
                {
                    this._textureStackUni[i].setValue(i);
                    bindOk = this._cgl.setTexture(i, t, this._textureStackType[i]);

                    // console.log(bindOk, i, t, this._textureStackType[i]);
                }
                if (!bindOk) console.warn("tex bind failed", this.getName(), this._textureStackUni[i]);
            }
        }
    };

    setUniformTexture = function (uni, tex)
    {
        tex = tex || CGL.Texture.getTempTexture(this._cgl);
        for (let i = 0; i < this._textureStackUni.length; i++)
            if (this._textureStackUni[i] == uni)
            {
                const old = this._textureStackTex[i] || this._textureStackTexCgl[i];
                if (tex.hasOwnProperty("tex"))
                {
                    this._textureStackTexCgl[i] = tex;
                    this._textureStackTex[i] = null;
                }
                else
                {
                    this._textureStackTexCgl[i] = null;
                    this._textureStackTex[i] = tex;
                }

                // this._textureStackTex[i] = tex;
                // this._cgl.setTexture(i, tex, this._textureStackType[i]);
                return old;
            }
        return null;
    };

    /**
     * push a texture on the stack. those textures will be bound when binding the shader. texture slots are automatically set
     * @param {uniform} uniform texture uniform
     * @param {texture} t texture
     * @param {type} type texture type, can be ignored when TEXTURE_2D
     * @function pushTexture
     * @memberof Shader
     * @instance
     */
    pushTexture = function (uniform, t, type)
    {
        if (!uniform)
        {
            // console.log("pushtexture: no uniform given to texturestack", "shader:"+this._name,uniform,t,type);
            return;
        }
        if (!t)
        {
            // if(uniform)this._log.warn("pushtexture: no tex","shader:"+this._name," uniform:"+uniform.name);
            return;
        }
        if (!t.hasOwnProperty("tex") && !(t instanceof WebGLTexture))
        {
            this._log.warn(new Error("invalid texture").stack);

            this._log.warn("[cgl_shader] invalid texture...", t);
            return;
        }

        this._textureStackUni.push(uniform);

        if (t.hasOwnProperty("tex"))
        {
            this._textureStackTexCgl.push(t);
            this._textureStackTex.push(null);
        }
        else
        {
            this._textureStackTexCgl.push(null);
            this._textureStackTex.push(t);
        }

        this._textureStackType.push(type);
    };

    /**
     * pop last texture
     * @function popTexture
     * @memberof Shader
     * @instance
     */
    popTexture = function ()
    {
        this._textureStackUni.pop();
        this._textureStackTex.pop();
        this._textureStackTexCgl.pop();
        this._textureStackType.pop();
    };

    /**
     * pop all textures
     * @function popTextures
     * @memberof Shader
     * @instance
     */
    popTextures = function ()
    {
        this._textureStackTex.length =
        this._textureStackTexCgl.length =
        this._textureStackType.length =
        this._textureStackUni.length = 0;
    };

    getMaterialId()
    {
        return this._materialId;
    };

    getInfo()
    {
        const info = {};
        info.name = this._name;
        // info.modules = JSON.parse(JSON.stringify(this._modules));
        // info.defines = JSON.parse(JSON.stringify(this._defines));
        info.defines = this.getDefines();
        info.hasErrors = this.hasErrors();

        return info;
    };


    getDefaultFragmentShader=function(r,g,b,a)
    {
        return getDefaultFragmentShader(r,g,b,a);
    }

    getDefaultVertexShader=function()
    {
        return getDefaultVertexShader();
    }


}

























// --------------------------

Shader.getDefaultVertexShader=getDefaultVertexShader;
Shader.getDefaultFragmentShader=getDefaultFragmentShader;


Shader.getErrorFragmentShader = function ()
{
    return ""
        .endl() + "void main()"
        .endl() + "{"
        .endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;"
        .endl() + "   g= step(0.1,g);"
        .endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);"
        .endl() + "}";
};

Shader.createShader = function (cgl, str, type, cglShader)
{
    if (cgl.aborted) return;

    // cgl.printError("[Shader.createShader] ", cglShader._name);

    function getBadLines(infoLog)
    {
        const basLines = [];
        const lines = infoLog.split("\n");
        for (const i in lines)
        {
            const divide = lines[i].split(":");
            if (parseInt(divide[2], 10)) basLines.push(parseInt(divide[2], 10));
        }
        return basLines;
    }


    const shader = cgl.gl.createShader(type);
    cgl.gl.shaderSource(shader, str);
    cgl.gl.compileShader(shader);

    if (!cgl.gl.getShaderParameter(shader, cgl.gl.COMPILE_STATUS))
    {
        let infoLog = cgl.gl.getShaderInfoLog(shader);
        if (!infoLog)
        {
            console.warn("empty shader info log", this._name);
            return;
        }


        const badLines = getBadLines(infoLog);
        let htmlWarning = "<pre style=\"margin-bottom:0px;\"><code class=\"shaderErrorCode language-glsl\" style=\"padding-bottom:0px;max-height: initial;max-width: initial;\">";
        const lines = str.match(/^.*((\r\n|\n|\r)|$)/gm);

        if (!cgl.aborted && infoLog)
        {
            if (type == cgl.gl.VERTEX_SHADER) console.log("VERTEX_SHADER");
            if (type == cgl.gl.FRAGMENT_SHADER) console.log("FRAGMENT_SHADER");

            for (const i in lines)
            {
                const j = parseInt(i, 10) + 1;
                const line = j + ": " + lines[i];

                let isBadLine = false;
                for (const bj in badLines)
                    if (badLines[bj] == j) isBadLine = true;

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\"background-color:#660000;padding-top:0px;padding-bottom:0px\">";

                    cglShader._log.log("bad line: `" + line + "`");
                }
                htmlWarning += escapeHTML(line);

                if (isBadLine)
                {
                    htmlWarning += "</code></pre>";
                    htmlWarning += "<pre style=\"margin:0\"><code class=\"language-glsl\" style=\";padding-top:0px;padding-bottom:0px\">";
                }
            }
        }

        infoLog = infoLog.replace(/\n/g, "<br/>");
        if (cgl.patch.isEditorMode())console.log("Shader error ", cglShader._name, infoLog, this);

        htmlWarning = infoLog + "<br/>" + htmlWarning + "<br/><br/>";
        htmlWarning += "</code></pre>";

        if (this._fromUserInteraction)
        {
            // console.log("todo show modal?");
            // cgl.patch.emitEvent("criticalError", { "title": "Shader error " + cglShader._name, "text": htmlWarning, "exception": { "message": infoLog } });
        }

        cglShader.setSource(Shader.getDefaultVertexShader(), Shader.getErrorFragmentShader());
    }
    else
    {
        // console.log(name+' shader compiled...');
    }
    // cgl.printError("shader create2");
    return shader;
};













;// CONCATENATED MODULE: ./src/core/cgl/cgl_profiledata.js
class ProfileData
{
    constructor(cgl)
    {
        this._cgl = cgl;
        this._lastTime = 0;
        this.pause = false;
        this.profileUniformCount = 0;
        this.profileShaderBinds = 0;
        this.profileUniformCount = 0;
        this.profileShaderCompiles = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileEffectBuffercreate = 0;
        this.profileShaderGetUniform = 0;
        this.profileFrameBuffercreate = 0;
        this.profileMeshSetGeom = 0;
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileOnAnimFrameOps = 0;

        this.profileFencedPixelRead = 0;
        this.profileMainloopMs = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.shaderCompileTime = 0;
        this.profileMeshNumElements = 0;
        this.profileMeshAttributes = 0;
        this.profileSingleMeshAttribute = [];
        this.heavyEvents = [];

        this.doProfileGlQuery = false;
        this.glQueryData = {};
    }

    clear()
    {
        this.profileSingleMeshAttribute = {};
        this.profileMeshAttributes = 0;
        this.profileUniformCount = 0;
        this.profileShaderGetUniform = 0;
        this.profileShaderCompiles = 0;
        this.profileShaderBinds = 0;
        this.profileTextureResize = 0;
        this.profileFrameBuffercreate = 0;
        this.profileEffectBuffercreate = 0;
        this.profileTextureDelete = 0;
        this.profileMeshSetGeom = 0;
        this.profileVideosPlaying = 0;
        this.profileMVPMatrixCount = 0;
        this.profileNonTypedAttrib = 0;
        this.profileNonTypedAttribNames = "";
        this.profileTextureNew = 0;
        this.profileGenMipMap = 0;
        this.profileFramebuffer = 0;
        this.profileMeshDraw = 0;
        this.profileTextureEffect = 0;
        this.profileTexPreviews = 0;
        this.profileMeshNumElements = 0;
        this.profileFencedPixelRead = 0;
    }

    clearGlQuery()
    {
        for (let i in this.glQueryData)
        {
            if (!this.glQueryData[i].lastClear || performance.now() - this.glQueryData[i].lastClear > 1000)
            {
                this.glQueryData[i].time = this.glQueryData[i]._times / this.glQueryData[i]._numcount;
                this.glQueryData[i].num = this.glQueryData[i]._numcount;

                this.glQueryData[i]._times = 0;
                this.glQueryData[i]._numcount = 0;
                this.glQueryData[i].lastClear = performance.now();
            }
        }
    }

    addHeavyEvent(event, name, info)
    {
        const e = { "event": event, "name": name, "info": info, "date": performance.now() };
        this.heavyEvents.push(e);
        this._cgl.emitEvent("heavyEvent", e);
    }
}




;// CONCATENATED MODULE: ../shared/client/src/helper.js
/**
 * Shared helper methods for cables uis
 */
class Helper
{
    constructor()
    {
        this._simpleIdCounter = 0;
    }


    /**
     * generate a random v4 uuid
     *
     * @return {string}
     */
    uuid()
    {
        let d = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
        {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        });
    }

    /**
     * checks value for !isNan and isFinite
     *
     * @param n
     * @return {boolean}
     */
    isNumeric(n)
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * generate a simple ID using an internal counter
     *
     * @return {Number} new id
     * @static
     */
    simpleId()
    {
        this._simpleIdCounter++;
        return this._simpleIdCounter;
    }

    deletePropertyByPath(obj, path)
    {
        if (!obj || !path)
        {
            return;
        }

        if (typeof path === "string")
        {
            path = path.split(".");
        }

        for (let i = 0; i < path.length - 1; i++)
        {
            obj = obj[path[i]];

            if (typeof obj === "undefined")
            {
                return;
            }
        }

        delete obj[path.pop()];
    }
}
/* harmony default export */ const helper = (new Helper());

;// CONCATENATED MODULE: ../shared/client/src/eventtarget.js



/**
 * add eventlistener functionality to classes
 */
class Events
{
    constructor()
    {
        this._log = new Logger("eventtarget");
        this._eventCallbacks = {};
        this._logName = "";
        this._logEvents = false;
        this._listeners = {};

        this.on = this.addEventListener;
        this.off = this.removeEventListener;
    }

    /**
     * add event listener
     * @param which event name
     * @param cb callback
     * @param {string} idPrefix prefix for id, default empty
     * @return {string} event id
     */
    addEventListener(which, cb, idPrefix = "")
    {
        const event =
            {
                "id": (idPrefix || "") + helper.simpleId(),
                "name": which,
                "cb": cb,
            };
        if (!this._eventCallbacks[which]) this._eventCallbacks[which] = [event];
        else this._eventCallbacks[which].push(event);

        this._listeners[event.id] = event;

        return event.id;
    }

    /**
     * check event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return {boolean}
     */
    hasEventListener(id, cb = null)
    {
        if (id && !cb)
        {
            // check by id
            return !!this._listeners[id];
        }
        else
        {
            this._log.warn("old eventtarget function haseventlistener!");
            if (id && cb)
            {
                if (this._eventCallbacks[id])
                {
                    const idx = this._eventCallbacks[id].indexOf(cb);
                    return idx !== -1;
                }
            }
        }
    }

    /**
     * check event listener by name
     * @param eventName event name
     * @return {boolean}
     */
    hasListenerForEventName(eventName)
    {
        return this._eventCallbacks[eventName] && this._eventCallbacks[eventName].length > 0;
    }

    /**
     * rempve event listener registration
     * @param id event id
     * @param cb callback - deprecated
     * @return
     */
    removeEventListener(id, cb = null)
    {
        if (id === null || id === undefined) return;

        if (!cb) // new style, remove by id, not by name/callback
        {
            const event = this._listeners[id];
            if (!event)
            {
                this._log.log("could not find event...", id, this);
                return;
            }

            let found = true;
            while (found)
            {
                found = false;
                let index = -1;
                for (let i = 0; i < this._eventCallbacks[event.name].length; i++)
                {
                    if (this._eventCallbacks[event.name][i].id.indexOf(id) === 0) // this._eventCallbacks[event.name][i].id == which ||
                    {
                        found = true;
                        index = i;
                    }
                }

                if (index !== -1)
                {
                    this._eventCallbacks[event.name].splice(index, 1);
                    delete this._listeners[id];
                }
            }

            return;
        }

        this._log.info("[eventtaget] ", "old function signature: removeEventListener! use listener id");
        this._log.log((new Error()).stack);

        let index = null;
        for (let i = 0; i < this._eventCallbacks[id].length; i++)
            if (this._eventCallbacks[id][i].cb === cb)
                index = i;

        if (index !== null)
        {
            delete this._eventCallbacks[index];
        }
        else this._log.warn("removeEventListener not found " + id);
    }

    /**
     * enable/disable logging of events for the class
     *
     * @param {boolean} enabled
     * @param {string} logName
     */
    logEvents(enabled, logName)
    {
        this._logEvents = enabled;
        this._logName = logName;
    }

    /**
     * emit event
     *
     * @param {string} which event name
     * @param {*} param1
     * @param {*} param2
     * @param {*} param3
     * @param {*} param4
     * @param {*} param5
     * @param {*} param6
     */
    emitEvent(which, param1 = null, param2 = null, param3 = null, param4 = null, param5 = null, param6 = null)
    {
        if (this._logEvents) this._log.log("[event] ", this._logName, which, this._eventCallbacks);

        if (this._eventCallbacks[which])
        {
            for (let i = 0; i < this._eventCallbacks[which].length; i++)
            {
                if (this._eventCallbacks[which][i])
                {
                    this._eventCallbacks[which][i].cb(param1, param2, param3, param4, param5, param6);
                }
            }
        }
        else
        {
            if (this._logEvents) this._log.log("[event] has no event callback", which, this._eventCallbacks);
        }
    }
}


;// CONCATENATED MODULE: ./src/core/cg/cg_canvas.js
class CgCanvas
{
    constructor(options)
    {
        if (!options)
        {
            console.error("CgCanvas no options");
        }
        else
        {
            this._canvasEle = options.canvasEle;
        }

        if (!options.cg)console.error("CgCanvas options has no cg");
        if (!options.canvasEle)console.error("CgCanvas options has no canvasEle");

        this._cg = options.cg;
        this.pixelDensity = 1;
        this.canvasWidth = this.canvasEle.clientWidth;
        this.canvasHeight = this.canvasEle.clientHeight;

        this._oldWidthRp = -1;
        this._oldHeightRp = -1;

        this.setSize(this.canvasWidth, this.canvasHeight);
    }

    get canvasEle() { return this._canvasEle; }


    setSize(w, h, ignorestyle)
    {
        if (this._oldWidthRp != w * this.pixelDensity || this._oldHeightRp != h * this.pixelDensity)
        {
            this._oldWidthRp = this.canvasEle.width = w * this.pixelDensity;
            this._oldHeightRp = this.canvasEle.height = h * this.pixelDensity;

            if (!ignorestyle)
            {
                this.canvasEle.style.width = w + "px";
                this.canvasEle.style.height = h + "px";
            }

            this.updateSize();

            this._cg.emitEvent("resize");
        }
    }

    updateSize()
    {
        this.canvasEle.width = this.canvasWidth = this.canvasEle.clientWidth * this.pixelDensity;
        this.canvasEle.height = this.canvasHeight = this.canvasEle.clientHeight * this.pixelDensity;
    }

    dispose()
    {
        this._canvasEle.remove();
        this._canvasEle = null;
    }
}



;// CONCATENATED MODULE: ./src/core/cg/cg_matrixstack.js

const MatrixStack = function ()
{
    this._arr = [mat4.create()];
    this._index = 0;
    this.stateCounter = 0;
};

MatrixStack.prototype.push = function (m)
{
    this._index++;
    this.stateCounter++;

    if (this._index == this._arr.length)
    {
        const copy = mat4.create();
        this._arr.push(copy);
    }

    mat4.copy(this._arr[this._index], m || this._arr[this._index - 1]);

    return this._arr[this._index];
};

MatrixStack.prototype.pop = function ()
{
    this.stateCounter++;

    this._index--;
    if (this._index < 0) this._index = 0;

    return this._arr[this._index];
};

MatrixStack.prototype.length = function ()
{
    return this._index;
};



;// CONCATENATED MODULE: ./src/core/cg/cg_state.js




class CGState extends Events
{
    constructor(_patch)
    {
        super();
        this.tempData = this.frameStore = this.frameStore || {};
        // this.canvas = null;

        this.fpsCounter = new CABLES.CG.FpsCounter();
        this._identView = vec3.create();
        this._ident = vec3.create();
        vec3.set(this._identView, 0, 0, -2);
        vec3.set(this._ident, 0, 0, 0);

        this.patch = _patch;
        this.autoReSize = true;

        this.DEPTH_COMPARE_FUNC_NEVER = 0;
        this.DEPTH_COMPARE_FUNC_LESS = 1;
        this.DEPTH_COMPARE_FUNC_EQUAL = 2;
        this.DEPTH_COMPARE_FUNC_LESSEQUAL = 3;
        this.DEPTH_COMPARE_FUNC_GREATER = 4;
        this.DEPTH_COMPARE_FUNC_NOTEQUAL = 5;
        this.DEPTH_COMPARE_FUNC_GREATEREQUAL = 6;
        this.DEPTH_COMPARE_FUNC_ALWAYS = 7;


        /**
         * Current projection matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.pMatrix = mat4.create();

        /**
         * Current model matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.mMatrix = mat4.create();

        /**
         * Current view matrix
         * @memberof Context
         * @instance
         * @type {mat4}
         */
        this.vMatrix = mat4.create();
        this._textureslots = [];

        this._pMatrixStack = new MatrixStack();
        this._mMatrixStack = new MatrixStack();
        this._vMatrixStack = new MatrixStack();

        this.canvasScale = 1;

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);


        window.matchMedia("screen and (min-resolution: 2dppx)")
            .addEventListener("change", (e) =>
            {
                this.emitEvent("resize");
            });
    }

    get canvasWidth()
    {
        return this.cgCanvas.canvasWidth;
    }

    get canvasHeight()
    {
        return this.cgCanvas.canvasHeight;
    }

    set pixelDensity(p)
    {
        if (this.cgCanvas.pixelDensity != p)
        {
            this.cgCanvas.pixelDensity = p;
            this.cgCanvas.updateSize();
            this.emitEvent("resize");
        }
    }

    get pixelDensity()
    {
        return this.cgCanvas.pixelDensity;
    }


    getGApiName()
    {
        return ["WebGL", "WebGPU"][this.gApi];
    }

    get canvas()
    {
        return this.cgCanvas.canvasEle;
    }



    setCanvas(canvEle)
    {
        if (this.cgCanvas && canvEle == this.cgCanvas.canvasEle) return;
        if (typeof canvEle === "string") canvEle = document.getElementById(canvEle);

        this.cgCanvas = new CgCanvas({ "canvasEle": canvEle, "cg": this });

        canvEle.parentElement.classList.add("cablesContainer");
        if (this._setCanvas) this._setCanvas(canvEle);

        this.updateSize();
    }

    updateSize()
    {
        this.cgCanvas.updateSize();
    }

    setSize(w, h, ignorestyle)
    {
        this.cgCanvas.setSize(w, h, ignorestyle);
    }

    _resizeToWindowSize()
    {
        if (this.autoReSize)
        {
            this.setSize(window.innerWidth, window.innerHeight);
            this.updateSize();
        }
    }

    _resizeToParentSize()
    {
        if (this.autoReSize)
        {
            const p = this.canvas.parentElement;
            if (!p)
            {
                this._log.error("cables: can not resize to container element");
                return;
            }

            this.setSize(p.clientWidth, p.clientHeight);
            this.updateSize();
        }
    }

    setAutoResize(parent)
    {
        window.removeEventListener("resize", this._resizeToWindowSize.bind(this));
        window.removeEventListener("resize", this._resizeToParentSize.bind(this));

        if (parent == "window")
        {
            window.addEventListener("resize", this._resizeToWindowSize.bind(this));
            window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this));
            this._resizeToWindowSize();
        }
        if (parent == "parent")
        {
            window.addEventListener("resize", this._resizeToParentSize.bind(this));
            this._resizeToParentSize();
        }
    }

    /**
     * push a matrix to the projection matrix stack
     * @function pushPMatrix
     * @memberof Context
     * @instance
     */
    pushPMatrix()
    {
        this.pMatrix = this._pMatrixStack.push(this.pMatrix);
    }

    /**
      * pop projection matrix stack
      * @function popPMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current projectionmatrix
      */
    popPMatrix()
    {
        this.pMatrix = this._pMatrixStack.pop();
        return this.pMatrix;
    }

    getProjectionMatrixStateCount()
    {
        return this._pMatrixStack.stateCounter;
    }

    /**
      * push a matrix to the model matrix stack
      * @function pushModelMatrix
      * @memberof Context
      * @instance
      * @example
      * // see source code of translate op:
      * cgl.pushModelMatrix();
      * mat4.translate(cgl.mMatrix,cgl.mMatrix, vec);
      * trigger.trigger();
      * cgl.popModelMatrix();
      */
    pushModelMatrix()
    {
        this.mMatrix = this._mMatrixStack.push(this.mMatrix);
    }

    /**
      * pop model matrix stack
      * @function popModelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    popModelMatrix()
    {
        // todo: DEPRECATE
        // if (this._mMatrixStack.length === 0) throw "Invalid modelview popMatrix!";
        this.mMatrix = this._mMatrixStack.pop();
        return this.mMatrix;
    }

    /**
      * get model matrix
      * @function modelMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current modelmatrix
      */
    modelMatrix()
    {
        return this.mMatrix;
    }


    /**
     * push a matrix to the view matrix stack
     * @function pushviewMatrix
     * @memberof Context
     * @instance
     */
    pushViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.push(this.vMatrix);
    }

    /**
      * pop view matrix stack
      * @function popViewMatrix
      * @memberof Context
      * @instance
      * @returns {mat4} current viewmatrix
      * @function
      */
    popViewMatrix()
    {
        this.vMatrix = this._vMatrixStack.pop();
    }

    getViewMatrixStateCount()
    {
        return this._vMatrixStack.stateCounter;
    }

    _startMatrixStacks(identTranslate, identTranslateView)
    {
        identTranslate = identTranslate || this._ident;
        identTranslateView = identTranslateView || this._identView;

        mat4.perspective(this.pMatrix, 45, this.canvasWidth / this.canvasHeight, 0.1, 1000.0);

        mat4.identity(this.mMatrix);
        mat4.identity(this.vMatrix);
        mat4.translate(this.mMatrix, this.mMatrix, identTranslate);
        mat4.translate(this.vMatrix, this.vMatrix, identTranslateView);

        this.pushPMatrix();
        this.pushModelMatrix();
        this.pushViewMatrix();
    }

    _endMatrixStacks()
    {
        this.popViewMatrix();
        this.popModelMatrix();
        this.popPMatrix();
    }

    dispose()
    {
        this.aborted = true;
        if (this.cgCanvas) this.cgCanvas.dispose();
        if (this._dispose) this._dispose();
    }

    shouldDrawHelpers()
    {
        return false;
    }
}





;// CONCATENATED MODULE: ./src/core/cg/sg_fpscounter.js


class FpsCounter extends Events
{
    constructor()
    {
        super();
        this._timeStartFrame = 0;
        this._timeStartSecond = 0;
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._frameCount = 0;

        this.stats = { "ms": 0, "fps": 0 };
    }

    get frameCount()
    {
        return this._frameCount;
    }

    startFrame()
    {
        this._timeStartFrame = CABLES.now();
    }

    endFrame()
    {
        this._frameCount++;
        this._fpsCounter++;

        const timeFrame = CABLES.now() - this._timeStartFrame;
        this._msCounter += timeFrame;

        if (CABLES.now() - this._timeStartSecond > 1000)
        {
            this.endSecond();
        }
    }

    endSecond()
    {
        this.stats.fps = this._fpsCounter;
        this.stats.ms = Math.round(this._msCounter / this._fpsCounter * 100) / 100;

        this.emitEvent("performance", this.stats);

        // reset
        this._fpsCounter = 0;
        this._msCounter = 0;
        this._timeStartSecond = CABLES.now();
    }
}

;// CONCATENATED MODULE: ./src/core/cg/cg_constants.js





const CG = {

    "GAPI_WEBGL": 0,
    "GAPI_WEBGPU": 1,

    "DEPTH_COMPARE_NEVER": 0,
    "DEPTH_COMPARE_LESS": 1,
    "DEPTH_COMPARE_EQUAL": 2,
    "DEPTH_COMPARE_LESSEQUAL": 3,
    "DEPTH_COMPARE_GREATER": 4,
    "DEPTH_COMPARE_NOTEQUAL": 5,
    "DEPTH_COMPARE_GREATEREQUAL": 6,
    "DEPTH_COMPARE_ALWAYS": 7,

    "CULL_NONE": 0,
    "CULL_BACK": 1,
    "CULL_FRONT": 2,
    "CULL_BOTH": 3,


    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "FpsCounter": FpsCounter,

    "CgCanvas": CgCanvas
};




;// CONCATENATED MODULE: ./src/core/cgl/cgl_state.js








/**
 * cables gl context/state manager
 * @class
 * @namespace external:CGL
 * @hideconstructor
 */
// const Context(_patch)
class Context extends CGState
{
    constructor(_patch)
    {
        super(_patch);

        this.gApi = CG.GAPI_WEBGL;
        this.aborted = false;

        this.pushMvMatrix = this.pushModelMatrix; // deprecated and wrong... still used??
        this.popMvMatrix = this.popmMatrix = this.popModelMatrix;// deprecated and wrong... still used??

        this.profileData = new ProfileData(this);
        this._log = new Logger("cgl_context", { "onError": _patch.config.onError });
        this._viewPort = [0, 0, 0, 0];
        this.glVersion = 0;
        this.glUseHalfFloatTex = false;
        this.clearCanvasTransparent = true;
        this.clearCanvasDepth = true;
        this.debugOneFrame = false;
        this.checkGlErrors = false; // true is slow // false should be default...
        this.maxTextureUnits = 0;
        this.maxVaryingVectors = 0;
        this.currentProgram = null;
        this._hadStackError = false;
        this.glSlowRenderer = false;
        this._isSafariCrap = false;

        this.temporaryTexture = null;
        this._onetimeCallbacks = [];
        this.gl = null;

        this._cursor = "auto";
        this._currentCursor = "";

        this._viewPortStack = [];
        this._glFrameBufferStack = [];
        this._frameBufferStack = [];
        this._shaderStack = [];
        this._stackDepthTest = [];
        this.mainloopOp = null;

        this._simpleShader = new Shader(this, "simpleshader");
        this._simpleShader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
        this._simpleShader.setSource(Shader.getDefaultVertexShader(), Shader.getDefaultFragmentShader());

        this._currentShader = this._simpleShader;


        this._oldCanvasWidth = -1;
        this._oldCanvasHeight = -1;
        this._enabledExtensions = {};
    }

    // set pixelDensity(p)
    // {
    //     this._pixelDensity = p;
    // }

    // get pixelDensity()
    // {
    //     return this._pixelDensity;
    // }



    get viewPort()
    {
        if (this._viewPortStack.length > 3)
        {
            const l = this._viewPortStack.length;

            return [
                this._viewPortStack[l - 4],
                this._viewPortStack[l - 3],
                this._viewPortStack[l - 2],
                this._viewPortStack[l - 1]
            ];
        }
        else
        {
            // workaround pre viewport stack times / or+and initial value...

            return this._viewPort;
        }
    }



    get mvMatrix() // deprecate
    {
        return this.mMatrix;
    }

    set mvMatrix(m) // deprecate
    {
        this.mMatrix = m;
    }

    _setCanvas(canv)
    {
        if (!canv) this._log.stack("_setCanvas undef");

        if (!this.patch.config.canvas) this.patch.config.canvas = {};
        if (!this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer")) this.patch.config.canvas.preserveDrawingBuffer = false;
        if (!this.patch.config.canvas.hasOwnProperty("premultipliedAlpha")) this.patch.config.canvas.premultipliedAlpha = false;
        if (!this.patch.config.canvas.hasOwnProperty("alpha")) this.patch.config.canvas.alpha = false;

        this.patch.config.canvas.stencil = true;

        if (this.patch.config.hasOwnProperty("clearCanvasColor")) this.clearCanvasTransparent = this.patch.config.clearCanvasColor;
        if (this.patch.config.hasOwnProperty("clearCanvasDepth")) this.clearCanvasDepth = this.patch.config.clearCanvasDepth;

        // safari stuff..........
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
        {
            this._isSafariCrap = true;
            this.glUseHalfFloatTex = true;
        }

        if (!this.patch.config.canvas.forceWebGl1) this.gl = canv.getContext("webgl2", this.patch.config.canvas);


        if (!this.gl || this.gl.isContextLost())
        {
            this.aborted = true;
            this._log.error("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL or try to restart your browser.");
            return;
        }

        if (this.gl.getParameter(this.gl.VERSION) != "WebGL 1.0")
        {
            this.glVersion = 2;
        }
        else
        {
            this.gl = canv.getContext("webgl", this.patch.config.canvas) || canv.getContext("experimental-webgl", this.patch.config.canvas);
            this.glVersion = 1;

            // safari
            // if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (navigator.userAgent.match(/iPhone/i)))
            // {
            //     this.glUseHalfFloatTex = true;
            // }

            // ios
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
            {
                if (!this.patch.config.canvas.hasOwnProperty("powerPreference")) this.patch.config.canvas.powerPreference = "high-performance";
            }

            this.enableExtension("OES_standard_derivatives");
            // this.enableExtension("GL_OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;
            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        const dbgRenderInfo = this.enableExtension("WEBGL_debug_renderer_info");
        if (dbgRenderInfo)
        {
            this.glRenderer = this.gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
            if (this.glRenderer === "Google SwiftShader") this.glSlowRenderer = true;
        }

        this.canvas.addEventListener("webglcontextlost", (event) =>
        {
            if (this.aborted) return this._log.warn("[cgl_state] aborted context lost... can be ignored...");
            this._log.error("canvas lost...", event);
            this.emitEvent("webglcontextlost");
            this.aborted = true;
        });


        this.maxAnisotropic = 0;
        if (this.enableExtension("EXT_texture_filter_anisotropic"))
            this.maxAnisotropic = this.gl.getParameter(this.enableExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT);


        this.maxVaryingVectors = this.gl.getParameter(this.gl.MAX_VARYING_VECTORS);
        this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE);
        this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS);
        this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxSamples = 0;
        if (this.gl.MAX_SAMPLES) this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES);

        if (this.glVersion == 1)
        {
            this.enableExtension("OES_standard_derivatives");
            const instancingExt = this.enableExtension("ANGLE_instanced_arrays") || this.gl;

            if (instancingExt.vertexAttribDivisorANGLE)
            {
                this.gl.vertexAttribDivisor = instancingExt.vertexAttribDivisorANGLE.bind(instancingExt);
                this.gl.drawElementsInstanced = instancingExt.drawElementsInstancedANGLE.bind(instancingExt);
            }
        }

        this.DEPTH_FUNCS = [
            this.gl.NEVER,
            this.gl.ALWAYS,
            this.gl.LESS,
            this.gl.LEQUAL,
            this.gl.GREATER,
            this.gl.GEQUAL,
            this.gl.EQUAL,
            this.gl.NOTEQUAL
        ];
        this.CULL_MODES = [
            null,
            this.gl.BACK,
            this.gl.FRONT,
            this.gl.FRONT_AND_BACK
        ];
    }

    getInfo()
    {
        return {
            "glVersion": this.glVersion,
            "glRenderer": this.glRenderer,
            "glUseHalfFloatTex": this.glUseHalfFloatTex,
            "maxVaryingVectors": this.maxVaryingVectors,
            "maxTextureUnits": this.maxTextureUnits,
            "maxTexSize": this.maxTexSize,
            "maxUniformsFrag": this.maxUniformsFrag,
            "maxUniformsVert": this.maxUniformsVert,
            "maxSamples": this.maxSamples
        };
    }





    /**
     * @function popViewPort
     * @memberof Context
     * @instance
     * @description pop viewPort stack
     */


    popViewPort()
    {
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();
        this._viewPortStack.pop();

        if (this._viewPortStack.length == 0)
        {
            this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);
            // this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
            // this.setViewPort(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
        }
        else
        {
            // this.viewPort = [this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]];
            // this.gl.viewport(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
            this.setViewPort(this._viewPortStack[this._viewPort.length - 4], this._viewPortStack[this._viewPort.length - 3], this._viewPortStack[this._viewPort.length - 2], this._viewPortStack[this._viewPort.length - 1]);
        }
    }

    /**
     * @function pushViewPort
     * @memberof Context
     * @instance
     * @description push a new viewport onto stack
     * @param {Number} x
     * @param {Number} y
     * @param {Number} w
     * @param {Number} h
     */

    pushViewPort(x, y, w, h)
    {
        this._viewPortStack.push(x, y, w, h);
        this.setViewPort(x, y, w, h);
    }


    // old
    getViewPort()
    {
        return this._viewPort;
    }

    // old
    resetViewPort()
    {
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }

    // old
    setViewPort(x, y, w, h)
    {
        this._viewPort[0] = Math.round(x);
        this._viewPort[1] = Math.round(y);
        this._viewPort[2] = Math.round(w);
        this._viewPort[3] = Math.round(h);
        this.gl.viewport(this._viewPort[0], this._viewPort[1], this._viewPort[2], this._viewPort[3]);
    }


    screenShot(cb, doScreenshotClearAlpha, mimeType, quality)
    {
        if (doScreenshotClearAlpha)
        {
            this.gl.clearColor(1, 1, 1, 1);
            this.gl.colorMask(false, false, false, true);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.colorMask(true, true, true, true);
        }

        if (this.canvas && this.canvas.toBlob)
        {
            this.canvas.toBlob((blob) =>
            {
                if (cb) cb(blob);
                else this._log.log("no screenshot callback...");
            }, mimeType, quality);
        }
    }

    endFrame()
    {
        if (this.patch.isEditorMode()) CABLES.GL_MARKER.drawMarkerLayer(this);

        this.setPreviousShader();

        if (this._vMatrixStack.length() > 0) this.logStackError("view matrix stack length !=0 at end of rendering...");
        if (this._mMatrixStack.length() > 0) this.logStackError("mvmatrix stack length !=0 at end of rendering...");
        if (this._pMatrixStack.length() > 0) this.logStackError("pmatrix stack length !=0 at end of rendering...");
        if (this._glFrameBufferStack.length > 0) this.logStackError("glFrameBuffer stack length !=0 at end of rendering...");
        if (this._stackDepthTest.length > 0) this.logStackError("depthtest stack length !=0 at end of rendering...");
        if (this._stackDepthWrite.length > 0) this.logStackError("depthwrite stack length !=0 at end of rendering...");
        if (this._stackDepthFunc.length > 0) this.logStackError("depthfunc stack length !=0 at end of rendering...");
        if (this._stackBlend.length > 0) this.logStackError("blend stack length !=0 at end of rendering...");
        if (this._stackBlendMode.length > 0) this.logStackError("blendMode stack length !=0 at end of rendering...");
        if (this._shaderStack.length > 0) this.logStackError("this._shaderStack length !=0 at end of rendering...");
        if (this._stackCullFace.length > 0) this.logStackError("this._stackCullFace length !=0 at end of rendering...");
        if (this._stackCullFaceFacing.length > 0) this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering...");
        if (this._viewPortStack.length > 0) this.logStackError("viewport stack length !=0 at end of rendering...");

        this._frameStarted = false;

        if (this._oldCanvasWidth != this.canvasWidth || this._oldCanvasHeight != this.canvasHeight)
        {
            this._oldCanvasWidth = this.canvasWidth;
            this._oldCanvasHeight = this.canvasHeight;
            this.emitEvent("resize");
        }

        if (this._cursor != this._currentCursor)
        {
            this._currentCursor = this.canvas.style.cursor = this._cursor;
        }

        this.emitEvent("endframe");

        this.fpsCounter.endFrame();
    }

    logStackError(str)
    {
        if (!this._hadStackError)
        {
            this._hadStackError = true;
            this._log.warn("[" + this.canvas.id + "]: ", str);
        }
    }

    // shader stack
    getShader()
    {
        if (this._currentShader) if (!this.tempData || ((this.tempData.renderOffscreen === true) == this._currentShader.offScreenPass) === true) return this._currentShader;

        for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.tempData.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    getDefaultShader()
    {
        return this._simpleShader;
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
     */

    pushShader(shader)
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // if (!currentShader.forcedMod && currentShader != this.tempData.forceShaderMods[i])
                // {
                //     currentShader.forcedMod = this.tempData.forceShaderMods[i];
                shader = this.tempData.forceShaderMods[i].bind(shader, false);
                // }
                // return currentShader;
                // if (this.tempData.forceShaderMods[i].currentShader() && shader != this.tempData.forceShaderMods[i].currentShader().shader)
            }
        }

        this._shaderStack.push(shader);
        this._currentShader = shader;
    }


    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    setPreviousShader()
    {
        if (this.tempData.forceShaderMods)
        {
            for (let i = 0; i < this.tempData.forceShaderMods.length; i++)
            {
                // const a =
                this.tempData.forceShaderMods[i].unbind(false);
                // if (a) return;
                // this.popShader();
            }
        }

        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        this._currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Object} fb framebuffer
     * @function
     */
    pushGlFrameBuffer(fb)
    {
        this._glFrameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popGlFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    popGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length == 0) return null;
        this._glFrameBufferStack.pop();
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Object} current framebuffer or null
     */
    getCurrentGlFrameBuffer()
    {
        if (this._glFrameBufferStack.length === 0) return null;
        return this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }

    /**
     * push a framebuffer to the framebuffer stack
     * @function pushGlFrameBuffer
     * @memberof Context
     * @instance
     * @param {Framebuffer} fb framebuffer
     */
    pushFrameBuffer(fb)
    {
        this._frameBufferStack.push(fb);
    }

    /**
     * pop framebuffer stack
     * @function popFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    popFrameBuffer()
    {
        if (this._frameBufferStack.length == 0) return null;
        this._frameBufferStack.pop();
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }

    /**
     * get current framebuffer
     * @function getCurrentFrameBuffer
     * @memberof Context
     * @instance
     * @returns {Framebuffer} current framebuffer or null
     */
    getCurrentFrameBuffer()
    {
        if (this._frameBufferStack.length === 0) return null;
        return this._frameBufferStack[this._frameBufferStack.length - 1];
    }


    renderStart(cgl, identTranslate, identTranslateView)
    {
        this.fpsCounter.startFrame();
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc(cgl.gl.LEQUAL);
        this.pushCullFaceFacing(cgl.gl.BACK);
        this.pushCullFace(false);

        // if (this.clearCanvasTransparent)
        // {
        //     cgl.gl.clearColor(0, 0, 0, 0);
        //     cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        // }
        // if (this.clearCanvasDepth) cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

        cgl.setViewPort(0, 0, cgl.canvasWidth, cgl.canvasHeight);

        this._startMatrixStacks(identTranslate, identTranslateView);

        cgl.pushBlendMode(constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL, false);

        for (let i = 0; i < this._textureslots.length; i++) this._textureslots[i] = null;

        this.pushShader(this._simpleShader);

        this._frameStarted = true;

        if (this._onetimeCallbacks.length > 0)
        {
            for (let i = 0; i < this._onetimeCallbacks.length; i++) this._onetimeCallbacks[i]();
            this._onetimeCallbacks.length = 0;
        }

        for (let i = 0; i < this._textureslots.length; i++)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + i);
            this.gl.bindTexture(this.gl.TEXTURE_2D, null);
            this._textureslots[i] = null;
        }

        this.emitEvent("beginFrame");
    }

    renderEnd(cgl)
    {
        this._endMatrixStacks();

        this.popDepthTest();
        this.popDepthWrite();
        this.popDepthFunc();
        this.popCullFaceFacing();
        this.popCullFace();
        this.popBlend();
        this.popBlendMode();

        cgl.endFrame();

        this.emitEvent("endFrame");
    }

    getTexture(slot)
    {
        return this._textureslots[slot];
    }

    hasFrameStarted()
    {
        return this._frameStarted;
    }

    /**
     * log warning to console if the rendering of one frame has not been started / handy to check for async problems
     * @function checkFrameStarted
     * @memberof Context
     * @param string
     * @instance
     */
    checkFrameStarted(string)
    {
        if (!this._frameStarted)
        {
            this._log.warn("frame not started " + string);
            this.patch.printTriggerStack();
        }
    }


    setTexture(slot, t, type)
    {
        this.checkFrameStarted("cgl setTexture");

        if (t === null) t = CGL.Texture.getEmptyTexture(this).tex;

        if (this._textureslots[slot] != t)
        {
            this.gl.activeTexture(this.gl.TEXTURE0 + slot);
            this.gl.bindTexture(type || this.gl.TEXTURE_2D, t);
            this._textureslots[slot] = t;
        }


        return true;
    }

    fullScreen()
    {
        if (this.canvas.requestFullscreen) this.canvas.requestFullscreen();
        else if (this.canvas.mozRequestFullScreen) this.canvas.mozRequestFullScreen();
        else if (this.canvas.webkitRequestFullscreen) this.canvas.webkitRequestFullscreen();
        else if (this.canvas.msRequestFullscreen) this.canvas.msRequestFullscreen();
    }


    printError(str)
    {
        if (!this.checkGlErrors) return;
        let found = false;
        let error = this.gl.getError();

        if (error != this.gl.NO_ERROR)
        {
            let errStr = "";
            if (error == this.gl.OUT_OF_MEMORY) errStr = "OUT_OF_MEMORY";
            if (error == this.gl.INVALID_ENUM) errStr = "INVALID_ENUM";
            if (error == this.gl.INVALID_OPERATION) errStr = "INVALID_OPERATION";
            if (error == this.gl.INVALID_FRAMEBUFFER_OPERATION) errStr = "INVALID_FRAMEBUFFER_OPERATION";
            if (error == this.gl.INVALID_VALUE) errStr = "INVALID_VALUE";
            if (error == this.gl.CONTEXT_LOST_WEBGL)
            {
                this.aborted = true;
                errStr = "CONTEXT_LOST_WEBGL";
            }
            if (error == this.gl.NO_ERROR) errStr = "NO_ERROR";

            found = true;


            this._log.warn("gl error [" + this.canvas.id + "]: ", str, error, errStr);

            if (this.canvas.id.contains("glGuiCanvas"))
                if (!this._loggedGlError)
                {
                    this.patch.printTriggerStack();
                    this._log.stack("glerror");
                    this._loggedGlError = true;
                }
        }
        error = this.gl.getError();

        return found;
    }

    saveScreenshot(filename, cb, pw, ph, noclearalpha)
    {
        this.patch.renderOneFrame();

        let w = this.canvas.clientWidth * this.pixelDensity;
        let h = this.canvas.clientHeight * this.pixelDensity;

        if (pw)
        {
            this.canvas.width = pw;
            w = pw;
        }
        if (ph)
        {
            this.canvas.height = ph;
            h = ph;
        }

        function padLeft(nr, n, str)
        {
            return Array(n - String(nr).length + 1).join(str || "0") + nr;
        }

        const d = new Date();

        const dateStr = "".concat(String(d.getFullYear()) + String(d.getMonth() + 1) + String(d.getDate()), "_").concat(padLeft(d.getHours(), 2)).concat(padLeft(d.getMinutes(), 2)).concat(padLeft(d.getSeconds(), 2));

        if (!filename) filename = "cables_" + dateStr + ".png";
        else filename += ".png";

        this.patch.cgl.screenShot(function (blob)
        {
            this.canvas.width = w;
            this.canvas.height = h;

            if (blob)
            {
                const anchor = document.createElement("a");

                anchor.download = filename;
                anchor.href = URL.createObjectURL(blob);

                setTimeout(function ()
                {
                    anchor.click();
                    if (cb) cb(blob);
                }, 100);
            }
            else
            {
                this._log.log("screenshot: no blob");
            }
        }.bind(this), noclearalpha);
    }

    _dispose()
    {
        this._simpleShader.dispose();
        this.gl = null;
    }
}


Context.prototype.popShader = Context.prototype.setPreviousShader;
Context.prototype.setShader = Context.prototype.pushShader;

/**
 * execute the callback next frame, once
 * @function addNextFrameOnceCallback
 * @memberof Context
 * @instance
 * @param {function} cb
 */
Context.prototype.addNextFrameOnceCallback = function (cb)
{
    if (cb && this._onetimeCallbacks.indexOf(cb) == -1) this._onetimeCallbacks.push(cb);
};

// state depthtest

/**
 * push depth testing enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthTest = [];
Context.prototype.pushDepthTest = function (b)
{
    this._stackDepthTest.push(b);
    if (!b) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};
/**
 * current state of depth testing
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthTest = function ()
{
    return this._stackDepthTest[this._stackDepthTest.length - 1];
};

/**
 * pop depth testing state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthTest = function ()
{
    this._stackDepthTest.pop();

    if (!this._stackDepthTest[this._stackDepthTest.length - 1]) this.gl.disable(this.gl.DEPTH_TEST);
    else this.gl.enable(this.gl.DEPTH_TEST);
};

// --------------------------------------
// state depthwrite

/**
 * push depth write enabled state
 * @function pushDepthTest
 * @param {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype._stackDepthWrite = [];
Context.prototype.pushDepthWrite = function (b)
{
    b = b || false;
    this._stackDepthWrite.push(b);
    this.gl.depthMask(b);
};

/**
 * current state of depth writing
 * @function stateDepthWrite
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateDepthWrite = function ()
{
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
};

/**
 * pop depth writing state
 * @function popDepthWrite
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthWrite = function ()
{
    this._stackDepthWrite.pop();
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1] || false);
};


// --------------------------------------
// state CullFace

Context.prototype._stackCullFace = [];

/**
 * push face culling face enabled state
 * @function pushCullFace
 * @param {Boolean} b enabled
 * @memberof Context
 * @instance
 */
Context.prototype.pushCullFace = function (b)
{
    this._stackCullFace.push(b);

    if (b) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};

/**
 * current state of face culling
 * @function stateCullFace
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFace = function ()
{
    return this._stackCullFace[this._stackCullFace.length - 1];
};

/**
 * pop face culling enabled state
 * @function popCullFace
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFace = function ()
{
    this._stackCullFace.pop();

    if (this._stackCullFace[this._stackCullFace.length - 1]) this.gl.enable(this.gl.CULL_FACE);
    else this.gl.disable(this.gl.CULL_FACE);
};


// --------------------------------------
// state CullFace Facing


/**
 * push face culling face side
 * @function pushCullFaceFacing
 * @param {Number} cgl.gl.FRONT_AND_BACK, cgl.gl.BACK or cgl.gl.FRONT
 * @memberof Context
 * @instance
 */
Context.prototype._stackCullFaceFacing = [];
Context.prototype.pushCullFaceFacing = function (b)
{
    this._stackCullFaceFacing.push(b);
    this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};

/**
 * current state of face culling side
 * @function stateCullFaceFacing
 * @returns {Boolean} enabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateCullFaceFacing = function ()
{
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
};

/**
 * pop face culling face side
 * @function popCullFaceFacing
 * @memberof Context
 * @instance
 */
Context.prototype.popCullFaceFacing = function ()
{
    this._stackCullFaceFacing.pop();
    if (this._stackCullFaceFacing.length > 0) this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
};


// --------------------------------------
// state depthfunc

Context.prototype._stackDepthFunc = [];

/**
 * enable / disable depth testing
 * like `gl.depthFunc(boolean);`
 * @function pushDepthFunc
 * @memberof Context
 * @instance
 * @param {Boolean} f depthtesting
 */
Context.prototype.pushDepthFunc = function (f)
{
    this._stackDepthFunc.push(f);
    this.gl.depthFunc(f);
};

/**
 * current state of blend
 * @function stateDepthFunc
 * @memberof Context
 * @instance
 * @returns {Boolean} depth testing enabled/disabled
 */
Context.prototype.stateDepthFunc = function ()
{
    if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
    return false;
};

/**
 * pop depth testing and set the previous state
 * @function popDepthFunc
 * @memberof Context
 * @instance
 */
Context.prototype.popDepthFunc = function ()
{
    this._stackDepthFunc.pop();
    if (this._stackDepthFunc.length > 0) this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
};

// --------------------------------------
// state blending

Context.prototype._stackBlend = [];

/**
 * enable / disable blend
 * like gl.enable(gl.BLEND); / gl.disable(gl.BLEND);
 * @function pushBlend
 * @memberof Context
 * @instance
 * @param {boolean} b blending
 */
Context.prototype.pushBlend = function (b)
{
    this._stackBlend.push(b);
    if (!b) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * pop blend state and set the previous state
 * @function popBlend
 * @memberof Context
 * @instance
 */
Context.prototype.popBlend = function ()
{
    this._stackBlend.pop();

    if (!this._stackBlend[this._stackBlend.length - 1]) this.gl.disable(this.gl.BLEND);
    else this.gl.enable(this.gl.BLEND);
};

/**
 * current state of blend
 * @function stateBlend
 * @returns {boolean} blending enabled/disabled
 * @memberof Context
 * @instance
 */
Context.prototype.stateBlend = function ()
{
    return this._stackBlend[this._stackBlend.length - 1];
};

const BLENDS = {
    "BLEND_NONE": 0,
    "BLEND_NORMAL": 1,
    "BLEND_ADD": 2,
    "BLEND_SUB": 3,
    "BLEND_MUL": 4,
};

Context.prototype._stackBlendMode = [];
Context.prototype._stackBlendModePremul = [];

/**
 * push and switch to predefined blendmode (CONSTANTS.BLEND_MODES.BLEND_NONE,CONSTANTS.BLEND_MODES.BLEND_NORMAL,CONSTANTS.BLEND_MODES.BLEND_ADD,CONSTANTS.BLEND_MODES.BLEND_SUB,CONSTANTS.BLEND_MODES.BLEND_MUL)
 * @function pushBlendMode
 * @memberof Context
 * @instance
 * @param {Number} blendMode
 * @param {Boolean} premul premultiplied mode
 */
Context.prototype.pushBlendMode = function (blendMode, premul)
{
    this._stackBlendMode.push(blendMode);
    this._stackBlendModePremul.push(premul);

    const n = this._stackBlendMode.length - 1;

    this.pushBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);
    this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};

/**
 * pop predefined blendmode / switch back to previous blendmode
 * @function popBlendMode
 * @memberof Context
 * @instance
 */
Context.prototype.popBlendMode = function ()
{
    this._stackBlendMode.pop();
    this._stackBlendModePremul.pop();

    const n = this._stackBlendMode.length - 1;

    this.popBlend(this._stackBlendMode[n] !== constants_CONSTANTS.BLEND_MODES.BLEND_NONE);

    if (n >= 0) this._setBlendMode(this._stackBlendMode[n], this._stackBlendModePremul[n]);
};


// --------------------------------------
// state stencil

Context.prototype._stackStencil = [];

/**
 * enable / disable stencil testing

* @function pushStencil
 * @memberof Context
 * @instance
 * @param {Boolean} b enable
 */
Context.prototype.pushStencil = function (b)
{
    this._stackStencil.push(b);
    if (!b) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

/**
 * pop stencil test state and set the previous state
 * @function popStencil
 * @memberof Context
 * @instance
 */
Context.prototype.popStencil = function ()
{
    this._stackStencil.pop();

    if (!this._stackStencil[this._stackStencil.length - 1]) this.gl.disable(this.gl.STENCIL_TEST);
    else this.gl.enable(this.gl.STENCIL_TEST);
};

// --------------------------------------


Context.prototype.glGetAttribLocation = function (prog, name)
{
    const l = this.gl.getAttribLocation(prog, name);
    // if (l == -1)
    // {
    //     this._log.warn("get attr loc -1 ", name);
    // }
    return l;
};


/**
 * should an op now draw helpermeshes
 * @function shouldDrawHelpers
 * @memberof Context
 * @param op
 * @instance
 */
Context.prototype.shouldDrawHelpers = function (op)
{
    if (this.tempData.shadowPass) return false;
    if (!op.patch.isEditorMode()) return false;

    // const fb = this.getCurrentFrameBuffer();
    // if (fb && fb.getWidth)
    // {
    //     const fbshould = this.canvasWidth / this.canvasHeight == fb.getWidth() / fb.getHeight();
    //     if (!fbshould) return false;
    // }

    return gui.shouldDrawOverlay;// || (CABLES.UI.renderHelperCurrent && op.isCurrentUiOp());
};

Context.prototype._setBlendMode = function (blendMode, premul)
{
    const gl = this.gl;

    if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NONE)
    {
        // this.gl.disable(this.gl.BLEND);
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_ADD)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE, gl.ONE, gl.ONE);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_SUB)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.ZERO, gl.ONE_MINUS_SRC_COLOR, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_MUL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ZERO, gl.SRC_COLOR, gl.ZERO, gl.SRC_ALPHA);
        }
        else
        {
            gl.blendEquation(gl.FUNC_ADD);
            gl.blendFunc(gl.ZERO, gl.SRC_COLOR);
        }
    }
    else if (blendMode == constants_CONSTANTS.BLEND_MODES.BLEND_NORMAL)
    {
        if (premul)
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.ONE, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
        else
        {
            gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
    else
    {
        this._log.log("setblendmode: unknown blendmode");
    }
};

Context.prototype.createMesh = function (geom, options)
{
    if (CABLES.UTILS.isNumeric(options))options = { "glPrimitive": options }; // old constructor fallback...
    return new CGL.Mesh(this, geom, options);
};


/**
 * set cursor
 * @function setCursor
 * @memberof Context
 * @instance
 * @param {String} str css cursor string
 */
Context.prototype.setCursor = function (str)
{
    this._cursor = str;
};

/**
 * enable a webgl extension
 * @function enableExtension
 * @memberof Context
 * @instance
 * @param {String} name extension name
 * @returns {Object} extension object or null
 */
Context.prototype.enableExtension = function (name)
{
    if (!this.gl) return null;

    if (this._enabledExtensions.hasOwnProperty(name))
        return this._enabledExtensions[name];

    const o = this.gl.getExtension(name);
    this._enabledExtensions[name] = o;

    if (!o)
        this._log.warn("[cgl_state] extension not available " + name);
    // else
        // this._log.log("enabled extension", name);

    return o;
};

Context.prototype.checkTextureSize = function (x)
{
    x = x || 1;
    x = Math.floor(x);
    x = Math.min(x, this.maxTexSize);
    x = Math.max(x, 1);
    return x;
};





;// CONCATENATED MODULE: ./src/core/core_variable.js


/**
 * @type {Object}
 * @name PatchVariable
 * @param {String} name
 * @param {String|Number} value
 * @memberof Patch
 * @constructor
 */
class PatchVariable extends Events
{
    constructor(name, val, type)
    {
        super();
        this._name = name;
        this.type = type;
        this.setValue(val);
    }

    /**
     * keeping this for backwards compatibility in older
     * exports before using eventtarget
     *
     * @param cb
     */
    addListener(cb)
    {
        this.on("change", cb, "var");
    }

    /**
     * @function Variable.getValue
     * @memberof PatchVariable
     * @returns {String|Number|Boolean}
     */
    getValue()
    {
        return this._v;
    }

    /**
     * @function getName
     * @memberof PatchVariable
     * @instance
     * @returns {String|Number|Boolean}
     * @function
     */
    getName()
    {
        return this._name;
    }

    /**
     * @function setValue
     * @memberof PatchVariable
     * @instance
     * @param v
     * @returns {String|Number|Boolean}
     * @function
     */
    setValue(v)
    {
        this._v = v;
        this.emitEvent("change", v, this);
    }
}

/* harmony default export */ const core_variable = (PatchVariable);

;// CONCATENATED MODULE: ./src/core/core_patch.js












/**
 * Patch class, contains all operators,values,links etc. manages loading and running of the whole patch
 *
 * see {@link PatchConfig}
 *
 * @namespace external:CABLES#Patch
 * @hideconstructor
 * @param {PatchConfig} cfg The configuration object.
 * @class
 * @example
 * CABLES.patch=new CABLES.Patch(
 * {
 *     patch:pStr,
 *     glCanvasId:'glcanvas',
 *     glCanvasResizeToWindow:true,
 *     canvas:{powerPreference:"high-performance"},
 *     prefixAssetPath:'/assets/',
 *     prefixJsPath:'/js/',
 *     onError:function(e){console.log(e);}
 *     glslPrecision:'highp'
 * });
 */

class Patch extends EventTarget
{
// const Patch(cfg)
    constructor(cfg)
    {
        super();
        // EventTarget.apply(this);

        this._log = new Logger("core_patch", { "onError": cfg.onError });
        this.ops = [];
        this.settings = {};
        this.config = cfg ||
        {
            "glCanvasResizeToWindow": false,
            "prefixAssetPath": "",
            "prefixJsPath": "",
            "silent": true,
            "onError": null,
            "onFinishedLoading": null,
            "onFirstFrameRendered": null,
            "onPatchLoaded": null,
            "fpsLimit": 0
        };
        this.timer = new Timer();
        this.freeTimer = new Timer();
        this.animFrameOps = [];
        this.animFrameCallbacks = [];
        this.gui = false;
        CABLES.logSilent = this.silent = true;
        this.profiler = null;
        this.aborted = false;
        this._crashedOps = [];
        this._renderOneFrame = false;
        this._animReq = null;
        this._opIdCache = {};
        this._triggerStack = [];
        this.storeObjNames = false; // remove after may release

        this.loading = new LoadingStatus(this);

        this._volumeListeners = [];
        this._paused = false;
        this._frameNum = 0;
        this.onOneFrameRendered = null;
        this.namedTriggers = {};

        this._origData = null;
        this._frameNext = 0;
        this._frameInterval = 0;
        this._lastFrameTime = 0;
        this._frameWasdelayed = true;
        this.tempData = this.frameStore = {};
        this.deSerialized = false;
        this.reqAnimTimeStamp = 0;

        this.cgCanvas = null;

        if (!(function () { return !this; }())) console.log("not in strict mode: core patch");

        this._isLocal = document.location.href.indexOf("file:") === 0;

        if (this.config.hasOwnProperty("silent")) this.silent = CABLES.logSilent = this.config.silent;
        if (!this.config.hasOwnProperty("doRequestAnimation")) this.config.doRequestAnimation = true;

        if (!this.config.prefixAssetPath) this.config.prefixAssetPath = "";
        if (!this.config.prefixJsPath) this.config.prefixJsPath = "";
        if (!this.config.masterVolume) this.config.masterVolume = 1.0;

        this._variables = {};
        this._variableListeners = [];
        this.vars = {};
        if (cfg && cfg.vars) this.vars = cfg.vars; // vars is old!

        this.cgl = new Context(this);
        this.cgp = null;

        this._subpatchOpCache = {};

        this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas");
        if (this.config.glCanvasResizeToWindow === true) this.cgl.setAutoResize("window");
        if (this.config.glCanvasResizeToParent === true) this.cgl.setAutoResize("parent");
        this.loading.setOnFinishedLoading(this.config.onFinishedLoading);

        if (this.cgl.aborted) this.aborted = true;
        if (this.cgl.silent) this.silent = true;

        this.freeTimer.play();
        this.exec();

        if (!this.aborted)
        {
            if (this.config.patch)
            {
                this.deSerialize(this.config.patch);
            }
            else if (this.config.patchFile)
            {
                ajax(
                    this.config.patchFile,
                    (err, _data) =>
                    {
                        try
                        {
                            const data = JSON.parse(_data);
                            if (err)
                            {
                                const txt = "";
                                this._log.error("err", err);
                                this._log.error("data", data);
                                this._log.error("data", data.msg);
                                return;
                            }
                            this.deSerialize(data);
                        }
                        catch (e)
                        {
                            this._log.error("could not load/parse patch ", e);
                        }
                    }
                );
            }
            this.timer.play();
        }

    console.log("made with https://cables.gl"); // eslint-disable-line
    }

    isPlaying()
    {
        return !this._paused;
    }

    isRenderingOneFrame()
    {
        return this._renderOneFrame;
    }


    renderOneFrame()
    {
        this._paused = true;
        this._renderOneFrame = true;
        this.exec();
        this._renderOneFrame = false;
    }

    /**
 * current number of frames per second
 * @function getFPS
 * @memberof Patch
 * @instance
 * @return {Number} fps
 */
    getFPS()
    {
        this._log.error("deprecated getfps");
        return 0;
    }

    /**
 * returns true if patch is opened in editor/gui mode
 * @function isEditorMode
 * @memberof Patch
 * @instance
 * @return {Boolean} editor mode
 */
    isEditorMode()
    {
        return this.config.editorMode === true;
    }

    /**
 * pauses patch execution
 * @function pause
 * @memberof Patch
 * @instance
 */
    pause()
    {
        cancelAnimationFrame(this._animReq);
        this.emitEvent("pause");
        this._animReq = null;
        this._paused = true;
        this.freeTimer.pause();
    }

    /**
 * resumes patch execution
 * @function resume
 * @memberof Patch
 * @instance
 */
    resume()
    {
        if (this._paused)
        {
            cancelAnimationFrame(this._animReq);
            this._paused = false;
            this.freeTimer.play();
            this.emitEvent("resume");
            this.exec();
        }
    }

    /**
 * set volume [0-1]
 * @function setVolume
 * @param {Number} v volume
 * @memberof Patch
 * @instance
 */
    setVolume(v)
    {
        this.config.masterVolume = v;
        for (let i = 0; i < this._volumeListeners.length; i++) this._volumeListeners[i].onMasterVolumeChanged(v);
    }


    /**
 * get asset path
 * @function getAssetPath
 * @memberof Patch
 * @param patchId
 * @instance
 */
    getAssetPath(patchId = null)
    {
        if (this.config.hasOwnProperty("assetPath"))
        {
            return this.config.assetPath;
        }
        else if (this.isEditorMode())
        {
            let id = patchId || gui.project()._id;
            return "/assets/" + id + "/";
        }
        else if (document.location.href.indexOf("cables.gl") > 0 || document.location.href.indexOf("cables.local") > 0)
        {
            const parts = document.location.pathname.split("/");
            let id = patchId || parts[parts.length - 1];
            return "/assets/" + id + "/";
        }
        else
        {
            return "assets/";
        }
    }

    /**
 * get js path
 * @function getJsPath
 * @memberof Patch
 * @instance
 */
    getJsPath()
    {
        if (this.config.hasOwnProperty("jsPath"))
        {
            return this.config.jsPath;
        }
        else
        {
            return "js/";
        }
    }

    /**
 * get url/filepath for a filename
 * this uses prefixAssetpath in exported patches
 * @function getFilePath
 * @memberof Patch
 * @instance
 * @param {String} filename
 * @return {String} url
 */
    getFilePath(filename)
    {
        if (!filename) return filename;
        filename = String(filename);
        if (filename.indexOf("https:") === 0 || filename.indexOf("http:") === 0) return filename;
        if (filename.indexOf("data:") === 0) return filename;
        if (filename.indexOf("file:") === 0) return filename;
        filename = filename.replace("//", "/");
        if (filename.startsWith(this.config.prefixAssetPath)) filename = filename.replace(this.config.prefixAssetPath, "");
        return this.config.prefixAssetPath + filename + (this.config.suffixAssetPath || "");
    }

    clear()
    {
        this.emitEvent("patchClearStart");
        this.cgl.TextureEffectMesh = null;
        this.animFrameOps.length = 0;
        this.timer = new Timer();
        while (this.ops.length > 0) this.deleteOp(this.ops[0].id);

        this._opIdCache = {};
        this.emitEvent("patchClearEnd");
    }




    createOp(identifier, id, opName = null)
    {
        let op = null;
        let objName = "";

        try
        {
            if (!identifier)
            {
                console.error("createop identifier false", identifier);
                console.log((new Error()).stack);
                return;
            }
            if (identifier.indexOf("Ops.") === -1)
            {
                // this should be a uuid, not a namespace
                // creating ops by id should be the default way from now on!
                const opId = identifier;



                if (CABLES.OPS[opId])
                {
                    objName = CABLES.OPS[opId].objName;
                    op = new CABLES.OPS[opId].f(this, objName, id, opId);
                    op.opId = opId;
                }
                else
                {
                    if (opName)
                    {
                        identifier = opName;
                        this._log.warn("could not find op by id: " + opId);
                    }
                    else
                    {
                        throw new Error("could not find op by id: " + opId, { "cause": "opId:" + opId });
                    }
                }
            }

            if (!op)
            {
                // fallback: create by objname!
                objName = identifier;
                const parts = identifier.split(".");
                const opObj = Patch.getOpClass(objName);

                if (!opObj)
                {
                    this.emitEvent("criticalError", { "title": "unknown op" + objName, "text": "unknown op: " + objName });

                    this._log.error("unknown op: " + objName);
                    throw new Error("unknown op: " + objName);
                }
                else
                {
                    if (parts.length == 2) op = new window[parts[0]][parts[1]](this, objName, id);
                    else if (parts.length == 3) op = new window[parts[0]][parts[1]][parts[2]](this, objName, id);
                    else if (parts.length == 4) op = new window[parts[0]][parts[1]][parts[2]][parts[3]](this, objName, id);
                    else if (parts.length == 5) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]](this, objName, id);
                    else if (parts.length == 6) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]](this, objName, id);
                    else if (parts.length == 7) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]](this, objName, id);
                    else if (parts.length == 8) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]](this, objName, id);
                    else if (parts.length == 9) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]](this, objName, id);
                    else if (parts.length == 10) op = new window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]](this, objName, id);
                    else console.log("parts.length", parts.length);
                }

                if (op)
                {
                    op.opId = null;
                    for (const i in CABLES.OPS)
                    {
                        if (CABLES.OPS[i].objName == objName) op.opId = i;
                    }
                }
            }
        }
        catch (e)
        {
            this._crashedOps.push(objName);

            this._log.error("[instancing error] " + objName, e);

            if (!this.isEditorMode())
            {
                this._log.error("INSTANCE_ERR", "Instancing Error: " + objName, e);
                // throw new Error("instancing error 1" + objName);
            }
        }

        if (op)
        {
            op._objName = objName;
            op.patch = this;
        }
        else
        {
            this._log.log("no op was created!?", identifier, id);
        }
        return op;
    }

    /**
     * create a new op in patch
     * @function addOp
     * @memberof Patch
     * @instance
     * @param {string} opIdentifier uuid or name, e.g. Ops.Math.Sum
     * @param {Object} uiAttribs Attributes
     * @param {string} id
     * @param {boolean} fromDeserialize
     * @param {string} opName e.g. Ops.Math.Sum
     * @example
     * // add invisible op
     * patch.addOp('Ops.Math.Sum', { showUiAttribs: false });
     */
    addOp(opIdentifier, uiAttribs, id, fromDeserialize, opName)
    {
        const op = this.createOp(opIdentifier, id, opName);

        if (op)
        {
            uiAttribs = uiAttribs || {};
            if (uiAttribs.hasOwnProperty("errors")) delete uiAttribs.errors;
            if (uiAttribs.hasOwnProperty("error")) delete uiAttribs.error;
            uiAttribs.subPatch = uiAttribs.subPatch || 0;

            op.setUiAttribs(uiAttribs);
            if (op.onCreate) op.onCreate();

            if (op.hasOwnProperty("onAnimFrame")) this.addOnAnimFrame(op);
            if (op.hasOwnProperty("onMasterVolumeChanged")) this._volumeListeners.push(op);

            if (this._opIdCache[op.id])
            {
                this._log.warn("opid with id " + op.id + " already exists in patch!");
                this.deleteOp(op.id); // strange with subpatch ops: why is this needed, somehow ops get added twice ???.....
                // return;
            }

            this.ops.push(op);
            this._opIdCache[op.id] = op;

            if (this._subPatchCacheAdd) this._subPatchCacheAdd(uiAttribs.subPatch, op);
            this.emitEvent("onOpAdd", op, fromDeserialize);

            if (op.init) op.init();

            op.emitEvent("init", fromDeserialize);
        }
        else
        {
            this._log.error("addop: op could not be created: ", opIdentifier);
        }

        return op;
    }

    addOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++) if (this.animFrameOps[i] == op) { return; }

        this.animFrameOps.push(op);
    }

    removeOnAnimFrame(op)
    {
        for (let i = 0; i < this.animFrameOps.length; i++)
        {
            if (this.animFrameOps[i] == op)
            {
                this.animFrameOps.splice(i, 1);
                return;
            }
        }
    }

    addOnAnimFrameCallback(cb)
    {
        this.animFrameCallbacks.push(cb);
    }

    removeOnAnimCallback(cb)
    {
        for (let i = 0; i < this.animFrameCallbacks.length; i++)
        {
            if (this.animFrameCallbacks[i] == cb)
            {
                this.animFrameCallbacks.splice(i, 1);
                return;
            }
        }
    }

    deleteOp(opid, tryRelink, reloadingOp)
    {
        let found = false;
        for (const i in this.ops)
        {
            if (this.ops[i].id == opid)
            {
                const op = this.ops[i];
                let reLinkP1 = null;
                let reLinkP2 = null;

                if (op)
                {
                    found = true;
                    if (tryRelink)
                    {
                        if (op.portsIn.length > 0 && op.portsIn[0].isLinked() && (op.portsOut.length > 0 && op.portsOut[0].isLinked()))
                        {
                            if (op.portsIn[0].getType() == op.portsOut[0].getType() && op.portsIn[0].links[0])
                            {
                                reLinkP1 = op.portsIn[0].links[0].getOtherPort(op.portsIn[0]);
                                reLinkP2 = op.portsOut[0].links[0].getOtherPort(op.portsOut[0]);
                            }
                        }
                    }

                    const opToDelete = this.ops[i];
                    opToDelete.removeLinks();

                    if (this.onDelete)
                    {
                        // todo: remove
                        this._log.warn("deprecated this.onDelete", this.onDelete);
                        this.onDelete(opToDelete);
                    }

                    this.ops.splice(i, 1);
                    opToDelete.emitEvent("delete", opToDelete);
                    this.emitEvent("onOpDelete", opToDelete, reloadingOp);

                    if (this.clearSubPatchCache) this.clearSubPatchCache(opToDelete.uiAttribs.subPatch);

                    if (opToDelete.onDelete) opToDelete.onDelete(reloadingOp);
                    opToDelete.cleanUp();

                    if (reLinkP1 !== null && reLinkP2 !== null)
                    {
                        this.link(reLinkP1.op, reLinkP1.getName(), reLinkP2.op, reLinkP2.getName());
                    }

                    delete this._opIdCache[opid];
                    break;
                }
            }
        }

        if (!found) this._log.warn("core patch deleteop: not found...", opid);
    }

    getFrameNum()
    {
        return this._frameNum;
    }

    emitOnAnimFrameEvent(time, delta)
    {
        time = time || this.timer.getTime();

        for (let i = 0; i < this.animFrameCallbacks.length; ++i)
            if (this.animFrameCallbacks[i])
                this.animFrameCallbacks[i](time, this._frameNum, delta);

        for (let i = 0; i < this.animFrameOps.length; ++i)
            if (this.animFrameOps[i].onAnimFrame)
                this.animFrameOps[i].onAnimFrame(time, this._frameNum, delta);
    }

    renderFrame(timestamp)
    {
        this.timer.update(this.reqAnimTimeStamp);
        this.freeTimer.update(this.reqAnimTimeStamp);
        const time = this.timer.getTime();
        const startTime = performance.now();
        this.cgl.frameStartTime = this.timer.getTime();

        const delta = timestamp - this.reqAnimTimeStamp || timestamp;

        this.emitOnAnimFrameEvent(null, delta);

        this.cgl.profileData.profileFrameDelta = delta;
        this.reqAnimTimeStamp = timestamp;
        this.cgl.profileData.profileOnAnimFrameOps = performance.now() - startTime;

        this.emitEvent("onRenderFrame", time);

        this._frameNum++;
        if (this._frameNum == 1)
        {
            if (this.config.onFirstFrameRendered) this.config.onFirstFrameRendered();
        }
    }

    exec(timestamp)
    {
        if (!this._renderOneFrame && (this._paused || this.aborted)) return;
        this.emitEvent("reqAnimFrame");
        cancelAnimationFrame(this._animReq);

        this.config.fpsLimit = this.config.fpsLimit || 0;
        if (this.config.fpsLimit)
        {
            this._frameInterval = 1000 / this.config.fpsLimit;
        }

        const now = CABLES.now();
        const frameDelta = now - this._frameNext;

        if (this.isEditorMode())
        {
            if (!this._renderOneFrame)
            {
                if (now - this._lastFrameTime >= 500 && this._lastFrameTime !== 0 && !this._frameWasdelayed)
                {
                    this._lastFrameTime = 0;
                    setTimeout(this.exec.bind(this), 500);
                    this.emitEvent("renderDelayStart");
                    this._frameWasdelayed = true;
                    return;
                }
            }
        }

        if (this._renderOneFrame || this.config.fpsLimit === 0 || frameDelta > this._frameInterval || this._frameWasdelayed)
        {
            this.renderFrame(timestamp);

            if (this._frameInterval) this._frameNext = now - (frameDelta % this._frameInterval);
        }

        if (this._frameWasdelayed)
        {
            this.emitEvent("renderDelayEnd");
            this._frameWasdelayed = false;
        }

        if (this._renderOneFrame)
        {
            if (this.onOneFrameRendered) this.onOneFrameRendered(); // todo remove everywhere and use propper event...
            this.emitEvent("renderedOneFrame");
            this._renderOneFrame = false;
        }


        if (this.config.doRequestAnimation) this._animReq = this.cgl.canvas.ownerDocument.defaultView.requestAnimationFrame(this.exec.bind(this));
    }

    /**
     * link two ops/ports
     * @function link
     * @memberof Patch
     * @instance
     * @param {Op} op1
     * @param {String} port1Name
     * @param {Op} op2
     * @param {String} port2Name
     * @param {boolean} lowerCase
     * @param {boolean} fromDeserialize
     */
    link(op1, port1Name, op2, port2Name, lowerCase, fromDeserialize)
    {
        if (!op1) return this._log.warn("link: op1 is null ");
        if (!op2) return this._log.warn("link: op2 is null");

        const port1 = op1.getPort(port1Name, lowerCase);
        const port2 = op2.getPort(port2Name, lowerCase);

        if (!port1) return op1._log.warn("port1 not found! " + port1Name + " (" + op1.objName + ")");
        if (!port2) return op1._log.warn("port2 not found! " + port2Name + " of " + op2.name + "(" + op2.objName + ")", op2);

        if (!port1.shouldLink(port1, port2) || !port2.shouldLink(port1, port2)) return false;

        if (Link.canLink(port1, port2))
        {
            const link = new Link(this);
            link.link(port1, port2);

            this.emitEvent("onLink", port1, port2, link, fromDeserialize);
            return link;
        }
    }

    serialize(options)
    {
        const obj = {};

        options = options || {};
        obj.ops = [];
        obj.settings = this.settings;
        for (const i in this.ops)
        {
            const op = this.ops[i];
            if (op && op.getSerialized)obj.ops.push(op.getSerialized());
        }

        cleanJson(obj);

        if (options.asObject) return obj;
        return JSON.stringify(obj);
    }

    getOpsByRefId(refId)
    {
        const perf = CABLES.UI.uiProfiler.start("[corepatchetend] getOpsByRefId");
        const refOps = [];
        const ops = gui.corePatch().ops;
        for (let i = 0; i < ops.length; i++)
            if (ops[i].storage && ops[i].storage.ref == refId) refOps.push(ops[i]);
        perf.finish();
        return refOps;
    }

    getOpById(opid)
    {
        return this._opIdCache[opid];
    }

    getOpsByName(name)
    {
        // TODO: is this still needed ? unclear behaviour....
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].name == name) arr.push(this.ops[i]);
        return arr;
    }

    getOpsByObjName(name)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].objName == name) arr.push(this.ops[i]);
        return arr;
    }

    getOpsByOpId(opid)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].opId == opid) arr.push(this.ops[i]);
        return arr;
    }

    loadLib(which)
    {
        ajaxSync(
            "/ui/libs/" + which + ".js",
            (err, res) =>
            {
                const se = document.createElement("script");
                se.type = "text/javascript";
                se.text = res;
                document.getElementsByTagName("head")[0].appendChild(se);
            },
            "GET",
        );
    }

    getSubPatchOpsByName(patchId, objName)
    {
        const arr = [];
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                arr.push(this.ops[i]);

        return arr;
    }

    getSubPatchOp(patchId, objName)
    {
        return this.getFirstSubPatchOpByName(patchId, objName);
    }

    getFirstSubPatchOpByName(patchId, objName)
    {
        for (const i in this.ops)
            if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == patchId && this.ops[i].objName == objName)
                return this.ops[i];

        return false;
    }

    _addLink(opinid, opoutid, inName, outName)
    {
        return this.link(this.getOpById(opinid), inName, this.getOpById(opoutid), outName, false, true);
    }

    deSerialize(obj, options)
    {
        options = options || { "genIds": false, "createRef": false };
        if (this.aborted) return;
        const newOps = [];
        const loadingId = this.loading.start("core", "deserialize");

        this.namespace = obj.namespace || "";
        this.name = obj.name || "";

        if (typeof obj === "string") obj = JSON.parse(obj);

        this.settings = obj.settings;

        this.emitEvent("patchLoadStart");

        obj.ops = obj.ops || [];

        if (window.logStartup)logStartup("add " + obj.ops.length + " ops... ");

        const addedOps = [];

        // add ops...
        for (let iop = 0; iop < obj.ops.length; iop++)
        {
            const start = CABLES.now();
            const opData = obj.ops[iop];
            let op = null;

            try
            {
                if (opData.opId) op = this.addOp(opData.opId, opData.uiAttribs, opData.id, true, opData.objName);
                else op = this.addOp(opData.objName, opData.uiAttribs, opData.id, true);
            }
            catch (e)
            {
                this._log.error("[instancing error] op data:", opData, e);
                // throw new Error("could not create op by id: <b>" + (opData.objName || opData.opId) + "</b> (" + opData.id + ")");
            }

            if (op)
            {
                addedOps.push(op);
                if (options.genIds) op.id = shortId();
                op.portsInData = opData.portsIn;
                op._origData = JSON.parse(JSON.stringify(opData));
                op.storage = opData.storage;
                // if (opData.hasOwnProperty("disabled"))op.setEnabled(!opData.disabled);

                for (const ipi in opData.portsIn)
                {
                    const objPort = opData.portsIn[ipi];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port = op.getPort(objPort.name);

                        if (port && (port.uiAttribs.display == "bool" || port.uiAttribs.type == "bool") && !isNaN(objPort.value)) objPort.value = objPort.value == true ? 1 : 0;
                        if (port && objPort.value !== undefined && port.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE) port.set(objPort.value);

                        if (port)
                        {
                            port.deSerializeSettings(objPort);
                        }
                        else
                        {
                            // if (port.uiAttribs.hasOwnProperty("title"))
                            // {
                            //     op.preservedPortTitles = op.preservedPortTitles || {};
                            //     op.preservedPortTitles[port.name] = port.uiAttribs.title;
                            // }
                            op.preservedPortValues = op.preservedPortValues || {};
                            op.preservedPortValues[objPort.name] = objPort.value;
                        }
                    }
                }

                for (const ipo in opData.portsOut)
                {
                    const objPort = opData.portsOut[ipo];
                    if (objPort && objPort.hasOwnProperty("name"))
                    {
                        const port2 = op.getPort(objPort.name);

                        if (port2)
                        {
                            port2.deSerializeSettings(objPort);

                            if (port2.uiAttribs.hasOwnProperty("title"))
                            {
                                op.preservedPortTitles = op.preservedPortTitles || {};
                                op.preservedPortTitles[port2.name] = port2.uiAttribs.title;
                            }


                            if (port2.type != CONSTANTS.OP.OP_PORT_TYPE_TEXTURE && objPort.hasOwnProperty("value"))
                                port2.set(obj.ops[iop].portsOut[ipo].value);

                            if (objPort.expose) port2.setUiAttribs({ "expose": true });
                        }
                    }
                }
                newOps.push(op);
            }

            const timeused = Math.round(100 * (CABLES.now() - start)) / 100;
            if (!this.silent && timeused > 5) console.log("long op init ", obj.ops[iop].objName, timeused);
        }
        if (window.logStartup)logStartup("add ops done");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoadedValueSet)
            {
                this.ops[i].onLoadedValueSet(this.ops[i]._origData);
                this.ops[i].onLoadedValueSet = null;
                this.ops[i]._origData = null;
            }
            this.ops[i].emitEvent("loadedValueSet");
        }

        if (window.logStartup)logStartup("creating links");

        if (options.opsCreated)options.opsCreated(addedOps);
        // create links...
        if (obj.ops)
        {
            for (let iop = 0; iop < obj.ops.length; iop++)
            {
                if (obj.ops[iop].portsIn)
                {
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsIn.length; ipi2++)
                    {
                        if (obj.ops[iop].portsIn[ipi2] && obj.ops[iop].portsIn[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsIn[ipi2].links.length; ili++)
                            {
                                const l = this._addLink(
                                    obj.ops[iop].portsIn[ipi2].links[ili].objIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].objOut,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portIn,
                                    obj.ops[iop].portsIn[ipi2].links[ili].portOut);

                                // const took = performance.now - startTime;
                                // if (took > 100)console.log(obj().ops[iop].portsIn[ipi2].links[ili].objIn, obj.ops[iop].portsIn[ipi2].links[ili].objOut, took);
                            }
                        }
                    }
                }
                if (obj.ops[iop].portsOut)
                    for (let ipi2 = 0; ipi2 < obj.ops[iop].portsOut.length; ipi2++)
                        if (obj.ops[iop].portsOut[ipi2] && obj.ops[iop].portsOut[ipi2].links)
                        {
                            for (let ili = 0; ili < obj.ops[iop].portsOut[ipi2].links.length; ili++)
                            {
                                if (obj.ops[iop].portsOut[ipi2].links[ili])
                                {
                                    if (obj.ops[iop].portsOut[ipi2].links[ili].subOpRef)
                                    {
                                        // lost link
                                        const outOp = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);
                                        let dstOp = null;
                                        let theSubPatch = 0;

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].subOpRef &&
                                                outOp.uiAttribs.subPatch == this.ops[i].uiAttribs.subPatch
                                            )
                                            {
                                                theSubPatch = this.ops[i].patchId.get();
                                                break;
                                            }
                                        }

                                        for (let i = 0; i < this.ops.length; i++)
                                        {
                                            if (
                                                this.ops[i].storage &&
                                                this.ops[i].storage.ref == obj.ops[iop].portsOut[ipi2].links[ili].refOp &&
                                                this.ops[i].uiAttribs.subPatch == theSubPatch)
                                            {
                                                dstOp = this.ops[i];
                                                break;
                                            }
                                        }

                                        if (!dstOp) this._log.warn("could not find op for lost link");
                                        else
                                        {
                                            const l = this._addLink(
                                                dstOp.id,
                                                obj.ops[iop].portsOut[ipi2].links[ili].objOut,

                                                obj.ops[iop].portsOut[ipi2].links[ili].portIn,
                                                obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                        }
                                    }
                                    else
                                    {
                                        const l = this._addLink(obj.ops[iop].portsOut[ipi2].links[ili].objIn, obj.ops[iop].portsOut[ipi2].links[ili].objOut, obj.ops[iop].portsOut[ipi2].links[ili].portIn, obj.ops[iop].portsOut[ipi2].links[ili].portOut);

                                        if (!l)
                                        {
                                            const op1 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objIn);
                                            const op2 = this.getOpById(obj.ops[iop].portsOut[ipi2].links[ili].objOut);

                                            if (!op1)console.log("could not find link op1");
                                            if (!op2)console.log("could not find link op2");

                                            const p1Name = obj.ops[iop].portsOut[ipi2].links[ili].portIn;

                                            if (op1 && !op1.getPort(p1Name))
                                            {
                                                // console.log("PRESERVE port 1 not found", p1Name);

                                                op1.preservedPortLinks[p1Name] = op1.preservedPortLinks[p1Name] || [];
                                                op1.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }

                                            const p2Name = obj.ops[iop].portsOut[ipi2].links[ili].portOut;
                                            if (op2 && !op2.getPort(p2Name))
                                            {
                                                // console.log("PRESERVE port 2 not found", obj.ops[iop].portsOut[ipi2].links[ili].portOut);
                                                op2.preservedPortLinks[p1Name] = op2.preservedPortLinks[p1Name] || [];
                                                op2.preservedPortLinks[p1Name].push(obj.ops[iop].portsOut[ipi2].links[ili]);
                                            }
                                        }
                                    }
                                }
                            }
                        }
            }
        }

        if (window.logStartup)logStartup("calling ops onloaded");

        for (const i in this.ops)
        {
            if (this.ops[i].onLoaded)
            {
                // TODO: deprecate!!!
                this.ops[i].onLoaded();
                this.ops[i].onLoaded = null;
            }
        }

        if (window.logStartup)logStartup("initializing ops...");
        for (const i in this.ops)
        {
            if (this.ops[i].init)
            {
                try
                {
                    this.ops[i].init();
                    this.ops[i].init = null;
                }
                catch (e)
                {
                    console.error("op.init crash", e);
                }
            }
        }

        if (window.logStartup)logStartup("initializing vars...");

        if (this.config.variables)
            for (const varName in this.config.variables)
                this.setVarValue(varName, this.config.variables[varName]);

        if (window.logStartup)logStartup("initializing var ports");

        for (const i in this.ops)
        {
            this.ops[i].initVarPorts();
            delete this.ops[i].uiAttribs.pasted;
        }

        setTimeout(() => { this.loading.finished(loadingId); }, 100);

        if (this.config.onPatchLoaded) this.config.onPatchLoaded(this);

        this.deSerialized = true;
        this.emitEvent("patchLoadEnd", newOps, obj, options.genIds);
    }

    profile(enable)
    {
        this.profiler = new Profiler(this);
        for (const i in this.ops)
        {
            this.ops[i].profile(enable);
        }
    }

    // ----------------------

    /**
     * set variable value
     * @function setVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     * @param {Number|String|Boolean} val value
     */
    setVariable(name, val)
    {
        // if (this._variables.hasOwnProperty(name))
        if (this._variables[name] !== undefined)
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._log.warn("variable " + name + " not found!");
        }
    }

    _sortVars()
    {
        if (!this.isEditorMode()) return;
        const ordered = {};
        Object.keys(this._variables).sort(
            (a, b) =>
            { return a.localeCompare(b, "en", { "sensitivity": "base" }); }
        ).forEach((key) =>
        {
            ordered[key] = this._variables[key];
        });
        this._variables = ordered;
    }

    /**
     * has variable
     * @function hasVariable
     * @memberof Patch
     * @instance
     * @param {String} name of variable
     */
    hasVar(name)
    {
        return this._variables[name] !== undefined;

        // return this._variables.hasOwnProperty(name);
    }

    // used internally
    setVarValue(name, val, type)
    {
        if (this.hasVar(name))
        {
            this._variables[name].setValue(val);
        }
        else
        {
            this._variables[name] = new core_variable(name, val, type);
            this._sortVars();
            this.emitEvent("variablesChanged");
        }
        return this._variables[name];
    }

    // old?
    getVarValue(name, val)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name].getValue();
    }

    /**
     * @function getVar
     * @memberof Patch
     * @instance
     * @param {String} name
     * @return {Variable} variable
     */
    getVar(name)
    {
        if (this._variables.hasOwnProperty(name)) return this._variables[name];
    }


    deleteVar(name)
    {
        for (let i = 0; i < this.ops.length; i++)
            for (let j = 0; j < this.ops[i].portsIn.length; j++)
                if (this.ops[i].portsIn[j].getVariableName() == name)
                    this.ops[i].portsIn[j].setVariable(null);

        delete this._variables[name];
        this.emitEvent("variableDeleted", name);
        this.emitEvent("variablesChanged");
    }

    /**
     * @function getVars
     * @memberof Patch
     * @instance
     * @param t
     * @return {Array<Variable>} variables
     * @function
     */
    getVars(t)
    {
        if (t === undefined) return this._variables;

        const vars = [];
        if (t == CABLES.OP_PORT_TYPE_STRING) t = "string";
        if (t == CABLES.OP_PORT_TYPE_VALUE) t = "number";
        if (t == CABLES.OP_PORT_TYPE_ARRAY) t = "array";
        if (t == CABLES.OP_PORT_TYPE_OBJECT) t = "object";

        for (const i in this._variables)
        {
            if (!this._variables[i].type || this._variables[i].type == t) vars.push(this._variables[i]);
        }
        return vars;
    }


    /**
     * @function preRenderOps
     * @memberof Patch
     * @instance
     * @description invoke pre rendering of ops
     * @function
     */
    preRenderOps()
    {
        this._log.log("prerendering...");

        for (let i = 0; i < this.ops.length; i++)
        {
            if (this.ops[i].preRender)
            {
                this.ops[i].preRender();
                this._log.log("prerender " + this.ops[i].objName);
            }
        }
    }

    /**
     * @function dispose
     * @memberof Patch
     * @instance
     * @description stop, dispose and cleanup patch
     */
    dispose()
    {
        this.pause();
        this.clear();
        this.cgl.dispose();
    }

    pushTriggerStack(p)
    {
        this._triggerStack.push(p);
    }

    popTriggerStack()
    {
        this._triggerStack.pop();
    }

    printTriggerStack()
    {
        if (this._triggerStack.length == 0)
        {
            // console.log("stack length", this._triggerStack.length); // eslint-disable-line
            return;
        }
        console.groupCollapsed( // eslint-disable-line
            "trigger port stack " + this._triggerStack[this._triggerStack.length - 1].op.objName + "." + this._triggerStack[this._triggerStack.length - 1].name,
        );

        const rows = [];
        for (let i = 0; i < this._triggerStack.length; i++)
        {
            rows.push(i + ". " + this._triggerStack[i].op.objName + " " + this._triggerStack[i].name);
        }

        console.table(rows); // eslint-disable-line
        console.groupEnd(); // eslint-disable-line
    }

    /**
     * returns document object of the patch could be != global document object when opening canvas ina popout window
     * @function getDocument
     * @memberof Patch
     * @instance
     * @return {Object} document
     */
    getDocument()
    {
        return this.cgl.canvas.ownerDocument;
    }
}

Patch.getOpClass = function (objName)
{
    const parts = objName.split(".");
    let opObj = null;

    try
    {
        if (parts.length == 2) opObj = window[parts[0]][parts[1]];
        else if (parts.length == 3) opObj = window[parts[0]][parts[1]][parts[2]];
        else if (parts.length == 4) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]];
        else if (parts.length == 5) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]];
        else if (parts.length == 6) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]];
        else if (parts.length == 7) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]];
        else if (parts.length == 8) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]];
        else if (parts.length == 9) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]];
        else if (parts.length == 10) opObj = window[parts[0]][parts[1]][parts[2]][parts[3]][parts[4]][parts[5]][parts[6]][parts[7]][parts[8]][parts[9]];
        return opObj;
    }
    catch (e)
    {
        return null;
    }
};



Patch.replaceOpIds = function (json, options)
{
    const opids = {};
    for (const i in json.ops)
    {
        opids[json.ops[i].id] = json.ops[i];
    }

    for (const j in json.ops)
    {
        for (const k in json.ops[j].portsOut)
        {
            const links = json.ops[j].portsOut[k].links;
            if (links)
            {
                let l = links.length;

                while (l--)
                {
                    if (links[l] && (!opids[links[l].objIn] || !opids[links[l].objOut]))
                    {
                        if (!options.doNotUnlinkLostLinks)
                        {
                            links.splice(l, 1);
                        }
                        else
                        {
                            if (options.fixLostLinks)
                            {
                                // console.log("lost link...?", links[l]);
                                const op = gui.corePatch().getOpById(links[l].objIn);
                                if (!op) console.log("op not found!");
                                else
                                {
                                    const outerOp = gui.patchView.getSubPatchOuterOp(op.uiAttribs.subPatch);
                                    if (outerOp)
                                    {
                                        op.storage = op.storage || {};
                                        op.storage.ref = op.storage.ref || CABLES.shortId();
                                        links[l].refOp = op.storage.ref;
                                        links[l].subOpRef = outerOp.storage.ref;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (const i in json.ops)
    {
        const op = json.ops[i];
        const oldId = op.id;
        let newId = CABLES.shortId();

        if (options.prefixHash) newId = prefixedHash(options.prefixHash + oldId);

        else if (options.prefixId) newId = options.prefixId + oldId;
        else if (options.refAsId) // when saving json
        {
            if (op.storage && op.storage.ref)
            {
                newId = op.storage.ref;
                delete op.storage.ref;
            }
            else
            {
                op.storage = op.storage || {};
                op.storage.ref = newId = CABLES.shortId();
            }
        }

        const newID = op.id = newId;

        if (options.oldIdAsRef) // when loading json
        {
            op.storage = op.storage || {};
            op.storage.ref = oldId;
        }

        for (const j in json.ops)
        {
            if (json.ops[j].portsIn)
                for (const k in json.ops[j].portsIn)
                {
                    if (json.ops[j].portsIn[k].links)
                    {
                        let l = json.ops[j].portsIn[k].links.length;

                        while (l--) if (json.ops[j].portsIn[k].links[l] === null) json.ops[j].portsIn[k].links.splice(l, 1);

                        for (l in json.ops[j].portsIn[k].links)
                        {
                            if (json.ops[j].portsIn[k].links[l].objIn === oldId) json.ops[j].portsIn[k].links[l].objIn = newID;
                            if (json.ops[j].portsIn[k].links[l].objOut === oldId) json.ops[j].portsIn[k].links[l].objOut = newID;
                        }
                    }
                }

            if (json.ops[j].portsOut)
                for (const k in json.ops[j].portsOut)
                {
                    if (json.ops[j].portsOut[k].links)
                    {
                        let l = json.ops[j].portsOut[k].links.length;

                        while (l--) if (json.ops[j].portsOut[k].links[l] === null) json.ops[j].portsOut[k].links.splice(l, 1);

                        for (l in json.ops[j].portsOut[k].links)
                        {
                            if (json.ops[j].portsOut[k].links[l].objIn === oldId) json.ops[j].portsOut[k].links[l].objIn = newID;
                            if (json.ops[j].portsOut[k].links[l].objOut === oldId) json.ops[j].portsOut[k].links[l].objOut = newID;
                        }
                    }
                }
        }
    }

    // set correct subpatch
    const subpatchIds = [];
    const fixedSubPatches = [];

    for (let i = 0; i < json.ops.length; i++)
    {
        // if (CABLES.Op.isSubPatchOpName(json.ops[i].objName))
        if (json.ops[i].storage && json.ops[i].storage.subPatchVer)
        {
            for (const k in json.ops[i].portsIn)
            {
                if (json.ops[i].portsIn[k].name === "patchId")
                {
                    let newId = shortId();

                    if (options.prefixHash) newId = prefixedHash(options.prefixHash + json.ops[i].portsIn[k].value);

                    const oldSubPatchId = json.ops[i].portsIn[k].value;
                    const newSubPatchId = json.ops[i].portsIn[k].value = newId;

                    subpatchIds.push(newSubPatchId);

                    for (let j = 0; j < json.ops.length; j++)
                    {
                        // op has no uiAttribs in export, we don't care about subpatches in export though
                        if (json.ops[j].uiAttribs)
                        {
                            if (json.ops[j].uiAttribs.subPatch === oldSubPatchId)
                            {
                                json.ops[j].uiAttribs.subPatch = newSubPatchId;
                                fixedSubPatches.push(json.ops[j].id);
                            }
                        }
                    }
                }
            }
        }
    }

    for (const kk in json.ops)
    {
        let found = false;
        for (let j = 0; j < fixedSubPatches.length; j++)
        {
            if (json.ops[kk].id === fixedSubPatches[j])
            {
                found = true;
                break;
            }
        }
        // op has no uiAttribs in export, we don't care about subpatches in export though
        if (!found && json.ops[kk].uiAttribs && options.parentSubPatchId != null)
            json.ops[kk].uiAttribs.subPatch = options.parentSubPatchId;
    }

    return json;
};
/**
 * remove an eventlistener
 * @instance
 * @function addEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * remove an eventlistener
 * @instance
 * @function removeEventListener
 * @param {String} name of event
 * @param {function} callback
 */

/**
 * op added to patch event
 * @event onOpAdd
 *
 * @memberof Patch
 * @type {Object}
 * @property {Op} op new op
 */

/**
 * op deleted from patch
 * @event onOpDelete
 * @memberof Patch
 * @type {Object}
 * @property {Op} op that will be deleted
 */

/**
 * link event - two ports will be linked
 * @event onLink
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * unlink event - a link was deleted
 * @event onUnLink
 * @memberof Patch
 * @type {Object}
 */

/**
 * variables has been changed / a variable has been added to the patch
 * @event variablesChanged
 * @memberof Patch
 * @type {Object}
 * @property {Port} port1
 * @property {Port} port2
 */

/**
 * configuration object for loading a patch
 * @typedef {Object} PatchConfig
 * @hideconstructor
 * @property {String} [prefixAssetPath=''] prefix for path to assets
 * @property {String} [assetPath=''] path to assets
 * @property {String} [jsPath=''] path to javascript files
 * @property {String} [glCanvasId='glcanvas'] dom element id of canvas element
 * @property {Function} [onError=null] called when an error occurs
 * @property {Function} [onFinishedLoading=null] called when patch finished loading all assets
 * @property {Function} [onFirstFrameRendered=null] called when patch rendered it's first frame
 * @property {Boolean} [glCanvasResizeToWindow=false] resize canvas automatically to window size
 * @property {Boolean} [doRequestAnimation=true] do requestAnimationFrame set to false if you want to trigger exec() from outside (only do if you know what you are doing)
 * @property {Boolean} [clearCanvasColor=true] clear canvas in transparent color every frame
 * @property {Boolean} [clearCanvasDepth=true] clear depth every frame
 * @property {Boolean} [glValidateShader=true] enable/disable validation of shaders *
 * @property {Boolean} [silent=false]
 * @property {Number} [fpsLimit=0] 0 for maximum possible frames per second
 * @property {String} [glslPrecision='mediump'] default precision for glsl shader
 *
 */

/* harmony default export */ const core_patch = (Patch);

;// CONCATENATED MODULE: ./src/core/embedding.js



const EMBED = {};

/**
 * add patch into html element (will create canvas and set size to fill containerElement)
 * @name CABLES.EMBED#addPatch
 * @param {object|string} _element containerElement dom element or id of element
 * @param {object} options patch options
 * @function
 */
EMBED.addPatch = function (_element, options)
{
    let el = _element;
    let id = generateUUID();
    if (typeof _element == "string")
    {
        id = _element;
        el = document.getElementById(id);

        if (!el)
        {
            console.error(id + " Polyshape Container Element not found!");
            return;
        }
    }

    const canvEl = document.createElement("canvas");
    canvEl.id = "glcanvas_" + id;
    canvEl.width = el.clientWidth;
    canvEl.height = el.clientHeight;

    window.addEventListener(
        "resize",
        function ()
        {
            this.setAttribute("width", el.clientWidth);
            this.height = el.clientHeight;
        }.bind(canvEl),
    );

    el.appendChild(canvEl);

    options = options || {};
    options.glCanvasId = canvEl.id;

    if (!options.onError)
    {
        options.onError = function (err)
        {
            console.error(err);
        };
    }

    CABLES.patch = new core_patch(options);
    return canvEl;
};



;// CONCATENATED MODULE: ./src/core/webaudio.js
/** @namespace WEBAUDIO */



const WEBAUDIO = {};

WEBAUDIO.toneJsInitialized = false;

/*
 * External JSDoc definitions
 */

/**
 * Part of the Web Audio API, the AudioBuffer interface represents a short audio asset residing in memory.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer}
 */

/**
 * Part of the Web Audio API, the AudioNode interface is a generic interface for representing an audio processing module.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioNode}
 */

/**
 * The AudioContext interface represents an audio-processing graph built from audio modules linked together
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AudioContext}
 */

/**
 * Checks if a global audio context has been created and creates
 * it if necessary. This audio context can be used for native Web Audio as well as Tone.js ops.
 * Associates the audio context with Tone.js if it is being used
 * @param {CABLES.Op} op - The operator which needs the Audio Context
 */
WEBAUDIO.createAudioContext = function (op)
{
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext)
    {
        if (!window.audioContext)
        {
            window.audioContext = new AudioContext();
        }
        // check if tone.js lib is being used
        if (window.Tone && !WEBAUDIO.toneJsInitialized)
        {
            // set current audio context in tone.js
            Tone.setContext(window.audioContext);
            WEBAUDIO.toneJsInitialized = true;
        }
    }
    else
    {
        if (op.patch.config.onError)op.logError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
        return;
    }
    return window.audioContext;
};

/**
 * Returns the audio context.
 * Before `createAudioContext` must have been called at least once.
 * It most cases you should use `createAudioContext`, which just returns the audio context
 * when it has been created already.
 */
WEBAUDIO.getAudioContext = function ()
{
    return window.audioContext;
};

/**
 * Creates an audio in port for the op with name `portName`
 * When disconnected it will disconnect the previous connected audio node
 * from the op's audio node.
 * @param {CABLES.Op} op - The operator to create the audio port in
 * @param {string} portName - The name of the port
 * @param {AudioNode} audioNode - The audionode incoming connections should connect to
 * @param {number} [inputChannelIndex=0] - If the audio node has multiple inputs, this is the index of the input channel to connect to
 * @returns {CABLES.Port|undefined} - The newly created audio in port or `undefined` if there was an error
 */
WEBAUDIO.createAudioInPort = function (op, portName, audioNode, inputChannelIndex)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
        // return;
    }
    if (!inputChannelIndex)
    {
        inputChannelIndex = 0;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    const port = op.inObject(portName);
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    port.onChange = function ()
    {
        const audioInNode = port.get();
        // when port disconnected, disconnect audio nodes
        if (!audioInNode)
        {
            if (port.webAudio.previousAudioInNode)
            {
                try
                {
                    if (port.webAudio.previousAudioInNode.disconnect) port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                catch (e)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(port.webAudio.audioNode);
                    }
                    catch (er)
                    {
                        op.log(
                            "Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ",
                            e,
                        );
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }
            }
        }
        else
        {
            try
            {
                if (audioInNode.connect)
                {
                    audioInNode.connect(port.webAudio.audioNode, 0, inputChannelIndex);
                    op.setUiError("audioCtx", null);
                }
                else op.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
            }
            catch (e)
            {
                op.log("Error: Failed to connect web audio node!", e);
                op.log("port.webAudio.audioNode", port.webAudio.audioNode);
                op.log("audioInNode: ", audioInNode);
                op.log("inputChannelIndex:", inputChannelIndex);
                op.log("audioInNode.connect: ", audioInNode.connect);
                throw e;
            }
        }
        port.webAudio.previousAudioInNode = audioInNode;
    };
    // TODO: Maybe add subtype to audio-node-object?
    return port;
};

/**
 * Sometimes it is necessary to replace a node of a port, if so all
 * connections to this node must be disconnected and connections to the new
 * node must be made.
 * Can be used for both Audio ports as well as AudioParam ports
 * if used with an AudioParam pass e.g. `synth.frequency` as newNode
 * @param {CABLES.Port} port - The port where the audio node needs to be replaced
 * @param oldNode
 * @param newNode
 */
WEBAUDIO.replaceNodeInPort = function (port, oldNode, newNode)
{
    const connectedNode = port.webAudio.previousAudioInNode;
    // check if connected
    if (connectedNode && connectedNode.disconnect)
    {
        try
        {
            connectedNode.disconnect(oldNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not disconnect old audio node. " + e.name + " " + e.message);
        }
        port.webAudio.audioNode = newNode;
        try
        {
            connectedNode.connect(newNode);
        }
        catch (e)
        {
            if (e.printStackTrace)
            {
                e.printStackTrace();
            }
            throw new Error("replaceNodeInPort: Could not connect to new node. " + e.name + " " + e.message);
        }
    }
};

/**
 * Creates an audio out port which takes care of (dis-)connecting on it’s own
 * @param {CABLES.op} op - The op to create an audio out port for
 * @param {string} portName - The name of the port to be created
 * @param {AudioNode} audioNode - The audio node to link to the port
 * @returns {(CABLES.Port|undefined)} - The newly created audio out port or `undefined` if there was an error
 */
WEBAUDIO.createAudioOutPort = function (op, portName, audioNode)
{
    if (!op || !portName || !audioNode)
    {
        const msg = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        op.log(msg);
        throw new Error(msg);
    }

    const port = op.outObject(portName);
    // TODO: Maybe add subtype to audio-node-object?
    port.set(audioNode);
    return port;
};

/**
 * Creates an audio param in port for the op with name portName.
 * The port accepts other audio nodes as signals as well as values (numbers)
 * When the port is disconnected it will disconnect the previous connected audio node
 * from the op's audio node and restore the number value set before.
 * @param {CABLES.Op} op - The operator to create an audio param input port for
 * @param {string} portName - The name of the port to create
 * @param audioNode
 * @param options
 * @param defaultValue
 * @returns {(CABLES.Port|undefined)} - The newly created port, which takes care of (dis-)connecting on its own, or `undefined` if there was an error
 */
WEBAUDIO.createAudioParamInPort = function (op, portName, audioNode, options, defaultValue)
{
    if (!op || !portName || !audioNode)
    {
        op.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode");
        if (op && op.name) op.log("opname: ", op.name);
        op.log("portName", portName);
        op.log("audioNode: ", audioNode);
        return;
    }
    op.webAudio = op.webAudio || {};
    op.webAudio.audioInPorts = op.webAudio.audioInPorts || [];
    // var port = op.inObject(portName);
    const port = op.inDynamic(
        portName,
        [CONSTANTS.OP.OP_PORT_TYPE_VALUE, CONSTANTS.OP.OP_PORT_TYPE_OBJECT],
        options,
        defaultValue,
    );
    port.webAudio = {};
    port.webAudio.previousAudioInNode = null;
    port.webAudio.audioNode = audioNode;

    op.webAudio.audioInPorts[portName] = port;

    // port.onLinkChanged = function() {
    //   op.log("onLinkChanged");
    //   if(port.isLinked()) {
    //
    //       if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_) { // value
    //
    //       } else if(port.links[0].portOut.type === CABLES.CONSTANTS.OP.OP_PORT_TYPE_OBJECT) { // object
    //
    //       }
    //   } else { // unlinked
    //
    //   }
    // };

    port.onChange = function ()
    {
        const audioInNode = port.get();
        const node = port.webAudio.audioNode;
        const audioCtx = WEBAUDIO.getAudioContext();

        if (audioInNode != undefined)
        {
            if (typeof audioInNode === "object" && audioInNode.connect)
            {
                try
                {
                    audioInNode.connect(node);
                }
                catch (e)
                {
                    op.log("Could not connect audio node: ", e);
                    if (e.printStackTrace)
                    {
                        e.printStackTrace();
                    }
                    throw e;
                }
                port.webAudio.previousAudioInNode = audioInNode;
            }
            else
            {
                // tone.js audio param
                if (node._param && node._param.minValue && node._param.maxValue)
                {
                    if (audioInNode >= node._param.minValue && audioInNode <= node._param.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log("Possible AudioParam problem with tone.js op: ", e);
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // native Web Audio param
                else if (node.minValue && node.maxValue)
                {
                    if (audioInNode >= node.minValue && audioInNode <= node.maxValue)
                    {
                        try
                        {
                            if (node.setValueAtTime)
                            {
                                node.setValueAtTime(audioInNode, audioCtx.currentTime);
                            }
                            else
                            {
                                node.value = audioInNode;
                            }
                        }
                        catch (e)
                        {
                            op.log(
                                "AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ",
                                e,
                            );
                            if (e.printStackTrace)
                            {
                                e.printStackTrace();
                            }
                            throw e;
                        }
                    }
                    else
                    {
                        op.log("Warning: The value for an audio parameter is out of range!");
                    }
                } // no min-max values, try anyway
                else
                {
                    try
                    {
                        if (node.setValueAtTime)
                        {
                            node.setValueAtTime(audioInNode, audioCtx.currentTime);
                        }
                        else
                        {
                            node.value = audioInNode;
                        }
                    }
                    catch (e)
                    {
                        op.log("Possible AudioParam problem (without minValue / maxValue): ", e);
                        if (e.printStackTrace)
                        {
                            e.printStackTrace();
                        }
                        throw e;
                    }
                }

                if (port.webAudio.previousAudioInNode && port.webAudio.previousAudioInNode.disconnect)
                {
                    try
                    {
                        port.webAudio.previousAudioInNode.disconnect(node);
                    }
                    catch (e)
                    {
                        op.log("Could not disconnect previous audio node: ", e);
                        throw e;
                    }
                    port.webAudio.previousAudioInNode = undefined;
                }
            }
        }
        else
        {
            // disconnected
            if (port.webAudio.previousAudioInNode)
            {
            }
        }
    };
    return port;
};


/**
 * Loads an audio file and updates the loading indicators when cables is run in the editor.
 * @param {CABLES.Patch} patch - The cables patch, when called from inside an op this is `op.patch`
 * @param {string} url - The url of the audio file to load
 * @param {function} onFinished - The callback to be called when the loading is finished, passes the AudioBuffer
 * @param {function} onError - The callback when there was an error loading the file, the rror message is passed
 * @param loadingTask
 * @see {@link https://developer.mozilla.org/de/docs/Web/API/AudioContext/decodeAudioData}
 */
WEBAUDIO.loadAudioFile = function (patch, url, onFinished, onError, loadingTask)
{
    const audioContext = WEBAUDIO.createAudioContext();

    if (!audioContext) onError(new Error("No Audiocontext"));

    let loadingId = null;
    if (loadingTask || loadingTask === undefined)
    {
        loadingId = patch.loading.start("audio", url);
        if (patch.isEditorMode()) gui.jobs().start({ "id": "loadaudio" + loadingId, "title": " loading audio (" + url + ")" });
    }
    const request = new XMLHttpRequest();

    if (!url) return;

    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    request.onload = function ()
    {
        patch.loading.finished(loadingId);
        if (patch.isEditorMode()) gui.jobs().finish("loadaudio" + loadingId);

        audioContext.decodeAudioData(request.response, onFinished, onError).catch((e) =>
        {
            onError(e);
        });
    };
    request.send();
};

/**
 * Checks if the passed time is a valid time to be used in any of the Tone.js ops.
 * @param {(string|number)} t - The time to check
 * @returns {boolean} - True if time is valid, false if not
 */
WEBAUDIO.isValidToneTime = function (t)
{
    try
    {
        const time = new Tone.Time(t);
    }
    catch (e)
    {
        return false;
    }
    return true;
};

/**
 * Checks if the passed note is a valid note to be used with Tone.js
 * @param {string} note - The note to be checked, e.g. `"C4"`
 * @returns {boolean} - True if the note is a valid note, false otherwise
 */
WEBAUDIO.isValidToneNote = function (note)
{
    try
    {
        Tone.Frequency(note);
    }
    catch (e)
    {
        return false;
    }
    return true;
};



;// CONCATENATED MODULE: ./src/core/sessionvar.js
// todo: old... remove this from ops...

/**
 * todo: old... remove this from ops...
 *
 * @class
 */
const Variable = function ()
{
    let value = null;
    const changedCallbacks = [];

    this.onChanged = function (f)
    {
        changedCallbacks.push(f);
    };

    this.getValue = function ()
    {
        return value;
    };

    this.setValue = function (v)
    {
        value = v;
        this.emitChanged();
    };

    this.emitChanged = function ()
    {
        for (let i = 0; i < changedCallbacks.length; i++)
        {
            changedCallbacks[i]();
        }
    };
};



;// CONCATENATED MODULE: ./src/core/cgp/cgp_uniform.js



class cgp_uniform_Uniform extends cg_uniform
{
    constructor(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName)
    {
        super(__shader, __type, __name, _value, _port2, _port3, _port4, _structUniformName, _structName, _propertyName);
        this._cgp = __shader._cgp;

        if (!_value)
        {
            // if (this.getType() == "m4") this._value = mat4.create();
            if (this.getType() == "t") this._value = this._cgp.getEmptyTexture();
            // else if (this.getType() == "2f") this._value = [0, 0];
            // else if (this.getType() == "4f") this._value = [0, 1, 0, 1];
            // else if (this.getType() == "3f") this._value = [0, 1, 0];
        }

        this.gpuBuffer = null;
    }


    updateValueF() { }

    updateValueArrayF() {}

    setValueArrayF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueF(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue2F() { }

    setValue2F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue3F() { }

    setValue3F(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValue4F() { }

    setValue4F(v)
    {
        if (v[0] == undefined)
        {
            this._log.stack("uniform value undefined");
            console.error("uniform value undefined");
        }
        this.needsUpdate = true;
        this._value = v;
    }

    setValueT(v)
    {
        if (this._value != v)
            this._shader.needsPipelineUpdate = "texture changed"; // todo really needed ? change binding instead?

        this.needsUpdate = true;
        this._value = v;
    }

    updateValueM4(v) {}

    setValueM4(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    setValueAny(v)
    {
        this.needsUpdate = true;
        this._value = v;
    }

    updateValueAny() {}

    updateValueT() {}


    setGpuBuffer(b)
    {
        this.gpuBuffer = b;
    }

    copyToBuffer(buff, pos = 0)
    {
        if (this._type == "f")
        {
            buff[pos] = this._value;
        }
        else if (this._type == "t")
        {
        }
        else if (this._type == "4f")
        {
            buff[pos] = this._value[0];
            buff[pos + 1] = this._value[1];
            buff[pos + 2] = this._value[2];
            buff[pos + 3] = this._value[3];
        }
        else if (this._type == "f[]")
        {
            for (let i = 0; i < this._value.length; i++)
                buff[pos + i] = this._value[i];
        }
        else if (this._type == "m4")
        {
            for (let i = 0; i < 16; i++)
                buff[pos + i] = this._value[i];
        }
        else
        {
            this._log.warn("uniform copy to buffer unknown", this._type);
        }
    }

    getWgslTypeStr()
    {
        if (this._type == "m4") return "mat4x4f";
        if (this._type == "4f") return "vec4f";
        if (this._type == "3f") return "vec3f";
        if (this._type == "2f") return "vec2f";
        if (this._type == "f") return "float";
        if (this._type == "f[]") return "array<vec4f>";
        if (this._type == "i") return "int";
        if (this._type == "sampler") return "sampler";
        if (this._type == "t") return "texture_2d<f32>";
        this._log.warn("unknown type getWgslTypeStr", this._type);
        return "???";
    }

    getSizeBytes()
    {
        const bytesPerFloat = 4;
        const bytesPerInt = 4;
        if (this._type == "t") return 4;
        if (this._type == "sampler") return 4;
        if (this._type == "f") return 1 * bytesPerFloat;
        if (this._type == "2f") return 2 * bytesPerFloat;
        if (this._type == "3f") return 3 * bytesPerFloat;
        if (this._type == "4f") return 4 * bytesPerFloat;
        if (this._type == "f[]") return this._value.length * bytesPerFloat;

        if (this._type == "m4") return 4 * 4 * bytesPerFloat;

        if (this._type == "i") return 1 * bytesPerInt;
        if (this._type == "2i") return 2 * bytesPerInt;

        this._log.warn("unknown type getSizeBytes", this._type);
        return 4;
    }

    copy(newShader)
    {
        const uni = new cgp_uniform_Uniform(newShader, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
        uni.shaderType = this.shaderType;

        console.log(this._name, this._value, uni._value);


        return uni;
    }
}

;// CONCATENATED MODULE: ./src/core/cg/preproc.js
function preproc(str, vars)
{
    const lines = str.split("\n");
    const outLines = [];
    let stack = [];

    for (let i = 0; i < lines.length; i++)
    {
        let line = lines[i].trim();
        let parts = line.split(" ");

        if (line.startsWith("#ifdef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": s });
            continue;
        }
        if (line.startsWith("#ifndef "))
        {
            const s = vars[parts[1]];
            stack.push({ "state": !s });
            continue;
        }
        if (line.startsWith("#endif"))
        {
            stack.pop();
            continue;
        }
        const state = stack[stack.length - 1];

        if (line.startsWith("#else"))
        {
            state.state = !state.state;
            continue;
        }

        if (!state || state.state)
        {
            outLines.push(lines[i]);
        }
    }

    return outLines.join("\n");
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_gpubuffer.js


class GPUBuffer extends EventTarget
{
    constructor(cgp, name, data = null, options = {})
    {
        super();

        this.id = CABLES.shortId();

        this._name = name;
        this.floatArr = null;
        this._gpuBuffer = null;

        this.setData([0, 0, 0, 0]);
        this.needsUpdate = true;
        this._length = 0;

        if (options.buffCfg)
        {
            this._buffCfg = options.buffCfg;
        }

        if (data)
            this.setData(data);

        if (options.length) this.setLength(options.length);

        this.updateGpuBuffer(cgp);
    }

    setData(d)
    {
        // console.log((new Error()).stack);

        this.floatArr = new Float32Array(d);
        this.setLength(this.floatArr.length);

        // console.log(this.name, this.floatArr);
        this.needsUpdate = true;
    }

    setLength(s)
    {
        this._length = s;
        if (!this.floatArr || s != this.floatArr.length)
        {
            this.floatArr = new Float32Array(this._length);
            this.needsUpdate = true;
        }
    }

    updateGpuBuffer(cgp)
    {
        if (cgp) this._cgp = cgp;
        if (!this._cgp || !this._cgp.device)
        {
            console.log("no cgp...", this._name, this._cgp);
            return;
        }

        this._cgp.pushErrorScope("updateGpuBuffer");
        if (!this._gpuBuffer)
        {
            this._buffCfg = this._buffCfg || {};
            this._buffCfg.label = "gpuBuffer-" + this._name;
            if (!this._buffCfg.hasOwnProperty("size") && this.floatArr) this._buffCfg.size = this.floatArr.length * 4;
            this._buffCfg.usage = this._buffCfg.usage || (GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);

            this._gpuBuffer = this._cgp.device.createBuffer(this._buffCfg);
        }

        // if (!isNaN(this.floatArr[0]))console.log("shit", this._name);

        if (this.floatArr)
            this._cgp.device.queue.writeBuffer(
                this._gpuBuffer,
                0,
                this.floatArr.buffer,
                this.floatArr.byteOffset,
                this.floatArr.byteLength
            );

        // this._gpuBuffer.unmap();

        this._cgp.popErrorScope();

        this.needsUpdate = false;
    }

    get name()
    {
        return this._name;
    }

    get gpuBuffer()
    {
        if (!this._gpuBuffer || this.needsUpdate) this.updateGpuBuffer();

        return this._gpuBuffer;
    }

    get length()
    {
        return this._length;
    }

    getSizeBytes()
    {
        return this.floatArr.length * 4;
    }

    dispose()
    {
        // setTimeout(() =>
        // {
        //     if (this._gpuBuffer) this._gpuBuffer.destroy();
        // }, 100);
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_binding.js



class Binding
{
    /**
     * Description
     * @param {any} cgp
     * @param {any} idx
     * @param {string} name
     * @param {any} options={}
     */
    constructor(cgp, name, options = {})
    {
        if (typeof options != "object") this._log.error("binding options is not an object");
        this._index = -1;

        this._name = name;
        this._cgp = cgp;
        this._log = new Logger("cgp_binding");
        this.uniforms = [];
        this.cGpuBuffers = [];
        this._options = options;
        this.shader = null;
        this.bindingInstances = [];
        this.stageStr = options.stage;
        this.bindingType = options.bindingType || "uniform"; // "uniform", "storage", "read-only-storage",

        if (this.stageStr == "frag") this.stage = GPUShaderStage.FRAGMENT;
        else this.stage = GPUShaderStage.VERTEX;
        if (options.hasOwnProperty("index")) this._index = options.index;

        if (options.shader) this.shader = options.shader;

        this._buffer = null;
        this.isValid = true;
        this.changed = 0;

        if (this.shader)
        {
            if (this.stageStr == "frag") this.shader.bindingsFrag.push(this);
            if (this.stageStr == "vert") this.shader.bindingsVert.push(this);
            if (this._index == -1) this._index = this.shader.getNewBindingIndex();
        }

        if (this._index == -1) this._log.warn("binding could not get an index", this._name);

        this._cgp.on("deviceChange", () =>
        {
            // this.reInit();
        });
    }

    isStruct()
    {
        if (this.uniforms.length == 0) return false;

        if (this.uniforms.length == 1)
        {
            if (this.uniforms[0].type == "t" || this.uniforms[0].type == "sampler") return false;
            if (this.bindingType != "uniform") return false;
        }

        return true;
    }

    copy(newShader)
    {
        console.log("copy binding...");
        const options = {};

        for (const i in this._options)
            options[i] = this._options[i];

        options.shader = newShader;

        let binding = new Binding(this._cgp, this._name, options);

        for (let i = 0; i < this.uniforms.length; i++)
        {
            binding.addUniform(newShader.getUniform(this.uniforms[i].name)); // .copy(newShader)
        }




        return binding;
    }

    addUniform(uni)
    {
        this.uniforms.push(uni);
    }

    getSizeBytes()
    {
        let size = 0;
        for (let i = 0; i < this.uniforms.length; i++)
        {
            // console.log("UNIFORM!!!", i, this.uniforms[i], this.uniforms[i].getSizeBytes());
            // console.log("getSizeBytes", this.uniforms[i], this.uniforms[i].getSizeBytes);
            size += this.uniforms[i].getSizeBytes();
        }
        // if (this.uniforms.length == 0)console.log("NO UNIFORMS!!!");
        return size;
    }

    getShaderHeaderCode()
    {
        let str = "";

        let typeStr = "strct_" + this._name;
        let name = this._name;

        if (this.uniforms.length === 0) return "// no uniforms in bindinggroup...?\n";


        str += "// " + this.uniforms.length + " uniforms\n";

        if (this.isStruct())
        {
            str += "struct " + typeStr + "\n";
            str += "{\n";
            for (let i = 0; i < this.uniforms.length; i++)
            {
                str += "    " + this.uniforms[i].name + ": " + this.uniforms[i].getWgslTypeStr();
                if (i != this.uniforms.length - 1)str += ",";
                str += "\n";
            }
            str += "};\n";
        }
        else
        {
            typeStr = this.uniforms[0].getWgslTypeStr();
            name = this.uniforms[0].name;
        }

        str += "@group(0) ";
        str += "@binding(" + this._index + ") ";

        if (this.isStruct())
        {
            str += "var<" + this.bindingType + "> ";
        }
        else if (this.bindingType == "read-only-storage")str += "var<storage,read> ";
        else str += "var ";

        str += name + ": " + typeStr + ";\n";

        return str;
    }


    getBindingGroupLayoutEntry()
    {
        let label = "layout " + this._name + " [";
        for (let i = 0; i < this.uniforms.length; i++) label += this.uniforms[i].getName() + ",";
        label += "]";

        const o = {
            "label": label,
            "binding": this._index,
            "visibility": this.stage,
            "size": this.getSizeBytes()
        };

        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            o.texture = {};
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            o.sampler = {};
        }
        else
        {
            o.buffer = {};
            o.buffer.type = this.bindingType;
        }

        return o;
    }

    getBindingGroupEntry(gpuDevice, inst)
    {
        this.isValid = false;

        const o = {
            "label": this._name + " binding",
            "binding": this._index,
            "size": this.getSizeBytes(),
            "visibility": this.stage,
        };

        if (this.uniforms.length == 0)
        {
            console.log("binding uniforms length 0");
            return;
        }

        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this.uniforms[0].getValue() && this.uniforms[0].getValue().gpuTexture) o.resource = this.uniforms[0].getValue().gpuTexture.createView();
            else o.resource = this._cgp.getEmptyTexture().createView();// CABLES.emptyCglTexture.createView();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            let smplDesc = {
                "addressModeU": "mirror-repeat",
                "addressModeV": "mirror-repeat",
                "magFilter": "linear",
                "minFilter": "linear",
                "mipmapFilter": "linear",
            };

            if (this.uniforms[0].getValue()) smplDesc = this.uniforms[0].getValue().getSampler();

            const sampler = this.uniforms[0]._cgp.device.createSampler(smplDesc);
            o.resource = sampler;
        }
        else
        {
            this._createCgpuBuffer(inst);

            o.resource = {
                "buffer": this.cGpuBuffers[inst].gpuBuffer,
                "minBindingSize": this.getSizeBytes(),
                "hasDynamicOffset": 0
            };
        }

        this.isValid = true;
        this.bindingInstances[inst] = o;

        return o;
    }

    _createCgpuBuffer(inst)
    {
        let buffCfg = {
            "label": this._name,
            "size": this.getSizeBytes(),
            "usage": GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        };

        if (this.bindingType == "read-only-storage" || this.bindingType == "storage") buffCfg.usage = GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST;

        if (this.cGpuBuffers[inst]) this.cGpuBuffers[inst].dispose();
        this.cGpuBuffers[inst] = new GPUBuffer(this._cgp, this._name + " buff", null, { "buffCfg": buffCfg });

        if (this.uniforms.length > 0 && this.uniforms[0].gpuBuffer) this.cGpuBuffers[inst] = this.uniforms[0].gpuBuffer;
    }



    update(cgp, inst)
    {
        let b = this.bindingInstances[inst];
        if (!b) b = this.getBindingGroupEntry(cgp.device, inst);

        if (this.uniforms.length == 1 && this.uniforms[0].gpuBuffer)
        {
            if (this.uniforms[0].gpuBuffer != this.cGpuBuffers[inst])
            {
                console.log("changed?!");
                this.shader._needsRecompile = true; // TODO this should actually just rebuild the bindinggroup i guess ?
            }

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("extern uni bind", [this.uniforms[0].getName(), this.cGpuBuffers[inst].floatArr]);
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else
        if (this.uniforms.length == 1 && this.uniforms[0].getType() == "t")
        {
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni texture");
            if (this.uniforms[0].getValue())
                if (this.uniforms[0].getValue().gpuTexture)
                {
                    this.bindingInstances[inst] = this.getBindingGroupEntry(this.uniforms[0]._cgp.device, inst);
                }
                else
                {
                    console.log("uni t has no gputexture");
                    b.resource = this._cgp.getErrorTexture().createView();
                }

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else if (this.uniforms.length == 1 && this.uniforms[0].getType() == "sampler")
        {
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni sampler");
            b.resource = this.uniforms[0].getValue();
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
        else
        {
            let info = ["stage " + this.stageStr + " / inst " + inst];

            // console.log("B",this.);
            // update uniform values to buffer
            const s = this.getSizeBytes() / 4;

            // if (!this.cGpuBuffers[inst])
            // this._createCgpuBuffer(inst);
            // this.cGpuBuffers[inst] = new GPUBuffer(this._cgp, "buff", null, { "buffCfg": buffCfg });

            this.cGpuBuffers[inst].setLength(s);

            let off = 0;
            for (let i = 0; i < this.uniforms.length; i++)
            {
                info.push(this.uniforms[i].getName() + " " + this.uniforms[i].getValue());
                this.uniforms[i].copyToBuffer(this.cGpuBuffers[inst].floatArr, off); // todo: check if uniform changed?

                // if (isNaN(this.cGpuBuffers[inst].floatArr[0]))
                // {
                // console.log("shitttttttt", this.cGpuBuffers[inst].floatArr[0], this.uniforms[i].getName(), this.cGpuBuffers[inst].name, this.uniforms[i]);
                // }

                off += this.uniforms[i].getSizeBytes() / 4;
            }
            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("uni buff", info);

            // console.log("upodate", inst);

            this.cGpuBuffers[inst].updateGpuBuffer();
            // todo: only if changed...
            // cgp.device.queue.writeBuffer(
            //     b.resource.buffer,
            //     0,
            //     this._buffer.buffer,
            //     this._buffer.byteOffset,
            //     this._buffer.byteLength
            // );

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();
        }
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_shader.js






class cgp_shader_Shader extends CgShader
{
    constructor(_cgp, _name, options = {})
    {
        super();
        if (!_cgp) throw new Error("shader constructed without cgp " + _name);
        this._log = new Logger("cgp_shader");
        this._cgp = _cgp;
        this._name = _name;
        this._uniforms = [];
        this.compute = options.compute || false;

        if (!_name) this._log.stack("no shader name given");
        this._name = _name || "unknown";
        this._compileReason = "";
        this.gpuShaderModule = null;
        this._needsRecompile = true;
        this.bindingCounter = 0;
        this.bindCountlastFrame = -1;
        this._bindingIndexCount = 0;

        this.defaultBindingVert = new Binding(_cgp, "vsUniforms", { "stage": "vert", "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.defaultBindingFrag = new Binding(_cgp, "fsUniforms", { "stage": "frag", "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.defaultBindingComp = new Binding(_cgp, "computeUniforms", { "bindingType": "uniform", "index": this._bindingIndexCount++ });
        this.bindingsFrag = [this.defaultBindingFrag];
        this.bindingsVert = [this.defaultBindingVert];
        this.bindingsComp = [this.defaultBindingComp];

        if (!this.compute)
        {
            this.uniModelMatrix = this.addUniformVert("m4", "modelMatrix");
            this.uniViewMatrix = this.addUniformVert("m4", "viewMatrix");
            this.uniProjMatrix = this.addUniformVert("m4", "projMatrix");
            this.uniNormalMatrix = this.addUniformVert("m4", "normalMatrix");
            this.uniModelViewMatrix = this.addUniformVert("m4", "modelViewMatrix");
            this._tempNormalMatrix = mat4.create();
            this._tempModelViewMatrix = mat4.create();
        }


        this._src = "";

        this._cgp.on("deviceChange", () =>
        {
            this.gpuShaderModule = null;
            this._needsRecompile = "device changed";
        });
    }

    incBindingCounter()
    {
        if (this.bindCountlastFrame != this._cgp.frame) this.bindingCounter = 0;
        else this.bindingCounter++;
        this.bindCountlastFrame = this._cgp.frame;
    }

    reInit()
    {

    }

    get isValid()
    {
        return this._isValid;
    }

    get uniforms()
    {
        return this._uniforms;
    }

    getName()
    {
        return this._name;
    }

    setWhyCompile(why)
    {
        this._compileReason = why;
    }

    getNewBindingIndex()
    {
        return ++this._bindingIndexCount;
    }


    setSource(src)
    {
        this._src = src;
        this.setWhyCompile("Source changed");
        this._needsRecompile = true;
    }

    _replaceMods(vs)
    {
        let srcHeadVert = "";
        for (let i = 0; i < this._moduleNames.length; i++)
        {
            let srcVert = "";

            for (let j = 0; j < this._modules.length; j++)
            {
                const mod = this._modules[j];
                if (mod.name == this._moduleNames[i])
                {
                    srcHeadVert += "\n//---- MOD: group:" + mod.group + ": idx:" + j + " - prfx:" + mod.prefix + " - " + mod.title + " ------\n";

                    srcVert += "\n\n//---- MOD: " + mod.title + " / " + mod.priority + " ------\n";

                    if (mod.attributes)
                        for (let k = 0; k < mod.attributes.length; k++)
                        {
                            const r = this._getAttrSrc(mod.attributes[k], false);
                            if (r.srcHeadVert)srcHeadVert += r.srcHeadVert;
                            if (r.srcVert)srcVert += r.srcVert;
                        }

                    srcHeadVert += mod.srcHead || "";
                    srcVert += mod.srcBody || "";

                    srcHeadVert += "\n//---- end mod ------\n";

                    srcVert += "\n//---- end mod ------\n";

                    srcVert = srcVert.replace(/{{mod}}/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/{{mod}}/g, mod.prefix);

                    srcVert = srcVert.replace(/MOD_/g, mod.prefix);
                    srcHeadVert = srcHeadVert.replace(/MOD_/g, mod.prefix);
                }
            }

            vs = vs.replace("{{" + this._moduleNames[i] + "}}", srcVert);
        }

        vs = vs.replace("{{MODULES_HEAD}}", srcHeadVert);
        return vs;
    }

    getProcessedSource()
    {
        const defs = {};
        for (let i = 0; i < this._defines.length; i++)
            defs[this._defines[i][0]] = this._defines[i][1] || true;


        let src = preproc(this._src, defs);

        let bindingsHeadVert = "";
        for (let i = 0; i < this.bindingsFrag.length; i++)
            bindingsHeadVert += this.bindingsFrag[i].getShaderHeaderCode();

        let bindingsHeadFrag = "";
        for (let i = 0; i < this.bindingsVert.length; i++)
            bindingsHeadFrag += this.bindingsVert[i].getShaderHeaderCode();



        src = bindingsHeadFrag + "\n\n////////////////\n\n" + bindingsHeadVert + "\n\n////////////////\n\n" + src;
        src = this._replaceMods(src);

        return src;
        // console.log("----------------\n", src, "\n----------------------------");
    }

    compile()
    {
        console.log("compile", this._compileReason);
        this._isValid = true;
        this._cgp.pushErrorScope("cgp_shader " + this._name);
        // console.log(this.getProcessedSource());
        this.gpuShaderModule = this._cgp.device.createShaderModule({ "code": this.getProcessedSource(), "label": this._name });
        this._cgp.popErrorScope(this.error.bind(this));
        this._needsRecompile = false;

        this.emitEvent("compiled");
    }

    error(e)
    {
        this._isValid = false;
    }

    bind()
    {
        if (!this.compute)
        {
            this.uniModelMatrix.setValue(this._cgp.mMatrix);
            this.uniViewMatrix.setValue(this._cgp.vMatrix);
            this.uniProjMatrix.setValue(this._cgp.pMatrix);

            // mat4.invert(this._tempNormalMatrix, this._cgp.mMatrix);
            // mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);
            mat4.mul(this._tempModelViewMatrix, this._cgp.vMatrix, this._cgp.mMatrix);



            // mat4.set(this._tempNormalMatrix, this._tempModelViewMatrix);
            mat4.invert(this._tempNormalMatrix, this._tempModelViewMatrix);
            mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix);


            // cpu billboarding?
            // this._tempModelViewMatrix[0 * 4 + 0] = 1.0;
            // this._tempModelViewMatrix[0 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[0 * 4 + 2] = 0.0;

            // // #ifndef BILLBOARDING_CYLINDRIC
            // this._tempModelViewMatrix[1 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[1 * 4 + 1] = 1.0;
            // this._tempModelViewMatrix[1 * 4 + 2] = 0.0;
            // // #endif

            // this._tempModelViewMatrix[2 * 4 + 0] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 1] = 0.0;
            // this._tempModelViewMatrix[2 * 4 + 2] = 1.0;

            this.uniModelViewMatrix.setValue(this._tempModelViewMatrix);
            this.uniNormalMatrix.setValue(this._tempNormalMatrix);
        }

        if (this._needsRecompile) this.compile();
    }

    /**
     * add a uniform to the fragment shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformFrag
     * @returns {Uniform}
     */
    addUniformFrag(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "frag";

        this.defaultBindingFrag.addUniform(uni);
        this.needsPipelineUpdate = "add frag uniform";

        return uni;
    }

    /**
     * add a uniform to the vertex shader
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniformVert
     * @returns {Uniform}
     */
    addUniformVert(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "vert";

        this.defaultBindingVert.addUniform(uni);
        this.needsPipelineUpdate = "add ver uniform";

        return uni;
    }

    /**
     * add a uniform to all shader programs
     * @param {String} type ['f','t', etc]
     * @param {String} name
     * @param {any} valueOrPort value or port
     * @param p2
     * @param p3
     * @param p4
     * @memberof Shader
     * @instance
     * @function addUniform
     * @returns {Uniform}
     */
    addUniform(type, name, valueOrPort, p2, p3, p4)
    {
        const uni = new cgp_uniform_Uniform(this, type, name, valueOrPort, p2, p3, p4);
        uni.shaderType = "both";
        return uni;
    }

    _addUniform(uni)
    {
        this._uniforms.push(uni);
        this.setWhyCompile("add uniform " + name);
        this._needsRecompile = true;
    }

    getUniform(name)
    {
        for (let i = 0; i < this._uniforms.length; i++)
        {
            if (this._uniforms[i].getName() == name) return this._uniforms[i];
        }
    }

    /**
     * copy current shader
     * @function copy
     * @memberof Shader
     * @instance
     * @returns newShader
     */
    copy()
    {
        const shader = new cgp_shader_Shader(this._cgp, this._name + " copy");
        shader.setSource(this._src);

        shader._modules = JSON.parse(JSON.stringify(this._modules));
        shader._defines = JSON.parse(JSON.stringify(this._defines));

        shader._modGroupCount = this._modGroupCount;
        shader._moduleNames = this._moduleNames;

        // shader.glPrimitive = this.glPrimitive;
        // shader.offScreenPass = this.offScreenPass;
        // shader._extensions = this._extensions;
        // shader.wireframe = this.wireframe;
        // shader._attributes = this._attributes;

        for (let i = 0; i < this._uniforms.length; i++) this._uniforms[i].copy(shader);

        shader.bindingsFrag = [];
        for (let i = 0; i < this.bindingsFrag.length; i++) this.bindingsFrag[i].copy(shader);
        shader.defaultBindingFrag = this.bindingsFrag[0];

        shader.bindingsVert = [];
        for (let i = 0; i < this.bindingsVert.length; i++) this.bindingsVert[i].copy(shader);
        shader.defaultBindingVert = this.bindingsVert[0];

        shader.bindingsComp = [];
        for (let i = 0; i < this.bindingsComp.length; i++) this.bindingsComp[i].copy(shader);
        shader.defaultBindingComp = this.bindingsComp[0];

        console.log("copyyyyyyyyyy", shader.bindingsVert, this.bindingsVert);

        this.setWhyCompile("copy");
        shader._needsRecompile = true;
        return shader;
    }


    /**
     * copy all uniform values from another shader
     * @function copyUniforms
     * @memberof Shader
     * @instance
     * @param origShader uniform values will be copied from this shader
     */
    copyUniformValues(origShader)
    {
        for (let i = 0; i < origShader._uniforms.length; i++)
        {
            if (!this._uniforms[i])
            {
                this._log.log("unknown uniform?!");
                continue;
            }
            this.getUniform(origShader._uniforms[i].getName()).set(origShader._uniforms[i].getValue());
        }

        // this.popTextures();
        // for (let i = 0; i < origShader._textureStackUni.length; i++)
        // {
        //     this._textureStackUni[i] = origShader._textureStackUni[i];
        //     this._textureStackTex[i] = origShader._textureStackTex[i];
        //     this._textureStackType[i] = origShader._textureStackType[i];
        //     this._textureStackTexCgl[i] = origShader._textureStackTexCgl[i];
        // }
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgl_shader_default.wgsl
/* harmony default export */ const cgl_shader_default = ("\nstruct MyVSInput\n{\n    @location(0) position: vec3<f32>,\n    @location(1) normal: vec3<f32>,\n    @location(2) texcoord: vec2<f32>,\n};\n\nstruct MyVSOutput\n{\n    @builtin(position) position: vec4<f32>,\n    @location(0) normal: vec3<f32>,\n    @location(1) texcoord: vec2<f32>,\n};\n\n@vertex\nfn myVSMain(v: MyVSInput) -> MyVSOutput\n{\n    var vsOut: MyVSOutput;\n    var pos =vec4<f32>(v.position, 1.0);\n\n    var mvMatrix=vsUniforms.viewMatrix * vsUniforms.modelMatrix;\n    vsOut.position = vsUniforms.projMatrix * mvMatrix * pos;\n\n    vsOut.normal = v.normal;\n    vsOut.texcoord = v.texcoord;\n    return vsOut;\n}\n\n@fragment\nfn myFSMain(v: MyVSOutput) -> @location(0) vec4<f32>\n{\n    return fsUniforms.color+vec4<f32>(.5,.5,.5,1.0);\n}\n\n");
;// CONCATENATED MODULE: ./src/core/cgp/cgp_texture.js



class cgp_texture_Texture extends CgTexture
{
    constructor(_cgp, options = {})
    {
        super(options);
        if (!_cgp) throw new Error("no cgp");
        this._log = new Logger("cgp_texture");
        this._cgp = _cgp;
        // this.id = CABLES.uuid();
        this.gpuTexture = null;
        this.gpuTextureDescriptor = null;

        options = options || {};

        this.name = options.name || "unknown";

        this.samplerDesc = {
            "addressModeU": options.wrap || options.addressModeU || "clamp-to-edge",
            "addressModeV": options.wrap || options.addressModeV || "clamp-to-edge",
            "magFilter": options.magFilter || options.filter || "linear",
            "minFilter": options.minFilter || options.filter || "linear",
        };


        this._cgp.on("deviceChange", () =>
        {
            // this.reInit();
        });
    }

    /**
     * set texture data from an image/canvas object
     * @function initTexture
     * @memberof Texture
     * @instance
     * @param {Object} img image
     * @param {Number} filter
     */
    initTexture(img, filter)
    {
        this.width = img.width;
        this.height = img.height;

        const textureType = "rgba8unorm";

        this._cgp.pushErrorScope("inittexture", { "logger": this._log });

        this.gpuTextureDescriptor = {

            "size": { "width": img.width, "height": img.height },
            "format": textureType,
            "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT
        };

        this.gpuTexture = this._cgp.device.createTexture(this.gpuTextureDescriptor);
        this._cgp.device.queue.copyExternalImageToTexture({ "source": img }, { "texture": this.gpuTexture }, this.gpuTextureDescriptor.size);

        this._cgp.popErrorScope();

        return this.gpuTexture;
    }

    dispose()
    {
        console.log("todo dispose");
    }

    getInfo()
    {
        const tex = this;
        const obj = {};

        obj.name = tex.name;
        obj.size = tex.width + " x " + tex.height;

        obj.textureType = tex.textureType;

        return obj;
    }

    createView()
    {
        if (!this.gpuTexture)
        {
            console.log("no gputexture...");
            return null;
        }
        return this.gpuTexture.createView();
    }

    getSampler()
    {
        // "clamp-to-edge"
        // "repeat"
        // "mirror-repeat"

        return this.samplerDesc;
    }

    /**
     * @function initFromData
     * @memberof Texture
     * @instance
     * @description create texturem from rgb data
     * @param {Array<Number>} data rgb color array [r,g,b,a,r,g,b,a,...]
     * @param {Number} w width
     * @param {Number} h height
     * @param {Number} filter
     * @param {Number} wrap
     */
    initFromData(data, w, h, filter, wrap)
    {
        if (!w || !h) this._log.error("texture size is 0");
        this.width = w;
        this.height = h;
        this.gpuTexture = this._cgp.device.createTexture(
            {
                "size": [w, h],
                "format": "rgba8unorm",
                "usage": GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });

        this._cgp.device.queue.writeTexture(
            { "texture": this.gpuTexture },
            data,
            { "bytesPerRow": w * 4 },
            { "width": w, "height": h });
    }


    setWrap(v)
    {
        this.samplerDesc.addressModeU = this.samplerDesc.addressModeV = v;
    }

    setFilter(v)
    {
        this.samplerDesc.minFilter = this.samplerDesc.magFilter = v;
    }
}


/**
 * @function load
 * @static
 * @memberof Texture
 * @description load an image from an url
 * @param {Context} cgp
 * @param {String} url
 * @param {Function} onFinished
 * @param {Object} settings
 * @return {Texture}
 */
cgp_texture_Texture.load = function (cgp, url, onFinished, settings)
{
    fetch(url).then((response) =>
    {
        const texture = new cgp_texture_Texture(cgp, { "name": url });

        response.blob().then((blob) =>
        {
            createImageBitmap(blob).then((imgBitmap) =>
            {
                texture.initTexture(imgBitmap);
                if (onFinished)onFinished(texture);
                else console.log("Texture.load no onFinished callback");
            }).catch((err) =>
            {
                if (onFinished)onFinished(cgp.getErrorTexture());
            });
        });
    });
};

;// CONCATENATED MODULE: ./src/core/cgp/cgp_state.js








// https://github.com/greggman/webgpu-utils
// https://developer.chrome.com/blog/from-webgl-to-webgpu/
// https://gpuweb.github.io/gpuweb/explainer/


/**
 * cables webgpu context/state manager
 * @class
 * @namespace external:CGP
 * @hideconstructor
 */
// const Context = function (_patch)
class WebGpuContext extends CGState
{
    constructor(_patch)
    {
        super();

        this.patch = _patch;

        this.lastErrorMsg = "";

        this._log = new Logger("WebGpuContext");
        this.gApi = CG.GAPI_WEBGPU;
        this._viewport = [0, 0, 256, 256];
        this._shaderStack = [];
        this._simpleShader = null;
        this.frame = 0;
        this.catchErrors = false;

        this._stackCullFaceFacing = [];
        this._stackDepthTest = [];
        this._stackCullFace = [];
        this._stackDepthFunc = [];
        this._stackDepthWrite = [];
        this._stackErrorScope = [];
        this._stackBlend = [];
        this._stackErrorScopeLogs = [];

        this._defaultBlend = {
            "color": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
            "alpha": {
                "operation": "add",
                "srcFactor": "one",
                "dstFactor": "zero",
            },
        };

        this.DEPTH_FUNCS = [
            "never",
            "always",
            "less",
            "less-equal",
            "greater",
            "greater-equal",
            "equal",
            "not-equal"
        ];

        this.CULL_MODES = [
            "none",
            "back",
            "front",
            "none" // both does not exist in webgpu
        ];
    }


    /// ////////////////////

    // getViewPort()
    // {
    //     return [0, 0, this.canvasWidth, this.canvasHeight];
    // }

    renderStart(cgp, identTranslate, identTranslateView)
    {
        this.frame++;
        this.pushErrorScope("cgpstate internal", "internal");
        this.pushErrorScope("cgpstate out-of-memory", "out-of-memory");

        if (!this._simpleShader)
        {
            this._simpleShader = new cgp_shader_Shader(this, "simple default shader");
            this._simpleShader.setSource(cgl_shader_default);
            this._simpleShader.addUniformFrag("4f", "color", [1, 1, 0, 1]);
        }

        this.fpsCounter.startFrame();

        this._startMatrixStacks(identTranslate, identTranslateView);
        this.setViewPort(0, 0, this.canvasWidth, this.canvasHeight);

        this.pushShader(this._simpleShader);
        this.pushDepthTest(true);
        this.pushDepthWrite(true);
        this.pushDepthFunc("less-equal");


        this.pushBlend(this._defaultBlend);

        this.emitEvent("beginFrame");
    }

    renderEnd()
    {
        this._endMatrixStacks();

        this.popShader();
        this.popDepthFunc();
        this.popDepthWrite();
        this.popDepthTest();

        this.popErrorScope();
        this.popErrorScope();

        if (this._stackErrorScope.length > 0)console.log("scope stack length invalid...");

        this.emitEvent("endFrame");
        this.fpsCounter.endFrame();
    }


    setViewPort(x, y, w, h)
    {
        this._viewport = [x, y, w, h];
    }

    /**
     * @function getViewPort
     * @memberof Context
     * @instance
     * @description get current gl viewport
     * @returns {Array} array [x,y,w,h]
     */
    getViewPort()
    {
        return this._viewPort;
    }

    createMesh(geom, glPrimitive)
    {
        return new CGP.Mesh(this, geom, glPrimitive);
    }

    /**
     * push a shader to the shader stack
     * @function pushShader
     * @memberof Context
     * @instance
     * @param {Object} shader
     * @function
    */
    pushShader(shader)
    {
        this._shaderStack.push(shader);
        // currentShader = shader;
    }

    /**
     * pop current used shader from shader stack
     * @function popShader
     * @memberof Context
     * @instance
     * @function
     */
    popShader()
    {
        if (this._shaderStack.length === 0) throw new Error("Invalid shader stack pop!");
        this._shaderStack.pop();
        // currentShader = this._shaderStack[this._shaderStack.length - 1];
    }

    getShader()
    {
        return this._shaderStack[this._shaderStack.length - 1];
        // if (currentShader) if (!this.frameStore || ((this.frameStore.renderOffscreen === true) == currentShader.offScreenPass) === true) return currentShader;
        // for (let i = this._shaderStack.length - 1; i >= 0; i--) if (this._shaderStack[i]) if (this.frameStore.renderOffscreen == this._shaderStack[i].offScreenPass) return this._shaderStack[i];
    }

    setDevice(device)
    {
        this.device = device;


        if (this._emptyTexture) this._emptyTexture = this._emptyTexture.dispose();
        if (this._defaultTexture) this._defaultTexture = this._defaultTexture.dispose();
        if (this._errorTexture) this._errorTexture = this._errorTexture.dispose();

        this.emitEvent("deviceChange");
    }

    pushErrorScope(name, options = {})
    {
        if (this.catchErrors)
        {
            this._stackErrorScope.push(name);
            this._stackErrorScopeLogs.push(options.logger || null);
            this.device.pushErrorScope(options.scope || "validation");
        }
    }

    popErrorScope(cb)
    {
        if (this.catchErrors)
        {
            const name = this._stackErrorScope.pop();
            const logger = this._stackErrorScopeLogs.pop();
            this.device.popErrorScope().then((error) =>
            {
                if (error)
                {
                    if (this.lastErrorMsg == error.message)
                    {
                        // this._log.warn("last error once more...");
                    }
                    else
                    {
                        (logger || this._log).error(error.constructor.name, "in", name);
                        (logger || this._log).error(error.message);
                    }
                    this.lastErrorMsg = error.message;

                    if (cb)cb(error);
                }
            });
        }
    }

    /**
     * push depth testing enabled state
     * @function pushDepthTest
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthTest(b)
    {
        this._stackDepthTest.push(b);
    }

    /**
     * current state of depth testing
     * @function stateDepthTest
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthTest()
    {
        return this._stackDepthTest[this._stackDepthTest.length - 1];
    }

    /**
     * pop depth testing state
     * @function popDepthTest
     * @memberof Context
     * @instance
     */
    popDepthTest()
    {
        this._stackDepthTest.pop();
    }

    // --------------------------------------
    // state depthwrite

    /**
     * push depth write enabled state
     * @function pushDepthWrite
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushDepthWrite(b)
    {
        b = b || false;
        this._stackDepthWrite.push(b);
    }

    /**
     * current state of depth writing
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateDepthWrite()
    {
        return this._stackDepthWrite[this._stackDepthWrite.length - 1];
    }

    /**
     * pop depth writing state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popDepthWrite()
    {
        this._stackDepthWrite.pop();
    }

    // --------------------------------------
    // state depthfunc

    /**
     * @function pushDepthFunc
     * @memberof Context
     * @instance
     * @param {string} f depth compare func
     */
    pushDepthFunc(f)
    {
        this._stackDepthFunc.push(f);
    }

    /**
     * @function stateDepthFunc
     * @memberof Context
     * @instance
     * @returns {string}
     */
    stateDepthFunc()
    {
        if (this._stackDepthFunc.length > 0) return this._stackDepthFunc[this._stackDepthFunc.length - 1];
        return false;
    }

    /**
     * pop depth compare func
     * @function popDepthFunc
     * @memberof Context
     * @instance
     */
    popDepthFunc()
    {
        this._stackDepthFunc.pop();
    }

    // --------------------------------------
    // state CullFace

    /**
     * push face culling face enabled state
     * @function pushCullFace
     * @param {Boolean} b enabled
     * @memberof Context
     * @instance
     */
    pushCullFace(b)
    {
        this._stackCullFace.push(b);
    }

    /**
     * current state of face culling
     * @function stateCullFace
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFace()
    {
        return this._stackCullFace[this._stackCullFace.length - 1];
    }

    /**
     * pop face culling enabled state
     * @function popCullFace
     * @memberof Context
     * @instance
     */
    popCullFace()
    {
        this._stackCullFace.pop();
    }

    // --------------------------------------
    // state CullFace Facing

    /**
     * push face culling face side
     * @function pushCullFaceFacing
     * @memberof Context
     * @param b
     * @instance
     */
    pushCullFaceFacing(b)
    {
        this._stackCullFaceFacing.push(b);
    }

    /**
     * current state of face culling side
     * @function stateCullFaceFacing
     * @returns {Boolean} enabled
     * @memberof Context
     * @instance
     */
    stateCullFaceFacing()
    {
        return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
    }

    /**
     * pop face culling face side
     * @function popCullFaceFacing
     * @memberof Context
     * @instance
     */
    popCullFaceFacing()
    {
        this._stackCullFaceFacing.pop();
    }

    pushBlend(b)
    {
        this._stackBlend.push(b);
    }

    popBlend()
    {
        this._stackBlend.pop();
    }

    stateBlend()
    {
        return this._stackBlend[this._stackBlend.length - 1];
    }

    getEmptyTexture()
    {
        if (this._emptyTexture) return this._emptyTexture;
        const size = 8;
        this._emptyTexture = new cgp_texture_Texture(this, {});
        this._emptyTexture.initFromData(CgTexture.getDefaultTextureData("empty", size), size, size);
        return this._emptyTexture;
    }

    getErrorTexture()
    {
        // if (this._errorTexture) return this._errorTexture;
        const size = 256;
        this._errorTexture = new cgp_texture_Texture(this, {});
        this._errorTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size, { "r": 1, "g": 0, "b": 0 }), size, size);
        return this._errorTexture;
    }

    getDefaultTexture()
    {
        if (this._defaultTexture) return this._defaultTexture;
        const size = 256;
        this._defaultTexture = new cgp_texture_Texture(this, {});
        this._defaultTexture.initFromData(CgTexture.getDefaultTextureData("stripes", size), size, size);
        return this._defaultTexture;
    }
}


;// CONCATENATED MODULE: ./src/core/cgp/cgp_pipeline.js



class Pipeline
{
    constructor(_cgp, name)
    {
        if (!_cgp) throw new Error("Pipeline constructed without cgp " + name);
        this._name = name;
        this._cgp = _cgp;
        this._isValid = true;
        this._log = new Logger("pipeline");

        this._pipeCfg = null;
        this._renderPipeline = null;

        this._bindGroups = [];

        this._shaderListeners = [];
        this.shaderNeedsPipelineUpdate = false;

        this._old = {};

        this.DEPTH_COMPARE_FUNCS_STRINGS = ["never", "less", "equal", "lessequal", "greater", "notequal", "greaterequal", "always"];

        this._cgp.on("deviceChange", () =>
        {
            this._renderPipeline = null;
        });
    }

    get isValid() { return this._isValid; }

    setName(name)
    {
        this._name = name;
    }

    setShaderListener(oldShader, newShader)
    {
        for (let i = 0; i < this._shaderListeners.length; i++) oldShader.off(this._shaderListeners[i]);

        this._shaderListeners.push(
            newShader.on("compiled", () =>
            {
                // console.log("pipe update shader compileeeeeee");
                // this.needsRebuildReason = "shader changed";
                this.shaderNeedsPipelineUpdate = "shader compiled";
            }));
    }


    getInfo()
    {
        // console.log(this.bindingGroupLayoutEntries);

        const arr = [
            "name: " + this._name,
            "bindgroups: " + this._bindGroups.length

        ];

        if (this.bindingGroupLayoutEntries)arr.push("layouts: " + this.bindingGroupLayoutEntries.length);

        // if (this.bindingGroupLayoutEntries)
        //     for (let i = 0; i < this.bindingGroupLayoutEntries.length; i++)
        //     {
        //         // const lines = JSON.stringify(this.bindingGroupLayoutEntries, 4, true).split(",");
        //         arr.push(...lines);
        //     }

        return arr;
    }

    setPipeline(shader, mesh)
    {
        if (!mesh || !shader)
        {
            console.log("pipeline unknown shader/mesh");
            return;
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("setPipeline", this.getInfo());

        let needsRebuildReason = "";
        if (!this._renderPipeline) needsRebuildReason = "no renderpipeline";
        if (!this._pipeCfg)needsRebuildReason = "no pipecfg";
        if (this._old.mesh != mesh)needsRebuildReason = "no mesh";
        if (this._old.shader != shader)
        {
            this.setShaderListener(this._old.shader, shader);
            needsRebuildReason = "shader changed";
        }

        if (shader.needsPipelineUpdate)
        {
            needsRebuildReason = "mesh needs update: " + shader.needsPipelineUpdate;
            shader.needsPipelineUpdate = false;
        }
        if (mesh.needsPipelineUpdate)needsRebuildReason = "mesh needs update";
        if (this.shaderNeedsPipelineUpdate)needsRebuildReason = "shader was recompiled: " + this.shaderNeedsPipelineUpdate;

        if (this._pipeCfg)
        {
            if (this._pipeCfg.depthStencil.depthWriteEnabled != this._cgp.stateDepthWrite())
            {
                needsRebuildReason = "depth changed";
                this._pipeCfg.depthStencil.depthWriteEnabled = this._cgp.stateDepthWrite();
            }

            if (this._pipeCfg.fragment.targets[0].blend != this._cgp.stateBlend())
            {
                needsRebuildReason = "blend changed";
                this._pipeCfg.fragment.targets[0].blend = this._cgp.stateBlend();
            }

            // "fragment": {
            //     "module": shader.gpuShaderModule,
            //     "entryPoint": "myFSMain",
            //     "targets": [
            //         {
            //             "format": this._cgp.presentationFormat,
            //             "blend":
            //         },


            if (this._cgp.stateDepthTest() === false)
            {
                if (this._pipeCfg.depthStencil.depthCompare != "never")
                {
                    this._pipeCfg.depthStencil.depthCompare = "never";
                    needsRebuildReason = "depth compare changed";
                }
            }
            else
            if (this._pipeCfg.depthStencil.depthCompare != this._cgp.stateDepthFunc())
            {
                needsRebuildReason = "depth state ";
                this._pipeCfg.depthStencil.depthCompare = this._cgp.stateDepththis._cgp.stateDepthFunc();
            }

            // console.log(this._pipeCfg.primitive.cullMode, this._cgp.stateCullFaceFacing());
            if (this._pipeCfg.primitive.cullMode != this._cgp.stateCullFaceFacing())
            {
                needsRebuildReason = "cullmode change";
                this._pipeCfg.primitive.cullMode = this._cgp.stateCullFaceFacing();
            }
        }

        this._cgp.currentPipeDebug =
        {
            "cfg": this._pipeCfg,
            "bindingGroupEntries": this.bindingGroupEntries,
            "bindingGroupLayoutEntries": this.bindingGroupLayoutEntries
        };


        if (needsRebuildReason != "")
        {
            console.log("rebuild pipe", needsRebuildReason);
            this._cgp.pushErrorScope("createPipeline", { "logger": this._log });

            this._bindGroups = [];

            this._pipeCfg = this.getPipelineObject(shader, mesh);
            this._old.device = this._cgp.device;
            this._old.shader = shader;
            this._old.mesh = mesh;
            this._renderPipeline = this._cgp.device.createRenderPipeline(this._pipeCfg);

            this._cgp.popErrorScope();
        }


        if (this._renderPipeline && this._isValid)
        {
            this._cgp.pushErrorScope("setpipeline", { "logger": this._log });


            this._cgp.passEncoder.setPipeline(this._renderPipeline);

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("updateUniforms");

            shader.incBindingCounter();

            if (!this._bindGroups[shader.bindingCounter])
            {
                const bindingGroupEntries = [];

                for (let i = 0; i < shader.bindingsVert.length; i++)
                {
                    if (shader.bindingsVert[i].getSizeBytes() > 0)
                    {
                        bindingGroupEntries.push(shader.bindingsVert[i].getBindingGroupEntry(this._cgp.device, shader.bindingCounter));
                    }
                    else console.log("shader defaultBindingVert size 0");
                }
                for (let i = 0; i < shader.bindingsFrag.length; i++)
                {
                    if (shader.bindingsFrag[i].getSizeBytes() > 0)
                    {
                        bindingGroupEntries.push(shader.bindingsFrag[i].getBindingGroupEntry(this._cgp.device, shader.bindingCounter));
                    }
                    else console.log("shader defaultBindingFrag size 0");
                }

                const bg = {
                    "label": "label2",
                    "layout": this.bindGroupLayout,
                    "entries": bindingGroupEntries
                };

                this._bindGroups[shader.bindingCounter] = this._cgp.device.createBindGroup(bg);
            }

            this._bindUniforms(shader, shader.bindingCounter);

            if (this._bindGroups[shader.bindingCounter]) this._cgp.passEncoder.setBindGroup(0, this._bindGroups[shader.bindingCounter]);


            // shader.bindingCounter++;

            if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

            this._cgp.popErrorScope();
        }
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();


        this.shaderNeedsPipelineUpdate = false;
    }

    getPipelineObject(shader, mesh)
    {
        this.bindingGroupLayoutEntries = [];

        for (let i = 0; i < shader.bindingsVert.length; i++)
        {
            if (shader.bindingsVert[i].getSizeBytes() > 0)
            {
                this.bindingGroupLayoutEntries.push(shader.bindingsVert[i].getBindingGroupLayoutEntry());
            }
            else console.log("shader defaultBindingVert size 0");
        }

        for (let i = 0; i < shader.bindingsFrag.length; i++)
        {
            if (shader.bindingsFrag[i].getSizeBytes() > 0)
            {
                this.bindingGroupLayoutEntries.push(shader.bindingsFrag[i].getBindingGroupLayoutEntry());
            }
            else console.log("shader defaultBindingFrag size 0");
        }
        // //////////

        this.bindGroupLayout = this._cgp.device.createBindGroupLayout(
            {
                "label": "bg layout " + this._name,
                "entries": this.bindingGroupLayoutEntries,
            });

        const pipelineLayout = this._cgp.device.createPipelineLayout({
            "label": "pipe layout " + this._name,
            "bindGroupLayouts": [this.bindGroupLayout]
        });


        let buffers = [
            // position
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 0, "offset": 0, "format": "float32x3" },
                ],
            },
            // texcoords
            {
                "arrayStride": 2 * 4, // 2 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 2, "offset": 0, "format": "float32x2", },
                ],
            },
            // normals
            {
                "arrayStride": 3 * 4, // 3 floats, 4 bytes each
                "attributes": [
                    { "shaderLocation": 1, "offset": 0, "format": "float32x3" },
                ],
            }];



        const pipeCfg = {
            // "layout": "auto",
            "label": this._name,
            "layout": pipelineLayout,
            "vertex": {
                "module": shader.gpuShaderModule,
                "entryPoint": "myVSMain",
                "buffers": buffers

            },
            "fragment": {
                "module": shader.gpuShaderModule,
                "entryPoint": "myFSMain",
                "targets": [
                    {
                        "format": this._cgp.presentationFormat,
                        "blend": this._cgp.stateBlend()
                    },
                ],
            },
            "primitive": {
                "topology": "triangle-list",
                "cullMode": this._cgp.stateCullFaceFacing(), // back/none/front

                // "point-list",
                // "line-list",
                // "line-strip",
                // "triangle-list",
                // "triangle-strip"
            },
            "depthStencil": {
                "depthWriteEnabled": this._cgp.stateDepthTest(),
                "depthCompare": this._cgp.stateDepthFunc(),
                "format": "depth24plus",
            },

        };

        return pipeCfg;
    }


    _bindUniforms(shader, inst)
    {
        // this._cgp.pushErrorScope("pipeline bind uniforms", { "logger": this._log });

        shader.bind();

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("bind uniforms vert", ["num:" + shader.bindingsVert.length]);
        for (let i = 0; i < shader.bindingsVert.length; i++) shader.bindingsVert[i].update(this._cgp, inst);
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("bind uniforms frag", ["num:" + shader.bindingsFrag.length]);
        for (let i = 0; i < shader.bindingsFrag.length; i++) shader.bindingsFrag[i].update(this._cgp, inst);
        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();



        // shader.defaultBindingVert.update(this._cgp);

        // this._cgp.popErrorScope((e) =>
        // {
        //     this._isValid = false;
        // });
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/cgp_mesh.js



class cgp_mesh_Mesh
{
    constructor(_cgp, __geom)
    {
        this._log = new Logger("cgl_mesh");
        this._cgp = _cgp;
        this._geom = null;
        this.numIndex = 0;
        this.instances = 1;

        this._pipe = new Pipeline(this._cgp, "new mesh");
        this._numNonIndexed = 0;
        this._positionBuffer = null;
        this._bufVerticesIndizes = null;
        this._attributes = [];
        this._needsPipelineUpdate = false;

        if (__geom) this.setGeom(__geom);
    }

    _createBuffer(device, data, usage)
    {
        let bo = {
            "size": data.byteLength,
            "usage": usage,
            "mappedAtCreation": true,
        };
        // ifbo.stepMode = "instance";
        const buffer = device.createBuffer(bo);
        const dst = new data.constructor(buffer.getMappedRange());
        dst.set(data);
        buffer.unmap();
        return buffer;
    }

    /**
     * @function setGeom
     * @memberof Mesh
     * @instance
     * @description set geometry for mesh
     * @param {Geometry} geom geometry
     * @param {boolean} removeRef
     */
    setGeom(geom, removeRef)
    {
        this._needsPipelineUpdate = true;
        this._geom = geom;
        this._disposeAttributes();

        this._positionBuffer = this._createBuffer(this._cgp.device, new Float32Array(geom.vertices), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        let vi = geom.verticesIndices;
        if (!geom.isIndexed()) vi = Array.from(Array(geom.vertices.length / 3).keys());
        this._numIndices = vi.length;
        this._indicesBuffer = this._createBuffer(this._cgp.device, new Uint32Array(vi), GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST);

        if (geom.texCoords && geom.texCoords.length) this.setAttribute("texCoords", geom.texCoords, 2);
        if (geom.vertexNormals && geom.vertexNormals.length) this.setAttribute("normals", geom.vertexNormals, 3);

        this.setAttribute("normals", geom.vertexNormals, 3);
    }


    _disposeAttributes()
    {
        this._needsPipelineUpdate = true;
        for (let i = 0; i < this._attributes.length; i++)
        {
            this._attributes[i].buffer.destroy();
        }
        this._attributes.length = 0;
    }

    dispose()
    {
        this._disposeAttributes();
    }

    /**
     * @function setAttribute
     * @description update attribute
     * @memberof Mesh
     * @instance
     * @param {String} name attribute name
     * @param {Array} array data
     * @param {Number} itemSize
     * @param {Object} options
     */
    setAttribute(name, array, itemSize, options = {})
    {
        if (!array)
        {
            this._log.error("mesh addAttribute - no array given! " + name);
            throw new Error();
        }

        let instanced = false;
        if (options.instanced) instanced = options.instanced;

        const buffer = this._createBuffer(this._cgp.device, new Float32Array(array), GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST);

        const attr = {
            "buffer": buffer,
            "name": name,
            "instanced": instanced,
        };
        this._attributes.push(attr);

        return attr;
    }


    render()
    {
        if (!this._positionBuffer) return;
        if (this.instances <= 0) return;

        const shader = this._cgp.getShader();
        if (shader)shader.bind();

        if (!this._cgp.getShader() || !this._cgp.getShader().isValid)
        {
            // this.status = "shader invalid";
            return;
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.push("mesh", ["geom " + this._geom.name, "shader " + this._cgp.getShader().getName()]);

        this._pipe.setName("mesh " + this._geom.name + " " + this._cgp.getShader().getName());
        this._pipe.setPipeline(this._cgp.getShader(), this);


        if (this._pipe.isValid)
        {
            this._cgp.passEncoder.setVertexBuffer(0, this._positionBuffer);
            for (let i = 0; i < this._attributes.length; i++)
            {
                this._cgp.passEncoder.setVertexBuffer(i + 1, this._attributes[i].buffer);
            }

            this._cgp.passEncoder.setIndexBuffer(this._indicesBuffer, "uint32");

            if (this._numNonIndexed)
                this._cgp.passEncoder.draw(this._numIndices, this.instances);
            else
                this._cgp.passEncoder.drawIndexed(this._numIndices, this.instances);
        }

        if (this._cgp.frameStore.branchProfiler) this._cgp.frameStore.branchStack.pop();

        // if (shader)shader.unbind();
    }
}

;// CONCATENATED MODULE: ./src/core/cgp/index.js










const cgp_CGP = {
    "Context": WebGpuContext,
    "Shader": cgp_shader_Shader,
    "Mesh": cgp_mesh_Mesh,
    "Pipeline": Pipeline,
    "Texture": cgp_texture_Texture,
    "Binding": Binding,
    "Uniform": cgp_uniform_Uniform,
    "MESHES": MESHES,
    "GPUBuffer": GPUBuffer
};

window.CABLES = window.CABLES || {};
window.CABLES.CGP = cgp_CGP;
window.CGP = cgp_CGP;




;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer.js



// todo: convert to prototyped...

/**
 * a framebuffer
 * @constructor
 * @class
 * @constructs Framebuffer
 * @param {Context} _cgl cgl
 * @param {Number} _w width
 * @param {Number} _h height
 * @param {Object} options
 */
const Framebuffer = function (_cgl, _w, _h, options)
{
    const cgl = _cgl;
    this._log = new Logger("Framebuffer");
    this.valid = true;

    let depthTextureExt = cgl.gl.DEPTH_TEXTURE;
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("WEBKIT_WEBGL_depth_texture");
    if (!depthTextureExt) depthTextureExt = cgl.enableExtension("MOZ_WEBGL_depth_texture");

    if (!depthTextureExt)
    {
        this._log.error("NO_DEPTH_TEXTURE", "no depth texture support");
        return;
    }

    let width = _w || 512;
    let height = _h || 512;

    options = options || {
        "isFloatingPointTexture": false,
    };

    if (!options.hasOwnProperty("clear")) options.clear = true;
    if (!options.hasOwnProperty("filter")) options.filter = Texture.FILTER_LINEAR;

    const texture = new Texture(cgl, {
        "isFloatingPointTexture": options.isFloatingPointTexture,
        "filter": options.filter,
        "wrap": options.wrap || Texture.CLAMP_TO_EDGE
    });

    let textureDepth = null;
    if (depthTextureExt)
    {
        textureDepth = new Texture(cgl, {
            "isDepthTexture": true,
        });
    }
    this._options = options;

    const frameBuf = cgl.gl.createFramebuffer();
    const depthBuffer = cgl.gl.createRenderbuffer();

    this.getWidth = function ()
    {
        return width;
    };
    this.getHeight = function ()
    {
        return height;
    };

    /**
     * get native gl framebuffer
     * @function getGlFrameBuffer
     * @memberof Framebuffer
     * @returns {Object} framebuffer
     */
    this.getGlFrameBuffer = function ()
    {
        return frameBuf;
    };

    /**
     * get depth renderbuffer
     * @function getDepthRenderBuffer
     * @memberof Framebuffer
     * @returns {Object} renderbuffer
     */
    this.getDepthRenderBuffer = function ()
    {
        return depthBuffer;
    };

    /**
     * get color texture
     * @function getTextureColor
     * @memberof Framebuffer
     * @returns {Texture} rgba texture
     */
    this.getTextureColor = function ()
    {
        return texture;
    };

    /**
     * get depth texture
     * @function getTextureDepth
     * @memberof Framebuffer
     * @returns {Texture} depth texture
     */
    this.getTextureDepth = function ()
    {
        return textureDepth;
    };

    this.setFilter = function (f)
    {
        texture.filter = f;
        texture.setSize(width, height);
    };

    this.setSize = function (w, h)
    {
        if (w < 2) w = 2;
        if (h < 2) h = 2;

        width = Math.ceil(w);
        height = Math.ceil(h);

        cgl.profileData.profileFrameBuffercreate++;

        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, depthBuffer);

        texture.setSize(width, height);
        if (textureDepth) textureDepth.setSize(width, height);

        // if(depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width,height);
        if (depthTextureExt) cgl.gl.renderbufferStorage(cgl.gl.RENDERBUFFER, cgl.gl.DEPTH_COMPONENT16, width, height);

        cgl.gl.framebufferTexture2D(cgl.gl.FRAMEBUFFER, cgl.gl.COLOR_ATTACHMENT0, cgl.gl.TEXTURE_2D, texture.tex, 0);

        if (depthTextureExt)
        {
            cgl.gl.framebufferRenderbuffer(cgl.gl.FRAMEBUFFER, cgl.gl.DEPTH_ATTACHMENT, cgl.gl.RENDERBUFFER, depthBuffer);
            cgl.gl.framebufferTexture2D(
                cgl.gl.FRAMEBUFFER,
                cgl.gl.DEPTH_ATTACHMENT, // safari needs DEPTH_ATTACHMENT NOT DEPTH_ATTACHMENT16
                // cgl.gl.DEPTH_COMPONENT16,
                cgl.gl.TEXTURE_2D,
                textureDepth.tex,
                0,
            );
        }

        if (!cgl.gl.isFramebuffer(frameBuf)) throw new Error("Invalid framebuffer");
        const status = cgl.gl.checkFramebufferStatus(cgl.gl.FRAMEBUFFER);

        switch (status)
        {
        case cgl.gl.FRAMEBUFFER_COMPLETE:
            break;
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", width, height, texture.tex, depthBuffer);
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            this.valid = false;
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            this.valid = false;
            this._log.warn(width, height, options);

            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        case 0x8CDB:
            this._log.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");
            this.valid = false;
            break;
        default:
            this._log.warn("incomplete framebuffer", status);
            this.valid = false;
            throw new Error("Incomplete framebuffer: " + status);
        }

        cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, null);
        cgl.gl.bindRenderbuffer(cgl.gl.RENDERBUFFER, null);
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, null);
    };

    this.renderStart = function ()
    {
        cgl.pushModelMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, frameBuf);
        cgl.pushGlFrameBuffer(frameBuf);
        cgl.pushFrameBuffer(this);

        cgl.pushPMatrix();
        cgl.gl.viewport(0, 0, width, height);

        if (this._options.clear)
        {
            cgl.gl.clearColor(0, 0, 0, 0);
            cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
        }
    };

    this.renderEnd = function ()
    {
        cgl.popPMatrix();
        cgl.gl.bindFramebuffer(cgl.gl.FRAMEBUFFER, cgl.popGlFrameBuffer());
        cgl.popFrameBuffer();

        cgl.popModelMatrix();
        cgl.resetViewPort();
    };


    this.delete = function ()
    {
        texture.delete();
        this.valid = false;
        if (textureDepth) textureDepth.delete();
        cgl.gl.deleteRenderbuffer(depthBuffer);
        cgl.gl.deleteFramebuffer(frameBuf);
    };

    this.dispose = this.delete;

    this.setSize(width, height);
};



;// CONCATENATED MODULE: ./src/core/cgl/cgl_framebuffer2.js
// * see framebuffer1






const Framebuffer2 = function (cgl, w, h, options)
{
    this._log = new Logger("cgl_framebuffer2");
    if (cgl.glVersion == 1) return this._log.error("framebuffer2 used on webgl1");
    this.Framebuffer2DrawTargetsDefault = null;
    this.Framebuffer2BlittingFramebuffer = null;
    this.Framebuffer2FinalFramebuffer = null;
    this._cgl = cgl;

    this._cgl.printError("before framebuffer2 constructor");

    this._width = 0;
    this._height = 0;
    this.valid = true;

    this._depthRenderbuffer = null;
    this._frameBuffer = null;
    this._textureFrameBuffer = null;
    this._colorRenderbuffers = [];
    this._drawTargetArray = [];
    this._disposed = false;

    if (!this.Framebuffer2BlittingFramebuffer) this.Framebuffer2BlittingFramebuffer = cgl.gl.createFramebuffer();
    if (!this.Framebuffer2FinalFramebuffer) this.Framebuffer2FinalFramebuffer = cgl.gl.createFramebuffer();

    if (!this.Framebuffer2DrawTargetsDefault) this.Framebuffer2DrawTargetsDefault = [cgl.gl.COLOR_ATTACHMENT0];

    this._options = options || {
        "isFloatingPointTexture": false,
    };

    // this._cgl.printError("fb2 before");

    this.name = this._options.name || "unknown";

    this._cgl.profileData.addHeavyEvent("framebuffer create", this.name);

    if (!this._options.hasOwnProperty("numRenderBuffers")) this._options.numRenderBuffers = 1;
    if (!this._options.hasOwnProperty("depth")) this._options.depth = true;
    if (!this._options.hasOwnProperty("clear")) this._options.clear = true;
    if (!this._options.hasOwnProperty("multisampling"))
    {
        this._options.multisampling = false;
        this._options.multisamplingSamples = 0;
    }

    if (this._options.multisamplingSamples)
    {
        if (this._cgl.glSlowRenderer) this._options.multisamplingSamples = 0;
        if (!this._cgl.gl.MAX_SAMPLES) this._options.multisamplingSamples = 0;
        else this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples);
    }

    if (!this._options.hasOwnProperty("filter")) this._options.filter = Texture.FILTER_LINEAR;
    if (!this._options.hasOwnProperty("wrap")) this._options.wrap = Texture.WRAP_REPEAT;

    this._numRenderBuffers = this._options.numRenderBuffers;
    this._colorTextures = [];

    this.clearColors = [];
    for (let i = 0; i < this._numRenderBuffers; i++) this.clearColors.push([0, 0, 0, 1]);


    if (!options.pixelFormat)
    {
        if (options.isFloatingPointTexture) this._options.pixelFormat = Texture.PFORMATSTR_RGBA32F;
        else this._options.pixelFormat = Texture.PFORMATSTR_RGBA8UB;
    }

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i] = new Texture(cgl, {
            "name": "fb2 " + this.name + " " + i,
            "isFloatingPointTexture": this._options.isFloatingPointTexture,
            "anisotropic": this._options.anisotropic || 0,
            "pixelFormat": this._options.pixelFormat,
            "filter": this._options.filter,
            "wrap": this._options.wrap,
        });
    }



    let fil = Texture.FILTER_NEAREST;
    if (this._options.shadowMap) fil = Texture.FILTER_LINEAR;

    const defaultTexSize = 512;

    if (this._options.depth)
    {
        this._textureDepth = new Texture(cgl,
            {
                "name": "fb2 depth " + this.name,
                "isDepthTexture": true,
                "filter": fil,
                "shadowMap": this._options.shadowMap || false,
                "width": w || defaultTexSize,
                "height": h || defaultTexSize,
            });
    }

    if (cgl.aborted) return;

    this.setSize(w || defaultTexSize, h || defaultTexSize);

    this._cgl.printError("framebuffer2 constructor");
};

Framebuffer2.prototype.getWidth = function ()
{
    return this._width;
};
Framebuffer2.prototype.getHeight = function ()
{
    return this._height;
};

Framebuffer2.prototype.getGlFrameBuffer = function ()
{
    return this._frameBuffer;
};

Framebuffer2.prototype.getDepthRenderBuffer = function ()
{
    return this._depthRenderbuffer;
};

Framebuffer2.prototype.getTextureColor = function ()
{
    return this._colorTextures[0];
};

Framebuffer2.prototype.getTextureColorNum = function (i)
{
    return this._colorTextures[i];
};

Framebuffer2.prototype.getTextureDepth = function ()
{
    return this._textureDepth;
};

Framebuffer2.prototype.setFilter = function (f)
{
    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].filter = f;
        this._colorTextures[i].setSize(this._width, this._height);
    }
};

Framebuffer2.prototype.delete = Framebuffer2.prototype.dispose = function ()
{
    this._disposed = true;
    let i = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].delete();
    // this._texture.delete();
    if (this._textureDepth) this._textureDepth.delete();
    for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
    this._cgl.gl.deleteFramebuffer(this._frameBuffer);
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
};

Framebuffer2.prototype.setSize = function (w, h)
{
    if (this._disposed) return this._log.warn("disposed framebuffer setsize...");
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    let i = 0;

    this._width = this._cgl.checkTextureSize(w);
    this._height = this._cgl.checkTextureSize(h);

    this._cgl.profileData.profileFrameBuffercreate++;

    if (this._frameBuffer)
    {
        for (i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
        // this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffer);
        this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer);
        this._cgl.gl.deleteFramebuffer(this._frameBuffer);
        this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer();
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();

    const depth = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        const renderBuffer = this._cgl.gl.createRenderbuffer();

        // color renderbuffer

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, renderBuffer);

        const info = Texture.setUpGlPixelFormat(this._cgl, this._options.pixelFormat);
        let internFormat = info.glInternalFormat;

        // if (this._options.isFloatingPointTexture)
        // {
        if (CGL.Texture.isPixelFormatHalfFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        else if (CGL.Texture.isPixelFormatFloat(info.pixelFormat))
        {
            if (!this._cgl.enableExtension("OES_texture_float_linear"))
            {
                this._log.warn("no linear pixelformat,using nearest");
                this._options.filter = Texture.FILTER_NEAREST;
                this.setFilter(this._options.filter);
            }
        }
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RGBA32F || info.pixelFormat == Texture.PFORMATSTR_R11FG11FB10F
        // else if (info.pixelFormat == Texture.PFORMATSTR_RG16F)
        // {
        //     const extcb = this._cgl.enableExtension("EXT_color_buffer_float");

        //     if (!this._cgl.enableExtension("OES_texture_float_linear"))
        //     {
        //         console.log("no linear pixelformat,switching to nearest");
        //         this._options.filter = Texture.FILTER_NEAREST;
        //         this.setFilter(this._options.filter);
        //     }
        // }
        // }

        if (this._options.multisampling && this._options.multisamplingSamples)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, internFormat, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, internFormat, this._width, this._height);
        }



        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, renderBuffer);
        this._colorRenderbuffers[i] = renderBuffer;
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    for (i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    if (this._options.depth)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
    }

    // depth renderbuffer

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);


    let depthType = this._cgl.gl.DEPTH_COMPONENT32F;

    if (this._cgl.glSlowRenderer) depthType = this._cgl.gl.DEPTH_COMPONENT16;
    if (depth)
    {
        this._textureDepth.setSize(this._width, this._height);
        this._depthRenderbuffer = this._cgl.gl.createRenderbuffer();

        this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
        if (this._options.isFloatingPointTexture)
        {
            if (this._options.multisampling) this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            else this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }
        else if (this._options.multisampling)
        {
            this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, depthType, this._width, this._height);
            // this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER,depthType, this._width, this._height);
        }
        else
        {
            this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, depthType, this._width, this._height);
        }

        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);
    }

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer);

    this._drawTargetArray.length = 0;
    for (i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);

    // this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);


    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) this._log.warn("invalid framebuffer");// throw new Error("Invalid framebuffer");
    const status = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (status != this._cgl.gl.FRAMEBUFFER_COMPLETE)
    {
        this._log.error("framebuffer incomplete: " + this.name, this);
        this._log.log("options", this._options);
        this._log.log("options pixelformat", this._options.pixelFormat);

        switch (status)
        {
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this);
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");
        case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            this._log.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");
        case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
            this._log.warn("FRAMEBUFFER_UNSUPPORTED");
            throw new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");
        default:
            this.valid = false;
            this._log.error("incomplete framebuffer", status, this._frameBuffer);
            this._cgl.printError();

            this._frameBuffer = null;
            // debugger;
            throw new Error("Incomplete framebuffer: " + status);

        // throw("Incomplete framebuffer: " + status);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);

    // this._cgl.printError("fb setsize");
};

Framebuffer2.prototype.renderStart = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderStart...");
    this._cgl.checkFrameStarted("fb2 renderstart");
    this._cgl.pushModelMatrix(); // needed ??

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    this._cgl.pushGlFrameBuffer(this._frameBuffer);
    this._cgl.pushFrameBuffer(this);

    this._cgl.pushPMatrix();
    this._cgl.pushViewPort(0, 0, this._width, this._height);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    if (this._options.clear)
    {
        this._cgl.gl.clearColor(0, 0, 0, 0);
        this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT);
    }
};

Framebuffer2.prototype.clear = function ()
{
    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);
    }
    else this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);

    this._cgl.gl.drawBuffers(this._drawTargetArray);

    for (let i = 0; i < this._numRenderBuffers; i++)
    {
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, this.clearColors[i]);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);
};

Framebuffer2.prototype.renderEnd = function ()
{
    if (this._disposed) return this._log.warn("disposed framebuffer renderEnd...");
    this._cgl.popPMatrix();

    this._cgl.profileData.profileFramebuffer++;


    if (this._numRenderBuffers <= 1)
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer);
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer);

        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
    }
    else
    {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer);

        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[i]);


            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);
            this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null);

            this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer);
            this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer);

            // this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, i, [0.0, 0.0, 0.0, 1.0]);



            let flags = this._cgl.gl.COLOR_BUFFER_BIT;
            if (i == 0) flags |= this._cgl.gl.DEPTH_BUFFER_BIT;

            this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, flags, this._cgl.gl.NEAREST);
        }
    }

    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer());
    this._cgl.popFrameBuffer();

    this._cgl.popModelMatrix();
    // this._cgl.resetViewPort();
    this._cgl.popViewPort();


    if (this._colorTextures[0].filter == Texture.FILTER_MIPMAP)
    {
        for (let i = 0; i < this._numRenderBuffers; i++)
        {
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex);
            this._colorTextures[i].updateMipMap();
            this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
        }
    }
};



/// ///////

;// CONCATENATED MODULE: ./src/core/cgl/cgl_marker.js
const Marker = function (_cgl) // deprecated...
{
    this.draw = function (cgl, _size, depthTest) {};
};

const WirePoint = function (cgl) // deprecated...
{
    this.render = function (_cgl, _size) {};
};

const WireCube = function (cgl) // deprecated...
{
    this.render = function (_cgl, sizeX, sizeY, sizeZ) {};
};

;// CONCATENATED MODULE: ./src/core/cgl/cgl_unicolorshader.js


class UniColorShader
{
    constructor(_cgl)
    {
        this.shader = new CGL.Shader(_cgl, "markermaterial");

        const frag = ""
            .endl() + "void main()"
            .endl() + "{"
            .endl() + "    outColor = vec4(color.rgb,1.0);"
            .endl() + "}";


        const vert = ""
            .endl() + "IN vec3 vPosition;"
            .endl() + "UNI mat4 projMatrix;"
            .endl() + "UNI mat4 mvMatrix;"

            .endl() + "void main()"
            .endl() + "{"
            .endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);"
            .endl() + "}";

        this.shader.setSource(vert, frag);
        this.coloruni = this.shader.addUniformFrag("4f", "color", [1, 0.777, 1, 1]);
    }

    setColor(r, g, b, a)
    {
        this.coloruni.set(r, g, b, a);
    }
}

;// CONCATENATED MODULE: ./src/core/cgl/index.js






















const cgl_CGL = {
    "Framebuffer": Framebuffer,
    "Framebuffer2": Framebuffer2,
    "Geometry": Geometry,
    "BoundingBox": BoundingBox,
    "Marker": Marker,
    "WirePoint": WirePoint,
    "WireCube": WireCube,
    "MatrixStack": MatrixStack,
    "Mesh": Mesh,
    "MESH": MESH,
    "ShaderLibMods": ShaderLibMods,
    "Shader": Shader,
    "Uniform": Uniform,
    "MESHES": MESHES,
    "Context": Context,
    "Texture": Texture,
    "TextureEffect": TextureEffect,
    "isWindows": isWindows,
    "getWheelSpeed": getWheelSpeed,
    "getWheelDelta": getWheelDelta,
    "onLoadingAssetsFinished": onLoadingAssetsFinished,
    "ProfileData": ProfileData,
    "UniColorShader": UniColorShader,
    ...constants_CONSTANTS.BLEND_MODES,
    ...constants_CONSTANTS.SHADER,
    ...constants_CONSTANTS.MATH,
    ...constants_CONSTANTS.BLEND_MODES,
};

window.CGL = cgl_CGL;





;// CONCATENATED MODULE: ./src/core/index.js

















window.CABLES = window.CABLES || {};

CABLES.CGL = cgl_CGL;
CABLES.CG = CG;
CABLES.CGP = cgp_CGP;
CABLES.EMBED = EMBED;
CABLES.Link = Link;
CABLES.Port = Port;
CABLES.Op = Op;
CABLES.Profiler = Profiler;
CABLES.Patch = core_patch;
CABLES.Timer = Timer;
CABLES.WEBAUDIO = WEBAUDIO;
CABLES.Variable = Variable;
CABLES.LoadingStatus = LoadingStatus;
CABLES.now = now;
CABLES.internalNow = internalNow;



CABLES = Object.assign(CABLES,
    utils_namespaceObject,
    anim_namespaceObject,
    CONSTANTS.PORT,
    CONSTANTS.PACO,
    CONSTANTS.ANIM,
    CONSTANTS.OP
);

/* harmony default export */ const core = (CABLES);

if (!(function () { return !this; }())) console.warn("not in strict mode: index core"); // eslint-disable-line

CABLES = __webpack_exports__["default"];
/******/ })()
;


var CABLES = CABLES || {}; CABLES.build = {"timestamp":1736760273867,"created":"2025-01-13T09:24:33.867Z","git":{"branch":"master","commit":"0e07848fd62e35a0a77f09c4c90a3fcbd6cb9f8f","date":"1736756567","message":"canvasinfo"}};
(()=>{"use strict";var t={d:(n,a)=>{for(var r in a)t.o(a,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:a[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ARRAY_TYPE:()=>f,EPSILON:()=>M,RANDOM:()=>l,equals:()=>d,setMatrixArrayType:()=>v,toRadian:()=>m});var a={};t.r(a),t.d(a,{LDU:()=>j,add:()=>z,adjoint:()=>S,clone:()=>y,copy:()=>p,create:()=>x,determinant:()=>R,equals:()=>Y,exactEquals:()=>Q,frob:()=>V,fromRotation:()=>D,fromScaling:()=>F,fromValues:()=>w,identity:()=>q,invert:()=>P,mul:()=>_,multiply:()=>T,multiplyScalar:()=>X,multiplyScalarAndAdd:()=>Z,rotate:()=>I,scale:()=>E,set:()=>g,str:()=>L,sub:()=>B,subtract:()=>O,transpose:()=>A});var r={};t.r(r),t.d(r,{add:()=>it,clone:()=>k,copy:()=>U,create:()=>N,determinant:()=>J,equals:()=>ft,exactEquals:()=>Mt,frob:()=>ot,fromRotation:()=>at,fromScaling:()=>rt,fromTranslation:()=>ut,fromValues:()=>C,identity:()=>W,invert:()=>H,mul:()=>lt,multiply:()=>K,multiplyScalar:()=>ct,multiplyScalarAndAdd:()=>st,rotate:()=>$,scale:()=>tt,set:()=>G,str:()=>et,sub:()=>vt,subtract:()=>ht,translate:()=>nt});var u={};t.r(u),t.d(u,{add:()=>Yt,adjoint:()=>At,clone:()=>dt,copy:()=>xt,create:()=>bt,determinant:()=>Pt,equals:()=>Nt,exactEquals:()=>Bt,frob:()=>Qt,fromMat2d:()=>Lt,fromMat4:()=>mt,fromQuat:()=>Vt,fromRotation:()=>Dt,fromScaling:()=>Ft,fromTranslation:()=>Et,fromValues:()=>yt,identity:()=>qt,invert:()=>gt,mul:()=>kt,multiply:()=>St,multiplyScalar:()=>Zt,multiplyScalarAndAdd:()=>_t,normalFromMat4:()=>jt,projection:()=>zt,rotate:()=>Tt,scale:()=>It,set:()=>pt,str:()=>Ot,sub:()=>Ut,subtract:()=>Xt,translate:()=>Rt,transpose:()=>wt});var e={};t.r(e),t.d(e,{add:()=>Ln,adjoint:()=>nn,clone:()=>Ct,copy:()=>Gt,create:()=>Wt,determinant:()=>an,equals:()=>Qn,exactEquals:()=>On,frob:()=>Fn,fromQuat:()=>An,fromQuat2:()=>xn,fromRotation:()=>ln,fromRotationTranslation:()=>dn,fromRotationTranslationScale:()=>wn,fromRotationTranslationScaleOrigin:()=>gn,fromScaling:()=>fn,fromTranslation:()=>Mn,fromValues:()=>Ht,fromXRotation:()=>vn,fromYRotation:()=>bn,fromZRotation:()=>mn,frustum:()=>Pn,getRotation:()=>qn,getScaling:()=>pn,getTranslation:()=>yn,identity:()=>Kt,invert:()=>tn,lookAt:()=>In,mul:()=>Yn,multiply:()=>rn,multiplyScalar:()=>jn,multiplyScalarAndAdd:()=>zn,ortho:()=>Tn,perspective:()=>Sn,perspectiveFromFieldOfView:()=>Rn,rotate:()=>on,rotateX:()=>hn,rotateY:()=>cn,rotateZ:()=>sn,scale:()=>en,set:()=>Jt,str:()=>Dn,sub:()=>Xn,subtract:()=>Vn,targetTo:()=>En,translate:()=>un,transpose:()=>$t});var o={};t.r(o),t.d(o,{add:()=>Wn,angle:()=>wa,bezier:()=>va,ceil:()=>Jn,clone:()=>_n,copy:()=>kn,create:()=>Zn,cross:()=>Ma,dist:()=>Da,distance:()=>ua,div:()=>Ea,divide:()=>Hn,dot:()=>sa,equals:()=>Sa,exactEquals:()=>Pa,floor:()=>Kn,forEach:()=>ja,fromValues:()=>Nn,hermite:()=>la,inverse:()=>ha,len:()=>La,length:()=>Bn,lerp:()=>fa,max:()=>ta,min:()=>$n,mul:()=>Ia,multiply:()=>Gn,negate:()=>ia,normalize:()=>ca,random:()=>ba,rotateX:()=>ya,rotateY:()=>pa,rotateZ:()=>qa,round:()=>na,scale:()=>aa,scaleAndAdd:()=>ra,set:()=>Un,sqrDist:()=>Fa,sqrLen:()=>Va,squaredDistance:()=>ea,squaredLength:()=>oa,str:()=>Aa,sub:()=>Ta,subtract:()=>Cn,transformMat3:()=>da,transformMat4:()=>ma,transformQuat:()=>xa,zero:()=>ga});var i={};t.r(i),t.d(i,{add:()=>Za,ceil:()=>ka,clone:()=>Oa,copy:()=>Ya,create:()=>za,cross:()=>or,dist:()=>xr,distance:()=>Ka,div:()=>dr,divide:()=>Na,dot:()=>er,equals:()=>vr,exactEquals:()=>lr,floor:()=>Ua,forEach:()=>wr,fromValues:()=>Qa,inverse:()=>rr,len:()=>pr,length:()=>tr,lerp:()=>ir,max:()=>Ca,min:()=>Wa,mul:()=>mr,multiply:()=>Ba,negate:()=>ar,normalize:()=>ur,random:()=>hr,round:()=>Ga,scale:()=>Ha,scaleAndAdd:()=>Ja,set:()=>Xa,sqrDist:()=>yr,sqrLen:()=>qr,squaredDistance:()=>$a,squaredLength:()=>nr,str:()=>fr,sub:()=>br,subtract:()=>_a,transformMat4:()=>cr,transformQuat:()=>sr,zero:()=>Mr});var h={};t.r(h),t.d(h,{add:()=>$r,calculateW:()=>Fr,clone:()=>Gr,conjugate:()=>Yr,copy:()=>Jr,create:()=>gr,dot:()=>au,equals:()=>su,exactEquals:()=>cu,exp:()=>Lr,fromEuler:()=>Zr,fromMat3:()=>Xr,fromValues:()=>Hr,getAngle:()=>Rr,getAxisAngle:()=>Sr,identity:()=>Ar,invert:()=>Qr,len:()=>eu,length:()=>uu,lerp:()=>ru,ln:()=>Vr,mul:()=>tu,multiply:()=>Tr,normalize:()=>hu,pow:()=>jr,random:()=>Or,rotateX:()=>Ir,rotateY:()=>Er,rotateZ:()=>Dr,rotationTo:()=>Mu,scale:()=>nu,set:()=>Kr,setAxes:()=>lu,setAxisAngle:()=>Pr,slerp:()=>zr,sqlerp:()=>fu,sqrLen:()=>iu,squaredLength:()=>ou,str:()=>_r});var c={};t.r(c),t.d(c,{add:()=>Ou,clone:()=>bu,conjugate:()=>Nu,copy:()=>wu,create:()=>vu,dot:()=>Zu,equals:()=>Ku,exactEquals:()=>Ju,fromMat4:()=>qu,fromRotation:()=>pu,fromRotationTranslation:()=>xu,fromRotationTranslationValues:()=>du,fromTranslation:()=>yu,fromValues:()=>mu,getDual:()=>Su,getReal:()=>Pu,getTranslation:()=>Iu,identity:()=>gu,invert:()=>Bu,len:()=>Uu,length:()=>ku,lerp:()=>_u,mul:()=>Yu,multiply:()=>Qu,normalize:()=>Gu,rotateAroundAxis:()=>zu,rotateByQuatAppend:()=>Vu,rotateByQuatPrepend:()=>ju,rotateX:()=>Du,rotateY:()=>Fu,rotateZ:()=>Lu,scale:()=>Xu,set:()=>Au,setDual:()=>Tu,setReal:()=>Ru,sqrLen:()=>Cu,squaredLength:()=>Wu,str:()=>Hu,translate:()=>Eu});var s={};t.r(s),t.d(s,{add:()=>ue,angle:()=>De,ceil:()=>he,clone:()=>te,copy:()=>ae,create:()=>$u,cross:()=>ge,dist:()=>Xe,distance:()=>be,div:()=>Ye,divide:()=>ie,dot:()=>we,equals:()=>je,exactEquals:()=>Ve,floor:()=>ce,forEach:()=>Be,fromValues:()=>ne,inverse:()=>pe,len:()=>ze,length:()=>de,lerp:()=>Ae,max:()=>Me,min:()=>se,mul:()=>Qe,multiply:()=>oe,negate:()=>ye,normalize:()=>qe,random:()=>Pe,rotate:()=>Ee,round:()=>fe,scale:()=>le,scaleAndAdd:()=>ve,set:()=>re,sqrDist:()=>Ze,sqrLen:()=>_e,squaredDistance:()=>me,squaredLength:()=>xe,str:()=>Le,sub:()=>Oe,subtract:()=>ee,transformMat2:()=>Se,transformMat2d:()=>Re,transformMat3:()=>Te,transformMat4:()=>Ie,zero:()=>Fe});var M=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array,l=Math.random;function v(t){f=t}var b=Math.PI/180;function m(t){return t*b}function d(t,n){return Math.abs(t-n)<=M*Math.max(1,Math.abs(t),Math.abs(n))}function x(){var t=new f(4);return f!=Float32Array&&(t[1]=0,t[2]=0),t[0]=1,t[3]=1,t}function y(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function p(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function q(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t}function w(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function g(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function A(t,n){if(t===n){var a=n[1];t[1]=n[2],t[2]=a}else t[0]=n[0],t[1]=n[2],t[2]=n[1],t[3]=n[3];return t}function P(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*e-u*r;return o?(o=1/o,t[0]=e*o,t[1]=-r*o,t[2]=-u*o,t[3]=a*o,t):null}function S(t,n){var a=n[0];return t[0]=n[3],t[1]=-n[1],t[2]=-n[2],t[3]=a,t}function R(t){return t[0]*t[3]-t[2]*t[1]}function T(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*i+e*h,t[1]=u*i+o*h,t[2]=r*c+e*s,t[3]=u*c+o*s,t}function I(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+e*i,t[1]=u*h+o*i,t[2]=r*-i+e*h,t[3]=u*-i+o*h,t}function E(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1];return t[0]=r*i,t[1]=u*i,t[2]=e*h,t[3]=o*h,t}function D(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t}function F(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t}function L(t){return"mat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function V(t){return Math.hypot(t[0],t[1],t[2],t[3])}function j(t,n,a,r){return t[2]=r[2]/r[0],a[0]=r[0],a[1]=r[1],a[3]=r[3]-t[2]*a[1],[t,n,a]}function z(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Q(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function Y(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}function X(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Z(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}Math.hypot||(Math.hypot=function(){for(var t=0,n=arguments.length;n--;)t+=arguments[n]*arguments[n];return Math.sqrt(t)});var _=T,B=O;function N(){var t=new f(6);return f!=Float32Array&&(t[1]=0,t[2]=0,t[4]=0,t[5]=0),t[0]=1,t[3]=1,t}function k(t){var n=new f(6);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function U(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t}function W(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function C(t,n,a,r,u,e){var o=new f(6);return o[0]=t,o[1]=n,o[2]=a,o[3]=r,o[4]=u,o[5]=e,o}function G(t,n,a,r,u,e,o){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t}function H(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=a*e-r*u;return h?(h=1/h,t[0]=e*h,t[1]=-r*h,t[2]=-u*h,t[3]=a*h,t[4]=(u*i-e*o)*h,t[5]=(r*o-a*i)*h,t):null}function J(t){return t[0]*t[3]-t[1]*t[2]}function K(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1],M=a[2],f=a[3],l=a[4],v=a[5];return t[0]=r*c+e*s,t[1]=u*c+o*s,t[2]=r*M+e*f,t[3]=u*M+o*f,t[4]=r*l+e*v+i,t[5]=u*l+o*v+h,t}function $(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=Math.sin(a),s=Math.cos(a);return t[0]=r*s+e*c,t[1]=u*s+o*c,t[2]=r*-c+e*s,t[3]=u*-c+o*s,t[4]=i,t[5]=h,t}function tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r*c,t[1]=u*c,t[2]=e*s,t[3]=o*s,t[4]=i,t[5]=h,t}function nt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=a[0],s=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=r*c+e*s+i,t[5]=u*c+o*s+h,t}function at(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=-a,t[3]=r,t[4]=0,t[5]=0,t}function rt(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=n[1],t[4]=0,t[5]=0,t}function ut(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=n[0],t[5]=n[1],t}function et(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function ot(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],1)}function it(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t}function ht(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t}function ct(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t}function st(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t}function Mt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]}function ft(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=n[0],c=n[1],s=n[2],f=n[3],l=n[4],v=n[5];return Math.abs(a-h)<=M*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(r-c)<=M*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(u-s)<=M*Math.max(1,Math.abs(u),Math.abs(s))&&Math.abs(e-f)<=M*Math.max(1,Math.abs(e),Math.abs(f))&&Math.abs(o-l)<=M*Math.max(1,Math.abs(o),Math.abs(l))&&Math.abs(i-v)<=M*Math.max(1,Math.abs(i),Math.abs(v))}var lt=K,vt=ht;function bt(){var t=new f(9);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[5]=0,t[6]=0,t[7]=0),t[0]=1,t[4]=1,t[8]=1,t}function mt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function dt(t){var n=new f(9);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n}function xt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function yt(t,n,a,r,u,e,o,i,h){var c=new f(9);return c[0]=t,c[1]=n,c[2]=a,c[3]=r,c[4]=u,c[5]=e,c[6]=o,c[7]=i,c[8]=h,c}function pt(t,n,a,r,u,e,o,i,h,c){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t}function qt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function wt(t,n){if(t===n){var a=n[1],r=n[2],u=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=u}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function gt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=s*o-i*c,f=-s*e+i*h,l=c*e-o*h,v=a*M+r*f+u*l;return v?(v=1/v,t[0]=M*v,t[1]=(-s*r+u*c)*v,t[2]=(i*r-u*o)*v,t[3]=f*v,t[4]=(s*a-u*h)*v,t[5]=(-i*a+u*e)*v,t[6]=l*v,t[7]=(-c*a+r*h)*v,t[8]=(o*a-r*e)*v,t):null}function At(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8];return t[0]=o*s-i*c,t[1]=u*c-r*s,t[2]=r*i-u*o,t[3]=i*h-e*s,t[4]=a*s-u*h,t[5]=u*e-a*i,t[6]=e*c-o*h,t[7]=r*h-a*c,t[8]=a*o-r*e,t}function Pt(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8];return n*(c*e-o*h)+a*(-c*u+o*i)+r*(h*u-e*i)}function St(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1],v=a[2],b=a[3],m=a[4],d=a[5],x=a[6],y=a[7],p=a[8];return t[0]=f*r+l*o+v*c,t[1]=f*u+l*i+v*s,t[2]=f*e+l*h+v*M,t[3]=b*r+m*o+d*c,t[4]=b*u+m*i+d*s,t[5]=b*e+m*h+d*M,t[6]=x*r+y*o+p*c,t[7]=x*u+y*i+p*s,t[8]=x*e+y*h+p*M,t}function Rt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=a[0],l=a[1];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=f*r+l*o+c,t[7]=f*u+l*i+s,t[8]=f*e+l*h+M,t}function Tt(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=Math.sin(a),l=Math.cos(a);return t[0]=l*r+f*o,t[1]=l*u+f*i,t[2]=l*e+f*h,t[3]=l*o-f*r,t[4]=l*i-f*u,t[5]=l*h-f*e,t[6]=c,t[7]=s,t[8]=M,t}function It(t,n,a){var r=a[0],u=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=u*n[3],t[4]=u*n[4],t[5]=u*n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function Et(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function Dt(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Ft(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function Lt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function Vt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[3]=s-d,t[6]=f+m,t[1]=s+d,t[4]=1-c-v,t[7]=l-b,t[2]=f-m,t[5]=l+b,t[8]=1-c-M,t}function jt(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(h*S-o*I-c*P)*E,t[2]=(o*T-i*S+c*A)*E,t[3]=(u*T-r*I-e*R)*E,t[4]=(a*I-u*S+e*P)*E,t[5]=(r*S-a*T-e*A)*E,t[6]=(b*g-m*w+d*q)*E,t[7]=(m*p-v*g-d*y)*E,t[8]=(v*w-b*p+d*x)*E,t):null}function zt(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function Ot(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function Qt(t){return Math.hypot(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8])}function Yt(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function Xt(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function Zt(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function _t(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function Bt(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function Nt(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=n[0],l=n[1],v=n[2],b=n[3],m=n[4],d=n[5],x=n[6],y=n[7],p=n[8];return Math.abs(a-f)<=M*Math.max(1,Math.abs(a),Math.abs(f))&&Math.abs(r-l)<=M*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(u-v)<=M*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(e-b)<=M*Math.max(1,Math.abs(e),Math.abs(b))&&Math.abs(o-m)<=M*Math.max(1,Math.abs(o),Math.abs(m))&&Math.abs(i-d)<=M*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(h-x)<=M*Math.max(1,Math.abs(h),Math.abs(x))&&Math.abs(c-y)<=M*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(s-p)<=M*Math.max(1,Math.abs(s),Math.abs(p))}var kt=St,Ut=Xt;function Wt(){var t=new f(16);return f!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function Ct(t){var n=new f(16);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function Gt(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function Ht(t,n,a,r,u,e,o,i,h,c,s,M,l,v,b,m){var d=new f(16);return d[0]=t,d[1]=n,d[2]=a,d[3]=r,d[4]=u,d[5]=e,d[6]=o,d[7]=i,d[8]=h,d[9]=c,d[10]=s,d[11]=M,d[12]=l,d[13]=v,d[14]=b,d[15]=m,d}function Jt(t,n,a,r,u,e,o,i,h,c,s,M,f,l,v,b,m){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t[8]=c,t[9]=s,t[10]=M,t[11]=f,t[12]=l,t[13]=v,t[14]=b,t[15]=m,t}function Kt(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function $t(t,n){if(t===n){var a=n[1],r=n[2],u=n[3],e=n[6],o=n[7],i=n[11];t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=a,t[6]=n[9],t[7]=n[13],t[8]=r,t[9]=e,t[11]=n[14],t[12]=u,t[13]=o,t[14]=i}else t[0]=n[0],t[1]=n[4],t[2]=n[8],t[3]=n[12],t[4]=n[1],t[5]=n[5],t[6]=n[9],t[7]=n[13],t[8]=n[2],t[9]=n[6],t[10]=n[10],t[11]=n[14],t[12]=n[3],t[13]=n[7],t[14]=n[11],t[15]=n[15];return t}function tn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15],x=a*i-r*o,y=a*h-u*o,p=a*c-e*o,q=r*h-u*i,w=r*c-e*i,g=u*c-e*h,A=s*b-M*v,P=s*m-f*v,S=s*d-l*v,R=M*m-f*b,T=M*d-l*b,I=f*d-l*m,E=x*I-y*T+p*R+q*S-w*P+g*A;return E?(E=1/E,t[0]=(i*I-h*T+c*R)*E,t[1]=(u*T-r*I-e*R)*E,t[2]=(b*g-m*w+d*q)*E,t[3]=(f*w-M*g-l*q)*E,t[4]=(h*S-o*I-c*P)*E,t[5]=(a*I-u*S+e*P)*E,t[6]=(m*p-v*g-d*y)*E,t[7]=(s*g-f*p+l*y)*E,t[8]=(o*T-i*S+c*A)*E,t[9]=(r*S-a*T-e*A)*E,t[10]=(v*w-b*p+d*x)*E,t[11]=(M*p-s*w-l*x)*E,t[12]=(i*P-o*R-h*A)*E,t[13]=(a*R-r*P+u*A)*E,t[14]=(b*y-v*q-m*x)*E,t[15]=(s*q-M*y+f*x)*E,t):null}function nn(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=n[4],i=n[5],h=n[6],c=n[7],s=n[8],M=n[9],f=n[10],l=n[11],v=n[12],b=n[13],m=n[14],d=n[15];return t[0]=i*(f*d-l*m)-M*(h*d-c*m)+b*(h*l-c*f),t[1]=-(r*(f*d-l*m)-M*(u*d-e*m)+b*(u*l-e*f)),t[2]=r*(h*d-c*m)-i*(u*d-e*m)+b*(u*c-e*h),t[3]=-(r*(h*l-c*f)-i*(u*l-e*f)+M*(u*c-e*h)),t[4]=-(o*(f*d-l*m)-s*(h*d-c*m)+v*(h*l-c*f)),t[5]=a*(f*d-l*m)-s*(u*d-e*m)+v*(u*l-e*f),t[6]=-(a*(h*d-c*m)-o*(u*d-e*m)+v*(u*c-e*h)),t[7]=a*(h*l-c*f)-o*(u*l-e*f)+s*(u*c-e*h),t[8]=o*(M*d-l*b)-s*(i*d-c*b)+v*(i*l-c*M),t[9]=-(a*(M*d-l*b)-s*(r*d-e*b)+v*(r*l-e*M)),t[10]=a*(i*d-c*b)-o*(r*d-e*b)+v*(r*c-e*i),t[11]=-(a*(i*l-c*M)-o*(r*l-e*M)+s*(r*c-e*i)),t[12]=-(o*(M*m-f*b)-s*(i*m-h*b)+v*(i*f-h*M)),t[13]=a*(M*m-f*b)-s*(r*m-u*b)+v*(r*f-u*M),t[14]=-(a*(i*m-h*b)-o*(r*m-u*b)+v*(r*h-u*i)),t[15]=a*(i*f-h*M)-o*(r*f-u*M)+s*(r*h-u*i),t}function an(t){var n=t[0],a=t[1],r=t[2],u=t[3],e=t[4],o=t[5],i=t[6],h=t[7],c=t[8],s=t[9],M=t[10],f=t[11],l=t[12],v=t[13],b=t[14],m=t[15];return(n*o-a*e)*(M*m-f*b)-(n*i-r*e)*(s*m-f*v)+(n*h-u*e)*(s*b-M*v)+(a*i-r*o)*(c*m-f*l)-(a*h-u*o)*(c*b-M*l)+(r*h-u*i)*(c*v-s*l)}function rn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],b=n[12],m=n[13],d=n[14],x=n[15],y=a[0],p=a[1],q=a[2],w=a[3];return t[0]=y*r+p*i+q*M+w*b,t[1]=y*u+p*h+q*f+w*m,t[2]=y*e+p*c+q*l+w*d,t[3]=y*o+p*s+q*v+w*x,y=a[4],p=a[5],q=a[6],w=a[7],t[4]=y*r+p*i+q*M+w*b,t[5]=y*u+p*h+q*f+w*m,t[6]=y*e+p*c+q*l+w*d,t[7]=y*o+p*s+q*v+w*x,y=a[8],p=a[9],q=a[10],w=a[11],t[8]=y*r+p*i+q*M+w*b,t[9]=y*u+p*h+q*f+w*m,t[10]=y*e+p*c+q*l+w*d,t[11]=y*o+p*s+q*v+w*x,y=a[12],p=a[13],q=a[14],w=a[15],t[12]=y*r+p*i+q*M+w*b,t[13]=y*u+p*h+q*f+w*m,t[14]=y*e+p*c+q*l+w*d,t[15]=y*o+p*s+q*v+w*x,t}function un(t,n,a){var r,u,e,o,i,h,c,s,M,f,l,v,b=a[0],m=a[1],d=a[2];return n===t?(t[12]=n[0]*b+n[4]*m+n[8]*d+n[12],t[13]=n[1]*b+n[5]*m+n[9]*d+n[13],t[14]=n[2]*b+n[6]*m+n[10]*d+n[14],t[15]=n[3]*b+n[7]*m+n[11]*d+n[15]):(r=n[0],u=n[1],e=n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=n[8],f=n[9],l=n[10],v=n[11],t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=i,t[5]=h,t[6]=c,t[7]=s,t[8]=M,t[9]=f,t[10]=l,t[11]=v,t[12]=r*b+i*m+M*d+n[12],t[13]=u*b+h*m+f*d+n[13],t[14]=e*b+c*m+l*d+n[14],t[15]=o*b+s*m+v*d+n[15]),t}function en(t,n,a){var r=a[0],u=a[1],e=a[2];return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=n[3]*r,t[4]=n[4]*u,t[5]=n[5]*u,t[6]=n[6]*u,t[7]=n[7]*u,t[8]=n[8]*e,t[9]=n[9]*e,t[10]=n[10]*e,t[11]=n[11]*e,t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],t}function on(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b,m,d,x,y,p,q,w,g,A,P,S,R,T,I=r[0],E=r[1],D=r[2],F=Math.hypot(I,E,D);return F<M?null:(I*=F=1/F,E*=F,D*=F,u=Math.sin(a),o=1-(e=Math.cos(a)),i=n[0],h=n[1],c=n[2],s=n[3],f=n[4],l=n[5],v=n[6],b=n[7],m=n[8],d=n[9],x=n[10],y=n[11],p=I*I*o+e,q=E*I*o+D*u,w=D*I*o-E*u,g=I*E*o-D*u,A=E*E*o+e,P=D*E*o+I*u,S=I*D*o+E*u,R=E*D*o-I*u,T=D*D*o+e,t[0]=i*p+f*q+m*w,t[1]=h*p+l*q+d*w,t[2]=c*p+v*q+x*w,t[3]=s*p+b*q+y*w,t[4]=i*g+f*A+m*P,t[5]=h*g+l*A+d*P,t[6]=c*g+v*A+x*P,t[7]=s*g+b*A+y*P,t[8]=i*S+f*R+m*T,t[9]=h*S+l*R+d*T,t[10]=c*S+v*R+x*T,t[11]=s*S+b*R+y*T,n!==t&&(t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t)}function hn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[4],o=n[5],i=n[6],h=n[7],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[4]=e*u+c*r,t[5]=o*u+s*r,t[6]=i*u+M*r,t[7]=h*u+f*r,t[8]=c*u-e*r,t[9]=s*u-o*r,t[10]=M*u-i*r,t[11]=f*u-h*r,t}function cn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[8],s=n[9],M=n[10],f=n[11];return n!==t&&(t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u-c*r,t[1]=o*u-s*r,t[2]=i*u-M*r,t[3]=h*u-f*r,t[8]=e*r+c*u,t[9]=o*r+s*u,t[10]=i*r+M*u,t[11]=h*r+f*u,t}function sn(t,n,a){var r=Math.sin(a),u=Math.cos(a),e=n[0],o=n[1],i=n[2],h=n[3],c=n[4],s=n[5],M=n[6],f=n[7];return n!==t&&(t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15]),t[0]=e*u+c*r,t[1]=o*u+s*r,t[2]=i*u+M*r,t[3]=h*u+f*r,t[4]=c*u-e*r,t[5]=s*u-o*r,t[6]=M*u-i*r,t[7]=f*u-h*r,t}function Mn(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n[0],t[13]=n[1],t[14]=n[2],t[15]=1,t}function fn(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ln(t,n,a){var r,u,e,o=a[0],i=a[1],h=a[2],c=Math.hypot(o,i,h);return c<M?null:(o*=c=1/c,i*=c,h*=c,r=Math.sin(n),e=1-(u=Math.cos(n)),t[0]=o*o*e+u,t[1]=i*o*e+h*r,t[2]=h*o*e-i*r,t[3]=0,t[4]=o*i*e-h*r,t[5]=i*i*e+u,t[6]=h*i*e+o*r,t[7]=0,t[8]=o*h*e+i*r,t[9]=i*h*e-o*r,t[10]=h*h*e+u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function vn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=a,t[7]=0,t[8]=0,t[9]=-a,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function bn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=0,t[2]=-a,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=a,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mn(t,n){var a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=0,t[4]=-a,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function dn(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=r+r,h=u+u,c=e+e,s=r*i,M=r*h,f=r*c,l=u*h,v=u*c,b=e*c,m=o*i,d=o*h,x=o*c;return t[0]=1-(l+b),t[1]=M+x,t[2]=f-d,t[3]=0,t[4]=M-x,t[5]=1-(s+b),t[6]=v+m,t[7]=0,t[8]=f+d,t[9]=v-m,t[10]=1-(s+l),t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function xn(t,n){var a=new f(3),r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=r*r+u*u+e*e+o*o;return M>0?(a[0]=2*(i*o+s*r+h*e-c*u)/M,a[1]=2*(h*o+s*u+c*r-i*e)/M,a[2]=2*(c*o+s*e+i*u-h*r)/M):(a[0]=2*(i*o+s*r+h*e-c*u),a[1]=2*(h*o+s*u+c*r-i*e),a[2]=2*(c*o+s*e+i*u-h*r)),dn(t,n,a),t}function yn(t,n){return t[0]=n[12],t[1]=n[13],t[2]=n[14],t}function pn(t,n){var a=n[0],r=n[1],u=n[2],e=n[4],o=n[5],i=n[6],h=n[8],c=n[9],s=n[10];return t[0]=Math.hypot(a,r,u),t[1]=Math.hypot(e,o,i),t[2]=Math.hypot(h,c,s),t}function qn(t,n){var a=new f(3);pn(a,n);var r=1/a[0],u=1/a[1],e=1/a[2],o=n[0]*r,i=n[1]*u,h=n[2]*e,c=n[4]*r,s=n[5]*u,M=n[6]*e,l=n[8]*r,v=n[9]*u,b=n[10]*e,m=o+s+b,d=0;return m>0?(d=2*Math.sqrt(m+1),t[3]=.25*d,t[0]=(M-v)/d,t[1]=(l-h)/d,t[2]=(i-c)/d):o>s&&o>b?(d=2*Math.sqrt(1+o-s-b),t[3]=(M-v)/d,t[0]=.25*d,t[1]=(i+c)/d,t[2]=(l+h)/d):s>b?(d=2*Math.sqrt(1+s-o-b),t[3]=(l-h)/d,t[0]=(i+c)/d,t[1]=.25*d,t[2]=(M+v)/d):(d=2*Math.sqrt(1+b-o-s),t[3]=(i-c)/d,t[0]=(l+h)/d,t[1]=(M+v)/d,t[2]=.25*d),t}function wn(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3],h=u+u,c=e+e,s=o+o,M=u*h,f=u*c,l=u*s,v=e*c,b=e*s,m=o*s,d=i*h,x=i*c,y=i*s,p=r[0],q=r[1],w=r[2];return t[0]=(1-(v+m))*p,t[1]=(f+y)*p,t[2]=(l-x)*p,t[3]=0,t[4]=(f-y)*q,t[5]=(1-(M+m))*q,t[6]=(b+d)*q,t[7]=0,t[8]=(l+x)*w,t[9]=(b-d)*w,t[10]=(1-(M+v))*w,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function gn(t,n,a,r,u){var e=n[0],o=n[1],i=n[2],h=n[3],c=e+e,s=o+o,M=i+i,f=e*c,l=e*s,v=e*M,b=o*s,m=o*M,d=i*M,x=h*c,y=h*s,p=h*M,q=r[0],w=r[1],g=r[2],A=u[0],P=u[1],S=u[2],R=(1-(b+d))*q,T=(l+p)*q,I=(v-y)*q,E=(l-p)*w,D=(1-(f+d))*w,F=(m+x)*w,L=(v+y)*g,V=(m-x)*g,j=(1-(f+b))*g;return t[0]=R,t[1]=T,t[2]=I,t[3]=0,t[4]=E,t[5]=D,t[6]=F,t[7]=0,t[8]=L,t[9]=V,t[10]=j,t[11]=0,t[12]=a[0]+A-(R*A+E*P+L*S),t[13]=a[1]+P-(T*A+D*P+V*S),t[14]=a[2]+S-(I*A+F*P+j*S),t[15]=1,t}function An(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a+a,i=r+r,h=u+u,c=a*o,s=r*o,M=r*i,f=u*o,l=u*i,v=u*h,b=e*o,m=e*i,d=e*h;return t[0]=1-M-v,t[1]=s+d,t[2]=f-m,t[3]=0,t[4]=s-d,t[5]=1-c-v,t[6]=l+b,t[7]=0,t[8]=f+m,t[9]=l-b,t[10]=1-c-M,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function Pn(t,n,a,r,u,e,o){var i=1/(a-n),h=1/(u-r),c=1/(e-o);return t[0]=2*e*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*e*h,t[6]=0,t[7]=0,t[8]=(a+n)*i,t[9]=(u+r)*h,t[10]=(o+e)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*e*2*c,t[15]=0,t}function Sn(t,n,a,r,u){var e,o=1/Math.tan(n/2);return t[0]=o/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=u&&u!==1/0?(e=1/(r-u),t[10]=(u+r)*e,t[14]=2*u*r*e):(t[10]=-1,t[14]=-2*r),t}function Rn(t,n,a,r){var u=Math.tan(n.upDegrees*Math.PI/180),e=Math.tan(n.downDegrees*Math.PI/180),o=Math.tan(n.leftDegrees*Math.PI/180),i=Math.tan(n.rightDegrees*Math.PI/180),h=2/(o+i),c=2/(u+e);return t[0]=h,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=c,t[6]=0,t[7]=0,t[8]=-(o-i)*h*.5,t[9]=(u-e)*c*.5,t[10]=r/(a-r),t[11]=-1,t[12]=0,t[13]=0,t[14]=r*a/(a-r),t[15]=0,t}function Tn(t,n,a,r,u,e,o){var i=1/(n-a),h=1/(r-u),c=1/(e-o);return t[0]=-2*i,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*h,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(n+a)*i,t[13]=(u+r)*h,t[14]=(o+e)*c,t[15]=1,t}function In(t,n,a,r){var u,e,o,i,h,c,s,f,l,v,b=n[0],m=n[1],d=n[2],x=r[0],y=r[1],p=r[2],q=a[0],w=a[1],g=a[2];return Math.abs(b-q)<M&&Math.abs(m-w)<M&&Math.abs(d-g)<M?Kt(t):(s=b-q,f=m-w,l=d-g,u=y*(l*=v=1/Math.hypot(s,f,l))-p*(f*=v),e=p*(s*=v)-x*l,o=x*f-y*s,(v=Math.hypot(u,e,o))?(u*=v=1/v,e*=v,o*=v):(u=0,e=0,o=0),i=f*o-l*e,h=l*u-s*o,c=s*e-f*u,(v=Math.hypot(i,h,c))?(i*=v=1/v,h*=v,c*=v):(i=0,h=0,c=0),t[0]=u,t[1]=i,t[2]=s,t[3]=0,t[4]=e,t[5]=h,t[6]=f,t[7]=0,t[8]=o,t[9]=c,t[10]=l,t[11]=0,t[12]=-(u*b+e*m+o*d),t[13]=-(i*b+h*m+c*d),t[14]=-(s*b+f*m+l*d),t[15]=1,t)}function En(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=r[0],h=r[1],c=r[2],s=u-a[0],M=e-a[1],f=o-a[2],l=s*s+M*M+f*f;l>0&&(s*=l=1/Math.sqrt(l),M*=l,f*=l);var v=h*f-c*M,b=c*s-i*f,m=i*M-h*s;return(l=v*v+b*b+m*m)>0&&(v*=l=1/Math.sqrt(l),b*=l,m*=l),t[0]=v,t[1]=b,t[2]=m,t[3]=0,t[4]=M*m-f*b,t[5]=f*v-s*m,t[6]=s*b-M*v,t[7]=0,t[8]=s,t[9]=M,t[10]=f,t[11]=0,t[12]=u,t[13]=e,t[14]=o,t[15]=1,t}function Dn(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"}function Fn(t){return Math.hypot(t[0],t[1],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])}function Ln(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t[9]=n[9]+a[9],t[10]=n[10]+a[10],t[11]=n[11]+a[11],t[12]=n[12]+a[12],t[13]=n[13]+a[13],t[14]=n[14]+a[14],t[15]=n[15]+a[15],t}function Vn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t[9]=n[9]-a[9],t[10]=n[10]-a[10],t[11]=n[11]-a[11],t[12]=n[12]-a[12],t[13]=n[13]-a[13],t[14]=n[14]-a[14],t[15]=n[15]-a[15],t}function jn(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=n[11]*a,t[12]=n[12]*a,t[13]=n[13]*a,t[14]=n[14]*a,t[15]=n[15]*a,t}function zn(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t[9]=n[9]+a[9]*r,t[10]=n[10]+a[10]*r,t[11]=n[11]+a[11]*r,t[12]=n[12]+a[12]*r,t[13]=n[13]+a[13]*r,t[14]=n[14]+a[14]*r,t[15]=n[15]+a[15]*r,t}function On(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]&&t[9]===n[9]&&t[10]===n[10]&&t[11]===n[11]&&t[12]===n[12]&&t[13]===n[13]&&t[14]===n[14]&&t[15]===n[15]}function Qn(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=t[8],f=t[9],l=t[10],v=t[11],b=t[12],m=t[13],d=t[14],x=t[15],y=n[0],p=n[1],q=n[2],w=n[3],g=n[4],A=n[5],P=n[6],S=n[7],R=n[8],T=n[9],I=n[10],E=n[11],D=n[12],F=n[13],L=n[14],V=n[15];return Math.abs(a-y)<=M*Math.max(1,Math.abs(a),Math.abs(y))&&Math.abs(r-p)<=M*Math.max(1,Math.abs(r),Math.abs(p))&&Math.abs(u-q)<=M*Math.max(1,Math.abs(u),Math.abs(q))&&Math.abs(e-w)<=M*Math.max(1,Math.abs(e),Math.abs(w))&&Math.abs(o-g)<=M*Math.max(1,Math.abs(o),Math.abs(g))&&Math.abs(i-A)<=M*Math.max(1,Math.abs(i),Math.abs(A))&&Math.abs(h-P)<=M*Math.max(1,Math.abs(h),Math.abs(P))&&Math.abs(c-S)<=M*Math.max(1,Math.abs(c),Math.abs(S))&&Math.abs(s-R)<=M*Math.max(1,Math.abs(s),Math.abs(R))&&Math.abs(f-T)<=M*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(l-I)<=M*Math.max(1,Math.abs(l),Math.abs(I))&&Math.abs(v-E)<=M*Math.max(1,Math.abs(v),Math.abs(E))&&Math.abs(b-D)<=M*Math.max(1,Math.abs(b),Math.abs(D))&&Math.abs(m-F)<=M*Math.max(1,Math.abs(m),Math.abs(F))&&Math.abs(d-L)<=M*Math.max(1,Math.abs(d),Math.abs(L))&&Math.abs(x-V)<=M*Math.max(1,Math.abs(x),Math.abs(V))}var Yn=rn,Xn=Vn;function Zn(){var t=new f(3);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function _n(t){var n=new f(3);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n}function Bn(t){var n=t[0],a=t[1],r=t[2];return Math.hypot(n,a,r)}function Nn(t,n,a){var r=new f(3);return r[0]=t,r[1]=n,r[2]=a,r}function kn(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function Un(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function Wn(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function Cn(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function Gn(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function Hn(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function Jn(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function Kn(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function $n(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function ta(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function na(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function aa(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function ra(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function ua(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return Math.hypot(a,r,u)}function ea(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2];return a*a+r*r+u*u}function oa(t){var n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function ia(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function ha(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function ca(t,n){var a=n[0],r=n[1],u=n[2],e=a*a+r*r+u*u;return e>0&&(e=1/Math.sqrt(e)),t[0]=n[0]*e,t[1]=n[1]*e,t[2]=n[2]*e,t}function sa(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2];return t[0]=u*h-e*i,t[1]=e*o-r*h,t[2]=r*i-u*o,t}function fa(t,n,a,r){var u=n[0],e=n[1],o=n[2];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t}function la(t,n,a,r,u,e){var o=e*e,i=o*(2*e-3)+1,h=o*(e-2)+e,c=o*(e-1),s=o*(3-2*e);return t[0]=n[0]*i+a[0]*h+r[0]*c+u[0]*s,t[1]=n[1]*i+a[1]*h+r[1]*c+u[1]*s,t[2]=n[2]*i+a[2]*h+r[2]*c+u[2]*s,t}function va(t,n,a,r,u,e){var o=1-e,i=o*o,h=e*e,c=i*o,s=3*e*i,M=3*h*o,f=h*e;return t[0]=n[0]*c+a[0]*s+r[0]*M+u[0]*f,t[1]=n[1]*c+a[1]*s+r[1]*M+u[1]*f,t[2]=n[2]*c+a[2]*s+r[2]*M+u[2]*f,t}function ba(t,n){n=n||1;var a=2*l()*Math.PI,r=2*l()-1,u=Math.sqrt(1-r*r)*n;return t[0]=Math.cos(a)*u,t[1]=Math.sin(a)*u,t[2]=r*n,t}function ma(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[3]*r+a[7]*u+a[11]*e+a[15];return o=o||1,t[0]=(a[0]*r+a[4]*u+a[8]*e+a[12])/o,t[1]=(a[1]*r+a[5]*u+a[9]*e+a[13])/o,t[2]=(a[2]*r+a[6]*u+a[10]*e+a[14])/o,t}function da(t,n,a){var r=n[0],u=n[1],e=n[2];return t[0]=r*a[0]+u*a[3]+e*a[6],t[1]=r*a[1]+u*a[4]+e*a[7],t[2]=r*a[2]+u*a[5]+e*a[8],t}function xa(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=u*c-e*h,M=e*i-r*c,f=r*h-u*i,l=u*f-e*M,v=e*s-r*f,b=r*M-u*s,m=2*o;return s*=m,M*=m,f*=m,l*=2,v*=2,b*=2,t[0]=i+s+l,t[1]=h+M+v,t[2]=c+f+b,t}function ya(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0],e[1]=u[1]*Math.cos(r)-u[2]*Math.sin(r),e[2]=u[1]*Math.sin(r)+u[2]*Math.cos(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function pa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[2]*Math.sin(r)+u[0]*Math.cos(r),e[1]=u[1],e[2]=u[2]*Math.cos(r)-u[0]*Math.sin(r),t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function qa(t,n,a,r){var u=[],e=[];return u[0]=n[0]-a[0],u[1]=n[1]-a[1],u[2]=n[2]-a[2],e[0]=u[0]*Math.cos(r)-u[1]*Math.sin(r),e[1]=u[0]*Math.sin(r)+u[1]*Math.cos(r),e[2]=u[2],t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function wa(t,n){var a=Nn(t[0],t[1],t[2]),r=Nn(n[0],n[1],n[2]);ca(a,a),ca(r,r);var u=sa(a,r);return u>1?0:u<-1?Math.PI:Math.acos(u)}function ga(t){return t[0]=0,t[1]=0,t[2]=0,t}function Aa(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function Pa(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function Sa(t,n){var a=t[0],r=t[1],u=t[2],e=n[0],o=n[1],i=n[2];return Math.abs(a-e)<=M*Math.max(1,Math.abs(a),Math.abs(e))&&Math.abs(r-o)<=M*Math.max(1,Math.abs(r),Math.abs(o))&&Math.abs(u-i)<=M*Math.max(1,Math.abs(u),Math.abs(i))}var Ra,Ta=Cn,Ia=Gn,Ea=Hn,Da=ua,Fa=ea,La=Bn,Va=oa,ja=(Ra=Zn(),function(t,n,a,r,u,e){var o,i;for(n||(n=3),a||(a=0),i=r?Math.min(r*n+a,t.length):t.length,o=a;o<i;o+=n)Ra[0]=t[o],Ra[1]=t[o+1],Ra[2]=t[o+2],u(Ra,Ra,e),t[o]=Ra[0],t[o+1]=Ra[1],t[o+2]=Ra[2];return t});function za(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Oa(t){var n=new f(4);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n}function Qa(t,n,a,r){var u=new f(4);return u[0]=t,u[1]=n,u[2]=a,u[3]=r,u}function Ya(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function Xa(t,n,a,r,u){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t}function Za(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function _a(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function Ba(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function Na(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function ka(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function Ua(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function Wa(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function Ca(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function Ga(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function Ha(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function Ja(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function Ka(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return Math.hypot(a,r,u,e)}function $a(t,n){var a=n[0]-t[0],r=n[1]-t[1],u=n[2]-t[2],e=n[3]-t[3];return a*a+r*r+u*u+e*e}function tr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return Math.hypot(n,a,r,u)}function nr(t){var n=t[0],a=t[1],r=t[2],u=t[3];return n*n+a*a+r*r+u*u}function ar(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function rr(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function ur(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e;return o>0&&(o=1/Math.sqrt(o)),t[0]=a*o,t[1]=r*o,t[2]=u*o,t[3]=e*o,t}function er(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function or(t,n,a,r){var u=a[0]*r[1]-a[1]*r[0],e=a[0]*r[2]-a[2]*r[0],o=a[0]*r[3]-a[3]*r[0],i=a[1]*r[2]-a[2]*r[1],h=a[1]*r[3]-a[3]*r[1],c=a[2]*r[3]-a[3]*r[2],s=n[0],M=n[1],f=n[2],l=n[3];return t[0]=M*c-f*h+l*i,t[1]=-s*c+f*o-l*e,t[2]=s*h-M*o+l*u,t[3]=-s*i+M*e-f*u,t}function ir(t,n,a,r){var u=n[0],e=n[1],o=n[2],i=n[3];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t[2]=o+r*(a[2]-o),t[3]=i+r*(a[3]-i),t}function hr(t,n){var a,r,u,e,o,i;n=n||1;do{o=(a=2*l()-1)*a+(r=2*l()-1)*r}while(o>=1);do{i=(u=2*l()-1)*u+(e=2*l()-1)*e}while(i>=1);var h=Math.sqrt((1-o)/i);return t[0]=n*a,t[1]=n*r,t[2]=n*u*h,t[3]=n*e*h,t}function cr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3];return t[0]=a[0]*r+a[4]*u+a[8]*e+a[12]*o,t[1]=a[1]*r+a[5]*u+a[9]*e+a[13]*o,t[2]=a[2]*r+a[6]*u+a[10]*e+a[14]*o,t[3]=a[3]*r+a[7]*u+a[11]*e+a[15]*o,t}function sr(t,n,a){var r=n[0],u=n[1],e=n[2],o=a[0],i=a[1],h=a[2],c=a[3],s=c*r+i*e-h*u,M=c*u+h*r-o*e,f=c*e+o*u-i*r,l=-o*r-i*u-h*e;return t[0]=s*c+l*-o+M*-h-f*-i,t[1]=M*c+l*-i+f*-o-s*-h,t[2]=f*c+l*-h+s*-i-M*-o,t[3]=n[3],t}function Mr(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t}function fr(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function lr(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function vr(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=n[0],i=n[1],h=n[2],c=n[3];return Math.abs(a-o)<=M*Math.max(1,Math.abs(a),Math.abs(o))&&Math.abs(r-i)<=M*Math.max(1,Math.abs(r),Math.abs(i))&&Math.abs(u-h)<=M*Math.max(1,Math.abs(u),Math.abs(h))&&Math.abs(e-c)<=M*Math.max(1,Math.abs(e),Math.abs(c))}var br=_a,mr=Ba,dr=Na,xr=Ka,yr=$a,pr=tr,qr=nr,wr=function(){var t=za();return function(n,a,r,u,e,o){var i,h;for(a||(a=4),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],t[2]=n[i+2],t[3]=n[i+3],e(t,t,o),n[i]=t[0],n[i+1]=t[1],n[i+2]=t[2],n[i+3]=t[3];return n}}();function gr(){var t=new f(4);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t[3]=1,t}function Ar(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Pr(t,n,a){a*=.5;var r=Math.sin(a);return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=Math.cos(a),t}function Sr(t,n){var a=2*Math.acos(n[3]),r=Math.sin(a/2);return r>M?(t[0]=n[0]/r,t[1]=n[1]/r,t[2]=n[2]/r):(t[0]=1,t[1]=0,t[2]=0),a}function Rr(t,n){var a=au(t,n);return Math.acos(2*a*a-1)}function Tr(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,t}function Ir(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+o*i,t[1]=u*h+e*i,t[2]=e*h-u*i,t[3]=o*h-r*i,t}function Er(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h-e*i,t[1]=u*h+o*i,t[2]=e*h+r*i,t[3]=o*h-u*i,t}function Dr(t,n,a){a*=.5;var r=n[0],u=n[1],e=n[2],o=n[3],i=Math.sin(a),h=Math.cos(a);return t[0]=r*h+u*i,t[1]=u*h-r*i,t[2]=e*h+o*i,t[3]=o*h-e*i,t}function Fr(t,n){var a=n[0],r=n[1],u=n[2];return t[0]=a,t[1]=r,t[2]=u,t[3]=Math.sqrt(Math.abs(1-a*a-r*r-u*u)),t}function Lr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=Math.exp(e),h=o>0?i*Math.sin(o)/o:0;return t[0]=a*h,t[1]=r*h,t[2]=u*h,t[3]=i*Math.cos(o),t}function Vr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=Math.sqrt(a*a+r*r+u*u),i=o>0?Math.atan2(o,e)/o:0;return t[0]=a*i,t[1]=r*i,t[2]=u*i,t[3]=.5*Math.log(a*a+r*r+u*u+e*e),t}function jr(t,n,a){return Vr(t,n),nu(t,t,a),Lr(t,t),t}function zr(t,n,a,r){var u,e,o,i,h,c=n[0],s=n[1],f=n[2],l=n[3],v=a[0],b=a[1],m=a[2],d=a[3];return(e=c*v+s*b+f*m+l*d)<0&&(e=-e,v=-v,b=-b,m=-m,d=-d),1-e>M?(u=Math.acos(e),o=Math.sin(u),i=Math.sin((1-r)*u)/o,h=Math.sin(r*u)/o):(i=1-r,h=r),t[0]=i*c+h*v,t[1]=i*s+h*b,t[2]=i*f+h*m,t[3]=i*l+h*d,t}function Or(t){var n=l(),a=l(),r=l(),u=Math.sqrt(1-n),e=Math.sqrt(n);return t[0]=u*Math.sin(2*Math.PI*a),t[1]=u*Math.cos(2*Math.PI*a),t[2]=e*Math.sin(2*Math.PI*r),t[3]=e*Math.cos(2*Math.PI*r),t}function Qr(t,n){var a=n[0],r=n[1],u=n[2],e=n[3],o=a*a+r*r+u*u+e*e,i=o?1/o:0;return t[0]=-a*i,t[1]=-r*i,t[2]=-u*i,t[3]=e*i,t}function Yr(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function Xr(t,n){var a,r=n[0]+n[4]+n[8];if(r>0)a=Math.sqrt(r+1),t[3]=.5*a,a=.5/a,t[0]=(n[5]-n[7])*a,t[1]=(n[6]-n[2])*a,t[2]=(n[1]-n[3])*a;else{var u=0;n[4]>n[0]&&(u=1),n[8]>n[3*u+u]&&(u=2);var e=(u+1)%3,o=(u+2)%3;a=Math.sqrt(n[3*u+u]-n[3*e+e]-n[3*o+o]+1),t[u]=.5*a,a=.5/a,t[3]=(n[3*e+o]-n[3*o+e])*a,t[e]=(n[3*e+u]+n[3*u+e])*a,t[o]=(n[3*o+u]+n[3*u+o])*a}return t}function Zr(t,n,a,r){var u=.5*Math.PI/180;n*=u,a*=u,r*=u;var e=Math.sin(n),o=Math.cos(n),i=Math.sin(a),h=Math.cos(a),c=Math.sin(r),s=Math.cos(r);return t[0]=e*h*s-o*i*c,t[1]=o*i*s+e*h*c,t[2]=o*h*c-e*i*s,t[3]=o*h*s+e*i*c,t}function _r(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}var Br,Nr,kr,Ur,Wr,Cr,Gr=Oa,Hr=Qa,Jr=Ya,Kr=Xa,$r=Za,tu=Tr,nu=Ha,au=er,ru=ir,uu=tr,eu=uu,ou=nr,iu=ou,hu=ur,cu=lr,su=vr,Mu=(Br=Zn(),Nr=Nn(1,0,0),kr=Nn(0,1,0),function(t,n,a){var r=sa(n,a);return r<-.999999?(Ma(Br,Nr,n),La(Br)<1e-6&&Ma(Br,kr,n),ca(Br,Br),Pr(t,Br,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Ma(Br,n,a),t[0]=Br[0],t[1]=Br[1],t[2]=Br[2],t[3]=1+r,hu(t,t))}),fu=(Ur=gr(),Wr=gr(),function(t,n,a,r,u,e){return zr(Ur,n,u,e),zr(Wr,a,r,e),zr(t,Ur,Wr,2*e*(1-e)),t}),lu=(Cr=bt(),function(t,n,a,r){return Cr[0]=a[0],Cr[3]=a[1],Cr[6]=a[2],Cr[1]=r[0],Cr[4]=r[1],Cr[7]=r[2],Cr[2]=-n[0],Cr[5]=-n[1],Cr[8]=-n[2],hu(t,Xr(t,Cr))});function vu(){var t=new f(8);return f!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0),t[3]=1,t}function bu(t){var n=new f(8);return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n}function mu(t,n,a,r,u,e,o,i){var h=new f(8);return h[0]=t,h[1]=n,h[2]=a,h[3]=r,h[4]=u,h[5]=e,h[6]=o,h[7]=i,h}function du(t,n,a,r,u,e,o){var i=new f(8);i[0]=t,i[1]=n,i[2]=a,i[3]=r;var h=.5*u,c=.5*e,s=.5*o;return i[4]=h*r+c*a-s*n,i[5]=c*r+s*t-h*a,i[6]=s*r+h*n-c*t,i[7]=-h*t-c*n-s*a,i}function xu(t,n,a){var r=.5*a[0],u=.5*a[1],e=.5*a[2],o=n[0],i=n[1],h=n[2],c=n[3];return t[0]=o,t[1]=i,t[2]=h,t[3]=c,t[4]=r*c+u*h-e*i,t[5]=u*c+e*o-r*h,t[6]=e*c+r*i-u*o,t[7]=-r*o-u*i-e*h,t}function yu(t,n){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=.5*n[0],t[5]=.5*n[1],t[6]=.5*n[2],t[7]=0,t}function pu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function qu(t,n){var a=gr();qn(a,n);var r=new f(3);return yn(r,n),xu(t,a,r),t}function wu(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t}function gu(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t}function Au(t,n,a,r,u,e,o,i,h){return t[0]=n,t[1]=a,t[2]=r,t[3]=u,t[4]=e,t[5]=o,t[6]=i,t[7]=h,t}var Pu=Jr;function Su(t,n){return t[0]=n[4],t[1]=n[5],t[2]=n[6],t[3]=n[7],t}var Ru=Jr;function Tu(t,n){return t[4]=n[0],t[5]=n[1],t[6]=n[2],t[7]=n[3],t}function Iu(t,n){var a=n[4],r=n[5],u=n[6],e=n[7],o=-n[0],i=-n[1],h=-n[2],c=n[3];return t[0]=2*(a*c+e*o+r*h-u*i),t[1]=2*(r*c+e*i+u*o-a*h),t[2]=2*(u*c+e*h+a*i-r*o),t}function Eu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=.5*a[0],h=.5*a[1],c=.5*a[2],s=n[4],M=n[5],f=n[6],l=n[7];return t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=o*i+u*c-e*h+s,t[5]=o*h+e*i-r*c+M,t[6]=o*c+r*h-u*i+f,t[7]=-r*i-u*h-e*c+l,t}function Du(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Ir(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Fu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Er(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Lu(t,n,a){var r=-n[0],u=-n[1],e=-n[2],o=n[3],i=n[4],h=n[5],c=n[6],s=n[7],M=i*o+s*r+h*e-c*u,f=h*o+s*u+c*r-i*e,l=c*o+s*e+i*u-h*r,v=s*o-i*r-h*u-c*e;return Dr(t,n,a),r=t[0],u=t[1],e=t[2],o=t[3],t[4]=M*o+v*r+f*e-l*u,t[5]=f*o+v*u+l*r-M*e,t[6]=l*o+v*e+M*u-f*r,t[7]=v*o-M*r-f*u-l*e,t}function Vu(t,n,a){var r=a[0],u=a[1],e=a[2],o=a[3],i=n[0],h=n[1],c=n[2],s=n[3];return t[0]=i*o+s*r+h*e-c*u,t[1]=h*o+s*u+c*r-i*e,t[2]=c*o+s*e+i*u-h*r,t[3]=s*o-i*r-h*u-c*e,i=n[4],h=n[5],c=n[6],s=n[7],t[4]=i*o+s*r+h*e-c*u,t[5]=h*o+s*u+c*r-i*e,t[6]=c*o+s*e+i*u-h*r,t[7]=s*o-i*r-h*u-c*e,t}function ju(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[0],h=a[1],c=a[2],s=a[3];return t[0]=r*s+o*i+u*c-e*h,t[1]=u*s+o*h+e*i-r*c,t[2]=e*s+o*c+r*h-u*i,t[3]=o*s-r*i-u*h-e*c,i=a[4],h=a[5],c=a[6],s=a[7],t[4]=r*s+o*i+u*c-e*h,t[5]=u*s+o*h+e*i-r*c,t[6]=e*s+o*c+r*h-u*i,t[7]=o*s-r*i-u*h-e*c,t}function zu(t,n,a,r){if(Math.abs(r)<M)return wu(t,n);var u=Math.hypot(a[0],a[1],a[2]);r*=.5;var e=Math.sin(r),o=e*a[0]/u,i=e*a[1]/u,h=e*a[2]/u,c=Math.cos(r),s=n[0],f=n[1],l=n[2],v=n[3];t[0]=s*c+v*o+f*h-l*i,t[1]=f*c+v*i+l*o-s*h,t[2]=l*c+v*h+s*i-f*o,t[3]=v*c-s*o-f*i-l*h;var b=n[4],m=n[5],d=n[6],x=n[7];return t[4]=b*c+x*o+m*h-d*i,t[5]=m*c+x*i+d*o-b*h,t[6]=d*c+x*h+b*i-m*o,t[7]=x*c-b*o-m*i-d*h,t}function Ou(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t}function Qu(t,n,a){var r=n[0],u=n[1],e=n[2],o=n[3],i=a[4],h=a[5],c=a[6],s=a[7],M=n[4],f=n[5],l=n[6],v=n[7],b=a[0],m=a[1],d=a[2],x=a[3];return t[0]=r*x+o*b+u*d-e*m,t[1]=u*x+o*m+e*b-r*d,t[2]=e*x+o*d+r*m-u*b,t[3]=o*x-r*b-u*m-e*d,t[4]=r*s+o*i+u*c-e*h+M*x+v*b+f*d-l*m,t[5]=u*s+o*h+e*i-r*c+f*x+v*m+l*b-M*d,t[6]=e*s+o*c+r*h-u*i+l*x+v*d+M*m-f*b,t[7]=o*s-r*i-u*h-e*c+v*x-M*b-f*m-l*d,t}var Yu=Qu;function Xu(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t}var Zu=au;function _u(t,n,a,r){var u=1-r;return Zu(n,a)<0&&(r=-r),t[0]=n[0]*u+a[0]*r,t[1]=n[1]*u+a[1]*r,t[2]=n[2]*u+a[2]*r,t[3]=n[3]*u+a[3]*r,t[4]=n[4]*u+a[4]*r,t[5]=n[5]*u+a[5]*r,t[6]=n[6]*u+a[6]*r,t[7]=n[7]*u+a[7]*r,t}function Bu(t,n){var a=Wu(n);return t[0]=-n[0]/a,t[1]=-n[1]/a,t[2]=-n[2]/a,t[3]=n[3]/a,t[4]=-n[4]/a,t[5]=-n[5]/a,t[6]=-n[6]/a,t[7]=n[7]/a,t}function Nu(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t[4]=-n[4],t[5]=-n[5],t[6]=-n[6],t[7]=n[7],t}var ku=uu,Uu=ku,Wu=ou,Cu=Wu;function Gu(t,n){var a=Wu(n);if(a>0){a=Math.sqrt(a);var r=n[0]/a,u=n[1]/a,e=n[2]/a,o=n[3]/a,i=n[4],h=n[5],c=n[6],s=n[7],M=r*i+u*h+e*c+o*s;t[0]=r,t[1]=u,t[2]=e,t[3]=o,t[4]=(i-r*M)/a,t[5]=(h-u*M)/a,t[6]=(c-e*M)/a,t[7]=(s-o*M)/a}return t}function Hu(t){return"quat2("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+")"}function Ju(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]}function Ku(t,n){var a=t[0],r=t[1],u=t[2],e=t[3],o=t[4],i=t[5],h=t[6],c=t[7],s=n[0],f=n[1],l=n[2],v=n[3],b=n[4],m=n[5],d=n[6],x=n[7];return Math.abs(a-s)<=M*Math.max(1,Math.abs(a),Math.abs(s))&&Math.abs(r-f)<=M*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(u-l)<=M*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(e-v)<=M*Math.max(1,Math.abs(e),Math.abs(v))&&Math.abs(o-b)<=M*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(i-m)<=M*Math.max(1,Math.abs(i),Math.abs(m))&&Math.abs(h-d)<=M*Math.max(1,Math.abs(h),Math.abs(d))&&Math.abs(c-x)<=M*Math.max(1,Math.abs(c),Math.abs(x))}function $u(){var t=new f(2);return f!=Float32Array&&(t[0]=0,t[1]=0),t}function te(t){var n=new f(2);return n[0]=t[0],n[1]=t[1],n}function ne(t,n){var a=new f(2);return a[0]=t,a[1]=n,a}function ae(t,n){return t[0]=n[0],t[1]=n[1],t}function re(t,n,a){return t[0]=n,t[1]=a,t}function ue(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t}function ee(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t}function oe(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t}function ie(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t}function he(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function ce(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function se(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t}function Me(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t}function fe(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function le(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t}function ve(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t}function be(t,n){var a=n[0]-t[0],r=n[1]-t[1];return Math.hypot(a,r)}function me(t,n){var a=n[0]-t[0],r=n[1]-t[1];return a*a+r*r}function de(t){var n=t[0],a=t[1];return Math.hypot(n,a)}function xe(t){var n=t[0],a=t[1];return n*n+a*a}function ye(t,n){return t[0]=-n[0],t[1]=-n[1],t}function pe(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function qe(t,n){var a=n[0],r=n[1],u=a*a+r*r;return u>0&&(u=1/Math.sqrt(u)),t[0]=n[0]*u,t[1]=n[1]*u,t}function we(t,n){return t[0]*n[0]+t[1]*n[1]}function ge(t,n,a){var r=n[0]*a[1]-n[1]*a[0];return t[0]=t[1]=0,t[2]=r,t}function Ae(t,n,a,r){var u=n[0],e=n[1];return t[0]=u+r*(a[0]-u),t[1]=e+r*(a[1]-e),t}function Pe(t,n){n=n||1;var a=2*l()*Math.PI;return t[0]=Math.cos(a)*n,t[1]=Math.sin(a)*n,t}function Se(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u,t[1]=a[1]*r+a[3]*u,t}function Re(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[2]*u+a[4],t[1]=a[1]*r+a[3]*u+a[5],t}function Te(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[3]*u+a[6],t[1]=a[1]*r+a[4]*u+a[7],t}function Ie(t,n,a){var r=n[0],u=n[1];return t[0]=a[0]*r+a[4]*u+a[12],t[1]=a[1]*r+a[5]*u+a[13],t}function Ee(t,n,a,r){var u=n[0]-a[0],e=n[1]-a[1],o=Math.sin(r),i=Math.cos(r);return t[0]=u*i-e*o+a[0],t[1]=u*o+e*i+a[1],t}function De(t,n){var a=t[0],r=t[1],u=n[0],e=n[1],o=a*a+r*r;o>0&&(o=1/Math.sqrt(o));var i=u*u+e*e;i>0&&(i=1/Math.sqrt(i));var h=(a*u+r*e)*o*i;return h>1?0:h<-1?Math.PI:Math.acos(h)}function Fe(t){return t[0]=0,t[1]=0,t}function Le(t){return"vec2("+t[0]+", "+t[1]+")"}function Ve(t,n){return t[0]===n[0]&&t[1]===n[1]}function je(t,n){var a=t[0],r=t[1],u=n[0],e=n[1];return Math.abs(a-u)<=M*Math.max(1,Math.abs(a),Math.abs(u))&&Math.abs(r-e)<=M*Math.max(1,Math.abs(r),Math.abs(e))}var ze=de,Oe=ee,Qe=oe,Ye=ie,Xe=be,Ze=me,_e=xe,Be=function(){var t=$u();return function(n,a,r,u,e,o){var i,h;for(a||(a=2),r||(r=0),h=u?Math.min(u*a+r,n.length):n.length,i=r;i<h;i+=a)t[0]=n[i],t[1]=n[i+1],e(t,t,o),n[i]=t[0],n[i+1]=t[1];return n}}();window.glMatrix=n,window.mat2=a,window.mat2d=r,window.mat3=u,window.mat4=e,window.quat=h,window.quat2=c,window.vec2=s,window.vec3=o,window.vec4=i})();
//# sourceMappingURL=libs.core.js.map
if(!CABLES.exportedPatches)CABLES.exportedPatches={};CABLES.exportedPatches["MZcxaN"]={_id:"68406f46cddae5e9f7fd265e",ops:[{id:"mbijw4cwi",uiAttribs:{},portsOut:[{name:"CSS Width",links:[{portIn:"Screen X",portOut:"CSS Width",objIn:"1cuif2wnv",objOut:"mbijw4cwi"}]},{name:"CSS Height",links:[{portIn:"Screen Y",portOut:"CSS Height",objIn:"1cuif2wnv",objOut:"mbijw4cwi"}]},{name:"Pixel Ratio",value:1.5},{name:"Pixel Width",value:633},{name:"Pixel Height",value:436.5},{name:"Aspect Ratio",value:1.4501718213058419},{name:"Landscape",value:1}],objName:"Ops.Gl.CanvasInfo_v3"},{id:"3ulnnwwy2",uiAttribs:{},portsOut:[{name:"Category Nodes",links:[{portIn:"Category Nodes",portOut:"Category Nodes",objIn:"1cuif2wnv",objOut:"3ulnnwwy2"}]}],objName:"Ops.Patch.PMZcxaN.CategoryNodes"},{id:"b72bny7hx",uiAttribs:{},portsOut:[{name:"Content Nodes",links:[{portIn:"Content Nodes",portOut:"Content Nodes",objIn:"1cuif2wnv",objOut:"b72bny7hx"}]}],objName:"Ops.Patch.PMZcxaN.ContentNodes"},{id:"1cuif2wnv",uiAttribs:{},portsIn:[{name:"Initial Positions",value:0},{name:"Positions",value:0},{name:"Adjacency Matrix",value:0},{name:"Temperature",value:10},{name:"Cooldown",value:.01},{name:"FPS",value:60}],objName:"Ops.Patch.PMZcxaN.MonotomGraphViz"},{id:"awv2nrfy7",uiAttribs:{},portsIn:[{name:"Max Pixel Density (DPR)",value:2},{name:"FPS Limit",value:0},{name:"Reduce FPS unfocussed",value:0},{name:"Transparent",value:0},{name:"Active",value:1}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"qlvasxm35",objOut:"awv2nrfy7"}]},{name:"width",value:633},{name:"height",value:436.5},{name:"Pixel Density",value:1.5}],objName:"Ops.Gl.MainLoop_v2"},{id:"3m7gxs2jt",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"Exec",portOut:"trigger 0",objIn:"d23f4n9gm",objOut:"3m7gxs2jt"}]},{name:"trigger 1",links:[{portIn:"Execute",portOut:"trigger 1",objIn:"7uinlp1b6",objOut:"3m7gxs2jt"}]},{name:"trigger 7",links:[{portIn:"exe",portOut:"trigger 7",objIn:"lv4uvzpq7",objOut:"3m7gxs2jt"}]},{name:"trigger 12",links:[{portIn:"Update",portOut:"trigger 12",objIn:"t9a1p8e4p",objOut:"3m7gxs2jt"}]},{name:"trigger 14",links:[{portIn:"Trigger",portOut:"trigger 14",objIn:"l9ldm5x6p",objOut:"3m7gxs2jt"}]}],objName:"Ops.Trigger.Sequence"},{id:"a6c3o3uni",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"3kiisqinz",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"snzo52cgu",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"Array",portOut:"Value",objIn:"rjtqhmufq",objOut:"snzo52cgu"},{portIn:"Positions",portOut:"Value",objIn:"7uinlp1b6",objOut:"snzo52cgu"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"xxfueh2hm",uiAttribs:{},portsIn:[{name:"Scale",value:1.1},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:2},{name:"Material blend mode",value:"Normal"},{name:"Colors",value:0}],portsOut:[{name:"Num",value:6}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"qbuhybg7z",uiAttribs:{},portsIn:[{name:"Deviation",value:.4}],portsOut:[{name:"Array",links:[{portIn:"Value",portOut:"Array",objIn:"a6c3o3uni",objOut:"qbuhybg7z"}]}],objName:"Ops.Math.GaussianRandomArray"},{id:"8dn76m8vj",uiAttribs:{},portsOut:[{name:"timesTriggered",links:[{portIn:"Random Seed",portOut:"timesTriggered",objIn:"qbuhybg7z",objOut:"8dn76m8vj"}]}],objName:"Ops.Trigger.TriggerCounter"},{id:"cw3ufhoci",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"Array2x",portOut:"Value",objIn:"7vudseoey",objOut:"cw3ufhoci"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"524i93zs0",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Graph Size",portOut:"Value",objIn:"7uinlp1b6",objOut:"524i93zs0"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"lvm6co1dg",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"number 0",portOut:"Value",objIn:"gip87nvis",objOut:"lvm6co1dg"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"gip87nvis",uiAttribs:{},portsIn:[{name:"number 1",value:2},{name:"math mode index",value:2},{name:"math mode",value:"*"}],portsOut:[{name:"result",links:[{portIn:"Num",portOut:"result",objIn:"qbuhybg7z",objOut:"gip87nvis"}]}],objName:"Ops.Math.Math"},{id:"ladd3g5qt",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],portsOut:[{name:"Value",links:[{portIn:"Adjacency Matrix",portOut:"Value",objIn:"7uinlp1b6",objOut:"ladd3g5qt"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"4hjbasgyn",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],portsOut:[{name:"Value",links:[{portIn:"Adjacency Matrix",portOut:"Value",objIn:"r07qh8d9p",objOut:"4hjbasgyn"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"8ftj79yt0",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeWeights"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"n7qxriu48",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Graph Size",portOut:"Value",objIn:"r07qh8d9p",objOut:"n7qxriu48"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"18fnv09am",uiAttribs:{},portsIn:[{name:"Variable",value:"textScaleFactors"}],portsOut:[{name:"Value",links:[{portIn:"array 0",portOut:"Value",objIn:"htyg7tk7v",objOut:"18fnv09am"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"nbiyghueb",uiAttribs:{},portsIn:[{name:"Scale",value:1},{name:"Limit",value:100},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:2},{name:"Material blend mode",value:"Normal"},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:11}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"7fu8a21ui",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"NodePositions2D",portOut:"Value",objIn:"tuopslwv2",objOut:"7fu8a21ui"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"t8q2gskaj",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],portsOut:[{name:"Value",links:[{portIn:"EdgeWeightMatrix",portOut:"Value",objIn:"tuopslwv2",objOut:"t8q2gskaj"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"mt2uswvvi",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"GraphSize",portOut:"Value",objIn:"tuopslwv2",objOut:"mt2uswvvi"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"gn7feu7qz",uiAttribs:{},portsIn:[{name:"Render Mesh",value:0},{name:"Width",value:1},{name:"Length",value:.01},{name:"Height",value:.025},{name:"Center",value:1},{name:"Mapping index",value:0},{name:"Mapping",value:"Side"},{name:"Bias",value:0},{name:"Flip X",value:1},{name:"Top",value:1},{name:"Bottom",value:1},{name:"Left",value:1},{name:"Right",value:1},{name:"Front",value:1},{name:"Back",value:1}],portsOut:[{name:"Next",links:[{portIn:"exe",portOut:"Next",objIn:"nbiyghueb",objOut:"gn7feu7qz"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"nbiyghueb",objOut:"gn7feu7qz"}]}],objName:"Ops.Gl.Meshes.Cube_v2"},{id:"bbb9x7gnc",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"GraphSize",portOut:"Value",objIn:"8yamefjpn",objOut:"bbb9x7gnc"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"139x03shh",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"number 0",portOut:"Value",objIn:"dj6ga7slm",objOut:"139x03shh"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"dj6ga7slm",uiAttribs:{},portsIn:[{name:"number 1",value:2},{name:"math mode index",value:2},{name:"math mode",value:"*"}],portsOut:[{name:"result",links:[{portIn:"ArraySize (optional)",portOut:"result",objIn:"cinfsrkbq",objOut:"dj6ga7slm"}]}],objName:"Ops.Math.Math"},{id:"6srweioi5",uiAttribs:{},portsIn:[{name:"Value",value:.12},{name:"Variable",value:"temp"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"ws2pkqf2j",uiAttribs:{},portsIn:[{name:"Value",value:18},{name:"Variable",value:"smoothFactor"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"smkmfm055",uiAttribs:{},portsIn:[{name:"Value",value:8e-4},{name:"Variable",value:"cooldown"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"e87z7oznr",uiAttribs:{},portsIn:[{name:"Variable",value:"temp"}],portsOut:[{name:"Value",links:[{portIn:"Initial Temperature",portOut:"Value",objIn:"7uinlp1b6",objOut:"e87z7oznr"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"brkod0ze6",uiAttribs:{},portsIn:[{name:"Variable",value:"cooldown"}],portsOut:[{name:"Value",links:[{portIn:"Cooldown",portOut:"Value",objIn:"7uinlp1b6",objOut:"brkod0ze6"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"0md0czj88",uiAttribs:{},portsIn:[{name:"Variable",value:"smoothFactor"}],portsOut:[{name:"Value",links:[{portIn:"WindowSize",portOut:"Value",objIn:"cinfsrkbq",objOut:"0md0czj88"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"x95g6oa7g",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"CurrentNodePositions2D",portOut:"Value",objIn:"l9ldm5x6p",objOut:"x95g6oa7g"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"v9l4uypad",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"GraphSize",portOut:"Value",objIn:"l9ldm5x6p",objOut:"v9l4uypad"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"s8kevb109",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"lv4uvzpq7",uiAttribs:{},portsOut:[{name:"trigger 1",links:[{portIn:"Trigger",portOut:"trigger 1",objIn:"tuopslwv2",objOut:"lv4uvzpq7"}]},{name:"trigger 4",links:[{portIn:"render",portOut:"trigger 4",objIn:"oyiht9lbt",objOut:"lv4uvzpq7"}]},{name:"trigger 5",links:[{portIn:"Render",portOut:"trigger 5",objIn:"o8n8u1uz8",objOut:"lv4uvzpq7"}]}],objName:"Ops.Trigger.Sequence"},{id:"tufoscoc8",uiAttribs:{},portsIn:[{name:"Variable",value:"DraggedNodeIndex"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"hipyujf6v",uiAttribs:{},portsIn:[{name:"r",value:.06496114691098531},{name:"g",value:.26708111007676144},{name:"b",value:.9566666666666667},{name:"a",value:1}],portsOut:[{name:"outr",value:.06496114691098531},{name:"outg",value:.26708111007676144},{name:"outb",value:.9566666666666667},{name:"outa",value:1},{name:"Hex",value:"1144F4"},{name:"Array",links:[{portIn:"ColorUnselected",portOut:"Array",objIn:"8yamefjpn",objOut:"hipyujf6v"}]}],objName:"Ops.Color.ColorValue"},{id:"ie68pw933",uiAttribs:{},portsIn:[{name:"r",value:.828},{name:"g",value:.291},{name:"b",value:0},{name:"a",value:1}],portsOut:[{name:"outr",value:.828},{name:"outg",value:.291},{name:"outb",value:0},{name:"outa",value:1},{name:"Hex",value:"D34A00"},{name:"Array",links:[{portIn:"ColorSelected",portOut:"Array",objIn:"8yamefjpn",objOut:"ie68pw933"}]}],objName:"Ops.Color.ColorValue"},{id:"nzyypukp0",uiAttribs:{},portsIn:[{name:"Variable",value:"DraggedNodeIndex"}],portsOut:[{name:"Value",links:[{portIn:"NodeSelectedIndex",portOut:"Value",objIn:"8yamefjpn",objOut:"nzyypukp0"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"htyg7tk7v",uiAttribs:{},portsIn:[{name:"Number for math",value:7.16},{name:"Math function index",value:2},{name:"Math function",value:"*"}],portsOut:[{name:"Array result",links:[{portIn:"Scale Array",portOut:"Array result",objIn:"xxfueh2hm",objOut:"htyg7tk7v"}]},{name:"Array length",value:18}],objName:"Ops.Array.ArrayMath"},{id:"tuopslwv2",uiAttribs:{},portsIn:[{name:"MinThickness",value:.2},{name:"MaxThickness",value:1.5},{name:"DefaultEdgeZ",value:0},{name:"NormalizeWeights",value:1}],portsOut:[{name:"Next",links:[{portIn:"Render",portOut:"Next",objIn:"zbcxo6ca0",objOut:"tuopslwv2"}]},{name:"EdgeTranslations",links:[{portIn:"positions",portOut:"EdgeTranslations",objIn:"nbiyghueb",objOut:"tuopslwv2"}]},{name:"EdgeRotations",links:[{portIn:"Rotations",portOut:"EdgeRotations",objIn:"nbiyghueb",objOut:"tuopslwv2"}]},{name:"EdgeScales",links:[{portIn:"Scale Array",portOut:"EdgeScales",objIn:"nbiyghueb",objOut:"tuopslwv2"}]},{name:"EdgeInstanceCount",links:[{portIn:"Limit Instances",portOut:"EdgeInstanceCount",objIn:"nbiyghueb",objOut:"tuopslwv2"}]}],objName:"Ops.Patch.PMZcxaN.DrawVariableWidthEdges"},{id:"a4z4yvl4c",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Update Positions"}],portsOut:[{name:"Triggered",links:[{portIn:"Reset",portOut:"Triggered",objIn:"7uinlp1b6",objOut:"a4z4yvl4c"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"2ylsbjh7x",uiAttribs:{},portsIn:[{name:"Value",value:.8},{name:"Variable",value:"density"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"6lx1xzhl8",uiAttribs:{},portsIn:[{name:"Variable",value:"density"}],portsOut:[{name:"Value",links:[{portIn:"Density",portOut:"Value",objIn:"7uinlp1b6",objOut:"6lx1xzhl8"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"lhmyjz8ye",uiAttribs:{},portsIn:[{name:"Variable",value:"DraggedNodeIndex"}],portsOut:[{name:"Value",links:[{portIn:"NodeSelectedIndex",portOut:"Value",objIn:"v0wbg8ft1",objOut:"lhmyjz8ye"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"e3s61omvz",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.938967136150235},{name:"b",value:1},{name:"a",value:.314}],portsOut:[{name:"outr",value:0},{name:"outg",value:.938967136150235},{name:"outb",value:1},{name:"outa",value:.314},{name:"Hex",value:"00EFFF"},{name:"Array",links:[{portIn:"ColorUnselected",portOut:"Array",objIn:"v0wbg8ft1",objOut:"e3s61omvz"}]}],objName:"Ops.Color.ColorValue"},{id:"mj92624hd",uiAttribs:{},portsIn:[{name:"r",value:.8529492677238246},{name:"g",value:.4846354126930237},{name:"b",value:1},{name:"a",value:.698}],portsOut:[{name:"outr",value:.8529492677238246},{name:"outg",value:.4846354126930237},{name:"outb",value:1},{name:"outa",value:.698},{name:"Hex",value:"DA7CFF"},{name:"Array",links:[{portIn:"ColorSelected",portOut:"Array",objIn:"v0wbg8ft1",objOut:"mj92624hd"}]}],objName:"Ops.Color.ColorValue"},{id:"pl2quwm3l",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],portsOut:[{name:"Value",links:[{portIn:"Adjacency Matrix",portOut:"Value",objIn:"v0wbg8ft1",objOut:"pl2quwm3l"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"1flj5xn7u",uiAttribs:{},portsIn:[{name:"Variable",value:"edgesCount"}],portsOut:[{name:"Value",links:[{portIn:"Edges Count",portOut:"Value",objIn:"v0wbg8ft1",objOut:"1flj5xn7u"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"ybunmz313",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"GraphSize",portOut:"Value",objIn:"v0wbg8ft1",objOut:"ybunmz313"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"8yamefjpn",uiAttribs:{},portsOut:[{name:"ColorsArray",links:[{portIn:"Colors",portOut:"ColorsArray",objIn:"ntnnysizs",objOut:"8yamefjpn"}]}],objName:"Ops.Patch.PMZcxaN.NodesColor"},{id:"v0wbg8ft1",uiAttribs:{},portsOut:[{name:"ColorsArray",links:[{portIn:"Array 0",portOut:"ColorsArray",objIn:"f2xmig0y0",objOut:"v0wbg8ft1"}]}],objName:"Ops.Patch.PMZcxaN.EdgesColor"},{id:"tkx6l35ec",uiAttribs:{},portsIn:[{name:"Variable",value:"aspectRatio"}],portsOut:[{name:"Value",links:[{portIn:"Aspect Ratio",portOut:"Value",objIn:"7uinlp1b6",objOut:"tkx6l35ec"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"d4q8iskmo",uiAttribs:{},portsIn:[{name:"Num Triplets",value:10},{name:"X",value:0},{name:"Y",value:0},{name:"Z",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 1",portOut:"Array",objIn:"f2xmig0y0",objOut:"d4q8iskmo"}]},{name:"Total points",value:10},{name:"Array length",value:30}],objName:"Ops.Array.Array3"},{id:"f2xmig0y0",uiAttribs:{},portsIn:[{name:"Array 2",value:0},{name:"Array 3",value:0},{name:"Array 4",value:0},{name:"Array 5",value:0},{name:"Array 6",value:0},{name:"Array 7",value:0}],portsOut:[{name:"Result",links:[{portIn:"Colors",portOut:"Result",objIn:"nbiyghueb",objOut:"f2xmig0y0"}]},{name:"Array length",value:74}],objName:"Ops.Array.ArrayMerge_v3"},{id:"jfvkzxva9",uiAttribs:{},portsIn:[{name:"Coordinates index",value:0},{name:"Coordinates",value:"-1 to 1"},{name:"Area index",value:0},{name:"Area",value:"Canvas"},{name:"flip y",value:1},{name:"right click prevent default",value:1},{name:"Touch support",value:1},{name:"Passive Events",value:0},{name:"Active",value:1}],portsOut:[{name:"x",links:[{portIn:"number1",portOut:"x",objIn:"8kys9je6p",objOut:"jfvkzxva9"}]},{name:"y",links:[{portIn:"Value",portOut:"y",objIn:"mh20x6zwq",objOut:"jfvkzxva9"}]},{name:"click",links:[{portIn:"Trigger",portOut:"click",objIn:"h1opqdd79",objOut:"jfvkzxva9"}]},{name:"Button is down",links:[{portIn:"Value",portOut:"Button is down",objIn:"q64kolyxa",objOut:"jfvkzxva9"}]},{name:"Mouse is hovering",value:0},{name:"Movement X",value:0},{name:"Movement Y",value:-.6666666666666666}],objName:"Ops.Devices.Mouse.Mouse_v3"},{id:"6cqwydu98",uiAttribs:{},portsIn:[{name:"Disable Scaling",value:1},{name:"Disable Scroll",value:1},{name:"HDPI Coordinates",value:0},{name:"Active",value:1},{name:"Area index",value:0},{name:"Area",value:"Canvas"},{name:"Normalize Coordinates",value:1},{name:"Flip Y",value:1}],portsOut:[{name:"Touched",links:[{portIn:"Value",portOut:"Touched",objIn:"17qny2xtp",objOut:"6cqwydu98"}]},{name:"Fingers",value:0},{name:"Finger 1 X",links:[{portIn:"number1",portOut:"Finger 1 X",objIn:"qq8fycn4o",objOut:"6cqwydu98"}]},{name:"Finger 1 Y",links:[{portIn:"Value",portOut:"Finger 1 Y",objIn:"kvjvxwxl9",objOut:"6cqwydu98"}]},{name:"Finger 1 Force",value:0},{name:"Finger 2 X",value:0},{name:"Finger 2 Y",value:0},{name:"Finger 2 Force",value:0},{name:"Touch End",links:[{portIn:"Trigger",portOut:"Touch End",objIn:"8eocsu02k",objOut:"6cqwydu98"}]}],objName:"Ops.Devices.TouchScreen"},{id:"8eocsu02k",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Update Positions"}],objName:"Ops.Trigger.TriggerSend"},{id:"ppu9ma66v",uiAttribs:{},portsIn:[{name:"Variable",value:"aspectRatio"}],portsOut:[{name:"Value",links:[{portIn:"number2",portOut:"Value",objIn:"qq8fycn4o",objOut:"ppu9ma66v"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"h1opqdd79",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Update Positions"}],objName:"Ops.Trigger.TriggerSend"},{id:"1qv9wv8i9",uiAttribs:{},portsIn:[{name:"Variable",value:"aspectRatio"}],portsOut:[{name:"Value",links:[{portIn:"number2",portOut:"Value",objIn:"8kys9je6p",objOut:"1qv9wv8i9"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"mh20x6zwq",uiAttribs:{},portsIn:[{name:"Variable",value:"User Y"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"kepr5lsm2",uiAttribs:{},portsIn:[{name:"Variable",value:"User X"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"kvjvxwxl9",uiAttribs:{},portsIn:[{name:"Variable",value:"User Y"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"npvrcj5ny",uiAttribs:{},portsIn:[{name:"Variable",value:"User X"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"17qny2xtp",uiAttribs:{},portsIn:[{name:"Variable",value:"PointerIsDown"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"q64kolyxa",uiAttribs:{},portsIn:[{name:"Variable",value:"PointerIsDown"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"y07e28mit",uiAttribs:{},portsIn:[{name:"Variable",value:"PointerIsDown"}],portsOut:[{name:"Value",links:[{portIn:"Mouse Button Down",portOut:"Value",objIn:"l9ldm5x6p",objOut:"y07e28mit"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"wvuudrjes",uiAttribs:{},portsIn:[{name:"Variable",value:"User X"}],portsOut:[{name:"Value",links:[{portIn:"Mouse X",portOut:"Value",objIn:"l9ldm5x6p",objOut:"wvuudrjes"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"hb6e2sd9o",uiAttribs:{},portsIn:[{name:"Variable",value:"User Y"}],portsOut:[{name:"Value",links:[{portIn:"Mouse Y",portOut:"Value",objIn:"l9ldm5x6p",objOut:"hb6e2sd9o"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"0zddkspzm",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Update Positions"}],objName:"Ops.Trigger.TriggerSend"},{id:"t0hd38qb0",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Value",portOut:"Value",objIn:"b407d7x69",objOut:"t0hd38qb0"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"b407d7x69",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Trigger",portOut:"Next",objIn:"0zddkspzm",objOut:"b407d7x69"}]},{name:"Number",value:6}],objName:"Ops.Number.TriggerOnChangeNumber"},{id:"zdwm194wn",uiAttribs:{},portsIn:[{name:"Variable",value:"aspectRatio"}],portsOut:[{name:"Value",links:[{portIn:"Value",portOut:"Value",objIn:"smvn3ad5x",objOut:"zdwm194wn"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"smvn3ad5x",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Trigger",portOut:"Next",objIn:"0zddkspzm",objOut:"smvn3ad5x"}]},{name:"Number",value:1.448512585812357}],objName:"Ops.Number.TriggerOnChangeNumber"},{id:"b3meyfn42",uiAttribs:{},portsIn:[{name:"Variable",value:"density"}],portsOut:[{name:"Value",links:[{portIn:"Value",portOut:"Value",objIn:"q8fjthpnh",objOut:"b3meyfn42"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"q8fjthpnh",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Trigger",portOut:"Next",objIn:"0zddkspzm",objOut:"q8fjthpnh"}]},{name:"Number",value:.8}],objName:"Ops.Number.TriggerOnChangeNumber"},{id:"6snakpdj9",uiAttribs:{},portsIn:[{name:"Variable",value:"edgesCount"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"5sxt0zr7g",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"sjwqmr23l",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Init Simulation"}],objName:"Ops.Trigger.TriggerSend"},{id:"d23f4n9gm",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"Trigger",portOut:"Next",objIn:"sjwqmr23l",objOut:"d23f4n9gm"}]},{name:"Was Triggered",value:1}],objName:"Ops.Trigger.TriggerOnce"},{id:"9hvwltqxe",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Init Simulation"}],portsOut:[{name:"Triggered",links:[{portIn:"exe",portOut:"Triggered",objIn:"z0j4kpp6z",objOut:"9hvwltqxe"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"z0j4kpp6z",uiAttribs:{},portsOut:[{name:"trigger 0",links:[{portIn:"Execute",portOut:"trigger 0",objIn:"vzxiv21ff",objOut:"z0j4kpp6z"}]},{name:"trigger 1",links:[{portIn:"Execute",portOut:"trigger 1",objIn:"3l38xg2cv",objOut:"z0j4kpp6z"}]},{name:"trigger 2",links:[{portIn:"Execute",portOut:"trigger 2",objIn:"r07qh8d9p",objOut:"z0j4kpp6z"}]},{name:"trigger 3",links:[{portIn:"exe",portOut:"trigger 3",objIn:"8dn76m8vj",objOut:"z0j4kpp6z"}]},{name:"trigger 13",links:[{portIn:"Trigger",portOut:"trigger 13",objIn:"802gcec7x",objOut:"z0j4kpp6z"}]},{name:"trigger 14",links:[{portIn:"Exe",portOut:"trigger 14",objIn:"n7dq480jy",objOut:"z0j4kpp6z"}]},{name:"trigger 15",links:[{portIn:"Execute",portOut:"trigger 15",objIn:"evhbhl3bw",objOut:"z0j4kpp6z"}]}],objName:"Ops.Trigger.Sequence"},{id:"vzxiv21ff",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"Value",portOut:"Result",objIn:"5sxt0zr7g",objOut:"vzxiv21ff"}]},{name:"Edges Count",links:[{portIn:"Value",portOut:"Edges Count",objIn:"6snakpdj9",objOut:"vzxiv21ff"}]}],objName:"Ops.Patch.PMZcxaN.AdjMatrix"},{id:"r07qh8d9p",uiAttribs:{},portsOut:[{name:"Node Weights",links:[{portIn:"Value",portOut:"Node Weights",objIn:"8ftj79yt0",objOut:"r07qh8d9p"}]}],objName:"Ops.Patch.PMZcxaN.ComputeNodeWeights"},{id:"2jjhn1z04",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:0,title:"Render"},{name:"height",value:.015},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],portsOut:[{name:"trigger",title:"Next",links:[{portIn:"exe",portOut:"trigger",objIn:"xxfueh2hm",objOut:"2jjhn1z04"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"xxfueh2hm",objOut:"2jjhn1z04"}]}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"7wm1v3uux",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:1,title:"Render"},{name:"width",value:1},{name:"height",value:1},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"teeggym6k",uiAttribs:{},portsIn:[{name:"number1",value:1}],portsOut:[{name:"result",value:1}],objName:"Ops.Math.Divide"},{id:"rz98ba4wl",uiAttribs:{},portsIn:[{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"render",portOut:"trigger",objIn:"7wm1v3uux",objOut:"rz98ba4wl"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"3c0uhxec3",uiAttribs:{},portsIn:[{name:"text",value:"cables"},{name:"Draw Mesh",value:0},{name:"Scale Mesh",value:1},{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:512},{name:"Height",value:512},{name:"Auto Height",value:1},{name:"Auto Line Breaks",value:1},{name:"font",value:"Arial"},{name:"weight",value:"normal"},{name:"fontSize",value:100},{name:"align index",value:1},{name:"align",value:"center"},{name:"Vertical align index",value:0},{name:"Vertical align",value:"Top"},{name:"Letter Spacing",value:0},{name:"Line Height Add",value:0},{name:"Padding Y Top",value:3},{name:"Padding Y Bottom",value:3},{name:"Padding X",value:0},{name:"filter index",value:1},{name:"filter",value:"linear"},{name:"Wrap index",value:2},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Reuse Texture",value:1},{name:"Show Debug",value:0},{name:"Redraw On Font Load",value:1},{name:"r",value:1},{name:"g",value:1},{name:"b",value:1},{name:"Opacity",value:1},{name:"background R",value:0},{name:"background G",value:0},{name:"background B",value:0},{name:"background A",value:1}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"rz98ba4wl",objOut:"3c0uhxec3"}]},{name:"Ratio",value:.37942122186495175},{name:"texture",links:[{portIn:"texture",portOut:"texture",objIn:"rz98ba4wl",objOut:"3c0uhxec3"}]},{name:"Aspect",links:[{portIn:"number2",portOut:"Aspect",objIn:"teeggym6k",objOut:"3c0uhxec3"}]},{name:"Num Lines",value:1}],objName:"Ops.Gl.Textures.TextTexture_v6"},{id:"7vudseoey",uiAttribs:{},portsOut:[{name:"Array3x",links:[{portIn:"Array3x",portOut:"Array3x",objIn:"1t6bd0dmq",objOut:"7vudseoey"}]},{name:"Total points",value:6},{name:"Array length",value:18}],objName:"Ops.Array.Array2To3"},{id:"1t6bd0dmq",uiAttribs:{},portsIn:[{name:"Add X",value:0},{name:"Add Y",value:0},{name:"Add Z",value:2}],portsOut:[{name:"Result",links:[{portIn:"positions",portOut:"Result",objIn:"xxfueh2hm",objOut:"1t6bd0dmq"}]}],objName:"Ops.Array.Array3Sum"},{id:"ntnnysizs",uiAttribs:{},portsIn:[{name:"Scale",value:1},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:2},{name:"Material blend mode",value:"Normal"},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:6}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"7jqypgf90",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.408},{name:"b",value:1},{name:"a",value:.614},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"ty8s7dbqa",objOut:"7jqypgf90"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"ty8s7dbqa",uiAttribs:{},portsIn:[{name:"Blendmode index",value:4},{name:"Blendmode",value:"Multiply"},{name:"Premultiplied",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"7zdpdj0s6",objOut:"ty8s7dbqa"}]}],objName:"Ops.Gl.BlendMode"},{id:"plf4v8hgv",uiAttribs:{},portsIn:[{name:"Blendmode index",value:2},{name:"Blendmode",value:"Add"},{name:"Premultiplied",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"2jjhn1z04",objOut:"plf4v8hgv"}]}],objName:"Ops.Gl.BlendMode"},{id:"sgwbr2ne2",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeNames"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"9otfrouru",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"2ecxdu6wc",uiAttribs:{},portsOut:[{name:"length",links:[{portIn:"Value",portOut:"length",objIn:"9otfrouru",objOut:"2ecxdu6wc"}]}],objName:"Ops.Array.ArrayLength_v2"},{id:"3l38xg2cv",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"Value",portOut:"Result",objIn:"sgwbr2ne2",objOut:"3l38xg2cv"},{portIn:"array",portOut:"Result",objIn:"2ecxdu6wc",objOut:"3l38xg2cv"}]}],objName:"Ops.Patch.PMZcxaN.NodeNames"},{id:"o8n8u1uz8",uiAttribs:{},portsIn:[{name:"Draw Mesh",value:0},{name:"Scale Mesh",value:.74},{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:974},{name:"Height",value:1337},{name:"Auto Height",value:0},{name:"Auto Line Breaks",value:1},{name:"font",value:"roboto"},{name:"weight",value:"normal"},{name:"fontSize",value:207.63},{name:"align index",value:0},{name:"align",value:"left"},{name:"Vertical align index",value:0},{name:"Vertical align",value:"Top"},{name:"Letter Spacing",value:10},{name:"Line Height Add",value:0},{name:"Padding Y Top",value:44},{name:"Padding Y Bottom",value:0},{name:"Padding X",value:42},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Wrap index",value:2},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Reuse Texture",value:1},{name:"Show Debug",value:0},{name:"Redraw On Font Load",value:1},{name:"r",value:.6763671934604645},{name:"g",value:.9827395507295931},{name:"b",value:1},{name:"Opacity",value:1},{name:"background R",value:0},{name:"background G",value:0},{name:"background B",value:0},{name:"background A",value:1}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"0ljp0xghq",objOut:"o8n8u1uz8"}]},{name:"Ratio",value:.8807758128921849},{name:"texture",links:[{portIn:"texture",portOut:"texture",objIn:"0ljp0xghq",objOut:"o8n8u1uz8"}]},{name:"Aspect",value:1.1353626943005182},{name:"Num Lines",value:6}],objName:"Ops.Gl.Textures.TextTexture_v6"},{id:"p0brqpdcc",uiAttribs:{},portsIn:[{name:"Mode select index",value:1},{name:"Mode select",value:"1,2,3,4"},{name:"Default Value",value:0},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array In",portOut:"Array",objIn:"jh94ajq0n",objOut:"p0brqpdcc"}]},{name:"Array length out",value:6}],objName:"Ops.Array.Array_v3"},{id:"jh94ajq0n",uiAttribs:{},portsIn:[{name:"Mode index",value:0},{name:"Mode",value:"Array/x"}],portsOut:[{name:"Array Out",links:[{portIn:"Array 2",portOut:"Array Out",objIn:"5u9exy381",objOut:"jh94ajq0n"}]}],objName:"Ops.Array.ArrayDivide"},{id:"gf53t6prc",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Default Value",value:0},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 1",portOut:"Array",objIn:"5u9exy381",objOut:"gf53t6prc"}]},{name:"Array length out",value:6}],objName:"Ops.Array.Array_v3"},{id:"5u9exy381",uiAttribs:{},portsIn:[{name:"Chunk Size",value:1}],portsOut:[{name:"Combined Array",links:[{portIn:"Array 1",portOut:"Combined Array",objIn:"tiybh196f",objOut:"5u9exy381"}]}],objName:"Ops.Array.WeaveArrays"},{id:"b27tvrsuq",uiAttribs:{},portsIn:[{name:"Chunk Size",value:1}],portsOut:[{name:"Combined Array",links:[{portIn:"Array 2",portOut:"Combined Array",objIn:"tiybh196f",objOut:"b27tvrsuq"}]}],objName:"Ops.Array.WeaveArrays"},{id:"56b9dpybj",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Default Value",value:1},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 1",portOut:"Array",objIn:"b27tvrsuq",objOut:"56b9dpybj"}]},{name:"Array length out",value:6}],objName:"Ops.Array.Array_v3"},{id:"tiybh196f",uiAttribs:{},portsIn:[{name:"Chunk Size",value:2}],objName:"Ops.Array.WeaveArrays"},{id:"cp4bsw876",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Array 2",portOut:"Array",objIn:"b27tvrsuq",objOut:"cp4bsw876"}]},{name:"Array length out",value:6}],objName:"Ops.Array.Array_v3"},{id:"a0vdtxo0h",uiAttribs:{},portsIn:[{name:"number1",value:1}],portsOut:[{name:"result",links:[{portIn:"Default Value",portOut:"result",objIn:"cp4bsw876",objOut:"a0vdtxo0h"}]}],objName:"Ops.Math.Divide"},{id:"3f2dme1jc",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Array length",portOut:"Value",objIn:"gf53t6prc",objOut:"3f2dme1jc"},{portIn:"Array length",portOut:"Value",objIn:"p0brqpdcc",objOut:"3f2dme1jc"},{portIn:"Value",portOut:"Value",objIn:"jh94ajq0n",objOut:"3f2dme1jc"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"uf5g3tp93",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Array length",portOut:"Value",objIn:"56b9dpybj",objOut:"uf5g3tp93"},{portIn:"Array length",portOut:"Value",objIn:"cp4bsw876",objOut:"uf5g3tp93"},{portIn:"number2",portOut:"Value",objIn:"a0vdtxo0h",objOut:"uf5g3tp93"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"g753y8kst",uiAttribs:{},portsIn:[{name:"Seperator",value:" "},{name:"New Line",value:1}],portsOut:[{name:"Result",links:[{portIn:"text",portOut:"Result",objIn:"o8n8u1uz8",objOut:"g753y8kst"}]}],objName:"Ops.Array.ArrayToString_v3"},{id:"1411zegm0",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeNames"}],portsOut:[{name:"Value",links:[{portIn:"Array",portOut:"Value",objIn:"g753y8kst",objOut:"1411zegm0"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"4fssyna84",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"Array2x",portOut:"Value",objIn:"lcfo3sm16",objOut:"4fssyna84"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"lcfo3sm16",uiAttribs:{},portsOut:[{name:"Array3x",links:[{portIn:"Array3x",portOut:"Array3x",objIn:"aeu0ovasj",objOut:"lcfo3sm16"}]},{name:"Total points",value:6},{name:"Array length",value:18}],objName:"Ops.Array.Array2To3"},{id:"aeu0ovasj",uiAttribs:{},portsIn:[{name:"Add X",value:0},{name:"Add Y",value:0},{name:"Add Z",value:1}],portsOut:[{name:"Result",links:[{portIn:"positions",portOut:"Result",objIn:"ntnnysizs",objOut:"aeu0ovasj"}]}],objName:"Ops.Array.Array3Sum"},{id:"t9a1p8e4p",uiAttribs:{},portsIn:[{name:"CSS Cursors index",value:1},{name:"CSS Cursors",value:"crosshair"},{name:"Set Parent Element",value:1}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"7mnplh9ih",objOut:"t9a1p8e4p"}]}],objName:"Ops.Html.Cursor_v2"},{id:"7mnplh9ih",uiAttribs:{},portsIn:[{name:"render",title:"Trigger"},{name:"Render Mesh",value:0,title:"Render"},{name:"width",value:3.4},{name:"height",value:2.66},{name:"pivot x index",value:1},{name:"pivot x",value:"center"},{name:"pivot y index",value:1},{name:"pivot y",value:"center"},{name:"axis index",value:0},{name:"axis",value:"xy"},{name:"Flip TexCoord X",value:0},{name:"Flip TexCoord Y",value:1},{name:"num columns",value:1},{name:"num rows",value:1}],portsOut:[{name:"trigger",title:"Next",links:[{portIn:"exe",portOut:"trigger",objIn:"el82cgzia",objOut:"7mnplh9ih"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"el82cgzia",objOut:"7mnplh9ih"}]}],objName:"Ops.Gl.Meshes.Rectangle_v4"},{id:"el82cgzia",uiAttribs:{},portsIn:[{name:"Scale",value:11.24},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Scale Array",value:0},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:0},{name:"Material blend mode",value:"Multiply"},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:1}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"caz339spv",uiAttribs:{},portsIn:[{name:"Bytes",value:0}],portsOut:[{name:"R",links:[{portIn:"Numbers_0",portOut:"R",objIn:"8tf1jyhis",objOut:"caz339spv"}]},{name:"G",links:[{portIn:"Numbers_1",portOut:"G",objIn:"8tf1jyhis",objOut:"caz339spv"}]},{name:"B",links:[{portIn:"Numbers_2",portOut:"B",objIn:"8tf1jyhis",objOut:"caz339spv"}]}],objName:"Ops.Color.HexToRGB_v2"},{id:"ak0fo104c",uiAttribs:{},portsIn:[{name:"value",value:"#471873"},{name:"Syntax index",value:0},{name:"Syntax",value:"text"}],portsOut:[{name:"Result",links:[{portIn:"Hex",portOut:"Result",objIn:"caz339spv",objOut:"ak0fo104c"}]}],objName:"Ops.String.StringEditor"},{id:"8tf1jyhis",uiAttribs:{},portsIn:[{name:"Numbers",multiPortNum:3},{name:"Numbers_3",value:0,title:"add port"}],portsOut:[{name:"Result",links:[{portIn:"Array3x",portOut:"Result",objIn:"7fzdbwfyt",objOut:"8tf1jyhis"}]},{name:"Num Values",value:3}],objName:"Ops.Array.NumbersToArrayMultiPort"},{id:"nrh8gnuh4",uiAttribs:{},portsIn:[{name:"Num Triplets",value:1},{name:"X",value:0},{name:"Y",value:0},{name:"Z",value:-3.05}],portsOut:[{name:"Array",links:[{portIn:"positions",portOut:"Array",objIn:"el82cgzia",objOut:"nrh8gnuh4"}]},{name:"Total points",value:1},{name:"Array length",value:3}],objName:"Ops.Array.Array3"},{id:"7fzdbwfyt",uiAttribs:{},portsOut:[{name:"Array4x",links:[{portIn:"Colors",portOut:"Array4x",objIn:"el82cgzia",objOut:"7fzdbwfyt"}]},{name:"Total points",value:1},{name:"Array length",value:4}],objName:"Ops.Array.Array3To4"},{id:"rh9lu8syg",uiAttribs:{},portsIn:[{name:"number 0",value:8.02},{name:"number 1",value:.015},{name:"math mode index",value:2},{name:"math mode",value:"*"}],portsOut:[{name:"result",links:[{portIn:"width",portOut:"result",objIn:"2jjhn1z04",objOut:"rh9lu8syg"}]}],objName:"Ops.Math.Math"},{id:"3pko8109q",uiAttribs:{},portsIn:[{name:"file",value:"assets/RobotoCondensed-VariableFont_wght.ttf",display:"file"},{name:"family",value:"roboto"},{name:"Active",value:1}],portsOut:[{name:"Loaded",value:1}],objName:"Ops.Html.FontFile_v2"},{id:"cinfsrkbq",uiAttribs:{},portsOut:[{name:"AveragedArray",links:[{portIn:"Value",portOut:"AveragedArray",objIn:"3kiisqinz",objOut:"cinfsrkbq"}]}],objName:"Ops.Patch.PMZcxaN.ArrayMovingAverage"},{id:"fdajwo4dw",uiAttribs:{},portsIn:[{name:"Number",value:0}],objName:"Ops.Debug.ConsoleLog"},{id:"rjtqhmufq",uiAttribs:{},portsIn:[{name:"Seperator",value:","},{name:"New Line",value:0}],portsOut:[{name:"Result",links:[{portIn:"string2",portOut:"Result",objIn:"9dkzb7kli",objOut:"rjtqhmufq"}]}],objName:"Ops.Array.ArrayToString_v3"},{id:"9dkzb7kli",uiAttribs:{},portsIn:[{name:"New Line",value:0},{name:"Active",value:1}],portsOut:[{name:"result",links:[{portIn:"String",portOut:"result",objIn:"fdajwo4dw",objOut:"9dkzb7kli"}]}],objName:"Ops.String.Concat_v2"},{id:"lt4h6o9bb",uiAttribs:{},portsIn:[{name:"value",value:"CURRENT POSITIONS : "},{name:"Syntax index",value:0},{name:"Syntax",value:"text"}],portsOut:[{name:"Result",links:[{portIn:"string1",portOut:"Result",objIn:"9dkzb7kli",objOut:"lt4h6o9bb"}]}],objName:"Ops.String.StringEditor"},{id:"dyz2puh11",uiAttribs:{},portsIn:[{name:"Named Trigger",value:"Debug"}],portsOut:[{name:"Triggered",links:[{portIn:"render",portOut:"Triggered",objIn:"rtz430ao2",objOut:"dyz2puh11"}]}],objName:"Ops.Trigger.TriggerReceive"},{id:"rtz430ao2",uiAttribs:{},portsIn:[{name:"radius",value:.5},{name:"stacks",value:32},{name:"slices",value:32},{name:"Filloffset",value:1},{name:"Render",value:1}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"wfp6bics5",objOut:"rtz430ao2"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"wfp6bics5",objOut:"rtz430ao2"}]}],objName:"Ops.Gl.Meshes.Sphere_v3"},{id:"wfp6bics5",uiAttribs:{},portsIn:[{name:"Scale",value:1},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Scale Array",value:0},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:0},{name:"Material blend mode",value:"Multiply"},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:4}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"prfvbmc25",uiAttribs:{},portsIn:[{name:"Numbers",multiPortNum:3,multiPortManual:true},{name:"Numbers_2",value:0}],portsOut:[{name:"Result",links:[{portIn:"Array 0",portOut:"Result",objIn:"iy5nxu24b",objOut:"prfvbmc25"}]},{name:"Num Values",value:3}],objName:"Ops.Array.NumbersToArrayMultiPort"},{id:"zyn252dgr",uiAttribs:{},portsIn:[{name:"value",value:0}],portsOut:[{name:"result",links:[{portIn:"Numbers_0",portOut:"result",objIn:"prfvbmc25",objOut:"zyn252dgr"},{portIn:"Numbers_1",portOut:"result",objIn:"prfvbmc25",objOut:"zyn252dgr"}]}],objName:"Ops.Number.Number"},{id:"ec9zdancm",uiAttribs:{},portsIn:[{name:"value",value:0}],portsOut:[{name:"result",links:[{portIn:"Numbers_1",portOut:"result",objIn:"nbum4l601",objOut:"ec9zdancm"}]}],objName:"Ops.Number.Number"},{id:"iy5nxu24b",uiAttribs:{},portsIn:[{name:"Array 4",value:0},{name:"Array 5",value:0},{name:"Array 6",value:0},{name:"Array 7",value:0}],portsOut:[{name:"Result",links:[{portIn:"positions",portOut:"Result",objIn:"wfp6bics5",objOut:"iy5nxu24b"}]},{name:"Array length",value:12}],objName:"Ops.Array.ArrayMerge_v3"},{id:"nbum4l601",uiAttribs:{},portsIn:[{name:"Numbers",multiPortNum:3,multiPortManual:true},{name:"Numbers_2",value:0}],portsOut:[{name:"Result",links:[{portIn:"Array 1",portOut:"Result",objIn:"iy5nxu24b",objOut:"nbum4l601"}]},{name:"Num Values",value:3}],objName:"Ops.Array.NumbersToArrayMultiPort"},{id:"aisrt46r6",uiAttribs:{},portsIn:[{name:"value",value:-.5}],portsOut:[{name:"result",links:[{portIn:"Numbers_0",portOut:"result",objIn:"nbum4l601",objOut:"aisrt46r6"}]}],objName:"Ops.Number.Number"},{id:"qfji2ghie",uiAttribs:{},portsIn:[{name:"value",value:1}],portsOut:[{name:"result",links:[{portIn:"Numbers_0",portOut:"result",objIn:"k30s1cgsc",objOut:"qfji2ghie"}]}],objName:"Ops.Number.Number"},{id:"k30s1cgsc",uiAttribs:{},portsIn:[{name:"Numbers",multiPortNum:3,multiPortManual:true},{name:"Numbers_2",value:0}],portsOut:[{name:"Result",links:[{portIn:"Array 2",portOut:"Result",objIn:"iy5nxu24b",objOut:"k30s1cgsc"}]},{name:"Num Values",value:3}],objName:"Ops.Array.NumbersToArrayMultiPort"},{id:"oo2bqyhr4",uiAttribs:{},portsIn:[{name:"value",value:0}],portsOut:[{name:"result",links:[{portIn:"Numbers_1",portOut:"result",objIn:"k30s1cgsc",objOut:"oo2bqyhr4"}]}],objName:"Ops.Number.Number"},{id:"qxxsyfvfz",uiAttribs:{},portsIn:[{name:"value",value:1}],portsOut:[{name:"result",links:[{portIn:"Numbers_0",portOut:"result",objIn:"1pvd8mszu",objOut:"qxxsyfvfz"},{portIn:"Numbers_1",portOut:"result",objIn:"1pvd8mszu",objOut:"qxxsyfvfz"}]}],objName:"Ops.Number.Number"},{id:"1pvd8mszu",uiAttribs:{},portsIn:[{name:"Numbers",multiPortNum:3,multiPortManual:true},{name:"Numbers_2",value:0}],portsOut:[{name:"Result",links:[{portIn:"Array 3",portOut:"Result",objIn:"iy5nxu24b",objOut:"1pvd8mszu"}]},{name:"Num Values",value:3}],objName:"Ops.Array.NumbersToArrayMultiPort"},{id:"ef0ko61gy",uiAttribs:{},portsIn:[{name:"Index",value:21},{name:"Smooth",value:0}],portsOut:[{name:"Color Array",links:[{portIn:"Array3x",portOut:"Color Array",objIn:"85fkntt4a",objOut:"ef0ko61gy"}]}],objName:"Ops.Color.ColorPalettes"},{id:"85fkntt4a",uiAttribs:{},portsOut:[{name:"Array4x",links:[{portIn:"Colors",portOut:"Array4x",objIn:"wfp6bics5",objOut:"85fkntt4a"}]},{name:"Total points",value:5},{name:"Array length",value:20}],objName:"Ops.Array.Array3To4"},{id:"qlvasxm35",uiAttribs:{},portsIn:[{name:"bounds",value:1},{name:"Axis index",value:1},{name:"Axis",value:"Y"},{name:"frustum near",value:-100},{name:"frustum far",value:100}],portsOut:[{name:"trigger",links:[{portIn:"Exec",portOut:"trigger",objIn:"ch1xoodjk",objOut:"qlvasxm35"}]},{name:"Ratio",value:1.448512585812357},{name:"Width",value:2.897025171624714},{name:"Height",value:2}],objName:"Ops.Gl.Orthogonal_v2"},{id:"8hdqidhkr",uiAttribs:{},portsOut:[{name:"result",links:[{portIn:"Value",portOut:"result",objIn:"ynej1ec0t",objOut:"8hdqidhkr"}]}],objName:"Ops.Math.Divide"},{id:"ynej1ec0t",uiAttribs:{},portsIn:[{name:"Variable",value:"aspectRatio"}],objName:"Ops.Vars.VarSetNumber_v2"},{id:"ch1xoodjk",uiAttribs:{},portsOut:[{name:"Next",links:[{portIn:"exe",portOut:"Next",objIn:"3m7gxs2jt",objOut:"ch1xoodjk"}]},{name:"X",value:0},{name:"Y",value:0},{name:"Width",links:[{portIn:"number1",portOut:"Width",objIn:"8hdqidhkr",objOut:"ch1xoodjk"}]},{name:"Height",links:[{portIn:"number2",portOut:"Height",objIn:"8hdqidhkr",objOut:"ch1xoodjk"}]}],objName:"Ops.Gl.ViewPortSize"},{id:"8kys9je6p",uiAttribs:{},portsOut:[{name:"result",links:[{portIn:"Value",portOut:"result",objIn:"kepr5lsm2",objOut:"8kys9je6p"}]}],objName:"Ops.Math.Multiply"},{id:"qq8fycn4o",uiAttribs:{},portsOut:[{name:"result",links:[{portIn:"Value",portOut:"result",objIn:"npvrcj5ny",objOut:"qq8fycn4o"}]}],objName:"Ops.Math.Multiply"},{id:"ramr5pzna",uiAttribs:{},portsIn:[{name:"Text",value:"Button"},{name:"Grey Out",value:0},{name:"Visible",value:1}],portsOut:[{name:"Pressed Trigger",links:[{portIn:"Trigger",portOut:"Pressed Trigger",objIn:"1c62wj331",objOut:"ramr5pzna"}]}],objName:"Ops.Sidebar.Button_v2"},{id:"yc2z4pq3x",uiAttribs:{},portsIn:[{name:"Visible",value:0},{name:"Opacity",value:1},{name:"Default Minimized",value:0},{name:"Minimized Opacity",value:.5},{name:"Show undo button",value:0},{name:"Show Minimize",value:0},{name:"Title",value:""},{name:"Side",value:0},{name:"Default CSS",value:1}],portsOut:[{name:"childs",title:"Children",links:[{portIn:"link",portOut:"childs",objIn:"ramr5pzna",objOut:"yc2z4pq3x"}]},{name:"Opfened",value:false,title:"Opened"}],objName:"Ops.Sidebar.Sidebar"},{id:"1c62wj331",uiAttribs:{},portsIn:[{name:"Named Trigger",value:0}],objName:"Ops.Trigger.TriggerSend"},{id:"koo04arxi",uiAttribs:{},portsIn:[{name:"Number",value:0}],objName:"Ops.Debug.ConsoleLog"},{id:"w8rpdpmjn",uiAttribs:{},portsIn:[{name:"Variable",value:"AdjMatrix"}],portsOut:[{name:"Value",links:[{portIn:"Array",portOut:"Value",objIn:"rynpq8vr5",objOut:"w8rpdpmjn"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"f6adh4c89",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"String",portOut:"Result",objIn:"koo04arxi",objOut:"f6adh4c89"}]}],objName:"Ops.Trigger.TriggerOnChangeString"},{id:"rynpq8vr5",uiAttribs:{},portsIn:[{name:"Seperator",value:","},{name:"New Line",value:0}],portsOut:[{name:"Result",links:[{portIn:"String",portOut:"Result",objIn:"f6adh4c89",objOut:"rynpq8vr5"}]}],objName:"Ops.Array.ArrayToString_v3"},{id:"3p4o1lqfc",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"String",portOut:"Result",objIn:"koo04arxi",objOut:"3p4o1lqfc"}]}],objName:"Ops.Trigger.TriggerOnChangeString"},{id:"mutc5o2jl",uiAttribs:{},portsIn:[{name:"Variable",value:"DraggedNodeIndex"}],portsOut:[{name:"Value",links:[{portIn:"Number",portOut:"Value",objIn:"tnwadhqbv",objOut:"mutc5o2jl"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"tnwadhqbv",uiAttribs:{},portsIn:[{name:"Decimal Places",value:4}],portsOut:[{name:"Result",links:[{portIn:"String",portOut:"Result",objIn:"3p4o1lqfc",objOut:"tnwadhqbv"}]}],objName:"Ops.String.NumberToString_v2"},{id:"2016kwwp0",uiAttribs:{},portsIn:[{name:"Title",value:"debug"}],objName:"Ops.Ui.Area"},{id:"vbiut7x01",uiAttribs:{},portsIn:[{name:"Title",value:"init"}],objName:"Ops.Ui.Area"},{id:"0ljp0xghq",uiAttribs:{},portsIn:[{name:"r",value:.36150796872148516},{name:"g",value:.9322431029754156},{name:"b",value:.01711122202545523},{name:"a",value:1},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"plf4v8hgv",objOut:"0ljp0xghq"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"u4ld0jope",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeNames"}],portsOut:[{name:"Value",links:[{portIn:"Array",portOut:"Value",objIn:"n7dq480jy",objOut:"u4ld0jope"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"n7dq480jy",uiAttribs:{},portsOut:[{name:"Trigger",links:[{portIn:"Render",portOut:"Trigger",objIn:"3kn4t85li",objOut:"n7dq480jy"}]},{name:"Index",links:[{portIn:"Index",portOut:"Index",objIn:"a4jv7dfam",objOut:"n7dq480jy"}]},{name:"Value",links:[{portIn:"text",portOut:"Value",objIn:"3kn4t85li",objOut:"n7dq480jy"}]}],objName:"Ops.Array.ArrayIteratorStrings"},{id:"3kn4t85li",uiAttribs:{},portsIn:[{name:"Draw Mesh",value:0},{name:"Scale Mesh",value:.5},{name:"Size index",value:0},{name:"Size",value:"Auto"},{name:"Width",value:974},{name:"Height",value:1337},{name:"Auto Height",value:0},{name:"Auto Line Breaks",value:1},{name:"font",value:"roboto"},{name:"weight",value:"normal"},{name:"fontSize",value:350},{name:"align index",value:0},{name:"align",value:"left"},{name:"Vertical align index",value:0},{name:"Vertical align",value:"Top"},{name:"Letter Spacing",value:0},{name:"Line Height Add",value:0},{name:"Padding Y Top",value:0},{name:"Padding Y Bottom",value:0},{name:"Padding X",value:0},{name:"filter index",value:2},{name:"filter",value:"mipmap"},{name:"Wrap index",value:2},{name:"Wrap",value:"clamp to edge"},{name:"Anisotropic index",value:0},{name:"Anisotropic",value:"0"},{name:"Reuse Texture",value:1},{name:"Show Debug",value:0},{name:"Redraw On Font Load",value:1},{name:"r",value:.6763671934604645},{name:"g",value:.9827395507295931},{name:"b",value:1},{name:"Opacity",value:1},{name:"background R",value:0},{name:"background G",value:0},{name:"background B",value:0},{name:"background A",value:1}],portsOut:[{name:"Next",links:[{portIn:"Trigger",portOut:"Next",objIn:"2n62xjvb0",objOut:"3kn4t85li"}]},{name:"Ratio",value:.44419134396355353},{name:"Aspect",links:[{portIn:"Number",portOut:"Aspect",objIn:"a4jv7dfam",objOut:"3kn4t85li"}]},{name:"Num Lines",value:1}],objName:"Ops.Gl.Textures.TextTexture_v6"},{id:"802gcec7x",uiAttribs:{},portsIn:[{name:"Variable",value:"textAspectRatioArray"}],objName:"Ops.Vars.VarTriggerArray"},{id:"g1fi3ypa2",uiAttribs:{},portsIn:[{name:"Mode select index",value:0},{name:"Mode select",value:"Number"},{name:"Default Value",value:0},{name:"Reverse",value:0}],portsOut:[{name:"Array",links:[{portIn:"Value",portOut:"Array",objIn:"802gcec7x",objOut:"g1fi3ypa2"}]},{name:"Array length out",value:6}],objName:"Ops.Array.Array_v3"},{id:"xvm0qs9af",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"Array length",portOut:"Value",objIn:"g1fi3ypa2",objOut:"xvm0qs9af"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"2n62xjvb0",uiAttribs:{},portsIn:[{name:"Variable",value:"textAspectRatioArray"}],objName:"Ops.Vars.VarTriggerArray"},{id:"k3j7jlq10",uiAttribs:{},portsIn:[{name:"Variable",value:"textAspectRatioArray"}],portsOut:[{name:"Value",links:[{portIn:"Array",portOut:"Value",objIn:"a4jv7dfam",objOut:"k3j7jlq10"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"a4jv7dfam",uiAttribs:{},portsOut:[{name:"Result",links:[{portIn:"Value",portOut:"Result",objIn:"2n62xjvb0",objOut:"a4jv7dfam"}]}],objName:"Ops.Array.ArraySetNumber_v3"},{id:"iwmuwyzc5",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeWeights"}],portsOut:[{name:"Value",links:[{portIn:"Node Weights",portOut:"Value",objIn:"evhbhl3bw",objOut:"iwmuwyzc5"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"rmgr6gwnr",uiAttribs:{},portsIn:[{name:"Variable",value:"textAspectRatioArray"}],portsOut:[{name:"Value",links:[{portIn:"Text Ratios",portOut:"Value",objIn:"evhbhl3bw",objOut:"rmgr6gwnr"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"rmhpm81c1",uiAttribs:{},portsIn:[{name:"Variable",value:"textScaleFactors"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"k5jvc5j6j",uiAttribs:{},portsIn:[{name:"Variable",value:"textUVCoordinates"}],objName:"Ops.Vars.VarSetArray_v2"},{id:"ty3p90ks1",uiAttribs:{},portsIn:[{name:"Variable",value:"textUVCoordinates"}],portsOut:[{name:"Value",links:[{portIn:"TexCoords",portOut:"Value",objIn:"xxfueh2hm",objOut:"ty3p90ks1"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"ojmkzir8w",uiAttribs:{},portsIn:[{name:"Variable",value:"textAspectRatioArray"}],portsOut:[{name:"Value",links:[{portIn:"array 0",portOut:"Value",objIn:"hyi0pw2h6",objOut:"ojmkzir8w"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"0ukf7wf0m",uiAttribs:{},portsIn:[{name:"Number for math",value:.12},{name:"Math function index",value:2},{name:"Math function",value:"*"}],portsOut:[{name:"Array result",links:[{portIn:"Scale Array",portOut:"Array result",objIn:"ntnnysizs",objOut:"0ukf7wf0m"}]},{name:"Array length",value:18}],objName:"Ops.Array.ArrayMath"},{id:"zbcxo6ca0",uiAttribs:{},portsIn:[{name:"Blendmode index",value:2},{name:"Blendmode",value:"Add"},{name:"Premultiplied",value:0}],portsOut:[{name:"Next",links:[{portIn:"Render",portOut:"Next",objIn:"gn7feu7qz",objOut:"zbcxo6ca0"}]}],objName:"Ops.Gl.BlendMode"},{id:"7zdpdj0s6",uiAttribs:{},portsIn:[{name:"radius",value:.55},{name:"stacks",value:32},{name:"slices",value:4},{name:"Filloffset",value:1},{name:"Render",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"ntnnysizs",objOut:"7zdpdj0s6"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"ntnnysizs",objOut:"7zdpdj0s6"}]}],objName:"Ops.Gl.Meshes.Sphere_v3"},{id:"evhbhl3bw",uiAttribs:{},portsOut:[{name:"Scale Coordinates",links:[{portIn:"Value",portOut:"Scale Coordinates",objIn:"rmhpm81c1",objOut:"evhbhl3bw"}]},{name:"UV Coordinates",links:[{portIn:"Value",portOut:"UV Coordinates",objIn:"k5jvc5j6j",objOut:"evhbhl3bw"}]}],objName:"Ops.Patch.PMZcxaN.HandleTextDisplay"},{id:"hdy45c1rj",uiAttribs:{},portsIn:[{name:"Chunk Size",value:1},{name:"Repeats",value:3}],portsOut:[{name:"Result",links:[{portIn:"array 0",portOut:"Result",objIn:"0ukf7wf0m",objOut:"hdy45c1rj"}]}],objName:"Ops.Array.ArrayChunkDuplicate"},{id:"tkx262839",uiAttribs:{},portsIn:[{name:"Variable",value:"textScaleFactors"}],portsOut:[{name:"Value",links:[{portIn:"Text Aspect Ratio",portOut:"Value",objIn:"l9ldm5x6p",objOut:"tkx262839"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"3pd7eddli",uiAttribs:{},portsIn:[{name:"Variable",value:"textScaleFactors"}],portsOut:[{name:"Value",links:[{portIn:"Node Text Sizes 2D",portOut:"Value",objIn:"7uinlp1b6",objOut:"3pd7eddli"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"uc06pz8f5",uiAttribs:{},portsIn:[{name:"Variable",value:"NodeWeights"}],portsOut:[{name:"Value",links:[{portIn:"array 1",portOut:"Value",objIn:"hyi0pw2h6",objOut:"uc06pz8f5"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"hyi0pw2h6",uiAttribs:{},portsIn:[{name:"Math function index",value:2},{name:"Math function",value:"*"}],portsOut:[{name:"Array result",links:[{portIn:"Array",portOut:"Array result",objIn:"hdy45c1rj",objOut:"hyi0pw2h6"}]},{name:"Array length",value:6}],objName:"Ops.Array.ArrayMathArray"},{id:"ww13rd11c",uiAttribs:{},portsIn:[{name:"Variable",value:"graphSize"}],portsOut:[{name:"Value",links:[{portIn:"GraphSize",portOut:"Value",objIn:"886q8hs4k",objOut:"ww13rd11c"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"uho8tic8q",uiAttribs:{},portsIn:[{name:"r",value:.06496114691098531},{name:"g",value:.26708111007676144},{name:"b",value:.9566666666666667},{name:"a",value:1}],portsOut:[{name:"outr",value:.06496114691098531},{name:"outg",value:.26708111007676144},{name:"outb",value:.9566666666666667},{name:"outa",value:1},{name:"Hex",value:"1144F4"},{name:"Array",links:[{portIn:"ColorUnselected",portOut:"Array",objIn:"886q8hs4k",objOut:"uho8tic8q"}]}],objName:"Ops.Color.ColorValue"},{id:"zobb5xlbr",uiAttribs:{},portsIn:[{name:"r",value:.828},{name:"g",value:.291},{name:"b",value:0},{name:"a",value:1}],portsOut:[{name:"outr",value:.828},{name:"outg",value:.291},{name:"outb",value:0},{name:"outa",value:1},{name:"Hex",value:"D34A00"},{name:"Array",links:[{portIn:"ColorSelected",portOut:"Array",objIn:"886q8hs4k",objOut:"zobb5xlbr"}]}],objName:"Ops.Color.ColorValue"},{id:"hmu9jdvzi",uiAttribs:{},portsIn:[{name:"Variable",value:"DraggedNodeIndex"}],portsOut:[{name:"Value",links:[{portIn:"NodeSelectedIndex",portOut:"Value",objIn:"886q8hs4k",objOut:"hmu9jdvzi"}]}],objName:"Ops.Vars.VarGetNumber_v2"},{id:"886q8hs4k",uiAttribs:{},portsOut:[{name:"ColorsArray",links:[{portIn:"Colors",portOut:"ColorsArray",objIn:"d727upl53",objOut:"886q8hs4k"}]}],objName:"Ops.Patch.PMZcxaN.NodesColor"},{id:"d727upl53",uiAttribs:{},portsIn:[{name:"Scale",value:.56},{name:"Limit Instances",value:0},{name:"Limit",value:100},{name:"Rotations",value:0},{name:"Rotation Type index",value:0},{name:"Rotation Type",value:"Euler"},{name:"Billboarding index",value:0},{name:"Billboarding",value:"Off"},{name:"Material blend mode index",value:2},{name:"Material blend mode",value:"Normal"},{name:"TexCoords",value:0}],portsOut:[{name:"Num",value:6}],objName:"Ops.Gl.MeshInstancer_v4"},{id:"oyiht9lbt",uiAttribs:{},portsIn:[{name:"r",value:0},{name:"g",value:.408},{name:"b",value:1},{name:"a",value:.614},{name:"colorizeTexture",value:0},{name:"Vertex Colors",value:0},{name:"Alpha Mask Source index",value:0},{name:"Alpha Mask Source",value:"Luminance"},{name:"Opacity TexCoords Transform",value:0},{name:"Discard Transparent Pixels",value:0},{name:"diffuseRepeatX",value:1},{name:"diffuseRepeatY",value:1},{name:"Tex Offset X",value:0},{name:"Tex Offset Y",value:0},{name:"Crop TexCoords",value:0},{name:"billboard",value:0}],portsOut:[{name:"trigger",links:[{portIn:"Render",portOut:"trigger",objIn:"hui5t25t3",objOut:"oyiht9lbt"}]}],objName:"Ops.Gl.Shader.BasicMaterial_v3"},{id:"hui5t25t3",uiAttribs:{},portsIn:[{name:"Blendmode index",value:4},{name:"Blendmode",value:"Multiply"},{name:"Premultiplied",value:0}],portsOut:[{name:"Next",links:[{portIn:"render",portOut:"Next",objIn:"6nxjqalba",objOut:"hui5t25t3"}]}],objName:"Ops.Gl.BlendMode"},{id:"p5kfeh8zp",uiAttribs:{},portsIn:[{name:"Variable",value:"CurrentPositions"}],portsOut:[{name:"Value",links:[{portIn:"Array2x",portOut:"Value",objIn:"55yp9hw3h",objOut:"p5kfeh8zp"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"55yp9hw3h",uiAttribs:{},portsOut:[{name:"Array3x",links:[{portIn:"Array3x",portOut:"Array3x",objIn:"uje18ro6l",objOut:"55yp9hw3h"}]},{name:"Total points",value:6},{name:"Array length",value:18}],objName:"Ops.Array.Array2To3"},{id:"uje18ro6l",uiAttribs:{},portsIn:[{name:"Add X",value:0},{name:"Add Y",value:0},{name:"Add Z",value:1}],portsOut:[{name:"Result",links:[{portIn:"positions",portOut:"Result",objIn:"d727upl53",objOut:"uje18ro6l"}]}],objName:"Ops.Array.Array3Sum"},{id:"99lz2s5zf",uiAttribs:{},portsIn:[{name:"Variable",value:"textScaleFactors"}],portsOut:[{name:"Value",links:[{portIn:"array 0",portOut:"Value",objIn:"2tti2aw84",objOut:"99lz2s5zf"}]}],objName:"Ops.Vars.VarGetArray_v2"},{id:"2tti2aw84",uiAttribs:{},portsIn:[{name:"Number for math",value:1.5},{name:"Math function index",value:2},{name:"Math function",value:"*"}],portsOut:[{name:"Array result",links:[{portIn:"Scale Array",portOut:"Array result",objIn:"d727upl53",objOut:"2tti2aw84"}]},{name:"Array length",value:18}],objName:"Ops.Array.ArrayMath"},{id:"6nxjqalba",uiAttribs:{},portsIn:[{name:"Segments",value:24},{name:"width",value:1.23},{name:"height",value:.19},{name:"border radius",value:1},{name:"Top Left",value:1},{name:"Top Right",value:1},{name:"Bottom Left",value:1},{name:"Bottom Right",value:1},{name:"Draw",value:0}],portsOut:[{name:"trigger",links:[{portIn:"exe",portOut:"trigger",objIn:"d727upl53",objOut:"6nxjqalba"}]},{name:"geometry",links:[{portIn:"geom",portOut:"geometry",objIn:"d727upl53",objOut:"6nxjqalba"}]}],objName:"Ops.Gl.Meshes.RectangleRounded_v2"},{id:"7uinlp1b6",uiAttribs:{},portsIn:[{name:"Center Graph in Bounds",value:1},{name:"Margin",value:.3}],portsOut:[{name:"Trigger",links:[{portIn:"Trigger",portOut:"Trigger",objIn:"cinfsrkbq",objOut:"7uinlp1b6"}]},{name:"Next Positions",links:[{portIn:"Array",portOut:"Next Positions",objIn:"cinfsrkbq",objOut:"7uinlp1b6"}]}],objName:"Ops.Patch.PMZcxaN.FruchtermanReingoldComputation"},{id:"l9ldm5x6p",uiAttribs:{},portsIn:[{name:"NodeVisualRadius",value:.1},{name:"EnableDrag",value:1}],portsOut:[{name:"UpdatedNodePositions2D",links:[{portIn:"Value",portOut:"UpdatedNodePositions2D",objIn:"s8kevb109",objOut:"l9ldm5x6p"}]},{name:"DraggedNodeIndex",links:[{portIn:"Value",portOut:"DraggedNodeIndex",objIn:"tufoscoc8",objOut:"l9ldm5x6p"}]},{name:"IsDragging",value:false}],objName:"Ops.Patch.PMZcxaN.NodeDragger"}],export:{time:"2025-06-06 16:49",service:"html",exportNumber:2}};if(!CABLES.exportedPatch){CABLES.exportedPatch=CABLES.exportedPatches["MZcxaN"]}"use strict";var CABLES=CABLES||{};CABLES.OPS=CABLES.OPS||{};var Ops=Ops||{};Ops.Gl=Ops.Gl||{};Ops.Ui=Ops.Ui||{};Ops.Html=Ops.Html||{};Ops.Math=Ops.Math||{};Ops.Vars=Ops.Vars||{};Ops.Array=Ops.Array||{};Ops.Color=Ops.Color||{};Ops.Debug=Ops.Debug||{};Ops.Patch=Ops.Patch||{};Ops.Number=Ops.Number||{};Ops.String=Ops.String||{};Ops.Devices=Ops.Devices||{};Ops.Sidebar=Ops.Sidebar||{};Ops.Trigger=Ops.Trigger||{};Ops.Gl.Meshes=Ops.Gl.Meshes||{};Ops.Gl.Shader=Ops.Gl.Shader||{};Ops.Gl.Textures=Ops.Gl.Textures||{};Ops.Devices.Mouse=Ops.Devices.Mouse||{};Ops.Patch.PMZcxaN=Ops.Patch.PMZcxaN||{};Ops.Gl.CanvasInfo_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.outNumber("CSS Width"),r=t.outNumber("CSS Height"),a=t.outNumber("Pixel Ratio"),o=t.outNumber("Pixel Width"),i=t.outNumber("Pixel Height"),s=t.outNumber("Aspect Ratio"),l=t.outBool("Landscape"),u=t.outObject("Canvas","element"),p=t.outObject("Canvas Parent","element"),F=t.outTrigger("Resized");let c=t.patch.cgl;u.set(t.patch.cgl.canvas);p.set(t.patch.cgl.canvas.parentElement);c.on("resize",()=>{F.trigger();d()});d();function d(){let e=1;if(c.canvasHeight==0)setTimeout(d,100);r.set(c.canvasHeight/t.patch.cgl.pixelDensity);n.set(c.canvasWidth/t.patch.cgl.pixelDensity);o.set(c.canvasWidth);i.set(c.canvasHeight);a.set(t.patch.cgl.pixelDensity);s.set(c.canvasWidth/c.canvasHeight);l.set(c.canvasWidth>c.canvasHeight?1:0)}};Ops.Gl.CanvasInfo_v3.prototype=new CABLES.Op;CABLES.OPS["be186ff9-427e-409f-b6a4-f8d957bf7bc7"]={f:Ops.Gl.CanvasInfo_v3,objName:"Ops.Gl.CanvasInfo_v3"};Ops.Patch.PMZcxaN.CategoryNodes=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outArray("Category Nodes");n.set(["Musique","Programmation","Jeu-vidéo","Machine Learning"])};Ops.Patch.PMZcxaN.CategoryNodes.prototype=new CABLES.Op;CABLES.OPS["ee62d56c-f01e-4e71-879f-1b13c68527e8"]={f:Ops.Patch.PMZcxaN.CategoryNodes,objName:"Ops.Patch.PMZcxaN.CategoryNodes"};Ops.Patch.PMZcxaN.ContentNodes=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outArray("Content Nodes");n.set([{id:"1",title:"Musiques pour un jeu-vidéo qui n'existe pas",categories:["Games","Music"],thumbnail:"assets/content_item_thumbnails/picture.webp"},{id:"3",title:"DeepCarrol",categories:["Machine learning"],thumbnail:"assets/content_item_thumbnails/picture.webp"},{id:"4",title:"Deep Musical Training",categories:["Machine Learning","Games"],thumbnail:"assets/content_item_thumbnails/picture.webp"},{id:"6",title:"Bio",categories:["Music"],thumbnail:"assets/content_item_thumbnails/picture.webp"}])};Ops.Patch.PMZcxaN.ContentNodes.prototype=new CABLES.Op;CABLES.OPS["2bafbfc9-1208-49c1-9a3d-2d752fa4a578"]={f:Ops.Patch.PMZcxaN.ContentNodes,objName:"Ops.Patch.PMZcxaN.ContentNodes"};Ops.Patch.PMZcxaN.MonotomGraphViz=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute"),r=e.inFloat("Screen X"),a=e.inFloat("Screen Y"),o=e.inArray("Category Nodes"),i=e.inArray("Content Nodes"),s=e.inArray("Initial Positions"),l=e.inArray("Positions"),u=e.inArray("Adjacency Matrix"),p=e.inFloat("Temperature",10),F=e.inFloat("Cooldown",.01),c=e.inInt("FPS",60),d=e.outTrigger("Trigger"),A=e.outArray("Next Positions");const g=o.get().length;n.onTriggered=()=>{A.set(s.get());d.trigger()}};Ops.Patch.PMZcxaN.MonotomGraphViz.prototype=new CABLES.Op;CABLES.OPS["ea696632-0b9c-4b11-8beb-8a547bc2134a"]={f:Ops.Patch.PMZcxaN.MonotomGraphViz,objName:"Ops.Patch.PMZcxaN.MonotomGraphViz"};Ops.Gl.MainLoop_v2=function(){CABLES.Op.apply(this,arguments);const n=this;const e=n.attachments={};const t=n.inFloat("Max Pixel Density (DPR)",2),r=n.inValue("FPS Limit",0),a=n.inValueBool("Reduce FPS unfocussed",false),o=n.inValueBool("Transparent",false),i=n.inValueBool("Active",1),s=n.outTrigger("trigger"),l=n.outNumber("width"),u=n.outNumber("height"),p=n.outNumber("Pixel Density");n.onAnimFrame=v;t.onChange=B;const F=n.patch.cgl;let c=0;let d=0;let A=null;let g=false;if(!n.patch.cgl)n.uiAttr({error:"No webgl cgl context"});const m=vec3.create();vec3.set(m,0,0,0);const C=vec3.create();vec3.set(C,0,0,-2);let h=null;let b=true;let E=true;window.addEventListener("blur",()=>{b=false});window.addEventListener("focus",()=>{b=true});document.addEventListener("visibilitychange",()=>{E=!document.hidden});O();n.patch.tempData.mainloopOp=this;function B(){f();if(CABLES.UI){if(t.get()<1)n.patch.cgl.canvas.style.imageRendering="pixelated"}n.patch.cgl.updateSize();if(CABLES.UI)gui.setLayout()}i.onChange=function(){n.patch.removeOnAnimFrame(n);if(i.get()){n.setUiAttrib({extendTitle:""});n.onAnimFrame=v;n.patch.addOnAnimFrame(n);n.log("adding again!")}else{n.setUiAttrib({extendTitle:"Inactive"})}};function D(){if(a.get()){if(!E)return 10;if(!b)return 30}return r.get()}n.onDelete=function(){F.gl.clearColor(0,0,0,0);F.gl.clear(F.gl.COLOR_BUFFER_BIT|F.gl.DEPTH_BUFFER_BIT)};function f(){if(t.get()!=0)n.patch.cgl.pixelDensity=Math.min(t.get(),window.devicePixelRatio);else n.patch.cgl.pixelDensity=window.devicePixelRatio}function v(e){if(!i.get())return;if(F.aborted||F.canvas.clientWidth===0||F.canvas.clientHeight===0)return;n.patch.cg=F;f();const t=performance.now();n.patch.config.fpsLimit=D();if(F.canvasWidth==-1){F.setCanvas(n.patch.config.glCanvasId);return}if(F.canvasWidth!=l.get()||F.canvasHeight!=u.get()){l.set(F.canvasWidth/1);u.set(F.canvasHeight/1)}if(CABLES.now()-d>1e3){CGL.fpsReport=CGL.fpsReport||[];if(n.patch.loading.getProgress()>=1&&d!==0)CGL.fpsReport.push(c);c=0;d=CABLES.now()}CGL.MESH.lastShader=null;CGL.MESH.lastMesh=null;F.renderStart(F,m,C);if(!o.get())F.gl.clearColor(0,0,0,1);else F.gl.clearColor(0,0,0,0);F.gl.clear(F.gl.COLOR_BUFFER_BIT|F.gl.DEPTH_BUFFER_BIT);s.trigger();if(CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();if(CGL.Texture.previewTexture){if(!CGL.Texture.texturePreviewer)CGL.Texture.texturePreviewer=new CGL.Texture.texturePreview(F);CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)}F.renderEnd(F);n.patch.cg=null;if(!o.get()){F.gl.clearColor(1,1,1,1);F.gl.colorMask(false,false,false,true);F.gl.clear(F.gl.COLOR_BUFFER_BIT);F.gl.colorMask(true,true,true,true)}if(!F.tempData.phong)F.tempData.phong={};c++;p.set(n.patch.cgl.pixelDensity);n.patch.cgl.profileData.profileMainloopMs=performance.now()-t}function O(){clearTimeout(A);A=setTimeout(()=>{if(n.patch.getOpsByObjName(n.name).length>1){n.setUiError("multimainloop","there should only be one mainloop op!");if(!g)g=n.patch.addEventListener("onOpDelete",O)}else n.setUiError("multimainloop",null,1)},500)}};Ops.Gl.MainLoop_v2.prototype=new CABLES.Op;CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};Ops.Trigger.Sequence=function(){CABLES.Op.apply(this,arguments);const o=this;const e=o.attachments={};const t=o.inTrigger("exe"),n=o.inTriggerButton("Clean up connections");o.setUiAttrib({resizable:true,resizableY:false,stretchPorts:true});const r=[],i=[],a=16;let s=null,l=[];t.onTriggered=F;n.onTriggered=c;n.setUiAttribs({hideParam:true,hidePort:true});for(let t=0;t<a;t++){const d=o.outTrigger("trigger "+t);i.push(d);d.onLinkChanged=p;if(t<a-1){let e=o.inTrigger("exe "+t);e.onTriggered=F;r.push(e)}}u();function u(){l.length=0;for(let e=0;e<i.length;e++)if(i[e].links.length>0)l.push(i[e])}function p(){u();clearTimeout(s);s=setTimeout(()=>{let t=false;for(let e=0;e<i.length;e++)if(i[e].links.length>1)t=true;n.setUiAttribs({hideParam:!t});if(o.isCurrentUiOp())o.refreshParams()},60)}function F(){for(let e=0;e<l.length;e++)l[e].trigger()}function c(){let r=0;for(let n=0;n<i.length;n++){let t=[];if(i[n].links.length>1)for(let e=1;e<i[n].links.length;e++){while(i[r].links.length>0)r++;t.push(i[n].links[e]);const a=i[n].links[e].getOtherPort(i[n]);o.patch.link(o,"trigger "+r,a.op,a.name);r++}for(let e=0;e<t.length;e++)t[e].remove()}p();u()}};Ops.Trigger.Sequence.prototype=new CABLES.Op;CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};Ops.Vars.VarSetArray_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inArray("Value",null);e.varName=e.inDropDown("Variable",[],"",true);new CABLES.VarSetOpWrapper(e,"array",n,e.varName)};Ops.Vars.VarSetArray_v2.prototype=new CABLES.Op;CABLES.OPS["8088290f-45d4-4312-b4ca-184d34ca4667"]={f:Ops.Vars.VarSetArray_v2,objName:"Ops.Vars.VarSetArray_v2"};Ops.Vars.VarGetArray_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outArray("Value");e.varName=e.inValueSelect("Variable",[],"",true);new CABLES.VarGetOpWrapper(e,"array",e.varName,n)};Ops.Vars.VarGetArray_v2.prototype=new CABLES.Op;CABLES.OPS["afa79294-aa9c-43bc-a49a-cade000a1de5"]={f:Ops.Vars.VarGetArray_v2,objName:"Ops.Vars.VarGetArray_v2"};Ops.Gl.MeshInstancer_v4=function(){CABLES.Op.apply(this,arguments);const g=this;const e=g.attachments={billboard_vert:"\n#ifdef BILLBOARDING\n\n    modelViewMatrix[0][0] = 1.0;\n    modelViewMatrix[0][1] = 0.0;\n    modelViewMatrix[0][2] = 0.0;\n\n    #ifndef BILLBOARDING_CYLINDRIC\n        modelViewMatrix[1][0] = 0.0;\n        modelViewMatrix[1][1] = 1.0;\n        modelViewMatrix[1][2] = 0.0;\n    #endif\n\n    modelViewMatrix[2][0] = 0.0;\n    modelViewMatrix[2][1] = 0.0;\n    modelViewMatrix[2][2] = 1.0;\n\n#endif",instancer_body_frag:"#define INSTANCING\n#ifdef COLORIZE_INSTANCES\n    #ifdef BLEND_MODE_MULTIPLY\n        col.rgb *= frag_instColor.rgb;\n        col.a *= frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_ADD\n        col.rgb += frag_instColor.rgb;\n        col.a += frag_instColor.a;\n    #endif\n\n    #ifdef BLEND_MODE_NONE\n        col.rgb = frag_instColor.rgb;\n        col.a = frag_instColor.a;\n    #endif\n#endif\n",instancer_body_vert:"\n\n#ifdef HAS_TEXCOORDS\ntexCoord=(texCoord*instTexCoords.zw)+instTexCoords.xy;\n#endif\n\nmMatrix*=instMat;\npos.xyz*=MOD_scale;\n\n#ifdef HAS_COLORS\nfrag_instColor=instColor;\n#endif\n#ifndef HAS_COLORS\nfrag_instColor=vec4(1.0);\n#endif\n\n\nfrag_instIndex=instanceIndex;\n\n",instancer_head_frag:"IN vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat IN float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    IN float frag_instIndex;\n#endif\n",instancer_head_vert:"\nIN vec4 instColor;\nIN mat4 instMat;\nIN vec4 instTexCoords;\nIN float instanceIndex;\nOUT mat4 instModelMat;\nOUT vec4 frag_instColor;\n\n#ifdef WEBGL2\n    flat OUT float frag_instIndex;\n#endif\n#ifdef WEBGL1\n    OUT float frag_instIndex;\n#endif\n\n\n\n#define INSTANCING\n\n"};const t=g.inTrigger("exe"),n=g.inObject("geom",null,"geometry"),r=g.inValue("Scale",1),a=g.inValueBool("Limit Instances",false),o=g.inValueInt("Limit",100),m=g.inArray("positions",3),C=g.inArray("Scale Array",3),h=g.inArray("Rotations",3),b=g.inSwitch("Rotation Type",["Euler","Quaternions","Normals"],"Euler"),i=g.inSwitch("Billboarding",["Off","Spherical","Cylindrical"],"Off"),s=g.inSwitch("Material blend mode",["Multiply","Add","Normal"],"Multiply"),E=g.inArray("Colors",4),B=g.inArray("TexCoords",4),l=g.outTrigger("Trigger Out"),u=g.outNumber("Num");g.setPortGroup("Limit Number of Instances",[o,a]);g.setPortGroup("Parameters",[C,h,m,b]);g.toWorkPortsNeedToBeLinked(n);g.toWorkPortsNeedToBeLinked(t);n.ignoreValueSerialize=true;const p=g.patch.cgl;const D=mat4.create();let f=new Float32Array(1),v=new Float32Array(1),O=new Float32Array(1),y=null,I=true,x=0,_=true,N=true,S=true;const j=new CGL.ShaderModifier(p,g.name,{opId:g.id});j.addModule({name:"MODULE_VERTEX_POSITION",title:g.name,priority:-2,srcHeadVert:e.instancer_head_vert,srcBodyVert:e.instancer_body_vert});j.addModule({name:"MODULE_VERTEX_MODELVIEW",title:g.name+"_billboard",srcBodyVert:e.billboard_vert});j.addModule({name:"MODULE_COLOR",priority:-2,title:g.name,srcHeadFrag:e.instancer_head_frag,srcBodyFrag:e.instancer_body_frag});j.addUniformVert("f","MOD_scale",r);let T=true;s.onChange=()=>{T=true};a.onChange=A;t.onTriggered=L;t.onLinkChanged=function(){if(!t.isLinked())c()};A();h.onChange=C.onChange=m.onChange=b.onChange=function(){S=true;I=true};i.onChange=B.onChange=function(){N=true;I=true;T=true};E.onChange=function(){_=true;I=true;T=true};function F(){_=true,S=true;I=true}function M(){j.toggleDefine("BILLBOARDING",i.get()!="Off");j.toggleDefine("BILLBOARDING_CYLINDRIC",i.get()=="Cylindrical");j.toggleDefine("COLORIZE_INSTANCES",E.get());j.toggleDefine("TEXCOORDS_INSTANCES",B.get());j.toggleDefine("BLEND_MODE_MULTIPLY",s.get()==="Multiply");j.toggleDefine("BLEND_MODE_ADD",s.get()==="Add");j.toggleDefine("BLEND_MODE_NONE",s.get()==="Normal");T=false}n.onChange=function(){if(y)y.dispose();if(!n.get()){y=null;return}y=new CGL.Mesh(p,n.get());F()};function c(){}function d(){if(!y)return;let e=m.get();if(!e)e=[0,0,0];x=Math.floor(e.length/3);if(T)M();const n=E.get();const r=B.get();const a=C.get();const o=b.get()=="Quaternions";const i=b.get()=="Euler";const s=b.get()=="Normals";let t=3;if(o)t=4;h.setUiAttribs({stride:t});if(a&&a.length!=e.length)g.setUiError("lengthScales","Scales array has wrong length");else g.setUiError("lengthScales",null);if(f.length!=x*16)f=new Float32Array(x*16);if(v.length!=x*4){_=true;v=new Float32Array(x*4)}if(O.length!=x*4){N=true;O=new Float32Array(x*4)}const l=h.get();for(let t=0;t<x;t++){mat4.identity(D);mat4.translate(D,D,[e[t*3],e[t*3+1],e[t*3+2]]);if(l){if(o){const u=mat4.create();const p=[l[t*4+0],l[t*4+1],l[t*4+2],l[t*4+3]];quat.normalize(p,p);mat4.fromQuat(u,p);mat4.mul(D,D,u)}else if(s){const F=[l[t*3+0],l[t*3+1],l[t*3+2]];const c=[1,0,0];const d=vec3.create();vec3.cross(d,c,F);vec3.normalize(d,d);const A=Math.acos(vec3.dot(c,F));const p=quat.create();quat.setAxisAngle(p,d,A);quat.normalize(p,p);const u=mat4.create();mat4.fromQuat(u,p);mat4.mul(D,D,u)}if(i){mat4.rotateX(D,D,l[t*3+0]*CGL.DEG2RAD);mat4.rotateY(D,D,l[t*3+1]*CGL.DEG2RAD);mat4.rotateZ(D,D,l[t*3+2]*CGL.DEG2RAD)}}if(_&&n){v[t*4+0]=n[t*4+0];v[t*4+1]=n[t*4+1];v[t*4+2]=n[t*4+2];v[t*4+3]=n[t*4+3]}if(N&&r){O[t*4+0]=r[t*4+0];O[t*4+1]=r[t*4+1];O[t*4+2]=r[t*4+2];O[t*4+3]=r[t*4+3]}if(a&&a.length>t)mat4.scale(D,D,[a[t*3],a[t*3+1],a[t*3+2]]);else mat4.scale(D,D,[1,1,1]);for(let e=0;e<16;e++)f[t*16+e]=D[e]}y.setNumInstances(x);if(S)y.addAttribute("instMat",f,16);if(_)y.addAttribute("instColor",v,4,{instanced:true});if(N)y.addAttribute("instTexCoords",O,4,{instanced:true});j.toggleDefine("HAS_TEXCOORDS",r);j.toggleDefine("HAS_COLORS",n);_=false;I=false}function A(){o.setUiAttribs({greyout:!a.get()})}function L(){if(!y)return;if(I)d();j.bind();if(a.get())y.setNumInstances(Math.min(x,o.get()));else y.setNumInstances(x);u.set(y.numInstances);if(y.numInstances>0)y.render(p.getShader());l.trigger();j.unbind()}};Ops.Gl.MeshInstancer_v4.prototype=new CABLES.Op;CABLES.OPS["cb58f461-a0bd-4159-a3cb-5e396198b4e9"]={f:Ops.Gl.MeshInstancer_v4,objName:"Ops.Gl.MeshInstancer_v4"};Ops.Math.GaussianRandomArray=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueInt("Num",100),r=e.outArray("Array"),a=e.inValue("Deviation",1),o=e.inValueFloat("Random Seed");let i=[];let s=1;let l=false;let u=null;let p;o.onChange=a.onChange=n.onChange=c;c();function F(e,t){let n,r,a,o;if(l){n=p;l=false}else{do{r=Math.seededRandom()*2-1;a=Math.seededRandom()*2-1;o=r*r+a*a}while(o>=1);o=Math.sqrt(-2*Math.log(o)/o);n=r*o;p=a*o;l=true}let i=e||0;let s=t||1;return n*s+i}function c(){s=a.get();Math.randomSeed=o.get();i.length=Math.floor(n.get())||0;for(let e=0;e<i.length;e++){i[e]=F(0,s)}r.set(null);r.set(i)}};Ops.Math.GaussianRandomArray.prototype=new CABLES.Op;CABLES.OPS["1a8c3535-6fce-4cba-8601-ddb7a5dd7656"]={f:Ops.Math.GaussianRandomArray,objName:"Ops.Math.GaussianRandomArray"};Ops.Trigger.TriggerCounter=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("exe"),r=e.inTriggerButton("reset"),a=e.outTrigger("trigger"),o=e.outNumber("timesTriggered");e.toWorkPortsNeedToBeLinked(n);e.setUiAttrib({extendTitle:0});let i=0;r.onTriggered=e.onLoaded=s;n.onTriggered=function(){i++;o.set(i);e.setUiAttrib({extendTitle:i});a.trigger()};function s(){i=0;e.setUiAttrib({extendTitle:i});o.set(i)}};Ops.Trigger.TriggerCounter.prototype=new CABLES.Op;CABLES.OPS["e640619f-235c-4543-bbf8-b358e0283180"]={f:Ops.Trigger.TriggerCounter,objName:"Ops.Trigger.TriggerCounter"};Ops.Vars.VarGetNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.outNumber("Value");e.varName=e.inValueSelect("Variable",[],"",true);new CABLES.VarGetOpWrapper(e,"number",e.varName,n)};Ops.Vars.VarGetNumber_v2.prototype=new CABLES.Op;CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};Ops.Math.Math=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inFloat("number 0",0),r=t.inFloat("number 1",0),a=t.inSwitch("math mode",["+","-","*","/","%","min","max"],"+"),o=t.outNumber("result");let i;n.onChange=r.onChange=C;a.onChange=m;let s=0;let l=0;const u=function(e,t){return e+t};const p=function(e,t){return e-t};const F=function(e,t){return e*t};const c=function(e,t){return e/t};const d=function(e,t){return e%t};const A=function(e,t){return Math.min(e,t)};const g=function(e,t){return Math.max(e,t)};function m(){let e=a.get();if(e=="+")i=u;else if(e=="-")i=p;else if(e=="*")i=F;else if(e=="/")i=c;else if(e=="%")i=d;else if(e=="min")i=A;else if(e=="max")i=g;C();t.setUiAttrib({extendTitle:e})}function C(){s=n.get();l=r.get();o.set(i(s,l))}m()};Ops.Math.Math.prototype=new CABLES.Op;CABLES.OPS["e9fdcaca-a007-4563-8a4d-e94e08506e0f"]={f:Ops.Math.Math,objName:"Ops.Math.Math"};Ops.Gl.Meshes.Cube_v2=function(){CABLES.Op.apply(this,arguments);const i=this;const e=i.attachments={};const t=i.inTrigger("Render"),n=i.inValueBool("Render Mesh",true),s=i.inValue("Width",1),l=i.inValue("Length",1),u=i.inValue("Height",1),p=i.inValueBool("Center",true),F=i.inSwitch("Mapping",["Side","Cube +-","SideWrap"],"Side"),c=i.inValue("Bias",0),d=i.inValueBool("Flip X",true),A=i.inValueBool("Top",true),g=i.inValueBool("Bottom",true),m=i.inValueBool("Left",true),C=i.inValueBool("Right",true),h=i.inValueBool("Front",true),b=i.inValueBool("Back",true),r=i.outTrigger("Next"),E=i.outObject("geometry",null,"geometry");const a=i.patch.cgl;i.toWorkPortsNeedToBeLinked(t);i.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);i.setPortGroup("Mapping",[F,c,d]);i.setPortGroup("Geometry",[s,u,l,p]);i.setPortGroup("Sides",[A,g,m,C,h,b]);let B=null,D=null,f=true,v=true;c.onChange=d.onChange=A.onChange=g.onChange=m.onChange=C.onChange=h.onChange=b.onChange=F.onChange=s.onChange=u.onChange=l.onChange=p.onChange=o;function o(){v=true}t.onLinkChanged=function(){if(!t.isLinked())E.set(null);else E.setRef(B)};t.onTriggered=function(){if(v)O();if(n.get()&&D&&f)D.render(a.getShader());r.trigger()};i.preRender=function(){O();if(D&&a)D.render(a.getShader())};function O(){if(!B)B=new CGL.Geometry("cubemesh");B.clear();let e=s.get();let t=-1*s.get();let n=u.get();let r=-1*u.get();let a=l.get();let o=-1*l.get();if(!p.get()){t=0;r=0;o=0}else{e*=.5;t*=.5;n*=.5;r*=.5;a*=.5;o*=.5}x(B,e,n,a,t,r,o);if(F.get()=="Side")y(B,1,1,1);else if(F.get()=="SideWrap")y(B,e,n,a);else I(B);B.verticesIndices=[];if(A.get())B.verticesIndices.push(8,9,10,8,10,11);if(g.get())B.verticesIndices.push(12,13,14,12,14,15);if(m.get())B.verticesIndices.push(20,21,22,20,22,23);if(C.get())B.verticesIndices.push(16,17,18,16,18,19);if(b.get())B.verticesIndices.push(4,5,6,4,6,7);if(h.get())B.verticesIndices.push(0,1,2,0,2,3);if(B.verticesIndices.length===0)f=false;else f=true;if(D)D.dispose();if(i.patch.cg)D=i.patch.cg.createMesh(B,{opId:i.id});E.setRef(B);v=false}i.onDelete=function(){if(D)D.dispose()};function y(e,t,n,r){const a=c.get();let o=1-a;let i=0+a;if(d.get()){[o,i]=[i,o]}let s=1-a;let l=0+a;e.setTexCoords([t*i,n*s,t*o,n*s,t*o,n*l,t*i,n*l,t*o,n*s,t*o,n*l,t*i,n*l,t*i,n*s,t*i,r*l,t*i,r*s,t*o,r*s,t*o,r*l,t*o,n*l,t*i,n*l,t*i,n*s,t*o,n*s,r*o,n*s,r*o,n*l,r*i,n*l,r*i,n*s,r*i,n*s,r*o,n*s,r*o,n*l,r*i,n*l])}function I(e,t,n,r,a,o,i){const s=.25;const l=1/3;const u=c.get();let p=0;if(d.get())p=1;const F=[];F.push(p+s+u,l*2-u,p+s*2-u,l*2-u,p+s*2-u,l+u,p+s+u,l+u,p+s*4-u,l*2-u,p+s*4-u,l+u,p+s*3+u,l+u,p+s*3+u,l*2-u);if(d.get())F.push(s+u,0-u,s*2-u,0-u,s*2-u,l*1+u,s+u,l*1+u,s+u,l*3+u,s+u,l*2-u,s*2-u,l*2-u,s*2-u,l*3+u);else F.push(s+u,0+u,s+u,l*1-u,s*2-u,l*1-u,s*2-u,0+u,s+u,l*3-u,s*2-u,l*3-u,s*2-u,l*2+u,s+u,l*2+u);F.push(p+s*3-u,1-l-u,p+s*3-u,1-l*2+u,p+s*2+u,1-l*2+u,p+s*2+u,1-l-u,p+s*0+u,1-l-u,p+s*1-u,1-l-u,p+s*1-u,1-l*2+u,p+s*0+u,1-l*2+u);e.setTexCoords(F)}function x(e,t,n,r,a,o,i){e.vertices=[a,o,r,t,o,r,t,n,r,a,n,r,a,o,i,a,n,i,t,n,i,t,o,i,a,n,i,a,n,r,t,n,r,t,n,i,a,o,i,t,o,i,t,o,r,a,o,r,t,o,i,t,n,i,t,n,r,t,o,r,a,o,i,a,o,r,a,n,r,a,n,i];e.vertexNormals=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0]);e.tangents=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1]);e.biTangents=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1])}};Ops.Gl.Meshes.Cube_v2.prototype=new CABLES.Op;CABLES.OPS["37b92ba4-cea5-42ae-bf28-a513ca28549c"]={f:Ops.Gl.Meshes.Cube_v2,objName:"Ops.Gl.Meshes.Cube_v2"};Ops.Vars.VarSetNumber_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("Value",0);e.varName=e.inDropDown("Variable",[],"",true);new CABLES.VarSetOpWrapper(e,"number",n,e.varName)};Ops.Vars.VarSetNumber_v2.prototype=new CABLES.Op;CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};Ops.Color.ColorValue=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueSlider("r",Math.random());const r=e.inValueSlider("g",Math.random());const a=e.inValueSlider("b",Math.random());n.setUiAttribs({colorPick:true});const o=e.inValueSlider("a",1);const i=e.outNumber("outr");const s=e.outNumber("outg");const l=e.outNumber("outb");const u=e.outNumber("outa");const p=e.outNumber("Hex","000000");const F=e.outArray("Array");n.onChange=r.onChange=a.onChange=o.onChange=d;function c(e){let t=Math.round(e*255).toString(16);if(t.length===1){t="0"+t}return t.toUpperCase()}function d(){i.set(n.get());s.set(r.get());l.set(a.get());u.set(o.get());let e=c(n.get())+c(r.get())+c(a.get());p.set(e);F.set([n.get(),r.get(),a.get(),o.get()])}d()};Ops.Color.ColorValue.prototype=new CABLES.Op;CABLES.OPS["7caa37c8-f2a7-49f2-a29c-96af362abca0"]={f:Ops.Color.ColorValue,objName:"Ops.Color.ColorValue"};Ops.Array.ArrayMath=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const r=t.inArray("array 0"),a=t.inValueFloat("Number for math",0),n=t.inSwitch("Math function",["+","-","*","/","%","min","max"],"+"),o=t.outArray("Array result"),i=t.outNumber("Array length");t.toWorkPortsNeedToBeLinked(r);let s;let l=false;let u=[];r.onChange=a.onChange=F;n.onChange=p;p();r.onLinkChanged=()=>{if(r)r.copyLinkedUiAttrib("stride",o)};function p(){let e=n.get();if(e==="+")s=function(e,t){return e+t};else if(e==="-")s=function(e,t){return e-t};else if(e==="*")s=function(e,t){return e*t};else if(e==="/")s=function(e,t){return e/t};else if(e==="%")s=function(e,t){return e%t};else if(e==="min")s=function(e,t){return Math.min(e,t)};else if(e==="max")s=function(e,t){return Math.max(e,t)};F();t.setUiAttrib({extendTitle:e})}function F(){let e=r.get();u.length=0;if(!e){i.set(0);o.set(null);return}let t=a.get();u.length=e.length;let n=0;for(n=0;n<e.length;n++){u[n]=s(e[n],t)}o.setRef(u);i.set(u.length)}};Ops.Array.ArrayMath.prototype=new CABLES.Op;CABLES.OPS["c7617717-3114-452f-9625-e4fefd841e88"]={f:Ops.Array.ArrayMath,objName:"Ops.Array.ArrayMath"};Ops.Patch.PMZcxaN.DrawVariableWidthEdges=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger");const I=e.inArray("NodePositions2D");const x=e.inArray("EdgeWeightMatrix");const _=e.inInt("GraphSize");const N=e.inFloat("MinThickness",.15);const S=e.inFloat("MaxThickness",1.5);const j=e.inFloat("DefaultEdgeZ",0);const T=e.inBool("NormalizeWeights",true);const M=e.outTrigger("Next");const L=e.outArray("EdgeTranslations");const w=e.outArray("EdgeRotations");const V=e.outArray("EdgeScales");const P=e.outNumber("EdgeInstanceCount");function k(e,t,n,r,a){const o=Math.max(t,Math.min(n,e));if(t===n)return(r+a)/2;return r+(a-r)*(o-t)/(n-t)}n.onTriggered=()=>{const r=I.get();const a=x.get();const o=_.get();const i=N.get();const s=S.get();const l=j.get();const u=T.get();const p=[];const F=[];const c=[];let d=0;if(!r||!a||o===0||r.length<o*2||a.length<o*o){console.warn("PrepareEdgeMeshes: Insufficient data.");L.set(new Float32Array(0));w.set(new Float32Array(0));V.set(new Float32Array(0));P.set(0);M.trigger();return}let A=Infinity;let g=-Infinity;if(u){for(let t=0;t<o;t++){for(let e=t+1;e<o;e++){const m=a[t*o+e];if(m>0){if(m<A)A=m;if(m>g)g=m}}}if(A===Infinity){A=0;g=1}}for(let n=0;n<o;n++){for(let t=n+1;t<o;t++){const m=a[n*o+t];if(m>0){d++;const C=r[n*2];const h=r[n*2+1];const b=r[t*2];const E=r[t*2+1];const B=(C+b)/2;const D=(h+E)/2;p.push(B,D,l);const f=b-C;const v=E-h;const O=Math.sqrt(f*f+v*v);let e;if(u){e=k(m,A,g,i,s)}else{e=Math.max(i,Math.min(s,m))}e=Math.max(.001,e);c.push(O,e,1);const y=Math.atan2(v,f)*180/3.1415;F.push(0,0,y)}}}L.set(new Float32Array(p));w.set(new Float32Array(F));V.set(new Float32Array(c));P.set(d);M.trigger()}};Ops.Patch.PMZcxaN.DrawVariableWidthEdges.prototype=new CABLES.Op;CABLES.OPS["dbbb46c9-e0bd-44ae-8f77-e50ed8325df4"]={f:Ops.Patch.PMZcxaN.DrawVariableWidthEdges,objName:"Ops.Patch.PMZcxaN.DrawVariableWidthEdges"};Ops.Trigger.TriggerReceive=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const t=r.outTrigger("Triggered");r.varName=r.inValueSelect("Named Trigger",[],"",true);r.varName.setUiAttribs({_triggerSelect:true});o();r.patch.addEventListener("namedTriggersChanged",o);let n=null;function a(){t.trigger()}function o(){if(CABLES.UI){let t=[];let n=r.patch.namedTriggers;for(let e in n)t.push(e);t=t.sort();r.varName.uiAttribs.values=t}}r.varName.onChange=function(){if(n){let e=r.patch.namedTriggers[n];let t=e.indexOf(a);if(t!=-1)e.splice(t,1)}r.setTitle(">"+r.varName.get());r.patch.namedTriggers[r.varName.get()]=r.patch.namedTriggers[r.varName.get()]||[];let e=r.patch.namedTriggers[r.varName.get()];e.push(a);n=r.varName.get();i();r.patch.emitEvent("opTriggerNameChanged",r,r.varName.get())};r.on("uiParamPanel",i);function i(){if(!r.varName.get()){r.setUiError("unknowntrigger","unknown trigger")}else r.setUiError("unknowntrigger",null)}};Ops.Trigger.TriggerReceive.prototype=new CABLES.Op;CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};Ops.Patch.PMZcxaN.NodesColor=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const i=e.inInt("GraphSize",0);const s=e.inInt("NodeSelectedIndex",-1);const l=e.inArray("ColorUnselected",[.5,.5,.5,1]);const u=e.inArray("ColorSelected",[1,0,0,1]);const p=e.outArray("ColorsArray");const n=()=>{const t=i.get();const n=l.get();const r=u.get();const a=s.get();let o=[];if(typeof t!=="number"||t<=0){p.set([]);return}if(!Array.isArray(r)||!Array.isArray(n)||r.length<3||n.length<3){console.warn("Color inputs are not valid arrays.");p.set([]);return}for(let e=0;e<t;e++){if(e===a){o=o.concat(r)}else{o=o.concat(n)}}p.set(o)};s.onChange=n;i.onChange=n;l.onChange=n;u.onChange=n};Ops.Patch.PMZcxaN.NodesColor.prototype=new CABLES.Op;CABLES.OPS["edd297f9-2dd4-4281-9bef-9555ca9b7198"]={f:Ops.Patch.PMZcxaN.NodesColor,objName:"Ops.Patch.PMZcxaN.NodesColor"};Ops.Patch.PMZcxaN.EdgesColor=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inInt("GraphSize",0);const u=e.inInt("NodeSelectedIndex",-1);const p=e.inArray("Adjacency Matrix");const F=e.inInt("Edges Count");const c=e.inArray("ColorUnselected",[.5,.5,.5,1]);const d=e.inArray("ColorSelected",[1,0,0,1]);const A=e.outArray("ColorsArray");const r=()=>{const r=n.get();const e=F.get();const a=p.get();const o=c.get();const i=d.get();const s=u.get();let l=[];for(let n=0;n<r;n++){for(let t=n+1;t<r;t++){let e=n*r+t;if(a[e]>0){if(n===s||t===s){l=l.concat(i)}else{l=l.concat(o)}}}}A.set(l)};u.onChange=r;n.onChange=r;c.onChange=r;d.onChange=r};Ops.Patch.PMZcxaN.EdgesColor.prototype=new CABLES.Op;CABLES.OPS["7ef0826b-08c4-4044-b560-39476c1c66d5"]={f:Ops.Patch.PMZcxaN.EdgesColor,objName:"Ops.Patch.PMZcxaN.EdgesColor"};Ops.Array.Array3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const o=e.inValueInt("Num Triplets",100),i=e.inValueFloat("X",0),s=e.inValueFloat("Y",0),l=e.inValueFloat("Z",0),u=e.outArray("Array",null,3),p=e.outNumber("Total points"),F=e.outNumber("Array length");o.onChange=i.onChange=s.onChange=l.onChange=n;let c=[];n();function n(){let t=Math.floor(o.get()*3);if(t<0)t=0;if(c.length!=t)c.length=t;const n=i.get();const r=s.get();const a=l.get();for(let e=0;e<t;e+=3){c[e]=n;c[e+1]=r;c[e+2]=a}u.setRef(c);p.set(t/3);F.set(t)}};Ops.Array.Array3.prototype=new CABLES.Op;CABLES.OPS["2766606a-3ea0-4204-8613-b8950a124435"]={f:Ops.Array.Array3,objName:"Ops.Array.Array3"};Ops.Array.ArrayMerge_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=8;const r=[];for(let e=0;e<n;e++){r[e]=t.inArray("Array "+e);r[e].onChange=function(){s()}}const a=t.outArray("Result"),o=t.outNumber("Array length");let i=[];function s(){i.length=0;for(let e=0;e<n;e++){const t=r[e].get();if(t)i=i.concat(t)}a.setRef(i);o.set(i.length)}};Ops.Array.ArrayMerge_v3.prototype=new CABLES.Op;CABLES.OPS["753d053a-04a3-44c7-abf0-ae2676ced13e"]={f:Ops.Array.ArrayMerge_v3,objName:"Ops.Array.ArrayMerge_v3"};Ops.Devices.Mouse.Mouse_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const L=e.attachments={};const t=e.inSwitch("Coordinates",["-1 to 1","Pixel Display","Pixel","0 to 1"],"-1 to 1"),a=e.inValueSelect("Area",["Canvas","Document","Parent Element","Canvas Area"],"Canvas"),o=e.inValueBool("flip y",true),n=e.inBool("right click prevent default",true),r=e.inValueBool("Touch support",true),i=e.inValueBool("Passive Events",false),s=e.inValueBool("Active",true),l=e.outNumber("x",0),u=e.outNumber("y",0),p=e.outTrigger("click"),F=e.outTrigger("click right"),c=e.outBoolNum("Button is down"),d=e.outBoolNum("Mouse is hovering"),A=e.outNumber("Movement X",0),g=e.outNumber("Movement Y",0);const m=e.patch.cgl;let C=1;let h=null;let b=null;i.onChange=a.onChange=M;t.onChange=V;e.onDelete=T;M();e.on("loadedValueSet",E);function E(){if(C==0){if(b.clientWidth===0)setTimeout(E,50);l.set(b.clientWidth/2);u.set(b.clientHeight/2)}else if(C==1){l.set(0);u.set(0)}else if(C==2){l.set(.5);u.set(.5)}else if(C==3){if(b.clientWidth===0){setTimeout(E,50)}l.set(b.clientWidth/2/m.pixelDensity);u.set(b.clientHeight/2/m.pixelDensity)}else console.error("unknown normalize mouse",C)}function w(a,o){a=a||0;o=o||0;if(C==0){l.set(a);u.set(o)}else if(C==3){l.set(a*m.pixelDensity);u.set(o*m.pixelDensity)}else{let n=b.clientWidth/m.pixelDensity;let r=b.clientHeight/m.pixelDensity;n=n||1;r=r||1;if(C==1){let e=a/n*2-1;let t=o/r*2-1;e=CABLES.clamp(e,-1,1);t=CABLES.clamp(t,-1,1);l.set(e);u.set(t)}else if(C==2){let e=a/n;let t=o/r;e=CABLES.clamp(e,0,1);t=CABLES.clamp(t,0,1);l.set(e);u.set(t)}}}function B(e){const t=b.getBoundingClientRect();return e.clientX>t.left&&e.clientX<t.left+t.width&&e.clientY>t.top&&e.clientY<t.top+t.height}r.onChange=function(){T();M()};s.onChange=function(){if(h)T();if(s.get())M()};function V(){if(t.get()=="Pixel")C=0;else if(t.get()=="-1 to 1")C=1;else if(t.get()=="0 to 1")C=2;else if(t.get()=="Pixel Display")C=3}function D(e){c.set(false);d.set(B(e))}function f(e){if(!B(e))return;c.set(true)}function v(e){c.set(false)}function O(e){if(!B(e))return;F.trigger();if(n.get())e.preventDefault()}function y(e){if(!B(e))return;p.trigger()}function I(e){c.set(false);d.set(B(e))}function x(e){let t=e.clientX;let n=e.clientY;if(a.get()!="Document"){t=e.offsetX;n=e.offsetY}if(a.get()==="Canvas Area"){const r=b.getBoundingClientRect();t=e.clientX-r.left;n=e.clientY-r.top}if(o.get())n=b.clientHeight-n;w(t/m.pixelDensity,n/m.pixelDensity)}function _(e){d.set(B(e));x(e);A.set(e.movementX/m.pixelDensity);g.set(e.movementY/m.pixelDensity)}function N(e){if(event.touches&&event.touches.length>0)x(e.touches[0])}function S(e){c.set(true);if(e.touches&&e.touches.length>0)f(e.touches[0])}function j(e){c.set(false);v()}function T(){if(!h)return;h.removeEventListener("touchend",j);h.removeEventListener("touchstart",S);h.removeEventListener("touchmove",N);h.removeEventListener("click",y);h.removeEventListener("mousemove",_);h.removeEventListener("mouseleave",I);h.removeEventListener("mousedown",f);h.removeEventListener("mouseup",v);h.removeEventListener("mouseenter",D);h.removeEventListener("contextmenu",O);h=null}function M(){if(h||!s.get())T();if(!s.get())return;h=b=m.canvas;if(a.get()=="Canvas Area"){b=m.canvas.parentElement;h=document.body}if(a.get()=="Document")b=h=document.body;if(a.get()=="Parent Element")h=b=m.canvas.parentElement;let e=false;if(i.get())e={passive:true};if(r.get()){h.addEventListener("touchend",j,e);h.addEventListener("touchstart",S,e);h.addEventListener("touchmove",N,e)}h.addEventListener("mousemove",_,e);h.addEventListener("mouseleave",I,e);h.addEventListener("mousedown",f,e);h.addEventListener("mouseup",v,e);h.addEventListener("mouseenter",D,e);h.addEventListener("contextmenu",O,e);h.addEventListener("click",y,e)}};Ops.Devices.Mouse.Mouse_v3.prototype=new CABLES.Op;CABLES.OPS["6d1edbc0-088a-43d7-9156-918fb3d7f24b"]={f:Ops.Devices.Mouse.Mouse_v3,objName:"Ops.Devices.Mouse.Mouse_v3"};Ops.Devices.TouchScreen=function(){CABLES.Op.apply(this,arguments);const a=this;const e=a.attachments={};const t=a.inValueBool("Disable Scaling",true),n=a.inValueBool("Disable Scroll",true),o=a.inValueBool("HDPI Coordinates",false),r=a.inValueBool("Active",true),i=a.outNumber("Touched",false),s=a.outNumber("Fingers",0),l=a.outNumber("Finger 1 X",0),u=a.outNumber("Finger 1 Y",0),p=a.outNumber("Finger 1 Force",0),F=a.outNumber("Finger 2 X",0),c=a.outNumber("Finger 2 Y",0),d=a.outNumber("Finger 2 Force",0),A=a.inSwitch("Area",["Canvas","Document"],"Canvas"),g=a.outArray("Events"),m=a.inValueBool("Normalize Coordinates"),C=a.inValueBool("Flip Y"),h=a.outTrigger("Touch Start"),b=a.outTrigger("Touch End");A.onChange=I;function E(e){if(e.touches&&e.touches.length>0){var t=e.target.getBoundingClientRect();var n=e.touches[0].clientX-e.touches[0].target.offsetLeft;var r=e.touches[0].clientY-e.touches[0].target.offsetTop;if(C.get())r=t.height-r;if(o.get()){n*=a.patch.cgl.pixelDensity||1;r*=a.patch.cgl.pixelDensity||1}if(m.get()){n=n/t.width*2-1;r=r/t.height*2-1}l.set(n);u.set(r);if(e.touches[0].force)p.set(e.touches[0].force)}if(e.touches&&e.touches.length>1){var t=e.target.getBoundingClientRect();var n=e.touches[1].clientX-e.touches[1].target.offsetLeft;var r=e.touches[1].clientY-e.touches[1].target.offsetTop;if(o.get()){n*=a.patch.cgl.pixelDensity||1;r*=a.patch.cgl.pixelDensity||1}if(m.get()){n=n/t.width*2-1;r=r/t.height*2-1}F.set(n);c.set(r);if(e.touches[1].force)d.set(e.touches[1].force)}g.set(e.touches)}const B=function(e){i.set(true);E(e);s.set(e.touches.length);h.trigger()};const D=function(e){i.set(false);p.set(0);d.set(0);E(e);s.set(e.touches.length);b.trigger()};const f=function(e){E(e);s.set(e.touches.length);if(n.get()||t.get()&&e.scale!==1){e.preventDefault();document.body.style["touch-action"]="none"}else{document.body.style["touch-action"]="initial"}};const v=a.patch.cgl;let O=null;function y(){O.addEventListener("touchmove",f,{passive:false});O.addEventListener("touchstart",B,{passive:false});O.addEventListener("touchend",D,{passive:false})}function I(){x();if(A.get()=="Document")O=document;else O=v.canvas;if(r.get())y()}function x(){if(O){O.removeEventListener("touchmove",f);O.removeEventListener("touchstart",B);O.removeEventListener("touchend",D)}O=null}r.onChange=function(){I()};I()};Ops.Devices.TouchScreen.prototype=new CABLES.Op;CABLES.OPS["cedffacf-0f09-4342-bd21-540bd9c8037d"]={f:Ops.Devices.TouchScreen,objName:"Ops.Devices.TouchScreen"};Ops.Trigger.TriggerSend=function(){CABLES.Op.apply(this,arguments);const r=this;const e=r.attachments={};const t=r.inTriggerButton("Trigger");r.varName=r.inValueSelect("Named Trigger",[],"",true);r.varName.onChange=a;t.onTriggered=o;r.patch.addEventListener("namedTriggersChanged",n);n();r.varName.setUiAttribs({_triggerSelect:true});function n(){if(CABLES.UI){let e=[];const t=r.patch.namedTriggers;e.push("+ create new one");for(const n in t)e.push(n);e=e.sort();r.varName.uiAttribs.values=e}}function a(){if(CABLES.UI){if(r.varName.get()=="+ create new one"){new CABLES.UI.ModalDialog({prompt:true,title:"New Trigger",text:"Enter a name for the new trigger",promptValue:"",promptOk:e=>{r.varName.set(e);r.patch.namedTriggers[e]=r.patch.namedTriggers[e]||[];n()}});return}r.refreshParams()}if(!r.patch.namedTriggers[r.varName.get()]){r.patch.namedTriggers[r.varName.get()]=r.patch.namedTriggers[r.varName.get()]||[];r.patch.emitEvent("namedTriggersChanged")}r.setTitle(">"+r.varName.get());r.refreshParams();r.patch.emitEvent("opTriggerNameChanged",r,r.varName.get())}function o(){const t=r.patch.namedTriggers[r.varName.get()];r.patch.emitEvent("namedTriggerSent",r.varName.get());if(!t){r.setUiError("unknowntrigger","unknown trigger");return}else r.setUiError("unknowntrigger",null);for(let e=0;e<t.length;e++){t[e]()}}};Ops.Trigger.TriggerSend.prototype=new CABLES.Op;CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};Ops.Number.TriggerOnChangeNumber=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inFloat("Value"),r=e.outTrigger("Next"),a=e.outNumber("Number");n.onChange=function(){a.set(n.get());r.trigger()}};Ops.Number.TriggerOnChangeNumber.prototype=new CABLES.Op;CABLES.OPS["f5c8c433-ce13-49c4-9a33-74e98f110ed0"]={f:Ops.Number.TriggerOnChangeNumber,objName:"Ops.Number.TriggerOnChangeNumber"};Ops.Trigger.TriggerOnce=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Exec"),r=e.inTriggerButton("Reset"),a=e.outTrigger("Next"),o=e.outBoolNum("Was Triggered");let i=false;e.toWorkPortsNeedToBeLinked(n);r.onTriggered=function(){i=false;o.set(i)};n.onTriggered=function(){if(i)return;i=true;a.trigger();o.set(i)}};Ops.Trigger.TriggerOnce.prototype=new CABLES.Op;CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};Ops.Patch.PMZcxaN.AdjMatrix=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute"),r=e.outArray("Result"),a=e.outNumber("Edges Count");n.onTriggered=()=>{const e=[0,0,.4,0,0,0,0,0,.21,.5,.26,.1,.4,.21,0,.8,.31,.31,0,.5,.8,0,.3,.7,0,0,.31,.3,0,.34,0,.1,.31,.7,.34,0];r.set(e);a.set(13)}};Ops.Patch.PMZcxaN.AdjMatrix.prototype=new CABLES.Op;CABLES.OPS["b1d06a3c-46f2-484e-a46b-9a5265e59d26"]={f:Ops.Patch.PMZcxaN.AdjMatrix,objName:"Ops.Patch.PMZcxaN.AdjMatrix"};Ops.Patch.PMZcxaN.ComputeNodeWeights=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute"),s=e.inArray("Adjacency Matrix"),l=e.inInt("Graph Size",6),u=e.outArray("Node Weights");n.onTriggered=()=>{const t=s.get();const n=l.get();const r=[];for(let e=0;e<n;e++){const o=t.slice(e*n,(e+1)*n);const i=o.reduce((e,t)=>{return e+t},0)/2;r.push(i)}const a=r.reduce((e,t)=>{return Math.max(e,t)});const e=r.map(e=>{return e/a});u.set(e)}};Ops.Patch.PMZcxaN.ComputeNodeWeights.prototype=new CABLES.Op;CABLES.OPS["ea0c7602-6ce2-47be-bd55-1090a0d672e8"]={f:Ops.Patch.PMZcxaN.ComputeNodeWeights,objName:"Ops.Patch.PMZcxaN.ComputeNodeWeights"};Ops.Gl.Meshes.Rectangle_v4=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTrigger("render"),r=t.inValueBool("Render Mesh",true),I=t.inValue("width",1),x=t.inValue("height",1),_=t.inSwitch("pivot x",["left","center","right"],"center"),N=t.inSwitch("pivot y",["top","center","bottom"],"center"),S=t.inSwitch("axis",["xy","xz"],"xy"),j=t.inBool("Flip TexCoord X",false),T=t.inBool("Flip TexCoord Y",true),M=t.inValueInt("num columns",1),L=t.inValueInt("num rows",1),a=t.outTrigger("trigger"),w=t.outObject("geometry",null,"geometry");w.ignoreValueSerialize=true;const V=new CGL.Geometry("rectangle");r.setUiAttribs({title:"Render"});n.setUiAttribs({title:"Trigger"});a.setUiAttribs({title:"Next"});t.setPortGroup("Pivot",[_,N,S]);t.setPortGroup("Size",[I,x]);t.setPortGroup("Structure",[M,L]);t.toWorkPortsNeedToBeLinked(n);t.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_TRIGGER);const P=0;const k=1;let R=P;let z=null;let G=true;let U=true;const o=vec3.create();vec3.set(o,1,1,1);S.onChange=_.onChange=N.onChange=j.onChange=T.onChange=L.onChange=M.onChange=i;W();I.onChange=x.onChange=()=>{if(U)W();else G=true};function W(){if(R===P)vec3.set(o,I.get(),x.get(),1);if(R===k)vec3.set(o,I.get(),1,x.get())}w.onLinkChanged=()=>{U=!w.isLinked();W();G=true};function i(){G=true}n.onTriggered=()=>{if(G)s();const e=t.patch.cg;if(e&&z&&r.get()){if(U){e.pushModelMatrix();mat4.scale(e.mMatrix,e.mMatrix,o)}z.render(e.getShader());if(U)e.popModelMatrix()}a.trigger()};t.onDelete=()=>{if(z)z.dispose();i()};function s(){if(S.get()=="xy")R=P;if(S.get()=="xz")R=k;W();let n=I.get();let r=x.get();if(U)n=r=1;let a=0;let o=0;if(_.get()=="center")a=0;else if(_.get()=="right")a=-n/2;else if(_.get()=="left")a=+n/2;if(N.get()=="center")o=0;else if(N.get()=="top")o=-r/2;else if(N.get()=="bottom")o=+r/2;const i=Math.max(1,Math.round(L.get()));const s=Math.max(1,Math.round(M.get()));const l=n/s;const u=r/i;const p=[];const F=new Float32Array((s+1)*(i+1)*2);const c=new Float32Array((s+1)*(i+1)*3);const d=new Float32Array((s+1)*(i+1)*3);const A=new Float32Array((s+1)*(i+1)*3);const g=new Float32Array((s+1)*(i+1)*3);let m=0;let C=0;let h=0;let b=0;let E=0;for(let t=0;t<=i;t++){for(let e=0;e<=s;e++){c[C++]=e*l-n/2+a;if(R==k)c[C++]=0;c[C++]=t*u-r/2+o;if(R==P)c[C++]=0;F[m++]=e/s;F[m++]=t/i;if(R==P){d[h++]=0;d[h++]=0;d[h++]=1;A[b++]=1;A[b++]=0;A[b++]=0;g[E++]=0;g[E++]=1;g[E++]=0}else if(R==k){d[h++]=0;d[h++]=1;d[h++]=0;g[E++]=0;g[E++]=0;g[E++]=1}}}p.length=s*i*6;let B=0;for(let t=0;t<s;t++){for(let e=0;e<i;e++){const D=t+(s+1)*e;const f=D;const v=D+1;const O=D+s+1;const y=D+1+s+1;if(R==P){p[B++]=f;p[B++]=v;p[B++]=O;p[B++]=O;p[B++]=v;p[B++]=y}else if(R==k){p[B++]=f;p[B++]=O;p[B++]=v;p[B++]=v;p[B++]=O;p[B++]=y}}}if(T.get())for(let e=0;e<F.length;e+=2)F[e+1]=1-F[e+1];if(j.get())for(let e=0;e<F.length;e+=2)F[e]=1-F[e];V.clear();V.vertices=c;V.texCoords=F;V.verticesIndices=p;V.vertexNormals=d;V.tangents=A;V.biTangents=g;if(t.patch.cg)if(!z)z=t.patch.cg.createMesh(V,{opId:t.id});else z.setGeom(V);w.setRef(V);G=false}};Ops.Gl.Meshes.Rectangle_v4.prototype=new CABLES.Op;CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};Ops.Math.Divide=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("number1",1),r=e.inValueFloat("number2",2),a=e.outNumber("result");e.setUiAttribs({mathTitle:true});n.onChange=r.onChange=o;o();function o(){a.set(n.get()/r.get())}};Ops.Math.Divide.prototype=new CABLES.Op;CABLES.OPS["86fcfd8c-038d-4b91-9820-a08114f6b7eb"]={f:Ops.Math.Divide,objName:"Ops.Math.Divide"};Ops.Gl.Shader.BasicMaterial_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={basicmaterial_frag:"{{MODULES_HEAD}}\n\nIN vec2 texCoord;\n\n#ifdef VERTEX_COLORS\nIN vec4 vertCol;\n#endif\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=color;\n\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=texCoord;\n\n        #ifdef CROP_TEXCOORDS\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\n        #endif\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=color.r;\n                col.g*=color.g;\n                col.b*=color.b;\n            #endif\n        #endif\n        col.a*=color.a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=texCoordOrig;\n            #endif\n            #ifdef ALPHA_MASK_IR\n                col.a*=1.0-texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_IALPHA\n                col.a*=1.0-texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        col*=vertCol;\n    #endif\n\n    outColor = col;\n}\n",basicmaterial_vert:"\n{{MODULES_HEAD}}\n\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n#ifdef VERTEX_COLORS\n    in vec4 attrVertColor;\n    out vec4 vertCol;\n\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 modelViewMatrix;\n\n    norm=attrVertNormal;\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\n    #endif\n\n    #ifdef VERTEX_COLORS\n        vertCol=attrVertColor;\n    #endif\n\n    vec4 pos = vec4(vPosition, 1.0);\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       modelViewMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * modelViewMatrix * vec4((\n           position.x * vec3(\n               modelViewMatrix[0][0],\n               modelViewMatrix[1][0],\n               modelViewMatrix[2][0] ) +\n           position.y * vec3(\n               modelViewMatrix[0][1],\n               modelViewMatrix[1][1],\n               modelViewMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        modelViewMatrix=viewMatrix * mMatrix;\n\n        {{MODULE_VERTEX_MODELVIEW}}\n\n    #endif\n\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * modelViewMatrix * pos;\n    #endif\n}\n"};const n=e.inTrigger("render");const r=e.outTrigger("trigger");const a=e.outObject("shader",null,"shader");a.ignoreValueSerialize=true;e.toWorkPortsNeedToBeLinked(n);e.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose",CABLES.OP_PORT_TYPE_FUNCTION);const o=e.patch.cgl;const i=new CGL.Shader(o,"basicmaterialnew",this);i.addAttribute({type:"vec3",name:"vPosition"});i.addAttribute({type:"vec2",name:"attrTexCoord"});i.addAttribute({type:"vec3",name:"attrVertNormal",nameFrag:"norm"});i.addAttribute({type:"float",name:"attrVertIndex"});i.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG","MODULE_VERTEX_MODELVIEW"]);i.setSource(t.basicmaterial_vert,t.basicmaterial_frag);a.setRef(i);n.onTriggered=I;const s=e.inValueSlider("r",Math.random());const l=e.inValueSlider("g",Math.random());const u=e.inValueSlider("b",Math.random());const p=e.inValueSlider("a",1);s.setUiAttribs({colorPick:true});const F=i.addUniformFrag("4f","color",s,l,u,p);i.uniformColorDiffuse=F;const c=e.inTexture("texture");let d=null;c.onChange=_;const A=e.inValueBool("colorizeTexture",false);const g=e.inValueBool("Vertex Colors",false);const m=e.inTexture("textureOpacity");let C=null;const h=e.inSwitch("Alpha Mask Source",["Luminance","R","G","B","A","1-A","1-R"],"Luminance");h.setUiAttribs({greyout:true});m.onChange=x;const b=e.inValueBool("Opacity TexCoords Transform",false);const E=e.inValueBool("Discard Transparent Pixels");const B=e.inValue("diffuseRepeatX",1),D=e.inValue("diffuseRepeatY",1),f=e.inValue("Tex Offset X",0),v=e.inValue("Tex Offset Y",0),O=e.inBool("Crop TexCoords",false);i.addUniformFrag("f","diffuseRepeatX",B);i.addUniformFrag("f","diffuseRepeatY",D);i.addUniformFrag("f","texOffsetX",f);i.addUniformFrag("f","texOffsetY",v);const y=e.inValueBool("billboard",false);h.onChange=y.onChange=E.onChange=b.onChange=O.onChange=g.onChange=A.onChange=S;e.setPortGroup("Color",[s,l,u,p]);e.setPortGroup("Color Texture",[c,g,A]);e.setPortGroup("Opacity",[m,h,E,b]);e.setPortGroup("Texture Transform",[B,D,f,v,O]);x();_();e.preRender=function(){i.bind();I()};function I(){if(!i)return;o.pushShader(i);i.popTextures();if(d&&c.get())i.pushTexture(d,c.get());if(C&&m.get())i.pushTexture(C,m.get());r.trigger();o.popShader()}function x(){if(m.get()){if(C!==null)return;i.removeUniform("texOpacity");i.define("HAS_TEXTURE_OPACITY");if(!C)C=new CGL.Uniform(i,"t","texOpacity")}else{i.removeUniform("texOpacity");i.removeDefine("HAS_TEXTURE_OPACITY");C=null}S()}function _(){if(c.get()){if(!i.hasDefine("HAS_TEXTURE_DIFFUSE"))i.define("HAS_TEXTURE_DIFFUSE");if(!d)d=new CGL.Uniform(i,"t","texDiffuse")}else{i.removeUniform("texDiffuse");i.removeDefine("HAS_TEXTURE_DIFFUSE");d=null}N()}function N(){const e=c.isLinked()||m.isLinked();B.setUiAttribs({greyout:!e});D.setUiAttribs({greyout:!e});f.setUiAttribs({greyout:!e});v.setUiAttribs({greyout:!e});A.setUiAttribs({greyout:!e});h.setUiAttribs({greyout:!m.get()});b.setUiAttribs({greyout:!m.get()});let t=true;t=c.get()&&!A.get();s.setUiAttribs({greyout:t});l.setUiAttribs({greyout:t});u.setUiAttribs({greyout:t})}function S(){i.toggleDefine("VERTEX_COLORS",g.get());i.toggleDefine("CROP_TEXCOORDS",O.get());i.toggleDefine("COLORIZE_TEXTURE",A.get());i.toggleDefine("TRANSFORMALPHATEXCOORDS",b.get());i.toggleDefine("DISCARDTRANS",E.get());i.toggleDefine("BILLBOARD",y.get());i.toggleDefine("ALPHA_MASK_ALPHA",h.get()=="A");i.toggleDefine("ALPHA_MASK_IALPHA",h.get()=="1-A");i.toggleDefine("ALPHA_MASK_IR",h.get()=="1-R");i.toggleDefine("ALPHA_MASK_LUMI",h.get()=="Luminance");i.toggleDefine("ALPHA_MASK_R",h.get()=="R");i.toggleDefine("ALPHA_MASK_G",h.get()=="G");i.toggleDefine("ALPHA_MASK_B",h.get()=="B");N()}};Ops.Gl.Shader.BasicMaterial_v3.prototype=new CABLES.Op;CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};Ops.Gl.Textures.TextTexture_v6=function(){CABLES.Op.apply(this,arguments);const m=this;const o=m.attachments={text_frag:"{{MODULES_HEAD}}\n\nUNI sampler2D tex;\nUNI float a;\nUNI vec4 color;\nIN vec2 texCoord;\n\nvoid main()\n{\n\n    vec4 col=texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n\n    {{MODULE_COLOR}}\n\n    outColor=col;\n}\n",text_vert:"{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\nUNI float aspect;\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n    vec4 pos=vec4(vPosition,  1.0);\n\n    pos.x*=aspect;\n\n    texCoord=vec2(attrTexCoord.x,1.0-attrTexCoord.y);;\n\n    mat4 mMatrix=modelMatrix;\n\n    {{MODULE_VERTEX_POSITION}}\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\n\n    gl_Position = projMatrix * modelViewMatrix * pos;\n}\n"};const e=m.inTriggerButton("Render"),q=m.inString("text","cables"),t=m.inValueBool("Draw Mesh",true),n=m.inValueFloat("Scale Mesh",.5),C=m.inSwitch("Size",["Auto","Manual"],"Auto"),h=m.inInt("Width",512),b=m.inInt("Height",512),E=m.inBool("Auto Height",true),B=m.inBool("Auto Line Breaks",true),D=m.inString("font","Arial"),f=m.inString("weight","normal"),v=m.inValueFloat("fontSize",300),O=m.inSwitch("align",["left","center","right"],"center"),y=m.inSwitch("Vertical align",["Top","Middle","Bottom"],"Top"),I=m.inFloat("Letter Spacing",0),x=m.inFloat("Line Height Add",0),Y=m.inInt("Padding Y Top",3),X=m.inInt("Padding Y Bottom",3),J=m.inInt("Padding X",0),_=m.inSwitch("filter",["nearest","linear","mipmap"],"linear"),N=m.inValueSelect("Wrap",["repeat","mirrored repeat","clamp to edge"],"clamp to edge"),S=m.inSwitch("Anisotropic",[0,1,2,4,8,16],0),j=m.inValueBool("Reuse Texture",true),Q=m.inBool("Show Debug",false),i=m.inBool("Redraw On Font Load",true),T=m.inValueSlider("r",1),M=m.inValueSlider("g",1),L=m.inValueSlider("b",1),w=m.inFloatSlider("Opacity",1),V=m.inValueSlider("background R",0),K=m.inValueSlider("background G",0),$=m.inValueSlider("background B",0),ee=m.inValueSlider("background A",1),s=m.inTriggerButton("Force Redraw"),l=m.outTrigger("Next"),te=m.outNumber("Ratio"),P=m.outTexture("texture"),u=m.outObject("Canvas",null,"element"),p=m.outNumber("Aspect",1),ne=m.outNumber("Num Lines");const k=" ";T.setUiAttribs({colorPick:true});V.setUiAttribs({colorPick:true});m.toWorkPortsNeedToBeLinked(e);m.setPortGroup("Text Color",[T,M,L,w]);m.setPortGroup("Background",[V,K,$,ee]);m.setPortGroup("Font",[D,f,v,O,y,I,x]);m.setPortGroup("Texture",[N,_,S,j,Q]);m.setPortGroup("Rendering",[t,n]);e.onLinkChanged=()=>{if(!e.isLinked())P.setRef(CGL.Texture.getEmptyTexture(R));else P.setRef(z)};s.onTriggered=T.onChange=M.onChange=L.onChange=w.onChange=y.onChange=B.onChange=E.onChange=x.onChange=C.onChange=h.onChange=b.onChange=O.onChange=I.onChange=Y.onChange=X.onChange=J.onChange=q.onChange=v.onChange=f.onChange=S.onChange=D.onChange=Q.onChange=j.onChange=function(){H=true;ue()};P.ignoreValueSerialize=true;const R=m.patch.cgl;let z=new CGL.Texture(R);let G=2;let U=2;const W=document.createElement("canvas");W.id="texturetext_"+CABLES.generateUUID();W.style.display="none";document.body.appendChild(W);W.style.letterSpacing="0px";u.setRef(W);let Z=W.getContext("2d");let H=true;const F=CGL.MESHES.getSimpleRect(R,"texttexture rect");const r=vec3.create();const a=new CGL.Shader(R,"texttexture");a.setModules(["MODULE_VERTEX_POSITION","MODULE_COLOR","MODULE_BEGIN_FRAG"]);a.setSource(o.text_vert,o.text_frag);const c=new CGL.Uniform(a,"t","tex");const d=new CGL.Uniform(a,"f","aspect",0);const A=new CGL.Uniform(a,"f","a",w);const g=new CGL.Uniform(a,"4f","color",T,M,L,w);if(m.patch.isEditorMode())CABLES.UI.SIMPLEWIREFRAMERECT=CABLES.UI.SIMPLEWIREFRAMERECT||new CGL.WireframeRect(R);e.onTriggered=oe;t.onChange=ue;ue();m.on("delete",()=>{Z=null;W.remove()});S.onChange=_.onChange=N.onChange=()=>{if(z)z.delete();z=null;H=true};V.onChange=K.onChange=$.onChange=ee.onChange=T.onChange=M.onChange=L.onChange=w.onChange=()=>{if(!t.get()||P.isLinked())H=true};P.onLinkChanged=()=>{if(P.isLinked())H=true};m.patch.on("fontLoaded",e=>{if(e==D.get())H=true});document.fonts.ready.then(()=>{if(i.get())H=true});document.fonts.onloadingdone=function(e){if(i.get())H=true};function re(){return U}function ae(){return G}function oe(){let e=0;while(H&&e<10){ie();le();e++}if(t.get()){r[0]=r[1]=r[2]=n.get();R.pushBlendMode(CGL.BLEND_NORMAL,false);R.pushModelMatrix();mat4.scale(R.mMatrix,R.mMatrix,r);a.popTextures();a.pushTexture(c,z.tex);d.set(p.get());if(R.shouldDrawHelpers(m))CABLES.UI.SIMPLEWIREFRAMERECT.render(p.get(),1,1);R.pushShader(a);F.render(m.patch.cg.getShader());R.popShader();R.popBlendMode();R.popModelMatrix()}l.trigger()}function ie(){if(z)z.setSize(re(),ae());Z.canvas.width=W.width=re();Z.canvas.height=W.height=ae();p.set(W.width/W.height);H=true}function se(n){let r="";for(let e=0;e<n.length;e++){if(!n[e]){r+="\n";continue}let t=0;const a=n[e].split(k);for(let e=0;e<a.length;e++){if(!a[e])continue;t+=Z.measureText(a[e]+k).width;if(t>h.get()){r+="\n"+a[e]+k;t=Z.measureText(a[e]+k).width}else{r+=a[e]+k}}r+="\n"}let e=r;n=e.split("\n");if(n[n.length-1]=="")n.pop();return n}function le(){R.checkFrameStarted("texttrexture refresh");const e="rgba("+Math.floor(V.get()*255)+","+Math.floor(K.get()*255)+","+Math.floor($.get()*255)+","+ee.get()+")";Z.fillStyle=e;Z.fillRect(0,0,Z.canvas.width,Z.canvas.height);const t="rgba("+Math.floor(T.get()*255)+","+Math.floor(M.get()*255)+","+Math.floor(L.get()*255)+","+w.get()+")";Z.fillStyle=t;let n=parseFloat(v.get());let r=D.get();if(r.indexOf(k)>-1)r='"'+r+'"';Z.font=f.get()+k+n+"px "+r+"";Z.textBaseline="top";Z.textAlign=O.get();Z.letterSpacing=I.get()+"px";let a=(q.get()+"").replace(/<br\/>/g,"\n");a=a.trim();let o=a.split("\n");H=false;let i=Math.max(0,Y.get());let s=Math.max(0,X.get());let l=Math.max(0,J.get());U=0;G=0;if(B.get()&&C.get()=="Manual"){if(h.get()>128){o=se(o)}}const u=[];for(let e=0;e<o.length;e++){const g=Z.measureText(o[e]);u[e]=Math.ceil(g.fontBoundingBoxAscent)+Math.ceil(g.fontBoundingBoxDescent)+x.get()}for(let e=0;e<o.length;e++){const g=Z.measureText(o[e]);U=Math.max(U,Math.ceil(g.width));G+=u[e]}U+=l*2;if(x.get()<0)G+=x.get()/2*-1;let p=G;if(C.get()=="Manual"){U=h.get()+l*2;if(!E.get()){G=b.get()}}G=Math.ceil(G);U=Math.ceil(U);if(U>R.maxTexSize||G>R.maxTexSize)m.setUiError("textoobig","Texture too big!");else m.setUiError("textoobig",null);G=Math.min(R.maxTexSize,G);U=Math.min(R.maxTexSize,U);let F=0;if(y.get()=="Middle")F=(G-p)/2;else if(y.get()=="Bottom")F=G-p;F+=i;G+=i+s;if(Z.canvas.width!=U||Z.canvas.height!=G)ie();const c=Q.get();for(let t=0;t<o.length;t++){let e=0+l;if(O.get()=="center")e=Z.canvas.width/2;if(O.get()=="right")e=Z.canvas.width-l;if(C.get()=="Manual")e+=I.get();Z.fillText(o[t],e,F);if(c){Z.lineWidth=3;Z.strokeStyle="#FF0000";Z.beginPath();Z.moveTo(0,F);Z.lineTo(Z.canvas.width,F);Z.stroke()}F+=u[t]}let d=CGL.Texture.WRAP_REPEAT;if(N.get()=="mirrored repeat")d=CGL.Texture.WRAP_MIRRORED_REPEAT;else if(N.get()=="clamp to edge")d=CGL.Texture.WRAP_CLAMP_TO_EDGE;let A=CGL.Texture.FILTER_LINEAR;if(_.get()=="nearest")A=CGL.Texture.FILTER_NEAREST;else if(_.get()=="mipmap")A=CGL.Texture.FILTER_MIPMAP;if(!j.get()||!z||!P.get()||z.width!=W.width||z.height!=W.height||z.anisotropic!=parseFloat(S.get())){if(z)z.delete();z=new CGL.Texture.createFromImage(R,W,{filter:A,anisotropic:parseFloat(S.get()),wrap:d})}z.unpackAlpha=false;z.flip=false;z.initTexture(W,A);te.set(Z.canvas.height/Z.canvas.width);ne.set(o.length);P.setRef(z)}function ue(){h.setUiAttribs({greyout:C.get()!="Manual"});b.setUiAttribs({greyout:C.get()!="Manual"||E.get()});B.setUiAttribs({greyout:C.get()!="Manual"});y.setUiAttribs({greyout:C.get()!="Manual"});E.setUiAttribs({greyout:C.get()!="Manual"});n.setUiAttribs({greyout:!t.get()})}};Ops.Gl.Textures.TextTexture_v6.prototype=new CABLES.Op;CABLES.OPS["2c042efa-3604-4717-b8f4-5ad08d6740e5"]={f:Ops.Gl.Textures.TextTexture_v6,objName:"Ops.Gl.Textures.TextTexture_v6"};Ops.Array.Array2To3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inArray("Array2x",2),r=e.outArray("Array3x",3),a=e.outNumber("Total points"),o=e.outNumber("Array length");let i=[];let s=false;n.onChange=function(){let t=n.get();if(!t){r.set(null);return}if(t.length%2!=0){if(!s){e.setUiError("warning","Arrays length not divisible by 2!");s=true}r.set(null);a.set(0);o.set(0);return}if(s){s=false;e.setUiError("warning",null)}if(t.length/2*3!=i.length){i.length=t.length/2*3}for(let e=0;e<t.length/2;e++){i[e*3+0]=t[e*2+0];i[e*3+1]=t[e*2+1];i[e*3+2]=0}r.setRef(i);a.set(i.length/3);o.set(i.length)}};Ops.Array.Array2To3.prototype=new CABLES.Op;CABLES.OPS["9854162e-d415-4300-a47b-173772b454e9"]={f:Ops.Array.Array2To3,objName:"Ops.Array.Array2To3"};Ops.Array.Array3Sum=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inArray("Array3x",3),r=e.inValue("Add X",1),a=e.inValue("Add Y",1),o=e.inValue("Add Z",1),i=e.outArray("Result");i.setUiAttribs({stride:3});let s=[];a.onChange=r.onChange=o.onChange=n.onChange=function(){let t=n.get();if(t){if(s.length!=t.length)s.length=t.length;for(let e=0;e<t.length;e+=3){s[e+0]=t[e+0]+r.get();s[e+1]=t[e+1]+a.get();s[e+2]=t[e+2]+o.get()}i.setRef(s)}else{i.setRef(null)}}};Ops.Array.Array3Sum.prototype=new CABLES.Op;CABLES.OPS["5120ca09-6ce3-457a-afc1-79b15a06137c"]={f:Ops.Array.Array3Sum,objName:"Ops.Array.Array3Sum"};Ops.Gl.BlendMode=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTrigger("Render"),r=t.inValueSelect("Blendmode",["None","Normal","Add","Subtract","Multiply"],"Normal"),a=t.inValueBool("Premultiplied"),o=t.outTrigger("Next");const i=t.patch.cgl;let s=0;r.onChange=l;l();function l(){if(r.get()=="Normal")s=CGL.BLEND_NORMAL;else if(r.get()=="Add")s=CGL.BLEND_ADD;else if(r.get()=="Subtract")s=CGL.BLEND_SUB;else if(r.get()=="Multiply")s=CGL.BLEND_MUL;else s=CGL.BLEND_NONE;if(CABLES.UI){let e="";if(r.get()=="Normal")e="";else if(r.get()=="Add")e="Add";else if(r.get()=="Subtract")e="Sub";else if(r.get()=="Multiply")e="Mul";else e="None";t.setUiAttrib({extendTitle:e})}}n.onTriggered=function(){i.pushBlendMode(s,a.get());i.pushBlend(s!=CGL.BLEND_NONE);o.trigger();i.popBlend();i.popBlendMode();i.gl.blendEquationSeparate(i.gl.FUNC_ADD,i.gl.FUNC_ADD);i.gl.blendFuncSeparate(i.gl.SRC_ALPHA,i.gl.ONE_MINUS_SRC_ALPHA,i.gl.ONE,i.gl.ONE_MINUS_SRC_ALPHA)}};Ops.Gl.BlendMode.prototype=new CABLES.Op;CABLES.OPS["ce0fff72-1438-4373-924f-e1d0f78b053f"]={f:Ops.Gl.BlendMode,objName:"Ops.Gl.BlendMode"};Ops.Array.ArrayLength_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inArray("array"),r=e.outNumber("length");r.ignoreValueSerialize=true;function a(){let e=0;if(n.get())e=n.get().length;r.set(e)}n.onChange=a};Ops.Array.ArrayLength_v2.prototype=new CABLES.Op;CABLES.OPS["6f665caa-96ed-45d8-8620-e34f0f8e062c"]={f:Ops.Array.ArrayLength_v2,objName:"Ops.Array.ArrayLength_v2"};Ops.Patch.PMZcxaN.NodeNames=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute"),r=e.outArray("Result");n.onTriggered=()=>{const e=["Mathematics","Machine Learning","Theater","Music","Games","About"];r.set(e)}};Ops.Patch.PMZcxaN.NodeNames.prototype=new CABLES.Op;CABLES.OPS["e3f771ac-8922-4b0b-b617-6b14f0557e37"]={f:Ops.Patch.PMZcxaN.NodeNames,objName:"Ops.Patch.PMZcxaN.NodeNames"};Ops.Array.Array_v3=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const r=t.inValueInt("Array length",10),n=t.inSwitch("Mode select",["Number","1,2,3,4","0-1"],"Number"),a=t.inValueFloat("Default Value"),o=t.inBool("Reverse",false),i=t.outArray("Array"),s=t.outNumber("Array length out");let l=[];let u=0;const p=0;const F=1;const c=2;n.onChange=d;o.onChange=a.onChange=r.onChange=A;d();A();function d(){let e=n.get();if(e==="Number")u=p;else if(e==="1,2,3,4")u=F;else if(e==="0-1")u=c;a.setUiAttribs({greyout:u!==p});t.setUiAttrib({extendTitle:n.get()});A()}function A(){l.length=0;let e=r.get();let t=a.get();let n;if(u===p){for(n=0;n<e;n++){l[n]=t}}else if(u===F){for(n=0;n<e;n++){l[n]=n}}else if(u===c){if(e>1){for(n=0;n<e;n++){l[n]=n/(e-1)}}else{l=[0]}}if(o.get())l=l.reverse();i.setRef(l);s.set(l.length)}};Ops.Array.Array_v3.prototype=new CABLES.Op;CABLES.OPS["e4d31a46-bf64-42a8-be34-4cbb2bbc2600"]={f:Ops.Array.Array_v3,objName:"Ops.Array.Array_v3"};Ops.Array.ArrayDivide=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const r=e.inArray("Array In"),a=e.inValue("Value",1),n=e.inSwitch("Mode",["Array/x","x/Array"],"Array/x"),o=e.outArray("Array Out");const i=[];let s=true;o.set(i);r.onLinkChanged=()=>{if(r)r.copyLinkedUiAttrib("stride",o)};n.onChange=()=>{s=n.get()==="Array/x";l()};r.onChange=a.onChange=r.onChange=l;function l(){let t=r.get();if(!t)return;let n=a.get();if(i.length!=t.length)i.length=t.length;if(s)for(let e=0;e<t.length;e++)i[e]=t[e]/n;else for(let e=0;e<t.length;e++)i[e]=n/t[e];o.setRef(i)}};Ops.Array.ArrayDivide.prototype=new CABLES.Op;CABLES.OPS["e9406477-1f1c-4cf3-8a64-f6009df05c7c"]={f:Ops.Array.ArrayDivide,objName:"Ops.Array.ArrayDivide"};Ops.Array.WeaveArrays=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};let i=e.inArray("Array 1");let s=e.inArray("Array 2");let l=e.inValue("Chunk Size",1);let u=e.outArray("Combined Array");i.onChange=n;s.onChange=n;l.onChange=n;function n(){let n=[];let r=i.get();let a=s.get();let o=l.get();if(o<1){o=1}if(r&&!a){n=r.slice(0)}if(!r&&a){n=a.slice(0)}else if(r&&a){for(let t=0;t<Math.max(r.length,a.length);t+=o){for(let e=0;e<o&&e+t<r.length;e++){n.push(r[t+e])}for(let e=0;e<o&&e+t<a.length;e++){n.push(a[t+e])}}}u.set(null);u.set(n)}};Ops.Array.WeaveArrays.prototype=new CABLES.Op;CABLES.OPS["ad6d77b7-d81d-4115-a2f2-5160adaaef3a"]={f:Ops.Array.WeaveArrays,objName:"Ops.Array.WeaveArrays"};Ops.Array.ArrayToString_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const r=e.inArray("Array"),a=e.inString("Seperator",","),o=e.inValueBool("New Line"),i=e.outString("Result");r.onChange=i.onChange=a.onChange=o.onChange=n;function n(){var e=r.get();var t="";var n=a.get();if(o.get())n+="\n";if(e&&e.join){t=e.join(n)}i.set(t)}};Ops.Array.ArrayToString_v3.prototype=new CABLES.Op;CABLES.OPS["7b539bb3-8e86-4367-9e00-a637d3cfd87a"]={f:Ops.Array.ArrayToString_v3,objName:"Ops.Array.ArrayToString_v3"};Ops.Html.Cursor_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTriggerButton("Update"),r=t.inDropDown("CSS Cursors",["auto","crosshair","pointer","hand","move","n-resize","ne-resize","e-resize","se-resize","s-resize","sw-resize","w-resize","nw-resize","ew-resize","text","wait","help","none"],"pointer"),a=t.inBool("Set Parent Element",true),o=t.outTrigger("Next");const i="";n.onTriggered=l;let s="";n.onLinkChanged=o.onLinkChanged=()=>{t.patch.cgl.setCursor("auto")};a.onChange=()=>{if(!a.get()){s="auto";t.patch.cgl.canvas.parentElement.style.cursor="auto"}};function l(){let e=null;t.patch.cgl.setCursor(r.get(),e);if(a.get()&&s!=r.get())t.patch.cgl.canvas.parentElement.style.cursor=r.get();o.trigger()}};Ops.Html.Cursor_v2.prototype=new CABLES.Op;CABLES.OPS["39486799-bdad-42d3-a300-4642c23578a8"]={f:Ops.Html.Cursor_v2,objName:"Ops.Html.Cursor_v2"};Ops.Color.HexToRGB_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const a=e.inString("Hex","#ff0000"),o=e.inValueBool("Bytes"),i=e.outNumber("R"),s=e.outNumber("G"),l=e.outNumber("B");function u(e){return parseInt(n(e).substring(0,2),16)||0}function p(e){return parseInt(n(e).substring(2,4),16)||0}function F(e){return parseInt(n(e).substring(4,6),16)||0}function n(e=""){return e.charAt(0)=="#"?e.substring(1,7):e}a.onChange=r;o.onChange=r;function r(){let e=a.get()||"";let t=u(e);let n=p(e);let r=F(e);if(!o.get()){t/=255;n/=255;r/=255}i.set(t);l.set(r);s.set(n)}};Ops.Color.HexToRGB_v2.prototype=new CABLES.Op;CABLES.OPS["9877f198-8dac-48e5-9310-244ef1a8dec5"]={f:Ops.Color.HexToRGB_v2,objName:"Ops.Color.HexToRGB_v2"};Ops.String.StringEditor=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inStringEditor("value",""),r=e.inValueSelect("Syntax",["text","glsl","css","html","xml","json","javascript","inline-css","sql"],"text"),a=e.outString("Result");r.onChange=o;function o(){let e=r.get();if(e=="javascript")e="js";n.setUiAttribs({editorSyntax:e})}n.onChange=function(){a.set(n.get())}};Ops.String.StringEditor.prototype=new CABLES.Op;CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};Ops.Array.NumbersToArrayMultiPort=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const r=e.inMultiPort("Numbers",CABLES.OP_PORT_TYPE_NUMBER),a=e.outArray("Result"),o=e.outNumber("Num Values");r.onChange=()=>{const t=r.get();let n=[];for(let e=0;e<t.length;e++){n[e]=t[e].get()||0}a.set(n);o.set(t.length)}};Ops.Array.NumbersToArrayMultiPort.prototype=new CABLES.Op;CABLES.OPS["d63e564f-55bd-49fc-ae75-d20096f18b01"]={f:Ops.Array.NumbersToArrayMultiPort,objName:"Ops.Array.NumbersToArrayMultiPort"};Ops.Array.Array3To4=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inArray("Array3x",3),r=e.outArray("Array4x",4),a=e.outNumber("Total points"),o=e.outNumber("Array length");let i=[];let s=false;n.onChange=function(){let t=n.get();if(!t){r.set(null);return}if(t.length%3!=0){if(!s){e.uiAttr({error:"Arrays length not divisible by 3 !"});s=true}r.set(null);a.set(0);o.set(0);return}if(s){s=false;e.uiAttr({error:null})}if(t.length/3*4!=i.length){i.length=t.length/3*4}for(let e=0;e<t.length/3;e++){i[e*4+0]=t[e*3+0];i[e*4+1]=t[e*3+1];i[e*4+2]=t[e*3+2];i[e*4+3]=1}r.setRef(i);a.set(i.length/4);o.set(i.length)}};Ops.Array.Array3To4.prototype=new CABLES.Op;CABLES.OPS["91fc24d6-ecba-4f35-8986-8d13087d2370"]={f:Ops.Array.Array3To4,objName:"Ops.Array.Array3To4"};Ops.Html.FontFile_v2=function(){CABLES.Op.apply(this,arguments);const a=this;const e=a.attachments={};const o=a.inUrl("file",[".otf",".ttf",".woff",".woff2"]),i=a.inString("family"),s=a.inBool("Active",true),l=a.outBoolNum("Loaded"),u=a.outTrigger("Loaded Trigger");let p=null;let F;let c=null;let t=null;let d=null;let A="";o.onChange=function(){l.set(false);r(null)};s.onChange=i.onChange=()=>{n()};function n(){clearTimeout(t);t=setTimeout(()=>{r(null)},50)}a.patch.on("windowChanged",e=>{F=null;r(e.document)});function r(e){if(d)d.remove();if(F){const t=c.fonts.delete(F);F=null;setTimeout(()=>{a.patch.emitEvent("fontLoaded",A)},100)}if(!s.get())return;c=e||c||a.patch.cgl.canvas.ownerDocument||document;if(p)p=a.patch.cgl.patch.loading.finished(p);a.setUiError("loadingerror",null);A=i.get();if(o.get()&&i.get()){if(c.fonts){let e="url("+a.patch.getFilePath(String(o.get()))+")";F=new FontFace(i.get(),e);p=a.patch.cgl.patch.loading.start("FontFile",o.get(),a);c.fonts.add(F);F.loaded.then(e=>{l.set(true);u.trigger();p=a.patch.cgl.patch.loading.finished(p);a.patch.emitEvent("fontLoaded",i.get())},e=>{a.setUiError("loadingerror","Font loading error: "+F.status+"("+o.get()+")");p=a.patch.cgl.patch.loading.finished(p);l.set(true)}).catch(e=>{p=a.patch.cgl.patch.loading.finished(p);console.error("catch ",e)});F.load()}else{const n=a.patch.getFilePath(String(o.get()));const r="".endl()+"@font-face".endl()+"{".endl()+'  font-family: "'+i.get()+'";'.endl()+'  src: url("'+n+'") format("truetype");'.endl()+"}";d=document.createElement("style");d.classList.add("cablesEle");d.type="text/css";d.innerHTML=r;document.getElementsByTagName("head")[document.getElementsByTagName("head").length-1].appendChild(d)}}}};Ops.Html.FontFile_v2.prototype=new CABLES.Op;CABLES.OPS["68177370-116e-4c76-aef3-3b10d68e7227"]={f:Ops.Html.FontFile_v2,objName:"Ops.Html.FontFile_v2"};Ops.Patch.PMZcxaN.ArrayMovingAverage=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger");const s=e.inArray("Array");const l=e.inInt("WindowSize",5);const u=e.inInt("ArraySize (optional)",0);const r=e.inTrigger("Reset");const p=e.outTrigger("Next");const F=e.outArray("AveragedArray");const c=[];let d=null;let A=0;function a(){const t=s.get();const e=Math.max(1,l.get());if(!t){if(d){F.set(d)}else{F.set(new Float32Array(A>0?A:0))}p.trigger();return}let n=t.length;let r=u.get();if(A===0){if(r>0){A=r}else if(n>0){A=n}else{F.set(new Float32Array(0));p.trigger();return}}else{if(r>0&&r!==A){A=r;c.length=0;d=null}}if(A===0){console.warn("Array Size = 0");F.set(new Float32Array(0));p.trigger();return}const a=new Float32Array(A);for(let e=0;e<A;e++){if(e<n){a[e]=t[e]}else{a[e]=0}}c.push(a);while(c.length>e){c.shift()}const o=new Float32Array(A);const i=c.length;if(i>0){for(let n=0;n<A;n++){let t=0;for(let e=0;e<i;e++){t+=c[e][n]}o[n]=t/i}}d=o;F.set(d);p.trigger()}n.onTriggered=()=>{a()};function o(){c.length=0;d=null;A=0}r.onTriggered=o};Ops.Patch.PMZcxaN.ArrayMovingAverage.prototype=new CABLES.Op;CABLES.OPS["00364d0d-dfa9-499b-8e33-44b8a8fce055"]={f:Ops.Patch.PMZcxaN.ArrayMovingAverage,objName:"Ops.Patch.PMZcxaN.ArrayMovingAverage"};Ops.Debug.ConsoleLog=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inFloat("Number",0),r=e.inString("String","");n.onChange=function(){console.log(n.get())};r.onChange=function(){console.log(r.get())}};Ops.Debug.ConsoleLog.prototype=new CABLES.Op;CABLES.OPS["545e7225-73b0-4d40-923b-4b39940403a8"]={f:Ops.Debug.ConsoleLog,objName:"Ops.Debug.ConsoleLog"};Ops.String.Concat_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const r=e.inString("string1","ABC"),a=e.inString("string2","XYZ"),o=e.inValueBool("New Line",false),i=e.inBool("Active",true),s=e.outString("result");o.onChange=a.onChange=r.onChange=i.onChange=n;n();function n(){if(!i.get()){return s.set(r.get())}let e=r.get();let t=a.get();if(!e&&!t){s.set("");return}if(!e)e="";if(!t)t="";let n="";if(e&&t&&o.get())n="\n";s.set(String(e)+n+String(t))}};Ops.String.Concat_v2.prototype=new CABLES.Op;CABLES.OPS["a52722aa-0ca9-402c-a844-b7e98a6c6e60"]={f:Ops.String.Concat_v2,objName:"Ops.String.Concat_v2"};Ops.Gl.Meshes.Sphere_v3=function(){CABLES.Op.apply(this,arguments);const B=this;const e=B.attachments={};const D=Math.PI*2,t=B.inTrigger("render"),f=B.inValue("radius",.5),v=B.inValue("stacks",32),O=B.inValue("slices",32),y=B.inValueSlider("Filloffset",1),n=B.inValueBool("Render",true),r=B.outTrigger("trigger"),I=B.outObject("geometry",null,"geometry"),x=vec3.fromValues(0,1,0),_=vec3.fromValues(1,0,0);let a=null,N=new CGL.Geometry("Sphere"),S=vec3.create(),j=vec3.create(),T=true,M=0,L=true,o=vec3.create(),w=null;i();B.onDelete=function(){if(w)w.dispose()};t.onTriggered=function(){a=B.patch.cg||B.patch.cgl;if(T)s();if(L){a.pushModelMatrix();mat4.scale(a.mMatrix,a.mMatrix,o)}if(n.get())w.render(a.getShader());if(L){a.popModelMatrix()}r.trigger()};v.onChange=O.onChange=y.onChange=()=>{T=true};I.onLinkChanged=f.onChange=()=>{if(I.isLinked())L=false;else L=true;if(L)i();else T=true};function i(){if(L&&M!=1)T=true;vec3.set(o,f.get(),f.get(),f.get())}function s(){const e=Math.ceil(Math.max(v.get(),2)),t=Math.ceil(Math.max(O.get(),3)),n=Math.min(Math.max(y.get()*e,1),e);let r=f.get();if(L)r=1;M=r;let a=[],o=[],i=[],s=[],l=[],u=[],p,F,c,d,A,g,m,C,h,b,E;for(b=m=0;b<e+1;b++){h=(b/e-.5)*Math.PI;F=Math.sin(h);g=Math.cos(h);for(E=t;E>=0;E--){C=E/t*D;p=Math.cos(C)*g;c=Math.sin(C)*g;a.push(p*r,F*r,c*r);o.push(E/t,b/(e+1));d=Math.sqrt(p*p+F*F+c*c);i.push(S[0]=p/d,S[1]=F/d,S[2]=c/d);if(F==d)A=_;else A=x;vec3.cross(j,S,A);vec3.normalize(j,j);Array.prototype.push.apply(s,j);vec3.cross(j,j,S);Array.prototype.push.apply(l,j)}if(b==0||b>n)continue;for(E=0;E<t;E++,m++){u.push(m,m+1,m+t+1,m+1,m+t+2,m+t+1)}m++}N.clear();N.vertices=a;N.texCoords=o;N.vertexNormals=i;N.tangents=s;N.biTangents=l;N.verticesIndices=u;I.setRef(N);if(B.patch.cg)if(!w)w=B.patch.cg.createMesh(N,{opId:B.id});else w.setGeom(N);T=false}};Ops.Gl.Meshes.Sphere_v3.prototype=new CABLES.Op;CABLES.OPS["6ee346d0-614e-4709-91a5-dc21ae975caf"]={f:Ops.Gl.Meshes.Sphere_v3,objName:"Ops.Gl.Meshes.Sphere_v3"};Ops.Number.Number=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("value"),r=e.outNumber("result");n.onChange=a;function a(){r.set(Number(n.get()))}};Ops.Number.Number.prototype=new CABLES.Op;CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};Ops.Color.ColorPalettes=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inValueInt("Index",0);const r=t.outTexture("Texture");const o=t.inValueBool("Smooth");const i=t.outArray("Color Array");let s=document.createElement("canvas");s.id="canvas_"+CABLES.generateUUID();s.width=5;s.height=8;s.style.display="none";let a=document.getElementsByTagName("body")[0];a.appendChild(s);let l=s.getContext("2d");n.onChange=o.onChange=g;let u=[];u.length=5*3;let p=null;g();function F(e){return parseInt(A(e).substring(0,2),16)}function c(e){return parseInt(A(e).substring(2,4),16)}function d(e){return parseInt(A(e).substring(4,6),16)}function A(e=""){return e.charAt(0)=="#"?e.substring(1,7):e}function g(){t.patch.cgl.addNextFrameOnceCallback(m)}function m(){let a=Math.round(n.get())*5;if(a>=C.length-5)a=0;if(a<0)a=0;if(a!=a)a=0;for(let r=0;r<5;r++){let e=F(C[a+r]);let t=c(C[a+r]);let n=d(C[a+r]);u[r*3+0]=e/255;u[r*3+1]=t/255;u[r*3+2]=n/255;l.fillStyle="rgb("+e+","+t+","+n+")";l.fillRect(s.width/5*r,0,s.width/5,s.height)}let e=CGL.Texture.FILTER_NEAREST;if(o.get())e=CGL.Texture.FILTER_LINEAR;if(p==e&&r.get())r.get().initTexture(s,e);else r.set(new CGL.Texture.createFromImage(t.patch.cgl,s,{filter:e}));i.set(null);i.set(u);r.get().unpackAlpha=false;p=e}t.onDelete=function(){s.remove()};const C=["#E6E2AF","#A7A37E","#EFECCA","#046380","002F2F","#468966","#FFF0A5","#FFB03B","#B64926","8E2800","#FCFFF5","#D1DBBD","#91AA9D","#3E606F","193441","#FF6138","#FFFF9D","#BEEB9F","#79BD8F","00A388","#105B63","#FFFAD5","#FFD34E","#DB9E36","BD4932","#225378","#1695A3","#ACF0F2","#F3FFE2","EB7F00","#2C3E50","#E74C3C","#ECF0F1","#3498DB","2980B9","#000000","#263248","#7E8AA2","#FFFFFF","FF9800","#004358","#1F8A70","#BEDB39","#FFE11A","FD7400","#DC3522","#D9CB9E","#374140","#2A2C2B","1E1E20","#7D8A2E","#C9D787","#FFFFFF","#FFC0A9","FF8598","#B9121B","#4C1B1B","#F6E497","#FCFAE1","BD8D46","#2E0927","#D90000","#FF2D00","#FF8C00","04756F","#595241","#B8AE9C","#FFFFFF","#ACCFCC","8A0917","#10222B","#95AB63","#BDD684","#E2F0D6","F6FFE0","#F6F792","#333745","#77C4D3","#DAEDE2","EA2E49","#703030","#2F343B","#7E827A","#E3CDA4","C77966","#2F2933","#01A2A6","#29D9C2","#BDF271","FFFFA6","#D8CAA8","#5C832F","#284907","#382513","363942","#FFF8E3","#CCCC9F","#33332D","#9FB4CC","DB4105","#85DB18","#CDE855","#F5F6D4","#A7C520","493F0B","#04BFBF","#CAFCD8","#F7E967","#A9CF54","588F27","#292929","#5B7876","#8F9E8B","#F2E6B6","412A22","#332532","#644D52","#F77A52","#FF974F","A49A87","#405952","#9C9B7A","#FFD393","#FF974F","F54F29","#2B3A42","#3F5765","#BDD4DE","#EFEFEF","FF530D","#962D3E","#343642","#979C9C","#F2EBC7","348899","#96CA2D","#B5E655","#EDF7F2","#4BB5C1","7FC6BC","#1C1D21","#31353D","#445878","#92CDCF","EEEFF7","#3E454C","#2185C5","#7ECEFD","#FFF6E5","FF7F66","#00585F","#009393","#FFFCC4","#F0EDBB","FF3800","#B4AF91","#787746","#40411E","#32331D","C03000","#63A69F","#F2E1AC","#F2836B","#F2594B","CD2C24","#88A825","#35203B","#911146","#CF4A30","ED8C2B","#F2385A","#F5A503","#E9F1DF","#4AD9D9","36B1BF","#CFC291","#FFF6C5","#A1E8D9","#FF712C","695D46","#FF5335","#B39C85","#306E73","#3B424D","1D181F","#000000","#333333","#FF358B","#01B0F0","AEEE00","#E8E595","#D0A825","#40627C","#26393D","FFFAE4","#E7E8D1","#D3CEAA","#FBF7E4","#424242","8E001C","#354242","#ACEBAE","#FFFF9D","#C9DE55","7D9100","#2F2933","#01A2A6","#29D9C2","#BDF271","FFFFA6","#DDDCC5","#958976","#611427","#1D2326","6A6A61","#6C6E58","#3E423A","#417378","#A4CFBE","F4F7D9","#E1E6FA","#C4D7ED","#ABC8E2","#375D81","183152","#6B0C22","#D9042B","#F4CB89","#588C8C","011C26","#304269","#91BED4","#D9E8F5","#FFFFFF","F26101","#96CEB4","#FFEEAD","#FF6F69","#FFCC5C","AAD8B0","#B0CC99","#677E52","#B7CA79","#F6E8B1","89725B","#334D5C","#45B29D","#EFC94C","#E27A3F","DF5A49","#16193B","#35478C","#4E7AC7","#7FB2F0","ADD5F7","#00261C","#044D29","#168039","#45BF55","96ED89","#36362C","#5D917D","#A8AD80","#E6D4A7","825534","#F9E4AD","#E6B098","#CC4452","#723147","31152B","#2C3E50","#FC4349","#D7DADB","#6DBCDB","FFFFFF","#002635","#013440","#AB1A25","#D97925","EFE7BE","#FF8000","#FFD933","#CCCC52","#8FB359","192B33","#272F32","#9DBDC6","#FFFFFF","#FF3D2E","DAEAEF","#B8ECD7","#083643","#B1E001","#CEF09D","476C5E","#002F32","#42826C","#A5C77F","#FFC861","C84663","#5C4B51","#8CBEB2","#F2EBBF","#F3B562","F06060","#5A1F00","#D1570D","#FDE792","#477725","A9CC66","#5E0042","#2C2233","#005869","#00856A","8DB500","#52656B","#FF3B77","#CDFF00","#FFFFFF","B8B89F","#801637","#047878","#FFB733","#F57336","C22121","#730046","#BFBB11","#FFC200","#E88801","C93C00","#24221F","#363F45","#4B5F6D","#5E7C88","FEB41C","#E64661","#FFA644","#998A2F","#2C594F","002D40","#C24704","#D9CC3C","#FFEB79","#A0E0A9","00ADA7","#484A47","#C1CE96","#ECEBF0","#687D77","353129","#588C7E","#F2E394","#F2AE72","#D96459","8C4646","#BAB293","#A39770","#EFE4BD","#A32500","2B2922","#6A7059","#FDEEA7","#9BCC93","#1A9481","003D5C","#174C4F","#207178","#FF9666","#FFE184","F5E9BE","#D5FBFF","#9FBCBF","#647678","#2F3738","59D8E6","#DB5800","#FF9000","#F0C600","#8EA106","59631E","#450003","#5C0002","#94090D","#D40D12","FF1D23","#211426","#413659","#656F8C","#9BBFAB","F2EFDF","#EA6045","#F8CA4D","#F5E5C0","#3F5666","2F3440","#F2F2F2","#C6E070","#91C46C","#287D7D","1C344D","#334D5C","#45B29D","#EFC94C","#E27A3F","DF5A49","#705B35","#C7B07B","#E8D9AC","#FFF6D9","570026","#F7F2B2","#ADCF4F","#84815B","#4A1A2C","8E3557","#1A1F2B","#30395C","#4A6491","#85A5CC","D0E4F2","#25064D","#36175E","#553285","#7B52AB","9768D1","#004056","#2C858D","#74CEB7","#C9FFD5","FFFFCB","#CFCA4C","#FCF5BF","#9FE5C2","#5EB299","745A33","#776045","#A8C545","#DFD3B6","#FFFFFF","0092B2","#CC3910","#F1F2C0","#CCC59E","#8FA68E","332F29","#FF6600","#C13B00","#5E6D70","#424E4F","1B1D1E","#690011","#BF0426","#CC2738","#F2D99C","E5B96F","#1B1D26","#425955","#778C7A","#F1F2D8","BFBD9F","#F6B1C3","#F0788C","#DE264C","#BC0D35","A20D1E","#597533","#332F28","#61B594","#E6DEA5","C44E18","#3FB8AF","#7FC7AF","#DAD8A7","#FF9E9D","FF3D7F","#0F2D40","#194759","#296B73","#3E8C84","D8F2F0","#42282F","#74A588","#D6CCAD","#DC9C76","D6655A","#002A4A","#17607D","#FFF1CE","#FF9311","D64700","#003056","#04518C","#00A1D9","#47D9BF","F2D03B","#13140F","#D4FF00","#E4FFE6","#68776C","00D6DD","#FCFAD0","#A1A194","#5B605F","#464646","A90641","#289976","#67CC8E","#B1FF91","#FFE877","FF5600","#302B1D","#3F522B","#737D26","#A99E46","D9CB84","#56626B","#6C9380","#C0CA55","#F07C6C","AD5472","#32450C","#717400","#DC8505","#EC5519","BE2805","#C7B773","#E3DB9A","#F5FCD0","#B1C2B3","778691","#E83A25","#FFE9A3","#98CC96","#004563","191B28","#3399CC","#67B8DE","#91C9E8","#B4DCED","E8F8FF","#1A212C","#1D7872","#71B095","#DEDBA7","D13F32","#7D2A35","#CC9258","#917A56","#B4BA6C","FEFFC2","#E7E9D1","#D3D4AA","#FCFAE6","#444444","901808","#FFFFFF","#AEAEAE","#E64C66","#2D3E50","1BBC9B","#E0FFB3","#61C791","#31797D","#2A2F36","F23C55","#EB5937","#1C1919","#403D3C","#456F74","D3CBBD","#E6DD00","#8CB302","#008C74","#004C66","332B40","#14A697","#F2C12E","#F29D35","#F27649","F25252","#261822","#40152A","#731630","#CC1E2C","FF5434","#261F27","#FEE169","#CDD452","#F9722E","C9313D","#5C4B51","#8CBEB2","#F2EBBF","#F3B562","F06060","#2F3837","#C5C7B6","#FFF8D3","#4C493E","222028","#E3CBAC","#9C9985","#C46D3B","#788880","324654","#3F0B1B","#7A1631","#CF423C","#FC7D49","FFD462","#14212B","#293845","#4F6373","#8F8164","D9D7AC","#98A89E","#BAC0AC","#FAFAC6","#FF4411","D40015","#FEFFFF","#3C3F36","#9FB03E","#EBE9DC","72918B","#CC6B32","#FFAB48","#FFE7AD","#A7C9AE","888A63","#262526","#404040","#8C8979","#F2F2F2","F60A20","#00305A","#004B8D","#0074D9","#4192D9","7ABAF2","#0C273D","#54D0ED","#FFFEF1","#70B85D","2C5E2E","#4C1B33","#EFE672","#98A942","#2D6960","141D14","#2F3540","#666A73","#F2EDE4","#D9D1C7","8C8681","#0D1F30","#3B6670","#8BADA3","#F0E3C0","DB6C0F","#FFBC67","#DA727E","#AC6C82","#685C79","455C7B","#092140","#024959","#F2C777","#F24738","BF2A2A","#133463","#365FB7","#799AE0","#F4EFDC","BA9B65","#C4D4CB","#55665E","#30282A","#542733","E84167","#CDDEC6","#4DAAAB","#1E4F6A","#2A423C","93A189","#EF5411","#FA5B0F","#FF6517","#FF6D1F","FF822E","#41434A","#6E9489","#DEDCC3","#F2F1E9","877963","#292929","#2BBFBD","#F2B33D","#F29B30","F22E2E","#F2385A","#F5A503","#E9F1DF","#56D9CD","3AA1BF","#D5F8B4","#A6E3A8","#8A9A85","#7E566B","422335","#3CBAC8","#93EDD4","#F3F5C4","#F9CB8F","F19181","#979926","#38CCB5","#EEFF8E","#FFD767","CC2A09","#404040","#024959","#037E8C","#F2EFDC","F24C27","#94B34D","#D3FF82","#363D52","#121D2B","111B1C","#282E33","#25373A","#164852","#495E67","FF3838","#313732","#8AA8B0","#DEDEDE","#FFFFFF","F26101","#FFFFFF","#E5E1D1","#52616D","#2C343B","C44741","#FFF6B8","#ABCCA7","#403529","#7A5E2F","A68236","#4F1025","#C5003E","#D9FF5B","#78AA00","15362D","#49404F","#596166","#D1FFCD","#A9BD8B","948A54","#FF2151","#FF7729","#FFAD29","#FFEBCA","1AB58A","#73603D","#BF8A49","#F2CA80","#5E5A59","0D0D0D","#3D4C53","#70B7BA","#F1433F","#E7E1D4","FFFFFF","#006D8D","#008A6E","#549E39","#8AB833","C0CF3A","#BDDFB3","#2BAA9C","#2F2E2E","#0F2625","465F3F","#F2F2F2","#BF0404","#8C0303","#590202","400101","#76A19A","#272123","#A68D60","#B0C5BB","D9593D","#0E3D59","#88A61B","#F29F05","#F25C05","D92525","#C1E1ED","#76C7C6","#273D3B","#131A19","E35C14","#2D112C","#530031","#820233","#CA293E","EF4339","#AF7575","#EFD8A1","#BCD693","#AFD7DB","3D9CA8","#D74B4B","#DCDDD8","#475F77","#354B5E","FFFFFF","#FFF6C9","#C8E8C7","#A4DEAB","#85CC9F","499E8D","#229396","#8BA88F","#C7C5A7","#F0DFD0","F23C3C","#57385C","#A75265","#EC7263","#FEBE7E","FFEDBC","#96526B","#D17869","#EBAD60","#F5CF66","8BAB8D","#0D1C33","#17373C","#2B6832","#4F9300","A1D700","#1B2B32","#37646F","#A3ABAF","#E1E7E8","B22E2F","#C5D9B2","#53A194","#572C2C","#3D2324","695A3B","#425957","#81AC8B","#F2E5A2","#F89883","D96666","#002E40","#2A5769","#FFFFFF","#FABD4A","FA9600","#FFFEFC","#E2E3DF","#515B5E","#2E3233","CAF200","#FFF0A3","#B8CC6E","#4B6000","#E4F8FF","004460","#3B596A","#427676","#3F9A82","#A1CD73","ECDB60","#F2E6CE","#8AB39F","#606362","#593325","1D1D1F","#212B40","#C2E078","#FFFFFF","#BADCDD","547B97","#0B3C4D","#0E5066","#136480","#127899","1A8BB3","#222130","#464D57","#D4E8D3","#FFFCFB","ED8917","#B33600","#FF8A00","#FFC887","#CC5400","B31E00","#012530","#28544B","#ACBD86","#FFD6A0","FF302C","#2E95A3","#50B8B4","#C6FFFA","#E2FFA8","D6E055","#112F41","#068587","#4FB99F","#F2B134","ED553B","#202B30","#4E7178","#4FA9B8","#74C0CF","F1F7E2","#302B2F","#696153","#FFA600","#9BB58F","FFD596","#458C6B","#F2D8A7","#D9A86C","#D94436","A62424","#22475E","#75B08A","#F0E797","#FF9D84","FF5460","#FFAA5C","#DA727E","#AC6C82","#685C79","455C7B","#686E75","#9BAAC1","#82787B","#E4F1DB","AAC19B","#F0C755","#E2AD3B","#BF5C00","#901811","5C110F","#FFFBDC","#BFBCA5","#7F7D6E","#3F3E37","E5E2C6","#BEBEBE","#F1E4D8","#594735","#94C7BA","D8F1E4","#1B1E26","#F2EFBD","#B6D051","#70A99A","2F6D7A","#F7E4A2","#A7BD5B","#DC574E","#8DC7B8","ED9355","#70E8CB","#FFE9C7","#FF5B5B","#545454","2D2D2F","#17111A","#321433","#660C47","#B33467","CCBB51","#2B2E2E","#595855","#A2ABA5","#CAE6E8","313F54","#023B47","#295E52","#F2E085","#FCAB55","EE7F38","#302C29","#D1D1BC","#A7C4BB","#6C8C84","466964","#212629","#067778","#49B8A8","#85EDB6","D9E5CD","#334D5C","#45B29D","#EFC94C","#E27A3F","DF4949","#2C3E50","#FC4349","#6DBCDB","#D7DADB","FFFFFF","#35262D","#FFFBFF","#E8ECED","#A4B7BB","76A0B0","#61E8D2","#FCEEB9","#302F25","#704623","BBE687","#E1E6B9","#C4D7A4","#ABC8A4","#375D3B","183128","#C98B2F","#803C27","#C56520","#E1B41B","807916","#A3D9B0","#93BF9E","#F2F0D5","#8C8474","40362E","#524656","#CF4747","#EA7A58","#E4DCCB","A6C4BC","#5C2849","#A73E5C","#EC4863","#FFDA66","1FCECB","#0EEAFF","#15A9FA","#1B76FF","#1C3FFD","2C1DFF","#010000","#393845","#9B96A3","#5C0009","940315","#468071","#FFE87A","#FFCA53","#FF893B","E62738","#404040","#024959","#037E8C","#F2EFDC","F24C27","#FF765E","#C2AE8B","#FCCF65","#FFE5C6","B7BDC4","#003647","#00717D","#F2D8A7","#A4A66A","515932","#FAFAC0","#C4BE90","#8C644C","#594D37","293033","#2B3A42","#3F5765","#BDD4DE","#EFEFEF","E74C3C","#3B3B3B","#A8877E","#FFA49D","#FF7474","FF476C","#0A3A4A","#196674","#33A6B2","#9AC836","D0E64B","#FFA340","#38001C","#571133","#017A74","00C2BA","#DCEBDD","#A0D5D6","#789AA1","#304345","AD9A27","#588C7E","#F2E394","#F2AE72","#D96459","8C4646","#F0E6B1","#B5D6AA","#99A37A","#70584B","3D3536","#2F400D","#8CBF26","#A8CA65","#E8E5B0","419184","#010712","#13171F","#1C1F26","#24262D","961227","#403F33","#6E755F","#AFC2AA","#FFDEA1","E64C10","#C74029","#FAE8CD","#128085","#385052","F0AD44","#CFF09E","#A8DBA8","#79BD9A","#3B8686","0B486B","#E0401C","#E6B051","#272F30","#F7EDB7","9E2B20","#FFE2C5","#FFEEDD","#FFDDAA","#FFC484","FFDD99","#FFFFE4","#F2E5BD","#B9BF8E","#A69F7C","8C6865","#5C8A2D","#AFD687","#FFFFFF","#00C3A9","008798","#4F3130","#FF1F3D","#5BE3E3","#FDFFF1","8B9698","#D23600","#D95100","#DE6D00","#EE8900","FCA600","#FFFFFA","#A1A194","#5B605F","#464646","FF6600","#F34A53","#FAE3B4","#AAC789","#437356","1E4147","#2A7A8C","#176273","#063540","#E6D9CF","403D3A","#21455B","#567D8C","#A59E8C","#8C8372","F2F2F2","#012340","#026873","#83A603","#BBBF45","F2F0CE","#FDFF98","#A7DB9E","#211426","#6B073B","DA8C25","#002F36","#142426","#D1B748","#EDDB43","FFFD84","#420000","#600000","#790000","#931111","BF1616","#3C989E","#5DB5A4","#F4CDA5","#F57A82","ED5276","#23A38F","#B7C11E","#EFF1C2","#F0563D","2E313D","#F5ECD9","#2BACB5","#B4CCB9","#E84D5B","3B3B3B","#A5EB3C","#60C21E","#159E31","#53DB50","C5FFCB","#263138","#406155","#7C9C71","#DBC297","FF5755","#0A111F","#263248","#7E8AA2","#E3E3E3","C73226","#003B59","#00996D","#A5D900","#F2E926","FF930E","#00A19A","#04BF9D","#F2E85C","#F53D54","404040","#324152","#47535E","#796466","#C1836A","DEA677","#036F73","#84CDC2","#FEF2D8","#F18C79","EF504F","#174040","#888C65","#D9CA9C","#D98162","A65858","#56797F","#87A0A4","#FCFBDC","#F2DDB6","A6937C","#A8BAA9","#FFF5CF","#DBCDAD","#B39C7D","806854","#60655F","#AB9675","#FFE0C9","#D4CCBA","CF8442","#BDDFB3","#009D57","#2C372E","#0F2925","465F3F","#3E3947","#735360","#D68684","#F1B0B0","EBD0C4","#0A7B83","#2AA876","#FFD265","#F19C65","CE4D45","#FFFFFF","#F4921E","#858585","#C5D2DB","3E6B85","#11151E","#212426","#727564","#B9AA81","690C07","#000000","#910000","#CBB370","#FFFBF1","21786C","#F78F00","#C43911","#75003C","#37154A","0F2459","#003354","#91BED4","#D9E8F5","#FFFFFF","F26101","#3DA8A4","#7ACCBE","#FFFFF7","#FF99A1","FF5879","#64C733","#F0F0F0","#3E879E","#57524D","36302B","#343844","#2AB69D","#E65848","#FDC536","FCF2D7","#E34517","#F5FF53","#B4E85E","#00BD72","0B4239","#A84B3A","#FF9F67","#233138","#FFF7F5","4C646B","#59535E","#FAEEFF","#F1BAF3","#5D4970","372049","#FF6F22","#D9984F","#FFE8A9","#3E4237","32948A","#5D7370","#7FA6A1","#B8D9B8","#D6EDBD","FFF5BC","#FFBE00","#FFDC00","#FFD10F","#FFDE20","E8CA00","#003840","#005A5B","#007369","#008C72","02A676","#E1E6FA","#C4D7ED","#ABC8E2","#375D81","183152","#BA2F1D","#FFF8A4","#F5E67F","#264A59","1E2C30","#222526","#FFBB6E","#F28D00","#D94F00","80203B","#EBD096","#D1B882","#5D8A66","#1A6566","21445B","#F00807","#5F6273","#A4ABBF","#CCC9D1","E2E1E9","#DFE0AF","#A4BAA2","#569492","#41505E","383245","#152737","#2B4E69","#799AA5","#FFFFF0","682321","#C44C51","#FFB6B8","#FFEFB6","#A2B5BF","5F8CA3","#5ADED4","#4DAAAB","#26596A","#163342","6C98A1","#FF5B2B","#B1221C","#34393E","#8CC6D7","FFDA8C","#3D4D4D","#99992E","#E6E666","#F2FFBF","800033","#242424","#437346","#97D95C","#D9FF77","E9EB9B","#FFEBB0","#FFB05A","#F84322","#C33A1A","9F3818","#4D2B2F","#E57152","#E8DE67","#FFEFC3","C0CCAB","#A82221","#DB5E31","#EDA23E","#F2CB67","BFB840","#3B3140","#BFB8A3","#F2E0C9","#F2B9AC","D97E7E","#43464D","#9197A6","#D3DCF2","#7690CF","48577D","#EFDFBB","#9EBEA6","#335D6A","#D64F2A","7A8A7F","#000001","#313634","#C7CECF","#5C0402","941515","#334D5C","#45B29D","#EFC94C","#E27A3F","DF5A49","#F5F4E1","#D6C9B5","#B4AA97","#D44917","82877A","#19162B","#1C425C","#6ABDC4","#F0E4C5","D6C28F","#00132B","#7F9DB0","#C5E2ED","#FFFFFF","F95900","#1F3642","#6D968D","#B6CCB8","#FFE2B3","56493F","#08A689","#82BF56","#C7D93D","#E9F2A0","F2F2F2","#DE3961","#A4E670","#FFFFDC","#B3EECC","00ADA7","#849972","#D9D094","#A6A23E","#4F2F1D","8F5145","#F41C54","#FF9F00","#FBD506","#A8BF12","00AAB5","#00585F","#009393","#F5F3DC","#454445","FF5828","#FF6138","#FFFF9D","#BEEB9F","#79BD8F","00A388","#140B04","#332312","#B59D75","#E3D2B4","FFF7EA","#ED3B3B","#171F26","#77B59C","#F2E7B1","635656","#46594B","#A6977C","#D9B384","#734F30","260B01","#CCB8A3","#FF8FB1","#FFF5EA","#4E382F","B29882","#B70000","#FFFFFF","#FFCA3D","#94C4F4","0092B3","#053B44","#06736C","#A53539","#B9543C","EAD075","#E8C1B9","#FFB3AB","#FFCAB8","#E8B69C","FFCEAB","#E7F2DF","#69043B","#59023B","#231E2D","161726","#E82B1E","#E5DEAF","#A0B688","#557A66","453625","#F1E6D4","#BA3D49","#791F33","#9F9694","E3E1DC","#CED59F","#F1EDC0","#B1BEA4","#647168","282828","#2C3E50","#E74C3C","#ECF0F1","#3498DB","646464","#DE7047","#FFDE8D","#FFFFFF","#CDDE47","528540","#8EAB99","#40232B","#D95829","#D97338","DEC085","#E9662C","#EBAF3C","#00AC65","#068894","2B2B2B","#46483C","#A0AA8F","#EBE3CB","#FFFFFF","F26101","#170F0E","#290418","#505217","#FFD372","FFF1AF","#263545","#C4273C","#D7DADB","#6DBCDB","FFFFFF","#DCFAC0","#B1E1AE","#85C79C","#56AE8B","00968B","#075807","#097609","#70AF1A","#B9D40B","E5EB0B","#521000","#712800","#744E1D","#879666","F1D98C","#261F26","#3F3B40","#6C7367","#BFBF8A","F2E086","#2C3E50","#FC4349","#D7DADB","#6DBCDB","FFFFFF","#506D7D","#94CCB9","#FFECA7","#FFB170","F07D65","#3F4036","#8DA681","#F2E1C2","#BF2806","8C1D04","#990700","#CC542E","#FF964F","#FFCB7C","787730","#195073","#7F8C1F","#EE913F","#F2E5BD","9FD7C7","#1B3E59","#F2F0F0","#FFAC00","#BF0404","730202","#EA6045","#F8CA4D","#F5E5C0","#3F5666","2F3440","#F95759","#FDA099","#FFFFFF","#D9F3CB","8AC2B0","#265573","#386D73","#81A68A","#9FBF8F","D4D9B0","#E1DA36","#FFEA1B","#6FE4DA","#1DB0BC","007BBC","#013859","#185E65","#F9CC7F","#F15C25","9E1617","#36CC7C","#D6FFBE","#94D794","#228765","77A668","#94201F","#D4421F","#478A80","#D9E061","F08835","#F16233","#00B5B5","#F0F0F0","#3E4651","5C6D7E","#2E806C","#76CC99","#E0FFED","#FF5F3A","D2413C","#00393B","#00766C","#44A18E","#E5EDB6","F6695B","#734854","#F2F2E9","#D9D7C5","#A69580","736766","#03497E","#0596D5","#9DEBFC","#8D7754","FEB228","#F0E14C","#FFBB20","#FA7B12","#E85305","59CC0D","#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","83AF9B","#00557C","#186D94","#3488AD","#81C1DC","BBE5F3","#DEE8D7","#918773","#420A1A","#240001","4D493A","#FFFFFF","#CAC535","#97AF25","#158471","41342C","#041F3D","#0B2E41","#165751","#448C61","9AC16D","#FA8C01","#FF6405","#577700","#082400","A0A600","#78C0F9","#FFDDCE","#FFFFFF","#FFDBE6","FE86A4","#351330","#CC2A41","#E7CAA4","#759A8A","524549","#02151A","#043A47","#087891","#C8C8C8","B31D14","#F34A53","#FAE3B4","#AAC789","#437356","1E4147","#58838C","#DAD7C7","#BF996B","#BF5841","A61C1C","#556354","#E68F0D","#8C948A","#495450","42423F","#323640","#5B6470","#8C94A1","#BDC7D6","DFE2FF","#FF0000","#FF950B","#2FA88C","#DEEB00","4B2C04","#0F3D48","#174C5B","#366774","#ECECE7","E96151","#3DBB7E","#A3CD39","#FBAC1D","#F96C1E","EE4036","#23363B","#A44F3F","#F8983D","#8D9151","BBC946","#4B5657","#969481","#D2C9B0","#F4E3C1","B6B835","#E8980C","#B1F543","#F2FF00","#FF5E00","59BBAB","#849696","#FEFFFB","#232D33","#17384D","FF972C","#555555","#7BB38E","#F4F1D7","#F8AB65","F15C4C","#1D3C42","#67BFAD","#F2EC99","#F2C48D","F25050","#334D5C","#45B29D","#EFC94C","#E27A3F","DF4949","#B8E1F2","#249AA7","#ABD25E","#F8C830","F1594A","#FDEDD0","#BCF1ED","#FF634D","#FD795B","FFF0AA","#FFFFFF","#E5E1D1","#52616D","#2C343B","C44741","#FFFFF1","#D5FF9B","#8FB87F","#5A7B6C","374E5A","#010340","#0E1E8C","#0003C7","#1510F0","1441F7","#002A4A","#17607D","#FFF1CE","#FF9311","E33200","#871E31","#CCC097","#9E9D7B","#687061","262626","#F16663","#F48D6C","#F2E07B","#8ABE9B","4A6D8B","#001F11","#204709","#0C8558","#FFD96A","FF4533","#1D1626","#F2E0BD","#BFAA8F","#8C786C","594C4C","#685D47","#913420","#1E2729","#C1D9C5","FEEFB1","#1D7561","#FC8448","#FF4138","#A8282B","38141B","#BF0633","#FF484E","#FF9273","#D1D0B4","E5ECED","#8E9E63","#E6DBB0","#F5EED7","#C4BCA0","176573","#665446","#809994","#AECCB6","#DEF2C4","E6683F","#3D0D26","#660A3E","#891C56","#B0276F","C93482","#082136","#00294D","#004B8D","#0068C4","2998FF","#3C4631","#9A746F","#F8A2AB","#F1C6B3","EAE9C0","#FF534E","#FFD7AC","#BED194","#499989","176785","#006D80","#BDA44D","#3C2000","#84CECC","78A419","#352C2B","#3C555C","#9E9657","#FFEBCD","CD5510","#2C3E50","#FC4349","#6DBCDB","#D7DADB","FFFFFF","#523631","#D1BE91","#605E3A","#4D462F","592F39","#18293B","#5B5A56","#F2DEA0","#D0B580","FFFBFF","#C8DBB6","#ECEBB7","#CCC68A","#B8B165","827A5D ","#7DA88C","#EBE9A0","#BED24B","#859132","35323C","#E8574C","#F27B29","#E6A51B","#D9CC3C","399977","#324032","#B7C22C","#FFFFE1","#22A8B5","2A3F42","#B3A589","#FFB896","#FFF9B1","#9AB385","11929E","#272433","#343F4F","#3D6066","#77994D","B2D249","#250701","#6D4320","#B0925F","#E7DEC0","82ABB8","#023550","#028A9E","#04BFBF","#EFEFEF","FF530D","#594732","#40342A","#7A422E","#D4CA9A","EDE5AE","#013C4D","#BA5B22","#DB913C","#F0B650","FAD46B","#143840","#5C6B63","#A69E89","#E0C297","D96523","#3FB8AF","#7FC7AF","#DAD8A7","#FFB38B","FF3F34","#CA3995","#F58220","#FFDF05","#BED73D","61BC46","#FFE1D0","#FFBFB4","#FF837E","#FF4242","BF1616","#C4EEFF","#7BA32D","#094201","#A41717","C48726","#001325","#187072","#90BD90","#D7D8A2","F2E4C2","#1A4F63","#068587","#6FB07F","#FCB03C","FC5B3F","#97B350","#333230","#736D61","#BAAB90","FFE5BA","#403D33","#807966","#CCC2A3","#8C0000","590000","#5F8A42","#86AD59","#F6FAA1","#F28410","D66011","#BF355D","#ED8168","#FAB66A","#F2DC86","83BFA1","#E1F03E","#FFBA14","#DB3A0F","#A1003D","630024","#212226","#45433F","#687067","#BDBB99","F0EAC3","#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","83AF9B","#293B47","#5F7A87","#FFFFFF","#CBFF48","00ADA9","#282A33","#697371","#FFE7A6","#F5BA52","FA8000","#0C304A","#2B79A1","#F3F4F1","#85A71E","BFD841","#008B83","#4DAE83","#A0AE79","#FFE499","FF665E","#5D7359","#E0D697","#D6AA5C","#8C5430","661C0E","#324452","#97BDBF","#F2DFBB","#F28705","BF3604","#EEEFB9","#6ACFAE","#369C93","#232928","B03831","#332F45","#015770","#2A8782","#9FD6AE","FFFED2","#2B2830","#5C504F","#ABAB8E","#D9D7A3","C7BE88","#DC941B","#EDC266","#B6952C","#E1D3A6","E9A119","#00305A","#00448D","#0074D9","#4192D9","7ABAF2","#344459","#485F73","#5DA6A6","#A9D9CB","F2EAD0","#060719","#4D1B2F","#9E332E","#EB6528","FC9D1C","#96CEB4","#FFEEAD","#FF6F69","#FFCC5C","AAD8B0","#05F2F2","#04BFBF","#EEF1D9","#A60201","7E100E","#E6F1F5","#636769","#AAB3B6","#6E7476","4B4E50","#DA0734","#F1A20D","#4AABB1","#FCF3E7","3F1833","#202D44","#FC4349","#6DBCDB","#D7DADB","FFFFFF","#CC3B37","#398899","#FFFCE8","#FF857F","CCC1A3","#5DBEA9","#EFEDDF","#EF7247","#4E3F35","D1CBBA","#FFC62D","#E49400","#DD5200","#EFE38A","91B166","#B67D14","#F2921F","#F0B23E","#A62409","441208","#C71B1B","#D6BA8A","#017467","#E08F23","0B0D0C","#474143","#A69E9D","#E7E2DA","#FFFFFF","E7E8E7","#435772","#2DA4A8","#FEAA3A","#FD6041","CF2257","#6DD19D","#99E89D","#D0E8A1","#FFF9C0","D40049","#FAF1D5","#DEC9AC","#CCA18B","#11282D","A5C4BB","#000000","#141414","#1C1919","#1A1716","24201F","#D5D8DD","#5CA2BE","#135487","#2A4353","989DA4","#73161E","#BF0F30","#BFB093","#037F8C","0A2140","#195962","#F56F6C","#FFFFFF","#252932","191C21","#F8EFB6","#FEBAC5","#6CD1EA","#FACFD7","C2EAE9","#91D6BC","#768C6A","#755F31","#B37215","FFBA4B","#F2E6BB","#DD4225","#202724","#63BD99","F8FDD8","#762B1B","#807227","#CCBF7A","#FFEF98","60B0A1","#707864","#C1D74E","#F5FF7C","#DFE6B4","A6B89C","#FFF3D2","#97B48F","#E87657","#FF9B6F","E8D495","#33262E","#733230","#CC5539","#E6D27F","86A677","#122430","#273E45","#FFFCE2","#EBD2B5","E63531","#30394F","#FF434C","#6ACEEB","#EDE8DF","FFFBED","#0A3A4A","#196A73","#32A6A6","#A1BF36","C8D94A","#FFF7CC","#CCC28F","#70995C","#33664D","142933","#43464D","#9197A6","#D3DCF2","#7690CF","48577D","#DFE0AF","#A4BAA2","#569492","#41505E","383245","#B52841","#FFC051","#FF8939","#E85F4D","590051","#473C35","#A36D5C","#9C968B","#D9CEAD","8A866A","#DB4C39","#2D3638","#109489","#44D487","D0DB86","#6F8787","#AEC2AE","#E6DFAE","#B0B57B","888F51","#C8385A","#FFCF48","#ECEABE","#1FCECB","1CA9C9","#42282E","#75A48B","#D9CFB0","#DC9B74","D6665A","#362F2D","#4C4C4C","#94B73E","#B5C0AF","FAFDF2","#98293A","#B14A58","#C86C6B","#DE9D76","EFC77F","#C1D301","#76AB01","#0E6A00","#083500","042200","#453F22","#7A6B26","#CCAD5C","#A1191F","4E1716","#541E32","#8E3557","#88A33E","#C2BD86","F7F2B2","#2B1B2E","#54344D","#FFFFD6","#B89E95","6E444F","#6EC1A5","#9FBEA6","#F5D3A3","#FF9F88","FB7878","#2F252C","#D3CCB2","#99AD93","#6E6751","5C3122","#BE333F","#F2E9CE","#C8C5B1","#939F88","307360","#F0F1F2","#232625","#647362","#B3D929","D2D9B8","#FA2B31","#FFBF1F","#FFF146","#ABE319","00C481","#09455C","#527E7C","#F5FFCC","#E0EB6E","C4D224","#F2DA91","#F2B950","#F29D35","#D96704","BF4904","#A2CFA5","#E0E7AB","#F5974E","#E96B56","D24344","#150033","#310D42","#5C2445","#AB6946","FFCE4C","#23A38F","#B7C11E","#EFF1C2","#F0563D","2E313D","#FF2468","#E0D4B1","#FFFFE3","#00A5A6","005B63","#65A683","#218777","#3F585F","#47384D","F53357","#000623","#28475C","#4A6C74","#8BA693","F0E3C0","#E65322","#D19552","#B8BF73","#B6DB83","FFF991","#112F41","#068587","#6FB07F","#FCB03C","FC5B3F","#C89B41","#A16B2B","#77312B","#1C2331","152C52","#C24366","#D9C099","#FFF8D8","#A8E0BA","00ADA7","#CC0000","#006600","#FFFFEC","#9C9178","6C644F","#3D0319","#720435","#C1140E","#FC5008","32241B","#CFC7A4","#5A9E94","#005275","#002344","A38650","#FFEBC3","#CC3A00","#FF3600","#FF851B","800C00","#EFC164","#F3835D","#F35955","#286275","00434C","#E9F29D","#B7C29D","#878E8F","#67617A","51456B","#445859","#03A696","#49C4BE","#F1F2E4","FF7746","#FA726C","#FFD794","#BAD174","#3BA686","5F6F8C","#4D2B1F","#635D61","#7992A2","#97BFD5","BFDCF5","#CC4D00","#E6CF73","#668059","#264D4D","00CCB3","#4385F5","#DC4437","#FCBE1F","#109D59","FFFFFF","#271F2E","#A4A680","#F2EBC9","#D9B166","A66B38","#0B2C3C","#FF6666","#DADFE1","#FFFFFF","444444","#CFF09E","#A8DBA8","#79BD9A","#3B8686","0B486B","#302B26","#A6B827","#EDE9DD","#98D3D4","594E7A","#4B0505","#720707","#BFB694","#004659","00292B","#B52C38","#EBD1B0","#536682","#D9964B","DE6846","#F2F1DF","#F2B705","#F2C84B","#BF820F","734002","#26140C","#3D2216","#784E3D","#AB8574","D6BCB1","#26221D","#8C2C0F","#E6E5B8","#BFB38D","402D1F","#1F8181","#F2BC79","#F28972","#BF1B39","730240","#002635","#013440","#AB1A25","#D97925","EFE7BE","#8EC447","#FFFFFF","#96D3D4","#636466","2D2D2E","#2D1E1E","#4B3C37","#96A576","#CDE196","FFFFBE","#F06060","#FA987D","#F7F2CB","#72CCA7","10A296","#1D8281","#44BF87","#FBD258","#F29A3F","DB634F","#DEDE91","#EF9950","#F34E52","#C91452","492449","#6D8EAD","#1F3447","#1A0B07","#362416","CFCDB4","#00CD73","#008148","#2D9668","#3ECD8E","004E2C","#3D8080","#628282","#858383","#A38282","C28080","#475159","#839795","#B2BDB7","#CCC9C0","F2F2F2","#0E6870","#C6B599","#C65453","#FFDDB4","EDAA7D","#CEF0B7","#A8DBA8","#79BD9A","#3B8686","0B486B","#292C44","#FF5349","#F0F0F1","#18CDCA","4F80E1","#272A2B","#383737","#473B39","#692B28","940500","#D6C274","#DB9E46","#25706B","#3D2423","AB362E","#FFA68F","#FF4867","#FFF9C8","#B5EBB9","18B29D","#A1A16A","#727D59","#366353","#133C40","03212E","#D45354","#A9DC3A","#2FCAD8","#818B85","CDCDC1","#F14B6A","#3D3C3E","#22BDAF","#BAD7D4","F4F4F4","#FFE2C5","#FFEEDD","#FFDDAA","#FFC484","FFDD99","#9FFF4A","#1ABF93","#087363","#004040","2F1933","#FFDB97","#B28F4E","#FFFDFB","#466CB2","97BBFF","#991C00","#E09A25","#FFFCDB","#008B83","262B30","#44281A","#00ACAE","#F5EFD5","#F37606","EE4717","#FF5952","#FCEEC9","#96D6D9","#4FAAC9","176075","#5C4B51","#8CBEB2","#F2EBBF","#A5C88F","EF847B","#105F73","#F7F3B2","#C6CC33","#F28322","CC5404","#137072","#56B292","#B7F5AB","#FBFFC0","BF223D","#E3F23E","#6C821C","#A6A53F","#E0E0AC","33302E","#00215E","#003CAA","#1967F7","#5E4000","AA7400","#273A3D","#54695C","#AD9970","#FFBF87","FF8F60","#FFAA00","#C2B93E","#808F5D","#576157","302F30","#BE1405","#F2DCAC","#AABEAA","#736E41","413C2D","#6B1229","#C76A61","#FAB99A","#F7D9B5","CCB1A7","#2D9993","#58B3A3","#83BFA3","#B0D9A8","FFFCB6","#334D5C","#45B29D","#EFC94C","#E27A3F","DF5A49","#F30B55","#010326","#012840","#54717F","F2E6CE","#2A3411","#73662C","#BC9847","#FFDFB2","6B0031","#637D74","#403D3A","#8C3B3B","#AB6937","D4A960","#010A26","#011640","#B6D6F2","#FFFFFF","E83338","#924847","#EB986C","#E4C678","#9C7885","372C2C","#022440","#3F95AA","#4EC6DE","#EAE2DF","F7572F","#2B1D2E","#323657","#076473","#54B087","D6F567","#052229","#004043","#BCC373","#E3FF55","D0D90C","#4C514A","#907A62","#879796","#755854","B09880","#1D2939","#1CAF9A","#FFFFFF","#EE4F4B","D1DC48","#004B67","#41CCB4","#FFEA95","#FF7C5D","C70151","#C0272D","#FCFBE7","#9FD3DA","#008C9A","05484F","#213130","#FF5E3D","#C9C83E","#FDFFF1","559398","#B1E4FC","#366D78","#39D5F1","#FFFFFF","D9FF03","#DECE6C","#FCF9B6","#BFE3B5","#5D826E","262E2B","#520A17","#668F91","#F5E6AC","#AB8E5B","52301C","#2D3032","#DD5F18","#FBA922","#F7F7F7","404333","#0C2538","#2B434F","#638270","#BCC98E","EDE059","#E85066","#F28E76","#E6CEB0","#5A8C81","382837","#BF2633","#A6242F","#D9CEAD","#C0B18F","011C26","#002A4A","#17607D","#FFF1CE","#FF9311","E33200","#0A8B91","#485956","#C4B98F","#FFF9BC","EEDF2E","#B89A7B","#9BBAAC","#F2D649","#D95D50","DBDBDB","#BD7938","#8D4421","#643001","#532700","3A1C00","#E1E6FA","#C4D7ED","#ABC8E2","#375D81","183152","#2E4259","#F7483B","#ECF0F1","#03C8FA","737373","#364656","#5D6B74","#94A4A5","#F2F5E9","FF8C31","#3E5916","#93A605","#F28705","#F25C05","E5EFFA","#248077","#74AD8D","#C82754","#F7BB21","F9E2B7","#20736A","#8BD9CA","#B1D95B","#93A651","403E34","#D74B4B","#DCDDD8","#475F77","#354B5E","FFFFFF","#252F33","#415C4F","#869C80","#93C2CC","CEEAEE","#012840","#79C7D9","#9BF2EA","#497358","9DBF8E","#EE7E94","#F8B4C4","#C7CAC9","#D8505C","41424","#282828","#505050","#FFFFFF","#2DCEDB","F20000","#004358","#1F8A70","#BEDB39","#FF5347","FD7400","#470C3B","#802F56","#C0576F","#E38679","FFBD83","#573328","#B05A3A","#FF8548","#29332E","0F1B1C","#461F2D","#E1FFBB","#BAD47F","#849C23","52533F","#333A40","#4C5E5E","#ADD0E5","#CDE4FF","729EBF","#DE5605","#F7A035","#B1DEB5","#EFECCA","65ABA6","#76D6D2","#F9E270","#EF6F56","#F4EED8","596B56","#403E3F","#F2F2F2","#D9D9D9","#9DAABB","8C8C8C","#059E9A","#F4F2ED","#F5A243","#DB3E3B","585857","#FFBF41","#EE8943","#C02221","#FFF4D3","249CA9","#024E76","#39A6B2","#FCE138","#F5B824","F08106","#FF0067","#FF3D6A","#E7FF04","#9CFF00","56FF00","#003540","#0D3F40","#487360","#8FA671","F2D795","#FF493C","#FFFFFF","#B3ECEF","#31C4F5","ADEB41","#244358","#4A8B87","#7CBCAE","#F0D4AF","C5252B","#EA5930","#F8AF1E","#F5E5C0","#097380","372560","#A1DBB2","#FEE5AD","#FACA66","#F7A541","F45D4C","#2C4A47","#6C9A7F","#BB523D","#C89D11","81810B","#F0F1F2","#232625","#647362","#FF5629","D2D9B8","#7C9B5F","#B8D197","#E3FFF3","#9BDEC7","568F84","#E54E45","#DBC390","#F2F2EF","#13A3A5","403833","#77A7FB","#E57368","#FBCB43","#34B67A","FFFFFF","#001A2E","#8F0000","#FFFFFF","#8A874B","41594F","#312F40","#49A69C","#EFEAC5","#E89063","BF5656","#047C8C","#018B8D","#F3BF81","#F49B78","F1706D","#00303E","#7096AD","#C1D1DE","#FFF9EF","EC4911","#2D6891","#70A0BF","#F5EEDC","#DC4C1A","F0986C","#040002","#3D1309","#E8B96A","#BC5D15","5C0F00","#8B929C","#5E6070","#514454","#3B313D","FF2479","#142D58","#447F6E","#E1B65B","#C8782A","9E3E17","#22104D","#2D1E5E","#483A85","#7067AB","A49CFA","#919C86","#9E373E","#2B2E36","#D1B993","C45A3B","#332F45","#015770","#2A8782","#9FD6AE","FFFED2","#37C78F","#FEE293","#FF4D38","#CC2249","380C2A","#47282C","#8C8468","#C9B37F","#DBDAB7","C4C49C","#14191A","#2D2B21","#A69055","#CCB287","FFB88C","#F5E3CD","#696158","#B6A898","#877D71","504A43","#005151","#009393","#F56200","#454445","969692","#D95F47","#FFF2C1","#80A894","#106153","072C36","#9E352C","#E6E8A9","#93C28C","#2E5A5C","2B2623","#03013A","#334A94","#6B9EDF","#83C3F2","99E6FF","#372A26","#4D4D4D","#6DA0A7","#9ED5A8","C7F5FF","#03658C","#022E40","#F2B705","#F28705","F25C05","#FF3B16","#E87826","#E8BA4A","#80A272","003045","#00748E","#E3DFBB","#F4BA4D","#E3753C","DA3B3A","#25401E","#56732C","#84A63C","#B8D943","EAF2AC","#449BB5","#043D5D","#EB5055","#68C39F","FFFCF5","#108F97","#FF8B6B","#FFE39F","#16866D","103636","#1A4F63","#068F86","#6FD57F","#FCB03C","FC5B3F","#381C19","#472E29","#948658","#F0E99A","362E29","#D7E8F7","#BBD0E3","#9CB7CF","#6A8BAB","375D81","#0F1C28","#136972","#67BFA7","#F3CF5B","F07444","#FFFFFF","#4EA9A0","#969514","#FE9C03","FCDE8E","#2F2D30","#656566","#65537A","#51386E","2A2333","#4C2916","#F05A28","#FBAF3F","#38B449","FFFFFF","#132537","#006C80","#EBCAB8","#FE8315","FA3113","#ECEEE1","#A8DACF","#F05B4F","#D8403A","221E1F","#00305A","#004B8C","#0074D9","#4192D9","7ABAF2","#72CF3F","#85FF00","#23E000","#2FB81B","00FF1C","#45CEEF","#FFF5A5","#FFD4DA","#99D2E4","D8CAB4","#FF5B00","#A1716C","#728296","#439AAB","00CABD","#EB6C2D","#D9C8A2","#939C80","#496158","232F38","#D94214","#FFF2C1","#80A894","#52736B","093844","#4D1B2F","#9E332E","#EB6528","#FC9D1C","FFCA50","#FFEEB0","#9AE8A4","#C7C12D","#F76245","ED1C43","#FFFAED","#D4DBFF","#879AC9","#242942","FF8800","#022840","#013440","#517360","#9DA67C","F2DC99","#331A0F","#519994","#BA4B3C","#EEDDAA","789F63","#577867","#EDCE82","#D68644","#AB3229","662845","#435A66","#88A6AF","#F5F2EB","#D9CDB8","424342","#FF8840","#958D4F","#737B55","#595540","513E38","#9D805A","#EBC99D","#FFE6C5","#9DCEEA","4B809E","#272D40","#364659","#55736D","#9DBF8E","D0D991","#23A38F","#B7C11E","#EFF1C2","#F0563D","2E313D","#98C000","#3D4C53","#EA2E49","#FFE11A","0CDBE8","#A20E30","#E93C4F","#DCDCD4","#ADBCC3","2D4255","#1C2640","#263357","#384C80","#4E6AB3","5979CD","#D94214","#FFF2C1","#80A894","#52736B","093844","#3B596A","#427676","#3F9A82","#A1CD73","ECDB60","#1E1E1F","#424143","#67666A","#807F83","CBC9CF","#E04946","#3BA686","#B6D15D","#FFD495","FA847E","#FFEBB0","#FFB05A","#F84322","#C33A1A","9F3818","#FFA136","#FF814A","#E6635A","#785D6B","534557","#CDCF91","#EBEACC","#D6D5B8","#6D7D80","41545E","#011526","#011C40","#4E8DA6","#F2EA79","F2B33D","#353230","#3F4E51","#7B8F70","#99B2BE","F6F4EA","#063559","#0D8C7F","#8FBF4D","#F2D13E","D95929","#158000","#199900","#20BF00","#24D900","29FF00","#0B0D0E","#137074","#7EB7A3","#F1DDBB","EC6766","#02151A","#043A47","#087891","#C8C8C8","B31D14","#59361F","#5C992E","#A3CC52","#E6E673","FF5933","#FE4365","#FC9D9A","#F9CDAD","#C8C8A9","83AF9B","#4B1E18","#F9E5C2","#BBB082","#829993","4F5D4E","#032843","#1F595B","#508C6D","#71A670","A6DB89","#191724","#4C4547","#8C594E","#D18952","FDB157","#191919","#182828","#60702D","#AAB232","E6FA87","#212A3F","#434F5B","#F2F2F2","#8AB839","2E2E2E","#004158","#026675","#038B8B","#F1EEC9","F09979","#023059","#3F7EA6","#F2F2F2","#D99E32","BF5E0A","#F21E52","#FFFFFF","#3D3B42","#0C6F73","63CFD4","#452743","#E7635E","#F8E9A8","#89E0AD","00928C","#FAAD63","#D1714D","#785E48","#39403B","3D1C24","#4C0016","#FFF7EB","#DCCEA7","#A17345","104F53","#BF2431","#F24150","#2A4557","#3B848C","EFF2E4","#3B3013","#8F6031","#E88833","#9C0C0A","FDF3C1","#1E2422","#88BEB1","#FF006D","#DAFFFF","718A94","#F1F4F7","#AF9F7B","#775E43","#40413C","251C17","#00182E","#0C6BA1","#D4D6D4","#FFFDEB","FF7500","#FFAB4A","#CCBAAB","#1E2129","#3D5E6E","47A3A3","#66B3A7","#C0D4B6","#EEF0BD","#F0563D","2C2F3B","#332525","#907465","#EDC5B5","#878C6D","63674A","#F04C16","#DBDBD0","#EDBD1F","#4CB09C","313B4A","#2B211D","#611C26","#C5003E","#8EB7A8","F1E4B7","#1A1F2B","#30395C","#4A6491","#85A5CC","D0E4F2","#03497E","#0596D5","#9DEBFC","#999999","FE4B28","#2F4159","#465E73","#88A649","#F2ECE4","D98841","#323A46","#22282F","#EB4A33","#FFFFFF","E9F0F5","#2C3E50","#FC4349","#6DBCDB","#D7DADB","FFFFFF","#F29727","#E05723","#B0382F","#982E4B","713045","#4D584A","#465943","#428552","#3E754E","4C694B","#47191C","#59574B","#829690","#B5B09A","E1E3CB","#1D5123","#B1C661","#FFDA68","#FE9257","F64448","#59323C","#260126","#F2EEB3","#BFAF80","8C6954","#4E0805","#9E0522","#FFF4D4","#B8C591","447622","#424862","#FB9A63","#BFC4D5","#F6FBF4","FEBC98","#FF2468","#E0D4B1","#FFFFE3","#00A5A6","005B63","#1C2F40","#4C6173","#8094A6","#D9D1BA","F2E9D8","#DFD7B7","#EB7707","#5C5445","#3B2323","9CBFC7","#262E3B","#9C8878","#CFCAAA","#FBF8FF","992435","#FFBC67","#DA727E","#AC6C82","#685C79","455C7B","#404A69","#516C8A","#8AC0DE","#FFFFFF","FFAC00","#485B61","#4B8C74","#74C476","#A4E66D","CFFC83","#A31180","#C42795","#DE52B4","#EA88CE","FFBFE5","#E64D2E","#FFF5F1","#7893AD","#576B9C","2D2A52","#BF0436","#8C0327","#590219","#F2CBA1","8C674C","#CF5B6F","#FFF8C8","#CAD9B1","#8FB3A0","648991","#341D44","#744D90","#BB8CDD","#3E4417","88904D","#00293E","#003D4E","#006269","#00918F","00BAB5","#43212E","#D9666F","#F2D57E","#A9A688","516057","#2A3B30","#ABFFD1","#EBFFF5","#9DFEFF","273B40","#A63343","#E65159","#F5E9DB","#F4F7CF","BAD984","#1BA68C","#54BFAC","#F2EDA7","#F2E530","D94625","#1A2A40","#3F7369","#F2DEA0","#CE5251","EA895E","#1E9382","#70A758","#EFF1C2","#F0563D","2E313D","#A991E8","#FFB4BB","#ACF7FF","#A2E891","FFEDAE","#225B66","#17A3A5","#8DBF67","#FCCB5F","FC6E59","#282624","#BFB7AA","#403D39","#807A71","ABA398","#334D5C","#45B29D","#EFC94C","#E27A3F","DF4949","#440008","#605521","#988432","#D9A54E","9E3711","#649670","#36291E","#69AD6C","#92E67C","C5FF84","#42342C","#738076","#B2B39B","#DFE5E1","294359","#1A3838","#3F7A51","#82A352","#D1C062","FFBE59","#7D8C22","#B3BF67","#F2E49B","#D9DFF4","6791BF","#8A7D6D","#2D2D38","#E86E48","#FFFFE8","9CC9C9","#CFC949","#FFF5BF","#A9E6C4","#6AB39F","665841","#A1172D","#FDFFBA","#A7DB9E","#275C57","1F1B19","#FF6C0D","#F29E00","#E6C10F","#44996F","216273","#2C3E50","#FA4248","#D7DADB","#6DBCDB","FFFFFF","#627369","#99B397","#E2F2C6","#91CCAD","376266","#04496E","#66CAFF","#A3FC7E","#70D44A","2C6B0F","#1BA68C","#97BF3F","#F2ECD8","#F2B035","F2522E","#A2D9B1","#7CBF9E","#F2F1B9","#8C8575","193741","#024959","#037E8C","#F2EFDC","#E74C30","363636","#212625","#9CA6A2","#D0D9D6","#BF0404","C2C6AF","#00FFFF","#00FF00","#FFFF00","#FF5100","FF007C","#212629","#CDCF19","#FFF77D","#96C4AB","CF2A56","#CFF9FF","#BFC7BB","#787051","#332730","57324F","#98CACB","#FDEFBE","#F0542B","#736E5B","ABA68E","#F2F1EB","#BFB9A4","#262222","#802A30","8C0303","#65356B","#AB434F","#C76347","#FFA24C","519183","#78BF82","#A4D17C","#CFD96C","#EBD464","FFD970","#806265","#FFA256","#F7DD77","#E0D054","ABA73C","#8F323C","#123943","#80BDDB","#4189AB","C98127","#683820","#8C9A89","#E7D6A2","#BEAA65","9A8234","#021B21","#032C36","#065F73","#E8DFD6","FF2A1D","#2D6C73","#3FA693","#B4D9CB","#9ABF49","C6D93B","#141F26","#2B4040","#405950","#A69E86","F2D9BB","#4A8279","#003330","#610400","#003B06","02730F","#69B5E1","#D4E4F5","#EAF2F8","#BEDBED","000000","#893660","#EF7261","#68D693","#A0D7E2","299CA8","#073A59","#2D9AA6","#F2E2DC","#F23322","A61B1B","#2A3A48","#3E6372","#B2D4DC","#FAFAFF","FF6900","#F3BD8D","#F1A280","#BE6D6B","#704A5B","3E263C","#1C2742","#3C91C7","#5A9ABE","#95C5DE","E0EEFB","#426261","#465A59","#577573","#739A97","9AC1C0","#002A4A","#17607D","#FFF1CE","#FF9311","D64700","#589373","#BFBD99","#F2D6B3","#C2512F","241E1E","#1F518B","#1488C8","#F7E041","#E2413E","B5292A","#549494","#E85649","#232C2E","#E6E8D2","706558","#392133","#FFECBE","#D9D098","#C4AB6D","AB7D3A","#F0F0F0","#1C1C1C","#A2FDF5","#1CCDC7","27EDDF","#011526","#025959","#027353","#03A678","03A696","#004358","#1F8A70","#BEDB39","#FFE11A","FD7400","#37465D","#F2F2F2","#9DC02E","#779324","051A37","#580022","#AA2C30","#FFBE8D","#487B80","011D24","#F9F9F9","#03A678","#E9EDEB","#F44647","00707F","#800000","#BF0000","#E2D6C2","#F6EDD8","FFFFFF","#F7F6AF","#1B2124","#D62822","#97D6A6","468263","#432852","#992255","#FF3D4C","#28656E","00968F","#444344","#52BBB2","#2B344D","#EE5555","F8F7EE","#45334A","#796B7D","#CCC4B0","#FFF1B5","FFA3A3","#5A4B53","#9C3C58","#DE2B5B","#D86A41","D2A825","#14151C","#0C242B","#297059","#84D66E","D1FB7A","#272D40","#364659","#55736D","#9DBF8E","D0D991","#23A38F","#B7C11E","#EFF1C2","#F0563D","2E313D","#2E064D","#80176B","#B356A1","#59580B","FFFF00","#CC3333","#FF9D33","#F7F7F0","#3EBBA7","00747A","#5C4B51","#8CBEB2","#F2EBBF","#F3B562","BD6060","#0D3E58","#1C848C","#19C0C2","#F3EDD6","DA6260","#022629","#2A5945","#FAFFED","#E6DCC0","B3371C","#F4FAC7","#7BAD8D","#FFB159","#F77F45","C2454E","#A2C1C6","#86B1B7","#AECBAD","#CFDCB0","D6E1D1","#B0DAFF","#325B80","#64B7FF","#586D80","5092CC","#0F808C","#6C8C26","#F2A71B","#F26A1B","D91818","#FFBC6C","#FE9F6C","#BD716E","#74495F","3B2C4D","#FF4D41","#F2931F","#E6CA21","#91B321","1E8C65","#302821","#453629","#5C4837","#8A735F","BDA895","#415457","#5F7B7F","#9ACCAF","#E6EBC4","F9F7C8","#474143","#A69E9D","#E7E2DA","#FFFFFF","E7E8E7","#805939","#BD9962","#E6CD7D","#578072","2D4B4D","#03588C","#1763A6","#419CA6","#54BF83","8DBF41","#00CCFF","#A1FCFF","#040438","#004878","C9FAFF","#534C64","#B7DECF","#F0F3D7","#7E858C","D96557","#7F7364","#CBB08E","#CBC1B7","#789DCB","646F7F","#5C2849","#A73E5C","#EC7263","#FE9551","FFD285","#FF0012","#FF7D00","#FFD900","#5BE300","0084B0","#F24C32","#F29471","#FCDFA6","#36B898","3D7585","#083157","#0A6C87","#459C97","#92CCA5","C9F0B1","#DC941B","#EDC266","#B6952C","#E1D3A6","E9A119","#323836","#BAD1B5","#DBE8CF","#F0F7E8","FFFEF5","#081724","#589494","#8EBBB4","#D0DCD0","F5EED2","#50781C","#9CAD1C","#EAF7E6","#40A5DE","0B5191","#537F79","#78A68F","#CBD49C","#FED457","CB252A","#F23C13","#CBAB78","#FFFFFF","#898373","1F1C17","#450003","#5C0002","#94090D","#D40D12","FFED75","#0770A2","#82D9F7","#FEFEFE","#AEC844","F36622","#30394F","#FF434C","#6ACEEB","#EDE8DF","0E6569","#FF6B6B","#556270","#C7F464","#4ECDC4","EDC8BB","#D9B500","#FFED9C","#BFCC85","#748F74","454545","#452E32","#A34B1B","#B5A187","#EDDF9A","A7CC31","#2C2B33","#596664","#909980","#CCC08D","FF8A00","#C21F1F","#FFFFFC","#E34446","#FFFFDB","E36D6F","#282828","#00AAB5","#C1C923","#F41C54","F5F0F0","#3A3F40","#202627","#151B1E","#EFF4FF","41444D","#DEBB73","#4D0017","#010000","#4D0F30","9A002F","#EB9328","#FFA754","#FFD699","#FFF5DC","4FA6B3","#025E73","#037F8C","#D9D59A","#D9BD6A","590202","#636266","#E0CEA4","#E8A579","#7D6855","42403E","#FF0000","#FF4000","#FF7F00","#FFBF00","FFFF00","#FFFFFF","#74ADA6","#1E5E6F","#241B1F","68A81E","#5A0532","#FF6745","#FFC861","#9DAE64","27404A","#ACCBBC","#467847","#E8E4C1","#A60303","730202","#5C4B51","#8CBEB2","#F2EBBF","#F3B562","F06060","#0D2557","#93A8C9","#FFFFFF","#F5DED5","558D96","#F53C4A","#565157","#10CFC8","#F2EEE7","F5D662","#FFD97B","#E65029","#A60027","#660033","191C26","#595408","#A6800D","#A66D03","#A63F03","730C02","#2E031F","#590424","#8C072B","#BF0A2B","DEEFC5","#E0C882","#A6874E","#BFA169","#D9B779","F2D399","#D88681","#A67673","#746566","#535A5D","324F54","#FC297D","#FB607A","#FDA286","#FDC188","FEE78A","#FFECA1","#B3B27F","#4C5E52","#2F3436","FFBE2C","#D93312","#B3AB82","#45735F","#394D47","2C3233","#324143","#6595A3","#C8E3E8","#FCFFED","B6C28B","#477984","#FEF5EB","#C03C44","#EEAA4D","313E4A","#334D5C","#45B29D","#EFC94C","#E27A3F","DF4949","#630B11","#33322F","#2A2927","#1E1D1C","000000","#D94214","#FFF2C1","#80A894","#52736B","093844","#051E21","#00302D","#856434","#F28C28","FFAD4E","#D7DADD","#DDDEE3","#E1E1E9","#EDEFF4","F2F3F8","#BF495E","#41A693","#F2EC9B","#D9CF48","D9583B","#067072","#14A589","#DECFA6","#BAAE8C","F94B06","#423A38","#47B8C8","#E7EEE2","#BDB9B1","D7503E","#730324","#DFE3E6","#B4C4D4","#8BA2BD","456382","#537374","#F9BD7F","#EBD7A5","#ADC9A5","5C9E99","#88B59E","#B6DEC8","#39464D","#C04229","ABD1AB","#11A7FC","#95D127","#F2E415","#FF8638","EE3551","#212640","#5D718C","#4B95A6","#60BFBF","EFF2D8","#D8A64D","#9B5422","#351411","#5B0D0D","991C11","#53324F","#668D6E","#F2E0A0","#F19B7A","F0756E","#DFE0AF","#A4BAA2","#569492","#41505E","383245","#7BBADE","#93DE7F","#FFED5D","#F29E4A","FF7050","#133800","#1B4F1B","#398133","#5C9548","93E036","#D9D7AD","#91A685","#FF6A00","#37485C","1C232E","#008767","#FFB27A","#FF6145","#AB2141","5E1638","#727B7F","#CCEAEA","#7A7556","#2E2125","44CACC","#FFFFED","#FF2C38","#FF9A3A","#FFF040","67D9FF","#007148","#60A859","#9BDA6A","#C7F774","F9FFEF","#092740","#45698B","#90B0CC","#F1FAFF","8FD36F","#E2FFA0","#7D8076","#FAFFED","#C2CCBE","8F7D70","#00736A","#00BC9F","#F1EEC7","#FEA301","F2561A","#26282E","#AD5138","#F7F7F7","#DDDAE0","8594AE","#1A191F","#35352F","#484042","#4E5252","E64D38","#49454A","#E69B02","#FAF4C6","#B1D631","324052","#5F1A2B","#1D2834","#6F8B78","#E4D49E","C96466","#012D3D","#38AD9E","#FFEB9E","#FF6867","D0DBED","#0D1F36","#104954","#1E9C89","#38CC85","60EB7B","#8C4E03","#9FA66A","#F2EC94","#F23005","8B0F03","#000001","#20201F","#E2E2E4","#590402","B80000","#344059","#465973","#F2D272","#A69460","595139","#33454C","#608F85","#B6E5CB","#8BAF95","54584E","#FBFEF6","#B7BFA4","#687F70","#1A3841","BF3847","#D7E836","#86FFC7","#FFB048","#E8366C","593BFF","#34A9FF","#5982DB","#665EB8","#684682","632E62","#004056","#2C858D","#74CEB7","#C9FFD5","FFFFCB","#BFB978","#84945C","#516967","#4D3130","281B24","#103B73","#20638C","#3786A6","#4EABBF","EBEFF2","#9FB1BF","#1D2D63","#1C5357","#1F6E56","196331","#FFEBBA","#C3BD91","#88947B","#4C3F3F","2A2727","#347373","#4EA6A6","#91D9D9","#FFFFFD","F2E205","#828948","#EFDFC2","#006971","#DC533E","840000","#000137","#29003F","#79003D","#D04D14","F89801","#370005","#4B0005","#5F0005","#730005","870005","#C3AE8D","#F25260","#2D5F73","#6BADC9","8FCED6","#9E1B36","#F7EDBA","#E69B3D","#EB3355","3D241D","#1D8281","#44BF87","#FBD258","#F29A3F","DB634F","#035C75","#1B808C","#31A6A8","#F3F1BC","F3AD14","#FF7500","#665130","#EBB643","#CEDAA8","668E84","#384D3A","#3E6653","#728053","#A68357","D97C71","#012326","#17455C","#E1CAAB","#FE8333","FA4913","#1A2944","#2DA7C7","#56ACBA","#98C4C9","CBD5D2","#BF3542","#CDC5BA","#EBE3D6","#3C3C3C","2E2E2E","#231921","#695F74","#BEB4CB","#EBEBF0","D2DCEB","#34373F","#686C75","#F3E9D0","#BEB7A7","8E867C","#661510","#D9351A","#F2C76F","#BF9727","204D3F","#3CFFEE","#24AABC","#356781","#2C3D51","1C1F24","#DA3537","#FFFCC4","#00585F","#6A6A61","2A2C2B","#AE3135","#D1AF87","#8C826B","#3D3C33","F2F0CE","#FF0894","#FF5E9F","#FF91A7","#FFB5CA","F5F0BA","#99878D","#323232","#646464","#7E4A5C","372129","#3FB8AF","#7FC7AF","#DAD8A7","#FFB38B","FF3F34","#402B3C","#6AA6A6","#D9CCA7","#F2B263","F26835","#6AA690","#F2BC1B","#F2DC99","#F29057","BF1F1F","#F4FAC7","#7BAD8D","#FFB158","#F77F45","C2454E","#E5533C","#F5E346","#93D06D","#50AC6A","227864","#39588A","#A9BDD7","#FFFFFF","#FFEADD","FFD0BB","#B0B595","#615F4F","#828567","#91A380","EAFFCD","#00427F","#0066BD","#66B5CC","#F0E4C5","D6C28F","#FF6313","#F9E4B3","#C29689","#74474B","45232E","#00585F","#009393","#FFFCC4","#C7C49B","EB0A00","#091840","#44A2FF","#F7F7EA","#B3CC63","4C6620","#5CBBE3","#FCF1BC","#5C8182","#383A47","B4F257","#9E9E9E","#E5E1D1","#E0393D","#253746","425563","#4D9453","#FFFFB1","#ADDE4E","#FF9D27","A62A16","#B70046","#FF850B","#FFEBC5","#109679","675A4C","#363636","#0599B0","#A4BD0A","#FFA615","FF2E00","#7D8077","#BBBFB2","#FAFFED","#E82A33","E3DEBC","#FD9F44","#FC5C65","#007269","#03A679","FAF0B9","#134B57","#81A489","#F1D8B5","#F2A054","C04D31","#946E49","#394042","#EDDBAC","#872A0C","BA8E3A","#404040","#024959","#037E8C","#FFFFFF","F24C27","#2A3342","#163C6E","#4E5F61","#E6A015","EDE7BE","#445060","#829AB5","#849E91","#C14543","D6D5D1","#8A9126","#B7BF5E","#FFE9C4","#F5B776","F58E45","#9B2D1E","#3C3A28","#78A080","#9BCD9E","FFFFAE","#FF6138","#FFFF9D","#BEEB9F","#79BD8F","00A388","#990000","#FF6600","#FF9900","#996633","CC9966","#DCE6DA","#B8CCBB","#98B3A5","#7A9994","62858C","#0B1C29","#3B7C8F","#73A5A3","#98C1B7","F0EBD2","#F6CB51","#E25942","#13A89E","#3F4953","F2E7DA","#282F36","#FFFEFC","#BDA21D","#BFBC5B","D2E098","#8C182D","#DE7140","#FCB95A","#FAE285","6A7349","#6B9100","#FFE433","#FF841F","#E03D19","A6001C","#FFEAA7","#D9D697","#9FC49F","#718C6A","543122","#CFF09E","#A8DBA8","#79BD9A","#3B8686","0B486B","#0C2233","#065471","#0A91AB","#FFC045","F2F2F2","#BEE8E0","#373C40","#2E2621","#73320B","FF5E00","#1B2C35","#A3BFC6","#FF005D","#222A30","293A42","#FF8400","#3B4044","#494948","#E6E1D8","F7F2E9","#6A482D","#518C86","#F6BF3D","#EF7C27","BF2424","#261C2B","#292B39","#226468","#608D80","829D8F","#B2AD9A","#110E00","#363226","#A9A695","ECE9D8","#1B1B26","#26394D","#286480","#13B3BF","A3FF57","#F2C2A7","#F5E5C5","#593D28","#422C21","93DEDB","#001028","#033140","#1E5A5B","#7BA78C","EBEDC6","#544E6E","#808CB0","#ABD1D9","#D9FFF7","DDF556","#323A45","#596677","#758194","#FFFFFF","E74C3C","#45291A","#AB926D","#DBD1BC","#4999C3","5FCBEC","#6B151D","#2E1615","#A8553A","#DB8F5A","F2C18E","#000623","#28475C","#4A6C74","#8BA693","F0E3B1","#60807B","#81B37A","#BCCC5F","#FFEE65","E64964","#FFFFFA","#A1A194","#5B605F","#464646","FF6600","#1E1B17","#577270","#9C9A79","#C7BDA1","580E0C","#452F27","#5E504A","#6B6865","#9BBAB2","B0FFED","#1B5257","#F7F6C3","#F28159","#CC5850","4F1C2E","#FAA51B","#BF511F","#2C445E","#2F6D82","5EE4EB","#BF3952","#59364A","#556D73","#D9D1A9","D95F5F","#024959","#037E8C","#F2EFDC","#E74C30","363636","#221A26","#544759","#A197A6","#F27405","D93D04","#C4A44A","#E6D399","#9AB8A9","#7C8A7F","4E4B44","#FFFEC8","#B1BF99","#5B604D","#39382B","26181E","#4E3C51","#21A68D","#3BBF9A","#F2E8B6","F25749","#102144","#1B325E","#254580","#3C63B0","5D8AEA","#2A3A48","#3E6372","#B2D4DC","#FAFAFF","FF4B00","#FFF1BF","#F20058","#FFAEAC","#000001","7D7A96","#FDFFC6","#F2F096","#FF0080","#DE0049","521218","#5B0E00","#FBB500","#FBD864","#807D1A","59233C","#1E1E1F","#424143","#67666A","#807F83","CBC9CF","#3C3658","#3EC8B7","#7CD0B4","#B9D8B1","F7E0AE","#FFFFFF","#99B75F","#D5DD98","#EBF4DB","D8D8D8","#248A8A","#C9FA58","#F9E555","#FAAC38","F2572A","#086B63","#77A490","#E2D8C1","#BFAE95","7C7159","#5C4B51","#8CBEB2","#F2EBBF","#A5C88F","EF847B","#17162F","#89346D","#C76058","#FFB248","E8C475","#6E8F4A","#65D9C5","#F2E7B6","#EDA430","AB3E2C","#30394F","#FF434C","#6ACEEB","#EDE8DF","0E6569","#8E1B13","#F9E4B3","#849689","#46464A","29232E","#686B30","#AB9A52","#E8BA67","#D68F4F","BA512E","#E54E45","#DBC390","#F2F2EF","#13A3A5","403833","#65BA99","#59A386","#F1DDBB","#D6C4A6","E74C3C","#A6FFBC","#4ACFAF","#00A995","#006161","003D4C","#33271E","#8B7653","#C8D9A0","#FDEE9D","233331","#048789","#503D2E","#D44D27","#E2A72E","EFEBC8","#E5FF1E","#A9D943","#75A660","#698070","494D4B","#2DEBA2","#91F57F","#EBAA69","#E70049","2B0027","#990000","#336699","#DDDDDD","#999999","333333","#F13A4B","#3D3C3E","#22BDAF","#F4F4F4","D7D7D7","#F53A59","#001D2D","#15A88C","#B7D9C8","F3F5F4"]};Ops.Color.ColorPalettes.prototype=new CABLES.Op;CABLES.OPS["31d33a1e-9a0a-49f7-8bc8-9e83ab71e23e"]={f:Ops.Color.ColorPalettes,objName:"Ops.Color.ColorPalettes"};Ops.Gl.Orthogonal_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("render"),r=e.inValue("bounds",2),a=e.inSwitch("Axis",["X","Y","None"],"X"),o=e.inValue("frustum near",-100),i=e.inValue("frustum far",100),s=e.outTrigger("trigger"),l=e.outNumber("Ratio"),u=e.outNumber("Width"),p=e.outNumber("Height");const F=e.patch.cgl;n.onTriggered=function(){const e=F.getViewPort();if(a.get()=="X"){const t=e[3]/e[2];F.pushPMatrix();mat4.ortho(F.pMatrix,-r.get(),r.get(),-r.get()*t,r.get()*t,parseFloat(o.get()),parseFloat(i.get()));u.set(r.get()*2);p.set(r.get()*t*2);l.set(t)}else if(a.get()=="Y"){const t=e[2]/e[3];F.pushPMatrix();mat4.ortho(F.pMatrix,-r.get()*t,r.get()*t,-r.get(),r.get(),parseFloat(o.get()),parseFloat(i.get()));u.set(r.get()*t*2);p.set(r.get()*2);l.set(t)}else{F.pushPMatrix();mat4.ortho(F.pMatrix,-r.get(),r.get(),-r.get(),r.get(),parseFloat(o.get()),parseFloat(i.get()));u.set(r.get()*2);p.set(r.get()*2);l.set(1)}s.trigger();F.popPMatrix()}};Ops.Gl.Orthogonal_v2.prototype=new CABLES.Op;CABLES.OPS["b9235490-eaf2-4960-b1be-4279a4051ec6"]={f:Ops.Gl.Orthogonal_v2,objName:"Ops.Gl.Orthogonal_v2"};Ops.Gl.ViewPortSize=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inTrigger("Exec"),r=t.outTrigger("Next"),a=t.outNumber("X"),o=t.outNumber("Y"),i=t.outNumber("Width"),s=t.outNumber("Height");n.onTriggered=function(){const e=t.patch.cgl.viewPort;a.set(e[0]);o.set(e[1]);i.set(e[2]);s.set(e[3]);r.trigger()}};Ops.Gl.ViewPortSize.prototype=new CABLES.Op;CABLES.OPS["7cb99d8f-d7ef-478e-902b-54e054e387a0"]={f:Ops.Gl.ViewPortSize,objName:"Ops.Gl.ViewPortSize"};Ops.Math.Multiply=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValueFloat("number1",1),r=e.inValueFloat("number2",1),a=e.outNumber("result");e.setUiAttribs({mathTitle:true});n.onChange=r.onChange=o;o();function o(){const e=n.get();const t=r.get();a.set(e*t)}};Ops.Math.Multiply.prototype=new CABLES.Op;CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};Ops.Sidebar.Button_v2=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const n=t.inObject("link");const r=t.inString("Text","Button");const a=t.outObject("childs");const o=t.outTrigger("Pressed Trigger");const i=t.inBool("Grey Out",false);const s=t.inBool("Visible",true);const l=document.createElement("div");l.dataset.op=t.id;l.classList.add("cablesEle");l.classList.add("sidebar__item");l.classList.add("sidebar--button");const u=document.createElement("button");u.classList.add("sidebar__button-input");l.appendChild(u);u.addEventListener("click",c);const p=document.createTextNode(r.get());u.appendChild(p);t.toWorkNeedsParent("Ops.Sidebar.Sidebar");n.onChange=A;r.onChange=d;t.onDelete=C;const F=document.createElement("div");F.classList.add("sidebar__greyout");l.appendChild(F);F.style.display="none";i.onChange=function(){F.style.display=i.get()?"block":"none"};s.onChange=function(){l.style.display=s.get()?"block":"none"};function c(){o.trigger()}function d(){const e=r.get();u.textContent=e;u.setAttribute("aria-label","button "+r.get());if(CABLES.UI)t.setUiAttrib({extendTitle:e})}function A(){a.set(null);const e=n.get();if(e&&e.parentElement){e.parentElement.appendChild(l);a.set(e)}else{if(l.parentElement){l.parentElement.removeChild(l)}}}function g(e){if(e){e.style.display="block"}}function m(e){if(e){e.style.display="none"}}function C(){h(l)}function h(e){if(e&&e.parentNode&&e.parentNode.removeChild){e.parentNode.removeChild(e)}}};Ops.Sidebar.Button_v2.prototype=new CABLES.Op;CABLES.OPS["5e9c6933-0605-4bf7-8671-a016d917f327"]={f:Ops.Sidebar.Button_v2,objName:"Ops.Sidebar.Button_v2"};Ops.Sidebar.Sidebar=function(){CABLES.Op.apply(this,arguments);const i=this;const n=i.attachments={style_css:" /*\n * SIDEBAR\n  http://danielstern.ca/range.css/#/\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\n */\n\n.sidebar-icon-undo\n{\n    width:10px;\n    height:10px;\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\n    background-size: 19px;\n    background-repeat: no-repeat;\n    top: -19px;\n    margin-top: -7px;\n}\n\n.icon-chevron-down {\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up,.sidebar__close-button {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n}\n\n.iconsidebar-minimizebutton {\n    background-position: 98% center;\n    background-repeat: no-repeat;\n}\n\n.sidebar-cables-right\n{\n    right: 15px;\n    left: initial !important;\n}\n\n.sidebar-cables *\n{\n    color: #BBBBBB !important;\n    font-family: Arial;\n}\n\n.sidebar-cables {\n    --sidebar-color: #07f78c;\n    --sidebar-width: 220px;\n    --sidebar-border-radius: 10px;\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n    --sidebar-hover-transition-time: .2s;\n\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    border-radius: var(--sidebar-border-radius);\n    z-index: 100000;\n    width: var(--sidebar-width);\n    max-height: 100%;\n    box-sizing: border-box;\n    overflow-y: auto;\n    overflow-x: hidden;\n    font-size: 13px;\n    line-height: 1em; /* prevent emojis from breaking height of the title */\n}\n\n.sidebar-cables::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n    width: auto;\n}\n\n.sidebar__close-button {\n    background-color: #222;\n    /*-webkit-user-select: none;  */\n    /*-moz-user-select: none;     */\n    /*-ms-user-select: none;      */\n    /*user-select: none;          */\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    /*color: #CCCCCC;*/\n    height: 2px;\n    /*border-bottom:20px solid #222;*/\n\n    /*box-sizing: border-box;*/\n    /*padding-top: 2px;*/\n    /*text-align: center;*/\n    /*cursor: pointer;*/\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\n    /*opacity: 1.0;*/\n    /*transition: opacity 0.3s;*/\n    /*overflow: hidden;*/\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    /*opacity: 0;*/\n    width: 20px;\n    height: 20px;\n    /*position: relative;*/\n    /*top: -1px;*/\n\n\n}\n\n.sidebar--closed {\n    width: auto;\n    margin-right: 20px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding:10px;\n\n    height: 25px;\n    width:25px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n    background-repeat: no-repeat;\n    background-position: center center;\n    transform:rotate(180deg);\n}\n\n.sidebar--closed .sidebar__group\n{\n    display:none;\n\n}\n.sidebar--closed .sidebar__close-button-icon {\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n    background-color: #111111;\n    opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5;*/\n    background-color: #222;\n    padding-bottom: 20px;\n}\n\n.sidebar--closed .sidebar__items {\n    /* max-height: 0; */\n    height: 0;\n    display: none;\n    pointer-interactions: none;\n}\n\n.sidebar__item__right {\n    float: right;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n    /*background-color: #1A1A1A;*/\n    overflow: hidden;\n    box-sizing: border-box;\n    animate: height;\n    /*background-color: #151515;*/\n    /* max-height: 1000px; */\n    /* transition: max-height 0.5s; */\n--sidebar-group-header-height: 33px;\n}\n\n.sidebar__group-items\n{\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.sidebar__group--closed {\n    /* max-height: 13px; */\n    height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n    box-sizing: border-box;\n    color: #EEEEEE;\n    background-color: #151515;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n\n    /*height: 100%;//var(--sidebar-group-header-height);*/\n\n    padding-top: 7px;\n    text-transform: uppercase;\n    letter-spacing: 0.08em;\n    cursor: pointer;\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\n    position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  /*float: left;*/\n  overflow: hidden;\n  padding: 0 15px;\n  padding-top:5px;\n  padding-bottom:10px;\n  font-weight:bold;\n}\n\n.sidebar__group-header-undo {\n    float: right;\n    overflow: hidden;\n    padding-right: 15px;\n    padding-top:5px;\n    font-weight:bold;\n  }\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n\n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item\n{\n    box-sizing: border-box;\n    padding: 7px;\n    padding-left:15px;\n    padding-right:15px;\n\n    overflow: hidden;\n    position: relative;\n}\n\n.sidebar__item-label {\n    display: inline-block;\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    width: calc(50% - 7px);\n    margin-right: 7px;\n    margin-top: 2px;\n    text-overflow: ellipsis;\n    /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n    font-family: var(--sidebar-monospace-font-stack);\n    display: inline-block;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    max-width: 60%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: var(--sidebar-color);\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n    /*border-top: 1px solid #272727;*/\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n/*.sidebar__toggle */\n.icon_toggle{\n    cursor: pointer;\n}\n\n.sidebar__toggle-input {\n    --sidebar-toggle-input-color: #CCCCCC;\n    --sidebar-toggle-input-color-hover: #EEEEEE;\n    --sidebar-toggle-input-border-size: 2px;\n    display: inline;\n    float: right;\n    box-sizing: border-box;\n    border-radius: 50%;\n    /*outline-style: solid;*/\n    /*outline-color:red;*/\n    cursor: pointer;\n    --toggle-size: 11px;\n    margin-top: 2px;\n    background-color: transparent !important;\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n    width: var(--toggle-size);\n    height: var(--toggle-size);\n    transition: background-color var(--sidebar-hover-transition-time);\n    transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n    border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .icon_toggle\n{\n\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    opacity: 1;\n    transform: rotate(0deg);\n    background-position: -4px -9px;\n}\n\n\n.icon_toggle\n{\n    float: right;\n    width:40px;\n    height:18px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\n    background-size: 50px 37px;\n    background-position: -6px -10px;\n    transform: rotate(180deg);\n    opacity: 0.4;\n}\n\n\n\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    background-color: var(--sidebar-toggle-input-color);*/\n/*}*/\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\n/*{*/\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\n/*}*/\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input:active\n{\n    background-color: #555 !important;\n}\n\n.sidebar__button-input {\n    -webkit-user-select: none;  /* Chrome all / Safari all */\n    -moz-user-select: none;     /* Firefox all */\n    -ms-user-select: none;      /* IE 10+ */\n    user-select: none;          /* Likely future */\n    min-height: 24px;\n    background-color: transparent;\n    color: #CCCCCC;\n    box-sizing: border-box;\n    padding-top: 3px;\n    text-align: center;\n    border-radius: 125px;\n    border:2px solid #555;\n    cursor: pointer;\n    padding-bottom: 3px;\n    display:block;\n    width:100%;\n}\n\n.sidebar__button-input.plus, .sidebar__button-input.minus {\n    display: inline-block;\n    min-width: 20px;\n}\n\n.sidebar__button-input:hover {\n  background-color: #333;\n  border:2px solid var(--sidebar-color);\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n    --sidebar-slider-input-height: 3px;\n}\n\n.sidebar__slider-input-wrapper {\n    width: 100%;\n\n    margin-top: 8px;\n    position: relative;\n}\n\n.sidebar__slider-input {\n    -webkit-appearance: none;\n    appearance: none;\n    margin: 0;\n    width: 100%;\n    height: var(--sidebar-slider-input-height);\n    background: #555;\n    cursor: pointer;\n    /*outline: 0;*/\n\n    -webkit-transition: .2s;\n    transition: background-color .2s;\n    border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n    user-select: none;\n    position: absolute;\n    z-index: 11;\n    top: 0;\n    left: 0;\n    background-color: var(--sidebar-color);\n    pointer-events: none;\n    height: var(--sidebar-slider-input-height);\n    max-width: 100%;\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n    /*background-color: #444444;*/\n}\n\n/*.sidebar__slider-input::-webkit-progress-value {*/\n/*    background-color: green;*/\n/*    color:green;*/\n\n/*    }*/\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.sidebar__slider-input::-moz-range-thumb\n{\n    position: absolute;\n    height: 15px;\n    width: 15px;\n    z-index: 900 !important;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: var(--sidebar-color) !important;\n    user-select: none;\n\n}\n\n.sidebar__slider-input::-webkit-slider-thumb\n{\n    position: relative;\n    appearance: none;\n    -webkit-appearance: none;\n    user-select: none;\n    height: 15px;\n    width: 15px;\n    display: block;\n    z-index: 900 !important;\n    border: 0;\n    border-radius: 20px !important;\n    cursor: pointer;\n    background: #777 !important;\n}\n\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n    background-color: #EEEEEE !important;\n}\n\n/*.sidebar__slider-input::-moz-range-thumb {*/\n\n/*    width: 0 !important;*/\n/*    height: var(--sidebar-slider-input-height);*/\n/*    background: #EEEEEE;*/\n/*    cursor: pointer;*/\n/*    border-radius: 0 !important;*/\n/*    border: none;*/\n/*    outline: 0;*/\n/*    z-index: 100 !important;*/\n/*}*/\n\n.sidebar__slider-input::-moz-range-track {\n    background-color: transparent;\n    z-index: 11;\n}\n\n.sidebar__slider input[type=text],\n.sidebar__slider input[type=paddword]\n{\n    box-sizing: border-box;\n    /*background-color: #333333;*/\n    text-align: right;\n    color: #BBBBBB;\n    display: inline-block;\n    background-color: transparent !important;\n\n    width: 40%;\n    height: 18px;\n    /*outline: none;*/\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n}\n\n.sidebar__slider input[type=text]:active,\n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover\n.sidebar__slider input[type=password]:active,\n.sidebar__slider input[type=password]:focus,\n.sidebar__slider input[type=password]:hover\n{\n\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n\n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n}\n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=date],\n.sidebar__text-input input[type=datetime-local],\n.sidebar__text-input input[type=text],\n.sidebar__text-input input[type=password] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n\n\n    border: none;\n    border-radius: 0;\n    border:1px solid #666;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    color-scheme: dark;\n}\n\n.sidebar__text-input textarea:focus::placeholder {\n  color: transparent;\n}\n\n\n\n\n\n.sidebar__color-picker .sidebar__item-label\n{\n    width:45%;\n}\n\n.sidebar__text-input textarea,\n.sidebar__text-input input[type=text]:active,\n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover,\n.sidebar__text-input input[type=password]:active,\n.sidebar__text-input input[type=password]:focus,\n.sidebar__text-input input[type=password]:hover {\n    background-color: transparent;\n    color: #EEEEEE;\n\n}\n\n.sidebar__text-input textarea\n{\n    margin-top:10px;\n    height:60px;\n    width:100%;\n}\n\n/*\n * SIDEBAR SELECT\n */\n\n\n\n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    /*-webkit-appearance: none;*/\n    /*-moz-appearance: none;*/\n    appearance: none;\n    /*box-sizing: border-box;*/\n    width: 50%;\n    /*height: 20px;*/\n    background-color: #333333;\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 16px 16px;\n    margin: 0;\n    /*padding: 0 2 2 6px;*/\n    border-radius: 5px;\n    border: 1px solid #777;\n    background-color: #444;\n    cursor: pointer;\n    /*outline: none;*/\n    padding-left: 5px;\n\n }\n\n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:inactive {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*.sidebar__select-select option*/\n/*{*/\n/*    background-color: #444444;*/\n/*    color: #bbb;*/\n/*}*/\n\n.sidebar__select-select option:checked\n{\n    background-color: #000;\n    color: #FFF;\n}\n\n\n/*\n * COLOR PICKER\n */\n\n\n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    /*outline: none;*/\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n}\n\n.sidebar__color-picker input[type=text]:active,\n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\ndiv.sidebar__color-picker-color-input,\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n\n    padding: 0;\n    border: none;\n    /*border:2px solid red;*/\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}\n\n.sidebar__greyout\n{\n    background: #222;\n    opacity: 0.8;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1000;\n    right: 0;\n    top: 0;\n}\n\n.sidebar_tabs\n{\n    background-color: #151515;\n    padding-bottom: 0px;\n}\n\n.sidebar_switchs\n{\n    float: right;\n}\n\n.sidebar_tab\n{\n    float:left;\n    background-color: #151515;\n    border-bottom:1px solid transparent;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_tab_active\n{\n    background-color: #272727;\n    color:white;\n}\n\n.sidebar_tab:hover\n{\n    border-bottom:1px solid #777;\n    color:white;\n}\n\n\n.sidebar_switch\n{\n    float:left;\n    background-color: #444;\n    padding-right:7px;\n    padding-left:7px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n    cursor:pointer;\n}\n\n.sidebar_switch:last-child\n{\n    border-top-right-radius: 7px;\n    border-bottom-right-radius: 7px;\n}\n\n.sidebar_switch:first-child\n{\n    border-top-left-radius: 7px;\n    border-bottom-left-radius: 7px;\n}\n\n\n.sidebar_switch_active\n{\n    background-color: #999;\n    color:white;\n}\n\n.sidebar_switch:hover\n{\n    color:white;\n}\n\n.sidebar__text-input-input::focus-visible,\n/*.sidebar__text-input-input:active,*/\n.sidebar__button-input:focus-visible,\n.sidebar__text-input:focus-visible\n/*.sidebar__text-input:active*/\n{\n    outline-style: solid;\n    outline-color:white;\n    outline-width: 1px;\n\n}\n\n"};const r="cables-sidebar-style";const a="cables-sidebar-dynamic-style";const s="sidebar-cables";const l="sidebar"+CABLES.uuid();const u="sidebar__items";const p="sidebar__close-button";const o="";const F="";let c=null;let L=null;let d=null;const e=i.inValueBool("Visible",true);const t=i.inValueSlider("Opacity",1);const A=i.inValueBool("Default Minimized");const g=i.inValueSlider("Minimized Opacity",.5);const m=i.inValueBool("Show undo button",false);const C=i.inValueBool("Show Minimize",false);const h=i.inString("Title","");const b=i.inValueBool("Side");const E=i.inValueBool("Default CSS",true);let B=i.patch.cgl.canvas.ownerDocument;const D=i.outObject("childs");D.setUiAttribs({title:"Children"});const f=i.outBool("Opfened");f.setUiAttribs({title:"Opened"});let v=B.querySelector("."+l);if(!v)v=V();const O=v.querySelector("."+u);D.set({parentElement:O,parentOp:i});N();M();j();E.onChange=()=>{M();j()};e.onChange=w;t.onChange=S;A.onChange=N;g.onChange=y;m.onChange=x;i.onDelete=k;function y(){j()}C.onChange=I;function I(e){if(!e||e.uiAttribs)e=B.querySelector(".sidebar-cables .sidebar__group-header");if(!e)return;const t=B.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");if(C.get()){e.classList.add("iconsidebar-chevron-up");e.classList.add("iconsidebar-minimizebutton");if(t)t.style.marginRight="20px"}else{e.classList.remove("iconsidebar-chevron-up");e.classList.remove("iconsidebar-minimizebutton");if(t)t.style.marginRight="initial"}}b.onChange=function(){if(!v)return;if(b.get())v.classList.add("sidebar-cables-right");else v.classList.remove("sidebar-cables-right")};function x(){const e=B.querySelector(".sidebar-cables .sidebar__group-header");if(e){_(e)}}function _(e){if(e){const t=B.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");if(t){if(!m.get()){t.remove()}}else{if(m.get()){const n=B.createElement("span");n.classList.add("sidebar__group-header-undo");n.classList.add("sidebar-icon-undo");n.addEventListener("click",function(e){e.stopPropagation();const t=B.querySelectorAll(".sidebar-cables .sidebar__reloadable");const n=B.createEvent("MouseEvents");n.initEvent("dblclick",true,true);t.forEach(e=>{e.dispatchEvent(n)})});e.appendChild(n)}}}I(e)}function N(){if(!c){return}if(A.get()){v.classList.add("sidebar--closed");if(e.get())f.set(false)}else{v.classList.remove("sidebar--closed");if(e.get())f.set(true)}}function S(){const e=t.get();v.style.opacity=e}function w(){if(!v)return;if(e.get()){v.style.display="block";if(!v.classList.contains("sidebar--closed"))f.set(true)}else{v.style.display="none";f.set(false)}}b.onChanged=function(){};function j(){const e=B.querySelectorAll("."+a);if(e){e.forEach(function(e){e.parentNode.removeChild(e)})}if(!E.get())return;const t=B.createElement("style");t.classList.add("cablesEle");t.classList.add(a);let n=".sidebar--closed .sidebar__close-button { ";n+="opacity: "+g.get();n+="}";const r=B.createTextNode(n);t.appendChild(r);B.body.appendChild(t)}function V(){const e=B.createElement("div");e.classList.add(s);e.classList.add(l);const t=i.patch.cgl.canvas.parentElement;const n=B.createElement("div");n.classList.add("sidebar__group");e.appendChild(n);const r=B.createElement("div");r.classList.add("sidebar__group-header");e.appendChild(r);const a=B.createElement("span");a.classList.add("sidebar__group-header-title");d=B.createElement("span");d.classList.add("sidebar__group-header-title-text");d.innerHTML=h.get();a.appendChild(d);r.appendChild(a);_(r);I(r);n.appendChild(r);e.appendChild(n);n.addEventListener("click",T);if(!t){i.warn("[sidebar] no canvas parentelement found...");return}t.appendChild(e);const o=B.createElement("div");o.classList.add(u);e.appendChild(o);c=B.createElement("div");c.classList.add(p);c.addEventListener("click",T);e.appendChild(c);return e}h.onChange=function(){if(d)d.innerHTML=h.get()};function P(e){}function T(e){e.stopPropagation();if(!v){i.logError("Sidebar could not be closed...");return}v.classList.toggle("sidebar--closed");const t=e.target;let n=o;if(v.classList.contains("sidebar--closed")){n=F;f.set(false)}else{f.set(true)}}function M(){const e=B.querySelectorAll("."+r);if(e){e.forEach(e=>{e.parentNode.removeChild(e)})}if(!E.get())return;const t=B.createElement("style");t.innerHTML=n.style_css;t.classList.add(r);t.classList.add("cablesEle");B.body.appendChild(t)}function k(){R(v)}function R(e){if(e&&e.parentNode&&e.parentNode.removeChild)e.parentNode.removeChild(e)}};Ops.Sidebar.Sidebar.prototype=new CABLES.Op;CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"]={f:Ops.Sidebar.Sidebar,objName:"Ops.Sidebar.Sidebar"};Ops.Trigger.TriggerOnChangeString=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inString("String"),r=e.outTrigger("Changed"),a=e.outString("Result");a.ignoreValueSerialize=true;n.onChange=function(){a.set(n.get());r.trigger()}};Ops.Trigger.TriggerOnChangeString.prototype=new CABLES.Op;CABLES.OPS["319d07e0-5cbe-4bc1-89fb-a934fd41b0c4"]={f:Ops.Trigger.TriggerOnChangeString,objName:"Ops.Trigger.TriggerOnChangeString"};Ops.String.NumberToString_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inValue("Number"),r=e.inInt("Decimal Places",4),a=e.outString("Result");let o=false;let i=1;r.onChange=s;n.onChange=l;s();l();function s(){o=r.get()<100;i=Math.pow(10,r.get());l()}function l(){if(o)a.set(String(Math.round(n.get()*i)/i));else a.set(String(n.get()||0))}};Ops.String.NumberToString_v2.prototype=new CABLES.Op;CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};Ops.Ui.Area=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inString("Title",""),r=e.inTriggerButton("Delete");n.setUiAttribs({hidePort:true});e.setUiAttrib({hasArea:true});e.init=n.onChange=e.onLoaded=a;a();function a(){if(CABLES.UI){gui.savedState.setUnSaved("areaOp",e.getSubPatch());e.uiAttr({comment_title:n.get()||" "});e.name=n.get()}}r.onTriggered=()=>{e.patch.deleteOp(e.id)}};Ops.Ui.Area.prototype=new CABLES.Op;CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};Ops.Array.ArrayIteratorStrings=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Exe"),r=e.inArray("Array"),a=e.outTrigger("Trigger"),o=e.outNumber("Index"),i=e.outString("Value");n.onTriggered=function(){if(!r.get())return;for(let t=0;t<r.get().length;t++){o.set(t);let e=null;if(r.get()[t]){e=String(r.get()[t])}i.set(e);a.trigger()}}};Ops.Array.ArrayIteratorStrings.prototype=new CABLES.Op;CABLES.OPS["0f8ee026-e094-484d-8403-547c92293be9"]={f:Ops.Array.ArrayIteratorStrings,objName:"Ops.Array.ArrayIteratorStrings"};Ops.Vars.VarTriggerArray=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTriggerButton("Trigger"),r=e.inArray("Value",null),a=e.outTrigger("Next");e.varName=e.inDropDown("Variable",[],"",true);new CABLES.VarSetOpWrapper(e,"array",r,e.varName,n,a)};Ops.Vars.VarTriggerArray.prototype=new CABLES.Op;CABLES.OPS["9fd759cf-6fcc-487e-9dd9-9c9ab6143683"]={f:Ops.Vars.VarTriggerArray,objName:"Ops.Vars.VarTriggerArray"};Ops.Array.ArraySetNumber_v3=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const r=e.inArray("Array"),a=e.inInt("Index",0),o=e.inFloat("Number",1),i=e.outArray("Result");let s=[];e.toWorkPortsNeedToBeLinked(r);r.onChange=a.onChange=o.onChange=n;function n(){const t=r.get();if(!t){i.set(null);return}s.length=t.length;const n=a.get();for(let e=0;e<t.length;e++){if(n===e)s[e]=o.get();else s[e]=t[e]}i.setRef(s)}};Ops.Array.ArraySetNumber_v3.prototype=new CABLES.Op;CABLES.OPS["1a71327d-fe88-4796-9ebd-5a1c1cd083af"]={f:Ops.Array.ArraySetNumber_v3,objName:"Ops.Array.ArraySetNumber_v3"};Ops.Patch.PMZcxaN.HandleTextDisplay=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute"),s=e.inArray("Node Weights"),l=e.inArray("Text Ratios"),u=e.outArray("Scale Coordinates"),p=e.outArray("UV Coordinates");l.onChange=n.onTriggered;s.onChange=n.onTriggered;n.onTriggered=()=>{const t=s.get();const n=l.get();const r=t.length;const a=n.reduce((e,t)=>Math.max(e,t));const o=[];const i=[];for(let e=0;e<r;e++){o.push(0,(r-e-1)/r,n[e]/a,1/r);i.push(t[e]*n[e]/a,t[e],0)}u.set(i);p.set(o)}};Ops.Patch.PMZcxaN.HandleTextDisplay.prototype=new CABLES.Op;CABLES.OPS["5163a4b3-9e53-45a9-b824-9b283afd2826"]={f:Ops.Patch.PMZcxaN.HandleTextDisplay,objName:"Ops.Patch.PMZcxaN.HandleTextDisplay"};Ops.Array.ArrayChunkDuplicate=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const s=e.inArray("Array"),l=e.inInt("Chunk Size",3),u=e.inInt("Repeats",10),p=e.outArray("Result");s.onChange=l.onChange=u.onChange=()=>{let n=l.get();let r=u.get();let a=s.get();if(!a)return;if(n<=0)return;if(n<=0)return;let o=[];let i=0;for(let t=0;t<a.length;t+=n){for(let e=0;e<r;e++){for(let e=0;e<n;e++){o[i]=a[t+e];i++}}}p.setRef(o)}};Ops.Array.ArrayChunkDuplicate.prototype=new CABLES.Op;CABLES.OPS["a3425fda-2c3c-42a4-b943-122d0a9b3c7e"]={f:Ops.Array.ArrayChunkDuplicate,objName:"Ops.Array.ArrayChunkDuplicate"};Ops.Array.ArrayMathArray=function(){CABLES.Op.apply(this,arguments);const t=this;const e=t.attachments={};const a=t.inArray("array 0"),o=t.inArray("array 1"),n=t.inSwitch("Math function",["+","-","*","/","%","min","max"],"+"),i=t.outArray("Array result"),s=t.outNumber("Array length");let l;let r=false;const u=[];t.toWorkPortsNeedToBeLinked(o,a);n.onChange=p;a.onChange=o.onChange=F;p();function p(){const e=n.get();if(e==="+")l=function(e,t){return e+t};else if(e==="-")l=function(e,t){return e-t};else if(e==="*")l=function(e,t){return e*t};else if(e==="/")l=function(e,t){return e/t};else if(e==="%")l=function(e,t){return e%t};else if(e==="min")l=function(e,t){return Math.min(e,t)};else if(e==="max")l=function(e,t){return Math.max(e,t)};F();t.setUiAttrib({extendTitle:e})}function F(){const t=a.get();const n=o.get();if(!t||!n){i.set(null);s.set(0);return}const r=u.length=t.length;for(let e=0;e<r;e++){u[e]=l(t[e],n[e])}s.set(u.length);i.setRef(u)}};Ops.Array.ArrayMathArray.prototype=new CABLES.Op;CABLES.OPS["f31a1764-ce14-41de-9b3f-dc2fe249bb52"]={f:Ops.Array.ArrayMathArray,objName:"Ops.Array.ArrayMathArray"};Ops.Gl.Meshes.RectangleRounded_v2=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("render");const b=e.inValueInt("Segments",24);const r=e.outTrigger("trigger");const E=e.inValueFloat("width",1);const B=e.inValueFloat("height",1);const D=e.inValueSlider("border radius",.5);const f=new CGL.Geometry("triangle");const v=e.outObject("geometry");v.ignoreValueSerialize=true;e.toWorkPortsNeedToBeLinked(n);e.setPortGroup("Size",[E,B,D,b]);const O=e.inValueBool("Top Left",true);const y=e.inValueBool("Top Right",true);const I=e.inValueBool("Bottom Left",true);const x=e.inValueBool("Bottom Right",true);const a=[O,y,I,x];a.forEach(e=>{e.onChange=i});e.setPortGroup("Round Corner",a);const o=e.inValueBool("Draw",true);e.setPortGroup("Draw",[o]);const _=e.patch.cgl;let N=null;E.onChange=i;B.onChange=i;D.onChange=i;b.onChange=i;i();n.onTriggered=function(){if(o.get())N.render(_.getShader());r.trigger()};function i(){const e=Math.abs(E.get());const t=Math.abs(B.get());const n=e<t?D.get()*e/2:D.get()*t/2;const r=e-2*n;const a=t-2*n;const o=r/2;const i=a/2;const s=Math.abs(b.get()||1);const l=[-1*o,i,0];const u=[-1*o,-1*i,0];const p=[o,i,0];const F=[o,-1*i,0];const c=[];let d=0;let A=0;if(O.get()){for(let e=0;e<=s;e+=1){const C=l[0]+(0-n*Math.cos(e*Math.PI/2/s));const h=l[1]+n*Math.sin(e*Math.PI/2/s);c.push(C,h,0);if(e>1){c.push(d,A,0)}if(e<=s-1)c.push(...l);d=C;A=h}}else{c.push(...l);c.push(-o,i+n,0);c.push(-o-n,i+n,0);c.push(...l);c.push(-o-n,i+n,0);c.push(-o-n,i,0)}if(y.get()){for(let e=0;e<=s;e+=1){const C=p[0]+n*Math.cos(e*Math.PI/2/s);const h=p[1]+n*Math.sin(e*Math.PI/2/s);if(e>1){c.push(...p,d,A,0)}c.push(C,h,0);if(e===s-1)c.push(...p);d=C;A=h}}else{c.push(...p);c.push(o+n,i,0);c.push(o+n,i+n,0);c.push(...p);c.push(o+n,i+n,0);c.push(o,i+n,0)}if(x.get()){for(let e=0;e<=s;e+=1){const C=F[0]+n*Math.cos(e*Math.PI/2/s);const h=F[1]+n*-1*Math.sin(e*Math.PI/2/s);c.push(C,h,0);if(e>1){c.push(d,A,0)}if(e<=s-1)c.push(...F);d=C;A=h}}else{c.push(...F);c.push(o+n,-i-n,0);c.push(o+n,-i,0);c.push(...F);c.push(o,-i-n,0);c.push(o+n,-i-n,0)}if(I.get()){for(let e=0;e<=s;e+=1){const C=u[0]+n*-1*Math.cos(e*Math.PI/2/s);const h=u[1]+n*-1*Math.sin(e*Math.PI/2/s);if(e>1){c.push(d,A,0)}c.push(C,h,0);if(e<=s-1)c.push(...u);d=C;A=h}}else{c.push(...u);c.push(-o-n,-i-n,0);c.push(-o,-i-n,0);c.push(...u);c.push(-o-n,-i,0);c.push(-o-n,-i-n,0)}f.vertices=[-1*o,-i,0,o,i,0,-1*o,i,0,-1*o,-1*i,0,o,-1*i,0,o,i,0,-1*o-n,-1*i,0,-1*o,-1*i,0,-1*o-n,i,0,-1*o-n,i,0,-1*o,-1*i,0,-1*o,i,0,-1*o,i,0,o,i+n,0,-1*o,i+n,0,o,i+n,0,-1*o,i,0,o,i,0,-1*o,-1*i,0,-1*o,-1*i-n,0,o,-1*i-n,0,o,-1*i,0,-1*o,-1*i,0,o,-1*i-n,0,o+n,i,0,o,i,0,o+n,-1*i,0,o+n,-1*i,0,o,i,0,o,-1*i,0,...c];f.texCoords=[];const g=Math.abs(e);const m=Math.abs(t);for(let e=0;e<f.vertices.length;e+=3){f.texCoords[e/3*2+0]=Math.abs(f.vertices[e+0]/-g-.5);f.texCoords[e/3*2+1]=Math.abs(f.vertices[e+1]/m-.5)}f.vertexNormals=f.vertices.map((e,t)=>{return t%3===2?1:0});f.tangents=f.vertices.map((e,t)=>{return t%3===0?-1:0});f.biTangents=f.vertices.map((e,t)=>{return t%3===1?-1:0});if(f.vertices.length==0)return;if(N)N.dispose();N=null;N=new CGL.Mesh(_,f);v.set(null);v.set(f)}};Ops.Gl.Meshes.RectangleRounded_v2.prototype=new CABLES.Op;CABLES.OPS["86c99074-4929-44d0-a826-49e7f8bdf5c4"]={f:Ops.Gl.Meshes.RectangleRounded_v2,objName:"Ops.Gl.Meshes.RectangleRounded_v2"};Ops.Patch.PMZcxaN.FruchtermanReingoldComputation=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Execute");const r=e.inTrigger("Reset");const T=e.inInt("Graph Size");const M=e.inArray("Positions");const L=e.inArray("Adjacency Matrix");const w=e.inArray("Node Text Sizes 2D");const a=e.inFloat("Initial Temperature",1);const V=e.inFloat("Cooldown",.005);const P=e.inFloat("Density",.8);const k=e.inBool("Center Graph in Bounds",true);const R=e.inFloat("Aspect Ratio",1);const z=e.inFloat("Margin",.1);const G=e.outTrigger("Trigger");const U=e.outArray("Next Positions");let W=a.get();r.onTriggered=()=>{W=a.get()};function Z(e,t,n,r,a){let o=0;let i=e-t;if(i<r&&i>0){o+=a*(r/i)}else if(i<=0){o+=a*2}let s=n-e;if(s<r&&s>0){o-=a*(r/s)}else if(s<=0){o-=a*2}return o}n.onTriggered=()=>{let i=M.get();let s=L.get();const l=T.get();const e=V.get();const u=1e-6;const t=k.get();const p=P.get();const n=R.get();const r=z.get();const a=w.get();const o=-1+r;const F=1-r;const c=n*o;const d=n*F;const A=Math.sqrt((d-c)*(F-o)/l);const g=A*A;const m=new Float32Array(l*2);for(let o=0;o<l;o++){const h=i[o*2];const b=i[o*2+1];for(let a=o+1;a<l;a++){const E=i[a*2];const B=i[a*2+1];let e=h-E;let t=b-B;let n=e*e+t*t;let r=Math.sqrt(n);r=Math.max(u,r);const D=e/r;const f=t/r;const v=g/r;m[o*2]+=D*v;m[o*2+1]+=f*v;m[a*2]-=D*v;m[a*2+1]-=f*v;const O=s[o*l+a];if(O>0){const y=n/A*O*(1/p);m[o*2]-=D*y;m[o*2+1]-=f*y;m[a*2]+=D*y;m[a*2+1]+=f*y}}}if(t){const I=W*.2;for(let e=0;e<l;e++){m[e*2]+=Z(i[e*2],c,d,A,I);m[e*2+1]+=Z(i[e*2+1],o,F,A,I)}}const C=new Float32Array(l*2);for(let a=0;a<l;a++){const x=m[a*2];const _=m[a*2+1];const N=x*x+_*_;let e=0;let t=0;if(N>u*u){const S=Math.sqrt(N);const j=Math.min(S,W);e=x/S*j;t=_/S*j}let n=i[a*2]+e;let r=i[a*2+1]+t;n=Math.max(c,Math.min(d,n));r=Math.max(o,Math.min(F,r));C[a*2]=n;C[a*2+1]=r}W=Math.max(0,W-e);U.set(C);G.trigger()}};Ops.Patch.PMZcxaN.FruchtermanReingoldComputation.prototype=new CABLES.Op;CABLES.OPS["c15fb7f1-52d1-4b9d-b999-f067e7deeb9f"]={f:Ops.Patch.PMZcxaN.FruchtermanReingoldComputation,objName:"Ops.Patch.PMZcxaN.FruchtermanReingoldComputation"};Ops.Patch.PMZcxaN.NodeDragger=function(){CABLES.Op.apply(this,arguments);const e=this;const t=e.attachments={};const n=e.inTrigger("Trigger");const g=e.inFloat("Mouse X");const m=e.inFloat("Mouse Y");const C=e.inBool("Mouse Button Down");const h=e.inArray("CurrentNodePositions2D");const b=e.inInt("GraphSize");const E=e.inFloat("NodeVisualRadius",.5);const B=e.inBool("EnableDrag",true);const D=e.inArray("Text Aspect Ratio");const f=e.outArray("UpdatedNodePositions2D");const v=e.outNumber("DraggedNodeIndex");const O=e.outBool("IsDragging");const y=e.outTrigger("Next");let I=false;let x=-1;let _=0;let N=0;let S=null;let j=false;let T=null;n.onTriggered=()=>{const r=g.get();const a=m.get();const e=C.get();const t=h.get();const o=b.get();const i=E.get();const n=B.get();const s=D.get();if(!r||!a||!t||o===0){if(t)f.set(t);else f.set(new Float32Array(0));v.set(-1);O.set(false);y.trigger();return}if(!S||S.length!==t.length){S=new Float32Array(t)}else{if(!I){if(S!==t){S.set(t)}}}if(!n){if(I){I=false;x=-1}f.set(S);v.set(x);O.set(I);y.trigger();return}if(e){if(!I&&!j){let t=i*i;let n=-1;for(let e=0;e<o;e++){const l=S[e*2];const u=S[e*2+1];const p=(r-l)*s[e*3];const F=(a-u)*s[e*3+1];const c=p*p+F*F;if(c<t){t=c;n=e}}if(n!==-1){I=true;x=n;_=r-S[n*2];N=a-S[n*2+1];console.warn("picked node: ",n,"\nmouseXY: ",r,a,"\nnodePositionXY: ",S[n*2],S[n*2+1])}}else if(I&&x!==-1){const d=r-_;const A=a-N;S[x*2]=d;S[x*2+1]=A}}else{if(I){I=false;j=true;if(T)clearTimeout(T);T=setTimeout(()=>{j=false},50)}}f.set(S);v.set(x);O.set(I);if(!e&&!I&&x!==-1&&!j){x=-1}y.trigger()};e.onDelete=()=>{if(T){clearTimeout(T)}}};Ops.Patch.PMZcxaN.NodeDragger.prototype=new CABLES.Op;CABLES.OPS["37081aa1-6b05-466b-9f22-469e7287443b"]={f:Ops.Patch.PMZcxaN.NodeDragger,objName:"Ops.Patch.PMZcxaN.NodeDragger"};window.addEventListener("load",function(e){CABLES.jsLoaded=new Event("CABLES.jsLoaded");document.dispatchEvent(CABLES.jsLoaded)});(()=>{"use strict";var e={};const i={ANIM:{EASINGS:["linear","absolute","smoothstep","smootherstep","Cubic In","Cubic Out","Cubic In Out","Expo In","Expo Out","Expo In Out","Sin In","Sin Out","Sin In Out","Quart In","Quart Out","Quart In Out","Quint In","Quint Out","Quint In Out","Back In","Back Out","Back In Out","Elastic In","Elastic Out","Bounce In","Bounce Out"],EASING_LINEAR:0,EASING_ABSOLUTE:1,EASING_SMOOTHSTEP:2,EASING_SMOOTHERSTEP:3,EASING_CUBICSPLINE:4,EASING_CUBIC_IN:5,EASING_CUBIC_OUT:6,EASING_CUBIC_INOUT:7,EASING_EXPO_IN:8,EASING_EXPO_OUT:9,EASING_EXPO_INOUT:10,EASING_SIN_IN:11,EASING_SIN_OUT:12,EASING_SIN_INOUT:13,EASING_BACK_IN:14,EASING_BACK_OUT:15,EASING_BACK_INOUT:16,EASING_ELASTIC_IN:17,EASING_ELASTIC_OUT:18,EASING_BOUNCE_IN:19,EASING_BOUNCE_OUT:21,EASING_QUART_IN:22,EASING_QUART_OUT:23,EASING_QUART_INOUT:24,EASING_QUINT_IN:25,EASING_QUINT_OUT:26,EASING_QUINT_INOUT:27},OP:{OP_PORT_TYPE_VALUE:0,OP_PORT_TYPE_NUMBER:0,OP_PORT_TYPE_FUNCTION:1,OP_PORT_TYPE_TRIGGER:1,OP_PORT_TYPE_OBJECT:2,OP_PORT_TYPE_TEXTURE:2,OP_PORT_TYPE_ARRAY:3,OP_PORT_TYPE_DYNAMIC:4,OP_PORT_TYPE_STRING:5,OP_VERSION_PREFIX:"_v"},PORT:{PORT_DIR_IN:0,PORT_DIR_OUT:1},PACO:{PACO_CLEAR:0,PACO_VALUECHANGE:1,PACO_OP_DELETE:2,PACO_UNLINK:3,PACO_LINK:4,PACO_LOAD:5,PACO_OP_CREATE:6,PACO_OP_ENABLE:7,PACO_OP_DISABLE:8,PACO_UIATTRIBS:9,PACO_VARIABLES:10,PACO_TRIGGERS:11,PACO_PORT_SETVARIABLE:12,PACO_PORT_SETANIMATED:13,PACO_PORT_ANIM_UPDATED:14,PACO_DESERIALIZE:15,PACO_OP_RELOAD:16}};const t=class{constructor(t,e,n,r,a,o){this._valuePort=n;this._varNamePort=r;this._op=t;this._type=e;this._typeId=-1;this._triggerPort=a;this._nextPort=o;this._btnCreate=t.inTriggerButton("Create new variable");this._btnCreate.setUiAttribs({hidePort:true});this._btnCreate.onTriggered=this._createVar.bind(this);this._helper=t.inUiTriggerButtons("",["Rename"]);this._helper.setUiAttribs({hidePort:true});this._helper.onTriggered=e=>{if(e=="Rename")CABLES.CMD.PATCH.renameVariable(t.varName.get())};this._op.setPortGroup("Variable",[this._helper,this._varNamePort,this._btnCreate]);r.setUiAttribs({_variableSelect:true});this._op.on("uiParamPanel",this._updateVarNamesDropdown.bind(this));this._op.patch.addEventListener("variablesChanged",this._updateName.bind(this));this._op.patch.addEventListener("variableRename",this._renameVar.bind(this));this._varNamePort.onChange=this._updateName.bind(this);this._isTexture=this._valuePort.uiAttribs.objType==="texture";this._valuePort.changeAlways=true;if(this._triggerPort){this._triggerPort.onTriggered=()=>{this._setVarValue(true)}}else{this._valuePort.onChange=this._setVarValue.bind(this)}this._op.init=()=>{this._updateName();if(!this._triggerPort)this._setVarValue();this._updateErrorUi()};if(e=="array")this._typeId=i.OP.OP_PORT_TYPE_ARRAY;else if(e=="object")this._typeId=i.OP.OP_PORT_TYPE_OBJECT;else if(e=="string")this._typeId=i.OP.OP_PORT_TYPE_STRING;else if(e=="texture")this._typeId=i.OP.OP_PORT_TYPE_TEXTURE;else this._typeId=i.OP.OP_PORT_TYPE_VALUE}_updateErrorUi(){if(CABLES.UI){if(!this._varNamePort.get())this._op.setUiError("novarname","no variable selected");else{if(this._op.hasUiErrors){this._op.setUiError("novarname",null)}}}}_updateName(){const e=this._varNamePort.get();this._op.setTitle("var set");this._op.setUiAttrib({extendTitle:"#"+e});this._updateErrorUi();const t=this._op.patch.getVar(e);if(t&&!t.type)t.type=this._type;if(!this._op.patch.hasVar(e)&&e!=0&&!this._triggerPort){this._setVarValue()}if(!this._op.patch.hasVar(e)&&e!=0&&this._triggerPort){if(this._type=="string")this._op.patch.setVarValue(e,"");else if(this._type=="number")this._op.patch.setVarValue(e,"");else this._op.patch.setVarValue(e,null)}if(this._op.isCurrentUiOp()){this._updateVarNamesDropdown();this._op.refreshParams()}this._updateDisplay();this._op.patch.emitEvent("opVariableNameChanged",this._op,this._varNamePort.get())}_createVar(){CABLES.CMD.PATCH.createVariable(this._op,this._type,()=>{this._updateName()})}_updateDisplay(){this._valuePort.setUiAttribs({greyout:!this._varNamePort.get()})}_updateVarNamesDropdown(){if(CABLES.UI&&CABLES.UI.loaded&&CABLES.UI.loaded){const e=CABLES.UI.uiProfiler.start("[vars] _updateVarNamesDropdown");const t=[];const n=this._op.patch.getVars();for(const r in n)if(n[r].type==this._type&&r!="0")t.push(r);this._varNamePort.uiAttribs.values=t;e.finish()}}_renameVar(e,t){if(e!=this._varNamePort.get())return;this._varNamePort.set(t);this._updateName()}_setVarValue(e){const t=this._varNamePort.get();if(!t)return;const n=this._valuePort.get();if(this._typeId==i.OP.OP_PORT_TYPE_VALUE||this._typeId==i.OP.OP_PORT_TYPE_STRING){this._op.patch.setVarValue(t,n)}else if(this._typeId==i.OP.OP_PORT_TYPE_ARRAY){this._arr=[];CABLES.copyArray(n,this._arr);this._op.patch.setVarValue(t,this._arr)}else{if(this._typeId==i.OP.OP_PORT_TYPE_OBJECT){if(this._isTexture)this._op.patch.setVarValue(t,CGL.Texture.getEmptyTexture(this._op.patch.cgl));else this._op.patch.setVarValue(t,null);if(n&&n.tex&&n._cgl&&!this._isTexture)this._op.setUiError("texobj","Dont use object variables for textures, use varSetTexture");else this._op.setUiError("texobj",null)}this._op.patch.setVarValue(t,n)}if(e&&this._nextPort)this._nextPort.trigger()}};const n=class{constructor(e,t,n,r){this._op=e;this._type=t;this._varnamePort=n;this._variable=null;this._valueOutPort=r;this._listenerId=null;this._op.on("uiParamPanel",this._updateVarNamesDropdown.bind(this));this._op.on("uiErrorChange",this._updateTitle.bind(this));this._op.patch.on("variableRename",this._renameVar.bind(this));this._op.patch.on("variableDeleted",e=>{if(this._op.isCurrentUiOp())this._op.refreshParams()});n.setUiAttribs({_variableSelect:true});n.setUiAttribs({_variableSelectGet:true});this._varnamePort.onChange=this._changeVar.bind(this);this._op.patch.addEventListener("variablesChanged",this._init.bind(this));this._op.onDelete=()=>{if(this._variable&&this._listenerId)this._variable.off(this._listenerId)};this._op.init=()=>{this._init()}}get variable(){return this._variable}_changeVar(){if(this._variable&&this._listenerId){this._variable.off(this._listenerId)}this._init()}_renameVar(e,t){if(e!=this._varnamePort.get())return;this._varnamePort.set(t);this._updateVarNamesDropdown();this._updateTitle();this._listenerId=this._variable.on("change",this._setValueOut.bind(this))}_updateVarNamesDropdown(){if(CABLES.UI&&CABLES.UI.loaded){const e=[];const t=this._op.patch.getVars();for(const n in t)if(t[n].type==this._type&&n!="0")e.push(n);this._op.varName.uiAttribs.values=e}}_setValueOut(e){if(this._valueOutPort)if(this._typeId==i.OP.OP_PORT_TYPE_ARRAY&&this._typeId==i.OP.OP_PORT_TYPE_OBJECT)this._valueOutPort.setRef(e);else this._valueOutPort.set(e)}_updateTitle(){if(this._variable){this._op.setUiError("unknownvar",null);this._op.setTitle("var get");this._op.setUiAttrib({extendTitle:"#"+this._varnamePort.get()});if(this._valueOutPort)this._valueOutPort.set(this._variable.getValue())}else{this._op.setUiError("unknownvar","unknown variable! - there is no setVariable with this name ("+this._varnamePort.get()+")");this._op.setUiAttrib({extendTitle:"#invalid"});if(this._valueOutPort)this._valueOutPort.set(0)}}_init(){this._updateVarNamesDropdown();if(this._variable&&this._listenerId)this._variable.off(this._listenerId);this._variable=this._op.patch.getVar(this._op.varName.get());if(this._variable)this._listenerId=this._variable.on("change",this._setValueOut.bind(this));this._updateTitle();this._op.patch.emitEvent("opVariableNameChanged",this._op,this._varnamePort.get())}};CABLES.VarSetOpWrapper=t;CABLES.VarGetOpWrapper=n;((this.CABLES=this.CABLES||{}).COREMODULES=this.CABLES.COREMODULES||{}).Vargetset=e.Cables})();(()=>{"use strict";var e={};class t{constructor(e,t,n){this._cgl=e;this._name=t;this._origShaders={};this._uniforms=[];this._structUniforms=[];this._definesToggled={};this._defines={};this._mods=[];this._textures=[];this._boundShader=null;this._changedDefines=true;this._changedUniforms=true;this._modulesChanged=false;this.needsTexturePush=false;this._lastShader=null;this._attributes=[];if(n&&n.opId)this.opId=n.opId;if(this._cgl.glVersion==1){this._cgl.enableExtension("OES_texture_float");this._cgl.enableExtension("OES_texture_float_linear");this._cgl.enableExtension("OES_texture_half_float");this._cgl.enableExtension("OES_texture_half_float_linear")}}bind(e,t){const n=e||this._cgl.getShader();if(!n)return;this._boundShader=this._origShaders[n.id];let r=false;if(this._boundShader&&this._lastShader!=this._boundShader.shader){if(!this._boundShader.shader.hasModule(this._mods[0].id))r=true}if(r||!this._boundShader||n.lastCompile!=this._boundShader.lastCompile||this._modulesChanged||n._needsRecompile){if(this._boundShader)this._boundShader.shader.dispose();if(n._needsRecompile)n.compile();this.needsTexturePush=true;this._boundShader=this._origShaders[n.id]={lastCompile:n.lastCompile,orig:n,shader:n.copy()};this._addModulesToShader(this._boundShader.shader);this._updateDefinesShader(this._boundShader.shader);this._updateUniformsShader(this._boundShader.shader)}this._boundShader.wireframe=n.wireframe;if(this._changedDefines)this._updateDefines();if(this._changedUniforms)this._updateUniforms();if(t!==false)this._cgl.pushShader(this._boundShader.shader);this._boundShader.shader.copyUniformValues(this._boundShader.orig);if(this.needsTexturePush){for(let e=0;e<this._textures.length;e++){const a=this._textures[e][0];const o=this._textures[e][1];const i=this._textures[e][2];if(this._getUniform(a)){const s=this.getPrefixedName(a);const l=this._boundShader.shader.getUniform(s);if(l)this._boundShader.shader.pushTexture(l,o,i)}}this.needsTexturePush=false;this._textures.length=0}this._modulesChanged=false;this._boundShader.shader.fromMod=this;if(this.onBind)this.onBind(this._boundShader.shader);return this._boundShader.shader}unbind(e){if(this._boundShader){if(e!==false)this._cgl.popShader()}this._boundShader=null}_addModulesToShader(t){let n;if(this._mods.length>1)n=this._mods[0];for(let e=0;e<this._mods.length;e++)t.addModule(this._mods[e],n)}_removeModulesFromShader(e){for(const t in this._origShaders)this._origShaders[t].shader.removeModule(e)}addModule(e){this._mods.push(e);this._modulesChanged=true}removeModule(t){const n=[];let r=false;for(let e=0;e<this._mods.length;e++){if(this._mods[e].title==t){r=true;this._removeModulesFromShader(this._mods[e]);n.push(e)}}for(let e=n.length-1;e>=0;e-=1)this._mods.splice(n[e],1);this._modulesChanged=true}_updateUniformsShader(r){for(let e=0;e<this._uniforms.length;e++){const t=this._uniforms[e];const n=this.getPrefixedName(t.name);if(!r.hasUniform(n)&&!t.structName){let e=null;if(t.shaderType==="both"){e=r.addUniformBoth(t.type,n,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}else if(t.shaderType==="frag"){e=r.addUniformFrag(t.type,n,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}else if(t.shaderType==="vert"){e=r.addUniformVert(t.type,n,t.v1,t.v2,t.v3,t.v4);e.comment="mod: "+this._name}}}for(let n=0;n<this._structUniforms.length;n+=1){const a=this._structUniforms[n];let e=a.uniformName;let t=a.structName;const o=a.members;e=this.getPrefixedName(a.uniformName);t=this.getPrefixedName(a.structName);if(a.shaderType==="frag"){r.addUniformStructFrag(t,e,o)}if(a.shaderType==="vert"){r.addUniformStructVert(t,e,o)}if(a.shaderType==="both"){r.addUniformStructBoth(t,e,o)}}}_updateUniforms(){for(const e in this._origShaders)this._updateUniformsShader(this._origShaders[e].shader);this._changedUniforms=false}_setUniformValue(e,t,n){const r=e.getUniform(t);if(r)r.setValue(n)}setUniformValue(e,t){const n=this._getUniform(e);if(!n)return;const r=this.getPrefixedName(e);for(const a in this._origShaders){this._setUniformValue(this._origShaders[a].shader,r,t)}}hasUniform(e){return this._getUniform(e)}_getUniform(t){for(let e=0;e<this._uniforms.length;e++){if(this._uniforms[e].name==t)return this._uniforms[e];if(this._uniforms[e].structName){if(this._uniforms[e].propertyName==t)return this._uniforms[e]}}return false}_getStructUniform(t){for(let e=0;e<this._structUniforms.length;e+=1)if(this._structUniforms[e].uniformName===t)return this._structUniforms[e];return null}_isStructUniform(t){for(let e=0;e<this._uniforms.length;e++){if(this._uniforms[e].name==t)return false;if(this._uniforms[e].structName){if(this._uniforms[e].propertyName==t)return true}}return false}addUniform(t,n,r,a,o,i,s,l,u,p){if(!this._getUniform(n)){let e="both";if(p)e=p;this._uniforms.push({type:t,name:n,v1:r,v2:a,v3:o,v4:i,structUniformName:s,structName:l,propertyName:u,shaderType:e});this._changedUniforms=true}}addUniformFrag(e,t,n,r,a,o){this.addUniform(e,t,n,r,a,o,null,null,null,"frag");this._changedUniforms=true}addUniformVert(e,t,n,r,a,o){this.addUniform(e,t,n,r,a,o,null,null,null,"vert");this._changedUniforms=true}addUniformBoth(e,t,n,r,a,o){this.addUniform(e,t,n,r,a,o,null,null,null,"both");this._changedUniforms=true}addUniformStruct(t,n,r,a){for(let e=0;e<r.length;e+=1){const o=r[e];if((o.type==="2i"||o.type==="i"||o.type==="3i")&&a==="both")console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:",t," with member:",o.name," of type:",o.type,".");if(!this._getUniform(n+"."+o.name)){this.addUniform(o.type,n+"."+o.name,o.v1,o.v2,o.v3,o.v4,n,t,o.name,a)}}if(!this._getStructUniform(n)){this._structUniforms.push({structName:t,uniformName:n,members:r,shaderType:a})}}addUniformStructVert(e,t,n){this.addUniformStruct(e,t,n,"vert")}addUniformStructFrag(e,t,n){this.addUniformStruct(e,t,n,"frag")}addUniformStructBoth(e,t,n){this.addUniformStruct(e,t,n,"both")}addAttribute(t){for(let e=0;e<this._attributes.length;e++){if(this._attributes[e].name==t.name&&this._attributes[e].nameFrag==t.nameFrag)return}this._attributes.push(t)}pushTexture(e,t,n){if(!t)throw new Error("no texture given to texturestack");this._textures.push([e,t,n]);this.needsTexturePush=true}_removeUniformFromShader(e,t){if(t.hasUniform(e))t.removeUniform(e)}removeUniform(t){if(this._getUniform(t)){for(let e=this._uniforms.length-1;e>=0;e-=1){const n=t;if(this._uniforms[e].name==t&&!this._uniforms[e].structName){for(const r in this._origShaders){this._removeUniformFromShader(this.getPrefixedName(n),this._origShaders[r].shader)}this._uniforms.splice(e,1)}}this._changedUniforms=true}}removeUniformStruct(t){if(this._getStructUniform(t)){for(let e=this._structUniforms.length-1;e>=0;e-=1){const n=this._structUniforms[e];if(n.uniformName===t){for(const r in this._origShaders){for(let e=0;e<n.members.length;e+=1){const a=n.members[e];this._removeUniformFromShader(this.getPrefixedName(a.name),this._origShaders[r].shader)}}this._structUniforms.splice(e,1)}}this._changedUniforms=true}}getPrefixedName(e){const t=this._mods[0].group;if(t===undefined){return}if(e.startsWith("MOD_")){e=e.substr("MOD_".length);e="mod"+t+"_"+e}return e}_updateDefinesShader(e){for(const t in this._defines){const n=this.getPrefixedName(t);if(this._defines[t]!==null&&this._defines[t]!==undefined)e.define(n,this._defines[t]);else e.removeDefine(n)}for(const t in this._definesToggled){const n=this.getPrefixedName(t);e.toggleDefine(n,this._definesToggled[t])}}_updateDefines(){for(const e in this._origShaders)this._updateDefinesShader(this._origShaders[e].shader);this._changedDefines=false}define(e,t){if(t===undefined)t=true;this._defines[e]=t;this._changedDefines=true}removeDefine(e){this._defines[e]=null;this._changedDefines=true}hasDefine(e){if(this._defines[e]!==null&&this._defines[e]!==undefined)return true;return false}toggleDefine(e,t){this._changedDefines=true;this._definesToggled[e]=t}currentShader(){if(!this._boundShader)return null;return this._boundShader.shader}dispose(){}}CGL.ShaderModifier=t;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Shadermodifier=e.Shadermodifier})();(()=>{"use strict";var e={};class t{constructor(e){this.cgl=e;this.geom=new CGL.Geometry("marker");this.geom.setPointVertices([-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,1,1,1,1,-1,1,-1,1,1,-1,-1,1,1,1,-1,1,1,1,-1,1,-1,-1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,-1,-1]);this.mesh=new CGL.Mesh(this.cgl,this.geom,this.cgl.gl.LINES);this.mesh.setGeom(this.geom);this.colorShader=new CGL.UniColorShader(this.cgl);this.colorShader.setColor([0,1,1,1]);this._vScale=vec3.create()}render(e,t,n){this.cgl.pushModelMatrix();this.cgl.pushShader(this.colorShader.shader);this.cgl.pushDepthTest(false);if(e==undefined)e=1;if(t==undefined)t=e;if(n==undefined)n=e;vec3.set(this._vScale,e,t,n);mat4.scale(this.cgl.mvMatrix,this.cgl.mvMatrix,this._vScale);this.mesh.render(this.cgl.getShader());this.cgl.popDepthTest();this.cgl.popShader();this.cgl.popModelMatrix()}}class n{constructor(e){this.cgl=e;this.geom=new CGL.Geometry("marker");const t=-1;const n=1;this.geom.setPointVertices([t,t,0,n,t,0,n,t,0,n,n,0,n,n,0,t,n,0,t,n,0,t,t,0]);this.mesh=new CGL.Mesh(this.cgl,this.geom,this.cgl.gl.LINES);this.mesh.setGeom(this.geom);this.colorShader=new CGL.UniColorShader(this.cgl);this.colorShader.setColor([0,1,1,1]);this._vScale=vec3.create()}render(e,t,n){this.cgl.pushModelMatrix();this.cgl.pushShader(this.colorShader.shader);this.cgl.pushDepthTest(false);vec3.set(this._vScale,e||1,t||e||1,n||e||1);mat4.scale(this.cgl.mvMatrix,this.cgl.mvMatrix,this._vScale);this.mesh.render(this.cgl.getShader());this.cgl.popDepthTest();this.cgl.popShader();this.cgl.popModelMatrix()}}CGL.WireframeCube=t;CGL.WireframeRect=n;((this.CGL=this.CGL||{}).COREMODULES=this.CGL.COREMODULES||{}).Wireframes=e.Wireframes})();