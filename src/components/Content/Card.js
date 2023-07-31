import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  const getFavicon = () => {
    if (card.image) {
      return card.image;
    } else {
      return `https://www.google.com/s2/favicons?domain=${card.url}`
    }
  };
console.log(getFavicon());
  return (
    <article className="card">
      <div className="card-header">
        <div>
          <span className='weblogo' style={{background:`url('${getFavicon()}')`}}>
          </span>
          <h3>{card.name}</h3>
        </div>
      </div>
      <div className="card-body">
        <p>{card.description}</p>
      </div>
      <div className="card-footer">
        <a href={card.url}>Visit Website</a>
      </div>
    </article>
  );
};

export default Card;
