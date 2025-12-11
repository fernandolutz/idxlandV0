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
