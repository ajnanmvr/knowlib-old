import React from 'react';

const Card = ({ card }) => {
  const getFavicon = () => {
    if (card.image) {
      return card.image;
    } else {
      return `https://www.google.com/s2/favicons?domain=${card.url}`;
    }
  };

  return (
    <article className="card bg-white shadow-md rounded-md">
      <div className="card-header flex items-center justify-between p-4">
        <div className="flex items-center">
          <span
            className="weblogo w-10 h-10 rounded-lg bg-contain bg-center"
            style={{ backgroundImage: `url('${getFavicon()}')` }}
          ></span>
          <h3 className="ml-4 font-medium">{card.name}</h3>
        </div>
      </div>
      <div className="card-body p-4">
        <p>{card.description}</p>
      </div>
      <div className="card-footer p-4 border-t border-gray-200">
        <a
          href={card.url}
          className="text-blue-600 font-medium hover:text-blue-800"
        >
          Visit Website
        </a>
      </div>
    </article>
  );
};

export default Card;
