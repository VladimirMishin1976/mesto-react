function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__contain">
        <h3 className="card__caption">{card.name}</h3>
        <div className="card__like-contain">
          <button className="card__like" type="button" aria-label="Лайкнуть"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
        <button className="card__trash" type="button" aria-label="Удалить"></button>
      </div>
    </li>
  );
}

export default Card;