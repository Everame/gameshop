import React, { useMemo, useState } from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuBtn from '../../ui/MenuBtn/MenuBtn'
import { Link } from 'react-router-dom'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    useMemo(() => {
        console.log('dd')
    }, [searchQuery])
  return (
    <header>
        <Link to="/" id="logo">
            <h1>G<span className="green">SH</span></h1>
        </Link>
        <div id="searchField">
            <input type="text" id="search" placeholder='Search' value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}}/>
            <FontAwesomeIcon icon={faSearch} id='searchIcon' className='icon'/>
            <FontAwesomeIcon icon={faTimes} id='clearIcon' style={{display: searchQuery != "" ? "flex" : "none" }} onClick={() => {setSearchQuery("")}}/>
        </div>
        <div id="btnMenu">
            <MenuBtn text="Genres" link="/genres"/>
            <MenuBtn text="Developers" link="/developers"/>
        </div>
    </header>
  )
}
