/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/***/ (() => {

const content = document.querySelector('.content__cards');
const roundButton = document.querySelector('.round-button');
const colorPopup = content.querySelector('.color-popup');
const greenOption = document.querySelector('.green');
const yellowOption = document.querySelector('.yellow');
const redOption = document.querySelector('.red');
const buttonAdd = document.querySelector('.header__btn'); //___show-popup___
//_____TASK-PRIORITY________

const tasksArray = [];

function uuidv4() {
  return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
} //_____TASK-PRIORITY-END________


const timeElement = document.querySelector('.stats__data-time');
const dayElement = document.querySelector('.stats__data-day');

function updateTimer() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}`;
  const dayOfWeek = ['Sun.', 'Mon.', 'Tues.', 'Wednes.', 'Thurs.', 'Fri.', 'Satur.'][now.getDay()];
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const dateString = `${day}.${month}.${year} ${dayOfWeek}`;
  timeElement.textContent = timeString;
  dayElement.textContent = dateString;
  setTimeout(updateTimer, 3000);
}

updateTimer(); // ______ THEME Changes ______

const colorChanged = document.querySelector('.js-color');
const pageBg = document.querySelector('.page');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const createNewCard = document.querySelector('.js-create-card');
const creatingNewCard = document.querySelector('.content__cards');
const tasksContent = document.querySelector('.content');
colorChanged.addEventListener('click', colorSwitch);
createNewCard.addEventListener('click', createNew);
buttonAdd.addEventListener('click', createNew);

function colorSwitch() {
  pageBg.classList.toggle('page-dark');
  colorChanged.classList.toggle('page-dark-on');
  header.classList.toggle('header__dark');
  stats.classList.toggle('stats__dark');
  tasksContent.classList.toggle('content__dark');
}

function createNew() {
  const cardId = uuidv4();
  const taskObj = {
    cardText: '',
    id: cardId,
    priority: 0
  };
  tasksArray.push(taskObj);
  console.log(tasksArray);
  const newCard = document.createElement('div');
  newCard.classList.add('content__card');
  newCard.setAttribute('data-blockId', cardId);
  newCard.innerHTML = `
	
	  <div class="content__card-priority">
		 <button class="round-button"></button>
		 <div class="color-popup">
		 	<div class="color-option done"></div>
			<div class="color-option green"></div>
			<div class="color-option yellow"></div>
			<div class="color-option red"></div>

		 </div>
	  </div>
	  <div class="content__card-text">
		<textarea class="content__card-input" rows="4" cols="30" placeholder="Write your task"></textarea>
	  </div>
	  <div class="content__card-options">
		 <div class="content__card-btn-done">X</div>
		 <div class="content__card-btn-delite">Delite</div>
	  </div>
	 
	`;
  creatingNewCard.insertAdjacentElement('afterbegin', newCard);
  const newInput = newCard.querySelector('.content__card-input');
  newInput.focus();
  newInput.addEventListener('input', event => {
    const currentCardId = newCard.getAttribute('data-blockId');
    const currentTaskObj = tasksArray.find(task => task.id === currentCardId);
    currentTaskObj.cardText = event.target.value;
    console.log(tasksArray);
  });
} // ______ THEME Changes  END ______
//_________CHANGE STATUS ________
// creatingNewCard.addEventListener('click', function (event) {
// 	const target = event.target;
// 	if (target.classList.contains('round-button')) {
// 		const card = target.closest('.content__card');
// 		const cardId = card.getAttribute('data-blockId');
// 		const taskObj = tasksArray.find((task) => task.id === cardId);
// 		const content = document.querySelector('.content__cards');
// 		const greenOption = document.querySelector('.green');
// 		const yellowOption = document.querySelector('.yellow');
// 		const redOption = document.querySelector('.red');
// 		const doneOption = document.querySelector('.done');
// 		const roundButton = document.querySelector('.round-button');
// 		const colorPopup = content.querySelector('.color-popup');
// 		colorPopup.classList.add('color-popup--active');
// 		greenOption.addEventListener('click', function () {
// 			taskObj.priority = 0;
// 			colorPopup.classList.remove('color-popup--active');
// 			console.log(tasksArray);
// 			roundButton.classList.remove('red');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.add('green');
// 			// roundButton.style.background = 'rgb(99, 233, 99)';
// 		});
// 		yellowOption.addEventListener('click', function () {
// 			taskObj.priority = 1;
// 			colorPopup.classList.remove('color-popup--active');
// 			// roundButton.classList.replace('round-button', 'round-button-yellow');
// 			roundButton.classList.remove('red');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.remove('green');
// 			roundButton.classList.add('yellow');
// 			console.log(tasksArray);
// 		});
// 		redOption.addEventListener('click', function () {
// 			taskObj.priority = 2;
// 			colorPopup.classList.remove('color-popup--active');
// 			roundButton.classList.remove('done');
// 			// roundButton.classList.replace('round-button', 'round-button-red');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.remove('green');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.add('red');
// 			console.log(tasksArray);
// 		});
// 		doneOption.addEventListener('click', function () {
// 			taskObj.priority = 3;
// 			colorPopup.classList.remove('color-popup--active');
// 			roundButton.classList.remove('green');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.remove('red');
// 			roundButton.classList.add('done');
// 			console.log(tasksArray);
// 		});
// 	}
// });
//_________CHANGE STATUS END ________
//___________ DELETE TASK ______________


content.addEventListener('click', deliteTask);
content.addEventListener('click', changeStatus);

function deliteTask(e) {
  if (e.target.classList.contains('content__card-btn-delite')) {
    const card = e.target.closest('.content__card');
    const cardId = card.getAttribute('data-blockId');
    const taskObj = tasksArray.find(task => task.id === cardId);
    tasksArray.splice(tasksArray.indexOf(taskObj), 1);
    console.log(tasksArray);
    const content = document.querySelector('.content__cards');
    content.removeChild(card);
  }
} //___________ DELETE TASK END______________
//_________CHANGE STATUS ________


function changeStatus(e) {
  if (e.target.classList.contains('round-button')) {}
} //_________CHANGE STATUS END ________

/***/ }),

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};




pug_html = pug_html + "\u003C!--+card('backgroundCad1.png', 'cardTitle1.png', 'cardimage1.png', 'Casino Game')--\u003E";




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.svg */ "./src/assets/images/favicon.svg"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003ETOGO\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"page\"\u003E\u003Cdiv class=\"side\"\u003E \u003Cdiv class=\"side__logo\"\u003E \u003Ca href=\"#\"\u003E ";
pug_mixins["image"]('logo.svg');
pug_html = pug_html + "\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"side__prop\"\u003E\u003Cdiv class=\"side__prop-theme\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "side__prop-theme-img js-color"}
}, 'toggle.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"side__prop-swap\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "side__prop-swap-grid"}
}, 'grid.svg');
pug_mixins["image"].call({
attributes: {"class": "side__prop-swap-row"}
}, 'row.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"side__basket\"\u003E";
pug_mixins["image"]('delete.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main\"\u003E\u003Cdiv class=\"header\"\u003E\u003Cdiv class=\"header__title\"\u003EProjects\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__btn\"\u003EStart new task\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"content__cards\"\u003E \u003Cdiv class=\"content__card-create js-create-card\"\u003E\u003Cdiv class=\"content__card-create-btn\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stats\"\u003E\u003Cdiv class=\"stats__prop\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"stats__user\"\u003E \u003Cp class=\"stats__user-greet\"\u003EHello\u003C\u002Fp\u003E\u003Cp class=\"stats__user-name\"\u003EUserName\u003C\u002Fp\u003E\u003Cdiv class=\"stats__user-img\"\u003E";
pug_mixins["image"]('user.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stats__activity\"\u003E\u003Cp class=\"stats__activity-text\"\u003EToday: 0 tasks\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"stats__data\"\u003E \u003Cdiv class=\"stats__data-time\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"stats__data-day\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./back.png": "./src/assets/images/back.png",
	"./delete.svg": "./src/assets/images/delete.svg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./favicon.svg": "./src/assets/images/favicon.svg",
	"./grid.svg": "./src/assets/images/grid.svg",
	"./logo.svg": "./src/assets/images/logo.svg",
	"./row.svg": "./src/assets/images/row.svg",
	"./toggle.svg": "./src/assets/images/toggle.svg",
	"./user.svg": "./src/assets/images/user.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/back.png":
/*!************************************!*\
  !*** ./src/assets/images/back.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fda4fd23d7fdec9855b6.png";

/***/ }),

/***/ "./src/assets/images/delete.svg":
/*!**************************************!*\
  !*** ./src/assets/images/delete.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/132c1226e32a4a45a11c.svg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/favicon.svg":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d0a8b0c3c7cc86d48afa.svg";

/***/ }),

/***/ "./src/assets/images/grid.svg":
/*!************************************!*\
  !*** ./src/assets/images/grid.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/774d3b9f0abda1dcc56a.svg";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d0a8b0c3c7cc86d48afa.svg";

/***/ }),

/***/ "./src/assets/images/row.svg":
/*!***********************************!*\
  !*** ./src/assets/images/row.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d25d379713c96aa03e7d.svg";

/***/ }),

/***/ "./src/assets/images/toggle.svg":
/*!**************************************!*\
  !*** ./src/assets/images/toggle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1fe5e39323300bb71ee6.svg";

/***/ }),

/***/ "./src/assets/images/user.svg":
/*!************************************!*\
  !*** ./src/assets/images/user.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9c4b97891923eb45a084.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.js");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvc3lrcmVwZXRzL0Rlc2t0b3AvV2ViL3Byb2plY3QvVG9Eb3YyL1RvRG8yL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fY2FyZHMnKTtcbmNvbnN0IHJvdW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kLWJ1dHRvbicpO1xuY29uc3QgY29sb3JQb3B1cCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcignLmNvbG9yLXBvcHVwJyk7XG5jb25zdCBncmVlbk9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVlbicpO1xuY29uc3QgeWVsbG93T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllbGxvdycpO1xuY29uc3QgcmVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZCcpO1xuY29uc3QgYnV0dG9uQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnRuJyk7XG5cbi8vX19fc2hvdy1wb3B1cF9fX1xuXG4vL19fX19fVEFTSy1QUklPUklUWV9fX19fX19fXG5cbmNvbnN0IHRhc2tzQXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gdXVpZHY0KCkge1xuXHRyZXR1cm4gJ3h4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0dmFyIHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDAsXG5cdFx0XHR2ID0gYyA9PSAneCcgPyByIDogKHIgJiAweDMpIHwgMHg4O1xuXHRcdHJldHVybiB2LnRvU3RyaW5nKDE2KTtcblx0fSk7XG59XG5cbi8vX19fX19UQVNLLVBSSU9SSVRZLUVORF9fX19fX19fXG5cbmNvbnN0IHRpbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzX19kYXRhLXRpbWUnKTtcbmNvbnN0IGRheUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHNfX2RhdGEtZGF5Jyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xuXHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdGNvbnN0IGhvdXJzID0gbm93LmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuXHRjb25zdCBtaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG5cdGNvbnN0IHRpbWVTdHJpbmcgPSBgJHtob3Vyc306JHttaW51dGVzfWA7XG5cblx0Y29uc3QgZGF5T2ZXZWVrID0gW1xuXHRcdCdTdW4uJyxcblx0XHQnTW9uLicsXG5cdFx0J1R1ZXMuJyxcblx0XHQnV2VkbmVzLicsXG5cdFx0J1RodXJzLicsXG5cdFx0J0ZyaS4nLFxuXHRcdCdTYXR1ci4nLFxuXHRdW25vdy5nZXREYXkoKV07XG5cdGNvbnN0IG1vbnRoID0gW1xuXHRcdCdKYW4nLFxuXHRcdCdGZWInLFxuXHRcdCdNYXInLFxuXHRcdCdBcHInLFxuXHRcdCdNYXknLFxuXHRcdCdKdW4nLFxuXHRcdCdKdWwnLFxuXHRcdCdBdWcnLFxuXHRcdCdTZXAnLFxuXHRcdCdPY3QnLFxuXHRcdCdOb3YnLFxuXHRcdCdEZWMnLFxuXHRdW25vdy5nZXRNb250aCgpXTtcblx0Y29uc3QgZGF5ID0gbm93LmdldERhdGUoKTtcblx0Y29uc3QgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBkYXRlU3RyaW5nID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9ICR7ZGF5T2ZXZWVrfWA7XG5cblx0dGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aW1lU3RyaW5nO1xuXHRkYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZVN0cmluZztcblxuXHRzZXRUaW1lb3V0KHVwZGF0ZVRpbWVyLCAzMDAwKTtcbn1cblxudXBkYXRlVGltZXIoKTtcblxuLy8gX19fX19fIFRIRU1FIENoYW5nZXMgX19fX19fXG5cbmNvbnN0IGNvbG9yQ2hhbmdlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb2xvcicpO1xuY29uc3QgcGFnZUJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IHN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRzJyk7XG5jb25zdCBjcmVhdGVOZXdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNyZWF0ZS1jYXJkJyk7XG5jb25zdCBjcmVhdGluZ05ld0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fY2FyZHMnKTtcbmNvbnN0IHRhc2tzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmNvbG9yQ2hhbmdlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbG9yU3dpdGNoKTtcbmNyZWF0ZU5ld0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXcpO1xuYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3KTtcblxuZnVuY3Rpb24gY29sb3JTd2l0Y2goKSB7XG5cdHBhZ2VCZy5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLWRhcmsnKTtcblx0Y29sb3JDaGFuZ2VkLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2UtZGFyay1vbicpO1xuXHRoZWFkZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19kYXJrJyk7XG5cdHN0YXRzLmNsYXNzTGlzdC50b2dnbGUoJ3N0YXRzX19kYXJrJyk7XG5cdHRhc2tzQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50X19kYXJrJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ldygpIHtcblx0Y29uc3QgY2FyZElkID0gdXVpZHY0KCk7XG5cdGNvbnN0IHRhc2tPYmogPSB7XG5cdFx0Y2FyZFRleHQ6ICcnLFxuXHRcdGlkOiBjYXJkSWQsXG5cdFx0cHJpb3JpdHk6IDAsXG5cdH07XG5cblx0dGFza3NBcnJheS5wdXNoKHRhc2tPYmopO1xuXHRjb25zb2xlLmxvZyh0YXNrc0FycmF5KTtcblxuXHRjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5ld0NhcmQuY2xhc3NMaXN0LmFkZCgnY29udGVudF9fY2FyZCcpO1xuXHRuZXdDYXJkLnNldEF0dHJpYnV0ZSgnZGF0YS1ibG9ja0lkJywgY2FyZElkKTtcblx0bmV3Q2FyZC5pbm5lckhUTUwgPSBgXG5cdFxuXHQgIDxkaXYgY2xhc3M9XCJjb250ZW50X19jYXJkLXByaW9yaXR5XCI+XG5cdFx0IDxidXR0b24gY2xhc3M9XCJyb3VuZC1idXR0b25cIj48L2J1dHRvbj5cblx0XHQgPGRpdiBjbGFzcz1cImNvbG9yLXBvcHVwXCI+XG5cdFx0IFx0PGRpdiBjbGFzcz1cImNvbG9yLW9wdGlvbiBkb25lXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sb3Itb3B0aW9uIGdyZWVuXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sb3Itb3B0aW9uIHllbGxvd1wiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbG9yLW9wdGlvbiByZWRcIj48L2Rpdj5cblxuXHRcdCA8L2Rpdj5cblx0ICA8L2Rpdj5cblx0ICA8ZGl2IGNsYXNzPVwiY29udGVudF9fY2FyZC10ZXh0XCI+XG5cdFx0PHRleHRhcmVhIGNsYXNzPVwiY29udGVudF9fY2FyZC1pbnB1dFwiIHJvd3M9XCI0XCIgY29scz1cIjMwXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSB5b3VyIHRhc2tcIj48L3RleHRhcmVhPlxuXHQgIDwvZGl2PlxuXHQgIDxkaXYgY2xhc3M9XCJjb250ZW50X19jYXJkLW9wdGlvbnNcIj5cblx0XHQgPGRpdiBjbGFzcz1cImNvbnRlbnRfX2NhcmQtYnRuLWRvbmVcIj5YPC9kaXY+XG5cdFx0IDxkaXYgY2xhc3M9XCJjb250ZW50X19jYXJkLWJ0bi1kZWxpdGVcIj5EZWxpdGU8L2Rpdj5cblx0ICA8L2Rpdj5cblx0IFxuXHRgO1xuXG5cdGNyZWF0aW5nTmV3Q2FyZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBuZXdDYXJkKTtcblxuXHRjb25zdCBuZXdJbnB1dCA9IG5ld0NhcmQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRfX2NhcmQtaW5wdXQnKTtcblxuXHRuZXdJbnB1dC5mb2N1cygpO1xuXG5cdG5ld0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG5cdFx0Y29uc3QgY3VycmVudENhcmRJZCA9IG5ld0NhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWJsb2NrSWQnKTtcblx0XHRjb25zdCBjdXJyZW50VGFza09iaiA9IHRhc2tzQXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gY3VycmVudENhcmRJZCk7XG5cdFx0Y3VycmVudFRhc2tPYmouY2FyZFRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cdFx0Y29uc29sZS5sb2codGFza3NBcnJheSk7XG5cdH0pO1xufVxuLy8gX19fX19fIFRIRU1FIENoYW5nZXMgIEVORCBfX19fX19cblxuLy9fX19fX19fX19DSEFOR0UgU1RBVFVTIF9fX19fX19fXG5cbi8vIGNyZWF0aW5nTmV3Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gXHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbi8vIFx0aWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JvdW5kLWJ1dHRvbicpKSB7XG4vLyBcdFx0Y29uc3QgY2FyZCA9IHRhcmdldC5jbG9zZXN0KCcuY29udGVudF9fY2FyZCcpO1xuLy8gXHRcdGNvbnN0IGNhcmRJZCA9IGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWJsb2NrSWQnKTtcbi8vIFx0XHRjb25zdCB0YXNrT2JqID0gdGFza3NBcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmlkID09PSBjYXJkSWQpO1xuLy8gXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fY2FyZHMnKTtcblxuLy8gXHRcdGNvbnN0IGdyZWVuT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWVuJyk7XG4vLyBcdFx0Y29uc3QgeWVsbG93T3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllbGxvdycpO1xuLy8gXHRcdGNvbnN0IHJlZE9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWQnKTtcbi8vIFx0XHRjb25zdCBkb25lT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRvbmUnKTtcblxuLy8gXHRcdGNvbnN0IHJvdW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdW5kLWJ1dHRvbicpO1xuLy8gXHRcdGNvbnN0IGNvbG9yUG9wdXAgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xvci1wb3B1cCcpO1xuXG4vLyBcdFx0Y29sb3JQb3B1cC5jbGFzc0xpc3QuYWRkKCdjb2xvci1wb3B1cC0tYWN0aXZlJyk7XG5cbi8vIFx0XHRncmVlbk9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRcdHRhc2tPYmoucHJpb3JpdHkgPSAwO1xuLy8gXHRcdFx0Y29sb3JQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvci1wb3B1cC0tYWN0aXZlJyk7XG4vLyBcdFx0XHRjb25zb2xlLmxvZyh0YXNrc0FycmF5KTtcblxuLy8gXHRcdFx0cm91bmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4vLyBcdFx0XHRyb3VuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3cnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dyZWVuJyk7XG5cbi8vIFx0XHRcdC8vIHJvdW5kQnV0dG9uLnN0eWxlLmJhY2tncm91bmQgPSAncmdiKDk5LCAyMzMsIDk5KSc7XG4vLyBcdFx0fSk7XG5cbi8vIFx0XHR5ZWxsb3dPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0XHR0YXNrT2JqLnByaW9yaXR5ID0gMTtcbi8vIFx0XHRcdGNvbG9yUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3ItcG9wdXAtLWFjdGl2ZScpO1xuLy8gXHRcdFx0Ly8gcm91bmRCdXR0b24uY2xhc3NMaXN0LnJlcGxhY2UoJ3JvdW5kLWJ1dHRvbicsICdyb3VuZC1idXR0b24teWVsbG93Jyk7XG4vLyBcdFx0XHRyb3VuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWQnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuJyk7XG4vLyBcdFx0XHRyb3VuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd5ZWxsb3cnKTtcblxuLy8gXHRcdFx0Y29uc29sZS5sb2codGFza3NBcnJheSk7XG4vLyBcdFx0fSk7XG5cbi8vIFx0XHRyZWRPcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4vLyBcdFx0XHR0YXNrT2JqLnByaW9yaXR5ID0gMjtcbi8vIFx0XHRcdGNvbG9yUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnY29sb3ItcG9wdXAtLWFjdGl2ZScpO1xuLy8gXHRcdFx0cm91bmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZG9uZScpO1xuXG4vLyBcdFx0XHQvLyByb3VuZEJ1dHRvbi5jbGFzc0xpc3QucmVwbGFjZSgncm91bmQtYnV0dG9uJywgJ3JvdW5kLWJ1dHRvbi1yZWQnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2RvbmUnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuJyk7XG4vLyBcdFx0XHRyb3VuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd5ZWxsb3cnKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlZCcpO1xuXG4vLyBcdFx0XHRjb25zb2xlLmxvZyh0YXNrc0FycmF5KTtcbi8vIFx0XHR9KTtcbi8vIFx0XHRkb25lT3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuLy8gXHRcdFx0dGFza09iai5wcmlvcml0eSA9IDM7XG4vLyBcdFx0XHRjb2xvclBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbG9yLXBvcHVwLS1hY3RpdmUnKTtcblxuLy8gXHRcdFx0cm91bmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZ3JlZW4nKTtcbi8vIFx0XHRcdHJvdW5kQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3llbGxvdycpO1xuLy8gXHRcdFx0cm91bmRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4vLyBcdFx0XHRyb3VuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG5cbi8vIFx0XHRcdGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xuLy8gXHRcdH0pO1xuLy8gXHR9XG4vLyB9KTtcblxuLy9fX19fX19fX19DSEFOR0UgU1RBVFVTIEVORCBfX19fX19fX1xuXG4vL19fX19fX19fX19fIERFTEVURSBUQVNLIF9fX19fX19fX19fX19fXG5cbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxpdGVUYXNrKTtcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VTdGF0dXMpO1xuXG5mdW5jdGlvbiBkZWxpdGVUYXNrKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29udGVudF9fY2FyZC1idG4tZGVsaXRlJykpIHtcblx0XHRjb25zdCBjYXJkID0gZS50YXJnZXQuY2xvc2VzdCgnLmNvbnRlbnRfX2NhcmQnKTtcblx0XHRjb25zdCBjYXJkSWQgPSBjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1ibG9ja0lkJyk7XG5cdFx0Y29uc3QgdGFza09iaiA9IHRhc2tzQXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5pZCA9PT0gY2FyZElkKTtcblx0XHR0YXNrc0FycmF5LnNwbGljZSh0YXNrc0FycmF5LmluZGV4T2YodGFza09iaiksIDEpO1xuXHRcdGNvbnNvbGUubG9nKHRhc2tzQXJyYXkpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fY2FyZHMnKTtcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKGNhcmQpO1xuXHR9XG59XG4vL19fX19fX19fX19fIERFTEVURSBUQVNLIEVORF9fX19fX19fX19fX19fXG5cbi8vX19fX19fX19fQ0hBTkdFIFNUQVRVUyBfX19fX19fX1xuZnVuY3Rpb24gY2hhbmdlU3RhdHVzKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncm91bmQtYnV0dG9uJykpIHtcblx0fVxufVxuLy9fX19fX19fX19DSEFOR0UgU1RBVFVTIEVORCBfX19fX19fX1xuIiwidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhLS0rY2FyZCgnYmFja2dyb3VuZENhZDEucG5nJywgJ2NhcmRUaXRsZTEucG5nJywgJ2NhcmRpbWFnZTEucG5nJywgJ0Nhc2lubyBHYW1lJyktLVxcdTAwM0VcIjtcblxuXG5cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnN2Z2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRVRPR09cXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzaWRlXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2lkZV9fbG9nb1xcXCJcXHUwMDNFIFxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnbG9nby5zdmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzaWRlX19wcm9wXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzaWRlX19wcm9wLXRoZW1lXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwic2lkZV9fcHJvcC10aGVtZS1pbWcganMtY29sb3JcIn1cbn0sICd0b2dnbGUuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzaWRlX19wcm9wLXN3YXBcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJzaWRlX19wcm9wLXN3YXAtZ3JpZFwifVxufSwgJ2dyaWQuc3ZnJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0uY2FsbCh7XG5hdHRyaWJ1dGVzOiB7XCJjbGFzc1wiOiBcInNpZGVfX3Byb3Atc3dhcC1yb3dcIn1cbn0sICdyb3cuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzaWRlX19iYXNrZXRcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdkZWxldGUuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fdGl0bGVcXFwiXFx1MDAzRVByb2plY3RzXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19idG5cXFwiXFx1MDAzRVN0YXJ0IG5ldyB0YXNrXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudF9fY2FyZHNcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb250ZW50X19jYXJkLWNyZWF0ZSBqcy1jcmVhdGUtY2FyZFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY29udGVudF9fY2FyZC1jcmVhdGUtYnRuXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzdGF0c1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3RhdHNfX3Byb3BcXFwiXFx1MDAzRSBcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzdGF0c19fdXNlclxcXCJcXHUwMDNFIFxcdTAwM0NwIGNsYXNzPVxcXCJzdGF0c19fdXNlci1ncmVldFxcXCJcXHUwMDNFSGVsbG9cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3AgY2xhc3M9XFxcInN0YXRzX191c2VyLW5hbWVcXFwiXFx1MDAzRVVzZXJOYW1lXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN0YXRzX191c2VyLWltZ1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3VzZXIuc3ZnJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzdGF0c19fYWN0aXZpdHlcXFwiXFx1MDAzRVxcdTAwM0NwIGNsYXNzPVxcXCJzdGF0c19fYWN0aXZpdHktdGV4dFxcXCJcXHUwMDNFVG9kYXk6IDAgdGFza3NcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3RhdHNfX2RhdGFcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJzdGF0c19fZGF0YS10aW1lXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3RhdHNfX2RhdGEtZGF5XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2JhY2sucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrLnBuZ1wiLFxuXHRcIi4vZGVsZXRlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZGVsZXRlLnN2Z1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9mYXZpY29uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5zdmdcIixcblx0XCIuL2dyaWQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9ncmlkLnN2Z1wiLFxuXHRcIi4vbG9nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCIsXG5cdFwiLi9yb3cuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9yb3cuc3ZnXCIsXG5cdFwiLi90b2dnbGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy90b2dnbGUuc3ZnXCIsXG5cdFwiLi91c2VyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdXNlci5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJvdW5kQnV0dG9uIiwiY29sb3JQb3B1cCIsImdyZWVuT3B0aW9uIiwieWVsbG93T3B0aW9uIiwicmVkT3B0aW9uIiwiYnV0dG9uQWRkIiwidGFza3NBcnJheSIsInV1aWR2NCIsInJlcGxhY2UiLCJjIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ2IiwidG9TdHJpbmciLCJ0aW1lRWxlbWVudCIsImRheUVsZW1lbnQiLCJ1cGRhdGVUaW1lciIsIm5vdyIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInRpbWVTdHJpbmciLCJkYXlPZldlZWsiLCJnZXREYXkiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImRhdGVTdHJpbmciLCJ0ZXh0Q29udGVudCIsInNldFRpbWVvdXQiLCJjb2xvckNoYW5nZWQiLCJwYWdlQmciLCJoZWFkZXIiLCJzdGF0cyIsImNyZWF0ZU5ld0NhcmQiLCJjcmVhdGluZ05ld0NhcmQiLCJ0YXNrc0NvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29sb3JTd2l0Y2giLCJjcmVhdGVOZXciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjYXJkSWQiLCJ0YXNrT2JqIiwiY2FyZFRleHQiLCJpZCIsInByaW9yaXR5IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJuZXdDYXJkIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50RWxlbWVudCIsIm5ld0lucHV0IiwiZm9jdXMiLCJldmVudCIsImN1cnJlbnRDYXJkSWQiLCJnZXRBdHRyaWJ1dGUiLCJjdXJyZW50VGFza09iaiIsImZpbmQiLCJ0YXNrIiwidGFyZ2V0IiwidmFsdWUiLCJkZWxpdGVUYXNrIiwiY2hhbmdlU3RhdHVzIiwiZSIsImNvbnRhaW5zIiwiY2FyZCIsImNsb3Nlc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwicmVtb3ZlQ2hpbGQiLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==