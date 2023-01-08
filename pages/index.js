import styles from '../styles/pages/welcome.module.sass';

export default function Page() {
  return (
    <div className={styles.welcome}>
      <h1>Because we <span>care</span> <br />About <span>future</span></h1>
      {/* <div className="glow" style={{ top: '-30px', left: '-70px' }}></div> */}
    </div>
  )
}
