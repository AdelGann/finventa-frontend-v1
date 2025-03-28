import { About } from "./components/About/About.component";
import { Hero } from "./components/Hero/Hero.component";
import { Questions } from "./components/Q&A/Q&A.component";
// import { Pricing } from "./components/Pricing/Pricing.component";

export const Home = () => {
	return (
		<div className="p-20 m-10">
			<Hero />
			{/* <Pricing />  Descomentar despues*/}
			<About />
			<Questions />
		</div>
	);
};
