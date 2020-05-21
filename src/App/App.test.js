import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('App', () => {
    
    it('should allow a user to create a new reservation and then display the correct info in the reservations area', () => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const nameInput = getByPlaceholderText('your name')
        const dateInput = getByPlaceholderText('date of reservation')
        const timeInput = getByPlaceholderText('time of reservation')
        const numberInput = getByPlaceholderText('number of guests')
        const makeReservationButton = getByText('Make Reservation')

        fireEvent.change(nameInput, {target: {value: 'Tonya Harding' }})
        fireEvent.change(dateInput, {target: {value: '2020-05-22' }})
        fireEvent.change(timeInput, {target: {value: '6:00' }})
        fireEvent.change(numberInput, {target: {value: '1' }})
        fireEvent.click(makeReservationButton)

        expect(getByText('Tonya Harding')).toBeInTheDocument()
        expect(getByText('2020-05-22')).toBeInTheDocument()
    })

})
