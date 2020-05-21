import React from 'react'
import './ReservationsContainer.css'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationsContainer = props => {
    const { reservations } = props
    
    const allReservationCards = reservations.map(reservation => {
        return <ReservationCard {...reservation} key={reservation.id} cancelReservation={props.cancelReservation} />
    })

    return (
        <section className="reservations-container">
            {allReservationCards}
        </section>
    )
}

export default ReservationsContainer