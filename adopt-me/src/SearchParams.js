import { useState } from 'react'

const SearchParams = () => {
    const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']
    const [animal, setAnimal] = useState('')
    const [location, setLocation] = useState('Seattle WA')
    const [breed, setBreed] = useState('')
    const breeds = []
    return (
        <div className="search-params">
            <form action="">
                <label htmlFor="location">
                    Location
                    <input
                        type="text"
                        id="location"
                        value={location}
                        placeholder="Location.."
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
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
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
