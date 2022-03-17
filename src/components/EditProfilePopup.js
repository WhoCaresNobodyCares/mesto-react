import React from 'react';
import PopupWithForm from './PopupWithForm';
import UserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(UserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      id='profileEditPopup'
      title='Редактировать профиль'
      formName='editForm'
      formId='editPopupForm'
      buttonText='Сохранить'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className='popup__input'
        type='text'
        name='nameInput'
        id='nameInput'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        required
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
      />
      <span id='descriptionInput-err' className='popup__error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
