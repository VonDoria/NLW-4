import styles from '../styles/components/ExperinceBar.module.css';

export default function ExperinceBar(){
    return (
        <header className={styles.experienceBar}>
            <span>8 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span className={styles.currentExperience} style={{ left: '50%' }} >300 xp</span>
            </div>
            <span>688 xp</span>
        </header>
    );
}