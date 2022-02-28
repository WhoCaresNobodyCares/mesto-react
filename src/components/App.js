import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  // document.querySelector('#profileEditPopup').classList.add('popup_opened');
  return (
    <div className='body'>
      <Header />
      <Main />
      <Footer />

      <PopupWithForm id='profileEditPopup' title='Редактировать профиль' formName='editForm' formId='editPopupForm' buttonText='Сохранить'>
        <input
          className='popup__input'
          type='text'
          name='nameInput'
          id='nameInput'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          required
        />
        <span id='nameInput-err' className='popup__error'></span>
        <input
          className='popup__input'
          type='text'
          name='descriptionInput'
          id='descriptionInput'
          placeholder='Описание'
          minLength='2'
          maxLength='200'
          required
        />
        <span id='descriptionInput-err' className='popup__error'></span>
      </PopupWithForm>

      <PopupWithForm id='cardAddPopup' title='Новое место' formName='addForm' formId='addPopupForm' buttonText='Создать'>
        <input
          className='popup__input'
          type='text'
          name='placeInput'
          id='placeInput'
          placeholder='Название'
          minLength='2'
          maxLength='30'
          required
        />
        <span id='placeInput-err' className='popup__error'></span>
        <input className='popup__input' type='url' name='linkInput' id='linkInput' placeholder='Ссылка на картинку' required />
        <span id='linkInput-err' className='popup__error'></span>
      </PopupWithForm>

      <PopupWithForm id='updatePopup' title='Обновить аватар' formName='updateForm' formId='updatePopupForm' buttonText='Сохранить'>
        <input className='popup__input' type='url' name='pictureInput' id='pictureInput' placeholder='Ссылка на картинку' required />
        <span id='pictureInput-err' className='popup__error'></span>
      </PopupWithForm>

      <PopupWithForm id='confirmPopup' title='Вы уверены?' formName='confirmForm' formId='confirmPopupForm' buttonText='Да'></PopupWithForm>
    </div>
  );
}

export default App;
