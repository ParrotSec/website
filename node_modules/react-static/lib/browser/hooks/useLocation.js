"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _onLocationChange = _interopRequireDefault(require("../utils/onLocationChange"));

var useLocation = function useLocation() {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1]; // eslint-disable-next-line


  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      _ = _useState4[0],
      setCount = _useState4[1];

  (0, _react.useEffect)(function () {
    return (0, _onLocationChange["default"])(function (location) {
      setLocation(location);
      setCount(function (old) {
        return old + 1;
      });
    });
  }, []);
  return location;
};

var _default = useLocation;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2hvb2tzL3VzZUxvY2F0aW9uLmpzIl0sIm5hbWVzIjpbInVzZUxvY2F0aW9uIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIl8iLCJzZXRDb3VudCIsIm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUEsa0JBQ1Esc0JBRFI7QUFBQTtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE8sa0JBRXhCOzs7QUFGd0IsbUJBR0YscUJBQVMsQ0FBVCxDQUhFO0FBQUE7QUFBQSxNQUdqQkMsQ0FIaUI7QUFBQSxNQUdkQyxRQUhjOztBQUl4Qix3QkFDRTtBQUFBLFdBQ0Usa0NBQWlCLFVBQUFILFFBQVEsRUFBSTtBQUMzQkMsTUFBQUEsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDQUcsTUFBQUEsUUFBUSxDQUFDLFVBQUFDLEdBQUc7QUFBQSxlQUFJQSxHQUFHLEdBQUcsQ0FBVjtBQUFBLE9BQUosQ0FBUjtBQUNELEtBSEQsQ0FERjtBQUFBLEdBREYsRUFNRSxFQU5GO0FBUUEsU0FBT0osUUFBUDtBQUNELENBYkQ7O2VBZWVELFciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgb25Mb2NhdGlvbkNoYW5nZSBmcm9tICcuLi91dGlscy9vbkxvY2F0aW9uQ2hhbmdlJ1xuXG5jb25zdCB1c2VMb2NhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgpXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zdCBbXywgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+XG4gICAgICBvbkxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uID0+IHtcbiAgICAgICAgc2V0TG9jYXRpb24obG9jYXRpb24pXG4gICAgICAgIHNldENvdW50KG9sZCA9PiBvbGQgKyAxKVxuICAgICAgfSksXG4gICAgW11cbiAgKVxuICByZXR1cm4gbG9jYXRpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYXRpb25cbiJdfQ==