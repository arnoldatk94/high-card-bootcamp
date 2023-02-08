import React from "react";
import "./App.css";
import { makeShuffledDeck } from "./utils.js";

class App extends React.Component {
  constructor(props) {
    // Always call super with props in constructor to initialise parent class
    super(props);
    this.state = { // Internal variable for the App class
      // Set default value of card deck to new shuffled deck
      cardDeck: makeShuffledDeck(),
      // currCards holds the cards from the current round
      currCards: [],
      // result gives the statement of who is winning each round
      result: '', 
      // Players' Scores
      playerOneScore: 0,
      playerTwoScore: 0,
      gameRounds: 26,
      dealOrReset: "Deal",
      matchNumber: 1,
    };
  }

  // cards added to this.state.currCards
  // compare the rank of position 0 and 1 in that array to determine winner
  // componentDidUpdate currently tracks the hands of the players
  // winner is decided in componentDidUpdates via result

  dealCards = () => {
    this.setState((state) => ({
      // Remove last 2 cards from cardDeck
      cardDeck: state.cardDeck.slice(0, -2),
      // Deal last 2 cards to currCards
      currCards: state.cardDeck.slice(-2),
      // const newCurrCards = this.state.cardDeck.slice(-2)
    }));
    setTimeout(() => {
      this.checkWinner()
    }, 10);
  };

  resetGame = () => {
    this.setState((state) => ({
      cardDeck: makeShuffledDeck(),
      currCards: [],
      result: '',
      playerOneScore: 0,
      playerTwoScore: 0,
      gameRounds: 26,
      overallWinner: 0,
      dealOrReset: "Deal",
      
    }))
    this.state.matchNumber = this.state.matchNumber + 1
    console.log('Match Number ' + this.state.matchNumber)
  }

  componentDidMount () {
    console.log('start')
    console.log(this.state.cardDeck)
    
  }
  componentDidUpdate () {
  }

  componentWillUnmount () {
    console.log('end')
    console.log(this.state.currCards)
  }

  checkWinner () {
    if (this.state.currCards[0].rank > this.state.currCards[1].rank) {
      this.setState({result: "Player 1 wins!"})
      this.state.playerOneScore = this.state.playerOneScore + 1
      
    } else if (this.state.currCards[0].rank < this.state.currCards[1].rank) {
      this.setState({result: "Player 2 wins!"})
      this.state.playerTwoScore = this.state.playerTwoScore + 1

    } else {
      this.setState({result: "Draw!"})
    }
    this.state.gameRounds = this.state.gameRounds - 1
    this.state.overallWinner = this.state.playerOneScore - this.state.playerTwoScore
    if (this.state.gameRounds === 0) {
      this.setState({dealOrReset: "Reset"})
      if (this.state.overallWinner > 0) {
        this.setState({result: "Player 1 has won this match"})
      } else if (this.state.overallWinner < 0) {
        this.setState({result: "Player 2 has won this match"})
      } else (this.setState({result: "This round ends in a draw"}))
    }
  }

  render() {
    const currCardElems = this.state.currCards.map(({ name, suit }) => (
      // Give each list element a unique key
      <div key={`${name}${suit}`}>
        {name} of {suit}
      </div>
    ));
    // Can console.log and do for loops but better to do in own functions
    // console.log(React)

    return (
      <div className="App">
        <header className="App-header">
          <h3>High Card 🚀</h3>
          <h3 color>Match Number {this.state.matchNumber}</h3>
          <p>There are {this.state.gameRounds} rounds left!</p>
          <p>Player One's score is {this.state.playerOneScore}</p>
          <p>Player Two's score is {this.state.playerTwoScore}</p>
          {currCardElems}
          <br />
          <button onClick={this.state.gameRounds === 0 ? this.resetGame: this.dealCards}>{this.state.dealOrReset}</button>
          <p>{this.state.result}</p>
          
        </header>
      </div>
    );
  }
}

export default App;
