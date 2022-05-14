
import React from 'react'
import '../App.css';

const Weather = (props) => {
  return (
    <div>
        <table>
            <tr>
                <td colspan="2">
                     {props.city && <spane>{props.city} </spane>}
                     {props.country && <spane>, {props.country} </spane>}
                </td>
            </tr>
            <tr>
                <td> {props.tempreature && <spane> Tempreature: {props.tempreature} </spane>}</td>
            </tr>
            
            <tr>
                <td> {props.humidity && <spane> Humidity: {props.humidity}</spane>}</td>
            </tr>
            <tr>
                <td> {props.description && <spane> Description: {props.description}</spane>}</td>
            </tr>
            <tr>
                <td> {props.error && <spane> error:{props.error}</spane>}</td>
            </tr>
            
        </table>
    </div>
  )
}

export default Weather