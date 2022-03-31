import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="lTwfKp0VXkuuBGqzlb3E1gvK6khodBV9gPdlAxZH"
      serverUrl="https://8pasc9v4xnot.usemoralis.com:2053/server"
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
