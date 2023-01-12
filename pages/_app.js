import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";
import { useState } from 'react';
import Notif from '../src/components/notif/Notif';
import store from '../store/index'
import { Provider } from 'react-redux' 

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
        <Provider store={store}>
          <Component {...pageProps} addNotif={addNotif} />
        </Provider>
      </div>
      <div className="notifs">
        {
          notifs.map(notif => notif)
        }
      </div>
    </div>
    )
}
