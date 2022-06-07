import React from 'react'
import { Link } from 'react-router-dom'

const Pet = ({ name, animal, breed, images, location, id }) => {
    let hero = 'http://pet-images.dev-apis.com/pets/none.jpg'
    if (images.length) {
        hero = images[0]
    }
    return (
        <Link to={`/details/${id}`} className="pet" state={{ name }}>
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>
                    {animal.charAt(0).toUpperCase() + animal.slice(1)} - {breed}{' '}
                    - {location}
                </h2>
            </div>
        </Link>
    )
}

export default Pet
