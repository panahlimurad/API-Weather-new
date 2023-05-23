// API Weather - https://api.openweathermap.org/data/2.5/weather?q=baku&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4
// KEY Weather - 54b1407dcc4d3ca0d88eefdeca4dd8a4
// ico -  https://openweathermap.org/img/wn/04n.png

// API Time - http://api.timezonedb.com/v2.1/get-time-zone?key=UGH5GTXTH0AH&format=json&by=zone&zone=America/New_York
// KEY Time - UGH5GTXTH0AH


const apiTime =
  "http://api.timezonedb.com/v2.1/get-time-zone?key=UGH5GTXTH0AH&format=json&by=zone&zone=America/New_York";


// DOM elements
const mainBootom = document.querySelector(".mainBootom");
const inputSearch = document.querySelector("#inputSearch");
const button = document.querySelector("#button");
const worldCity = document.querySelector("#worldCity");
const whetherSearchCityMain = document.querySelector(".whetherSearchCityMain");
const temperature = document.querySelector("#temperature");



async function getElement(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    showMainTemp(data);
  } catch (err) {
    console.log("err", err);
  }
}

function showMainTemp(data_main) {

  mainBootom.innerHTML = `
        <div class="temp"><span>${Math.round(data_main.main.temp)}°</span></div>
        <div class="cityTime">
            <div class="city">
                <h2>${data_main.name} - ${data_main.sys.country}</h2>
            </div>
            <div class="time">
                <p>${data_main.timezone}</p>
            </div>
        </div>
        <div class="iconWheather">
                <div class="icon"><i class="fa-sharp fa-regular fa-sun "></i></div>
            <div class="wheatherAbout">${data_main.weather[0].main}</div>
        </div>`;
    
    whetherSearchCityMain.innerHTML = `   <div class="aboutWeather">
                    <p>Temp</p>
                    <span>${Math.round(data_main.main.temp)} °C</span>
                </div>
                <div class="aboutWeather">
                    <p>Wind Speed</p>
                    <span>${data_main.wind.speed} (m/s)</span>
                </div>
                <div class="aboutWeather">
                    <p>Humidity</p>
                    <span>${data_main.main.humidity} %</span>
                </div>
                <div class="aboutWeather">
                    <p>Feels like</p>
                    <span>${data_main.main.feels_like} °C</span>
                </div>
                <div class="aboutWeather">
                    <p>Sunrise</p>
                    <span>${data_main.sys.sunrise}</span>
                </div>
                <div class="aboutWeather">
                    <p>Sunset</p>
                    <span>${data_main.sys.sunset}</span>
                </div>`;
}

button.addEventListener("click", function () {
    const searchCity = inputSearch.value
    const apiWeather =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4&units=metric`;

    getElement(apiWeather);
    
});

var unixTimestamp = 1684804694; // Örnek olarak alınan Unix zaman damgası

// Unix zaman damgasını normal saat biçimine dönüştürme
var date = new Date(unixTimestamp * 1000);
// var formattedTime = date.toLocaleString(); // Varsayılan yerel saat biçimine dönüştürme

console.log(date); 