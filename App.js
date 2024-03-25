import { useState } from "react";

import "./index.css";

export default App;

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const stepAdd = () => setStep(step + 1);
  const stepSub = () => setStep(step - 1);

  const [count, setCount] = useState(0);
  const countAdd = () => setCount(count + 1);
  const countSub = () => setCount(count - 1);
  const stepCount = count * step;

  const daysFromToday = useState(0);

  // Calculate the future date based on daysFromToday
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + stepCount);

  const futureDateString = futureDate.toDateString(daysFromToday);

  return (
    <div>
      <button className="stepAdd" onClick={stepAdd}>
        {"+"}
      </button>

      <button className="stepSub" onClick={stepSub}>
        {"-"}
      </button>

      <div className="text">
        <h1>Step:{step}</h1>

        <div>
          <button className="countAdd" onClick={countAdd}>
            {"+"}
          </button>

          <button className="countSub" onClick={countSub}>
            {"-"}
          </button>

          <div className="text">
            <h1>Count:{count}</h1>
            <div className="text">
              <h1>
                {`${stepCount}`} days from today is {`${futureDateString}`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
