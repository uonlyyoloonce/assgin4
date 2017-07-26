(function () {
'use strict';

angular.module('MenuApp')
.component('menuapp', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  controller:CategoriesController,
  bindings: {
    items: '<'
  }
});

})();
