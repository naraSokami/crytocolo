import anime from 'animejs';
import Link from 'next/link';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions, selectFromAddressTransactions } from '../store/slices/transactions';
import { connectUser, selectUserAddress } from '../store/slices/user';
import styles from '../styles/pages/my-supports.module.sass';

function numberExponentToLarge(numIn) {
  numIn +="";                                            // To cater to numric entries
  var sign="";                                           // To remember the number sign
  numIn.charAt(0)=="-" && (numIn =numIn.substring(1),sign ="-"); // remove - sign & remember it
  var str = numIn.split(/[eE]/g);                        // Split numberic string at e or E
  if (str.length<2) return sign+numIn;                   // Not an Exponent Number? Exit with orginal Num back
  var power = str[1];                                    // Get Exponent (Power) (could be + or -)
  if (power ==0 || power ==-0) return sign+str[0];       // If 0 exponents (i.e. 0|-0|+0) then That's any easy one
 
  var deciSp = /* 1.1.toLocaleString().substring(1,2); */ '.'  // Get Deciaml Separator
  str = str[0].split(deciSp);                        // Split the Base Number into LH and RH at the decimal point
  var baseRH = str[1] || "",                         // RH Base part. Make sure we have a RH fraction else ""
      baseLH = str[0];                               // LH base part.
 
   if (power>0) {   // ------- Positive Exponents (Process the RH Base Part)
      if (power> baseRH.length) baseRH +="0".repeat(power-baseRH.length); // Pad with "0" at RH
      baseRH = baseRH.slice(0,power) + deciSp + baseRH.slice(power);      // Insert decSep at the correct place into RH base
      if (baseRH.charAt(baseRH.length-1) ==deciSp) baseRH =baseRH.slice(0,-1); // If decSep at RH end? => remove it
 
   } else {         // ------- Negative Exponents (Process the LH Base Part)
      let num= Math.abs(power) - baseLH.length;                           // Delta necessary 0's
      if (num>0) baseLH = "0".repeat(num) + baseLH;                       // Pad with "0" at LH
      baseLH = baseLH.slice(0, power) + deciSp + baseLH.slice(power);     // Insert "." at the correct place into LH base
      if (baseLH.charAt(0) == deciSp) baseLH="0" + baseLH;                // If decSep at LH most? => add "0"
   }
  return sign + baseLH + baseRH;                                          // Return the long number (with sign)
}

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
                  <p>{numberExponentToLarge(support.value / (10 ** 18))}<span> ETH</span></p>
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