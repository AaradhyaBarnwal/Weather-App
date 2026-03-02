let inputbox = document.querySelector (".input");
const Btn = document.querySelector(".sumbit"); 
const Info = document.querySelector('.info');

const wSpeedTag = document.querySelector(".wind-speed");

const tempTag = document.querySelector(".temperature");

// const parentImgTag = document.querySelector('.v')

const imgTag = document.querySelector('.baailImg')
// let inputbox = "london";
const api = "c305233faba00108b8a555c3d80c2174";



let weatherData; 
function update(data) {
    var ws = data.wind.speed;
    var temp = data.main.temp;
    var weathe = data.weather[0].main;
    var E = data.cod
    console.log(ws,temp,weathe,E);
    wSpeedTag.innerHTML=`Windspeed: ${ws}<i class="fa-solid fa-wind"></i> `;
    tempTag.innerHTML=`Temperature: ${temp}<i class="fa-solid fa-temperature-arrow-down"></i> `;
    imgTag.src= `assets/${weathe}.png`;

    
}
async function getData(city) {
    try {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
        const response = await fetch(url);  
        weatherData = await response.json();    
         console.log(weatherData);  
        update(weatherData);
    } catch (error) {
        console.error("Error fetching data:", error); 
    }
}

function savedata() {
    
}

Btn.addEventListener("click", () => {
    const city = inputbox.value; 
    getData(city);

});




// // console.log(m);


// let data ='{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":280.49,"feels_like":277.09,"temp_min":280.49,"temp_max":280.49,"pressure":1013,"humidity":88,"sea_level":1013,"grnd_level":1009},"visibility":10000,"wind":{"speed":5.8,"deg":301,"gust":10.57},"clouds":{"all":99},"dt":1772269204,"sys":{"country":"GB","sunrise":1772261308,"sunset":1772300282},"timezone":0,"id":2643743,"name":"London","cod":200}';


// const obj = JSON.parse(data);
// const windspeed = (obj.wind.speed);
// const temp = (obj.main.temp);

// console.log(temp);
// console.log(windspeed);

 