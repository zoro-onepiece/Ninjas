import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="navbar">
            < div className="logo">
                <Image src="/kakashi.png" height={77} width={128} alt="logo of website" ></Image>
            </div>

            <Link href="/" >   Home</Link>
            <Link href="/ninjas"> Ninjas</Link>
            <Link href="/about"> About</Link>
        </nav>
    );
}

export default Navbar;