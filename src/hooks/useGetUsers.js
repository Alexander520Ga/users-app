import { useEffect, useState } from "react"

const useGetUsers = () => {
  const [users, setUsers] = useState([])
    const getUsers = async() => {
        const req = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await req.json()
        setUsers(data)
        return data
    }
    useEffect(() => {
        getUsers()
    }, [])
    return {
        users,
        setUsers,
        getUsers
    }

}

export default useGetUsers