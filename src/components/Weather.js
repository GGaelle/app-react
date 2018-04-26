import React from 'react'
import WeatherTitles from './WeatherTitles'
import WeatherForm from './WeatherForm'
import WeatherProps from './WeatherProps'
import weather from './weather.css'
import '../App.css';


const API_KEY = 'e7c9294147d873af0d17957eb280d122'

class Weather extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {

    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()

    if (city && country) {

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })

    } else {

      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Merci d'entrer une valeur."
      })
    }

  }

  render() {
    return(
      <div>

        <div className='wrapper'>
          
          <div className='main'>
            <div className='container-weather'>
              <table className='table'>
                <tr>
                  <td className='title-container'>
                    <WeatherTitles />
                  </td>
                  <td className='form-container'>
                    <WeatherForm getWeather={this.getWeather}/>
                    <WeatherProps
                      temperature={this.state.temperature}
                      city={this.state.city}
                      country={this.state.country}
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}
                    />
                  </td>
                </tr>
              </table>

            </div>

          </div>
        </div>

      </div>
    )
  }
}


export default Weather
