import { SEO } from "@/components/custom/SEO";
import { About } from "./components/About/About.component";
import { Hero } from "./components/Hero/Hero.component";
import { Questions } from "./components/Q&A/Q&A.component";

// import { Pricing } from "./components/Pricing/Pricing.component";

const Home = () => {
	return (
		<>
			<SEO title="Z0 - Manage your work" description="Make your life easier" />
			<div className="relative w-full h-screen">
				<div className="absolute inset-0 bg-gray-200 opacity-0"></div>
				<div className="relative z-10 p-20 m-10">
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
		// 	<div className="relative w-full h-screen z-20 flex items-center justify-center">
	);
};

export default Home;
