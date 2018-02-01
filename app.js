let request = require('request');
const argv = require('yargs').argv;

let apiKey = 'bd5e378503939ddaee76f12ad7a97608';
let city = argv.c || 'Bitola';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let temp = `${weather.main.temp}`;
    let humidity = `${weather.main.humidity}`;
    let pressure = `${weather.main.pressure}`;
    
    let message = `It's ${weather.main.temp} degrees in ${weather.name}! The pressure is ${weather.main.pressure}mBar and the humidity is ${weather.main.humidity}% `;

    if (humidity<980){
      console.log("Low Air Pressure")
    }
    else if (humidity>1050)
    {
      consle.log("High Air Pressure")
    }

    console.log(temp);
    console.log(humidity);
    console.log(pressure);
    
    console.log(message);
    } 
});


