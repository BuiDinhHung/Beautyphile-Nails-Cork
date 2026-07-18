"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUp,
  CalendarHeart,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { business, navItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="top" className="relative overflow-hidden">
        {children}
      </main>
      <SiteFooter />
      <FloatingActions />
      <MobileBookingBar />
      <BackToTop />
    </>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 sm:px-5">
      <nav className="glass mx-auto flex h-16 max-w-[1120px] items-center justify-between rounded-[1.7rem] px-3 sm:h-[4.5rem] sm:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Beautyphile Nails Cork home">
          <Image
            src="/images/logo-transparent.png"
            alt="Beautyphile Nails Cork logo"
            width={52}
            height={52}
            priority
            className="logo-float size-12 rounded-full object-contain"
          />
          <span className="hidden font-serif text-2xl font-semibold text-ink-900 sm:block">
            Beautyphile
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "pastel-link rounded-full px-4 py-2 text-xs font-bold uppercase transition",
              pathname === "/" ? "text-rose-400" : "text-ink-700 hover:text-rose-400",
            )}
          >
            Home
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "pastel-link rounded-full px-4 py-2 text-xs font-bold uppercase transition",
                pathname === item.href ? "text-rose-400" : "text-ink-700 hover:text-rose-400",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="secondary" size="sm">
            <a href={business.phoneHref}>
              <Phone className="size-4" />
              Call
            </a>
          </Button>
          <Button asChild size="sm">
            <a href={business.whatsappHref} target="_blank" rel="noreferrer">
              <CalendarHeart className="size-4" />
              Book
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-gold-100 bg-white/80 text-ink-900 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="glass mx-auto mt-2 max-w-[calc(100vw-1.5rem)] rounded-2xl p-4 md:hidden"
          >
            <div className="grid gap-1">
              <Link
                href="/"
                className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button asChild variant="secondary">
                <a href={business.phoneHref}>
                  <Phone className="size-4" />
                  Call
                </a>
              </Button>
              <Button asChild>
                <a href={business.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  Book
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-5 z-40 hidden flex-col gap-2 md:flex">
      <Button asChild variant="icon" size="icon">
        <a href={business.whatsappHref} target="_blank" rel="noreferrer" aria-label="Book on WhatsApp">
          <MessageCircle className="size-5" />
        </a>
      </Button>
      <Button asChild variant="icon" size="icon">
        <a href={business.phoneHref} aria-label="Call Beautyphile Nails Cork">
          <Phone className="size-5" />
        </a>
      </Button>
      <Button asChild variant="icon" size="icon">
        <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Open Instagram">
          <Instagram className="size-5" />
        </a>
      </Button>
    </div>
  );
}

function MobileBookingBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-100 bg-cream-50/90 px-4 py-3 shadow-soft-line backdrop-blur-2xl md:hidden">
      <div className="grid grid-cols-[1fr_1fr] gap-2">
        <Button asChild variant="secondary">
          <a href={business.phoneHref}>
            <Phone className="size-4" />
            Call
          </a>
        </Button>
        <Button asChild>
          <a href={business.whatsappHref} target="_blank" rel="noreferrer">
            <CalendarHeart className="size-4" />
            Book
          </a>
        </Button>
      </div>
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 900);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-6 left-5 z-40 hidden size-11 items-center justify-center rounded-full border border-gold-100 bg-white/90 text-ink-900 shadow-soft-line backdrop-blur md:flex"
        >
          <ArrowUp className="size-5" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-cream-50 pb-28 pt-12 md:pb-10">
      <div className="section-shell flex flex-col gap-8 border-t border-gold-100 pt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-transparent.png"
            alt="Beautyphile Nails Cork"
            width={62}
            height={62}
            className="size-14 rounded-full object-contain"
          />
          <div>
            <p className="font-serif text-2xl font-semibold text-ink-900">Beautyphile Nails Cork</p>
            <a
              href={business.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-ink-700 transition hover:text-rose-400"
            >
              9 Oliver Plunkett Street, Cork
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="icon" size="icon">
            <a href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="size-5" />
            </a>
          </Button>
          <Button asChild variant="icon" size="icon">
            <a href={business.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="size-5" />
            </a>
          </Button>
          <Button asChild variant="icon" size="icon">
            <a href={business.emailHref} aria-label="Email Beautyphile Nails Cork">
              <Mail className="size-5" />
            </a>
          </Button>
          <Button asChild variant="icon" size="icon">
            <a href={business.maps} target="_blank" rel="noreferrer" aria-label="Open Google Maps">
              <MapPin className="size-5" />
            </a>
          </Button>
        </div>

        <p className="text-sm text-ink-700">Copyright © 2026 Hoangcaster</p>
      </div>
    </footer>
  );
}
