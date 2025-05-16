import './Form.css';

const Form = ({ children }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <section className="form__container">
      <h2>Encontre seu próximo destino</h2>
      <form onSubmit={onSubmit}>
        { children }
      </form>
    </section>
  );
}

export default Form;
