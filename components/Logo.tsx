'use client'

import React from 'react'
import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 200, className = '' }) => {
  return (
    <div 
      className={`relative ${className}`} 
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo/logo.png"
        alt="Fiyel Bet Logo - Goat House"
        width={size}
        height={size}
        className="drop-shadow-2xl object-contain"
        priority
        unoptimized
      />
    </div>
  )
}

export default Logo

