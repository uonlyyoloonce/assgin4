(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('index', {
    url: '/'
  })
  .state('categories', {
    url: '/categories',
     templateUrl:'src/menuApp/templates/categories.template.html',
    controller: 'CategoriesController as cate',
    resolve: {
      items: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getCate().then(function(res){
        
              return res.data;
        });
      }]
    }
  })
  .state('items', {
     url: '/items/{cateId}',
    templateUrl: 'src/menuApp/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      items: ['MenuAppService', '$stateParams',function (MenuAppService,$stateParams) {
         
        return MenuAppService.getCateItems($stateParams.cateId).then(function(res){
              return res.data;
        });
      }]
    }
    
  });

}

})();
