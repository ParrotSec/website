"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "routePathContext", {
  enumerable: true,
  get: function get() {
    return _routePathContext["default"];
  }
});
exports.useRoutePath = void 0;

var _react = require("react");

var _routePathContext = _interopRequireDefault(require("../context/routePathContext"));

var _utils = require("../utils");

var useRoutePath = function useRoutePath(routePath) {
  var routePathContextValue = (0, _react.useContext)(_routePathContext["default"]); // If we are in a routePathContext, use it always

  if (routePathContextValue) {
    return routePathContextValue;
  } // Clean the path


  return (0, _utils.getRoutePath)(routePath);
};

exports.useRoutePath = useRoutePath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2hvb2tzL3VzZVJvdXRlUGF0aC5qcyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZVBhdGgiLCJyb3V0ZVBhdGgiLCJyb3V0ZVBhdGhDb250ZXh0VmFsdWUiLCJyb3V0ZVBhdGhDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFJTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxTQUFTLEVBQUk7QUFDdkMsTUFBTUMscUJBQXFCLEdBQUcsdUJBQVdDLDRCQUFYLENBQTlCLENBRHVDLENBR3ZDOztBQUNBLE1BQUlELHFCQUFKLEVBQTJCO0FBQ3pCLFdBQU9BLHFCQUFQO0FBQ0QsR0FOc0MsQ0FRdkM7OztBQUNBLFNBQU8seUJBQWFELFNBQWIsQ0FBUDtBQUNELENBVk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgcm91dGVQYXRoQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L3JvdXRlUGF0aENvbnRleHQnXG5pbXBvcnQgeyBnZXRSb3V0ZVBhdGggfSBmcm9tICcuLi91dGlscydcblxuZXhwb3J0IHsgcm91dGVQYXRoQ29udGV4dCB9XG5cbmV4cG9ydCBjb25zdCB1c2VSb3V0ZVBhdGggPSByb3V0ZVBhdGggPT4ge1xuICBjb25zdCByb3V0ZVBhdGhDb250ZXh0VmFsdWUgPSB1c2VDb250ZXh0KHJvdXRlUGF0aENvbnRleHQpXG5cbiAgLy8gSWYgd2UgYXJlIGluIGEgcm91dGVQYXRoQ29udGV4dCwgdXNlIGl0IGFsd2F5c1xuICBpZiAocm91dGVQYXRoQ29udGV4dFZhbHVlKSB7XG4gICAgcmV0dXJuIHJvdXRlUGF0aENvbnRleHRWYWx1ZVxuICB9XG5cbiAgLy8gQ2xlYW4gdGhlIHBhdGhcbiAgcmV0dXJuIGdldFJvdXRlUGF0aChyb3V0ZVBhdGgpXG59XG4iXX0=