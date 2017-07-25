(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController',ItemsController);


ItemsController.$inject = ['MenuAppService','$stateParams','items'];
function ItemsController(MenuAppService,para,items) {
  var list = this;

  
    list.foods=items.menu_items;
 

}

})();
