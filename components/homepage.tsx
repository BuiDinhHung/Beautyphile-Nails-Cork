"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUp,
  CalendarHeart,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  aftercareTips,
  business,
  faqs,
  galleryItems,
  instagramPosts,
  navItems,
  openingHours,
  proofPoints,
  reviews,
  salonImages,
  serviceCategories,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function MotionBlock({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  titleClassName,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  titleClassName?: string;
}) {
  return (
    <MotionBlock
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={cn("mt-3 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl", titleClassName)}>
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-ink-700 sm:text-lg">{text}</p> : null}
    </MotionBlock>
  );
}

export function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <AboutProof />
      <Services />
      <Aftercare />
      <Gallery />
      <Reviews />
      <InstagramStrip />
      <SalonTeam />
      <FAQ />
      <VisitBooking />
      <SiteFooter />
      <FloatingActions />
      <MobileBookingBar />
      <BackToTop />
    </main>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-4 sm:px-5">
      <nav className="glass mx-auto flex h-16 max-w-[1120px] items-center justify-between rounded-[1.7rem] px-3 sm:h-[4.5rem] sm:px-5">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Beautyphile Nails Cork home">
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
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href="#top"
            className="pastel-link rounded-full px-4 py-2 text-xs font-bold uppercase text-rose-400 transition"
          >
            Home
          </a>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="pastel-link rounded-full px-4 py-2 text-xs font-bold uppercase text-ink-700 transition hover:text-rose-400"
            >
              {item.label}
            </a>
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-ink-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
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

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 46]);

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden px-3 pb-12 pt-24 sm:px-6 sm:pt-28">
      <div className="watercolor-blob left-[-7rem] top-8 h-80 w-80 bg-blush-200/70" />
      <div className="watercolor-blob watercolor-blob-soft right-[-8rem] top-16 h-96 w-96 bg-mint-200/80 [animation-delay:1.2s]" />
      <div className="watercolor-blob bottom-8 left-[42%] h-56 w-56 bg-gold-100/60 [animation-delay:2.4s]" />

      <div className="section-shell relative z-10 flex min-h-[calc(100svh-8rem)] items-center px-0">
        <div className="hero-frame pastel-glow relative grid min-h-[660px] w-full overflow-hidden rounded-[2rem] border border-gold-200/80 p-6 sm:rounded-[2.3rem] sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div className="watercolor-blob left-[-5rem] top-36 h-72 w-72 bg-blush-200/75" />
          <div className="watercolor-blob watercolor-blob-soft bottom-[-8rem] right-16 h-80 w-80 bg-mint-200/80 [animation-delay:1.5s]" />
          <motion.svg
            className="gold-stroke pointer-events-none absolute inset-x-0 bottom-12 z-0 hidden h-48 w-full lg:block"
            viewBox="0 0 1180 220"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M58 74C210 178 362 186 516 145C693 98 785 159 936 126C1027 106 1089 66 1155 76"
              stroke="#c6a968"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.95 }}
              transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1], delay: 0.45 }}
            />
          </motion.svg>

          <div className="relative z-10 flex max-w-xl flex-col justify-center py-10 lg:py-0">
            <p className="eyebrow text-ink-800">
              Beautyphile Nails Cork
            </p>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-[0.92] text-ink-900 sm:text-7xl lg:text-8xl">
              Beauty
              <span className="block">in Every Detail</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-ink-700 sm:text-lg">
              Premium nail care in the heart of Cork City. Relax, unwind and let us take care of you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={business.whatsappHref} target="_blank" rel="noreferrer">
                  <CalendarHeart className="size-5" />
                  Book Appointment
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={business.phoneHref}>
                  <Phone className="size-5" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold text-ink-700">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-rose-400" />
                9 Oliver Plunkett Street
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-rose-400" />
                Hygiene-led nail care
              </span>
            </div>
          </div>

          <motion.div
            style={{ y: imageY }}
            className="relative z-10 hidden min-h-[410px] md:block lg:min-h-[560px]"
          >
            <div className="image-reveal absolute inset-0 overflow-hidden rounded-[1.75rem] bg-white/40">
              <Image
                src="/images/placeholders/nail3.png"
                alt="Pearl chrome extension nails by Beautyphile Nails Cork"
                fill
                quality={82}
                sizes="(min-width: 1024px) 52vw, 92vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-white/10 to-cream-50/70" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="logo-float absolute bottom-5 right-5 hidden size-28 rounded-full border border-gold-200 bg-white/50 p-1.5 backdrop-blur sm:block lg:bottom-7 lg:right-7 lg:size-36"
            >
              <Image
                src="/images/logo-transparent.png"
                alt="Beautyphile Nails Cork logo"
                fill
                sizes="144px"
                className="rounded-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutProof() {
  return (
    <section className="section-watercolor bg-cream-50 py-20 sm:py-28">
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <SectionHeading
          eyebrow="About the boutique"
          title="Cork city nail care with a softer kind of luxury."
          text="Beautyphile is designed for clients who want beautiful nails without the rush or noise: careful prep, clean shaping, premium-feeling finishes and a friendly appointment in the heart of the city."
        />
        <MotionBlock delay={0.1} className="rounded-2xl border border-gold-100 bg-white/70 p-6 shadow-soft-line backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blush-100 text-rose-400">
              <Sparkles className="size-5" />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-semibold text-ink-900">Premium, but approachable.</h3>
              <p className="mt-3 leading-7 text-ink-700">
                The site positions Beautyphile as a focused nail boutique: youthful, trustworthy and elegant without drifting into spa language.
              </p>
            </div>
          </div>
        </MotionBlock>
      </div>

      <div className="section-shell relative z-10 mt-14 grid gap-4 sm:grid-cols-3">
        {proofPoints.map((point, index) => (
          <MotionBlock key={point.label} delay={index * 0.08}>
            <div className="h-full rounded-2xl border border-gold-100 bg-white/60 p-6 shadow-soft-line backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-lift">
              <p className="font-serif text-5xl font-semibold text-rose-400">{point.value}</p>
              <h3 className="mt-3 text-base font-semibold text-ink-900">{point.label}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-700">{point.text}</p>
            </div>
          </MotionBlock>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-watercolor bg-white py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Nail care, calmly finished."
            titleClassName="lg:whitespace-nowrap"
            text="A nail-first menu for the appointments clients actually search for: BIAB, Shellac, gel, French, acrylic, extensions, nail art, pedicure, kids and men."
          />
          <MotionBlock delay={0.1} className="lg:justify-self-end">
            <Button asChild variant="secondary">
              <a href={business.instagram} target="_blank" rel="noreferrer">
                <Instagram className="size-4" />
                View recent work
              </a>
            </Button>
          </MotionBlock>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionBlock key={service.title} delay={index * 0.04}>
                <article className="group h-full overflow-hidden rounded-2xl border border-gold-100 bg-cream-50 shadow-soft-line transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-[0_22px_70px_rgba(244,143,164,0.18)]">
                  <div className="image-sheen relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} at Beautyphile Nails Cork`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="logo-float mb-4 inline-flex size-10 items-center justify-center rounded-full bg-white text-rose-400 shadow-soft-line">
                      <Icon className="size-4" />
                    </div>
                    <p className="eyebrow">{service.eyebrow}</p>
                    <h3 className="mt-2 font-serif text-2xl font-semibold text-ink-900">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink-700">{service.description}</p>
                  </div>
                </article>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Aftercare() {
  return (
    <section id="aftercare" className="section-watercolor bg-blush-50 py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Nail aftercare"
              title="Keep your manicure beautiful for longer."
              text="Simple daily habits help protect shine, structure and healthy natural nails between appointments."
            />
            <MotionBlock delay={0.08} className="mt-8">
              <div className="inline-flex max-w-md items-center gap-3 rounded-full border border-gold-100 bg-white/75 px-4 py-3 text-sm font-semibold text-ink-700 shadow-soft-line backdrop-blur-xl">
                <CalendarHeart className="size-5 text-rose-400" />
                Regular follow-ups keep every set looking fresh.
              </div>
            </MotionBlock>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {aftercareTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <MotionBlock key={tip.title} delay={index * 0.04}>
                  <article className="group h-full rounded-2xl border border-white/80 bg-white/70 p-5 shadow-soft-line backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-[0_22px_70px_rgba(244,143,164,0.16)]">
                    <div className="flex items-start gap-4">
                      <div className="logo-float flex size-12 shrink-0 items-center justify-center rounded-full border border-gold-100 bg-cream-50 text-rose-400 transition group-hover:bg-white">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold leading-tight text-ink-900">
                          {tip.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-ink-700">{tip.text}</p>
                      </div>
                    </div>
                  </article>
                </MotionBlock>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  useEffect(() => {
    if (!activeItem) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index === null ? index : (index + 1) % galleryItems.length));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + galleryItems.length) % galleryItems.length,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeItem]);

  return (
    <section id="gallery" className="section-watercolor bg-cream-50 py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Gallery"
          title="Soft manicure inspiration."
          titleClassName="lg:whitespace-nowrap"
          text="Image-first and built for swapping in real Beautyphile Instagram work as soon as final salon photos are available."
          align="center"
        />

        <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item, index) => (
              <motion.button
                layout
                key={item.title}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-2xl bg-white text-left shadow-soft-line transition duration-300 hover:shadow-[0_22px_70px_rgba(191,234,241,0.22)]",
                  item.tall ? "h-[560px]" : "h-[430px]",
                )}
                aria-label={`Open ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 text-cream-50 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-xs font-semibold uppercase">{item.filter}</p>
                  <p className="mt-1 font-serif text-2xl font-semibold">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.28 }}
              className="relative h-[82svh] w-full max-w-4xl overflow-hidden rounded-2xl bg-cream-50"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={activeItem.image} alt={activeItem.title} fill sizes="90vw" className="object-contain" />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-ink-900 backdrop-blur">
                {activeItem.title}
              </div>
              <button
                type="button"
                aria-label="Close gallery"
                className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-white/85 text-ink-900 backdrop-blur"
                onClick={() => setActiveIndex(null)}
              >
                <X className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Previous image"
                className="absolute left-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-900 backdrop-blur"
                onClick={() =>
                  setActiveIndex((index) =>
                    index === null ? index : (index - 1 + galleryItems.length) % galleryItems.length,
                  )
                }
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                className="absolute right-4 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink-900 backdrop-blur"
                onClick={() =>
                  setActiveIndex((index) => (index === null ? index : (index + 1) % galleryItems.length))
                }
              >
                <ChevronRight className="size-5" />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function Reviews() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section id="reviews" className="section-watercolor bg-white py-20 sm:py-28">
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeading
          eyebrow="Client feeling"
          title="The kind of nail appointment people rebook."
          text="Large, simple review moments make trust instant while keeping the page calm and premium."
        />

        <MotionBlock delay={0.1}>
          <div className="hero-frame relative overflow-hidden rounded-2xl border border-gold-100 p-6 shadow-soft-line sm:p-10">
            <div className="flex items-center gap-1 text-gold-300" aria-label="Five star review style">
              {Array.from({ length: 5 }).map((_, starIndex) => (
                <Star key={starIndex} className="size-5 fill-current" />
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={review.quote}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="mt-8 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink-900">{review.name}</p>
                    <p className="mt-1 text-sm text-ink-700">{review.detail}</p>
                  </div>
                  <div className="rounded-full border border-gold-100 bg-white px-3 py-2 text-sm font-semibold text-ink-700">
                    5.0 style
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous review"
                className="flex size-11 items-center justify-center rounded-full border border-gold-100 bg-white text-ink-900"
                onClick={() => setIndex((value) => (value - 1 + reviews.length) % reviews.length)}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                className="flex size-11 items-center justify-center rounded-full border border-gold-100 bg-white text-ink-900"
                onClick={() => setIndex((value) => (value + 1) % reviews.length)}
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="ml-2 flex gap-2">
                {reviews.map((item, dotIndex) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-label={`Show review ${dotIndex + 1}`}
                    onClick={() => setIndex(dotIndex)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      dotIndex === index ? "w-8 bg-rose-400" : "w-2.5 bg-gold-100",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="section-watercolor bg-cream-50 py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Instagram"
            title="Recent-work energy, curated for speed."
            text="A static, clickable feed keeps the homepage fast while pointing clients to the live Beautyphile profile."
          />
          <MotionBlock delay={0.1}>
            <Button asChild variant="secondary">
              <a href={business.instagram} target="_blank" rel="noreferrer">
                <Instagram className="size-4" />
                Follow Beautyphile
              </a>
            </Button>
          </MotionBlock>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, index) => (
            <MotionBlock key={`${post.title}-insta`} delay={index * 0.04}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl bg-white shadow-soft-line"
                aria-label={`Open Instagram for ${post.title}`}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 text-white opacity-0 transition group-hover:bg-ink-900/20 group-hover:opacity-100">
                  <Instagram className="size-6" />
                </div>
              </a>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function SalonTeam() {
  return (
    <section className="section-watercolor bg-white py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Salon"
          title="Bright stations, careful hands and a clean city-centre experience."
          text="This section is ready for real Beautyphile interiors, reception, chairs and team portraits as soon as final salon photos are supplied."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {salonImages.map((item, index) => (
            <MotionBlock key={item.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-2xl border border-gold-100 bg-cream-50 shadow-soft-line transition duration-300 hover:-translate-y-1 hover:border-blush-200 hover:shadow-[0_22px_70px_rgba(244,143,164,0.16)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-3xl font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-ink-700">{item.description}</p>
                </div>
              </article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-watercolor bg-cream-50 py-20 sm:py-28">
      <div className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you book."
          text="Clear, practical details keep the path to booking easy on mobile and desktop."
        />
        <MotionBlock delay={0.1} className="rounded-2xl border border-gold-100 bg-white/75 px-5 shadow-soft-line sm:px-8">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionBlock>
      </div>
    </section>
  );
}

function VisitBooking() {
  return (
    <section id="visit" className="section-watercolor bg-white py-20 sm:py-28">
      <div className="section-shell relative z-10">
        <SectionHeading
          eyebrow="Book and visit"
          title="Visit us on Oliver Plunkett Street."
          titleClassName="lg:whitespace-nowrap"
          text="Call or message to book, then visit Beautyphile in Cork City Centre."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:items-stretch">
          <MotionBlock className="h-full">
            <div className="h-full overflow-hidden rounded-2xl border border-gold-100 bg-cream-50 shadow-soft-line">
              <iframe
                title="Beautyphile Nails Cork map"
                src={business.mapsEmbed}
                className="h-[360px] min-h-full w-full border-0 sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MotionBlock>

          <MotionBlock delay={0.1} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-gold-100 bg-cream-50 p-6 shadow-soft-line sm:p-8">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-xl border border-gold-100 bg-white">
                <Image
                  src="/images/placeholders/mặt trước tiệm.jpg"
                  alt="Beautyphile Nails Cork storefront on Oliver Plunkett Street"
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush-100 text-rose-400">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl font-semibold leading-tight text-ink-900">
                    Beautyphile Nails Cork
                  </h3>
                  <address className="mt-4 not-italic leading-7 text-ink-700">
                    {business.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <Button asChild>
                  <a href={business.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    WhatsApp to Book
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={business.maps} target="_blank" rel="noreferrer">
                    <MapPin className="size-4" />
                    Open Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </MotionBlock>
        </div>

        <MotionBlock delay={0.14} className="mt-5">
          <div className="rounded-2xl border border-gold-100 bg-white p-5 shadow-soft-line sm:p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-3">
                <Clock3 className="size-5 text-rose-400" />
                <h3 className="font-serif text-3xl font-semibold text-ink-900">Opening Hours</h3>
              </div>
              <p className="text-sm font-semibold text-ink-600">Open 7 days in Cork City Centre</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {openingHours.map((item) => (
                <div
                  key={item.day}
                  className="rounded-xl border border-gold-100 bg-cream-50 px-4 py-3"
                >
                  <span className="block whitespace-nowrap text-sm font-semibold text-ink-800">
                    {item.day}
                  </span>
                  <span className="mt-1 block whitespace-nowrap text-sm text-ink-700">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </MotionBlock>
      </div>
    </section>
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
            <p className="mt-1 text-sm text-ink-700">9 Oliver Plunkett Street, Cork</p>
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
              <ExternalLink className="size-5" />
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
