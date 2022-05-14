
import React from 'react'
import '../App.css';

export const Form = (props) => {
  return (
    <div>
        <form onSubmit={props.getWeather}>
            <input type='text' name= 'city' placeholder='Enter City .....' /> <br/>
            <input type='text' name= 'country' placeholder='Enter Country...' /> <br/>
            <button>GetWeather</button>
        </form>
    </div>
  )
}

