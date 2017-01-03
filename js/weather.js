var apiKey = require('./../.env').apiKey;

Weather = function() {
};

Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var fahrenheit = ((response.main.temp) * (1.8) - 459.67).toFixed(2);
    var celsius = ((response.main.temp) - 273.15).toFixed(2);
    displayFunction(city, response.main.humidity, fahrenheit, celsius);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
