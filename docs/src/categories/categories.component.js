(function(){
    
    angular
        .module("MenuApp")
        .component("categories",{
            templateUrl: "src/template/categories.component.template.html",
            bindings:{
                myCategories: "<"
            }
        })
})();