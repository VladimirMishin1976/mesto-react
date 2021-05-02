import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import InputPopup from './InputPopup';
import React from 'react';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        {/* <!-- Попап - редактировать профиль --> */}
        <PopupWithForm title="Редактировать&nbsp;профиль" name='edit-profile' isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          {<InputPopup type="text" placeholder="Имя" name="name" minlength="2" maxlength="40" />}
          {<InputPopup type="text" placeholder="Работа" name="about" minlength="2" maxlength="200" />}
        </PopupWithForm>

        {/* <!-- Попап - Добавление картчки --> */}
        <PopupWithForm title="Новое место" name='add-card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          {<InputPopup type="text" placeholder="Название" name="name" minlength="2" maxlength="30" />}
          {<InputPopup type="url" placeholder="Ссылка на картинку" name="link" />}
        </PopupWithForm>

        {/* <!-- Попап - изменить аватар --> */}
        <PopupWithForm title="Обновить аватар" name='edit-avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          {<InputPopup type="url" placeholder="Ссылка на картинку" name="link" />}
        </PopupWithForm>
        {/* <!-- Попап удаления карточки --> */}
        <PopupWithForm title="Вы уверены?" name='confirm-delete-card' onClose={closeAllPopups} />

        {/* <!-- Попап - Показать картинку --> */}
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
