import React from 'react';

import api from '../utils/Api';
import Card from './Card';

const Main = props => {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllInfo()
      .then(([userData, array]) => {
        // userId = userData._id;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(array);
      })
      .catch(error => console.log(`WASTED - ${error}`));
  }, []);

  return (
    <main className='main body__main'>
      <section id='profile' className='profile main__profile'>
        <div className='profile__shape'>
          <div className='profile__avatar' style={{ backgroundImage: `url(${userAvatar})` }}></div>
          <div className='profile__overlay' onClick={props.onEditAvatar}></div>
        </div>
        <div className='profile__information'>
          <div className='profile__wrap'>
            <h1 className='profile__username'>{userName}</h1>
            <button type='button' aria-label='Редактировать профиль' className='profile__edit' onClick={props.onEditProfile}></button>
          </div>
          <p className='profile__description'>{userDescription}</p>
        </div>
        <button type='button' aria-label='Добавить фото' className='profile__add' onClick={props.onAddPlace}></button>
      </section>
      <section id='elements' className='elements'>
        {cards.map(item => (
          <Card card={item} key={item._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
};

export default Main;
