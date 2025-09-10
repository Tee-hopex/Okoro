import './Card.css'

function Card({name, image, desc}) {

    return (
        <>
            <div className='card-container'>
                <div>
                    <img src={image} alt="user_image" height={"300px"} width={"auto"} />
                </div>
                <h1>{name}</h1>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Card