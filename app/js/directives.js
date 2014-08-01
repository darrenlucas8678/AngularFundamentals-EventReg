(function() {
    'use strict';

    angular.module('eventsApp').directive('votingWidget',votingWidget)
    
    function votingWidget() {
        return {
            restrict: 'E',
            templateUrl: './js/votingWidget.html'
        };
    };
})();
