import React from 'react';

const Filters = ({ eventTypes, handleEventTypeChange }) => {
  return (
    <div>
      <h2>Filter Events</h2>
      <div>
        <h3>Event Types</h3>
        {eventTypes.map((type, index) => (
          <div key={index}>
            <input type="checkbox" value={type} onChange={handleEventTypeChange} />
            <label>{type}</label>
          </div>
           
        ))}
      </div>
    </div>
  );
};

export default Filters;
