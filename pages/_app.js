import '../styles/globals.css'
import Navbar from "../src/components/navbar/Navbar";

export default function App({ Component, pageProps }) {
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
        <Component {...pageProps} />
      </div>
    </div>
    )
}
