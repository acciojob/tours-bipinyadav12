import React, { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h3 className="tour-name">{name}</h3>
        <h4 className="tour-price">${price}</h4>
        <p className="tour-info" id={`tour-item-para-${id}`}>
          {showMore ? info : `${info.substring(0, 200)}...`}
          <button id={`see-more-${id}`}
            onClick={() => setShowMore(!showMore)}
            className="btn-show-more"
          >
            {showMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button id={`delete-btn-${id}`} onClick={() => removeTour(id)} className="btn-remove">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Tour;
