import React from "react";
import ReactDom from "react-dom";
// const element=React.createElement('h1',null,"Hello World");

setInterval(() => {
  const element = (
    <div>
      <h1 className="Hello World..">
        <p>Md Sohrab Hossain Sohel {new Date().toLocaleTimeString()}</p>
        <p>Md Sohrab Hossain Sohel</p>
      </h1>
    </div>
  );
  ReactDom.render(element,document.getElementById("root")); 
}, 1000);
