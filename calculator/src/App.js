import './App.css';
import { Component } from "react"

class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      currentNumber: '0' || this.state.userInput,
      operation: null,
      firstNum: 0,
      secondNum: 0
    }
  }

  handleOperationClick = (evt) => {
    const { operation, value } = evt.target.dataset
    this.setState({
      [operation]: value,
      firstNum: !this.state.firstNum ? this.state.userInput : 0,
      userInput: ''
    })
  }

  handleNumClick = (evt) => {
    let num = (this.state.userInput + evt.target.textContent)
    this.setState({
      userInput: num,
      currentNumber: num
    })
  }

  render(){
    const { currentNumber } = this.state

    return (
      <div id="app">
        <div id="user-input">
          <p>{currentNumber}</p>
        </div>
        <div id="buttons-container">
          <div className="button">AC</div>
          <div className="button">+/-</div>
          <div name="percentage" className="button">%</div>
          <div onClick={this.handleOperationClick} data-operation="operation" data-value="divide" className="button">/</div>
          <div onClick={this.handleNumClick} className="button">7</div>
          <div onClick={this.handleNumClick} className="button">8</div>
          <div className="button">9</div>
          <div onClick={this.handleOperationClick} data-operation="operation" data-value="multiply" className="button">x</div>
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div onClick={this.handleOperationClick} data-operation="operation" data-value="subtract" className="button">-</div>
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div onClick={this.handleOperationClick} data-operation="operation" data-value="add" className="button">+</div>
          <div className="button">0</div>
          <div className="button">.</div>
          <div className="button">=</div>
        </div>
      </div>
    );
  }
}

export default App;
