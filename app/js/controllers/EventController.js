(function () {
    'use strict';

    var controllerId = 'EventController';

    // TODO: replace app with your module name
    angular.module('eventsApp').controller(controllerId,
        ['$scope', 'eventData', EventController])

    function EventController($scope, eventData) {
        $scope.title = 'EventController';
        $scope.activate = activate;
        $scope.event = eventData.getEventData();

        $scope.upVoteSession = function (session) {
            if (++session.upVoteCount > 0) {
                session.downEnabled = 'icon-white';
            }
        };

        $scope.downVoteSession = function (session) {
            if (--session.upVoteCount <= 0) {
                session.upVoteCount = 0;
                session.downEnabled = '';
            }
        };
        function activate() { }
    }
})();
