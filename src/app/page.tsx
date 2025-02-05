import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Ebook from "@/components/Ebook";
import HomeBanner from "@/components/HomeBanner";
import OurTeam from "@/components/OurTeam";
import Realisations from "@/components/Realisations";
import Services from "@/components/Services";
import TerrainShowCase from "@/components/TerrainShowCase";
import { Test } from "@/components/Test";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <Video />
      <Services />
      <Realisations />
      <Ebook />
      <OurTeam />
      <TerrainShowCase />
      <Articles />
      <Contact />
      <Test />
    </>
  );
}
