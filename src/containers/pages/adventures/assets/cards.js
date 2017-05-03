import React from 'react';

const AdventureCards = props => {
  const {cards, details} = props;

  const listCards = () =>{
    return (
        cards.map((card, i) =>
            <li key={i}>
              <img src={`http://media.services.zam.com/v1/media/byName/hs/cards/enus/${card.id}.png`} alt={`${card.name}`}/>
            </li>
        )
    )
  };

  return (
      <ul className={`cards container__cards ${details === 'cards' && 'active'}-view`}>
        {listCards()}
      </ul>
  );
};

AdventureCards.propTypes = {
  cards: React.PropTypes.array,
  details: React.PropTypes.string.isRequired
};

export default AdventureCards;