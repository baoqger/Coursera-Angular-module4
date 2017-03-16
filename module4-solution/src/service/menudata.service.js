(function(){
    
    angular
        .module("data")
        .service("dataservice",dataservice);
    
    dataservice.$inject = ["$http"];
    
    function dataservice($http){
        var dataservice = this;
        // get all the categories list
        dataservice.getAllCategories = function(){
            return $http({
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function(response){
                var result = [];
                response.data.forEach(function(eachitem){
                    result.push({name:eachitem.name,short_name:eachitem.short_name})
                })
                return result;
            })
        };   
        
        // get all items for a certain item
        dataservice.getItemsForCategory = function(id){
            return $http({
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function(response){
                var result = [];
                response.data.menu_items.forEach(function(eachitem){
                    if(eachitem.short_name.search(id) == 0){
                        result.push(eachitem);
                    }
                });
                return result;
            })
        };
    }

})();