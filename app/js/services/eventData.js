(function () {
    'use strict';

    angular.module('eventsApp').factory('eventData', ['$resource', eventData]);

    function eventData($resource) {
        return {
            getEventData: function () {
                //        var deferred = $q.defer();

                //        $http({ method: 'GET', url: '/data/event/12.json' }).
                //        success(function (data, status, headers, config) {
                //            deferred.resolve(data);
                //        }).
                //        error(function (data, status, headers, config) {
                //            deferred.reject(status);
                //        });
                //        return deferred.promise;

                //    }
                return $resource('/data/event/:id', { id: '@id' }).get({ id: 1 });
            }
        }
    }
})();

//'use strict';

//eventsApp.factory('eventData', function (eventResource, authService) {
//    return {
//        getEvent: function(eventId, callback) {
//            return eventResource.get({id:eventId}, function(event) {
//                if (callback)
//                    callback(event);
//            });
//        },
//        getAllEvents: function(callback) {
//            return eventResource.queryAll(callback);
//        },
//        getNextSessionId:function (event) {
//            var max = 0;
//            for (var idx = 0; idx < event.sessions.length; idx++) {
//                if (event.sessions[idx].id > max) {
//                    max = event.sessions[idx].id;
//                }
//            }
//            return max+1;
//        },
//        save: function(event, callback) {
//            if (event.id) {
//                eventResource.save(event, function() { if (callback) callback(); });
//            } else {
//                eventResource.queryAll(function(events) {
//                    event.creator = authService.getCurrentUserName();
//                    event.id = getNextEventId(events);
//                    event.sessions = [];
//                    eventResource.save(event);
//                    if (callback)
//                        callback();
//                });
//            }
//        }
//    };

//    function getNextEventId(events) {
//        var max = 0;
//        for (var idx = 0; idx < events.length; idx++) {
//            if (events[idx].id > max) {
//                max = events[idx].id;
//            }
//        }
//        return max+1;
//    }
//});