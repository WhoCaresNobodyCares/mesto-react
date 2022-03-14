import React from 'react';
import UserContext from '../contexts/CurrentUserContext';

const Card = props => {
  const currentUser = React.useContext(UserContext);

  const isOwn = props.card._id === currentUser._id;
  const cardDeleteButtonClassName = `card__remove ${isOwn ? `` : `card__remove_hidden`}`;

  const isLiked = props.card.likes.some(item => item._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${isLiked ? `card__like_active` : ``}`;

  return (
    <div className='card'>
      <button type='button' aria-label='Удалить карточку' className={cardDeleteButtonClassName}></button>
      <img
        src={props.card.link}
        alt={props.card.name}
        className='card__image'
        onClick={() => {
          props.onCardClick({ name: props.card.name, link: props.card.link });
        }}
      />
      <div className='card__description'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__wrap'>
          <button
            type='button'
            aria-label='Лайк'
            className={cardLikeButtonClassName}
            onClick={() => {
              props.onCardLike(props.card);
            }}
          ></button>
          <span className='card__number'>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
