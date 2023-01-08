import styles from '../styles/pages/about-us.module.sass';
import anime from 'animejs';
import { useEffect } from 'react';

export default function () {
  useEffect(() => {
    anime({
      targets: '.slide-anime',
      translateY: [300, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInOutExpo',
      delay: anime.stagger(500, {start: 0})
    });
  }, [])

	return (
		<div className={styles.about}>
      <div className="slide-anime">
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2>Join the <span>fight</span> against climate change</h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
      <div className="slide-anime">
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2><span>Join</span> the fight against climate <span>change</span></h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
      <div className="slide-anime">
			  <img src="/img/environment.svg" className={styles.img} />
        <div>
          <h2>Join the fight against<span> climate change</span></h2>
          <p>Become a Climate Pioneer and help us remove CO₂ from the air so we can return it safely underground.</p>
        </div>
      </div>
		</div>
	)
}
  