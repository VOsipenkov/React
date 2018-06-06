import React from "react";
import * as C from "../Redux/Constants";
import { v4 } from "uuid";
import PropTypes from "prop-types";

const AddColorForm = (props, { store }) => {
  let _text, _color;

  console.log(`addColorForm ${store}`);
  const submit = e => {
    e.preventDefault();
    store.dispatch({
      type: C.ADD_COLOR,
      id: v4(),
      title: _text.value,
      color: _color.value,
      rating: 0
    });

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

AddColorForm.contextTypes = {
  store: PropTypes.string.isRequired
};

export default AddColorForm;
