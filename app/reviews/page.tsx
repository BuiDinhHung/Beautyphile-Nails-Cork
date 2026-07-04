import type { Metadata } from "next";

import { FAQ, PageShell, Reviews } from "@/components/sections";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Client reviews and quick answers before you book at Beautyphile Nails Cork on Oliver Plunkett Street.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <Reviews />
      <FAQ />
    </PageShell>
  );
}
