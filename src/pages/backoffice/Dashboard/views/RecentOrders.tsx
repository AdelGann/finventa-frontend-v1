import { DataTable } from "@/components/custom/DataTable"
import { AnimatePresence, motion } from "framer-motion";

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

const RecentOrders = () => {
  return (
    <>
      <div className="p-2 m-5 bg:white dark:bg-[#161616] shadow dark:shadow-[#1b1b1b] rounded">
        <div className="p-2 bg-white dark:bg-[#1f1f1f] bg-opacity-50 dark:bg-opacity-50 rounded-lg">
          <div className="p-1">
            <h3 className="uppercase font-bold">Recent Orders</h3>
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
                <DataTable columns={columns} data={data} customActions={actions} />
              </div>
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default RecentOrders;

const columns = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]

const actions = [
  { label: "Edit", onClick: (row: Payment) => console.log(row) },
  { label: "Delete", onClick: (row: Payment) => console.log(row) },
]

const data: Payment[] = [
  { id: "1", amount: 100, status: "pending", email: "adelgann@gmail.com" },
  { id: "2", amount: 200, status: "processing", email: "adelgann@gmail.com" },
  { id: "3", amount: 300, status: "success", email: "adelgann@gmail.com" },
  { id: "4", amount: 400, status: "failed", email: "adelgann@gmail.com" },
  { id: "5", amount: 500, status: "success", email: "adelgann@gmail.com" },
  { id: "6", amount: 600, status: "failed", email: "adelgann@gmail.com" },
  { id: "7", amount: 700, status: "success", email: "adelgann@gmail.com" },
  { id: "8", amount: 800, status: "failed", email: "adelgann@gmail.com" },
  { id: "9", amount: 900, status: "success", email: "adelgann@gmail.com" },
  { id: "10", amount: 1000, status: "failed", email: "adelgann@gmail.com" },
  { id: "11", amount: 1100, status: "success", email: "adelgann@gmail.com" },
]
