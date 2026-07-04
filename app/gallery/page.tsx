import type { Metadata } from "next";

import { Gallery, InstagramStrip, PageShell, SalonTeam } from "@/components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Nail inspiration from Beautyphile Nails Cork: BIAB, French, gel, nail art and a look inside the boutique.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <PageShell>
      <Gallery />
      <InstagramStrip />
      <SalonTeam />
    </PageShell>
  );
}
