(function(){
    
    angular
        .module("MenuApp")
        .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function RoutesConfig($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state("home",{
            url: "/",
            templateUrl : "src/template/home.template.html"
        })
        .state("categories",{
            url:"/categories",
            templateUrl: "src/template/categories.template.html",
            controller: "CategoriesController as categories",
            resolve: {
                allcategories: ['dataservice',function(dataservice){
                    return dataservice.getAllCategories();
                }]
            },
        })
        .state("items",{
            url: "/items/:id",
            params:{
                id:null,
                name:null
            },
            templateUrl: "src/template/items.template.html",
            controller:"ItemsController as items",
            resolve:{
                allitems: ['dataservice','$stateParams',function(dataservice,$stateParams){
                    return dataservice.getItemsForCategory($stateParams.id);
                }],
                currentCategory: ['$stateParams',function($stateParams){
                    return $stateParams.name;
                }]
            }
            
        })
    };
    
})();