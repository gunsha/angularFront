angular.module('app').controller('indexCtrl', ['$rootScope', 'indexService', '$state', '$interval', indexCtrl]);

function indexCtrl(r, indexService, state, t) {
    var vm = this;
    vm.data = r.getStorage('data') ? r.getStorage('data') : [];

}