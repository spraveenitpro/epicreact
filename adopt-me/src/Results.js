import React from 'react'
import Pet from './Pet'

function Results({ pets }) {
    return (
        <div>
            {!pets.length ? (
                <h1>No Pets found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        key={pet.id}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    )
}

export default Results
