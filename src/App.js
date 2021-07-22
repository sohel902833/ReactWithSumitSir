import React from "react";
import MyComponentClass from "./components/MyComponentClass";
import MyComponent from "./components/MyComponent";
class App extends React.Component {
  render() {
    return (
      <>
        <MyComponentClass />
        <hr/>
        <MyComponent />
      </>
    );
  }
}
export default App;
