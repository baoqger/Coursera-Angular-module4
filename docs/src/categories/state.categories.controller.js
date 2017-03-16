(function(){
    
    angular
        .module("MenuApp")
        .controller("CategoriesController",CategoriesController);
    
    
    CategoriesController.$inject = ['allcategories'];
    function CategoriesController(allcategories){
        var categoryctrl = this;
        categoryctrl.categoryList = allcategories;
    }
    
    
})();