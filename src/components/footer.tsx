import { IndexDigitalLogo } from "@/components/icons";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-center gap-2">
            <IndexDigitalLogo className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground text-center sm:text-left">
                &copy; {new Date().getFullYear()} IndexTI. Todos os direitos reservados.
            </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/company/indexti" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://www.facebook.com/tiindex" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/index.ti/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
            </Link>
        </div>
      </div>
    </footer>
  );
}
