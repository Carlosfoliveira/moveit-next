import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import { MdClose } from 'react-icons/md';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton} ${styles.countdownButtonFinished}`}
        >
          Ciclo encerrado
          <img src="icons/check-circle.svg" alt="cross-icon"/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
            Abandonar ciclo
            <MdClose/>
          </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play-arrow.svg" alt="play-icon"/>
            </button>
          )}
        </>
      )
      }
    </div>
  );
}