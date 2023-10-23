import { useState } from 'react';
import './selector.css';

const Selector = ({ title, options, handleSelection }) => {
  const [visibleDish, setVisibleDish] = useState(false);

  const toggleDish = () => {
    setVisibleDish(!visibleDish);
  };

  return (
    <div className='dish-menu'>
      <div className='dish-title'>
        <h2 onClick={toggleDish}>{title}</h2>
      </div>
      {visibleDish && (
        <div className='dish-container-horizontal'>
          {options.map((option) => (
            <div
              className='dish-container'
              key={option.id}
              onClick={() => handleSelection(option)}
            >
              <img src={`./${option.image}`} />
              <div className='dish-info'>
                {option.name} ({option.price} €)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Selector;
