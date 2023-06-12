
// save all user
export const saveUser = user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
    }

    fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {console.log(data);})
}

// Get all users
export const getAllUsers = async () => {
    const response = await fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/users')
    const data = await response.json()
    return data
  }
  
  // Get role
export const getRole = async email => {
    const response = await fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/users/${email}`)
    const user = await response.json()
    return user?.role
  }