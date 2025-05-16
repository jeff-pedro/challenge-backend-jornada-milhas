import './Form.css';

const Form = ({ children, title }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
  }

  return (
    <section className="form__container">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        { children }
      </form>
    </section>
  );
}

export default Form;
