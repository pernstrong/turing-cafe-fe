import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/";
import App from "../App/App";
import { getReservations } from "./apiCalls";

jest.mock("./apiCalls.js")

describe('apiCalls', () => {
    it('should fetch reservations when App loads', async () => {
        const mockReservations = [{date: "5/21", id: 99, name: "Ruth Bader Ginsburg", number: 11, time: "4:00"}, {date: "5/22", id: 1, name: "Michelle Obama", number: 1, time: "8:00"}]

        getReservations.mockResolvedValueOnce(mockReservations)

        const { getByText } = render(<App />)

        const rbg = await waitFor(() => getByText('Ruth Bader Ginsburg'))
        const michelle = await waitFor(() => getByText('Michelle Obama'))
        expect(rbg).toBeInTheDocument()
        expect(michelle).toBeInTheDocument()
    })


    // hmmm how would i test a post? I could go through and enter a new reso like what was done in App for the integration test...but then would have to refresh the page and see if it reloads...not sure how that would work with mocked data??

    // similar with deleting a reservation...we would need to actually use the api wouldn't we??
})