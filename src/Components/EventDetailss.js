import './EventDetails.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetailss = ({ events = [], addToCart }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Find the event by its ID
  const event = events.find(event => event.id.toString() === eventId);

  const handleAddToCart = () => {
    addToCart(event);
    navigate('/cart');
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details">
      <img src={event.img} alt={event.title} />
      <h2>{event.title}</h2>
      <p style={{
  height: '3vh',
  width: '50%',
  fontSize:'17px',
 fontFamily:'MorinaRegular',
}}>{event.description}</p>
     <br/>
     <br/>
     <br/>

     <div>
     <p>
  <strong>Category:</strong> {event.category}
</p>
     
<p>
  <strong>Charges:</strong> {event.charges}
</p>
     

<p>
  <strong>Event Type:</strong> {event.eventtype}
</p>
     
      <button onClick={handleAddToCart}>Add to Cart</button>

     </div>
 
    </div>
  );
};

export default EventDetailss;