import './App.css';
import { createContext } from 'react';
import CompA from './components/CompA';
import Task2Parent from './Task2Parent';
import TextUtility from './TextUtility';
import Currency from './Currency';
import NumToWord from './NumToWord';

// creating context to be used in child component D 

const userName = createContext();

function App() {

  return (
    <div className="App">

      {/* providing value to a context name userName  */}

      <userName.Provider value={"YashMaurya"}>

        <CompA />

      {/* task two parent component that re renders name after every two seconds  */}

        <Task2Parent />

        <TextUtility />

        <Currency />

        <NumToWord />

      </userName.Provider>
      
    </div>
  );
}

export default App;
export {userName};
