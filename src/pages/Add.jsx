
function Add(props) {
    const a = Number(props.a)
    const b = Number(props.b)
    const c = Number(props.c)
    const sum = a + b + c


    return(
        <>
            <h1>
                The sum of these numbers {a},{b} and {c} is = {sum}
            </h1>
        
        </>
    )
}

export default Add


// <Add a = "3" b = "4" c = "11" />


// import {Add} from "./add.jsx"
