import React from "react";
export default class MyComponentClass extends React.Component {
  state = {
    count: 0,
    date: new Date(),
  };
  addClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  componentDidMount(){
      const {count}=this.state
      document.title=`Clicked ${count} times`;
     this.timer=setInterval(this.tick,1000)
  }
  componentDidUpdate(){
    const {count}=this.state
    document.title=`Clicked ${count} times`;
  }
  tick=()=>{
      this.setState({
          date:new Date()
      })
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <p>Time: {date.toLocaleTimeString()}</p>
        <p>
          <button onClick={this.addClick} type="button">
            Click
          </button>
        </p>
      </div>
    );
  }
}
