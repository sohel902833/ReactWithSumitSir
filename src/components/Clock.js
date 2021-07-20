import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  state = {
    date: new Date(),
    locale:"bn-BD"
  };


  componentDidMount(){
   this.clockTimer= setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }
 tick(){
  this.setState({
    date:new Date()
  })
 }

 handleClick=(lc)=>{
  
     if(lc=="bn-BD"){
       this.setState({locale:"en-US"});
     }else{
       this.setState({locale:"bn-BD"});
     }
 }


  render() {
    console.log("Clock Component Rendering..")
       
    let {locale}=this.state
    return (
      <div className="App">
        <center>
          <h1>{this.state.date.toLocaleTimeString(locale)}</h1>
          <Button handleClick={this.handleClick} locale/>
        </center>
      </div>
    );
  }
}

export default Clock;
