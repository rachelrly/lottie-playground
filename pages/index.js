import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Lottie from "lottie-react";
import checkAnimation from "../lottie/blob.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lottie playground</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lottie Playground</h1>
        <Lottie animationData={checkAnimation} />
        <Link href="/loading">View loading animation</Link>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/rachelrly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Rachel Reilly
        </a>
      </footer>
    </div>
  );
}
