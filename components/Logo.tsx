'use client'

import React from 'react'

interface LogoProps {
  size?: number
  className?: string
}

const Logo: React.FC<LogoProps> = ({ size = 200, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-2xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle - Charcoal grill (Midija) */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="#2C2C2C"
          stroke="#C97D60"
          strokeWidth="2"
        />
        
        {/* Ethiopian Tibeb pattern border */}
        <defs>
          <pattern
            id="tibeb-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 10 L 10 0 L 20 10 L 10 20 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </pattern>
          
          {/* Flame gradient */}
          <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF4500" stopOpacity="1" />
            <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.8" />
          </linearGradient>
          
          {/* Glow effect for flame */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Tibeb border pattern */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="url(#tibeb-pattern)"
          opacity="0.3"
        />
        
        {/* Inner circle for negative space effect */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="#2C2C2C"
        />
        
        {/* Goat Horns - Left Horn (using negative space) */}
        <path
          d="M 60 80 Q 50 50, 45 30 Q 50 25, 55 30 Q 60 40, 65 50 Q 70 60, 75 70 Q 70 75, 65 80 Z"
          fill="#F5E6D3"
          opacity="0.95"
        />
        
        {/* Goat Horns - Right Horn (using negative space) */}
        <path
          d="M 140 80 Q 150 50, 155 30 Q 150 25, 145 30 Q 140 40, 135 50 Q 130 60, 125 70 Q 130 75, 135 80 Z"
          fill="#F5E6D3"
          opacity="0.95"
        />
        
        {/* Stylized Flame between horns */}
        <g filter="url(#glow)">
          {/* Main flame body */}
          <path
            d="M 90 100 Q 100 60, 100 50 Q 100 60, 110 100 Q 105 110, 100 120 Q 95 110, 90 100 Z"
            fill="url(#flame-gradient)"
          />
          
          {/* Flame flicker - left */}
          <path
            d="M 85 105 Q 88 90, 92 85 Q 90 88, 88 95 Z"
            fill="#FF6B35"
            opacity="0.8"
          />
          
          {/* Flame flicker - right */}
          <path
            d="M 115 105 Q 112 90, 108 85 Q 110 88, 112 95 Z"
            fill="#FF6B35"
            opacity="0.8"
          />
          
          {/* Flame center highlight */}
          <ellipse
            cx="100"
            cy="75"
            rx="8"
            ry="15"
            fill="#FFD700"
            opacity="0.6"
          />
        </g>
        
        {/* Additional grill texture lines */}
        <circle
          cx="100"
          cy="100"
          r="75"
          fill="none"
          stroke="#3A3A3A"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.3"
        />
      </svg>
    </div>
  )
}

export default Logo

