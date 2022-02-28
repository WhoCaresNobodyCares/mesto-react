import React from 'react';

const Card = props => {
  return (
    <div className='card' key={props.card._id}>
      <button type='button' aria-label='Удалить карточку' className='card__remove card__remove_hidden'></button>
      <img src={props.card.link} alt={props.card.name} className='card__image' />
      <div className='card__description'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__wrap'>
          <button type='button' aria-label='Лайк' className='card__like'></button>
          <span className='card__number'>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
