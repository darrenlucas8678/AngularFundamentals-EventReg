(function () {
    'use strict';

    var controllerId = 'EventEditController';

    // TODO: replace app with your module name
    angular.module('eventsApp').controller(controllerId,
        ['$scope', EventEditController]);

    function EventEditController($scope) {
        $scope.title = 'EventEditController';
        $scope.activate = activate;

        $scope.saveEvent = function (event, eventEditForm) {
            if (eventEditForm.$valid)
            {
                alert(event.name + ' has been created');
            }
        };
        $scope.cancelEdit = function() {
            window.location = './EventDetails.html'
        };

        function activate() { }
    }
})();
