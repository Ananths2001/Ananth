http://api.openweathermap.org/data/2.5/forecast/daily?q=KansasCity&mode=json&units=imperial&cnt=7&appid=bd82977b86bf27fb59a04b61b657fb6f

 angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('OpenWeather', function($scope, $http, $log) {
    $scope.city = "Kansas City";
    $scope.units = 'imperial';

    $scope.change = function() {
        var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=KansasCity&mode=json&units=imperial&cnt=7&appid=bd82977b86bf27fb59a04b61b657fb6f';
        $http.jsonp(url)
        .success(function(data, status, headers, config) {
            $scope.main = data.main;
            $scope.wind = data.wind;
            $scope.description = data.weather[0].description;
        })
        .error(function(data, status, headers, config) {
            $log.error('Could not retrieve data');
        });
    };

    $scope.change();
});