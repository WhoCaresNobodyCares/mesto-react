import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      id='updatePopup'
      title='Обновить аватар'
      formName='updateForm'
      formId='updatePopupForm'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input className='popup__input' type='url' name='pictureInput' id='pictureInput' placeholder='Ссылка на картинку' required />
      <span id='pictureInput-err' className='popup__error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
