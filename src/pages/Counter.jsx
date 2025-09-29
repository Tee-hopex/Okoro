import {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    // function reset() {
    //     setCount(0);
    // }

    return (
        <>
            <section>
                <button onClick={increment}>increment</button>
                <h1>{count}</h1>
                <button onClick={decrement}>decrement</button>
                <button onClick={() => {setCount(0)}}>reset</button>
            </section>
        </>
    )
}


export default Counter;