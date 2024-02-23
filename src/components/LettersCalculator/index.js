import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const count = searchInput.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phrase" className="phrase">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phrase"
            onChange={this.onChangeSearchInput}
            placeholder="Enter the phrase"
          />
          <p className="btn">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
      </div>
    )
  }
}
export default LettersCalculator
