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


var urlCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${imperial}&appid=${apiKey}`; // Current weather
var urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${imperial}&appid=${apiKey}`; // 5 day forecast

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

    var urlCurrent = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${imperial}&appid=${apiKey}`; // Current weather
    var urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${imperial}&appid=${apiKey}`; // 5 day forecast

  console.log('check to see if city name is in url', urlCurrent); // city name is properly displayed in the url
  console.log('check to see if city name is in url', urlForecast); // city name is properly displayed in the url

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
    console.log('Current weather:', data);
    var currentWeather = data;
    parseWeatherData(currentWeather);
  })

    .catch(function(error) {
      console.error(error);
    });
   
//i think this is how we did it in class above. below is the other way of doing it
//though i still don't know what that => arrow function is doing

  fetch(urlForecast)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error:', response.statusText);
    }
  })
  .then((data) => console.log('5 Day Forecast:', data)) //the fulfilled promise called '5 day forecast' is the data
  .then((data) => parseForecastData(data)) //the fulfilled promise called '5 day forecast' is the data
  .catch((error) => console.error(error));
  //so i got fetching from user input to work. now i need to get the data from the api to display on the page
    
};



function parseWeatherData(currentWeather) {
  console.log('parse current weather to get needed info:', currentWeather);
  var currentName = currentWeather.name;
  var currentTemp = currentWeather.main.temp;
  var currentWind = currentWeather.wind.speed;
  var currentHumidity = currentWeather.main.humidity;
  var currentIcon = currentWeather.weather[0].icon; //for icon id


  console.log('current city:', currentName);
  console.log('current temp:', currentTemp);
  console.log('current wind:', currentWind);
  console.log('current humidity:', currentHumidity);
  console.log('current icon:', currentIcon);

  document.querySelector('.current-city').textContent = currentName;
  document.querySelector('.current-city').style.display = 'block';

  document.querySelector('.current-date').style.display = 'block';

  document.getElementById('current-temp').textContent = currentTemp + (' °F');
  console.log(document.getElementById('current-temp'));

  document.getElementById('current-wind').textContent = currentWind + (' MPH');

  document.getElementById('current-humidity').textContent = currentHumidity + ('%');

  document.getElementById('current-icon').textContent = currentIcon;
  
  //add &deg;F to the temperature value dynamically
  
  
  
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
  
  
  
}

function parseForecastData(data) {


  
}
//get index 0-4 of the 5 day forecast array
//its from the list object

//the five day forecast api does have data for the city name, date, temperature, wind speed, and humidity
//Had to ctrl + f on the docs to find it. It's under the "city" object.
//No need to use lat or lon! It's strange that the example api url's dont show that you can use the ?q=city parameter


//specific api data to parse:


