function initialShowWeather(city){
    document.querySelector("h1").innerHTML=`${city}`;
    let apiKey=`2705c3833e0eb8cc3d104831dddd5c14`;
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);

    apiUrl=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast);
}

function showWeather(response){
 console.log(response.data);
 document.querySelector("h1").innerHTML=`${response.data.name}`;
}

initialShowWeather("porto");

function displayForecast(response){
    console.log(response.data);

}
