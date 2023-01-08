import Link from 'next/link';
import styles from '../../styles/pages/company.module.sass';

export default function Page({company}) {
  return (
    <div className={styles.company}>
      <div>
        <Link href="/companies">Go Back</Link>
      </div>
      <div>
        <img src={company.logo} />
        <h2>{company.name}</h2>
      </div>
      <div>
        <p>{company.description}</p>
      </div>
      <div>
        <h4>Total Amount Collected</h4>
        <p>{company.amount_received}$</p>
      </div>
      <div>
        <button className='btn'>Invest</button>
        <Link className='btn' href={company.link} target="_blank">See More</Link>
      </div>
    </div>
  )
}

export async function getServerSideProps({params}) {
  const {companies} = await import("/data/data.json")
  console.log(params);

  return {
    props: {
      company: companies.find(c => c.id === Number(params.company)) || []
    },
  }
}