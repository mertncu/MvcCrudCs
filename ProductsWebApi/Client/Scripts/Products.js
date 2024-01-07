(function () {
    var app = angular.module("Products", ["ngRoute"]);
    var config = function ($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "/Client/Views/list.html"
            })
            .when("/details/:id", {
                templateUrl: "/Client/Views/details.html"
            })
            .otherwise(
                { redirectTo: "/list" });
    };
    app.config(config);
    app.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);
    app.constant("ProductsApiUrl", "/api/Products/");
}());