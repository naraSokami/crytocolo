import anime, { set } from 'animejs';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/pages/company.module.sass';
import InvestModal from '../../src/components/investModal/InvestModal'

export default function Page({company}) {
  const [displayedAmount, setAmount] = useState(0)
  const [investingCompany, setInvestingCompany] = useState({})

  let amount = {
    value: 0,
  }

  useEffect(() => {
    anime({
      targets: amount,
      value: company.amount_received,
      easing: 'linear',
      round: 1,
      update: function() {
        console.log(amount.value);
        setAmount(amount.value)
      }
    });
  }, [])

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
        <p><span className='amount'>{displayedAmount}</span>$</p>
      </div>
      <div>
        <button className='btn' onClick={ () => setInvestingCompany(company) }>Invest</button>
        <Link className='btn' href={company.link} target="_blank">See More</Link>
      </div>
      <InvestModal company={investingCompany} setInvestingCompany={setInvestingCompany} />
    </div>
  )
}

export async function getServerSideProps({params}) {
  const {companies} = await import("/data/data.json")

  return {
    props: {
      company: companies.find(c => c.id === Number(params.company)) || []
    },
  }
}