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

export const deleteReservation = id => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
        method: 'DELETE'
      })
}