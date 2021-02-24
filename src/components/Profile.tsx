 import styles from '../styles/components/Profile.module.css';
 
 export function Profile()
 {
     return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/VonDoria.png" alt="Italo Faria" />
            <div>
                <strong>Italo Faria</strong>
                <p><img src="icons/level.svg" alt="" />Level 1</p>
            </div>
        </div>
     );
 }