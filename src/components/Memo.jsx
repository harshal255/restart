import { useMemo, useState } from "react"

const Memo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const IncrementOne = () => {
        setCounterOne(counterOne + 1);

    }
    const IncrementTwo = () => {
        setCounterTwo(counterTwo + 1);

    }
    // const isEven = () => {
    //     console.log("function called")
    //     let i = 0;
    //     while (i < 300000000) i++;
    //     return counterOne % 2 === 0;
    // }

    const isEven = useMemo(() => {
        console.log("function called")
        let i = 0;
        while (i < 300000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne])

    return (
        <div className="flex flex-col gap-5 h-screen items-center justify-center">
            <button onClick={() => IncrementOne()}>Counter - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={() => IncrementTwo()}>Counter - {counterTwo}</button>
        </div >
    )
}

export default Memo