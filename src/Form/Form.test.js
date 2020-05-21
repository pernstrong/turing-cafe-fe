import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('Form', () => {

    it('should render a form with inputs and a button', () => {

        const { getByText, getByPlaceholderText } = render(<Form />)

        expect(getByPlaceholderText('your name')).toBeInTheDocument()
        expect(getByPlaceholderText('time of reservation')).toBeInTheDocument()
        expect(getByText('Make Reservation')).toBeInTheDocument()
    })

    it('should display the info entered in the input area as the user types into that input', () => {
        const { getByDisplayValue, getByPlaceholderText } = render(<Form />)
        const nameInput = getByPlaceholderText('your name')
        const numberInput = getByPlaceholderText('number of guests')

        fireEvent.change(nameInput, {target: {value: 'Tonya Harding' }})
        fireEvent.change(numberInput, {target: {value: 1 }})

        expect(getByDisplayValue('Tonya Harding')).toBeInTheDocument()
        expect(getByDisplayValue('1')).toBeInTheDocument()

    })
})
