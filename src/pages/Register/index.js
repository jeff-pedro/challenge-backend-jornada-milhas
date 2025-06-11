import { useState } from 'react';
import styles from './Register.module.css';
import DefaultButton from 'components/ui/DefaultButton';
import Field from 'components/ui/Field';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Submit:
      ${firstName}
      ${lastName}
      ${email}
      ${password}
      ${confirmPassword}
    `);
  }

  return (
    <section className={styles.formContainer}>
      <p>
        Ainda não tem cadastro?
      </p>

      <p>
        Então antes de procurar um novo destino precisamos de alguns dados:
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Field 
          id='first-name'
          label='Nome'
          placeholder='Digite seu nome'
          value={firstName}
          handleChange={(value) => setFirstName(value)}
          required
        />

        <Field 
          id='last-name'
          label='Sobrenome'
          placeholder='Digite seu sobrenome'
          value={lastName}
          handleChange={(value) => setLastName(value)}
          required
        />

        <Field
          id='email'
          type='email'
          label='E-mail'
          value={email}
          placeholder='Digite seu melhor email'
          handleChange={(value) => setEmail(value)}
          required
        />

        <Field
          id='pass-create'
          type='password'
          label='Senha'
          value={password}
          placeholder='Crie uma senha'
          handleChange={(value) => setPassword(value)}
          required
        />

        <Field
          id='pass-confirm'
          type='password'
          label='Confirme sua senha'
          value={confirmPassword}
          placeholder='Repita a senha criada acima'
          handleChange={(value) => setConfirmPassword(value)}
          required
        />

        <div className={styles.button}>
          <DefaultButton children='Cadastrar' />
        </div>
      </form>
    </section>
  );
}

export default Register;
