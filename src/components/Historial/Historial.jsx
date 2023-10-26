import './historial.css';

function SelectionHistory({ selectionHistory }) {
  return (
    <div className='history'>
      <h2>Selección</h2>
      <ul>
        {selectionHistory.map((selection, index) => (
          <li key={index}>
            {selection.name} - Cantidad: {selection.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectionHistory;
