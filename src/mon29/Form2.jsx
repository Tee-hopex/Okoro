
import {useState} from 'react'
import './Form.css'

function Form2() {
    const [form, setForm] = useState({})
    const [error, setError] = useState(false)

    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        form[name] = value  

        form.password && form.password.length < 8 ? setError(true): setError(false)
   
        // if (form.password && form.password.length < 8) {
        //     setError(true)
        // } else {setError(false)}
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(form)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor='name' >Name</label>
            <input onChange={handleChange} type="text" id="name" name="name"  />
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id="password" name="password"   />
            {error ? 
            <p style={{color: "red", marginTop: -8.5}}>not strong enough</p>
            : 
            <p style={{color: "green", marginTop: -8.5}}>strong password</p>
            }

            <label htmlFor="age">Age</label>
            <input onChange={handleChange} type="age" id="age" name="age"   />

            <button type='submit'>Submit</button>

        </form>
        </>
    )
}

export default Form2
