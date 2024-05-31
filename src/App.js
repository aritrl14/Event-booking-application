import React, { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar'; import Home from './Components/Home'; 
import Cart from './Components/Cart'; import EventDetailss from './Components/EventDetailss'; 
import events from './Components/Events'; 


const App = () => { const [cart, setCart] = useState([]);

const addToCart = (event) => { setCart([...cart, event]); };

const onRemoveEvent = (eventId) => { setCart(cart.filter(event => event.id !== eventId)); };

return ( <div> <Router> <Navbar /> <Routes> 
  <Route path="/" element={<Home cart={cart} setCart={setCart} />} /> 
  <Route path="/events/:eventId" element={<EventDetailss events={events} addToCart={addToCart} />} /> 
  <Route path="/cart" element={<Cart cart={cart} setCart={setCart} onRemoveEvent={onRemoveEvent} />} /> 
  </Routes> 
  </Router> 
  </div> 
  ); };

export default App;