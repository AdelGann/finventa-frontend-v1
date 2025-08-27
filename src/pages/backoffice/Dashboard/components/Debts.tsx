import { lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Card = lazy(() => import("@/components/shared/Card"));

export const Debts = () => {
  const TOOLTIP_DESCRIPTION =
    "Percentage decrease compared to the previous period";
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
          <Card
            title="Today's Income"
            amount={-50}
            progress={-10}
            color="text-red-500"
            description={TOOLTIP_DESCRIPTION}
          />
          <Card
            title="Weekly Income"
            amount={-500}
            progress={-75}
            color="text-red-500"
            description={TOOLTIP_DESCRIPTION}
          />
          <Card
            title="Monthly Income"
            amount={-2000}
            progress={-90}
            color="text-red-500"
            description={TOOLTIP_DESCRIPTION}
          />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};
export default Debts;
