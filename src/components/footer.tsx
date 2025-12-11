import { IndexDigitalLogo } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-6 text-center">
        <div className="flex items-center justify-center gap-2">
            <IndexDigitalLogo className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} IndexTI. Todos os direitos reservados.
            </p>
        </div>
      </div>
    </footer>
  );
}
