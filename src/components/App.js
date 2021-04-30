import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main />
        <Footer />

        {/* <!-- Попап - Добавление картчки --> */}
        <article className="popup popup_place_add-card">
          <form className="popup__container" name="add-place" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <label className="popup__field">
              <input className="popup__input" type="text" placeholder="Название" name="name" required minlength="2"
                maxlength="30" />
              <span className="popup__input-error tittle-place-error"></span>
            </label>
            <label className="popup__field">
              <input className="popup__input" type="url" placeholder="Ссылка на картинку" name="link" required />
              <span className="popup__input-error link-img-place-error"></span>
            </label>
            <button className="popup__save" type="submit">Создать</button>
            <button className="popup__close popup__close_add-card" type="button" aria-label="Закрыть"></button>
          </form>
        </article>

        {/* <!-- Попап - профиль --> */}
        <article className="popup popup_place_profile">
          <form className="popup__container" name="edit-profile" novalidate>
            <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
            <label className="popup__field">
              <input className="popup__input" type="text" placeholder="Имя" name="name" required minlength="2" maxlength="40" />
              <span className="popup__input-error name-profile-error"></span>
            </label>
            <label className="popup__field">
              <input className="popup__input" type="text" placeholder="Работа" name="about" required minlength="2"
                maxlength="200" />
              <span className="popup__input-error job-profile-error"></span>
            </label>
            <button className="popup__save" type="submit">Сохранить</button>
            <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть"></button>
          </form>
        </article>

        {/* <!-- Попап - изменить аватар --> */}
        <article className="popup popup_place_avatar">
          <form className="popup__container" name="avatar-photo" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <label className="popup__field">
              <input className="popup__input" type="url" placeholder="Ссылка на картинку" name="link" required />
              <span className="popup__input-error link-img-place-error"></span>
            </label>
            <button className="popup__save" type="submit">Сохранить</button>
            <button className="popup__close popup__close_add-card" type="button" aria-label="Закрыть"></button>
          </form>
        </article>

        {/* <!-- Попап - Показать картинку --> */}
        <div className="popup popup_place_img">
          <div className="popup__img-container">
            <img className="popup__img" alt="Здесь должно быть изображение" src="<%=require('./images/profile__avatar.jpg')%>" />
            <p className="popup__img-caption"></p>
            <button className="popup__close" type="button" aria-label="Закрыть"></button>
          </div>
        </div>

        {/* <!-- Попап удаления карточки --> */}
        <article className="popup popup_place_trash-card">
          <form className="popup__container" name="trash-card" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save" type="submit">Да</button>
            <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть"></button>
          </form>
        </article>

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
