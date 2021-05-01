function ImagePopup() {
  return (
    <div className="popup popup_place_img">
      <div className="popup__img-container">
        <img className="popup__img" alt="Здесь должно быть изображение" src="<%=require('./images/profile__avatar.jpg')%>" />
        <p className="popup__img-caption"></p>
        <button className="popup__close" type="button" aria-label="Закрыть"></button>
      </div>
    </div>
  );
}
export default ImagePopup;