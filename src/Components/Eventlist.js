import React from react;
import { useSearchContext } from '../Context/SearchContext';
import Events from './Events';

function EventsList() {
  const { filters } = useSearchContext();

  const filterEvents = () => {
    return Events.filter(event => {
      const matchesCategory = filters.category === '' || event.title.toLowerCase().includes(filters.category.toLowerCase());
      const matchesPrice = filters.price === '' || checkPrice(event.charges, filters.price);
      const matchesEventType = filters.eventType === '' || event.type === filters.eventType;

      return matchesCategory && matchesPrice && matchesEventType;
    });
  };

  const checkPrice = (price, range) => {
    const priceValue = parseInt(price.replace(/\D/g, ''));
    if (range === '199-299') return priceValue >= 199 && priceValue <= 299;
    if (range === '299-599') return priceValue >= 299 && priceValue <= 599;
    if (range === '599-799') return priceValue >= 599 && priceValue <= 799;
    if (range === 'above-999') return priceValue > 999;
    return true;
  };

  const filteredEvents = filterEvents();

  return (
    <div className="events-list">
      {filteredEvents.map(event => (
        <div key={event.id} className="event-card">
          <img src={event.img} alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.venue}</p>
          <p>{event.performer}</p>
          <p>{event.charges}</p>
        </div>
      ))}
    </div>
  );
}

export default EventsList;
