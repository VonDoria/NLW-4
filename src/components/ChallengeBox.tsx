import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox()
{
    const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded()
    {
        completedChallenge();
        resetCountdown();
    }

    function hadleChallengeFailed()
    {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={ activeChallenge.type === 'body' ? "icons/body.svg" : "icons/eye.svg"} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challangeFailButton} onClick={hadleChallengeFailed}>Falou</button>
                        <button type="button" className={styles.challangeSucceededButton} onClick={handleChallengeSucceeded}>Completado</button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
        </div>
    );
}