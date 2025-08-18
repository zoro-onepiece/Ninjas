import Link from 'next/link';
import styles from '../../ninja.module.css'; // Import CSS module

async function getNinjaDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch ninja details');
  return res.json();
}

export default async function NinjaDetails({ params }) {
  const ninja = await getNinjaDetails(params.id);

  return (
    <div className={styles.container}>
      <Link href="/ninjas" className={styles.backLink}>
        ← Back to Ninjas
      </Link>
      
      <div className={styles.card}>
        <h1 className={styles.title}>{ninja.name}</h1>
        <div className={styles.details}>
          <p><strong>Email:</strong> {ninja.email}</p>
          <p><strong>Phone:</strong> {ninja.phone}</p>
          <p><strong>Website:</strong> {ninja.website}</p>
          <p><strong>Company:</strong> {ninja.company?.name}</p>
        </div>
      </div>
    </div>
  );


}