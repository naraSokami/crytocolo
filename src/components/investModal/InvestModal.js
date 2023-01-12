import styles from './InvestModal.module.sass';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { ethers } from 'ethers';
import Notif from '../notif/Notif';

export default function Page({company, setInvestingCompany, addNotif}) {
  const [connected, setConnected] = useState(false);
  const [addressUser, setAddressUser] = useState("");
  const [amount, setAmount] = useState("");
  
  if (!company.id) 
  return <></>
  
  let provider = null
  let signer = null

  const connect = async () => {
      provider = new ethers.providers.Web3Provider(window.ethereum);
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        if (signer) {
          setAddressUser(await signer.getAddress());
          setConnected(true);

          addNotif("Connected")
        } else {
          console.error('Signer is null');
        }
      } else {
        console.error('Provider is null');
      }
  };

  const invest = async () => {
      if (amount == 0 ||amount == "")
        return 

      const transactionRequest = {
          to: company.address, //platform Goerli test address
          from: addressUser,
          value: ethers.utils.parseEther(amount)
      };

      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();

      if (provider && signer) {
        await signer.sendTransaction(transactionRequest)
        .then(() => {
          addNotif("Transaction successful")
          setInvestingCompany({})
        })
        .catch(err => {
          if (err.code === "INSUFFICIENT_FUNDS") {
            addNotif("Not enough funds", "danger")
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
          {!connected && (
            <>
              <p>Connect to your wallet</p>
              <button className="btn" onClick={connect}>
                  Connect
              </button>
            </>
          )}
          {connected && (
            <>
              <p>Connected with:<br/><span>{addressUser}</span></p>
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
  