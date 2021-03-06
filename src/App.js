import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = {
    display: "",
    numA:"",
    numB:"",
  };

inputHandler=(input)=>{
  const newNum=this.state.numB+input;
  const disNum = this.state.display+input
  this.setState({numB:newNum,display:disNum})
}

clearHandler=()=>{
  this.setState({numA:"",numB:"",display:""})
}

operatorHandler=(input)=>{
  const newNum=this.state.numB+input;
  this.setState({numB:newNum, display:""})
}

equalHandler=()=>{
  const newNum=eval(this.state.numB)
  this.setState({numB:newNum, display:newNum})
}

  render() {
    return (
      <div>
        <div id="title">
          <h1 className="titles">React Calculator</h1>
          <h6 className="titles">by Geo Cook</h6>
        </div>
        <div className="calculator">
          <div id="display">
            {this.state.display}
          </div>
          <div id="calc-btns">
            <div id="row1">
              <button className="white button" onClick={() => this.inputHandler("7")}>7</button>
              <button className="white button" onClick={() => this.inputHandler("8")}>8</button>
              <button className="white button" onClick={() => this.inputHandler("9")}>9</button>
              <button className="red button" onClick={()=>this.operatorHandler("/")}>÷</button>
            </div>
            <div id="row2">
              <button className="white button" onClick={() => this.inputHandler("4")}>4</button>
              <button className="white button" onClick={() => this.inputHandler("5")}>5</button>
              <button className="white button" onClick={() => this.inputHandler("6")}>6</button>
              <button className="red button" onClick={()=>this.operatorHandler("*")}>x</button>
            </div>
            <div id="row3">
              <button className="white button" onClick={() => this.inputHandler("1")}>1</button>
              <button className="white button" onClick={() => this.inputHandler("2")}>2</button>
              <button className="white button" onClick={() => this.inputHandler("3")}>3</button>
              <button className="red button" onClick={()=>this.operatorHandler("-")}>-</button>
            </div>
            <div id="row4">
              <button className="white button" id="clear" onClick={this.clearHandler}>C</button>
              <button className="white button" onClick={() => this.inputHandler("0")}>0</button>
              <button className="red button" onClick={()=>this.operatorHandler("+")}>+</button>
              <button className="red button" onClick={this.equalHandler}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
