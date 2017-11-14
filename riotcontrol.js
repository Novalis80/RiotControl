/* RiotControl v0.0.3, @license MIT */
var RiotControl = {
  _stores: [],
  addStore: function(store) {
    this._stores.push(store);
  },
  reset: function() {
    this._stores = [];
  },
  getStore: function(name){
    var stores = [];
    this._stores.forEach(function (store) {
      if( store.constructor.name == name ) stores.push(store);
    });
    return stores.length == 1 ? stores[0]: stores;
  }
};

['on','one','off','trigger'].forEach(function(api){
  RiotControl[api] = function() {
    var args = [].slice.call(arguments);
    this._stores.forEach(function(el){
      el[api].apply(el, args);
    });
  };
});

if (typeof(module) !== 'undefined') module.exports = RiotControl;
