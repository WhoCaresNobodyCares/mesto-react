import React from 'react';

import api from '../utils/Api';
import Card from './Card';

import UserContext from '../contexts/CurrentUserContext';

const Main = props => {
  const currentUser = React.useContext(UserContext);

  return (
    <main className='main body__main'>
      <section id='profile' className='profile main__profile'>
        <div className='profile__shape'>
          <div className='profile__avatar' style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <div className='profile__overlay' onClick={props.onEditAvatar}></div>
        </div>
        <div className='profile__information'>
          <div className='profile__wrap'>
            <h1 className='profile__username'>{currentUser.name}</h1>
            <button type='button' aria-label='Редактировать профиль' className='profile__edit' onClick={props.onEditProfile}></button>
          </div>
          <p className='profile__description'>{currentUser.about}</p>
        </div>
        <button type='button' aria-label='Добавить фото' className='profile__add' onClick={props.onAddPlace}></button>
      </section>
      <section id='elements' className='elements'>
        {props.cards.map(item => (
          <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        ))}
      </section>
    </main>
  );
};

export default Main;
