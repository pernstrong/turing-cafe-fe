import React from 'react'
import ReservationCard from "../ReservationCard/ReservationCard"

const ReservationsContainer = ({ reservations }) => {
    const allReservationCards = reservations.map(reservation => {
        return <ReservationCard {...reservation} />
    })

    return (
        <section className="reservations-container">
            {allReservationCards}
        </section>
    )
}

export default ReservationsContainer