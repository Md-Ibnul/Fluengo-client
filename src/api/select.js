// Add Selected Classes
export const addSelectClass = async selectClass => {
    const response = await fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/selected', {
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
    const response = await fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/selected/${email}`, {
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
    const response = await fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/selected?email=${email}`)
    const select = await response.json()
    return select;
}

// Delete a booking room
export const deleteSelectClass = async id => {
    const response = await fetch(`https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes/selected/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json()
    return data;
}