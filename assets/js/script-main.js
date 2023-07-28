// //var apiKey = '1aff574ed48741ba7206ee656efcd85a';

// var cityName = 'Phoenix';
// var lon = '33.4484';
// var lat = '-112.0740';

// // https://api.openweathermap.org/data/2.5/forecast?lat=-112.0740&lon=33.4484&appid=1aff574ed48741ba7206ee656efcd85a
// var fiveDayApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// //var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
// console.log(fiveDayApi);

// //var forecastApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&date={date}&current.temp={current.temp}&current.wind_speed={current.wind_speed}&current.humidity={current.humidity}&appid=${apiKey}`;
// var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=${apiKey}`;
// //the above api gives me everything except the 5 day forecast and date. use it to display the current weather


// //use currentWeatherApi/urlCurrent for base info and then parse the lat and lon from it to use in the apiUrl for the 5 day forecast


// //var city = 'Phoenix';
// // apiURL that displays the city name, the date, 
// //an icon representation of weather conditions, the temperature, 
// //the humidity, the wind speed, and the UV index


// fetch(fiveDayApi)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// fetch(currentWeatherApi)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

    

    //what I need from the api for current weather:
    //city name
    //date
    //temperature
    //wind speed
    //humidity

    //also, put measurements in imperial units using units=imperial in the api call

    //What I need for the each 5 day weather card:
    //date
    //weather icon
    //temperature
    //wind speed
    //humidity


    //Have a search bar that allows you to search for a city

    //add a button that allows you to save the city to local storage
    // and have a city history list below the search bar.

    //use localstorage for that city history list

//LINKS

//https://openweathermap.org/current#name  for current weather

//https://openweathermap.org/forecast5 for 5 day forecast
 



//var city = document.getElementById('search'); // replace with your city
var city = 'Phoenix';
var apiKey = '1aff574ed48741ba7206ee656efcd85a'; // replace with your API key
var imperial = 'imperial'; // sets units to imperial


var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${imperial}&appid=${apiKey}`; // Current weather
var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${imperial}&appid=${apiKey}`; // 5 day forecast

// Current weather
fetch(urlCurrent)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error:', response.statusText);
    }
  })
  .then((data) => console.log('Current weather:', data)) //the fulfilled promise called 'Current weather' is the data
  .catch((error) => console.error('Error:', error));

// 5 day forecast
fetch(urlForecast)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error:', response.statusText);
    }
  })
  .then((data) => console.log('5 day forecast:', data)) //the fulfilled promise called '5 day forecast' is the data
  .catch((error) => console.error('Error:', error));


  //for 5 day forecast, index 0 starts on the following day. for example: today is 7/24/2023 so index 0 is 7/25/2023

//i should probably get the data I need from the api first before making the event listener


//event listener for the search bar

document.getElementById('city-box').addEventListener('keydown', function(e) {
  var city = document.getElementById('city-box').value;
    if (e.key === 'Enter') {
      console.log('enter event:', city);
       if (city === '') {
        document.getElementById('error').style.display = 'block';
        setTimeout(function() {
          document.getElementById('error').style.display = 'none';
        }, 3000);
       } else {
        processCitySearch(city);
       }
    }
});

//fully functional event listener for the search bar pressing enter

//processCitySearch will be the function that takes the city name and uses it to make the api calls

document.getElementById('search-btn').addEventListener('click', function() {
    var city = document.getElementById('city-box').value;
    if (city) {
      console.log('button event:', city);
      processCitySearch(city);
    } else {
        document.getElementById('error').style.display = 'block';
        setTimeout(function() {
          document.getElementById('error').style.display = 'none';
        }, 3000);
    }
});

//fully functional event listener for the search button

//processCitySearch will be the function that takes the city name and uses it to make the api calls


function processCitySearch(city) {
    

    var apiKey = '1aff574ed48741ba7206ee656efcd85a'; // replace with your API key
    var imperial = 'imperial'; // sets units to imperial

    var urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${imperial}&appid=${apiKey}`; // Current weather
    var urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${imperial}&appid=${apiKey}`; // 5 day forecast
    //var urlForecastTest = `http://api.openweathermap.org/data/3.0/onecall?city=${city}&appid=${apiKey}&units=${imperial}`;
  console.log('check to see if city name is in url', urlCurrent); // city name is properly displayed in the url
  console.log('check to see if city name is in url', urlForecast); // city name is properly displayed in the url
  //console.log('weather one call test', urlForecastTest); // city name is properly displayed in the url
  // now make the function to fetch current weather and 5 day forecast using the urlCurrent & urlForecast variable


  fetch(urlCurrent)
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error:', response.statusText);
    }
  })

  .then(function(data) {
    console.log('Current weather from raw fetch:', data);
    var currentWeather = data;
    parseWeatherData(currentWeather);
  })

    .catch(function(error) {
      console.error(error);
    });
   
//i think this is how we did it in class above. below is the other way of doing it
//though i still don't know what that => arrow function is doing

fetch(urlForecast)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error:', response.statusText);
      }
    })
    .then(function(data) {
      var currentForecast = data;
      parseForecastData(currentForecast);
      console.log('currrent Forecast from raw fetch:', currentForecast); // log currentForecast instead of parseForecastData 
    })
    .catch(error => console.error(error));
  };


  // fetch(urlForecastTest)
  // .then(function(response) {
  //   if (response.ok) {
  //     return response.json();
  //   } else {
  //     throw new Error('Error:', response.statusText);
  //   }
  // })

  // .then(function(data) {
  //   console.log('api test from raw fetch:', data);
  //   var weatherTest = data;
  //   parseWeatherTestData(weatherTest);
  // })

  // .catch(function(error) {
  //   console.error(error);
  // });


  
// fetch(urlForecast)
// .then(function(response) {
//   if (response.ok) {
//     return response.json();
//   } else {
//     throw new Error('Error:', response.statusText);
//   }
// })

// .then(function(data) { 
//   connsole.log('5 Day Forecast:', data);
//   var forecastData = data;
//   parseForecastData(forecastData);
// })

// .catch(function(error) {
//   console.log(error);
// });


// function parseCurrentweatherIcon(currentWeather) {
//   var currentIcon = currentWeather.weather[0].icon; //for icon id
//   console.log('current icon:', currentIcon);
//   var iconUrl = `http://openweathermap.org/img/w/${currentIcon}.png`;
//   var icon = document.querySelector('current-weather-icon')
//   icon.setAttribute('src', iconUrl);
//   icon.setAttribute('alt', 'weather icon');
//   console.log(icon);
  
  






//above taken from freecodecamp.org

function parseWeatherData(currentWeather) {
  console.log('parse current weather to get needed info:', currentWeather);
  var currentName = currentWeather.name;
  var currentTemp = currentWeather.main.temp;
  var currentWind = currentWeather.wind.speed;
  var currentHumidity = currentWeather.main.humidity;
  var currentIcon = currentWeather.weather[0].icon; //for icon id

  //could have made these as an object to store the data as key value pairs

  console.log('current city:', currentName);
  console.log('current temp:', currentTemp);
  console.log('current wind:', currentWind);
  console.log('current humidity:', currentHumidity);
  console.log('current icon:', currentIcon);


  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var today = month + '/' + day + '/' + year;
  console.log(today);

  //current date fx above using vanilla js

  document.querySelector('.current-city').textContent = currentName;
  document.querySelector('.current-city').style.display = 'block';

  document.querySelector('.current-date').textContent = today;
  document.querySelector('.current-date').style.display = 'block';

  document.getElementById('current-temp').textContent = currentTemp + (' °F');
  console.log(document.getElementById('current-temp'));

  document.getElementById('current-wind').textContent = currentWind + (' MPH');

  document.getElementById('current-humidity').textContent = currentHumidity + ('%');

  document.getElementById('current-icon').textContent = currentIcon;
  
  //add code to display the weather icon
  
  var iconUrl = `https://openweathermap.org/img/wn/${currentIcon}@4x.png`;
  var icon = document.querySelector('#current-icon');
  document.querySelector('#current-icon').style.display = 'block';
  icon.setAttribute('src', iconUrl);
  
  
  //parse the data from the api to display on the page
  //city name
  //date
  //temperature
  //wind speed
  //humidity


  //looking at object data from the api, i need to get the following:
  //name: "Phoenix"
  //theres no date key in the object data so i'll just not include it
  //main: {temp: 110}
  //wind: {speed: 1.01}
  //main: {humidity: 10}
  //weather:{id: 802} the id corresponds to the weather icon
  
  
  
};

function parseForecastData(currentForecast) {
  console.log('parse forecast data to get needed info:', currentForecast);
  
  // Create an object to store the weather data for each day
  const dailyWeather = {};
  
  // Loop through each object in the list array
  currentForecast.list.forEach((weatherData) => {
    
    // Get the date of the weather data
    const date = weatherData.dt_txt.split(' ')[0];
    
    // If the date is not already in the dailyWeather object, add it
    if (!dailyWeather[date]) {
      dailyWeather[date] = {
        temperature: [],
        windSpeed: [],
        humidity: []
      };
    }
    
    // Add the temperature, wind speed, and humidity to the dailyWeather object
    dailyWeather[date].temperature.push(weatherData.main.temp);
    dailyWeather[date].windSpeed.push(weatherData.wind.speed);
    dailyWeather[date].humidity.push(weatherData.main.humidity);
  });
  
  // Loop through each day in the dailyWeather object
  for (const date in dailyWeather) {
    // Find the maximum wind speed and humidity for the day
    const maxWindSpeed = Math.max(...dailyWeather[date].windSpeed);
    const maxHumidity = Math.max(...dailyWeather[date].humidity);
    
    // Update the dailyWeather object with the maximum wind speed and humidity
    dailyWeather[date].windSpeed = maxWindSpeed;
    dailyWeather[date].humidity = maxHumidity;
  }
  
  console.log('daily weather:', dailyWeather);

  
  // Select the HTML elements by their IDs

  //Day 1 query selectors
  var cd1 = document.querySelector('.card-title-1'); // cd1 = current date 1
  var ct1 = document.querySelector('#ct1'); // ct1 = current temp 1
  var cw1 = document.querySelector('#cw1'); // cw1 = current wind 1
  var ch1 = document.querySelector('#ch1'); // ch1 = current humidity 1

  
  // Set the text content of the HTML elements

  // Day 1 text content
  cd1.textContent = Object.keys(dailyWeather)[0]; // Set the date
  ct1.textContent = "Temp: " + dailyWeather[Object.keys(dailyWeather)[0]].temperature[0]; // Set the temperature
  cw1.textContent = "Wind: " + dailyWeather[Object.keys(dailyWeather)[0]].windSpeed + " mph"; // Set the wind speed
  ch1.textContent = "Humidity: " + dailyWeather[Object.keys(dailyWeather)[0]].humidity + "%"; // Set the humidity


 // Day 2 query selectors

  var cd2 = document.querySelector('.card-title-2'); // cd2 = current date 2
  var ct2 = document.querySelector('#ct2'); // ct2 = current temp 2
  var cw2 = document.querySelector('#cw2'); // cw2 = current wind 2
  var ch2 = document.querySelector('#ch2'); // ch2 = current humidity 2

  
  // Set the text content of the HTML elements

  // Day 2 text content
  cd2.textContent = Object.keys(dailyWeather)[1]; // Set the date
  ct2.textContent = "Temp: " + dailyWeather[Object.keys(dailyWeather)[1]].temperature[0]; // Set the temperature
  cw2.textContent = "Wind: " + dailyWeather[Object.keys(dailyWeather)[1]].windSpeed + " mph"; // Set the wind speed
  ch2.textContent = "Humidity: " + dailyWeather[Object.keys(dailyWeather)[1]].humidity + "%"; // Set the humidity


  // Day 3 query selectors

  var cd3 = document.querySelector('.card-title-3'); // cd3 = current date 3
  var ct3 = document.querySelector('#ct3'); // ct3 = current temp 3
  var cw3 = document.querySelector('#cw3'); // cw3 = current wind 3
  var ch3 = document.querySelector('#ch3'); // ch3 = current humidity 3

  //Day 3 text content

  cd3.textContent = Object.keys(dailyWeather)[2]; // Set the date
  ct3.textContent = "Temp: " + dailyWeather[Object.keys(dailyWeather)[2]].temperature[0]; // Set the temperature
  cw3.textContent = "Wind: " + dailyWeather[Object.keys(dailyWeather)[2]].windSpeed + " mph"; // Set the wind speed
  ch3.textContent = "Humidity: " + dailyWeather[Object.keys(dailyWeather)[2]].humidity + "%"; // Set the humidity


  // Day 4 query selectors

  var cd4 = document.querySelector('.card-title-4'); // cd4 = current date 4
  var ct4 = document.querySelector('#ct4'); // ct4 = current temp 4
  var cw4 = document.querySelector('#cw4'); // cw4 = current wind 4
  var ch4 = document.querySelector('#ch4'); // ch4 = current humidity 4

  //Day 4 text content

  cd4.textContent = Object.keys(dailyWeather)[3]; // Set the date
  ct4.textContent = "Temp: " + dailyWeather[Object.keys(dailyWeather)[3]].temperature[0]; // Set the temperature
  cw4.textContent = "Wind: " + dailyWeather[Object.keys(dailyWeather)[3]].windSpeed + " mph"; // Set the wind speed
  ch4.textContent = "Humidity: " + dailyWeather[Object.keys(dailyWeather)[3]].humidity + "%"; // Set the humidity

  // Day 5 query selectors

  var cd5 = document.querySelector('.card-title-5'); // cd5 = current date 5
  var ct5 = document.querySelector('#ct5'); // ct5 = current temp 5
  var cw5 = document.querySelector('#cw5'); // cw5 = current wind 5
  var ch5 = document.querySelector('#ch5'); // ch5 = current humidity 5

  //Day 5 text content

  cd5.textContent = Object.keys(dailyWeather)[4]; // Set the date
  ct5.textContent = "Temp: " + dailyWeather[Object.keys(dailyWeather)[4]].temperature[0]; // Set the temperature
  cw5.textContent = "Wind: " + dailyWeather[Object.keys(dailyWeather)[4]].windSpeed + " mph"; // Set the wind speed
  ch5.textContent = "Humidity: " + dailyWeather[Object.keys(dailyWeather)[4]].humidity + "%"; // Set the humidity


};

//reverse engineer code example above to understand how it grabs the data from the
//5 day forecast api. it seems to create an empty object called dailyWeather and then
//loops through the data to get the dates and then the temperature, wind speed, and humidity.
//it adds the temperature, wind speed, and humidity to the dailyWeather object
//but then also uses some math to find the max wind speed and humidity for the day.
//the temperature is already the max temperature for the day so it doesn't need to be found.
