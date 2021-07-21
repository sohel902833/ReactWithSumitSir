import React from 'react'
import BoilingVardict from './BoilingVardict'
import TemperatureInput from './TemperatureInput'
import {toCelsius,toFahrenheit,convert} from '../lib/Converter'


export default class Calculator extends React.Component{

    state={
        temperature:'',
        scale:'c'
    }

    onTemperatureChange=(e,scale)=>{
        this.setState({
            temperature:e.target.value,
            scale
        })
    }
    render(){
        let{temperature,scale}=this.state
        const celcius=scale==="f"?convert(temperature,toCelsius):temperature;
        const fahrenheit=scale==="c"?convert(temperature,toFahrenheit):temperature;
      return(
            <>
            <TemperatureInput scale="c" temperature={celcius} change={this.onTemperatureChange}/>
            <TemperatureInput scale="f" temperature={fahrenheit} change={this.onTemperatureChange}/>
            <BoilingVardict celsius={parseFloat(temperature)}/>
            </>
        )
    }
}