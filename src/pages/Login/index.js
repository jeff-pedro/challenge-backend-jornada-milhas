import Field from 'components/ui/Field';
import styles from './Login.module.css';
import Form from 'components/ui/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from 'services/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  }

  return(
    <main className={styles.login}>

      <p className={styles.paragraph}>
        Já tem conta? Faça seu login:
      </p>

      <Form 
        onSubmit={onSubmit}
        buttonText='Entrar'
      >

        <Field 
          id='email'
          label='E-mail'
          type='email'
          placeholder='Insira seu email'
          value={email}
          handleChange={(value) => setEmail(value)}
          required
        />

        <Field 
          id='password'
          label='Senha'
          type='password'
          placeholder='Insira sua senha'
          value={password}
          handleChange={(value) => setPassword(value)}
          required
        />

        <div className={styles.link}>
          <Link to={'#'}>
            Esqueci minha senha
          </Link>
        </div>
      </Form>

      <p 
        className={styles.paragraph}
        style={{ marginBottom: '1rem' }}
      >
        Ainda não tem conta?
      </p>

      <div className={styles.link}>
        <Link to='/register'>
        Faça seu cadastro
        </Link>
      </div>
    </main>
  );
}

export default Login;
