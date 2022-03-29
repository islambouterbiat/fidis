import Link from 'next/link'

const AboutPage = () => (
  <main title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </main>
)

export default AboutPage
