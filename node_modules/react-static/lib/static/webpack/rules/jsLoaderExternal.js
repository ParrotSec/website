"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _babelPreset = _interopRequireDefault(require("../../../../babel-preset"));

function _default(_ref) {
  var config = _ref.config;
  return {
    test: /\.(js|jsx|mjs)$/,
    exclude: [/@babel(?:\/|\\{1,2})runtime/].concat((0, _toConsumableArray2["default"])(config.babelExcludes || [])),
    use: [{
      loader: 'babel-loader',
      options: {
        babelrc: false,
        configFile: false,
        compact: false,
        presets: [[_babelPreset["default"], {
          external: true
        }]],
        cacheDirectory: true,
        sourceMaps: false
      }
    }, 'react-hot-loader/webpack']
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdGF0aWMvd2VicGFjay9ydWxlcy9qc0xvYWRlckV4dGVybmFsLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsInRlc3QiLCJleGNsdWRlIiwiYmFiZWxFeGNsdWRlcyIsInVzZSIsImxvYWRlciIsIm9wdGlvbnMiLCJiYWJlbHJjIiwiY29uZmlnRmlsZSIsImNvbXBhY3QiLCJwcmVzZXRzIiwiYmFiZWxQcmVzZXQiLCJleHRlcm5hbCIsImNhY2hlRGlyZWN0b3J5Iiwic291cmNlTWFwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSx3QkFBcUI7QUFBQSxNQUFWQSxNQUFVLFFBQVZBLE1BQVU7QUFDbEMsU0FBTztBQUNMQyxJQUFBQSxJQUFJLEVBQUUsaUJBREQ7QUFFTEMsSUFBQUEsT0FBTyxHQUFHLDZCQUFILDZDQUFzQ0YsTUFBTSxDQUFDRyxhQUFQLElBQXdCLEVBQTlELEVBRkY7QUFHTEMsSUFBQUEsR0FBRyxFQUFFLENBQ0g7QUFDRUMsTUFBQUEsTUFBTSxFQUFFLGNBRFY7QUFFRUMsTUFBQUEsT0FBTyxFQUFFO0FBQ1BDLFFBQUFBLE9BQU8sRUFBRSxLQURGO0FBRVBDLFFBQUFBLFVBQVUsRUFBRSxLQUZMO0FBR1BDLFFBQUFBLE9BQU8sRUFBRSxLQUhGO0FBSVBDLFFBQUFBLE9BQU8sRUFBRSxDQUFDLENBQUNDLHVCQUFELEVBQWM7QUFBRUMsVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FBZCxDQUFELENBSkY7QUFLUEMsUUFBQUEsY0FBYyxFQUFFLElBTFQ7QUFNUEMsUUFBQUEsVUFBVSxFQUFFO0FBTkw7QUFGWCxLQURHLEVBWUgsMEJBWkc7QUFIQSxHQUFQO0FBa0JEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJhYmVsUHJlc2V0IGZyb20gJy4uLy4uLy4uLy4uL2JhYmVsLXByZXNldCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeyBjb25maWcgfSkge1xuICByZXR1cm4ge1xuICAgIHRlc3Q6IC9cXC4oanN8anN4fG1qcykkLyxcbiAgICBleGNsdWRlOiBbL0BiYWJlbCg/OlxcL3xcXFxcezEsMn0pcnVudGltZS8sIC4uLihjb25maWcuYmFiZWxFeGNsdWRlcyB8fCBbXSldLFxuICAgIHVzZTogW1xuICAgICAge1xuICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYmFiZWxyYzogZmFsc2UsXG4gICAgICAgICAgY29uZmlnRmlsZTogZmFsc2UsXG4gICAgICAgICAgY29tcGFjdDogZmFsc2UsXG4gICAgICAgICAgcHJlc2V0czogW1tiYWJlbFByZXNldCwgeyBleHRlcm5hbDogdHJ1ZSB9XV0sXG4gICAgICAgICAgY2FjaGVEaXJlY3Rvcnk6IHRydWUsXG4gICAgICAgICAgc291cmNlTWFwczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgJ3JlYWN0LWhvdC1sb2FkZXIvd2VicGFjaycsXG4gICAgXSxcbiAgfVxufVxuIl19