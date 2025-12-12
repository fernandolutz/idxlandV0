import type { SVGProps } from 'react';

export function IndexDigitalLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z"
        fill="currentColor"
      />
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
