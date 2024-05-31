import React ,{useState}from 'react';
import Category from './Category';
import Price from './Price';
import Evettype from './Eventtype';
import './style.css';

function Sidebar({handleChange}) {

  const [filters, setFilters] = useState({
    category: '',
    charges: '',
    eventtype: '',
  });

  return (
    <div className="category-box" style={{ width: '25vw', backgroundColor: '#e1edf0', border: '1px solid #e1edf0'}}>
      <Category style={{marginTop:'8px'}} filters={filters} setFilters={setFilters} handleChange={handleChange} />
      <br />
   
      <Price filters={filters} setFilters={setFilters} handleChange={handleChange} />
      <br />
      <Evettype filters={filters} setFilters={setFilters} handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;