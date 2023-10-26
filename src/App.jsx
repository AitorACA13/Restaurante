import { useState } from 'react';
import Contador from './components/Contador/Contador';
import Selector from './components/Selector/Selector';
import Header from './components/Header/Header';
import SelectionHistory from './components/Historial/Historial';
import dishData from './dishData';
import './App.css';

function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectionHistory, setSelectionHistory] = useState([]);

  const handleSelection = (option) => {
    const isOptionSelected = selectedDish.some((item) => item.id === option.id);

    let updatedSelections;

    if (isOptionSelected) {
      updatedSelections = selectedDish.filter((item) => item.id !== option.id);
      const newTotalPrice = totalPrice - option.price;
      setTotalPrice(newTotalPrice);
    } else {
      updatedSelections = [...selectedDish, option];
      const newTotalPrice = totalPrice + option.price;
      setTotalPrice(newTotalPrice);
      const selection = { ...option, quantity: isOptionSelected ? 0 : 1 };
      setSelectionHistory([...selectionHistory, selection]);
    }

    setSelectedDish(updatedSelections);
  };

  const resetSelection = () => {
    setSelectedDish([]);
    setTotalPrice(0);
    setSelectionHistory([]);
  };

  return (
    <div className='app-page'>
      <Header />
      <div className='app-container'>
        {/* <h1>Menú</h1> */}
        <div className='selector-container'>
          <Selector
            title='Primer plato'
            options={dishData.firstDish}
            handleSelection={handleSelection}
          />
          <Selector
            title='Segundo plato'
            options={dishData.secondDish}
            handleSelection={handleSelection}
          />
          <Selector
            title='Postre'
            options={dishData.dessert}
            handleSelection={handleSelection}
          />
        </div>

        <div className='history-container'>
          <SelectionHistory selectionHistory={selectionHistory} />
          <Contador total={totalPrice} resetSelection={resetSelection} />
        </div>
      </div>
    </div>
  );
}

export default App;
