import Popup from '../components/constants/Popup'
import Dashboard from '../components/main/dashboard'
import Head from 'next/head'

const IndexPage = () => (
  <>
    <Head>
      <title>FIDIS | Dashboard</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main
      title="FIDIS Crypto Index Assets - Home"
      className="container mx-auto h-full py-6 text-white"
    >
      <Dashboard />
    </main>
  </>
)

export default IndexPage
