import React from 'react'
import "./allCards.css"
require.context('./allCards',false, /\.(png|jpg|svg)$/)

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./','')] = r(item); })
  return images
}

const images = importAll(require.context('./allCards', false, /\.(png|jpg|svg)$/));

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    
    this.props=({
      name:(props),
      suit:(props),
      // playerNum: (props),
    })

  }

  render(){
    let name = this.props.name;
    let suit = this.props.suit;
    let combinedName = `${name}Of${suit}.jpg`;

    console.log(combinedName);
    return(
      <div>
        <img className = 'playing-card' src = {images[combinedName]} alt = ""/>
      </div>
    )
  }
}