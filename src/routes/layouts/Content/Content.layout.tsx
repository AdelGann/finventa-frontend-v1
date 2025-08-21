import { Outlet } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"

export const Content = () => {
  return (
    <div>
      <div className="sm:px-2 sm:pb-2 sm:mx-5 sm:mb-5 bg:white dark:bg-[#262633] border rounded-sm">
        <div className="bg-opacity-50 dark:bg-opacity-50 rounded-lg">
          <AnimatePresence>
            <motion.section
              className="w-full p-5 overflow-auto transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

