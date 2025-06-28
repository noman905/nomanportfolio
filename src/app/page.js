import AboutMe from "@/aboutme";
import WhyChooseUs from "@/chooseus";

import FAQSection from "@/faqs";

import Hero from "@/hero";
import DiscoveryCallSection from "@/last";
import Problem from "@/problem";

import ProcessSection from "@/process";
import ProjectsSection from "@/projects";
import Solution from "@/solution";


export default function Home() {
  return (

<>

<Hero />
<Problem />
<Solution />
<ProcessSection />
<AboutMe />
<ProjectsSection />

<WhyChooseUs />

<FAQSection />
<DiscoveryCallSection />



</>
  )


}