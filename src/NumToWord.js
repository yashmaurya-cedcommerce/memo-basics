import React, { useState } from 'react'

export default function NumToWord() {

  // single array that stores numbers from one to nineteen 

  var singleArray = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];

  // doubleArray that stores double numbers 

  var doubleArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  var [num, setNum] = useState(0);

  var convertToString = (event) => {

    // checks if the input is longer than nine digits 

    if ((num = num.toString()).length > 9) {
      document.getElementById("numToWordDisplay").innerHTML = "<h3>Input too Long</h3>"
    }
    else {
      var n = ('000000000' + num).slice(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);

      if (!n) return;
      var str = '';

      str += (n[1] != 0) ? (singleArray[Number(n[1])] || doubleArray[n[1][0]] + ' ' + singleArray[n[1][1]]) + 'crore ' : '';
      str += (n[2] != 0) ? (singleArray[Number(n[2])] || doubleArray[n[2][0]] + ' ' + singleArray[n[2][1]]) + 'lakh ' : '';
      str += (n[3] != 0) ? (singleArray[Number(n[3])] || doubleArray[n[3][0]] + ' ' + singleArray[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (singleArray[Number(n[4])] || doubleArray[n[4][0]] + ' ' + singleArray[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (singleArray[Number(n[5])] || doubleArray[n[5][0]] + ' ' + singleArray[n[5][1]]) : '';

      // prints the result string inside the div 

      document.getElementById("numToWordDisplay").innerHTML = "<h3>" + str + "</h3>";
    }
  }

  var numberHandler = (event) => {
    setNum(event.target.value);
  }

  return (

    <div className='numToWordContainer my-5'>

      <h3>NumToWord</h3>

      <label for="numToString">

        <input type="number" id="numToString" onChange={(event) => numberHandler(event)} />

      </label><br />

      <button className='btn btn-primary m-3' onClick={(event) => convertToString(event, num)}>Convert</button>

      <div id="numToWordDisplay"></div>

    </div>
  )
}
