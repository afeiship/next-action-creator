(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  var NxActionCreator = nx.declare('nx.ActionCreator', {
    statics: {
      bind: function(inActionCreator, inDispatch) {
        return function() {
          return inDispatch(inActionCreator.apply(null, arguments));
        };
      },
      binds: function(inActionCreators, inDispatch) {
        var result = {};
        nx.forIn(
          inActionCreators,
          function(key, value) {
            result[key] = this.bind(value, inDispatch);
          },
          this
        );
        return result;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxActionCreator;
  }
})();
