
import CallToAction from "@/components/CallToAction";
import FeaturesJob from "@/components/FeaturesJob";
import JobDiscovery from "@/components/JobDiscovery";
import LandingSection from "@/components/LandingSection";
import Pricing from "@/components/Pricing";



export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <LandingSection></LandingSection>
      <JobDiscovery></JobDiscovery>
      <FeaturesJob></FeaturesJob>
      <Pricing></Pricing>
      <CallToAction></CallToAction>
    </div>
  );
}
