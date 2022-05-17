import React from 'react';
import { Link } from 'react-router-dom';

function Cards ({cards}) {
  return(
    <section className='cards'>
      <ul className='cards__list'>
        {cards.map((card) => {
          return(
            
              <li className='cards__item' key={card.link}>
                <Link to={'/' + card.link} className="cards__link">{card.title}</Link>
                <img className="cards__image" src={card.previewImage} alt={card.title} />
              </li>
            
          )
        })}
      </ul>
      
    </section>
  );
};

export default Cards;