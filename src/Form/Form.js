import React from 'react'
import './Form.css'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
            error: false
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleClick = event => {
        event.preventDefault()
        if (this.checkInputs()) {
            this.props.addReservation(this.state)
            this.clearInputs()
        } else {
            this.setState({ error: true })
        }
    }

    checkInputs = () => {
        if (this.state.name !== '' && this.state.date !== '' && this.state.time !== '' && this.state.number !== '') {
            return true
        }
        return false
    }

    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: '',
            error: false
        })
    }

// stick with form or change to section with trouble! preventdefualt??
    render() {

        return(
            <form>
                <input 
                    name="name"
                    type="text"
                    placeholder="your name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input 
                    name="date"
                    type="date"
                    placeholder="date of reservation"
                    value={this.state.date}
                    onChange={this.handleChange}
                />
                <input 
                    name="time"
                    type="text"
                    placeholder="time of reservation"
                    value={this.state.time}
                    onChange={this.handleChange}
                />
                <input 
                    name="number"
                    type="number"
                    placeholder="number of guests"
                    value={this.state.number}
                    onChange={this.handleChange}
                />

                <button onClick={(event) => this.handleClick(event)}>Make Reservation</button>
                {this.state.error && <p className="error">Please fill in all inputs...</p>}


            </form>
        )
    }
}

export default Form