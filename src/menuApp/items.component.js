(function () {
'use strict';

angular.module('MenuApp')
.component('menuapp', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  controller:ItemsController,
  bindings: {
    items: '<'
  }
});

})();
