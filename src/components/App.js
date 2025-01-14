import React, { useState } from 'react';
import toursData from './data';

function App() {
  const [tours, setTours] = useState(toursData);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
