import Link from 'next/link'
import Layout from '../components/Layout'
import Dashboard from "../components/main/dashboard"

const IndexPage = () => (
  <main
    title="FIDIS Crypto Index Assets - Home"
    className="container mx-auto py-12 text-white"
  >
    <Dashboard />
  </main>
)

export default IndexPage
