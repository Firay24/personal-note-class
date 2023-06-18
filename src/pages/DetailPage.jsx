import React, { Component } from 'react'
import { getNote } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />
};

export class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    }
  }
  render() {
    return (
      <div>
        <NoteDetail {...this.state.note} />
      </div>
    )
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired
}

export default DetailPageWrapper;
