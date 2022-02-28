import React from 'react';

const Main = () => {
  return (
    <main className='main body__main'>
      <section id='profile' className='profile main__profile'>
        <div className='profile__shape'>
          <div className='profile__avatar'></div>
          <div className='profile__overlay'></div>
        </div>
        <div className='profile__information'>
          <div className='profile__wrap'>
            <h1 className='profile__username'></h1>
            <button type='button' aria-label='Редактировать профиль' className='profile__edit'></button>
          </div>
          <p className='profile__description'></p>
        </div>
        <button type='button' aria-label='Добавить фото' className='profile__add'></button>
      </section>
      <section id='elements' className='elements'></section>
    </main>
  );
};

export default Main;
