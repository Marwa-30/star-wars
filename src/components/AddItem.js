import React from 'react';

const AddItem = ({ name, onChange, onAdd }) => (
    <div>
      <input type="text" value={name} id="inputID"  onChange={onChange} placeholder="Nom Star Wars" className="inputName"/>
      <button type="button" onClick={onAdd} className="button">
      Enregistrer
      </button>
    </div>
  );
export default AddItem;