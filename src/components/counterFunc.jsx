import { useState } from "react";
function CounterFunc(){
 const [count,setCount] = useState(0);
 return(<div>
    <p>count:{count}</p>
    <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
    <button disabled={count<=0} onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
 </div>)
}
export default CounterFunc;