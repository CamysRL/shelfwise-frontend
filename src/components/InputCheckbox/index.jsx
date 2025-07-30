import React from 'react'
import './style.css'

export default function InputCheckbox({ type, label, name, value }) {
    return (
    <div className="input-group-checkbox">
      <input type={type} value= {value} name={name} required />
      <label>{label}</label>
    </div>
  );
}
