const apiKey = '1aff574ed48741ba7206ee656efcd85a';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&units=metric&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
