'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IndexDigitalLogo } from '@/components/icons';

const navLinks = [
  { href: '#partners', label: 'Parceiros' },
  { href: '#clients', label: 'Clientes' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <IndexDigitalLogo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Index Digital
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

        {/* Mobile Nav */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link href="/" className="flex items-center space-x-2" onClick={closeSheet}>
              <IndexDigitalLogo className="h-6 w-6 text-primary" />
              <span className="font-bold">Index Digital</span>
            </Link>
            <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground"
                    onClick={closeSheet}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pl-6">
              <Button asChild className="w-full">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Service Desk
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center space-x-2 md:hidden">
            <IndexDigitalLogo className="h-6 w-6 text-primary" />
            <span className="font-bold">Index Digital</span>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden md:flex">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Service Desk
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
