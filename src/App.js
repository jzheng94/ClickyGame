import React, { Component } from 'react';
import './App.css';

import PupperBoard from "./components/PupperBoard";
import PupperGrid from "./components/PupperGrid";

let alreadyClicked = [];
//array of all puppy images
let puppers = ["pupper1", "pupper2", "pupper3", "pupper4", "pupper5", "pupper6", "pupper7", "pupper8", "pupper9", "pupper10", "pupper11", "pupper12", "pupper13", "pupper14", "pupper15"];

//shuffle function was found online through stackoverflow but copied from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  let m = array.length, t, i;

  //While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

class App extends Component {

  state = {
    score: 0,
    highScore: 0,
    images: puppers,
    clicked: alreadyClicked,
    status: "Are you ready? Choose a pupper of your choice!"
  }
  
  handleClick = (x) => {
    if (alreadyClicked.includes(x.target.id)) {
      alreadyClicked = [];
      shuffle(puppers);

      if (this.state.score > this.state.highScore) {
        this.setState({ score: 0, highScore: 0, images: puppers, clicked: alreadyClicked, status: "Wow! Someone sure likes these puppers!"})
        alert("You lose!")
      } else {
        this.setState({score: 0, highScore: 0, images: puppers, clicked: alreadyClicked, status: "I guess someone doesn't want these puppers. :("})
        alert("You lost and failed to set a high score. \n GAME OVER")
      };
    } else if (!alreadyClicked.includes(x.target.id)) {
        alreadyClicked.push(x.target.id);
        shuffle(puppers);
        this.setState({score: this.state.score +1, clicked: alreadyClicked, images: puppers, status: "ISN'T HE CUTE!! BRING HIM HOME NOW!"});
    }
  }
  render() {
    return (
      <div>
        <PupperBoard
          score={this.state.score}
          highScore={this.state.highScore}
          status={this.state.status}
        />
        <PupperGrid
          images={this.state.images}
          handleClick={this.handleClick}
        />

      </div>
    )
  }
}

export default App;
