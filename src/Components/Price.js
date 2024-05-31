import React from 'react';
import Input from './Input';

const Price = ({ handleChange }) => {
  return (
    <div>
      <h2 className="cat">Price</h2>
      <div>
        <label className="sidebar-label-container" style={{fontFamily:'Noteworthy', fontSize:'19px'}}>
          <input onChange={handleChange} type="radio" value="" name="charges" />
   All
        </label>
        <Input 
          value={399}
          title="₹199-₹399" 
          name="charges" 
          onChange={handleChange} 
        />
        <Input 
          value={699} 
          title="₹399-₹699" 
          name="charges" 
          onChange={handleChange} 
        />
        <Input 
          value={999} 
          title="₹699-₹999 and above" 
          name="charges" 
          onChange={handleChange} 
        />
      </div>
    </div>
  );
};

export default Price;
