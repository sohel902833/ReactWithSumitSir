import React from "react";
class Clock extends React.Component{
  
  state={
    time:new Date().toLocaleTimeString(this.props.locale)
  }



 render(){
  return (
    <div className="App">
      Hello World {this.state.time}
     </div>
  );
 }
}

export default Clock;
