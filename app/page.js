"use client";

import { useLang } from "@/components/LangProvider";
import Hero from "@/components/organisms/Hero";
import WhyPrologg from "@/components/organisms/WhyPrologg";
import Preview from "@/components/organisms/Preview";
import Value from "@/components/organisms/Value";
import GetInvolved from "@/components/organisms/GetInvolved";
import PartnerSection from "@/components/organisms/PartnerSection";
import DemoSection from "@/components/organisms/DemoSection";

export default function Home() {
  const { c } = useLang();

  return (
    <main>
      <Hero {...c.hero} />
      <WhyPrologg {...c.why} />
      <Preview {...c.preview} />
      <Value {...c.value} />
      <GetInvolved {...c.getInvolved} />
      <PartnerSection {...c.partners} />
      <DemoSection {...c.demo} />
    </main>
  );
}
