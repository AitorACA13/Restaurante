import PropTypes from 'prop-types';

const Contador = ({ total, resetSelection }) => {
  return (
    <>
      <div> Total:€{total} </div>
      <button onClick={resetSelection}>Reiniciar Selección</button>
    </>
  );
};

Contador.propTypes = {
  total: PropTypes.number.isRequired,
  resetSelection: PropTypes.func.isRequired,
};
export default Contador;
