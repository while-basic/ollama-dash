import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className={styles.title}>Welcome to the Text Adventure Game!</h1>
      <p className={styles.description}>
        Get started by navigating to the game
      </p>

      <div className={styles.grid}>
        <Link href="/game">
          <a className={styles.card}>
            <h3>Start Game &rarr;</h3>
            <p>Begin your adventure here!</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;