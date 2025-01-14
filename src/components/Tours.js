import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTour }) {
  return (
    <section className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id}  id={`tour-item-para-${tour.id}`} {...tour} removeTour={removeTour} />
      ))}
    </section>
  );
}

export default Tours;
