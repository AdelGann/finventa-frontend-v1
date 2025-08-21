import { SEO } from "@/components/custom/SEO";
import { About } from "./components/About/About.component";
import { Hero } from "./components/Hero/Hero.component";
import { Questions } from "./components/Q&A/Q&A.component";

const Home = () => {
  return (
    <>
      <SEO title="Z0 - Manage your work" description="Make your life easier" keywords="Home, manage system" />
      <div className="w-full min-h-screen">
        <div className="z-10 py-20 my-15 px-5 flex flex-col gap-10">
          <div id="home">
            <Hero />
          </div>
          {/* <Pricing />  Descomentar despues */}
          <div id="about">
            <About />
          </div>
          <div id="q&a" className="q&a">
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
