import { useState } from 'react';
import Contador from './components/Contador/Contador';
import Selector from './components/Selector/Selector';
import Header from './components/Header/Header';
import './App.css';
import SelectionHistory from './components/Historial/Historial';

function App() {
  const [selectedDish, setSelectedDish] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectionHistory, setSelectionHistory] = useState([]);

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
      const selection = { ...option, quantity: isOptionSelected ? 0 : 1 };
      setSelectionHistory([...selectionHistory, selection]);
    }

    setSelectedDish(updatedSelections);
  };

  const firstDish = [
    {
      id: 1,
      name: 'Ensalada Caprese',
      price: 2,
      image: '/images/Caprese.jpg' /* aqui. */,
    },
    {
      id: 2,
      name: 'Sopa de Tomate',
      price: 2,
      image: '/images/SopaTomate.jpg',
    },
    {
      id: 3,
      name: 'Pasta Carbonara',
      price: 2,
      image: '/images/Pasta.jpg',
    },
    { id: 4, name: 'Gazpacho', price: 2, image: '/images/Gazpacho.jpg' },
    { id: 5, name: 'Bruschetta', price: 2, image: '/images/Bruschetta.jpg' },
  ];

  const secondDish = [
    { id: 1, name: 'Paella', price: 2, image: '/images/Paella.jpg' },
    { id: 2, name: 'Lasaña', price: 2, image: '/images/Lasaña.jpg' },
    {
      id: 3,
      name: 'Pescado a la Parrilla',
      price: 2,
      image: '/images/Pescado.jpg',
    },
    {
      id: 4,
      name: 'Pollo al Curry',
      price: 2,
      image: '/images/PolloCurry.jpg',
    },
    { id: 5, name: 'Tacos de Carnitas', price: 2, image: '/images/Tacos.jpg' },
  ];

  const dessert = [
    { id: 1, name: 'Tiramisú', price: 2, image: '/images/tiramisu.jpg' },
    { id: 2, name: 'Flan', price: 2, image: '/images/Flan.jpg' },
    {
      id: 3,
      name: 'Pastel de Chocolate',
      price: 2,
      image: '/images/Pastel.jpg',
    },
    {
      id: 4,
      name: 'Crepes con Nutella y Fresas',
      price: 2,
      image: '/images/Crepes.jpg',
    },
    {
      id: 5,
      name: 'Helado de Vainilla con Frutas',
      price: 2,
      image: '/images/Vainilla.jpg',
    },
  ];

  return (
    <div>
      <Header />
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
      <SelectionHistory selectionHistory={selectionHistory} />
      <Contador total={totalPrice} />
    </div>
  );
}

export default App;
