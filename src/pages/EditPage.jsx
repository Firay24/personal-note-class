import React, { Component } from 'react'
import EditNote from '../components/EditNote'
import { getNote, editNote } from '../utils/local-data'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function EditPageWraper() {
    const {id} = useParams()
    return <EditPage id={id} />
}

export class EditPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }

        this.onEditNoteHandler = this.onEditNoteHandler.bind(this)
    }

    onEditNoteHandler(id, title, body) {
        editNote(id, title, body)
        this.setState(() => {
            return {
                note: getNote(id)
            }
        })
        alert('Selamat catatan berhasil diedit')
    }

    render() {
        return (
        <div className='main-editPage'>
            <h2>Edit Catatan</h2>
            <EditNote {...this.state.note} editNote={this.onEditNoteHandler} />
        </div>
        )
    }
}

EditPage.propTypes = {
    id: PropTypes.string.isRequired
}

export default EditPageWraper;
