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
   this.setState({locale:lc});
 }


  render() {
       
    let {locale}=this.state
    return (
      <div className="App">
        <center>
          <h1>{this.state.date.toLocaleTimeString(locale)}</h1>
          <Button change={this.handleClick} locale={locale==="bn-BD"?"en-US":"bn-BD"}/>
        </center>
      </div>
    );
  }
}

export default Clock;
