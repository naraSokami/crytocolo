import styles from '../styles/pages/contact.module.sass';

export default function Page() {
  return (
    <div className={styles.contact}>
      <h1><span style={{ color: 'var(--prim)' }}>Contact</span> Us</h1>
      <form>
        <div>
          <input placeholder='First Name' />
          <input placeholder='Last Name' />
        </div>
        <input placeholder='Email' style={{ width: '100%' }} />
        <textarea placeholder='Message...' style={{ width: '100%' }} ></textarea>
      </form>
    </div>
  )
}