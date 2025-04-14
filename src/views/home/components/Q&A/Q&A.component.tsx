import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export const Questions = () => {
	return (
		<motion.section
			className="w-full flex flex-col items-center "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.3 }}
		>
			<div className="w-[50vw]">
				<motion.h4
					className="text-2xl font-semibold"
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					Q&A
				</motion.h4>
				<Accordion type="single" collapsible>
					{questions.map((item, key) => (
						<AccordionItem key={key} value={`${key}`}>
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</motion.section>
	);
};
const questions = [
	{
		question: "¿Qué es Lorem Ipsum?",
		answer: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
	},
	{
		question: "¿De dónde viene?",
		answer: "Contrariamente a la creencia popular, Lorem Ipsum no es simplemente texto aleatorio.",
	},
	{
		question: "¿Por qué lo usamos?",
		answer:
			"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio.",
	},
	{
		question: "¿Dónde puedo conseguirlo?",
		answer:
			"Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones.",
	},
];
