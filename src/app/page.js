import AboutMe from "@/slider";
import WhyChooseUs from "@/chooseus";

import FAQSection from "@/faqs";

import Hero from "@/hero";
import DiscoveryCallSection from "@/last";
import Problem from "@/problem";

import ProcessSection from "@/process";

import Solution from "@/solution";
import { Sliders } from "lucide-react";
import CaseStudies from "@/slider";


export default function Home() {
  return (

<>

<Hero />
<Problem />
<Solution />
<ProcessSection />
<CaseStudies />



<FAQSection />
<DiscoveryCallSection />



</>
  )


}