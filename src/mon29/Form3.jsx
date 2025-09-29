
import {useState} from 'react'
import './Form.css'

function Form3() {

    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        
        // const form = {
        //     name : formData.get('name'),
        //     password : formData.get('password'),
        //     age : formData.get('age'),
        // }

        const object = Object.fromEntries(formData.entries())

        const form = JSON.stringify(object)


        // Object.fromEntries(formData.entries())
        // JSON.stringify()

        form.password && form.password.length < 8 ? setError(true): setError(false)

        console.log(form)

       
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            
            <label htmlFor='name' >Name</label>
            <input  type="text" id="name" name="name"  />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"   />
            {error ? 
            <p style={{color: "red", marginTop: -8.5}}>not strong enough</p>
            : 
            <p style={{color: "green", marginTop: -8.5}}>strong password</p>
            }


            <label htmlFor="age">Age</label>
            <input type="age" id="age" name="age"   />

            <button type='submit'>Submit</button>

        </form>
        </>
    )
}

export default Form3
