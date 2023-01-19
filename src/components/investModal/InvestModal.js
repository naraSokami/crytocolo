import styles from './InvestModal.module.sass';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { ethers } from 'ethers';
import Notif from '../notif/Notif';
import { useDispatch, useSelector } from 'react-redux';
import { connectUser, selectUserAddress } from '../../../store/slices/user';
import { addNotif } from '../../../store/slices/notifs';

export default function Page({ company, setInvestingCompany }) {
  const [connected, setConnected] = useState(false);
  const [amount, setAmount] = useState("");
  const dispacth = useDispatch()
  const userAddress = useSelector(selectUserAddress)
  
  if (!company.id)
  return <></>
  
  let provider = null
  let signer = null

  const invest = async () => {
      if (amount == 0 ||amount == "")
        return 

      const transactionRequest = {
        to: company.address, //platform Goerli test address
        from: userAddress,
        value: ethers.utils.parseEther(amount)
      };

      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();

      if (provider && signer) {
        await signer.sendTransaction(transactionRequest)
        .then(() => {
          dispacth(addNotif({
            msg: "Transaction successful"
          }))
          setInvestingCompany({})
        })
        .catch(err => {
          if (err.code === "INSUFFICIENT_FUNDS") {
            dispacth(addNotif({
              msg: "Not enough funds",
              type: "danger"
            }))
          }
        });
      }
  };

  return (
    <div className={styles.wrapper} onClick={ (e) => { e.preventDefault(); /*setInvestingCompany({})*/ } }>
      <div className={styles.modal} onClick={ (e) => e.preventDefault()  }>
        <div className='head'>
          <h2>Invest in Climate</h2>
        </div>
        <div>
          <img src={company.logo} />
        </div>
        <div>
          {!userAddress && (
            <>
              <p>Connect to your wallet</p>
              <button className="btn" onClick={() => dispacth(connectUser())}>
                  Connect
              </button>
            </>
          )}
          {userAddress && (
            <>
              <p>Connected with:<br/><span>{userAddress}</span></p>
              <input type="number" placeholder='Amount (eth)' value={amount} onChange={ (e) => setAmount(e.target.value) } />
              <button className='btn' onClick={invest}>
                  Invest
              </button>
            </>
          )}
        </div>
        <div className={styles.close} onClick={(e) => { e.preventDefault(); setInvestingCompany({}) }}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}
  