import Link from "next/link"
import { useState } from "react";
import styles from './Company.module.css';
import InvestModal from '../investModal/InvestModal'

export default function Page({data}) {
  const [investingCompany, setInvestingCompany] = useState({})
  
  return (
    <Link href={`/companies/${data.id}`}>
      <div className={`${styles.company} company`}>
        <h3><span>{data.name.slice(0, 1)}</span>{data.name.slice(1)}</h3>
        <img src={data.logo} />
        <p>{data.description.slice(0, 120) + "..."}</p>
        <button className="btn" onClick={ (e) => { e.preventDefault(); setInvestingCompany(data) } }>Invest</button>
      </div>
      <InvestModal company={investingCompany} setInvestingCompany={setInvestingCompany} />
    </Link>
  )
}
  