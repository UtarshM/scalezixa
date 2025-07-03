
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Icons } from "@/components/icons";

export function Footer() {
  const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Workshops", href: "/workshops" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icons.logo className="h-8 w-8 text-primary" />
            <Link href="/" className="ml-2 font-headline text-xl font-bold">
              Scalezix.Academy
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Scalezix.Academy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
