
import {useState, useEffect} from 'react'
import './Form.css'

function Form() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        localStorage.setItem("error", error)
    }, [error])
 
    useEffect(() => {
        const localValue = localStorage.getItem("error")
        console.log(localValue)
    }, [error])

    

    function handleNameChange(event) {
        setName(event.target.value)
        // console.log(name)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
        // console.log(password)

        if (password.length < 7) {
            setError(true)
        } else {setError(false)}
    }

    function handleSubmit(event) {
        event.preventDefault()

        const formData = {
            name : name,
            password: password
        }

        console.log(formData)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor='name' >Name</label>
            <input onChange={handleNameChange} type="text" id="name" name="name" value={name}  />
            <label htmlFor="password">Password</label>
            <input onChange={handlePasswordChange} type="password" id="password" name="password" value={password}  />
            {error ? 
            <p style={{color: "red", marginTop: -8.5}}>not strong enough</p>
            : 
            <p style={{color: "green", marginTop: -8.5}}>strong password</p>
            }

            <button type='submit'>Submit</button>

        </form>
        </>
    )
}

export default Form
