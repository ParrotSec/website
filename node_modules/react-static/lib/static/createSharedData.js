"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createSharedData;

var _shorthash = _interopRequireDefault(require("shorthash"));

function createSharedData(data) {
  return {
    hash: _shorthash["default"].unique(JSON.stringify(data)),
    data: data
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGF0aWMvY3JlYXRlU2hhcmVkRGF0YS5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTaGFyZWREYXRhIiwiZGF0YSIsImhhc2giLCJzaG9ydGhhc2giLCJ1bmlxdWUiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDN0MsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUVDLHNCQUFVQyxNQUFWLENBQWlCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsSUFBZixDQUFqQixDQUREO0FBRUxBLElBQUFBLElBQUksRUFBSkE7QUFGSyxHQUFQO0FBSUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRoYXNoIGZyb20gJ3Nob3J0aGFzaCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2hhcmVkRGF0YShkYXRhKSB7XG4gIHJldHVybiB7XG4gICAgaGFzaDogc2hvcnRoYXNoLnVuaXF1ZShKU09OLnN0cmluZ2lmeShkYXRhKSksXG4gICAgZGF0YSxcbiAgfVxufVxuIl19