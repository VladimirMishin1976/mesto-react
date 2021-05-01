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

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick} />
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
        <ImagePopup onClose={closeAllPopups} />

        {/* <!-- шаблон карточки --> */}
        <template className="template-card">
          <li className="card">
            <img className="card__image" src="#" alt="#" />
            <div className="card__contain">
              <h3 className="card__caption"></h3>
              <div className="card__like-contain">
                <button className="card__like" type="button" aria-label="Лайкнуть"></button>
                <p className="card__like-count">test</p>
              </div>
              <button className="card__trash" type="button" aria-label="Удалить"></button>
            </div>
          </li>
        </template>
      </div>
    </div>
  );
}

export default App;
