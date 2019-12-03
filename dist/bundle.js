(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.bundle = {}));
}(this, (function (exports) { 'use strict';

  var isEmptyObj = function (obj) { return typeof obj === 'function' && obj !== null; };
  var deleteProps = function (obj, keyList) {
      if (keyList === void 0) { keyList = []; }
      return Object.keys(obj).reduce(function (acc, cur) {
          if (!keyList.includes(cur)) {
              acc[cur] = obj[cur];
          }
          return acc;
      }, {});
  };
  var main = {
      isEmptyObj: isEmptyObj,
      deleteProps: deleteProps
  };

  exports.default = main;
  exports.deleteProps = deleteProps;
  exports.isEmptyObj = isEmptyObj;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
