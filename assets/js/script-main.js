var apiKey = '1aff574ed48741ba7206ee656efcd85a';
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&units=metric&appid=${apiKey}`;


//var forecastApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&date={date}&current.temp={current.temp}&current.wind_speed={current.wind_speed}&current.humidity={current.humidity}&appid=${apiKey}`;
var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=${apiKey}`;
//the above api gives me everything except the 5 day forecast and date. use it to display the current weather

//var city = 'Phoenix';
// apiURL that displays the city name, the date, 
//an icon representation of weather conditions, the temperature, 
//the humidity, the wind speed, and the UV index


fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    fetch(currentWeatherApi)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

    //what I need from the api for current weather:
    //city name
    //date
    //temperature
    //wind speed
    //humidity


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

