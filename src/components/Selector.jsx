import React from 'react';

const Selector = ({ title, options, handleSelection }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <label>
              <input type='checkbox' onChange={() => handleSelection(option)} />
              {option.name} (${option.price})
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
