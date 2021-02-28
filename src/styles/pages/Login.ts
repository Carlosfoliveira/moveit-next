import styled, { css } from 'styled-components';

interface InputAndButtonProps {
  isFilled: boolean;
}

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  background: var(--blue);
`;

export const Section = styled.section`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5rem;


  & > img {
    margin-bottom: 6rem;
  }

  strong {
    color: var(--white);
    font-size: 2.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;

export const GithubText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem; 
  height: 6.25rem;
  margin-bottom: 1rem;


  p {
    color: var(--text-highlight);
    margin-left: 1.5rem;
    font-size: 1.25rem;
    flex-wrap: nowrap;
  }
`;

export const InputAndButton = styled.div<InputAndButtonProps>`
  display: flex;
  width: 25rem;
  height: 5rem;

  input {
    flex: 1;
    background: rgb(73,83,184);
    background: linear-gradient(90deg, rgba(73,83,184,1) 0%, rgba(73,83,184,0.2) 100%);
    border: none;
    border-radius: 5px 0 0 5px;
    padding: 1.5rem;
    outline: none;
    
    font-weight: 400;
    font-size: 1.2rem;
    color: var(--white);
  }

  input::placeholder {
    color: var(--text-highlight);
    font-weight: 400;
    font-size: 1.2rem;
  }

  input:hover {
    border: 2px solid var(--blue-dark);
  }

  input:focus::placeholder {
    color: transparent;
  }

  input:focus {
    border: 2px solid var(--blue-dark);
  }

  button {
    background: var(--blue-dark);
    font-size: 0;
    width: 5rem;
    height: 5rem;
    border: none;
    border-radius: 0 5px 5px 0;
    outline: none;

    ${(props) => props.isFilled && css`
      background: var(--green);
    `}
  }
`;