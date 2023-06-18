import React, { Component } from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs"
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

export class CreateNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            inputText: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onInputHandler = this.onInputHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState (() => {
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
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                body: '',
                title: '',
                inputText: '',
            }
        })
    }

    render() {
        return (
            <form className='note-create' onSubmit={this.onSubmitEventHandler}>
                <input className='note-create__title' value={this.state.title} placeholder='Judul catatan ...' type="text" onChange={this.onTitleChangeEventHandler} />
                <span className='note-create__body textarea' role='textbox' contentEditable onInput={this.onInputHandler}>{this.state.inputText}</span>
                <button className='note-create__button' onClick={this.onSubmitButton}><BsFillCheckCircleFill /></button>
            </form>
        )
    }
}

CreateNote.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default CreateNote;
