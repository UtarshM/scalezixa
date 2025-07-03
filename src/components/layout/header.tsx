
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-7 w-7 text-primary" />
          <span className="font-headline text-lg font-bold">Scalezix.Academy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden md:flex">
             <Link href="/#suggestion-tool">Course Finder</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full">
                 <div className="flex items-center justify-between border-b pb-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                       <Icons.logo className="h-7 w-7 text-primary" />
                       <span className="font-headline text-lg font-bold">Scalezix.Academy</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                       <X className="h-5 w-5" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                 </div>
                 <nav className="flex flex-col gap-6 pt-8">
                    {navLinks.map((link) => (
                       <Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                             "text-lg font-medium transition-colors hover:text-primary",
                             pathname === link.href ? "text-primary" : "text-foreground"
                          )}
                       >
                          {link.name}
                       </Link>
                    ))}
                 </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
