import './Card.css'

function Card(props, desc) {

    return (
        <>
            <div className='card-container'>
                <div>
                    <img src={props.image} alt="user_image" height={"300px"} width={"auto"} />
                </div>
                <h1>{props.name}</h1>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Card