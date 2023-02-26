import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import "./Navbar.scss"
// import Autocomplete from '@mui/material/Autocomplete';
// import Data from './Data.json'
import { Card, colors, Input } from '@mui/material';
import axios from "axios"
// import { match } from 'assert';

const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    if(searchTerm.length>2){
      fetch(`https://balldontlie.io/api/v1/players/237/search?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        console.log(searchTerm);
        });
    }else{
      setResults([]);
    }
  }
    
  return (

    
    <nav className='header'>

      <div className='logoname'>
        <h className="finallogo">The-Stream</h>
      </div>

      <div className="line">
        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/Movies">Movies</Link></li>
          <li><Link to="/TvShows">Tv Show</Link></li>
          <li><Link to="/Anime">Anime</Link></li>
          <li><Link to="/watch_list">Watch List</Link></li>
        </ul>
      </div>

      <div class='searchcontainer' >

         <Input
          className='searchfield'
          placeholder='search...'
          style={{ width: 200, color: 'white', marginRight: 100 }}
          value={searchTerm}
          onChange={handleSearch}
          // onChange={e => onChangeHangle(e.target.value)}
          // value={text}
        /> 
         
         <ul>
        {results.map(item => (
          <li key={item.id}>{item.city}</li>
        ))}
      </ul>
             
        <div >

          {/* {search?.map((el, i) =>
            <div key={i}>
              <span>{el.name}</span>
            </div>
          )}
          */}
        </div>

      </div>
    </nav>
  )
}
export default Navbar;
