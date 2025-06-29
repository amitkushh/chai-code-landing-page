import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import TweetSection from "@/components/TweetSection";
import CohortVideoSection from "@/components/CohortVideoSection";
import { BenifitsSection } from "@/components/BenifitsSection";
import UdemySection from "@/components/UdemySection";
import AppSection from "@/components/AppSection";
import YoutubeSection from "@/components/YoutubeSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <TweetSection />
      <CohortVideoSection />
      <BenifitsSection />
      <UdemySection />
      <AppSection />
      <YoutubeSection />
    </main>
  );
}
