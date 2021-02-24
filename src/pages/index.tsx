import styles from '../styles/pages/Home.module.css';
import ExperinceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from '../components/Countdown';
import Head from 'next/head';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | timer</title>
      </Head>
      <ExperinceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  );
}

export default Home;
