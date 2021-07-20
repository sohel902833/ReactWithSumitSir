import React from "react";
class Clock extends React.Component {
  //if props need to satate initialization use this systex for declare state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date().toLocaleTimeString(props.locale),
  //   };
  // }

  //else use shortcut
  state = {date: new Date()};


  componentDidMount(){
   this.clockTimer= setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }
 tick(){

  // this.setState((state,props)=>{
  //   date:new Date()
  // })

  this.setState({
    date:new Date()
  })
 }

  // state={
  //   time:new Date().toLocaleTimeString(this.props.locale)
  // }

  render() {
    return (
      <div className="App">
        <center>
          <h1>{this.state.date.toLocaleTimeString(this.props.locale)}</h1>
        </center>
      </div>
    );
  }
}

export default Clock;
