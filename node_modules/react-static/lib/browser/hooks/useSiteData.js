"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

var _2 = require("..");

var _useStaticInfo = require("./useStaticInfo");

//
// This will likely become a react cache resource soon
var siteDataPromise;
var siteDataReady;
var siteData;

var useSiteData = function useSiteData() {
  // When clientData reloads, rerender components
  // that use this hook
  // eslint-disable-next-line
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      _ = _useState2[0],
      setCount = _useState2[1];

  (0, _react.useEffect)(function () {
    return (0, _2.onReloadClientData)(function () {
      siteDataPromise = null;
      siteDataReady = false;
      setCount(function (old) {
        return old + 1;
      });
    });
  });
  var staticInfo = (0, _useStaticInfo.useStaticInfo)();

  if (staticInfo) {
    return staticInfo.siteData;
  }

  if (siteDataReady) {
    return siteData;
  }

  if (!siteDataPromise) {
    // Request the site data
    siteDataPromise = _axios["default"].get('/__react-static__/siteData').then(function (_ref) {
      var data = _ref.data;
      siteDataReady = true;
      siteData = data;
    });
  } // Throw the promise


  throw siteDataPromise;
};

var _default = useSiteData;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL2hvb2tzL3VzZVNpdGVEYXRhLmpzIl0sIm5hbWVzIjpbInNpdGVEYXRhUHJvbWlzZSIsInNpdGVEYXRhUmVhZHkiLCJzaXRlRGF0YSIsInVzZVNpdGVEYXRhIiwiXyIsInNldENvdW50Iiwib2xkIiwic3RhdGljSW5mbyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRkE7QUFJQTtBQUNBLElBQUlBLGVBQUo7QUFDQSxJQUFJQyxhQUFKO0FBQ0EsSUFBSUMsUUFBSjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUh3QixrQkFJRixxQkFBUyxDQUFULENBSkU7QUFBQTtBQUFBLE1BSWpCQyxDQUppQjtBQUFBLE1BSWRDLFFBSmM7O0FBS3hCLHdCQUFVO0FBQUEsV0FDUiwyQkFBbUIsWUFBTTtBQUN2QkwsTUFBQUEsZUFBZSxHQUFHLElBQWxCO0FBQ0FDLE1BQUFBLGFBQWEsR0FBRyxLQUFoQjtBQUNBSSxNQUFBQSxRQUFRLENBQUMsVUFBQUMsR0FBRztBQUFBLGVBQUlBLEdBQUcsR0FBRyxDQUFWO0FBQUEsT0FBSixDQUFSO0FBQ0QsS0FKRCxDQURRO0FBQUEsR0FBVjtBQVFBLE1BQU1DLFVBQVUsR0FBRyxtQ0FBbkI7O0FBRUEsTUFBSUEsVUFBSixFQUFnQjtBQUNkLFdBQU9BLFVBQVUsQ0FBQ0wsUUFBbEI7QUFDRDs7QUFFRCxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCLFdBQU9DLFFBQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNGLGVBQUwsRUFBc0I7QUFDcEI7QUFDQUEsSUFBQUEsZUFBZSxHQUFHUSxrQkFDZkMsR0FEZSxDQUNYLDRCQURXLEVBRWZDLElBRmUsQ0FFVixnQkFBYztBQUFBLFVBQVhDLElBQVcsUUFBWEEsSUFBVztBQUNsQlYsTUFBQUEsYUFBYSxHQUFHLElBQWhCO0FBQ0FDLE1BQUFBLFFBQVEsR0FBR1MsSUFBWDtBQUNELEtBTGUsQ0FBbEI7QUFNRCxHQS9CdUIsQ0FpQ3hCOzs7QUFDQSxRQUFNWCxlQUFOO0FBQ0QsQ0FuQ0Q7O2VBcUNlRyxXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuLy9cbmltcG9ydCB7IG9uUmVsb2FkQ2xpZW50RGF0YSB9IGZyb20gJy4uJ1xuaW1wb3J0IHsgdXNlU3RhdGljSW5mbyB9IGZyb20gJy4vdXNlU3RhdGljSW5mbydcblxuLy8gVGhpcyB3aWxsIGxpa2VseSBiZWNvbWUgYSByZWFjdCBjYWNoZSByZXNvdXJjZSBzb29uXG5sZXQgc2l0ZURhdGFQcm9taXNlXG5sZXQgc2l0ZURhdGFSZWFkeVxubGV0IHNpdGVEYXRhXG5cbmNvbnN0IHVzZVNpdGVEYXRhID0gKCkgPT4ge1xuICAvLyBXaGVuIGNsaWVudERhdGEgcmVsb2FkcywgcmVyZW5kZXIgY29tcG9uZW50c1xuICAvLyB0aGF0IHVzZSB0aGlzIGhvb2tcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIGNvbnN0IFtfLCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICB1c2VFZmZlY3QoKCkgPT5cbiAgICBvblJlbG9hZENsaWVudERhdGEoKCkgPT4ge1xuICAgICAgc2l0ZURhdGFQcm9taXNlID0gbnVsbFxuICAgICAgc2l0ZURhdGFSZWFkeSA9IGZhbHNlXG4gICAgICBzZXRDb3VudChvbGQgPT4gb2xkICsgMSlcbiAgICB9KVxuICApXG5cbiAgY29uc3Qgc3RhdGljSW5mbyA9IHVzZVN0YXRpY0luZm8oKVxuXG4gIGlmIChzdGF0aWNJbmZvKSB7XG4gICAgcmV0dXJuIHN0YXRpY0luZm8uc2l0ZURhdGFcbiAgfVxuXG4gIGlmIChzaXRlRGF0YVJlYWR5KSB7XG4gICAgcmV0dXJuIHNpdGVEYXRhXG4gIH1cblxuICBpZiAoIXNpdGVEYXRhUHJvbWlzZSkge1xuICAgIC8vIFJlcXVlc3QgdGhlIHNpdGUgZGF0YVxuICAgIHNpdGVEYXRhUHJvbWlzZSA9IGF4aW9zXG4gICAgICAuZ2V0KCcvX19yZWFjdC1zdGF0aWNfXy9zaXRlRGF0YScpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgc2l0ZURhdGFSZWFkeSA9IHRydWVcbiAgICAgICAgc2l0ZURhdGEgPSBkYXRhXG4gICAgICB9KVxuICB9XG5cbiAgLy8gVGhyb3cgdGhlIHByb21pc2VcbiAgdGhyb3cgc2l0ZURhdGFQcm9taXNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNpdGVEYXRhXG4iXX0=