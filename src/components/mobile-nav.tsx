'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IndexDigitalLogo } from '@/components/icons';

type NavLink = {
    href: string;
    label: string;
};

interface MobileNavProps {
    navLinks: NavLink[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeSheet = () => setIsSheetOpen(false);

  if (!isMounted) {
    return (
        <Button
            variant="ghost"
            className="mr-2 h-6 w-6 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            disabled
        >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
        </Button>
    );
  }

  return (
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
          <IndexDigitalLogo className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg">IndexTI</span>
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
      </SheetContent>
    </Sheet>
  );
}
