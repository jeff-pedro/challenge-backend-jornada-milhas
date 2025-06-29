// hooks
import { useEffect, useState } from 'react';

// components
import Field from 'components/ui/Field';
import Form from 'components/ui/Form';

import styles from './Register.module.css';
import { postUser } from 'services/users';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false); 
  const [isValidPassword, setIsValidPassword] = useState(true); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isValidPassword) {
      await postUser({
        firstName,
        lastName,
        email,
        password
      });

      // Cleanup
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsValidPassword(true);
    }
  }

  useEffect(() => {
    setIsValidPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    const fields = [firstName, lastName, email, password, confirmPassword];
    const areFieldsFilled = fields.every((field) => field.trim() !== '');
    setIsFormValid(areFieldsFilled && isValidPassword);
  }, [firstName, lastName, email, password, confirmPassword, isValidPassword]);

  return (
    <main className={styles.register}>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Ainda não tem cadastro?
        </h1>

        <p className={styles.paragraph}>
          Então antes de procurar um novo destino precisamos de alguns dados:
        </p>
      </div>
      
      <Form 
        onSubmit={handleSubmit}
        buttonText='Cadastrar'
        buttonDisabled={!isFormValid}
      >
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
        {(password && confirmPassword) && !isValidPassword && (
          <p className={styles.invalidPassword}>
            Senhas não correspondem
          </p>
        )}
      </Form>
    </main>
  );
}

export default Register;
