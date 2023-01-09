import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";
import { useState } from 'react';
import Notif from '../src/components/notif/Notif';

export default function App({ Component, pageProps }) {
  const [notifs, setNotifs] = useState([]);

  const addNotif = (msg, type = 'success') => {
    setNotifs(prev => [...prev, <Notif key={Date.now()} message={msg} type={type} />])
  }

  return (
    <div style={{
      display: 'flex',
    }}>
      <Navbar />
      <div style={{
        width: '100%',
        height: '100vh',
        overflowY: 'scroll',
        position: 'relative',
      }}>
        <Component {...pageProps} addNotif={addNotif} />
      </div>
      <div className="notifs">
        {
          notifs.map(notif => notif)
        }
      </div>
    </div>
    )
}
