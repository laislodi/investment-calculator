import { useState } from "react";
import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(previousUserInput => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;
  
  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        handleOnChange={handleChange}
      />
      {inputIsValid ? <Result input={userInput} /> : <p className="center">Duration must be greater than zero.</p>}
    </>
  )
}

export default App
