import anime from 'animejs';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions, selectFromAddressTransactions } from '../store/slices/transactions';
import { connectUser, selectUserAddress } from '../store/slices/user';
import styles from '../styles/pages/my-supports.module.sass';

export default function ({supports}) {
  const dispatch = useDispatch()
  const address = useSelector(selectUserAddress)
  const transactions = useSelector(selectFromAddressTransactions({address}))

  useEffect(() => {
    anime({
      targets: '.support',
      translateX: ['100vw', 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInExpo',
      delay: anime.stagger(200, {start: -1000})
    });

    if (address)
      dispatch(fetchTransactions(address))

  }, [address])

  return (
    <div className={styles.supports}>
      <h1>My <span style={{ color: 'var(--prim)' }}>Supports</span></h1>
      {address ?
        <div>
        {
          transactions.map(support => (
            <Link target="_blank" href={`https://goerli.etherscan.io/tx/${support.hash}`} key={support.transactionIndex} className={[styles.support, 'support'].join(' ')}>
              <div>
                <img src={support.company.logo} />
                <h2><span style={{ color: 'var(--prim)' }}>{support.company.name.slice(0, 1)}</span>{support.company.name.slice(1)}</h2>
              </div>
              <div>
                <h4>Transfert amount</h4>
                {
                  // support.value < 1000000000 ?
                  // <p>{support.value}<span>wei</span></p>
                  // :
                  <p>{support.value / 10 ** 18}<span> ETH</span></p>
                }
              </div>
            </Link>
          ))
        }
      </div>
      :
      <div className={styles.connect}>
        <h3>Begin <span>now</span> by connecting your <span>wallet</span></h3>
        <button className='btn' onClick={ () => dispatch(connectUser()) }>Connect my wallet</button>
      </div>
      }
      <div style={{height: '50px'}}></div>
    </div>
  )
}

export async function getServerSideProps() {
  const {supports, companies} = await import("/data/data.json")

  let finalSupports = []

  for (const support of supports) {
    const company = companies.find(company => company.id === support.company_id)

    if (!company)
      continue

    support.company = company
    finalSupports.push(support)
  }

  return {
    props: {
      supports: finalSupports || []
    },
  }
}