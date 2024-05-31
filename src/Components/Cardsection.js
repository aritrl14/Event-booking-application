// CardSection.js
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useSearchContext } from '../Context/SearchContext';

const CardSection = ({ events, addToCart }) => {
  const { searchTerm } = useSearchContext();
  const navigate = useNavigate();

  const filteredEvents = events.filter((event) => {
    if (searchTerm &&!event.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="container">
      <div className="card-section">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="card-item" style={{ width: '30%' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                width="40%"
                image={event.img}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Venue: {event.venue}</strong>
                </Typography>
                {event.performer && (
                  <Typography variant="body2" color="text.secondary">
                    <strong>Performer: {event.performer}</strong>
                  </Typography>
                )}
                {event.charges && (
                  <Typography variant="body2" color="text.secondary">
                    <strong>Charges: {event.charges} Onwards</strong>
                  </Typography>
                )}
                <button
                  className="card-button"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    marginTop: '8px',
                    borderRadius: '3px',
                    fontSize: '15px',
                    padding: '4px',
                  }}
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  View Details
                </button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
