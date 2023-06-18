import React from 'react'
import PropTypes from 'prop-types'
import EditButton from './EditButton'

function NoteDetail({ id, title, body, createdAt, imageUrl, onEdit }) {
  return (
    <div className='note-detail'>
      <img className='note-detail__img' src={imageUrl} alt="" />
      <h2 className='note-detail__title'>{title}</h2>
      <p className='note-detail__createdAt'>{createdAt}</p>
      <p className='note-detail__body'>{body}</p>
      <span><EditButton id={id} onEdit={onEdit} /></span>
    </div>
  )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default NoteDetail;

