import AboutMe from "@/aboutme";
import WhyChooseUs from "@/chooseus";
import Emoji from "@/emoji";
import FAQSection from "@/faqs";

import Hero from "@/hero";
import DiscoveryCallSection from "@/last";

import ProcessSection from "@/process";
import ProjectsSection from "@/projects";


export default function Home() {
  return (

<>

<Hero />
<Emoji />
<ProcessSection />
<AboutMe />
<ProjectsSection />

<WhyChooseUs />

<FAQSection />
<DiscoveryCallSection />



</>
  )


}