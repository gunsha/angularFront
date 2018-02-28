angular.module('app').factory('indexService', ['$rootScope', '$http', indexService]);

function indexService(r, h) {
    var service = {
        getEstado: getEstado
    };
    return service;

    function getEstado() {
        return h.get('').then(function(resp) {
            return resp.data;
        });
    }
}