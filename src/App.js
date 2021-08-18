import React,{useState, useEffect} from "react";

import {API_KEY} from './config'

import Header from './Components/Header'
import Main from './Components/Main'
import Forecast from './Components/Forecast'
import Footer from './Components/Footer'

import overcast from './img/clouds.jpg'
import scattered from './img/clouds1.jpg'
import clear from './img/clear.jpg'
import haze from './img/haze.jpg'
import mist from './img/mist1.jpg'
import thunder from './img/thunder.jpg'
import rain from './img/rain2.jpg'
import snow from './img/snow1.jpg'

function App() {

const [currentW,setCurr] = useState({});
let [fcast,setFcast] = useState({});
let [wImage,setImg] = useState('');
let [fColor,setFclr] = useState('');
let [hColor,setHclr] = useState('');
function SearchCity(citY){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+citY+'&APPID='+API_KEY+'&units=metric')
        .then(res=>res.json())
        .then(data=>{
        //console.log(data)
            if(data.cod===200){
                let currObj = {
                    city:data.name,
                    temp:parseInt(data.main.temp)+'\xB0',
                    weather:data.weather[0].description,
                    day: new Date(data.dt * 1000).toString().split(' ')[0],
                    sunRise: new Date(parseInt((data.sys.sunrise+data.timezone) * 1000)).toUTCString().substr(17, 5),
                    sunSet: new Date(parseInt((data.sys.sunset+data.timezone) * 1000)).toUTCString().substr(17, 5),
                    tempMax:parseInt(data.main.temp_max)+'\xB0',
                    tempMin: parseInt(data.main.temp_min)+'\xB0',
                    windSpeed: parseInt(data.wind.speed/1000)+' kmph',
                    visib: parseInt(data.visibility)/1000+' km',
                    humid:  parseInt(data.main.humidity)+'%',
                    pressure: parseInt(data.main.pressure)+' hPa'
                }
                setCurr(currObj);
                
                if(currObj.weather.includes("overcast")){
                    setImg(overcast);
                    setFclr("text-white");
                    setHclr("text-gray-900");
                }
                
                if(currObj.weather.includes("scattered") || currObj.weather.includes("broken") || currObj.weather.includes("few")){
                    setImg(scattered);
                    setHclr("text-gray-900");
                    setFclr("text-gray-900");
                }
                
                if(currObj.weather.includes("haze")){
                    setImg(haze);
                    setHclr("text-gray-900");
                    setFclr("text-gray-900");
                }
                
                if(currObj.weather.includes("mist")){
                    setImg(mist);
                    setFclr("text-white");
                    setHclr("text-gray-900");
                }
                
                if(currObj.weather.includes("clear")){
                    setImg(clear);
                    setHclr("text-gray-900");
                    setFclr("text-gray-900");
                }
                
                if(currObj.weather.includes("rain")){
                    setImg(rain);
                    setFclr("text-white");
                    setHclr("text-gray-900");
                }
                
                if(currObj.weather.includes("thunder")){
                    setImg(thunder);
                    setFclr("text-white");
                    setHclr("text-white");
                }
                
                if(currObj.weather.includes("snow")){
                    setImg(snow);
                    setFclr("text-white");
                    setHclr("text-white");
                }
                
            }
            else{
                alert("Enter a Valid City")
            }
            //console.log(currObj)
        })
    
        fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+citY+'&APPID='+API_KEY+'&units=metric')
        .then(res=>res.json())
        .then(data=>{
        //console.log(data.cod)
        if(data.cod==200){
            let days = [];
            let i=1;
            for(i=1;i<7;i++)
            {
                let day = {
                    dt:new Date(data.list[i].dt * 1000).toString().split(' ')[0],
                    tMax:parseInt(data.list[i].temp.max)+'\xB0',
                    tMin:parseInt(data.list[i].temp.min)+'\xB0',
                    weather:data.list[i].weather[0].description,
                    icon:data.list[i].weather[0].icon,
                    pop: parseInt(parseFloat(data.list[i].pop*100))+' %'
                }
                days.push(day)
                
            }
            setFcast(days);
        }
        })
}
    
useEffect(()=>{
        SearchCity("Bangalore");
},[])
      
return (
      <div className="ld blur-md" style={{backgroundImage: "url("+wImage+")"}}>
        <Header SearchCity={SearchCity} />
        <Main currentW={currentW} fColor={fColor} hColor={hColor}/>
        <Forecast fcast={fcast} fColor={fColor}/>
        <Footer />
      </div>
)
}


    
export default App;
