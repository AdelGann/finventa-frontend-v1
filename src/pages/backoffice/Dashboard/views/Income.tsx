import { lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = lazy(() => import("../components/Card"));

const Income = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="w-full p-5 overflow-auto transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card title="Today's Income" amount={250} progress={50} />
          <Card title="Weekly Income" amount={1200} progress={75} />
          <Card title="Monthly Income" amount={5000} progress={90} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Income;
