import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Logo_White from "@/assets/FINVENTA/FINVENTA_WHITE.svg";
import Logo_Dark from "@/assets/FINVENTA/FINVENTA_DARK.svg";

import { useNavigate } from "react-router-dom";
import { useTheme } from "@/lib/provider/theme-provider";

export const Hero = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const LOGO = theme === "dark" ? Logo_Dark : Logo_White;

  return (
    <>
      <section className="flex justify-center w-full items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex justify-center items-center gap-2 flex-col">
            <motion.img
              src={LOGO}
              className="w-[530px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            />
            <motion.h3
              className="text-2xl font-semibold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Gestiona tu negocio de manera profesional
            </motion.h3>
            <motion.p
              className="pt-2 text-muted-foreground text-sm text-center max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              Empieza a transformar tu negocio hoy mismo, organízate con nosotros. ¡Únete y descubre cómo
              podemos ayudarte a crecer!
            </motion.p>
          </div>

          <motion.div
            className="pt-5 flex gap-5 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button
              onClick={() => navigate("/register")}
              className="cursor-pointer"
              size="lg"
            >
              ¡Únete Ahora!
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="cursor-pointer"
              size="lg"
            >
              Iniciar Sesión
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
