import React from 'react'
import PropTypes from 'prop-types'

function NoteItemImage({ imageUrl }) {
  return (
    <div className='note-item__image'>
      <img src={imageUrl} alt="note avatar" />
    </div>
  )
}

NoteItemImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}

export default NoteItemImage;

