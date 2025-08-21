import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

//import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { useNavigate } from "react-router-dom";
// import asset from "@/assets/imgs/asset.png";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex justify-center w-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className=" text-center">
            <motion.h1
              className="text-6xl font-semibold"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              Z0
            </motion.h1>
            <motion.h3
              className="text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Make Your Life Easier
            </motion.h3>
            <motion.p
              className="pt-2 dark:text-gray-300 text-gray-600 text-[12px] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Empieza a transformar tu negocio hoy mismo. ¡Únete y descubre cómo podemos ayudarte a crecer!
            </motion.p>
          </div>

          <motion.div
            className="pt-5 flex gap-5 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button onClick={() => navigate("/register")} className="cursor-pointer">
              ¡Unete!
            </Button>
          </motion.div>
        </motion.div>
      </section>
      {/* <section className="">
				<motion.div
					className="pt-5 flex gap-5 justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.3 }}
				>
					<img src={asset} className="rounded shadow w-[70vw] h-[500px]" />
				</motion.div>	
			</section> */}
    </>
  );
};
