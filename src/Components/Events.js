import Comedyshow from '../Assets/Comedyshow.jpg';
import Horseride from '../Assets/Horseride.JPG';
import Comedyshow5 from '../Assets/Comedyshow5.jpg';
import Comedyshow3 from '../Assets/Comedyshow3.JPG';
import Comedyshow4 from '../Assets/Comedyshow4.JPG';
import Archery from '../Assets/Archery.JPG';

import marathon from '../Assets/marathon.jpg';
import Qawalli from '../Assets/Qawalli.jpg';
import Rabindrautsov from '../Assets/Rabindrautsov.jpg';


const Events = [
  { id: 1,  img: Comedyshow5, title: "STAND-UP EXTRAVAGANZA", venue: 'KalaMandir',  performer: 'Kenny Sebastian',charges: 399, category:'Comedyshow',eventtype:'online',  
  description: `It takes exemplary courage to sit in the first two rows of a Harsh Gujral's show because he will get you with his highly witty yet charming style.
  He has been known to find humour in some of the most regular life situations. He has average north Indian looks and height but he believes that the phrase tall dark and handsome was coined only for him.`},
 
  { id: 2,  img: Comedyshow, title: "WEEKEND COMEDY SPECIAL", venue: 'KalaMandir', performer: 'Vipul Goyal' ,charges: 499 , category:'Comedyshow',eventtype:'Ofline',  
  description: `Get ready for a weekend of laughter and fun with Vipul Goyal's comedy special. Join us for a night of laughter with top comedians!`},

  { id: 3, img: Comedyshow3, title: "LAUGH OUT LOUD", venue: 'KalaMandir', performer: 'Aditi Mittal',charges: 799, category:'Comedyshow',eventtype:'Ofline', 
  description: `Get ready for a weekend of laughter and fun with Vipul Goyal's comedy special.'Join us for a night of laughter with top comedians!`},

  { id: 4, img: Horseride, title: "HorseRiding", venue: 'Calcutta Polo Club', charges: 699 , category:'Sportsevent',eventtype:'Ofline',  
  description: `Aditi Mittal brings her unique brand of humor to the stage, guaranteed to leave you in stitches.'Join us for a night of laughter with top comedians!` },

  { id: 5, img: Comedyshow4, title: "HUMOR HOUR", venue: 'KalaMandir', performer: 'Abish Mathew',charges: 999  , category:'Comedyshow',eventtype:'Ofline', 
  description: `Experience the thrill of horse riding at the Calcutta Polo Club.`},

  { id: 6, img: Archery, title: "Archery Extravaganza: Bulls-eye Bonanza", venue: 'Calcutta Polo-Club', charges: 699 , 
  category:'Sportsevent',eventtype:'Offline',   
  description: `Get ready for an adrenaline-packed day at the Archery Extravaganza, where sharp shooters of all ages compete in thrilling challenges. Feel the excitement as participants take aim in the "Robin Hood" challenge, attempting to split an arrow with another arrow for ultimate bragging rights. With interactive stations, expert demonstrations, and plenty of prizes, this event promises non-stop fun and fierce competition for everyone involved!`},

  { id: 7, img: marathon, title: "Fit India Challenge", venue: 'Read RoadWestern Flank of Red Road', charges: 399 , category:'Sportsevent',eventtype:'online',
  description: `Get ready to run, have fun, and make a difference! See you at the starting line!.`},


  { id: 8, img: Qawalli, title: "Sagar Waali Qawwali ", venue: 'JW Mariott Hotels', charges: 999, category:'Musicalevent',eventtype:'online',   
  description: `Join our archery workshop and discover your hidden talent.`},


  { id: 9, img: Rabindrautsov, title: "Rabindra Mahostav", venue: 'Ezcc, Slat Lake', charges: 699, category:'Musicalevent' ,eventtype:'Ofline',   
  description: `Celebrate the life and works of Rabindranath Tagore at our Rabindra Mahostav event.`},
];

export default Events;