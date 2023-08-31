import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../state/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
    <Navbar/>
    <Component {...pageProps} />
      <Footer/>
    </Provider>
    </>
    )
}

export default MyApp
