import React from 'react';

class Weather extends React.Component{
    constructor(){
        super()
        this.state = {
            weather: { name: null, main: { temp: null }, wind: {speed: null} }
        }

    }

    pollWeather = async (position) =>{
        const lat = Number(position.coords.latitude.toString().slice(0, 6))
        const lng = Number(position.coords.longitude.toString().slice(0, 6))
        console.log(lat)
        console.log(lng)

        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8701e2e8db6ff56a1496f1bc54197d98`)
        const data = await res.json()
        this.setState( { weather: data } )
        console.log(data)
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(this.pollWeather)

    }
    // 8701e2e8db6ff56a1496f1bc54197d98

    render(){
        const { name, main, wind } = this.state.weather;
        return(
            <div>
                <h2 className="city">{`Weather in: ${name}`}</h2>
                <h2 className="temp">{`Temperature: ${Math.floor(main.temp*(9/5) - 459.67)}`}</h2>
                <h2 className="temp">{`Wind Speed: ${wind.speed}`}</h2>

            </div>
        )
    }
}



export default Weather