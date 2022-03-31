import Link from 'next/link'
import MarketCap from '../components/main/dashboard/MarketCap'

const IndexPage = () => (
  <main
    title="Home | Next.js + TypeScript Example"
    className="container mx-auto py-12 text-white"
  >
    <MarketCap />
  </main>
)

export default IndexPage
