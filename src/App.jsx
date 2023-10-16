import { useState } from 'react';
import Contador from './components/Contador';
import Selector from './components/Selector';
import './App.css';

function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelection = (option) => {
    const isOptionSelected = selectedDish.some((item) => item.id === option.id);

    let updatedSelections;

    if (isOptionSelected) {
      // Si el producto está siendo deseleccionado, restamos su precio del total
      updatedSelections = selectedDish.filter((item) => item.id !== option.id);
      const newTotalPrice = totalPrice - option.price;
      setTotalPrice(newTotalPrice);
    } else {
      // Si el producto está siendo seleccionado, sumamos su precio al total
      updatedSelections = [...selectedDish, option];
      const newTotalPrice = totalPrice + option.price;
      setTotalPrice(newTotalPrice);
    }

    setSelectedDish(updatedSelections);
  };

  const firstDish = [
    { id: 1, name: 'Ensalada Caprese', price: 2 },
    { id: 2, name: 'Sopa de Tomate', price: 2 },
    { id: 3, name: 'Pasta Carbonara', price: 2 },
    { id: 4, name: 'Gazpacho', price: 2 },
    { id: 5, name: 'Bruschetta', price: 2 },
  ];

  const secondDish = [
    { id: 1, name: 'Paella', price: 2 },
    { id: 2, name: 'Lasaña', price: 2 },
    { id: 3, name: 'Pescado a la Parrilla', price: 2 },
    { id: 4, name: 'Pollo al Curry', price: 2 },
    { id: 5, name: 'Tacos de Carnitas', price: 2 },
  ];

  const dessert = [
    { id: 1, name: 'Tiramisú', price: 2 },
    { id: 2, name: 'Flan', price: 2 },
    { id: 3, name: 'Pastel de Chocolate', price: 2 },
    { id: 4, name: 'Crepes con Nutella y Fresas', price: 2 },
    { id: 5, name: 'Helado de Vainilla con Frutas', price: 2 },
  ];

  return (
    <div>
      <h1>Menú</h1>
      <Selector
        title='Primer plato'
        options={firstDish}
        handleSelection={handleSelection}
      />
      <Selector
        title='Segundo plato'
        options={secondDish}
        handleSelection={handleSelection}
      />
      <Selector
        title='Postre'
        options={dessert}
        handleSelection={handleSelection}
      />

      <Contador total={totalPrice} />
    </div>
  );
}

export default App;
