import type { Metadata } from "next";

import { PageShell, Services } from "@/components/sections";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BIAB, manicure, Shellac, gel, French, nail art, pedicure, acrylic, extensions, kids and men services at Beautyphile Nails Cork.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
