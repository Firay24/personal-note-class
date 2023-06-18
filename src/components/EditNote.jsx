import React, { Component } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import parse from 'html-react-parser';
import PropTypes from 'prop-types'

export class EditNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            title: props.title,
            body: props.body,
            inputText: props.body,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this),
        this.onInputHandler = this.onInputHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onInputHandler(event) {
        const body = parse(event.target.innerHTML)
        this.setState(() => {
            return {
                body: body,
                inputText: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault()
        this.props.editNote(this.state)

        this.setState(() => {
            return {
                title: '',
                body: '',
                inputText: '',
            }
        })
    }

    render() {
        return (
            <form className='note-edit' onSubmit={this.onSubmitEventHandler}>
                <input className='note-edit__title' onChange={this.onTitleChangeEventHandler} value={this.state.title} type="text" />
                <span className='note-edit__body textarea' role='textbox' contentEditable onChange={this.onInputHandler}>{this.state.inputText}</span>
                <button className='note-edit__button' onClick={this.onSubmitButton}><BsFillCheckCircleFill /></button>
            </form>
        )
    }
}

EditNote.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    editNote: PropTypes.func.isRequired,
}

export default EditNote
