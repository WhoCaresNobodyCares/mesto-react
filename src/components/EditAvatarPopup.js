import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarInput.current.value,
    });
  }

  return (
    <PopupWithForm
      id='updatePopup'
      title='Обновить аватар'
      formName='updateForm'
      formId='updatePopupForm'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input'
        type='url'
        name='pictureInput'
        id='pictureInput'
        placeholder='Ссылка на картинку'
        required
        ref={avatarInput}
      />
      <span id='pictureInput-err' className='popup__error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
