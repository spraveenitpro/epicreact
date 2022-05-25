import { useState } from 'react'

const ANIMALS = ['birds', 'cat', 'dog', 'reptile', 'worm']
const SearchParams = () => {
    //const location = 'Seattle WA'
    const [location, setLocation] = useState('Seattle WA')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const breeds = ['poodle', 'lab']
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
        </div>
    )
}

export default SearchParams
