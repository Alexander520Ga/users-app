import React from "react";
import "./styles.css";

const Switch = ({ isActive, setIsActive }) => {
    const handleInputChange = (e) =>{
        setIsActive(e.target.checked)
    }
  return (
    <div class="switch-button">
      <p style={{ color: "#DEEFE7" }}>
        <b>Ver usuarios</b>
      </p>
      <input
        type="checkbox"
        name="switch-button"
        id="switch-label"
        class="switch-button__checkbox"
        value={isActive}
        onChange={handleInputChange}
      />
      <label htmlFor="switch-label" class="switch-button__label"></label>
    </div>
  );
};

export default Switch;
