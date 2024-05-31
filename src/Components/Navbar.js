import React from 'react';
import './style.css';
import { useSearchContext } from '../Context/SearchContext';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='main' >
      <div className='navbar' >
        <ul >
          <li>
            <strong style={{ fontSize: '1.5rem' }}>K</strong>olkataFest
          </li>
          <li>
         <li style={{marginTop:'7px', fontFamily:'Conso Regular', fontSize:'18px'}}> <Link to="/" style={{textDecoration:'none',color:'black'}}>Home</Link></li>
            <div className="search-area">
              <input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <SearchIcon />
            </div>
          </li>
          <div className="sign-in">
          <li style={{marginTop:'1rem'}}>
              <Link to="/cart" style={{textDecoration:'none',color:'black',fontFamily:'Conso Regular', fontSize:'18px'}}>Your Bookings</Link>
              
            </li>
          </div>
        </ul>
      </div>
    </div>



  );
};

export default Navbar;