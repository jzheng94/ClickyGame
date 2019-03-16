import React from 'react';

const PupperBoard = props => (
    <div className = "pupperBoard">
        <h1 className = "title">Save The Puppers!</h1>
        <h3 className = "instructions">Instructions: Click a pupper and you get to bring him home. Just don't click the same pupper more than once, the puppers get mad if you mix them up!</h3>
        <h3 className = "status">Current Status: {props.status}</h3>

        <div className = "scores">
            <p className = "score">Score: {props.score}</p>
            <p className = "score">High Score: {props.highScore}</p>
        </div>
    </div>
)

export default PupperBoard;