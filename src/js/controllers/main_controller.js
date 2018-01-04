angular.module('WeatherApp.controllers.Main', [
  'WeatherApp.services.Geolocation',
  'WeatherApp.services.Forecast'
  ])

.controller('MainController', function($scope, getCurrentPosition, getWeather){
  getCurrentPosition(function(position){
    getWeather(
      position.coords.latitude, 
      position.coords.longitude, 
      function(weather){
        $scope.location = weather.name;
        $scope.description = weather.weather[0].description;
        $scope.temp = weather.main.temp;
      });
  });
});