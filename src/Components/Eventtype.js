import React from 'react';
import Input from './Input';

const Eventtype = ({ handleChange }) => {
  return (
    <div>
      <h2 className="cat">Event Type</h2>
      <div>
        <label className="sidebar-label-container" style={{fontFamily:'Noteworthy', fontSize:'19px'}}>
          <input onChange={handleChange} type="radio" value="" name="eventtype" />
         All
        </label>
        <Input 
          value="online" 
          title="Online Event" 
          name="eventtype" 
          onChange={handleChange} 
        />
        <Input 
          value="Ofline" 
          title="Offline Event" 
          name="eventtype" 
          onChange={handleChange} 
        />
      </div>
    </div>
  );
};

export default Eventtype;
