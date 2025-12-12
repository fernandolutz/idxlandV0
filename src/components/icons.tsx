import type { SVGProps } from 'react';

export function IndexDigitalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 130"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="currentColor">
        {/* Chip Icon */}
        <path d="M75,10 h50 v5 h-50 z" /> 
        <path d="M75,65 h50 v5 h-50 z" /> 
        <path d="M70,15 h5 v50 h-5 z" />
        <path d="M125,15 h5 v50 h-5 z" />
        <rect x="80" y="20" width="40" height="40" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="92.5" y="32.5" width="15" height="15" stroke="currentColor" strokeWidth="2" fill="none" />
        
        {/* Chip Legs */}
        <path d="M82,10 v-5 h5 v5 z" />
        <path d="M92,10 v-5 h5 v5 z" />
        <path d="M102,10 v-5 h5 v5 z" />
        <path d="M112,10 v-5 h5 v5 z" />

        <path d="M82,70 v5 h5 v-5 z" />
        <path d="M92,70 v5 h5 v-5 z" />
        <path d="M102,70 v5 h5 v-5 z" />
        <path d="M112,70 v5 h5 v-5 z" />
        
        <path d="M70,22 h-5 v5 h5 z" />
        <path d="M70,32 h-5 v5 h5 z" />
        <path d="M70,42 h-5 v5 h5 z" />
        <path d="M70,52 h-5 v5 h5 z" />

        <path d="M130,22 h5 v5 h-5 z" />
        <path d="M130,32 h5 v5 h-5 z" />
        <path d="M130,42 h5 v5 h-5 z" />
        <path d="M130,52 h5 v5 h-5 z" />
        
        {/* Text */}
        <text
          x="100"
          y="105"
          fontFamily="sans-serif"
          fontSize="32"
          fontWeight="bold"
          textAnchor="middle"
        >
          Index TI
        </text>
        <text
          x="100"
          y="125"
          fontFamily="sans-serif"
          fontSize="10"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          SOLUÇÕES TECNOLÓGICAS
        </text>
      </g>
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.2-.5.1-.3-.1-.9-.4-1.8-1.1-.7-.5-1.1-1.2-1.3-1.4s-.2-.3-.1-.5c.1-.1.2-.3.4-.4.1-.1.2-.2.3-.3.1-.1.2-.3.1-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1 1 .1 1.3.1.3-.1.9-.4 1.1-.8.2-.4.2-.8.1-.9-.1-.2-.3-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.4l3.4 1-1-3.3c.8-1.4 1.3-3.1 1.3-4.8C22 6.5 17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
      />
    </svg>
  );
}
