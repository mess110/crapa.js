(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("crapa", [], factory);
	else if(typeof exports === 'object')
		exports["crapa"] = factory();
	else
		root["crapa"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = browser;
function browser() {
  var nVer = navigator.appVersion;
  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var majorVersion = parseInt(navigator.appVersion, 10);
  var OSName = 'Unknown OS';
  var uaa = navigator.userAgent.replace(/[\(\)\,]/g, '').split(' ').map(function (e) {
    return e.split('/');
  });
  var userAgentArray = [].concat.apply([], uaa);
  var nameOffset, verOffset, ix;

  // In Opera, the true version is after "Opera" or after "Version"
  if ((verOffset = nAgt.indexOf('Opera')) !== -1) {
    browserName = 'Opera';
    fullVersion = nAgt.substring(verOffset + 6);
    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      fullVersion = nAgt.substring(verOffset + 8);
    }
  } else if ((verOffset = nAgt.indexOf('MSIE')) !== -1) {
    // In MSIE, the true version is after "MSIE" in userAgent
    browserName = 'Microsoft Internet Explorer';
    fullVersion = nAgt.substring(verOffset + 5);
  } else if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
    // In Chrome, the true version is after "Chrome"
    browserName = 'Chrome';
    fullVersion = nAgt.substring(verOffset + 7);
  } else if ((verOffset = nAgt.indexOf('Safari')) !== -1) {
    // In Safari, the true version is after "Safari" or after "Version"
    browserName = 'Safari';
    fullVersion = nAgt.substring(verOffset + 7);

    if ((verOffset = nAgt.indexOf('Version')) !== -1) {
      fullVersion = nAgt.substring(verOffset + 8);
    }
  } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
    // In Firefox, the true version is after "Firefox"
    browserName = 'Firefox';
    fullVersion = nAgt.substring(verOffset + 8);
  } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
    // In most other browsers, "name/version" is at the end of userAgent
    browserName = nAgt.substring(nameOffset, verOffset);
    fullVersion = nAgt.substring(verOffset + 1);
    if (browserName.toLowerCase() === browserName.toUpperCase()) {
      browserName = navigator.appName;
    }
  }
  // trim the fullVersion string at semicolon/space if present
  if ((ix = fullVersion.indexOf(';')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }
  if ((ix = fullVersion.indexOf(' ')) !== -1) {
    fullVersion = fullVersion.substring(0, ix);
  }

  majorVersion = parseInt('' + fullVersion, 10);
  if (isNaN(majorVersion)) {
    fullVersion = '' + parseFloat(navigator.appVersion);
    majorVersion = parseInt(navigator.appVersion, 10);
  }

  if (nVer.indexOf('Win') !== -1) OSName = 'Windows';
  if (nVer.indexOf('Mac') !== -1) OSName = 'MacOS';
  if (nVer.indexOf('X11') !== -1) OSName = 'UNIX';
  if (nVer.indexOf('Linux') !== -1) OSName = 'Linux';

  return {
    browserName: browserName,
    fullVersion: fullVersion,
    majorVersion: majorVersion,
    appName: navigator.appName,
    userAgent: navigator.userAgent,
    userAgentArray: userAgentArray,
    os: OSName
  };
}
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: this needs to be moved to its own library

var BASE_URL = 'https://json.northpole.ro/';
var help = '\nNorthPole JS wrapper example usage:\n\nresponseHandler = function (data) {\n  console.log(data);\n};\n\njNorthPole.getStorage(json, responseHandler);\n\nsocket = jNorthPole.getNewRealtimeSocket(responseHandler)\njNorthPole.subscribe(socket, \'foo\')\njNorthPole.publish(socket, \'foo\', { message: \'hello\' })\n';

var jNorthPole = function () {
  function jNorthPole() {
    _classCallCheck(this, jNorthPole);
  }

  _createClass(jNorthPole, null, [{
    key: 'genericRequest',
    value: function genericRequest(jsonObj, method, endPoint, responseHandler, errorHandler) {
      var r;

      if (errorHandler == null) {
        errorHandler = responseHandler;
      }
      if (responseHandler == null) {
        throw new Error('responseHandler function missing');
      }
      r = new XMLHttpRequest();
      r.open(method, this.BASE_URL + endPoint + '.json', true);
      r.onreadystatechange = function () {
        if (r.readyState !== 4) {
          return;
        }
        if (r.status === 200) {
          responseHandler(JSON.parse(r.responseText), r.status);
        } else {
          errorHandler(JSON.parse(r.responseText), r.status);
        }
      };
      r.send(JSON.stringify(jsonObj));
    }
  }, {
    key: 'createUser',
    value: function createUser(apiKey, secret, success, failure) {
      var jsonObj;

      jsonObj = {
        'api_key': apiKey,
        'secret': secret
      };
      this.genericRequest(jsonObj, 'POST', 'user', success, failure);
    }
  }, {
    key: 'getUser',
    value: function getUser(jsonObj, responseHandler, errorHandler) {
      this.genericRequest(jsonObj, 'SEARCH', 'user', responseHandler, errorHandler);
    }
  }, {
    key: 'createStorage',
    value: function createStorage(jsonObj, responseHandler, errorHandler) {
      this.genericRequest(jsonObj, 'POST', 'storage', responseHandler, errorHandler);
    }
  }, {
    key: 'getStorage',
    value: function getStorage(jsonObj, responseHandler, errorHandler) {
      this.genericRequest(jsonObj, 'SEARCH', 'storage', responseHandler, errorHandler);
    }
  }, {
    key: 'putStorage',
    value: function putStorage(jsonObj, responseHandler, errorHandler) {
      this.genericRequest(jsonObj, 'PUT', 'storage', responseHandler, errorHandler);
    }
  }, {
    key: 'deleteStorage',
    value: function deleteStorage(jsonObj, responseHandler, errorHandler) {
      this.genericRequest(jsonObj, 'DELETE', 'storage', responseHandler, errorHandler);
    }
  }, {
    key: 'getNewRealtimeSocket',
    value: function getNewRealtimeSocket(responseHandler, errorHandler) {
      var socket, socketUrl;

      if (errorHandler == null) {
        errorHandler = responseHandler;
      }
      socketUrl = this.BASE_URL.replace('http', 'ws');
      socket = new WebSocket(socketUrl + 'realtime');
      socket.onmessage = responseHandler;
      socket.onclose = errorHandler;
      return socket;
    }
  }, {
    key: 'subscribe',
    value: function subscribe(socket, channelName) {
      return socket.send(JSON.stringify({
        type: 'subscribe',
        'channel_name': channelName
      }));
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(socket, channelName) {
      return socket.send(JSON.stringify({
        type: 'unsubscribe',
        'channel_name': channelName
      }));
    }
  }, {
    key: 'publish',
    value: function publish(socket, channelName, json) {
      return socket.send(JSON.stringify({
        type: 'publish',
        'channel_name': channelName,
        content: json
      }));
    }
  }, {
    key: 'BASE_URL',
    get: function get() {
      return BASE_URL;
    },
    set: function set(baseUrl) {
      BASE_URL = baseUrl;
    }
  }, {
    key: 'help',
    get: function get() {
      return help;
    }
  }]);

  return jNorthPole;
}();

exports.default = jNorthPole;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setBaseUrl = exports.register = exports.init = undefined;

var _browser = __webpack_require__(0);

var _browser2 = _interopRequireDefault(_browser);

var _jnorthpole = __webpack_require__(1);

var _jnorthpole2 = _interopRequireDefault(_jnorthpole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attached = false;
var API_KEY = 'guest';
var SECRET = 'guest';

function setBaseUrl(url) {
  _jnorthpole2.default.BASE_URL = url;
}

function send(input) {
  input['browser'] = (0, _browser2.default)();
  input['api_key'] = API_KEY;
  input['secret'] = SECRET;
  input['type'] = 'error';

  _jnorthpole2.default.createStorage(input, function (data) {
    console.log(data);
  });

  return input;
};

function attach() {
  if (attached === true) {
    console.warn('crapa listener already attached');
    return;
  }
  attached = true;

  window.addEventListener('error', function (e) {
    var hash = {
      filename: e.filename,
      message: e.message,
      stack: e.error.stack,
      type: e.type,
      timeStamp: e.timeStamp,
      lineno: e.lineno,
      colno: e.colno
    };

    send({ error: hash });
    return false;
  });
}

function init(apiKey, secret) {
  API_KEY = apiKey;
  SECRET = secret;
  attach();
}

function register(apiKey, secret) {
  try {
    _jnorthpole2.default.createUser(apiKey, secret, function (data) {
      console.log(data);
    });
  } catch (e) {
    console.error(e);
  }
  init(apiKey, secret);
};

exports.init = init;
exports.register = register;
exports.setBaseUrl = setBaseUrl;

/***/ })
/******/ ]);
});
//# sourceMappingURL=crapa.js.map