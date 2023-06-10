// Add Selected Classes
export const addSelectClass = async selectClass => {
    const response = await fetch('http://localhost:5000/classes/selected', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(selectClass)
    })
    const data = await response.json()
    return data;
}

// update class place
export const updatePlace = async (email, place) => {
    const response = await fetch(`http://localhost:5000/classes/selected/${email}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
    body: JSON.stringify({place})
    })
    const data = await response.json()
    return data;
}

// get all selected class for user by email
export const getSelectedClass = async email => {
    const response = await fetch(`http://localhost:5000/classes/selected?email=${email}`)
    const select = await response.json()
    return select;
}

// Delete a booking room
export const deleteSelectClass = async id => {
    const response = await fetch(`http://localhost:5000/classes/selected/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}