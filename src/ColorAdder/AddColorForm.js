import React from "react";

const AddColorForm = ({ func }) => {
  let _text, _color;

  const submit = e => {
    e.preventDefault();
    func(_text.value, _color.value);
    _text.value = "";
    _color.value = "#11122";
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        ref={e => (_text = e)}
        placeholder="название цвета.."
        required
      />
      <input type="color" ref={e => (_color = e)} required />
      <button>ADD</button>
    </form>
  );
};

export default AddColorForm;
