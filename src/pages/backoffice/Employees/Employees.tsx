import { AnimatePresence, motion } from "framer-motion";
import { EmployeesTable } from "./components/EmployeesTable"

const Employees = () => {
  return (
    <div>
      <div className="p-2 m-5 bg:white dark:bg-[#1f1f1f] shadow dark:shadow-[#1b1b1b] rounded">
        <div className="bg-opacity-50 dark:bg-opacity-50 rounded-lg">
          <div className="px-5 pt-5">
            <h2 className="text-3xl uppercase font-bold">Lista de Empleados</h2>
          </div>
          <AnimatePresence>
            <motion.section
              className="w-full p-5 overflow-auto transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div>
                <EmployeesTable />
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Employees;
