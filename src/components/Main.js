import React from 'react';
import avatar from '../images/profile__avatar.jpg';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);

  // Загрузка сохраненный данный о пользователе с сервера
  React.useEffect(() => {
    api.getUserInfo()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      }).catch(err => console.error(err));

    api.getInitialCards()
      .then(cardsData => {
        setCards(cardsData)
      }).catch(err => console.error(err));
  }, []);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя" />
          <div className="profile__aratar-pointer"></div>
        </div>
        <div className="profile__container">
          <h1 className="profile__title">{userName}</h1>
          <button className="profile__edit-button" type="button" aria-label="Закрыть" onClick={onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>

        <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card, i) => {
            return (
              <Card card={card} onCardClick={onCardClick} key={card._id} />
            );
          })
          }
        </ul>
      </section>
    </main>
  );
}

export default Main;

// {likes: Array(0), _id: "608da4570459480041e0567c", name: "Иди обниму", link: "https://i02.appmifile.com/232_bbs_en/07/07/2020/60b60fbcef.jpg", owner: {…}, …}
// createdAt: "2021-05-01T18:56:23.798Z"
// likes: []
// link: "https://i02.appmifile.com/232_bbs_en/07/07/2020/60b60fbcef.jpg"
// name: "Иди обниму"
// owner: {name: "Оленина Рогаченко", about: "Жительница леса", avatar: "https://ic.pics.livejournal.com/mik_sazonov/25345481/60092/60092_original.jpg", _id: "1236c228a99f858dca66c4f6", cohort: "cohort-22"}
// _id: "608da4570459480041e0567c"
// __proto__: Object