import React, { useContext } from 'react';
import { userName } from '../App';

export default function CompD() {
  
    var uName = useContext(userName)

    return (
    <div>

        <h1>Username : {uName}</h1>

    </div>
  )
}
