import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
import Comedyshow1 from "../Assets/Comedyshow1.JPG";
import Horseride from "../Assets/Horseriding.JPG";
import Sidebar from './Sidebar';
import Cardsection from './Cardsection';
import Events from './Events';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useSearchContext } from '../Context/SearchContext';
import Qawalli_baner from '../Assets/Qawalli_baner.JPG';

const Home = ({ cart, setCart }) => {
  const [selectedcategory, setSelectedCategory] = useState(null);

  const { searchTerm, setSearchTerm } = useSearchContext();


  const [filters, setFilters] = useState({
    category: '',
    charges: '',
    eventtype: '',
  });

  const navigate = useNavigate();

  const addToCart = (event) => {
    setCart([...cart, event]);
  };

  const items = [
    {
      description: "❛❛ Experience endless entertainment at your convenience!!, Unleash the joy of live entertainment, hassle-free ❜❜.",
      image: Comedyshow1
    },
    {
      description: "❛❛ Simplify ticket booking for all your favorite events. Book Smart, Enjoy More  ❜❜",
      image: Horseride
    },

    {
      description: "❛❛ Simplify ticket booking for all your favorite events. Book Smart, Enjoy More  ❜❜",
      image: Qawalli_baner 
    }

  ];

  const Item = ({ item }) => (
    <Paper>
      <img src={item.image} alt={item.name} style={{ height:'63vh', width:'100%' }} />
      <br/>
      <br/>
      <br/>
      <Typography variant="body1" sx={{ fontStyle: 'italic', marginLeft:'17rem' }}><strong>{item.description}</strong></Typography>
      <br/>
    </Paper>
  );


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({...filters, [name]: value });
    if (name === 'category') {
      setSelectedCategory(value);
    }
  };

  const filteredItems = Events.filter((product) => {
    
    if (filters.category && product.category !== filters.category) return false;
    if (filters.charges && product.charges > parseFloat(filters.charges)) return false; // Ensure comparison is correct
    if (filters.eventtype && product.eventtype !== filters.eventtype) return false;

    return true;
  });

  return (
    <>
      <Carousel>
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>

      <div className="container-side">
        <Sidebar className="sidebar" handleChange={handleChange}/>
        <div className="content-side" >
          <h1 style={{ marginLeft: '11rem', marginBottom:'8px'}} >Welcome to the Events Portal</h1>
          
          <Cardsection events={filteredItems} addToCart={addToCart} navigate={navigate} selectedcategory={selectedcategory} />
        </div>
      </div>
    </>
  );
};

export default Home;