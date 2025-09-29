import UserComponent from "./UserComponent"
import GuestComponent from "./GuestComponent"

import "./MyComponent.css"

import {useState} from 'react'

function MyComponent() {
    // if (isOnline) {
    //     return (<UserComponent />)
    // } else {
    //     return (<GuestComponent />)
    // }

    const [isOnline, setIsOnline] = useState(false)

    function handleToggle() {
        setIsOnline(!isOnline)
    }

    let students = ["Alice", "Bob", "Charlie", "David"]

    const studentslist = students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))

    return(
        <>
            {isOnline ? <UserComponent /> : <GuestComponent />}
            <button onClick={handleToggle}>{isOnline ? "online": "offline"}</button>


            <div>
                {studentslist}
            </div>


        </>
    )

}

export default MyComponent