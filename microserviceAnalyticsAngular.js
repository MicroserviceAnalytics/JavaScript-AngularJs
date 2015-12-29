// JavaScript source code
// AngularJS support
(function () {
    var global = this;
    if (global.angular) {
        var errorHandlingModule = global.angular.module('accidentalfish.errorhandling', []);
        errorHandlingModule.provider("$exceptionHandler", {
            $get: function (accidentalFishExceptionLoggingService) {
                return accidentalFishExceptionLoggingService;
            }
        });
        errorHandlingModule.factory("accidentalFishExceptionLoggingService", ['$log', '$window', function ($log) {
            function error(exception, cause) {
                $log.error.apply($log, arguments);
                analytics.handleJavaScriptError(exception, cause);
            }

            return error;
        }]);
    }
}).call();