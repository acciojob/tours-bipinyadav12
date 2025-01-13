import React, { useState, useEffect } from 'react';
 import Tours from './Tours';
 import Loading from './Loading';
 import toursData from './toursData.json'; // Import JSON data

 const App = () => {
   const [loading, setLoading] = useState(true);
   const [tours, setTours] = useState([]);
 
   const fetchTours = async () => {
     setLoading(true);
     try {
       // Simulating API fetch
       await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
       setTours(toursData); // Use imported JSON data
       setLoading(false);
     } catch (error) {
       console.error('Error fetching tours:', error);
       setLoading(false);
     }
   };
 
   useEffect(() => {
     fetchTours();
   }, []);
 
   const removeTour = (id) => {
     const newTours = tours.filter((tour) => tour.id !== id);
     setTours(newTours);
   };
 
   if (loading) {
     return <Loading />;
   }
 
   if (tours.length === 0) {
     return (
       <div className="no-tours">
         <h2>No tours left</h2>
         <button onClick={fetchTours}>Refresh</button>
       </div>
     );
   }
 
   return <Tours tours={tours} removeTour={removeTour} />;
 };
 
 export default App;
