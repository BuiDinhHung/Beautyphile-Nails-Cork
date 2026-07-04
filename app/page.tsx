import { AboutProof, ExplorePages, Hero } from "@/components/sections";
import { structuredData } from "@/lib/site";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <AboutProof />
      <ExplorePages />
    </>
  );
}
