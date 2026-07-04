import type { Metadata } from "next";

import { Aftercare, PageShell } from "@/components/sections";

export const metadata: Metadata = {
  title: "Aftercare",
  description:
    "Simple daily nail aftercare tips from Beautyphile Nails Cork to keep your manicure beautiful for longer.",
  alternates: { canonical: "/aftercare" },
};

export default function AftercarePage() {
  return (
    <PageShell>
      <Aftercare />
    </PageShell>
  );
}
