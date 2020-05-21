export const getReservations = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations')
    const reservations = await response.json()
    return reservations
}

export const postReservation = (name, date, time, number) => {
   return fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        date,
        time,
        number
      })
    })
}

// the delete works but only after the page is refreshed, if you enter a reso and immediately try to cancel it give s a 404 error...I wonder why that is? 
export const deleteReservation = id => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
      })
}