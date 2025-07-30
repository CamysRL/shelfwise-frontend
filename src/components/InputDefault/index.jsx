import React from 'react'
import './style.css'

export default function InputDefault({ type, label, name }) {
    return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} name={name} required />
    </div>
  );
}
