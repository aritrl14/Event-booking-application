import React from 'react';
import Input from './Input';

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="cat">Category</h2>
      <div>
        <label className="sidebar-label-container" style={{fontFamily:'Noteworthy', fontSize:'19px'}}>
          <input onChange={handleChange} type="radio" value="" name="category"  />
         All
        </label>
        <Input 
          value="Comedyshow" 
          title="Comedy Show" 
          name="category" 
          onChange={handleChange} 
        />
        <Input 
          value="Musicalevent" 
          title="Music Events" 
          name="category" 
          onChange={handleChange} 
        />
        <Input 
          value="Sportsevent" 
          title="Sports Events" 
          name="category" 
          onChange={handleChange} 
        />
      </div>
    </div>
  );
};

export default Category;
