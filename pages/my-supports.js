import styles from '../styles/pages/my-supports.module.sass';

export default function Page({supports}) {
  return (
    <div className={styles.supports}>
      <h1>My <span style={{ color: 'var(--prim)' }}>Supports</span></h1>
      <div>
        {
          supports.map(support => (
            <div key={support.id} className={styles.support}>
              <div>
                <img src={support.company.logo} />
                <h2><span style={{ color: 'var(--prim)' }}>{support.company.name.slice(0, 1)}</span>{support.company.name.slice(1)}</h2>
              </div>
              <div>
                <h4>Total Support</h4>
                <p>{support.amount}$</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const {supports, companies} = await import("/data/data.json")

  for (const support of supports) {
    support.company = {
      ...companies.find(company => company.id === support.company_id)
    }
  }

  return {
    props: {
      supports: supports || []
    },
  }
}