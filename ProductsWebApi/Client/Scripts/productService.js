(function (app) {
    var productService = function ($http, ProductsApiUrl) {
        var getAll = function () {
            return $http.get(ProductsApiUrl);
        };
        var getById = function (product_id) {
            return $http.get(ProductsApiUrl + product_id);
        };
        var update = function (product) {
            return $http.put(ProductsApiUrl + product.product_id, product);
        };
        var create = function (product) {
            return $http.post(ProductsApiUrl, product);
        };
        var destroy = function (product) {
            return $http.delete(ProductsApiUrl + product.product_id);
        };
        return {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            delete: destroy
        };
    };
    app.factory("productService", productService);
}(angular.module("Products")))