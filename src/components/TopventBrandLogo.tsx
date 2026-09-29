import React from 'react';

interface TopventBrandLogoProps {
  className?: string;
  size?: number | string;
  showBackground?: boolean;
}

export const TopventBrandLogo: React.FC<TopventBrandLogoProps> = ({
  className = '',
  size = 32,
  showBackground = false,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`shrink-0 select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft shadow for authentic 3D depth matching user's image */}
        <filter id="logoShadow" x="-15%" y="-15%" width="140%" height="140%">
          <feDropShadow
            dx="2"
            dy="6"
            stdDeviation="4"
            floodColor="#000000"
            floodOpacity="0.45"
          />
        </filter>

        {/* Vibrant warm orange gradient */}
        <linearGradient id="logoOrangeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff7800" />
          <stop offset="50%" stopColor="#ff6200" />
          <stop offset="100%" stopColor="#ff5000" />
        </linearGradient>
      </defs>

      {/* Optional deep purple background card */}
      {showBackground && (
        <rect width="200" height="200" rx="36" fill="#18042c" />
      )}

      {/* Main Stylized Brand Glyph "t" with Accent Dashes */}
      <g filter="url(#logoShadow)">
        {/* Top-Right Accent Dash */}
        <rect
          x="122"
          y="70"
          width="18"
          height="7"
          rx="3.5"
          fill="url(#logoOrangeGrad)"
        />

        {/* Bottom-Left Accent Dash */}
        <rect
          x="62"
          y="136"
          width="18"
          height="8.5"
          rx="4.25"
          fill="url(#logoOrangeGrad)"
        />

        {/* Stylized Lowercase 't' with sleek curves */}
        <path
          d="M 98 64
             C 98 64, 114 62, 115 74
             L 112 82
             L 128 82
             C 133 82, 134 94, 127 94
             L 110 94
             L 104 125
             C 102 135, 107 141, 124 140
             C 129 139.7, 132 144, 129 148
             C 123 154, 93 154, 88 135
             L 94 94
             L 76 94
             C 71 94, 71 82, 78 82
             L 96 82
             L 99 71
             C 100 66, 97 64, 98 64 Z"
          fill="url(#logoOrangeGrad)"
        />
      </g>
    </svg>
  );
};
