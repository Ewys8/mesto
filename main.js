(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);var e={formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_invalid",errorClass:"error-message_active"},r=(document.querySelector(".popup_type_edit"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".profile__edit-button")),n=document.querySelector(".popup__edit-form"),o=(document.querySelector(".popup__input_type_name"),document.querySelector(".popup__input_type_description"),document.querySelector(".popup_type_add"),document.querySelector(".profile__add-button")),i=document.querySelector(".popup__add-form"),u=(i.querySelector(".popup__input_type_card-name"),i.querySelector(".popup__input_type_card-url"),document.querySelector("#card-template")),c=document.querySelector(".gallery");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}document.querySelector(".popup_type_figure"),document.querySelector(".popup__image"),document.querySelector(".popup__figcaption");var s=function(){function t(e,r,n){var o,i,u,c=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,u=function(){c.cardDeleteButton.addEventListener("click",(function(){c._handleDelete()})),c.cardLikeButton.addEventListener("click",(function(){c._handleLike()})),c.cardPhoto.addEventListener("click",(function(){c.openFigurePopup(c._name,c._link)}))},(i=p(i="_setEventListeners"))in o?Object.defineProperty(o,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[i]=u,this._name=e.name,this._link=e.link,this._templateSelector=r,this._element=this._getTemplate(),this.cardPhoto=this._element.querySelector(".card__photo"),this.cardTitle=this._element.querySelector(".card__title"),this.cardLikeButton=this._element.querySelector(".card__like-button"),this.cardDeleteButton=this._element.querySelector(".card__delete-button"),this.openFigurePopup=n}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return this._templateSelector.content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this.cardTitle.textContent=this._name,this.cardPhoto.src=this._link,this.cardPhoto.alt=this._name,this._setEventListeners(),this._element}},{key:"_handleLike",value:function(){this.cardLikeButton.classList.toggle("card__like-button_active")}},{key:"_handleDelete",value:function(){this._element.remove()}}])&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function m(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}var d=function(){function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,"_setEventListeners",(function(){n._toggleButtonValidity(),n.inputs.forEach((function(t){t.addEventListener("input",(function(){n._checkInputValidity(t),n._toggleButtonValidity()}))}))})),m(this,"enableValidation",(function(){n._setEventListeners()})),this.config=e,this.form=r,this.inputs=Array.from(this.form.querySelectorAll(e.inputSelector)),this.popupSubmitButton=this.form.querySelector(e.submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.add(this.config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_hideInputError",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.remove(this.config.inputErrorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"_setButtonDisable",value:function(){this.popupSubmitButton.setAttribute("disabled",""),this.popupSubmitButton.classList.add(this.config.inactiveButtonClass)}},{key:"_setButtonEnable",value:function(){this.popupSubmitButton.removeAttribute("disabled"),this.popupSubmitButton.classList.remove(this.config.inactiveButtonClass)}},{key:"hideError",value:function(t){var e=this;this.inputs.forEach((function(t){e._hideInputError(t)})),this._setButtonDisable()}},{key:"_toggleButtonValidity",value:function(){this.form.checkValidity()?this._setButtonEnable():this._setButtonDisable()}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var _=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=items,this._renderer=e,this._container=r}var e,r;return e=t,(r=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==S(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===S(o)?o:String(o)),n)}var o}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){console.log(this._popup),this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&t.close()}))}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},O.apply(this,arguments)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function L(t){var e=function(t,e){if("object"!==E(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===E(e)?e:String(e)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(i,t);var e,r,n,o=(r=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(r);if(n){var o=k(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}(this,t)});function i(t){var e,r,n,u,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),n=P(r=o.call(this,t)),c=function(t,n){O((e=P(r),k(i.prototype)),"open",e).call(e),r._image.src=n,r._imageCaption.textContent=t,r._image.alt=t},(u=L(u="open"))in n?Object.defineProperty(n,u,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[u]=c,r._image=r._popup.querySelector(".popup__image"),r._imageCaption=r._popup.querySelector(".popup__figcaption"),r}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(w);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function B(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==q(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===q(o)?o:String(o)),n)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},T.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(n);if(o){var r=D(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._submitFormHandler=e,r._popupForm=r._popup.querySelector(".form"),r._inputList=Array.from(r._popupForm.querySelectorAll(".popup__input")),r}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._valuesArray={},this._inputList.forEach((function(e){t._valuesArray[e.name]=e.value})),this._valuesArray}},{key:"setUserValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;T(D(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._submitFormHandler(t._getInputValues()),t.close()}))}},{key:"close",value:function(){T(D(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&B(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(w);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var V=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileDescription=document.querySelector(e.profileDescriptionSelector)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{newName:this._profileName.textContent,newDescription:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(t){var e=t.newName,r=t.newDescription;this._profileName.textContent=e,this._profileDescription.textContent=r}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var F=new t.default({url:"https://mesto.nomoreparties.co/v1/cohort-75",headers:{authorization:"a3be5fd8-a845-485e-b459-773d089bf2dd","Content-Type":"application/json"}}),N=new V({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description"}),M=new C(".popup_type_figure");M.setEventListeners();var H=function(t){return new s(t,u,z).generateCard()},z=function(t,e){M.open(t,e)},$=new R(".popup_type_add",(function(t){console.log(t),i.reset(),J.addItem(H(t)),$.close()}));$.setEventListeners();var G=new R(".popup_type_edit",(function(t){console.log(t),N.setUserInfo(t),G.close()}));G.setEventListeners();var J=new _((function(t){J.addItem(H(t))}),c);J.renderItems(),Promise.all([F.getUserInfo(),F.getInitialCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,c=[],l=!0,a=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){a=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(a)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return U(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];N.setUserInfo(o),J.renderItems(i.reverse())})).catch((function(t){return console.error("Не получилось загрузить данные ".concat(t))}));var K=new d(e,n),Q=new d(e,i);K.enableValidation(),Q.enableValidation(),r.addEventListener("click",(function(){G.open(),K.hideError(),G.setUserValue(N.getUserInfo())})),o.addEventListener("click",(function(){Q.hideError(),$.open()}))})();