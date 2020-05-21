import React from "react";
import ReservationCard from "./ReservationCard";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('ReservationCard', () => {

    it('should display the details of a reservation', () => {
        const reservation1 = {date: "5/21", id: 99, name: "Ruth Bader Ginsburg", number: 11, time: "4:00"}
        const { getByText } = render(<ReservationCard {...reservation1}/>)

        expect(getByText('5/21')).toBeInTheDocument()
        expect(getByText('Ruth Bader Ginsburg')).toBeInTheDocument()
    })
})