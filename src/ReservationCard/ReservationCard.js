import React from 'react'
import './ReservationCard.css'

const ReservationCard = props => {
    const { date, id, name, number, time } = props
    return (
        <section className="reservation-card">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time} pm</p>
            <p>Number of guests: {number}</p>
            <button onClick={() => props.cancelReservation(id)}>Cancel Reservation</button>
        </section>
    )
}

export default ReservationCard