// Add a class
export const addClass = async classData => {
    const response = await fetch('http://localhost:5000/classes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  }

  // Get all classes to admin
export const getAllClasses = async () => {
  const response = await fetch('http://localhost:5000/classes')
  const data = await response.json()
  return data
}
