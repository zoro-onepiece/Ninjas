export const metadata = {
    title: "List", // Will show as "Ninja | List"
};
import styles from "../ninja.module.css";
import Link from "next/link";

async function getNinjas() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Ninjas() {
    const ninjas = await getNinjas();

    return (
        <div>
            <h1>Your Ninjas</h1>
            {ninjas.map((ninja) => (
                <div key={ninja.id} >
                    <Link href={`/ninjas/${ninja.id}`} className={styles.single} >{ninja.name}</Link>

                </div>
            ))

            }

        </div >
    );
}

