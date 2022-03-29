import Link from 'next/link'

const IndexPage = () => (
  <main title="Home | Next.js + TypeScript Example" className="container mx-auto bg-violet-600/5 text-white">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </main>
)

export default IndexPage
