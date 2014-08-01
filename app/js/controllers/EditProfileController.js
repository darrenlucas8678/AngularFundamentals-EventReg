(function () {
    'use strict';

    var controllerId = 'EditProfileController';

    // TODO: replace app with your module name
    angular.module('eventsApp').controller(controllerId,
        ['$scope', 'gravatarUrlBuilder', EditProfileController]);

    function EditProfileController($scope,gravatarUrlBuilder) {
        $scope.title = 'EditProfile';
        $scope.activate = activate;

        $scope.user = {};
        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        };

        function activate() { }
    }
})();
