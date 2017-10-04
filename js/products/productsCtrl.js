angular.module('myApp').controller('productsCtrl', function($scope, $stateParams, productsSrvc){

    if($stateParams.id === "socks") {
        productsSrvc.getSockData().then((socks) => {
            console.log(socks)
            $scope.products = socks
        })
    }else if($stateParams.id === "shoes") {
        productsSrvc.getShoeData().then((shoes) => {
            $scope.products = shoes
        })
    }
})