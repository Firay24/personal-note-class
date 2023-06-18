import React, { Component } from 'react'
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/local-data'
import NoteList from '../components/NoteList';
import NotFoundNote from '../components/NotFoundNote';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';

function ArchievePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
        setSearchParams({ keyword })
    }

    return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

export class ArchivePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onUnarchieveHandler = this.onUnarchieveHandler.bind(this)
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    onDeleteHandler(id) {
        if (confirm('Apakah Anda yakin menghapus catatan ini?')) {
            deleteNote(id);
            this.setState(() => {
              return {
                notes: getArchivedNotes()
              }
            });
        }
    }

    onUnarchieveHandler(id) {
        unarchiveNote(id)

        this.setState(() => {
            return {
                notes: getArchivedNotes(),
            }
        })
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
            main = <NoteList notes={notes} onDelete={this.onDeleteHandler} onUnarchieve={this.onUnarchieveHandler} />
        }

        return (
        <div className='main-ArchievePage'>
            <div className='head-archievePage'>
                <h2>Daftar Arsipan</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            </div>
            {main}
        </div>
        )
    }
}

export default ArchievePageWrapper;
