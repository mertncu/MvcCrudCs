(function (app) {
    var ListController = function ($scope, productService) {


        productService
            .getAll().then(function (response) {
                $scope.data = response.data;
                $scope.status = response.status;
            }, function (response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });

        $scope.create = function () {
            $scope.edit = {
                product: {
                    ProductName: "",
                    ProductPrice: 0.0,
                    Stock: 0
                }
            };
        };

        $scope.delete = function (product) {
            productService.delete(product)
                .then(function () {
                    removeProductById(product.product_id);
                });
        };

        var removeProductById = function (product_id) {
            for (var i = 0; i < $scope.data.length; i++) {
                if ($scope.data[i].Id == id) {
                    $scope.data.splice(i, 1);
                    break;
                }
            }
        };

    };
    app.controller("ListController", ListController);
}(angular.module("Products")));