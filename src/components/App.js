import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import UserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleCardClick = card => setSelectedCard({ name: card.name, link: card.link });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(userData => setCurrentUser(userData))
      .catch(error => console.log(`WASTED - ${error}`));
    api
      .getArray()
      .then(array => setCards(array))
      .catch(error => console.log(`WASTED - ${error}`));
  }, []);

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
      .then(() => closeAllPopups())
      .catch(error => console.log(`WASTED - ${error}`));
  }

  function handleUpdateAvatar(data) {
    api
      .setAvatar(data.avatar)
      .then(userData => setCurrentUser(userData))
      .then(() => closeAllPopups())
      .catch(error => console.log(`WASTED - ${error}`));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    if (!isLiked) {
      api
        .putLike(card._id)
        .then(likedCard => setCards(state => state.map(c => (c._id === card._id ? likedCard : c))))
        .catch(error => console.log(`WASTED - ${error}`));
    } else {
      api
        .removeLike(card._id)
        .then(unlikedCard => setCards(state => state.map(c => (c._id === card._id ? unlikedCard : c))))
        .catch(error => console.log(`WASTED - ${error}`));
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => setCards(cards => cards.filter(item => item._id !== card._id)))
      .catch(error => console.log(`WASTED - ${error}`));
  }

  function handleAddPlaceSubmit(card) {
    api
      .addCard(card.name, card.link)
      .then(card => setCards([card, ...cards]))
      .then(() => closeAllPopups())
      .catch(error => console.log(`WASTED - ${error}`));
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCards={handleAddPlaceSubmit} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <PopupWithForm id='confirmPopup' title='Вы уверены?' formName='confirmForm' formId='confirmPopupForm' buttonText='Да'></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
