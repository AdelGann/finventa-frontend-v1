import { BackgroundDots } from "@/components/ui/BackgroundDots";
import { About } from "./components/About/About.component";
import { Hero } from "./components/Hero/Hero.component";
import { Questions } from "./components/Q&A/Q&A.component";

// import { Pricing } from "./components/Pricing/Pricing.component";

export const Home = () => {
	return (
		<BackgroundDots>
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
		</BackgroundDots>
		// 	<div className="relative w-full h-screen z-20 flex items-center justify-center">
	);
};
