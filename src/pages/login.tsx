import { useCallback, useEffect, useState } from 'react';
import styles from '../styles/pages/Login.module.css';
import { Container, Section, GithubText, InputAndButton } from '../styles/pages/Login';

export default function Login() {
  const [user, setUser] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }, []);

  useEffect(() => {
    if (user.length === 0) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [user]);

  return (
    <Container>
      <img src="/logo.svg" alt="move.it"/>
      <Section>
        <img src="/logo-full.svg" alt="move.it"/>
        <strong>Bem-vindo</strong>

        <GithubText>
          <img src="/icons/github.svg" alt="Github"/>
          <p>Faça login com seu github para começar</p>
        </GithubText>
        <InputAndButton isFilled={isFilled}>
          <input type="text" placeholder="Digite seu username" onChange={handleInputChange}/>
          <button type="button">
            <img src="/icons/arrow.svg" alt="Arrow"/>
          </button>
        </InputAndButton>
      </Section>
    </Container>
  );
}
