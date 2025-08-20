import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Welcome to <span className={styles.ninjaText}>Ninja Core</span>
        </h1>
        
        <p className={styles.heroDescription}>
          Where ancient tradition meets modern technology. Ninja Core is your gateway to 
          discovering the world&apos;s most elite shinobi warriors. 
        </p>

        <p className={styles.heroDescription}>
          Whether you are  seeking to hire a skilled operative or simply want to learn about 
          the art of stealth and combat, Ninja Core provides world&apos;s most famous ninja to meet your needs.
        </p>

        <p className={styles.heroDescription}>
          Explore our curated collection of ninja profiles, each meticulously verified 
          and updated with real-time mission data and skill assessments.
        </p>

        <div className={styles.ctaContainer}>
          <Link href="/ninjas" className={styles.ctaButton}>
            Explore Ninjas <span>&#8669;</span>

          </Link>
        </div>
      </div>
    </div>
  );
}