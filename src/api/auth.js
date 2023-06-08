
// save all user
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
        role: "Student"
    }

    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {console.log(data);})
}

// Get all rooms
export const getAllUsers = async () => {
    const response = await fetch('http://localhost:5000/users')
    const data = await response.json()
    return data
  }
  