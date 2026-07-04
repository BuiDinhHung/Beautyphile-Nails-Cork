import type { Metadata } from "next";

import { PageShell, VisitBooking } from "@/components/sections";

export const metadata: Metadata = {
  title: "Visit and Book",
  description:
    "Opening hours, map and directions to Beautyphile Nails Cork at 9 Oliver Plunkett Street, Cork City Centre.",
  alternates: { canonical: "/visit" },
};

export default function VisitPage() {
  return (
    <PageShell>
      <VisitBooking />
    </PageShell>
  );
}
