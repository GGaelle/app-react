import React from 'react'

const WeatherProps = props => (
  <div className='weather__info'>
    {
      props.city && props.country && <p className='weather__key'>Lieu :
        <span className='weather__value'> { props.city }, { props.country }</span>
        </p>
    }
    {
      props.temperature && <p className='weather__key'>Température :
        <span className='weather__value'> { props.temperature } °C</span>
      </p>
    }
    {
      props.humidity && <p className='weather__key'>Humidité :
        <span className='weather__value'> { props.humidity } %</span>
      </p>
    }
    {
      props.description && <p className='weather__key'>Conditions :
        <span className='weather__value'> { props.description }</span>
      </p>
    }
    {
      props.error && <p className='weather__error'>{ props.error }</p>
    }
  </div>
)

export default WeatherProps
