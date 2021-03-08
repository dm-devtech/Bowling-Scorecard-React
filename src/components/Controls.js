import Scorecard from './Scorecard.js';
import React, { Component } from 'react';

class Controls extends Component {

  constructor() {
    super()
    this.sth = new Scorecard()
      this.state = {
        turn: '',
        score: ''
      }
      this.handleTurnChange = this.handleTurnChange.bind(this)
      this.handleScoreChange = this.handleScoreChange.bind(this)
    }

    handleTurnChange = event => {
      this.setState({
        turn: event.target.value
      });
    }

    handleScoreChange = event => {
      this.setState({
        score: event.target.value
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        isSubmitted: true,
      });
      this.sth.addRoll(Number(`${this.state.turn}`), Number(`${this.state.score}`))
  };

render() {
  return (
    <div className="buttons">
    <h1>Bowling Scorecard</h1>
    <form onSubmit={this.handleSubmit} data-testid="form">
      <label>Turn (e.g. frame 1 roll 1 = 1.1): </label>
      <input type="text"
             name="turn"
             data-testid="turn"
             value={this.state.turn}
             onChange={this.handleTurnChange}
      />
      <label> Score: </label>
      <input type="text"
             name="score"
             data-testid="score"
             value={this.state.score}
             onChange={this.handleScoreChange}
      />
      <button className="click" type="submit">Submit</button>
    </form>
      <table>
         <tbody>
         {
           Object.keys(this.sth.score).map(itemKey => {
             return (
               <tr key={itemKey}>
                 <td> {itemKey}   -    </td>
                 <td> {this.sth.score[itemKey]}</td>
               </tr>
             )
           })
         }
         </tbody>
       </table>
       <div className="Total">
       Total: {this.sth.total(10)}
       </div>
      </div>
  )
}
}

export default Controls
