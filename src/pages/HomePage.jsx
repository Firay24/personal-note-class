import React, { Component } from 'react'
import NoteList from '../components/NoteList'
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data'
import NotFoundNote from '../components/NotFoundNote'
import SearchBar from '../components/SearchBar'
import { useSearchParams } from 'react-router-dom'

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  function changeSearchParams(keyword) {
    setSearchParams({ keyword })
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchieveHandler = this.onArchieveHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
  }

  onDeleteHandler(id) {
    if (confirm('Apakah Anda yakin menghapus catatan ini?')) {
      deleteNote(id);
      this.setState(() => {
        return {
          notes: getActiveNotes()
        }
      });
    }
  }

  onArchieveHandler(id) {
    archiveNote(id);

    this.setState(() => {
      return {
        notes: getActiveNotes()
      }
    });
  }
  
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    })
    this.props.keywordChange(keyword)
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      )
    })

    let main 
    if(notes.length === 0) {
      main = <NotFoundNote />
    } else {
      main = <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchieve={this.onArchieveHandler} />
    }

    return (
      <div className='main-homePage'>
        <div className='head-homePage'>
          <h2>Daftar Catatan</h2>
          <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        </div>
        {main}
      </div>
    )
  }
}

export default HomePageWrapper
