import styles from '../styles/pages/about-us.module.sass';

export default function () {
	return (
		<div className={styles.about}>
      <div>
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2>Join the <span>fight</span> against climate change</h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
      <div>
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2><span>Join</span> the fight against climate <span>change</span></h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
      <div>
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2>Join the fight against<span> climate change</span></h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
		</div>
	)
}
  