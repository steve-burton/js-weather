var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData, fahrenheitData, celsiusData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%.");
  $('.showFahrenheit').text("The temperature is " + fahrenheitData + " degrees Fahrenheit, and "+ celsiusData + " degrees Celsius.");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
