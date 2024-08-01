import Hero from "@/components/Hero/index";
import Solutions from "@/components/Solutions";
import Title from "@/components/Base/Title";
import Button from "@/components/Base/Button";
import ParagraphText from "@/components/Base/ParagraphText";
import Ready from "@/components/Ready";

export default function Home() {
  return (
    <div className="overflow-hidden bg-black">
      <section className="py-20">
        <Hero />
      </section>
      <section className="pt-20 pb-2">
        <Solutions />
      </section>
      <section className="pt-40 pb-2">
        <Title
          title="Unlock Business Potential: Bridge Your ML Models to Market!"
          classes="hidden md:block text-center text-5xl"
        />
        <div className="container ">
          <Title
            title="Unlock Business Potential: Bridge Your ML Models to Market!"
            classes="md:hidden text-center text-3xl"
          />
          <ParagraphText
            text="Struggling to get your ML pipelines and models into the hands of your business customers? Bridge is a comprehensive AI platform that streamlines the transition of ML models from development to large-scale production. It doesn’t not only automates deployment and guarantees uninterrupted feature integration but also places a heavy emphasis on real-time performance insights and unwavering security. With an intuitive UI tailored for all, Bridge alerts users of model misusage while its admin dashboard delivers insights on model health and user engagement. For businesses looking to deploy, scale, and optimize their models leverage, Bridge bridges the gap, ensuring your models seamlessly reach every model’s user."
            classes="text-center pb-16 mt-10 md:mt-14 md:px-10 shadow-text"
          />
          <div className="flex justify-center">
            <Button
              text="Discover More"
              bgColor="#ec912b"
              classes="text-center md:mt-6"
            />
          </div>
        </div>
      </section>
      <section className="py-40 relative container">
        <div className="gradient_ready">
          <Ready />
        </div>
      </section>
      {/* <HomeMainProduct className="py-20" />
      <HomeBridgeStory className="pt-20 pb-48" />
      <HomeFeatures />
      <HomeOurTeam className="pb-20" />
      <HomeLifeCycle /> */}
    </div>
  );
}
