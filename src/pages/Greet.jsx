import {useState} from "react";

function Greet() {

    const [name, setName] = useState("User");
    const [color, setColor] = useState("blue");

    function handleInput(event) {
        // const name = event.target.name 
        const value = event.target.value

        console.log({name: value});


        setName(event.target.value);
    }

    function handleclick() {
        if(color === "red") {
            setColor("blue");
        } else {
            setColor("red");
        }
        setName("Tolu")
    }


    return (
        <>
            <label htmlFor="name">Name:    </label>
            <input onChange={handleInput} name = "Name" type="text" id = "name" />

            <button style={{backgroundColor: color}} onClick={handleclick}>turn red</button>

            <h1>Hello {name?name: "User"}</h1>

            <h2>Welcome to my Website</h2>
        </>
    )
}

export default Greet;