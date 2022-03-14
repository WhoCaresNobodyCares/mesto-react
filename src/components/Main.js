import React from 'react';

import api from '../utils/Api';
import Card from './Card';

import UserContext from '../contexts/CurrentUserContext';

const Main = props => {
  const currentUser = React.useContext(UserContext);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getArray()
      .then(array => setCards(array))
      .catch(error => console.log(`WASTED - ${error}`));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    if (!isLiked) {
      api.putLike(card._id).then(likedCard => setCards(state => state.map(c => (c._id === card._id ? likedCard : c))));
    } else {
      api.removeLike(card._id).then(unlikedCard => setCards(state => state.map(c => (c._id === card._id ? unlikedCard : c))));
    }
  }

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
        {cards.map(item => (
          <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} />
        ))}
      </section>
    </main>
  );
};

export default Main;
