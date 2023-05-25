// API Weather - https://api.openweathermap.org/data/2.5/weather?q=baku&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4
// KEY Weather - 54b1407dcc4d3ca0d88eefdeca4dd8a4
// ico -  https://openweathermap.org/img/wn/04n.png

// API Time - http://api.timezonedb.com/v2.1/get-time-zone?key=UGH5GTXTH0AH&format=json&by=zone&zone=America/New_York
// KEY Time - UGH5GTXTH0AH


// const apiTime =
//   "http://api.timezonedb.com/v2.1/get-time-zone?key=UGH5GTXTH0AH&format=json&by=zone&zone=America/New_York";


// DOM elements
const mainBootom = document.querySelector(".mainBootom");
const inputSearch = document.querySelector("#inputSearch");
const button = document.querySelector("#button");
const worldCity = document.querySelector(".worldCity");
const whetherSearchCityMain = document.querySelector(".whetherSearchCityMain");
const temperature = document.querySelector("#temperature");
const icon = document.querySelector(".icon")

const apiWashington =
  "https://api.openweathermap.org/data/2.5/weather?q=washington&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4&units=metric";

const apiLondon =
    "https://api.openweathermap.org/data/2.5/weather?q=london&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4&units=metric";

const apiTokio =
  "https://api.openweathermap.org/data/2.5/weather?q=tokio&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4&units=metric";

  
  async function getDefaultCity(firstCity, secondCity, threeCity ) {
    try {
     
      const firstresponse = await fetch(firstCity)  
      const firstdata = await firstresponse.json()
      
      const secondRespons = await fetch(secondCity)
      const secondData = await secondRespons.json()
      
      
      const threeRespons = await fetch(threeCity);
      const threedData = await threeRespons.json();
      
      showDefaultCity(firstdata, secondData, threedData)
      
  } catch (err) {
    console.log("err", err);
  }
}
  
function showDefaultCity(firstCity, secondCity, threeCity, ) {
  worldCity.innerHTML = `  
            <div class=defaultWeatherlist>
                <p>${firstCity.name}</p>
                <span>${Math.round(firstCity.main.temp)}°</span>
            </div>
            <div class=defaultWeatherlist>
            <p>${secondCity.name}</p>
                <span>${Math.round(secondCity.main.temp)}</span>
            </div>
            <div class=defaultWeatherlist>
            <p>${threeCity.name}</p>
                <span>${Math.round(threeCity.main.temp)}</span>
            </div>`;
          }


          
async function getElement(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    showMainTemp(data);
  } catch (err) {
    console.log("err", err);
  }
}

function showMainTemp(data_main) {

  // let iconWeather = data_main.weather[0].main
  // let iconClass;

  // if (iconWeather = "clouds") {
  //   iconClass = "fa-solid fa-cloud";
  // } else if (iconWeather = "clear" || "sunny") {
  //   iconClass = "fa-sharp fa-regular fa-sun"; 
  // } else if (iconWeather = "rainy") {
  //   iconClass = "fa-solid fa-cloud-rain"; 
  // } else if (iconWeather = "snow") {
  //   iconClass = "fa-solid fa-snowflake";
  // } else if (iconWeather = "wind") {
  //   iconClass = "fa-solid fa-wind";
  // } else {
  //   iconClass = "fa-sharp fa-regular fa-sun";
  // }

  // icon.className = iconClass
  
  // change UNIX time to normal hours
  let unixTimessunrise = data_main.sys.sunrise;
  let sunriseDate = new Date(unixTimessunrise * 1000);
  let sunrise = sunriseDate.toLocaleString();
  
  // change UNIX time to normal hours
  let unixTimessunset = data_main.sys.sunset;
  let sunsetDate = new Date(unixTimessunset * 1000);
  let sunset = sunsetDate.toLocaleString();

  mainBootom.innerHTML = `
  <div class="temp"><span>${Math.round(data_main.main.temp)}°</span></div>
  <div class="cityTime">
            <div class="city">
                <h2>${data_main.name} - ${data_main.sys.country}</h2>
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
                    <span>${sunrise}</span>
                </div>
                <div class="aboutWeather">
                <p>Sunset</p>
                    <span>${sunset}</span>
                </div>`;
              }

button.addEventListener("click", function () {
    const searchCity = inputSearch.value
    const apiWeather =
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=54b1407dcc4d3ca0d88eefdeca4dd8a4&units=metric`;

  getElement(apiWeather);
  searchCity.innerHTML = ""
    
});

getDefaultCity(apiWashington, apiLondon, apiTokio)