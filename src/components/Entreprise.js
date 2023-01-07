import Link from "next/link"
import styles from '../../styles/components/Entreprise.module.css';

export default function Page({data}) {
    return (
      <Link href={`/entreprises/${data.id}`}>
        <div className={styles.entreprise}>
          <h3><span>{data.name.slice(0, 1)}</span>{data.name.slice(1)}</h3>
          <img src={data.logo} />
          <p>{data.description.slice(0, 120) + "..."}</p>
          <button className="btn">Invest</button>
        </div>
      </Link>
    )
  }
  