import React, { useEffect, useRef, useState } from 'react'
import DrawerNav from '../../drawerNav'
import Box from '@mui/material/Box';
import './home.css'
import { images } from '../../../assets/index'


export default function Home() {
    const inputRef = useRef()
    const [weatherData, SetWeatherData] = useState()

    const allIcons = {
        "01d": images.clear,
        "01n": images.clear,
        "02d": images.cloud,
        "02n": images.cloud,
        "03d": images.cloud,
        "03n": images.cloud,
        "04d": images.drizzle,
        "04n": images.drizzle,
        "09d": images.rain,
        "09n": images.rain,
        "10d": images.rain,
        "10n": images.rain,
        "13d": images.snow,
        "13n": images.snow,
    }

    const search = async (city) => {
        if (city === '') {
            alert("Enter City Name");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=23d9a8e7ce493b94c85efb917f157d83`
            console.log("url", url)
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                alert(data.message);
                return;
            }
            console.log("--", data)
            const icon = allIcons[data?.weather[0]?.icon] || images.clear
            SetWeatherData({
                humidity: data?.main?.humidity || "91 %",
                windSpeed: data?.main?.speed || "3.6km/h",
                temperature: Math.floor(data?.main?.temp) || "16°C",
                location: data?.name || "London",
                icon: icon
            })
        } catch (error) {
            SetWeatherData(false);
            console.error("Error in Fetching weather data")
        }
    }

    useEffect(() => {
        // Api Call to get the weather details. 

        search("London")
    }, [])

    return (
        <div className='weather'>
            <Box sx={{ display: 'flex' }}>
                <DrawerNav />
                <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
                    <div className="search-bar">
                        <input ref={inputRef} type='text' placeholder='Search' />
                        <img src={images.search} alt="" onClick={() => search(inputRef.current.value)} />
                    </div>
                    {weatherData ? <>
                        <img src={weatherData?.icon} alt="" className='weather-icon' />
                        <p className='temperature'> {weatherData?.temperature}°C</p>
                        <p className='location'> {weatherData?.location}</p>
                        <div className="weather-data">
                            <div className="col">
                                <img src={images.humidity} alt="" />
                                <div>
                                    <p>{weatherData?.humidity} %</p>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="col">
                                <img src={images.wind} alt="" />
                                <div>
                                    <p>{weatherData?.windSpeed}</p>
                                    <span>Wind Speed</span>
                                </div>
                            </div>
                        </div>
                    </> : <></>}

                </Box>
            </Box>
        </div>
    )
}
