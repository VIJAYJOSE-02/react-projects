import {useState} from "react";
import "./style.css";

function Counter(){
  const [count,setCount] = useState(0);
  const increment = () => setCount(count+1);
  const decrement =() => setCount(count-1);
  const reset =()=> setCount(0);
  return(
    <>
    <h1>Counter</h1>
    <div className="container">
      <h1 className="number">{count}</h1>
    </div>
    <section className="btns-container">
      <button onClick={decrement} className="increment">-</button>
      <button onClick={reset} className="increment">Reset</button>
      <button onClick={increment} className="increment">+</button>
    </section>
   
</>
  );
}
export default Counter;