import { useEffect, useState } from "react";
import Head from "next/head";
import loadingAnimation from "../../lottie/loading.json";
import styles from "../../styles/Home.module.css";
import BlogPost from "./BlogPost";
import Lottie from "lottie-react-web";

export default function Loading() {
  const [blogPosts, setBlogPosts] = useState([]);

  async function getBlogPosts() {
    const posts = await getMediumArticles();
    setBlogPosts(posts);
  }

  useEffect(() => {
    if (!blogPosts.length) {
      getBlogPosts();
    }
  }, [blogPosts]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Loading test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Loading Animation</h1>
        {!blogPosts.length ? (
          <Lottie
            options={{
              animationData: loadingAnimation,
              loop: true,
            }}
          />
        ) : (
          blogPosts.map((post) => <BlogPost {...post} key={post.datePosted} />)
        )}
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

export async function getMediumArticles() {
  try {
    const response = await fetch(`${process.env.API_URL}/api/fake`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching Medium articles: ", error?.message);
  }
}
