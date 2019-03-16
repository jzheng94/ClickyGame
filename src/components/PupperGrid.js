import React from 'react';
import RenderPuppers from './RenderPuppers'

const PupperGrid = props => (
    <div className = "container">
        <RenderPuppers
        images = {props.images}
        handleClick = {props.handleClick}
        />
    </div>
)

export default PupperGrid;