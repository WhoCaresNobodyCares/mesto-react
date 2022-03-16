import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleAddPlaceSubmit(e) {
    e.preventDefault();
    props.onUpdateCards({ name: name, link: link });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      id='cardAddPopup'
      title='Новое место'
      formName='addForm'
      formId='addPopupForm'
      buttonText='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleAddPlaceSubmit}
    >
      <input
        className='popup__input'
        type='text'
        name='placeInput'
        id='placeInput'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
        onChange={handleNameChange}
      />
      <span id='placeInput-err' className='popup__error'></span>
      <input
        className='popup__input'
        type='url'
        name='linkInput'
        id='linkInput'
        placeholder='Ссылка на картинку'
        required
        onChange={handleLinkChange}
      />
      <span id='linkInput-err' className='popup__error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
