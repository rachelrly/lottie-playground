import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import loadingAnimation from "../../lottie/layer.json";
import styles from "../../styles/Home.module.css";
import BlogPost from "./BlogPost";
import Lottie from "lottie-react";

export default function Loading() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const lottieRef = useRef(null);

  async function getBlogPosts() {
    const posts = await getMediumArticles();
    setBlogPosts(posts);
  }

  useEffect(() => {
    if (!blogPosts?.length) {
      getBlogPosts();
    }
  }, [blogPosts]);

  function stopLoading() {
    if (blogPosts?.length) setLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Loading test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Loading Animation</h1>
        {loading ? (
          <Lottie
            lottieRef={lottieRef}
            animationData={loadingAnimation}
            onLoopComplete={stopLoading}
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
