"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
exports["default"] = _default;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9icm93c2VyL3V0aWxzL29uTG9jYXRpb25DaGFuZ2UuanMiXSwibmFtZXMiOlsibG9jYXRpb25TdWJzY3JpYmVycyIsInRyaWdnZXJMb2NhdGlvbkNoYW5nZSIsImxvY2F0aW9uIiwiZm9yRWFjaCIsInMiLCJvbkxvY2F0aW9uQ2hhbmdlIiwiY2IiLCJwdXNoIiwiZmlsdGVyIiwiZCIsImluaXQiLCJkb2N1bWVudCIsIm9sZFBvcHN0YXRlIiwid2luZG93Iiwib25wb3BzdGF0ZSIsIm1ldGhvZE5hbWUiLCJvbGQiLCJoaXN0b3J5Iiwic2V0VGltZW91dCIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSUEsbUJBQW1CLEdBQUcsRUFBMUI7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxRQUFRO0FBQUEsU0FDcENGLG1CQUFtQixDQUFDRyxPQUFwQixDQUE0QixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDRixRQUFELENBQUw7QUFBQSxHQUE3QixDQURvQztBQUFBLENBQXRDOztBQUVBLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsRUFBRSxFQUFJO0FBQzdCTixFQUFBQSxtQkFBbUIsQ0FBQ08sSUFBcEIsQ0FBeUJELEVBQXpCO0FBQ0EsU0FBTyxZQUFNO0FBQ1hOLElBQUFBLG1CQUFtQixHQUFHQSxtQkFBbUIsQ0FBQ1EsTUFBcEIsQ0FBMkIsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsS0FBS0gsRUFBVjtBQUFBLEtBQTVCLENBQXRCO0FBQ0QsR0FGRDtBQUdELENBTEQ7O0FBT0FJLElBQUk7ZUFFV0wsZ0I7OztBQUVmLFNBQVNLLElBQVQsR0FBZ0I7QUFDZCxNQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDbkMsUUFBTUMsV0FBVyxHQUFHQyxNQUFNLENBQUNDLFVBQTNCOztBQUNBRCxJQUFBQSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsWUFBYTtBQUMvQixVQUFJRixXQUFKLEVBQWlCO0FBQ2ZBLFFBQUFBLFdBQVcsTUFBWDtBQUNEOztBQUNEWCxNQUFBQSxxQkFBcUIsQ0FBQ1ksTUFBTSxDQUFDWCxRQUFSLENBQXJCO0FBQ0QsS0FMRDs7QUFNQyxLQUFDLFdBQUQsRUFBYyxjQUFkLEVBQThCQyxPQUE5QixDQUFzQyxVQUFBWSxVQUFVLEVBQUk7QUFDbkQsVUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUYsVUFBZixDQUFaOztBQUNBRixNQUFBQSxNQUFNLENBQUNJLE9BQVAsQ0FBZUYsVUFBZixJQUE2QixZQUFhO0FBQ3hDRyxRQUFBQSxVQUFVLENBQUM7QUFBQSxpQkFBTWpCLHFCQUFxQixDQUFDWSxNQUFNLENBQUNYLFFBQVIsQ0FBM0I7QUFBQSxTQUFELEVBQStDLENBQS9DLENBQVY7O0FBRHdDLDBDQUFUaUIsSUFBUztBQUFUQSxVQUFBQSxJQUFTO0FBQUE7O0FBRXhDLGVBQU9ILEdBQUcsQ0FBQ0ksS0FBSixDQUFVUCxNQUFNLENBQUNJLE9BQWpCLEVBQTBCRSxJQUExQixDQUFQO0FBQ0QsT0FIRDtBQUlELEtBTkE7QUFPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGxvY2F0aW9uU3Vic2NyaWJlcnMgPSBbXVxuY29uc3QgdHJpZ2dlckxvY2F0aW9uQ2hhbmdlID0gbG9jYXRpb24gPT5cbiAgbG9jYXRpb25TdWJzY3JpYmVycy5mb3JFYWNoKHMgPT4gcyhsb2NhdGlvbikpXG5jb25zdCBvbkxvY2F0aW9uQ2hhbmdlID0gY2IgPT4ge1xuICBsb2NhdGlvblN1YnNjcmliZXJzLnB1c2goY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbG9jYXRpb25TdWJzY3JpYmVycyA9IGxvY2F0aW9uU3Vic2NyaWJlcnMuZmlsdGVyKGQgPT4gZCAhPT0gY2IpXG4gIH1cbn1cblxuaW5pdCgpXG5cbmV4cG9ydCBkZWZhdWx0IG9uTG9jYXRpb25DaGFuZ2VcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBvbGRQb3BzdGF0ZSA9IHdpbmRvdy5vbnBvcHN0YXRlXG4gICAgd2luZG93Lm9ucG9wc3RhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKG9sZFBvcHN0YXRlKSB7XG4gICAgICAgIG9sZFBvcHN0YXRlKC4uLmFyZ3MpXG4gICAgICB9XG4gICAgICB0cmlnZ2VyTG9jYXRpb25DaGFuZ2Uod2luZG93LmxvY2F0aW9uKVxuICAgIH1cbiAgICA7WydwdXNoU3RhdGUnLCAncmVwbGFjZVN0YXRlJ10uZm9yRWFjaChtZXRob2ROYW1lID0+IHtcbiAgICAgIGNvbnN0IG9sZCA9IHdpbmRvdy5oaXN0b3J5W21ldGhvZE5hbWVdXG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdHJpZ2dlckxvY2F0aW9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbiksIDApXG4gICAgICAgIHJldHVybiBvbGQuYXBwbHkod2luZG93Lmhpc3RvcnksIGFyZ3MpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19