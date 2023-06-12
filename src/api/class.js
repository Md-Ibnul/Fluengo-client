// Add a class
export const addClass = async classData => {
    const response = await fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data;
  }

  // Get all classes to admin
export const getAllClasses = async () => {
  const response = await fetch('https://fluengo-server-oq1dkczx0-md-ibnul.vercel.app/classes')
  const data = await response.json()
  return data
}

// Get enroll classes

export const getEnrollClasses = async email => {
  const response = await fetch(`http://localhost:5000/payments/${email}`)
  const enroll = await response.json()
    return enroll;
}
