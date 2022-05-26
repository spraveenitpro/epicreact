import { useState, useEffect } from 'react'
import Pet from './Pet'

const ANIMALS = ['birds', 'cat', 'dog', 'reptile', 'worm']
const SearchParams = () => {
    //const location = 'Seattle WA'
    const [location, setLocation] = useState('Seattle WA')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const breeds = ['poodle', 'lab']

    const [pets, setPets] = useState([])
    useEffect(() => {
        requestPets()
    }, []) //eslint-disable-line react-hooks/exhaustive-deps

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animals=${animal}&location=${location}&breed=${breed}`
        )
        const json = await res.json()
        setPets(json.pets)
        console.log(json)
    }

    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location {location}
                    <input
                        id="location"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value)
                            setBreed('')
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value)
                            setBreed('')
                        }}
                    >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal} value={animal}>
                                {animal}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="animal"
                        value={breed}
                        onChange={(e) => {
                            setBreed(e.target.value)
                        }}
                        onBlur={(e) => {
                            setBreed(e.target.value)
                        }}
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            {pets.map((pet) => (
                <Pet
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    key={pet.id}
                    image={pet.images[0]}
                />
            ))}
        </div>
    )
}

export default SearchParams
