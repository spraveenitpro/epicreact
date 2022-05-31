import { useParams } from 'react-router-dom'

const Details = () => {
    const { id } = useParams()
    return <h2> {id} Hi lol testing!!</h2>
}

export default Details
