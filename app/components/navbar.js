import Link from "next/link";
import Image from "next/image";
import styles from "../navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Image 
                    src="/kakashi.png" 
                    height={200} 
                    width={200}  
                    alt="Ninja Core Logo" 
                    className={styles.logoImage}
                />
                <h1 className={styles.logoText}>Ninja Core</h1>
            </div>

            <div className={styles.navLinks}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="/ninjas" className={styles.navLink}>Ninjas</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
            </div>
        </nav>
    );
}

export default Navbar;