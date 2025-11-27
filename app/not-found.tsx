import Link from 'next/link'
import Logo from '@/components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-straw via-beige to-straw flex items-center justify-center px-6">
      <div className="text-center">
        <Logo size={200} className="mx-auto mb-8" />
        <h1 className="text-brand text-6xl md:text-8xl text-charcoal text-stamped mb-4">
          404
        </h1>
        <h2 className="text-brand text-3xl md:text-4xl text-terracotta text-stamped mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-charcoal-light mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-flame-orange hover:bg-flame-red text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

