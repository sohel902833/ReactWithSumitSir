import React from 'react'
import Text from './Text';
export default class Bracket extends React.Component{
    addBracket=(text)=>`[ ${text} ]`;
    render(){
       return this.props.children({addBracket:this.addBracket});
    }
}

