import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isIncrement: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      isIncrement: prevState.isIncrement + randomNumber,
    }))
  }

  checkEvenOrOdd = () => {
    const {isIncrement} = this.state
    console.log(isIncrement / 2)

    if (isIncrement % 2 === 0) {
      console.log('Even')
      return 'Even'
    }
    console.log('Odd')
    return 'Odd'
  }

  render() {
    const {isIncrement} = this.state
    const displayStatus = this.checkEvenOrOdd()
    return (
      <div className="evenOddAppBackground">
        <div className="app-counter">
          <h1 className="numberCounter">Count {isIncrement}</h1>
          <p className="even-or-odd">Count is {displayStatus}</p>
          <button
            type="button"
            className="increment"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="instruction">
            "Increase By Random Number Between 0 to 100"
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
