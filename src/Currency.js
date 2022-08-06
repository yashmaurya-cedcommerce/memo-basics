import React, { useState } from 'react'

export default function Currency() {

    // the amount to be converted is stored inside amount variable

    const [amount, setAmount] = useState(0);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    // hook object to store the converted value 

    const [convertedAmount, setConvertedAmount] = useState({
        value: 0,
        convertedTo: ''
    });

    // handles the value entered in the text box using onchange event 

    var inputHandler = (event) => {
        setAmount(event.target.value);
    }

    // function that actually converts the entered value into the required value according to user's requirements

    var convert = (event) => {

        // if a USD value has to be converted into INR value 

        if (from === 'USD' && to === 'INR') {
            if (amount != '') {
                var tempConverted = amount * 79.20;
                setConvertedAmount(prevState => ({ ...prevState, value: tempConverted, convertedTo: "INR" }));
                document.getElementById("resultDivID").innerHTML = amount + " USD = " + tempConverted + " INR";
            }
            else {
                document.getElementById("resultDivID").innerHTML = "<p>Please Enter a Amount</p>";
            }

        }

        // if a INR value has to be converted into USD value 

        else if (from === 'INR' && to === 'USD') {
            if (amount != '') {
                var tempConverted2 = amount / 79.20;
                setConvertedAmount(prevState => ({ ...prevState, value: tempConverted2, convertedTo: "USD" }));
                document.getElementById("resultDivID").innerHTML = amount + " INR = " + tempConverted2 + " USD";
            }
            else {
                document.getElementById("resultDivID").innerHTML = "<p>Please Enter a Amount</p>";
            }

        }

        // if both the selected currencies are same 

        else if (from === to && from !== '') {
            if (amount != '') {
                setConvertedAmount(prevState => ({ ...prevState, value: amount, convertedTo: from }));
                document.getElementById("resultDivID").innerHTML = amount + " " + from + " = " + amount + " " + to;
            }

            else {
                document.getElementById("resultDivID").innerHTML = "<p>Please Enter a Amount</p>";
            }

        }

        // if no currency is selected by the user 

        else {
            document.getElementById("resultDivID").innerHTML = "<p>Please Select a Currency</p>";
        }

    }

    var handleFromSelect = (event) => {

        setFrom(event.target.value);

    }

    var handleToSelect = (event) => {
        setTo(event.target.value);
    }


    var exchange = () => {
        var tempSelect = from;
        setFrom(to);
        setTo(tempSelect);

    }

    return (
        <div className='currencyContainer p-3 my-5'>

            <h3>Currency Converter</h3>

            <label for="currencyInput">Enter Amount

                <input type="number" id="currencyInput" className='mx-2' onChange={(event) => inputHandler(event)} />

            </label>

            <div className='converterDiv py-3'>

                <div className='fromDiv'>

                    <p>From</p>

                    <select id="fromOption" value={from} onChange={(event) => handleFromSelect(event)}>

                        <option value="">Choose</option>
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>

                    </select>

                </div>

                <div className='exchangeDiv'>

                    <i class="fa-solid fa-arrow-right-arrow-left fa-3x exchangeBtn" onClick={exchange}></i>

                </div>

                <div className='toDiv'>

                    <p>To</p>

                    <select id="toOption" value={to} onChange={(event) => handleToSelect(event)}>

                        <option value="">Choose</option>
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>

                    </select>

                </div>

            </div>

            <div className='resultDiv p-3' id="resultDivID">



            </div>

            <button className='calculateCurrency' onClick={event => convert(event)}>Get Exchange Rate</button>

        </div>
    )
}
