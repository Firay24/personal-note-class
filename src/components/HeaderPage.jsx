import React from 'react'
import { Link } from 'react-router-dom'
import { TiClipboard } from "react-icons/ti";
import { TbPencilPlus } from "react-icons/tb";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";

function HeaderPage() {
  return (
    <nav className='header-note'>
      <div className='header-note__logo'>
        <a href=""><TiClipboard /></a>
        <h2>Personal Notes</h2>
      </div>
      <div className='header-note__navigation'>
        <Link to="/createNote"><TbPencilPlus/></Link>
        <Link to="/"><BiHomeAlt/></Link>
        <Link to="/archieve"><RiInboxArchiveLine /></Link>
      </div>
    </nav>
  )
}

export default HeaderPage
