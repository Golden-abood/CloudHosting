import Hero from "@/components/Hero/index";
import Solutions from "@/components/Solutions";
import Title from "@/components/Base/Title";
import Button from "@/components/Base/Button";
import ParagraphText from "@/components/Base/ParagraphText";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <section className="py-20">
        <Hero />
      </section>
      <section className="pt-20 pb-2">
        <Solutions />
      </section>
      <section className="pt-40 pb-2"></section>

      {/* <HomeMainProduct className="py-20" />
      <HomeBridgeStory className="pt-20 pb-48" />
      <HomeFeatures />
      <HomeOurTeam className="pb-20" />
      <HomeLifeCycle /> */}
    </div>
  );
}
