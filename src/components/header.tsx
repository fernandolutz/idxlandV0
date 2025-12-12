'use client';

import Link from 'next/link';

import { IndexDigitalLogo } from '@/components/icons';
import MobileNav from './mobile-nav';
import { Button } from './ui/button';

const navLinks = [
  { href: '#', label: 'Início' },
  { href: '#solutions', label: 'Soluções' },
  { href: '#partners', label: 'Parceiros' },
  { href: '#clients', label: 'Clientes' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <IndexDigitalLogo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg sm:inline-block">
              IndexTI
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <MobileNav navLinks={navLinks} />

        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <IndexDigitalLogo className="h-8 w-8 text-primary" />
            <span className="font-bold">IndexTI</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild>
                <Link href="https://indexti.on.spiceworks.com/portal" target="_blank">
                    Abrir Chamado
                </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
