(function (app) {
    var EditController = function ($scope, productService) {
        $scope.isEditable = function () {
            return $scope.edit && $scope.edit.product;
        };
        $scope.cancel = function () {
            $scope.edit.product = null;
        };
        $scope.save = function () {
            if ($scope.edit.product.product_id) {
                updateProduct();
            } else {
                createProduct();
            }
        };
        var updateProduct = function () {
            productService.update($scope.edit.product)
                .then(function () {
                    angular.extend($scope.data, $scope.edit.product);
                    $scope.edit.product = null;
                });
        };
        var createProduct = function () {
            productService.create($scope.edit.product)
                .then(function (product) {
                    $scope.data.push(product);
                    $scope.edit.product = null;
                });
        };
    };
    app.controller("EditController", EditController);
}(angular.module("Products")));