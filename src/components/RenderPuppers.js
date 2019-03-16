import React from 'react';

const RenderPuppers = props => (
    <div className = "imageContainer">
        {props.images.map(image => (
            <img onClick = {(x) => props.handleClick(x)}
                key = {image}
                src = {`/images/${image}.jpg`}
                alt = {image}
                id = {image}
                className = "puppers"
            />
        ))}
    </div>
)

export default RenderPuppers