import Link from 'next/link'

export default function About() {
  return (
    <div>
      <div>About</div>
      <p>Hellow there</p>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  )
}
