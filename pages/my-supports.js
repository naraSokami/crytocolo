import anime from 'animejs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions, selectFromAddressTransactions, selectTransactions } from '../store/slices/transactions';
import styles from '../styles/pages/my-supports.module.sass';

export default function ({supports}) {
  const dispactch = useDispatch()
  const INVESTOR1_ADDRESS = "0xbaaca50cba062881a36b396e642cf047c4cbff97"; 
  const transactions = useSelector(selectFromAddressTransactions({address: INVESTOR1_ADDRESS}))
  console.log(transactions);

  useEffect(() => {
    anime({
      targets: '.support',
      translateX: ['100vw', 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInExpo',
      delay: anime.stagger(200, {start: -1000})
    });

    dispactch(fetchTransactions())
  }, [])

  return (
    <div className={styles.supports}>
      <h1>My <span style={{ color: 'var(--prim)' }}>Supports</span></h1>

      {/* <div>
        {transactions.map((transaction, i) => 
          <div className={styles.transaction} key={i}>
            <p>{transaction.value}</p>
            <p>{transaction.from}</p>
            <p>{transaction.to}</p>
          </div>
        )}
      </div> */}

      <div>
        {
          transactions.map(support => (
            <div key={support.id} className={[styles.support, 'support'].join(' ')}>
              <div>
                <img src={support.company.logo} />
                <h2><span style={{ color: 'var(--prim)' }}>{support.company.name.slice(0, 1)}</span>{support.company.name.slice(1)}</h2>
              </div>
              <div>
                <h4>Total Support</h4>
                <p>{support.value}$</p>
              </div>
            </div>
          ))
        }
      </div>
      <div style={{height: '50px'}}></div>
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