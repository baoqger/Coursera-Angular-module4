(function(){
    
    angular
        .module("MenuApp")
        .controller("ItemsController",ItemsController);
    
    ItemsController.$inject = ['allitems','currentCategory','$stateParams'];
    
    function ItemsController(allitems,currentCategory,$stateParams){
        var itemsctrl = this;
        itemsctrl.itemList = allitems;
        itemsctrl.currentcate = currentCategory;
    }
    
    
})();