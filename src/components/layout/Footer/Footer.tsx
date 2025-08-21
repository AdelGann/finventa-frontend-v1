import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = ({ routes }: RoutesProps) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="flex justify-center p-5 bg-white dark:bg-black rounded-t-2xl shadow-sm dark:shadow-neutral-800 w-full"
    >
      <div className="text-[12px] text-gray-500 flex flex-col gap-2 justify-center w-full">
        <div className="flex gap-5 justify-center">
          {routes.map((item, key) => (
            <Link to={item.path} key={key}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-5 justify-center">
          <label className="text-gray-500 text-xs">
            All rights reserved © 2025{" "}
            <Link to="https://github.com/adelgann" className="font-bold border-b-1 cursor-pointer" target="_blank" rel="noreferrer">
              Adel Gannem
            </Link>
          </label>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
