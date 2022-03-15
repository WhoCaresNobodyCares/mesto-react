import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'; // !!!
import ImagePopup from './ImagePopup';

import api from '../utils/Api';
import UserContext from '../contexts/CurrentUserContext';

import EditProfilePopup from './EditProfilePopup';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(userData => setCurrentUser(userData))
      .catch(error => console.log(`WASTED - ${error}`));
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
  const handleCardClick = obj => setSelectedCard({ name: obj.name, link: obj.link });

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  };

  function handleUpdateUser(data) {
    api
      .setInfo(data.name, data.about)
      .then(userData => setCurrentUser(userData))
      .then(() => closeAllPopups());
  }

  return (
    <UserContext.Provider value={currentUser}>
      <div className='body'>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <PopupWithForm
          id='cardAddPopup'
          title='Новое место'
          formName='addForm'
          formId='addPopupForm'
          buttonText='Создать'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span id='placeInput-err' className='popup__error'></span>
          <input className='popup__input' type='url' name='linkInput' id='linkInput' placeholder='Ссылка на картинку' required />
          <span id='linkInput-err' className='popup__error'></span>
        </PopupWithForm>

        <PopupWithForm
          id='updatePopup'
          title='Обновить аватар'
          formName='updateForm'
          formId='updatePopupForm'
          buttonText='Сохранить'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input className='popup__input' type='url' name='pictureInput' id='pictureInput' placeholder='Ссылка на картинку' required />
          <span id='pictureInput-err' className='popup__error'></span>
        </PopupWithForm>

        <PopupWithForm id='confirmPopup' title='Вы уверены?' formName='confirmForm' formId='confirmPopupForm' buttonText='Да'></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
