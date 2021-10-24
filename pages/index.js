import Head from "next/head";
import loadingAnimation from "./loading.json";
import styles from "../styles/Home.module.css";
import { useEffect, useRef } from "react";
import Lottie from "lottie-react-web";

export default function Home() {
  const animationRef = useRef(null);

  // useEffect(() => {
  //  let animation = Lottie.loadAnimation({
  //     container: animationRef,
  //     renderer: "svg",
  //     loop: "true",
  //     autoplay: true,
  //     animationData: loadingAnimation,
  //   });
  // }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lottie Playground</h1>
        <Lottie
          options={{
            animationData: loadingAnimation,
            loop: true,
          }}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </footer>
    </div>
  );
}