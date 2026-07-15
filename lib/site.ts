import {
  Brush,
  CalendarCheck,
  Droplets,
  Gem,
  Hand,
  HandHeart,
  Heart,
  HeartHandshake,
  Paintbrush2,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  SprayCan,
  Wrench,
  Waves,
} from "lucide-react";

export const business = {
  name: "Beautyphile Nails Cork",
  shortName: "Beautyphile",
  addressLines: ["9 Oliver Plunkett Street", "Centre", "Cork", "T12 W897", "Ireland"],
  phone: "+353 85 217 7777",
  phoneHref: "tel:+353852177777",
  whatsappHref: "https://wa.me/353852177777",
  email: "beautyphile.cork@gmail.com",
  emailHref: "mailto:beautyphile.cork@gmail.com",
  instagram: "https://www.instagram.com/beautyphile.cork/",
  facebook: "https://www.facebook.com/beautyphile.cork/",
  maps: "https://maps.app.goo.gl/NbGd9BNjNAf5dWpcA",
  mapsEmbed:
    "https://www.google.com/maps?q=9%20Oliver%20Plunkett%20Street%2C%20Cork%20T12%20W897%2C%20Ireland&output=embed",
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Aftercare", href: "/aftercare" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Visit", href: "/visit" },
];

export const openingHours = [
  { day: "Monday - Wednesday", hours: "10:00 AM - 7:00 PM" },
  { day: "Thursday - Friday", hours: "10:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "11:00 AM - 7:00 PM" },
];

export const explorePages: {
  label: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imagePosition?: string;
  imageAspect?: string;
}[] = [
  {
    label: "Services",
    title: "Our nail services",
    description: "BIAB, Shellac, gel, French, acrylic, extensions, nail art and more.",
    href: "/services",
    image: "/images/z8040686375984_ebb67fc759b4a484ba7ec9fcedae1111.jpg",
  },
  {
    label: "Gallery",
    title: "Recent work",
    description: "Soft manicure inspiration and finished sets from the boutique.",
    href: "/gallery",
    image: "/images/beautyphile-ocean-art.jpg",
  },
  {
    label: "Aftercare",
    title: "Nail aftercare",
    description: "Simple daily habits to keep your manicure beautiful for longer.",
    href: "/aftercare",
    image: "/images/salon-products.jpg",
  },
  {
    label: "Reviews",
    title: "Client reviews",
    description: "What clients say about their Beautyphile appointments.",
    href: "/reviews",
    image: "/images/gallery-french-soft.jpg",
  },
  {
    label: "Visit",
    title: "Find the salon",
    description: "Opening hours, map and directions to 9 Oliver Plunkett Street.",
    href: "/visit",
    image: "/images/storefront-3x4.jpg",
  },
  {
    label: "Salon",
    title: "Inside the boutique",
    description: "Bright stations and a calm city-centre experience.",
    href: "/gallery#salon",
    image: "/images/bentrongquan.png",
  },
];

export const proofPoints = [
  {
    value: "9",
    label: "Oliver Plunkett St",
    text: "A central Cork City nail boutique for polished everyday beauty.",
  },
  {
    value: "7",
    label: "Days open",
    text: "Appointment-friendly hours from Monday through Sunday.",
  },
  {
    value: "1:1",
    label: "Detail care",
    text: "Shape, prep, colour and finish handled with calm precision.",
  },
];

export const serviceCategories = [
  {
    title: "BIAB",
    eyebrow: "Strength and shape",
    description: "Builder gel overlays for stronger natural nails with a refined glossy finish.",
    image: "/images/nail1.png",
    icon: Sparkles,
  },
  {
    title: "Manicure",
    eyebrow: "Clean, polished hands",
    description: "Cuticle care, shaping and colour designed for neat, wearable elegance.",
    image: "/images/service-manicure.jpg",
    icon: HandHeart,
  },
  {
    title: "Shellac and Gel",
    eyebrow: "Long-wear shine",
    description: "Smooth colour, soft neutrals, crisp classics and seasonal tones.",
    image: "/images/bentrongquan.png",
    icon: Gem,
  },
  {
    title: "French",
    eyebrow: "Quiet luxury",
    description: "Milky, micro, classic and modern French sets with balanced proportions.",
    image: "/images/gallery-french-soft.jpg",
    icon: Brush,
  },
  {
    title: "Nail Art",
    eyebrow: "Small details, big mood",
    description: "Minimal accents, chrome moments, florals and custom art for your set.",
    image: "/images/service-technician.jpg",
    icon: Paintbrush2,
  },
  {
    title: "Pedicure",
    eyebrow: "Fresh, cared-for feet",
    description: "Comfortable pedicure services for a clean finish and soft reset.",
    image: "/images/spachan.jpg",
    icon: Waves,
  },
  {
    title: "Acrylic and Extensions",
    eyebrow: "Length and structure",
    description: "Extensions shaped to your lifestyle, from soft almond to statement sets.",
    image: "/images/gallery-blue-french.jpg",
    icon: Star,
  },
  {
    title: "Kids and Men",
    eyebrow: "Welcoming care",
    description: "Neat grooming, gentle services and approachable treatments for every client.",
    image: "/images/service-kids.jpg",
    icon: HeartHandshake,
  },
];

export const serviceMenu = [
  {
    title: "Hand & Foot Treatments",
    services: [
      { name: "File & Polish", price: "€18" },
      { name: "Shellac", price: "€28" },
      { name: "Mini Manicure (Regular Polish)", price: "€28" },
      { name: "Mini Manicure (Shellac)", price: "€38" },
      { name: "Spa Pedicure (Regular Polish)", price: "€50" },
      { name: "Spa Pedicure (Shellac)", price: "€55" },
    ],
  },
  {
    title: "Nail Enhancements",
    services: [
      { name: "Acrylic/Gel Full Set (Plain Colour)", price: "€55" },
      { name: "Acrylic/Gel French Tip", price: "€62" },
      { name: "Acrylic/Gel Ombré", price: "€60" },
      { name: "Acrylic/Gel Overlay (Plain Colour)", price: "€48" },
      { name: "Acrylic/Gel Refill (Plain Colour)", price: "€48" },
      { name: "Acrylic/Gel Refill French / Ombré", price: "€55" },
      { name: "BIAB Base Colour", price: "€42" },
      { name: "BIAB with Shellac (Plain Colour)", price: "€47" },
      { name: "BIAB with Shellac French Tip", price: "€52" },
      { name: "BIAB Extensions (Short)", price: "From €55" },
    ],
  },
  {
    title: "Add-on Services",
    services: [
      { name: "French Tips", price: "€5" },
      { name: "Mixing 5 and More Colours", price: "€5" },
      { name: "Chrome", price: "€10" },
      { name: "Shellac Removal", price: "€10" },
      { name: "BIAB/Gel Removal", price: "€15" },
      { name: "Acrylic Removal", price: "€15" },
      { name: "Extra Long Extensions", price: "€5–€15" },
      { name: "Nail Art", price: "Ask for Quotation" },
    ],
  },
  {
    title: "Gentlemen & Kids Under 12",
    services: [
      { name: "Men Manicure", price: "€28" },
      { name: "Men Pedicure", price: "€45" },
      { name: "Kid File & Polish", price: "€12" },
      { name: "Kid Shellac", price: "€20" },
      { name: "Kid Pedicure (Regular Polish)", price: "€35" },
      { name: "Kid Pedicure (Shellac)", price: "€40" },
    ],
  },
];

export const aftercareTips = [
  {
    title: "Dry hands well",
    text: "Wash and dry hands thoroughly after a bath, chores or swimming.",
    icon: Droplets,
  },
  {
    title: "Avoid harsh products",
    text: "Avoid harsh soaps and chemicals after your treatment.",
    icon: SprayCan,
  },
  {
    title: "Hydrate daily",
    text: "Apply cuticle oil and hand cream daily to maintain healthy nails.",
    icon: Heart,
  },
  {
    title: "Do not pick",
    text: "Do not pick, cut or file your manicure between appointments.",
    icon: Scissors,
  },
  {
    title: "Use care with nails",
    text: "Do not use nails as tools to open cans or other products.",
    icon: Wrench,
  },
  {
    title: "Wear gloves",
    text: "Wear gloves for household chores to protect your set.",
    icon: ShieldCheck,
  },
  {
    title: "Remove gently",
    text: "Use acetone-free remover or book professional varnish or gel removal.",
    icon: Hand,
  },
  {
    title: "Book maintenance",
    text: "Schedule regular follow-up appointments to maintain your manicure.",
    icon: CalendarCheck,
  },
];

export const galleryFilters = ["All", "French", "BIAB", "Nail Art", "Gel", "Pedicure"] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export const galleryItems: {
  title: string;
  filter: Exclude<GalleryFilter, "All">;
  image: string;
  tall?: boolean;
}[] = [
  {
    title: "Ocean art almond set",
    filter: "Nail Art",
    image: "/images/beautyphile-ocean-art.jpg",
    tall: true,
  },
  {
    title: "Pink shimmer almond set",
    filter: "BIAB",
    image: "/images/nail1.png",
  },
  {
    title: "Soft ombre BIAB with jewellery",
    filter: "BIAB",
    image: "/images/hero-nails.jpg",
  },
  {
    title: "Milky French manicure",
    filter: "French",
    image: "/images/gallery-french-soft.jpg",
  },
  {
    title: "Glossy colour refresh",
    filter: "Gel",
    image: "/images/gallery-gel-colour.jpg",
    tall: true,
  },
  {
    title: "Blue French detail",
    filter: "French",
    image: "/images/gallery-blue-french.jpg",
  },
  {
    title: "Soft heart nail art",
    filter: "Nail Art",
    image: "/images/gallery-heart-art.jpg",
  },
  {
    title: "Gold almond finish",
    filter: "Gel",
    image: "/images/gallery-gold-almond.jpg",
    tall: true,
  },
  {
    title: "Floral nail detail",
    filter: "Nail Art",
    image: "/images/gallery-floral-detail.jpg",
  },
];

export const reviews = [
  {
    quote:
      "My nails looked so clean and elegant. The finish was exactly what I wanted and the salon is right in the city centre.",
    name: "Local Cork Client",
    detail: "BIAB manicure",
  },
  {
    quote:
      "Lovely attention to detail, friendly service and a calm appointment from start to finish.",
    name: "Beautyphile Guest",
    detail: "Shellac and nail art",
  },
  {
    quote:
      "I wanted something natural but still special. The shape and colour were perfect.",
    name: "Returning Client",
    detail: "French set",
  },
];

export const instagramPosts = galleryItems.slice(0, 6).map((item) => ({
  ...item,
  href: business.instagram,
}));

export const faqs = [
  {
    question: "Do I need to book in advance?",
    answer:
      "Booking ahead is recommended, especially for BIAB, extensions and nail art. You can call or message on WhatsApp to check the earliest available time.",
  },
  {
    question: "Where is the salon?",
    answer:
      "Beautyphile Nails Cork is at 9 Oliver Plunkett Street in Cork City Centre, T12 W897.",
  },
  {
    question: "Do you offer BIAB and French nails?",
    answer:
      "Yes. The homepage highlights BIAB, French, Shellac, Gel, Acrylic, Extensions, Nail Art, Pedicure, Kids and Men services.",
  },
  {
    question: "Can I show a reference photo?",
    answer:
      "Yes. Bring or send your nail inspiration, and the technician can guide the shape, finish and level of detail that will work best.",
  },
];

export const salonImages = [
  {
    title: "Pastel boutique interior",
    description: "Mint, blush and warm lighting create a calm Cork City nail space.",
    image: "/images/bentrongquan1.png",
  },
  {
    title: "Colour wall",
    description: "A polished range for soft classics, seasonal tones and detailed nail art.",
    image: "/images/bentrongquan.png",
  },
  {
    title: "Quiet treatment stations",
    description: "Clean manicure and pedicure stations arranged for comfortable appointments.",
    image: "/images/salon-interior.jpg",
  },
];

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  image: "/images/logo-transparent.png",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 Oliver Plunkett Street",
    addressLocality: "Cork",
    postalCode: "T12 W897",
    addressCountry: "IE",
  },
  url: "https://beautyphile-nails-cork.local",
  sameAs: [business.instagram, business.facebook],
  hasMap: business.maps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "19:00",
    },
  ],
  priceRange: "€€",
};
