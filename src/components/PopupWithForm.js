function PopupWithForm({ title, name, isOpen, onClose, children }) {
  return (
    <article className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__container" name={name} noValidate>
        <h2 className="popup__title">{title}</h2>

        {children}

        <button className="popup__save" type="submit">Сохранить</button>
        <button className="popup__close popup__close_profile" type="button" aria-label="Закрыть" onClick={onClose}></button>
      </form>
    </article>
  );
}

export default PopupWithForm;