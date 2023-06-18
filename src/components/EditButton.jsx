import React from 'react'
import PropTypes from 'prop-types'
import { BiEdit } from "react-icons/bi";
import { Link } from 'react-router-dom';

function EditButton({ id, onEdit }) {
  return (
    <Link className='note-detail__edit' to={`/editNote/${id}`}>
      <button onClick={() => onEdit(id)}><BiEdit /></button>
    </Link>
  )
}

EditButton.propTypes = {
    id: PropTypes.string.isRequired,
    onEdit: PropTypes.string.isRequired,
}

export default EditButton

