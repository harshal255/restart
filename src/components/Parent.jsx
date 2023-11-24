
import { useCallback, useState } from "react"
import Child from "./Child";


const Parent = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

    const IncrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const func = useCallback(() => {
        console.log("func called");
    }, counterTwo)

    return (
        <div>
            <Child countertwo={counterTwo} function={func}></Child>
            <button onClick={() => {
                IncrementOne();
            }}>counterOne - {counterOne}</button>
        </div>
    )
}

export default Parent