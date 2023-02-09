import React from 'react'

import clubs from '../images/clubs.png'
import hearts from '../images/hearts.png'
import spades from '../images/spades.png'
import diamonds from '../images/diamonds.png'

export default class Cards extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name: props.name,
      suits: props.suits,
    }
  }

render() {
      const color =
      this.state.suits === "Spades" || this.state.suits === "Clubs"
        ? "textBlack"
        : "textRed";
  return (
      <div className="card">
        <div className="topLeft">
          {this.state.suits === "Spades" ? (
            <img src={spades} alt="spades"></img>
          ) : null}
          {this.state.suits === "Hearts" ? (
            <img src={hearts} alt="Hearts"></img>
          ) : null}
          {this.state.suits === "Diamonds" ? (
            <img src={diamonds} alt="Diamonds"></img>
          ) : null}
          {this.state.suits === "Clubs" ? (
            <img src={clubs} alt="Clubs"></img>
          ) : null}
        </div>
        <p className={color}>{this.state.name} </p>

        <div className="bottomRight">
          {this.state.suits === "Spades" ? (
            <img src={spades} alt="spades"></img>
          ) : null}
          {this.state.suits === "Hearts" ? (
            <img src={hearts} alt="Hearts"></img>
          ) : null}
          {this.state.suits === "Diamonds" ? (
            <img src={diamonds} alt="Diamonds"></img>
          ) : null}
          {this.state.suits === "Clubs" ? (
            <img src={clubs} alt="Clubs"></img>
          ) : null}
        </div>
      </div>
    );
  }
}