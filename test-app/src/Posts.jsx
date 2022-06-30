import React from 'react'
import { useState, useEffect } from 'react'

function Posts() {
    const [users, setUsers] = useState()
    const getApidata = async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        setUsers(data)
    }
    useEffect(() => {
        getApidata()
    }, [])
    return (
        <>
            {users &&
                users.map((user) => (
                    <div key={user.id} className="title">
                        {user.name}
                    </div>
                ))}
        </>
    )
}

export default Posts
