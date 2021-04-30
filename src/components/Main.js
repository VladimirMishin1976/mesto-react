function Main() {
  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src="<%=require('./images/profile__avatar.jpg')%>" alt="Аватар пользователя" />
          <div className="profile__aratar-pointer"></div>
        </div>
        <div className="profile__container">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button className="profile__edit-button" type="button" aria-label="Закрыть"></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>

        <button className="profile__add-button" type="button" aria-label="Добавить фото"></button>
      </section>

      <section className="cards">
        <ul className="cards__list">

        </ul>
      </section>
    </main>
  );
}

export default Main;