import React, { useState } from 'react'
import './AddButton.css'

const AddButton = () => {

    const [text, setText] = useState("+");
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleMouseOver = () => {
        setText("+ Add Task");
        setIsMouseOver(true);
    }

    const handleMouseOut = () => {
        setText("+");
        setIsMouseOver(false);
    }

    return(
        <div className='button-wrapper'>
            <div className = {`add-icon ${isMouseOver?"small-font":"large-font"}`}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{text}</div>
        </div>
    )
}

export default AddButton