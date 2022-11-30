const getUserById = (users, id) => {
    console.log('info', users, id)
    return users.find((user) => user.id == id)
}

export default getUserById