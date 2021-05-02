function InputPopup({ type, placeholder, minlength, name, maxlength }) {
  return (
    <label className="popup__field">
      <input className="popup__input" type={type} placeholder={placeholder}
        name={name} required minlength={minlength} maxlength={maxlength} />
      <span className="popup__input-error"></span>
    </label>
  );
}
export default InputPopup;