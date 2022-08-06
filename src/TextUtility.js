import React, { useState } from 'react'

export default function TextUtility() {

    const [textInput, setTextInput] = useState('');
    const [countResult, setCountResult] = useState({
        words: 0,
        letters: 0
    })

    // stores text input in state variable using hooks 

    var inputHandler = (event) => {
        setTextInput(event.target.value);
    }

    // counts the number of words and letters inside the state variable and stores it as an object 

    var count = (event) => {
        let remText = textInput.replace(/ /g, "");
        setCountResult(prevState => ({ ...prevState, words: textInput.split(' ').length, letters: remText.length }));
    }

    // converts the text into upper case 

    var upper = () => {
        var inUpper = textInput.toLocaleUpperCase();
        document.getElementById("textInput").value = inUpper;
    }

    // converts the text into lower case 

    var lower = () => {
        var inLower = textInput.toLocaleLowerCase();
        document.getElementById("textInput").value = inLower;
    }


    return (
        <div className='textUtilityContainer my-5'>

            <h1 className='py-4'>Text Utility App</h1>

            <input type="text" id="textInput" onChange={(event) => inputHandler(event)} /><br />

            <button className='btn btn-primary my-2' onClick={(event) => count(event)}>Count</button>
            <button className='btn btn-primary mx-2 my-2' onClick={(event) => upper(event)}>Upper Case</button>
            <button className='btn btn-primary my-2' onClick={(event) => lower(event)}>Lower Case</button>

            <div className='textResult'>

                <p>Number of Words : {countResult.words}</p>

                <p>Number of Characters : {countResult.letters}</p>

            </div>

        </div>
    )
}
