import React from 'react'
import Emoji from './Emoji'
export default class Text extends Emoji{
    constructor(props){
        super(props)
    }



    render(){
        let text= <h1>{this.addEmoji("Sohrab 2","Md")}</h1>
       return super.render(text)
    }



}