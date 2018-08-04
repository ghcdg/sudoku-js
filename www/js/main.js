/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/less/main.less":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/less/main.less ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\nhtml {\n  font-size: 14px;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background: #eeeeee;\n  font-family: \"Consolas\";\n  user-select: none;\n  max-width: 450px;\n}\nbody > * {\n  max-width: 450px;\n}\n.title {\n  padding: 1rem 5%;\n  background: steelblue;\n  color: white;\n  margin-top: 0px;\n  margin-bottom: 2rem;\n  box-shadow: 0 0.2rem 0.3rem #303030;\n  font-weight: normal;\n  text-align: center;\n  font-family: \"KaiTi\";\n  font-size: 40px;\n}\n.title h1 {\n  margin: 0;\n  padding: 0;\n}\n.hidden {\n  display: none;\n}\n.container {\n  padding-left: 5%;\n}\n.container .row > span {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  width: 10%;\n  height: 24px;\n  line-height: 24px;\n  border: 1px solid #bbbbbb;\n  background-color: #eeeeee;\n  border-right-width: 0;\n  border-bottom-width: 0;\n}\n.container .row > span.col_g_right {\n  border-right-width: 1px;\n}\n.container .row > span.empty {\n  color: rgba(0, 0, 0, 0);\n}\n.container .row > span.original {\n  background-color: white;\n}\n.container .row > span.popleft {\n  background-color: lightblue;\n}\n.container .row > span.popright {\n  background-color: lightgreen;\n}\n.container .row > span.error {\n  background-color: lightpink;\n}\n.container .row > span.original-error {\n  background-color: lightsteelblue;\n}\n.container .row > span:first-child {\n  border-left-width: 2px;\n}\n.container .row > span:last-child {\n  border-right-width: 2px;\n}\n.container .row.row_g_bottom > span {\n  border-bottom-width: 1px;\n}\n.container .row:first-child > span {\n  border-top-width: 2px;\n}\n.container .row:last-child > span {\n  border-bottom-width: 2px;\n}\n.popup-num {\n  padding-left: 5%;\n  position: absolute;\n  padding-left: 0px;\n}\n.popup-num .row > span {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  width: 10%;\n  height: 24px;\n  line-height: 24px;\n  border: 1px solid #bbbbbb;\n  background-color: #eeeeee;\n  border-right-width: 0;\n  border-bottom-width: 0;\n}\n.popup-num .row > span.col_g_right {\n  border-right-width: 1px;\n}\n.popup-num .row > span.empty {\n  color: rgba(0, 0, 0, 0);\n}\n.popup-num .row > span.original {\n  background-color: white;\n}\n.popup-num .row > span.popleft {\n  background-color: lightblue;\n}\n.popup-num .row > span.popright {\n  background-color: lightgreen;\n}\n.popup-num .row > span.error {\n  background-color: lightpink;\n}\n.popup-num .row > span.original-error {\n  background-color: lightsteelblue;\n}\n.popup-num .row > span:first-child {\n  border-left-width: 2px;\n}\n.popup-num .row > span:last-child {\n  border-right-width: 2px;\n}\n.popup-num .row.row_g_bottom > span {\n  border-bottom-width: 1px;\n}\n.popup-num .row:first-child > span {\n  border-top-width: 2px;\n}\n.popup-num .row:last-child > span {\n  border-bottom-width: 2px;\n}\n.popup-num .row > span {\n  width: 37px;\n  height: 37px;\n  line-height: 37px;\n}\n.dashboard {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 3rem;\n  padding: 1rem 0;\n  background: steelblue;\n  box-sizing: border-box;\n  box-shadow: 0 -0.1rem 0.2rem #303030;\n}\n.dashboard .buttons {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.dashboard .buttons button {\n  float: left;\n  width: 25%;\n  height: 3rem;\n  font-size: 1.5rem;\n  font-family: \"KaiTi\";\n  color: white;\n  cursor: pointer;\n  border: 1px solid #cccccc;\n  background: transparent;\n  border-right-width: 0;\n}\n.dashboard .buttons button:last-child {\n  border-right-width: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/js/core/checker.js":
/*!********************************!*\
  !*** ./src/js/core/checker.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//检查数据解决方案

/**
 * 检查一维数组是否符合要求(数组中元素值为0、存在值相同的元素都为不符合要求)
 * 符合要求则在与数组元素对应位置的marks数组中填入true
 * 否则在与数组元素对应位置的marks数组中填入false
 * @param {一维数组} array 
 */
function checkArray(array) {
    var length = array.length;
    var marks = new Array(length);
    marks.fill(true);

    for (var i = 0; i < length; i++) {
        //如果已经被标记为false证明被检查过了，直接跳过
        if (!marks[i]) {
            continue;
        }

        var v = array[i];

        //检查数组是否有效： 0 无效，1-9 有效
        if (!v) {
            marks[i] = false;
            continue;
        }

        //检查填入数字是否重复： i+1 -- 9 中的数字和第 i 个位置的数字是否重复
        for (var j = i + 1; j < length; j++) {
            if (v === array[j]) {
                marks[i] = marks[j] = false;
            }
        }
    }
    return marks;
}

var Toolkit = __webpack_require__(/*! ./toolkit */ "./src/js/core/toolkit.js");

/**
 * 输入：matrix（用户矩阵），用户输入的数独数据，9*9的矩阵
 * 处理：对matrix行、列、宫进行检查，并建检查后的结果存储在 matrixMarks (标志矩阵)中
 * 输出：检查 matrixMarks ，由它返回一个true(表示矩阵填写成功)或false（表示矩阵填写失败
 */
module.exports = function () {
    function Checker(matrix) {
        _classCallCheck(this, Checker);

        //用户矩阵：用户输入的matrix
        this._matrix = matrix;
        //标志矩阵：对matrix检查后由生成结果true、false组成的矩阵
        this._matrixMarks = Toolkit.matrix.makeMatrix(true);
    }

    //


    _createClass(Checker, [{
        key: "check",
        value: function check() {
            //检查用户输入的matrix行、列、宫并返回由结果true、false组成的一维数组
            this.checkRows();
            this.checkCols();
            this.checkBoxs();

            //检查：经过行、列、宫检查处理后的矩阵是否成功
            this._success = this._matrixMarks.every(function (row) {
                return row.every(function (mark) {
                    return mark;
                });
            });
            return this._success;
        }
    }, {
        key: "checkRows",
        value: function checkRows() {
            //循环检查每一行
            for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                var rowarr = this._matrix[rowIndex];
                var marks = checkArray(rowarr);

                //在标志矩阵 matrixMarks 中，记录每一行中值为false的小方格
                for (var colIndex = 0, len = marks.length; colIndex < len; colIndex++) {
                    if (!marks[colIndex]) {
                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkCols",
        value: function checkCols() {
            for (var colIndex = 0; colIndex < 9; colIndex++) {
                //从用户矩阵提取出列数据到数组colsarr中
                var colsarr = [];
                for (var rowIndex = 0; rowIndex < 9; rowIndex++) {
                    colsarr[rowIndex] = this._matrix[rowIndex][colIndex];
                }

                var marks = checkArray(colsarr);

                //在标志矩阵 matrixMarks 中，记录每一列中值为false的小方格
                for (var _rowIndex = 0, len = marks.length; _rowIndex < len; _rowIndex++) {
                    if (!marks[_rowIndex]) {
                        this._matrixMarks[_rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }, {
        key: "checkBoxs",
        value: function checkBoxs() {
            for (var boxIndex = 0; boxIndex < 9; boxIndex++) {
                //从用户矩阵提取出宫数据到数组boxesar中
                var boxesarr = Toolkit.box.getBoxCeils(this._matrix, boxIndex);
                var marks = checkArray(boxesarr);

                //在标志矩阵 matrixMarks 中，记录每一宫值为false的小方格
                for (var ceilIndex = 0; ceilIndex < 9; ceilIndex++) {
                    if (!marks[ceilIndex]) {
                        var _Toolkit$box$convertF = Toolkit.box.convertFromBoxIndex(boxIndex, ceilIndex),
                            rowIndex = _Toolkit$box$convertF.rowIndex,
                            colIndex = _Toolkit$box$convertF.colIndex;

                        this._matrixMarks[rowIndex][colIndex] = false;
                    }
                }
            }
        }
    }]);

    return Checker;
}();

// const Generator=require("./generator");
// const g=new Generator();
// g.generate();
// const matrix=g.matrix;

// const checker=new Checker(matrix);
// console.log("check result",checker.check());
// console.log(checker._matrixMarks);

// matrix[1][1]=0;
// matrix[2][3]=matrix[3][5]=5;


// const checker2=new Checker(matrix);
// console.log("check result",checker2.check());
// console.log(checker2._matrixMarks);

/***/ }),

/***/ "./src/js/core/generator.js":
/*!**********************************!*\
  !*** ./src/js/core/generator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//生成数独解决方案
var Toolkit = __webpack_require__(/*! ./toolkit */ "./src/js/core/toolkit.js");

/**
 * 给矩阵填入数字
 * 
 * 假设生成的matrix矩阵如下：
 *[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

 * 假设生成orders矩阵调用洗牌算法后如下：
 *[ [ 3, 6, 5, 8, 1, 7, 4, 2, 0 ],
  [ 6, 8, 1, 0, 5, 2, 3, 7, 4 ],
  [ 1, 4, 6, 7, 0, 2, 8, 3, 5 ],
  [ 5, 4, 3, 1, 6, 0, 2, 7, 8 ],
  [ 4, 2, 8, 0, 3, 5, 6, 7, 1 ],
  [ 0, 8, 7, 1, 2, 4, 5, 6, 3 ],
  [ 5, 1, 4, 6, 7, 8, 2, 3, 0 ],
  [ 4, 2, 6, 3, 7, 1, 0, 5, 8 ],
  [ 4, 6, 7, 2, 1, 3, 8, 5, 0 ] ]
 * 
 * 填入数字1：
 *[ [ 0, 0, 0, 1, 0, 0, 0, 0, 0 ],  //第3个位置,orders第0行第0个位置数组为3
  [ 0, 0, 0, 0, 0, 0, 1, 0, 0 ],    //第6个位置,orders第1行第0个位置数组为6
  [ 0, 1, 0, 0, 0, 0, 0, 0, 0 ],    //第1个位置,orders第2行第0个位置数组为1
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ],    //第5个位置,orders第3行第0个位置数组为5
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],    //第......
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]   //第4个位置,orders第8行第0个位置数组为4
 * 
 * 同理填入后面的数字2-9
 */

var Generator = function () {
    function Generator() {
        _classCallCheck(this, Generator);
    }

    _createClass(Generator, [{
        key: "generate",
        value: function generate() {
            while (!this.internalGenertator()) {} //循环直到生成符合要求的矩阵
        }
    }, {
        key: "internalGenertator",
        value: function internalGenertator() {
            //生成matrix矩阵，用于填入数独数字
            this.matrix = Toolkit.matrix.makeMatrix();
            //生成orders矩阵，其每一行通过调用洗牌算法打乱
            //matrix矩阵根据orders矩阵依次填入数字
            this.orders = Toolkit.matrix.makeMatrix().map(function (row) {
                return row.map(function (val, index) {
                    return index;
                });
            }) //给矩阵每行赋予从0-8的值
            .map(function (row) {
                return Toolkit.matrix.shuffle(row);
            }); //打乱每行0-8的值

            for (var num = 1; num <= 9; num++) {
                //依次填入数字1-9
                if (!this.fillNumber(num)) {
                    return false; //在填入某个数时失败了
                }
            }
            //所有数字填入成功
            return true;
        }

        //填入数字num,从第0行开始到最后一行

    }, {
        key: "fillNumber",
        value: function fillNumber(num) {
            // 返回结果，要么所有数字填入成功，要么在填入某个数时失败了
            return this.fillRow(num, 0);
        }

        //从指定的行rowIndex中填入数字num

    }, {
        key: "fillRow",
        value: function fillRow(num, rowIndex) {

            //所有行成功填入数字num，返回true
            if (rowIndex > 8) {
                return true;
            }

            //获取第rowIndex行的数组
            var rowarr = this.matrix[rowIndex];
            var ordersarr = this.orders[rowIndex];
            //在当前数组rowarr中随机选中某一列填入数字num
            //因为rowarr为一维数组，所以选某列相当于数组的某个位置
            for (var c = 0; c < 9; c++) {
                var colIndex = ordersarr[c];
                //如果选中的这个位置已经填入了数字则跳过
                //矩阵默认填入0，如果没有填入数字，按照js语法为false
                if (rowarr[colIndex]) {
                    continue;
                }

                //若选中的这个位置还没有填入数字，则检查这个位置能不能填入数字num
                //若不能填入，则跳过该位置寻找下一个位置
                if (!Toolkit.matrix.checkFillalbe(this.matrix, num, rowIndex, colIndex)) {
                    continue;
                }

                //否则，填入数字num
                rowarr[colIndex] = num;
                //当前行填入num成功，递归调用 fillRow()，继续在下一行中填入数字num
                //若下一行填入数字num失败，则恢复刚才填写的数字为0
                //并在当前行寻找下一个位置填入数字num
                if (!this.fillRow(num, rowIndex + 1)) {
                    rowarr[colIndex] = 0;
                    continue;
                }

                //最后，所有行都已经填入指定数字num，即完成了一个数字的填写
                return true;
            }

            //循环完毕，说明当前行所有位置都不能填入数字num，即本次填写失败
            return false;
        }
    }]);

    return Generator;
}();

module.exports = Generator;

/***/ }),

/***/ "./src/js/core/sudoku.js":
/*!*******************************!*\
  !*** ./src/js/core/sudoku.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 生成数独游戏
 * 1、利用 Generator 生成游戏的解决方案
 * 2、随机去除部分数据，形成游戏迷盘
 */

var Generator = __webpack_require__(/*! ./generator */ "./src/js/core/generator.js");

var Sudoku = function () {
    function Sudoku() {
        _classCallCheck(this, Sudoku);

        //生成游戏解决方案 this.solutionMatrix
        var generator = new Generator();
        generator.generate();
        this.solutionMatrix = generator.matrix;
    }

    _createClass(Sudoku, [{
        key: "make",
        value: function make() {
            var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

            //const shouldRid=Math.random()*9 <level;
            //按照概率生成游戏迷盘,小方格的值有2/3 的概率变成0
            this.puzzleMatrix = this.solutionMatrix.map(function (row) {
                return row.map(function (ceil) {
                    return Math.random() * 9 < level ? 0 : ceil;
                });
            });
        }
    }]);

    return Sudoku;
}();

module.exports = Sudoku;

/***/ }),

/***/ "./src/js/core/toolkit.js":
/*!********************************!*\
  !*** ./src/js/core/toolkit.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//矩阵工具
var MatrixToolkit = {
    /**
     * 创建一维数组
     * @param {默认数组的值为0} v 
     */
    makeRow: function makeRow() {
        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        var array = new Array(9);
        array.fill(v);
        return array;
    },


    /**
     * 在一维数组的基础上创建一个二维数组
     * @param {默认数组的值为0}} v 
     */
    makeMatrix: function makeMatrix() {
        var _this = this;

        var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

        //Array.from(arrayLike[, mapFn[, thisArg]])
        return Array.from({ length: 9 }, function () {
            return _this.makeRow(v);
        });
    },


    /**
     * Fisher-Yates 洗牌算法 
     * 打乱每一个一维数组中数字的顺序
     */
    shuffle: function shuffle(array) {
        //数组下标为0到array-1，并且每一行最后一个数不用交换，所以为array.length-2
        var endindex = array.length - 2;
        var arrlen = array.length;
        for (var i = 0; i < endindex; i++) {
            var j = i + Math.floor(Math.random() * (arrlen - i));
            var _ref = [array[j], array[i]];
            array[i] = _ref[0];
            array[j] = _ref[1];
        }
        return array;
    },


    /**
     * 检查指定位置能否填入指定数字
     */
    checkFillalbe: function checkFillalbe(matrix, num, rowIndex, colIndex) {
        //获取当前位置所在的行、列、宫格信息
        var row = matrix[rowIndex];
        var column = this.makeRow().map(function (val, index) {
            return matrix[index][colIndex];
        });

        var _boxToolkit$convertTo = boxToolkit.convertToBoxIndex(rowIndex, colIndex),
            boxIndex = _boxToolkit$convertTo.boxIndex;

        var box = boxToolkit.getBoxCeils(matrix, boxIndex);

        for (var i = 0; i < 9; i++) {
            if (row[i] === num || column[i] === num || box[i] === num) {
                return false;
            }
        }
        return true;
    }
};

/**
 * 宫坐标工具
 */
var boxToolkit = {
    //根据宫格坐标以及矩阵，返回宫格所有小方格的坐标
    getBoxCeils: function getBoxCeils(matrix, boxIndex) {
        var startRowIndex = Math.floor(boxIndex / 3) * 3;
        var startColIndex = boxIndex % 3 * 3;
        var result = [];

        for (var ceilIndex = 0; ceilIndex < 9; ceilIndex++) {
            var rowIndex = startRowIndex + Math.floor(ceilIndex / 3);
            var colIndex = startColIndex + ceilIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result;
    },


    //根据行列坐标返回宫格坐标以及宫格坐标中的第一个小方格的坐标
    convertToBoxIndex: function convertToBoxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            ceilIndex: rowIndex % 3 * 3 + colIndex % 3
        };
    },

    //根据宫格坐标以及宫格坐标中的第一个小方格的坐标返回行列坐标
    convertFromBoxIndex: function convertFromBoxIndex(boxIndex, ceilIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(ceilIndex / 3),
            colIndex: boxIndex % 3 * 3 + ceilIndex % 3
        };
    }
};

//工具集
module.exports = function () {
    function Toolkit() {
        _classCallCheck(this, Toolkit);
    }

    _createClass(Toolkit, null, [{
        key: "matrix",

        /**
         * 矩阵和数据结构相关工具
         */
        get: function get() {
            return MatrixToolkit;
        }

        /**
         * 宫坐标系相关工具
         */

    }, {
        key: "box",
        get: function get() {
            return boxToolkit;
        }
    }]);

    return Toolkit;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../less/main.less */ "./src/less/main.less");

//导入样式表
var Grid = __webpack_require__(/*! ./ui/grid.js */ "./src/js/ui/grid.js");
var PopupNumbers = __webpack_require__(/*! ./ui/popupnumbers */ "./src/js/ui/popupnumbers.js");

//建立矩阵并设置样式，把它放入容器 container中
var grid = new Grid($("#container"));
grid.build(); //建立矩阵
grid.layout(); //设置样式

//生成操作面板
var popupnumbers = new PopupNumbers($("#popupNumbers"));
grid.bindPopup(popupnumbers);

$("#check").on("click", function (e) {
  if (grid.check()) {
    alert("成功!");
  }
});
$("#reset").on("click", function (e) {
  grid.reset();
});
$("#clear").on("click", function (e) {
  grid.clear();
});
$("#rebuild").on("click", function (e) {
  grid.rebuild();
});

/***/ }),

/***/ "./src/js/ui/grid.js":
/*!***************************!*\
  !*** ./src/js/ui/grid.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//生成九宫格
var Toolkit = __webpack_require__(/*! ../core/toolkit */ "./src/js/core/toolkit.js");
var Sudoku = __webpack_require__(/*! ../core/sudoku */ "./src/js/core/sudoku.js");
var Checker = __webpack_require__(/*! ../core/checker */ "./src/js/core/checker.js");

var Grid = function () {
    function Grid(container) {
        _classCallCheck(this, Grid);

        this._$container = container;
    }

    /**
     * 创建一个矩阵并将矩阵中的每个元素包裹在span中
     * 矩阵的每一行又包裹在div中，最后将矩阵放入主体中
     */


    _createClass(Grid, [{
        key: "build",
        value: function build() {
            var sudoku = new Sudoku();
            sudoku.make();
            var matrix = sudoku.puzzleMatrix; //建立游戏迷盘
            // const matrix=sudoku.solutionMatrix;//建立完整的数独游戏
            var rowGroupClasses = ["row_g_top", "row_g_middle", "row_g_bottom"];
            var colGroupClasses = ["col_g_left", "col_g_center", "col_g_right"];

            /**
             * 将矩阵中的每一个元素都包裹在span标签中
             * matrix为二维数组，将二维数组中的一维数组传给rowValue
             * 再对一维数组rowValue进行处理
             */
            var $cells = matrix.map(function (rowValues) {
                return rowValues.map(function (cellValue, colIndex) {
                    return $("<span>").text(cellValue).addClass(cellValue ? "original " : "empty") //如果该位置有非0值，则original 类设置背景为白色，否则设置为灰色(这样用户就看不到数字0)
                    .addClass(colGroupClasses[colIndex % 3]); //给每个span添加对应位置的类
                });
            });

            //将每一行包裹在div中并返回
            var $divArray = $cells.map(function ($spanArray, rowIndex) {
                return $("<div>").addClass("row").append($spanArray).addClass(rowGroupClasses[rowIndex % 3]); //给每个div添加对应位置的类
            });

            this._$container.append($divArray);
        }

        /**
         * 设置矩阵样式
         * 具体为：小方格为正方形，字体大小设置
         */

    }, {
        key: "layout",
        value: function layout() {
            var width = $("span:first", this._$container).width();
            $("span", this._$container).height(width).css({
                "line-height": width + "px", //es6语法，模板字符串: ${var}
                "font-size": width < 32 ? width / 2 + "px" : "" //宽度小则用小字体，否则用大字体
            });
        }

        /**
         * 点击游戏迷盘空白小方格弹出操作面板
         * 给操作面板绑定事件
         */

    }, {
        key: "bindPopup",
        value: function bindPopup(popupNumbers) {
            var _this = this;

            this._$container.on("click", "span", function (e) {
                var $cell = $(e.target); //获取当前点击的sapn
                popupNumbers.popup($cell, _this._$container.width() / 2); //调用相关函数弹出操作面板
            });
        }

        /**
         * 检查用户输入的矩阵
         */

    }, {
        key: "check",
        value: function check() {
            //从界面获取需要检查的数据
            //获取一个jquery对象(数组),数组中每个元素都是界面中的一行数据一共有9行(也是数组))
            var data = this._$container.children() //jquery数组
            .map(function (rowIndex, div) {
                //此处使用的是jquery.map(),div是9行数据中的一行
                return $(div).children() //数据中的9个span,div为jquer对象
                .map(function (colIndex, span) {
                    return parseInt($(span).text()) || 0;
                }); //获取span中的值
            }).toArray() //将jquery数据转换为js数组
            .map(function ($data) {
                return $data.toArray();
            }); //将js数组中的div jquery对象转换为js数组

            //将data传入checker进行检查
            var checker = new Checker(data);
            if (checker.check()) {
                return true;
            }
            //如果检查结果后，发现错误则进行标记
            //获取标志矩阵，标记矩阵中值为false的小方格
            var marks = checker._matrixMarks;
            this._$container.children().each(function (rowIndex, div) {
                $(div).children().each(function (colIndex, span) {
                    var $span = $(span);
                    if (marks[rowIndex][colIndex]) {
                        $span.removeClass("error original-error");
                    } else {
                        //如果检查结果为false，但是该值为数独初始值，则另外标志出来
                        //类 original  是在建立数独的时候给一开始就需要显示数字的小方格加上的
                        if ($span.is(".original ")) {
                            $span.addClass("original-error");
                        } else {
                            //标志用户填写结果错误的小方格
                            $span.addClass("error");
                        }
                    }
                });
            });
        }

        /**
         * 重置游戏，使游戏恢复初始状态
         * 重置会重置除初始信息外的所有样式和数值信息
         */

    }, {
        key: "reset",
        value: function reset() {
            //过滤掉游戏开始时给出的小方格,去除游戏过程中填入的所有样式和数值信息,重置本局游戏
            this._$container.find("span:not(.original)").removeClass("error popleft popright").addClass("empty").text(0);
            //初始值只需要去除它添加的对应样式，不用添加空样式
            this._$container.find("span.original").removeClass("original-error");
        }

        /**
         * 清理错误提示标志,与 reset
         * 清理除初始信息外的所有样式信息
         */

    }, {
        key: "clear",
        value: function clear() {
            this._$container.find("span:not(.original)").removeClass("error popleft popright");
            this._$container.find("span.original").removeClass("original-error");
        }

        /**
         * 新建一盘游戏
         * 先清空原来的游戏界面
         * 后重新调用方法建立游戏界面
         */

    }, {
        key: "rebuild",
        value: function rebuild() {
            //清空原来的游戏界面，JQuery.empty()函数用于清空每个匹配元素内的所有内容
            this._$container.empty();
            this.build(); //建立矩阵
            this.layout(); //设置样式
        }
    }]);

    return Grid;
}();

module.exports = Grid;

/***/ }),

/***/ "./src/js/ui/popupnumbers.js":
/*!***********************************!*\
  !*** ./src/js/ui/popupnumbers.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//处理弹出的操作面板

var PopupNumbers = function () {
    //操作面板一开始先隐藏,移除 hidden 类，避免之后的操作受其影响
    function PopupNumbers($panel) {
        var _this = this;

        _classCallCheck(this, PopupNumbers);

        //获取页面中的操作面板
        this._$panel = $panel.hide().removeClass("hidden");

        //给操作面板绑定相应的事件
        this._$panel.on("click", "span", function (e) {
            var $targetCell = _this._$targetCell;
            var $operatorSpan = $(e.target);

            //点击操作面板左右按钮，回填样式
            if ($operatorSpan.hasClass("popleft")) {
                if ($targetCell.hasClass("popleft")) {
                    $targetCell.removeClass("popleft");
                } else {
                    $targetCell.addClass("popleft").removeClass("popright");
                }
            } else if ($operatorSpan.hasClass("popright")) {
                if ($targetCell.hasClass("popright")) {
                    $targetCell.removeClass("popright");
                } else {
                    $targetCell.addClass("popright").removeClass("popleft");
                }
            }

            //点击操作面板空白按钮，取消显示的数字
            else if ($operatorSpan.hasClass("empty")) {
                    $targetCell.text(0).addClass("empty");
                }

                //点击操作面板数字1-9，回填数字
                else {
                        $targetCell.removeClass("empty").text($operatorSpan.text());
                    }

            //点击操作面板后，本次关掉操作面板
            _this.hide();
        });
    }

    //该方法在指定的位置弹出操作面板


    _createClass(PopupNumbers, [{
        key: "popup",
        value: function popup($targetCell, halfWidth) {
            //获取当前点击的<span>,构造方法中给操作面板绑定事件用到
            this._$targetCell = $targetCell;
            //只有当点击的是空白小方格时，才显示操作面板让用户操作
            if (!$targetCell.hasClass("original")) {
                var _$targetCell$position = $targetCell.position(),
                    left = _$targetCell$position.left,
                    top = _$targetCell$position.top;
                //当点击右边的小方格时，为保证面板不变形，合理计算操作面板位置


                if (left >= halfWidth) {
                    left = left - 3 * $targetCell.width();
                }
                this._$panel.css({
                    left: left + "px",
                    top: top + "px"
                }).show();
            }
        }

        //关闭操作面板

    }, {
        key: "hide",
        value: function hide() {
            this._$panel.hide();
        }
    }]);

    return PopupNumbers;
}();

module.exports = PopupNumbers;

/***/ }),

/***/ "./src/less/main.less":
/*!****************************!*\
  !*** ./src/less/main.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./main.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/less/main.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map