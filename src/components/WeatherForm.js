import React from 'react'

const WeatherForm = props => (

  <form onSubmit={ props.getWeather }>
    <input type="text" name="city" placeholder="Ville..." />
    <input type="text" name="country" placeholder="Pays..." />
    <button className='btn2'>Météo</button>
  </form>

)


export default WeatherForm
