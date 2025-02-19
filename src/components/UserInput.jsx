export default function UserInput({ userInput, handleOnChange}) {
  return (
    <main id="user-input">
      <div className="input-group">
        <label htmlFor="initial-investment">
          Initial Investment
          <input 
            type="number"
            required
            id="initial-investment"
            defaultValue={userInput.initialInvestment}
            onChange={(event) => handleOnChange("initialInvestment", event.currentTarget.value)}
          />
        </label>
        <label htmlFor="annual-investment">
          Annual Investment
          <input
            type="number"
            required
            id="annual-investment"
            defaultValue={userInput.annualInvestment}
            onChange={(event) => handleOnChange("annualInvestment", event.currentTarget.value)}
          />
        </label>
      </div>
      <div className="input-group">
        <label htmlFor="expected-return">
          Expected Return
          <input
            type="number"
            required
            id="expected-return"
            defaultValue={userInput.expectedReturn} 
            onChange={(event) => handleOnChange("expectedReturn", event.currentTarget.value)}
          />
        </label>
        <label htmlFor="duration">
          Duration
          <input
            type="number"
            required
            id="duration"
            defaultValue={userInput.duration} 
            onChange={(event) => handleOnChange("duration", event.currentTarget.value)}
          />
        </label>
      </div>
    </main>
  );
}

