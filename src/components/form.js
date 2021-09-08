import React from "react";

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="cityInput" placeholder="Enter your city" />
    <button>Get weather</button>
  </form>
);

export default Form;
