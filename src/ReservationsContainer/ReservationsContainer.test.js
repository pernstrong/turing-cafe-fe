import React from "react";
import ReservationsContainer from "./ReservationsContainer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";


describe('ReservationsContainer', () => {

    
    it('should display some reservations', () => {
        const reservation1 = {date: "5/21", id: 99, name: "Ruth Bader Ginsburg", number: 11, time: "4:00"}
        const reservation2 = {date: "5/22", id: 1, name: "Michelle Obama", number: 1, time: "8:00"}
        const { getByText } = render(<ReservationsContainer reservations={[reservation1, reservation2]}/>)
        
        expect(getByText('Ruth Bader Ginsburg')).toBeInTheDocument()
        expect(getByText('5/21')).toBeInTheDocument()
        expect(getByText('Michelle Obama')).toBeInTheDocument()
        expect(getByText('5/22')).toBeInTheDocument()

    })
})