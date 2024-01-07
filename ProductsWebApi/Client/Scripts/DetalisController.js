(function (app) {
    var DetailsController = function ($scope, $routeParams, productService) {
        var id = $routeParams.id;

        productService
            .getById(id)
            .then(function (response) {
                $scope.data = response.data;
                $scope.status = response.status;
            }, function (response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });

        $scope.edit = function () {
            $scope.edit.product = angular.copy($scope.data);

        };
    };
    app.controller("DetailsController", DetailsController);
}(angular.module("Products")));