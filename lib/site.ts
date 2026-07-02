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
  { label: "Services", href: "#services" },
  { label: "Aftercare", href: "#aftercare" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export const openingHours = [
  { day: "Monday - Wednesday", hours: "10:00 AM - 7:00 PM" },
  { day: "Thursday - Friday", hours: "10:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
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
    image: "/images/placeholders/service-biab.jpg",
    icon: Sparkles,
  },
  {
    title: "Manicure",
    eyebrow: "Clean, polished hands",
    description: "Cuticle care, shaping and colour designed for neat, wearable elegance.",
    image: "/images/placeholders/service-manicure.jpg",
    icon: HandHeart,
  },
  {
    title: "Shellac and Gel",
    eyebrow: "Long-wear shine",
    description: "Smooth colour, soft neutrals, crisp classics and seasonal tones.",
    image: "/images/placeholders/bentrongquan.png",
    icon: Gem,
  },
  {
    title: "French",
    eyebrow: "Quiet luxury",
    description: "Milky, micro, classic and modern French sets with balanced proportions.",
    image: "/images/placeholders/gallery-french-soft.jpg",
    icon: Brush,
  },
  {
    title: "Nail Art",
    eyebrow: "Small details, big mood",
    description: "Minimal accents, chrome moments, florals and custom art for your set.",
    image: "/images/placeholders/service-technician.jpg",
    icon: Paintbrush2,
  },
  {
    title: "Pedicure",
    eyebrow: "Fresh, cared-for feet",
    description: "Comfortable pedicure services for a clean finish and soft reset.",
    image: "/images/placeholders/salon-products.jpg",
    icon: Waves,
  },
  {
    title: "Acrylic and Extensions",
    eyebrow: "Length and structure",
    description: "Extensions shaped to your lifestyle, from soft almond to statement sets.",
    image: "/images/placeholders/gallery-blue-french.jpg",
    icon: Star,
  },
  {
    title: "Kids and Men",
    eyebrow: "Welcoming care",
    description: "Neat grooming, gentle services and approachable treatments for every client.",
    image: "/images/placeholders/service-kids.jpg",
    icon: HeartHandshake,
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
    title: "Gold chrome sculpted tips",
    filter: "Nail Art",
    image: "/images/placeholders/nail2.png",
    tall: true,
  },
  {
    title: "Pearl chrome extension detail",
    filter: "Nail Art",
    image: "/images/placeholders/nail3.png",
  },
  {
    title: "Soft ombre BIAB with jewellery",
    filter: "BIAB",
    image: "/images/placeholders/hero-nails.jpg",
  },
  {
    title: "Milky French manicure",
    filter: "French",
    image: "/images/placeholders/gallery-french-soft.jpg",
  },
  {
    title: "Glossy colour refresh",
    filter: "Gel",
    image: "/images/placeholders/gallery-gel-colour.jpg",
    tall: true,
  },
  {
    title: "Blue French detail",
    filter: "French",
    image: "/images/placeholders/gallery-blue-french.jpg",
  },
  {
    title: "Soft heart nail art",
    filter: "Nail Art",
    image: "/images/placeholders/gallery-heart-art.jpg",
  },
  {
    title: "Gold almond finish",
    filter: "Gel",
    image: "/images/placeholders/gallery-gold-almond.jpg",
    tall: true,
  },
  {
    title: "Floral nail detail",
    filter: "Nail Art",
    image: "/images/placeholders/gallery-floral-detail.jpg",
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
    image: "/images/placeholders/bentrongquan1.png",
  },
  {
    title: "Colour wall",
    description: "A polished range for soft classics, seasonal tones and detailed nail art.",
    image: "/images/placeholders/bentrongquan.png",
  },
  {
    title: "Quiet treatment stations",
    description: "Clean manicure and pedicure stations arranged for comfortable appointments.",
    image: "/images/placeholders/salon-interior.jpg",
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
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
};
