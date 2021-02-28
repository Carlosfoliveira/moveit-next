import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Container, Section, GithubText, InputAndButton } from '../styles/pages/Login';

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (user.length === 0) {
      setIsFilled(false);
    } else {
      setIsFilled(true);
    }
  }, [user]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    Cookies.set('user', user);
    router.push('/');
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
        <form onSubmit={handleSubmit}>
          <InputAndButton isFilled={isFilled}>
              <input type="text" placeholder="Digite seu username" onChange={handleInputChange}/>
              <button type="submit">
                <img src="/icons/arrow.svg" alt="Arrow"/>
              </button>
          </InputAndButton>
        </form>
      </Section>
    </Container>
  );
}
