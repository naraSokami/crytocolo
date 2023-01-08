import styles from './InvestModal.module.sass';
import { AiOutlineClose } from "react-icons/ai";

export default function Page({company, setInvestingCompany}) {
  if (!company.id) 
    return <></> 

  return (
    <div className={styles.wrapper} onClick={ (e) => e.preventDefault() }>
      <div className={styles.modal} onClick={ (e) => e.preventDefault() }>
        <div className='head'>
          <h2>Invest in Climate</h2>
        </div>
        <div>
          <img src={company.logo} />
          <input type="number" placeholder='Amount'/>
        </div>
        <div>
          <button className='btn'>Invest</button>
        </div>
        <div className={styles.close} onClick={(e) => { e.preventDefault(); setInvestingCompany({}) }}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}
  