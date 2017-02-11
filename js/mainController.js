angular.module('app').controller('mainCtrl', function($scope) {
    var pages = ['view', 'find', 'update', 'home', 'dropDown'];
    $scope.home = true;
    
    $scope.togglePage = function(displayView) {
        pages.forEach(function(page) {
            if(page === displayView) {
                $scope[page] = true;
            } else {
                $scope[page] = false;
            }
        });
    }
});