import React from 'react';
import { Link } from 'react-router-dom';
// import { SearchIcon } from "react-icons/im";
// import  from '@mui/icons-material/Search';
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.scss"
const Navbar = () => {
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
          <SearchIcon className='serchicon' />
          <input className='searchfield' placeholder='search' type='text'></input>
        </div>
    </nav>
  )
}
export default Navbar;
