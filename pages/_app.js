import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";
import { useState } from 'react';
import Notif from '../src/components/notif/Notif';
import store from '../store/index'
import { Provider, useSelector } from 'react-redux' 
import { selectnotifs } from '../store/slices/notifs';
import Notifs from '../src/components/notifs/Notifs';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div style={{
        display: 'flex',
      }}>
        <Script src="/js/scroll-animation.js" />
        <Navbar />
        <div style={{
          width: '100%',
          height: '100vh',
          overflowY: 'scroll',
          position: 'relative',
        }}>
            <Component {...pageProps} />
        </div>
        <Notifs />
        
      </div>
    </Provider>
    )
}
