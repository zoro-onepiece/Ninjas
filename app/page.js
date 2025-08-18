import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export const metadata = {
  title: "Ninja | Home", // Will show as "Ninja | List"
};

export default function Home() {
  return (
    <>
      <div className={styles.title}>
        <h1>Welcome to My Ninja App</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/" className={styles.btn} >
          See Ninja Listing
        </Link>

      </div>

    </>
  );
}
