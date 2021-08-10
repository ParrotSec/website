"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getStagedRules = void 0;

var _jsLoader = _interopRequireDefault(require("./jsLoader"));

var _cssLoader = _interopRequireDefault(require("./cssLoader"));

var _fileLoader = _interopRequireDefault(require("./fileLoader"));

var _jsLoaderExternal = _interopRequireDefault(require("./jsLoaderExternal"));

var getStagedRules = function getStagedRules(args) {
  return {
    jsLoader: (0, _jsLoader["default"])(args),
    jsLoaderExt: (0, _jsLoaderExternal["default"])(args),
    cssLoader: (0, _cssLoader["default"])(args),
    fileLoader: (0, _fileLoader["default"])(args)
  };
};

exports.getStagedRules = getStagedRules;

var _default = function _default(args) {
  return [{
    oneOf: [(0, _jsLoader["default"])(args), (0, _jsLoaderExternal["default"])(args), (0, _cssLoader["default"])(args), (0, _fileLoader["default"])(args)]
  }];
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRTdGFnZWRSdWxlcyIsImFyZ3MiLCJqc0xvYWRlciIsImpzTG9hZGVyRXh0IiwiY3NzTG9hZGVyIiwiZmlsZUxvYWRlciIsIm9uZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ3JDQyxJQUFBQSxRQUFRLEVBQUUsMEJBQVNELElBQVQsQ0FEMkI7QUFFckNFLElBQUFBLFdBQVcsRUFBRSxrQ0FBaUJGLElBQWpCLENBRndCO0FBR3JDRyxJQUFBQSxTQUFTLEVBQUUsMkJBQVVILElBQVYsQ0FIMEI7QUFJckNJLElBQUFBLFVBQVUsRUFBRSw0QkFBV0osSUFBWDtBQUp5QixHQUFMO0FBQUEsQ0FBM0I7Ozs7ZUFPUSxrQkFBQUEsSUFBSTtBQUFBLFNBQUksQ0FDckI7QUFDRUssSUFBQUEsS0FBSyxFQUFFLENBQ0wsMEJBQVNMLElBQVQsQ0FESyxFQUVMLGtDQUFpQkEsSUFBakIsQ0FGSyxFQUdMLDJCQUFVQSxJQUFWLENBSEssRUFJTCw0QkFBV0EsSUFBWCxDQUpLO0FBRFQsR0FEcUIsQ0FBSjtBQUFBLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQganNMb2FkZXIgZnJvbSAnLi9qc0xvYWRlcidcbmltcG9ydCBjc3NMb2FkZXIgZnJvbSAnLi9jc3NMb2FkZXInXG5pbXBvcnQgZmlsZUxvYWRlciBmcm9tICcuL2ZpbGVMb2FkZXInXG5pbXBvcnQganNMb2FkZXJFeHRlcm5hbCBmcm9tICcuL2pzTG9hZGVyRXh0ZXJuYWwnXG5cbmV4cG9ydCBjb25zdCBnZXRTdGFnZWRSdWxlcyA9IGFyZ3MgPT4gKHtcbiAganNMb2FkZXI6IGpzTG9hZGVyKGFyZ3MpLFxuICBqc0xvYWRlckV4dDoganNMb2FkZXJFeHRlcm5hbChhcmdzKSxcbiAgY3NzTG9hZGVyOiBjc3NMb2FkZXIoYXJncyksXG4gIGZpbGVMb2FkZXI6IGZpbGVMb2FkZXIoYXJncyksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcmdzID0+IFtcbiAge1xuICAgIG9uZU9mOiBbXG4gICAgICBqc0xvYWRlcihhcmdzKSxcbiAgICAgIGpzTG9hZGVyRXh0ZXJuYWwoYXJncyksXG4gICAgICBjc3NMb2FkZXIoYXJncyksXG4gICAgICBmaWxlTG9hZGVyKGFyZ3MpLFxuICAgIF0sXG4gIH0sXG5dXG4iXX0=