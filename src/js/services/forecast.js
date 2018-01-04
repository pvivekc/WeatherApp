angular.module('WeatherApp.services.Forecast', [])

.factory('getWeather', function($http){
  return function(lat, lng, done) {
    $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=627b6aa7eecacc7a480dd57b7f76fc4b&units=metric')
        .then(function(response) {
          done(response.data);
        })
        ,(function(response) {
          throw new Error('Unable to get weather');
        });
  };
});