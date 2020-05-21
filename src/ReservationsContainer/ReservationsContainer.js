import React from 'react'
import './ReservationsContainer.css'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationsContainer = ({ reservations }) => {
    const allReservationCards = reservations.map(reservation => {
        return <ReservationCard {...reservation} key={reservation.id} />
    })

    return (
        <section className="reservations-container">
            {allReservationCards}
        </section>
    )
}

export default ReservationsContainer