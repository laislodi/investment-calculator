import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Result({ input }) {
  const annualData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investiment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const totalAmmountInvested = input.initialInvestment + (data.annualInvestment * data.year)
          const totalInterest = data.valueEndOfYear - totalAmmountInvested;
          return <tr key={data.year}>
            <th>{data.year}</th>
            <th>{formatter.format(data.valueEndOfYear)}</th>
            <th>{formatter.format(data.interest)}</th>
            <th>{formatter.format(totalInterest)}</th>
            <th>{formatter.format(totalAmmountInvested)}</th>
          </tr>
          }
        )}
      </tbody>
    </table>
  );
}
