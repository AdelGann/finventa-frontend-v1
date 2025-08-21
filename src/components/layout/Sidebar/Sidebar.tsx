import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ViewTransitionLink } from "@/components/custom/ViewTransitionLink";
import { badgeVariants, textVariants } from "@/lib/consts/motion_variants";
import { useMobile } from "@/hooks/useMobile";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VERSION } from "@/lib/consts/variables";
import { useEffect } from "react";

const Sidebar = ({ ...props }: SidebarProps) => {
  const { isOpen, toggleSidebar, routes } = props;
  const { IS_MOBILE } = useMobile(); // 3sm is the breakpoint;
  const LEFT_SIZE = isOpen ? "215px" : "65px";
  // Handler para evitar que cuando se inicie la app el sidebar esté abierto
  useEffect(() => {
    if (IS_MOBILE && isOpen) {
      toggleSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [IS_MOBILE]);

  return (
    <section className={`p-4 border bg-[#f7f7f7] dark:bg-[#1b1b25] h-screen`} >
      {!IS_MOBILE && (
        <div className="absolute z-50">
          <Button
            style={{
              left: LEFT_SIZE,
              transition: "all .3s ease-in-out",
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
            }}
            className={`relative top-[55px] rounded-full shadow cursor-pointer text-white `}
            onClick={toggleSidebar}
          >
            <ArrowRight />
          </Button>
        </div>
      )}
      <div className="px-1">
        <div className={`${IS_MOBILE && "flex justify-between w-full items-center"}`}>
          <div className={`flex items-center gap-2 justify-center pt-2`}>
            <h3 className="text-2xl font-bold pl-2">Finventa</h3>
            <motion.div
              className="overflow-hidden"
              variants={badgeVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
            >
              <Badge variant="outline">{VERSION}</Badge>
            </motion.div>
          </div>
          {IS_MOBILE && (
            <>
              <Button className="bg-[#75768a] dark:text-white rounded-full shadow cursor-pointer" onClick={toggleSidebar}>
                <ArrowLeft />
              </Button>
            </>
          )}
        </div>
        <div className="py-6">
          <ScrollArea className="h-[80vh]">
            <div className="flex flex-col">
              {Object.entries(routes).map(([key, routeGroup]) => (
                <motion.div
                  layout
                  key={key}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen && (
                    <h4 className="text-sm font-semibold text-gray-500 uppercase px-3 py-2">{key}</h4>
                  )}
                  {routeGroup.map((item, index) => (
                    <ViewTransitionLink
                      to={item.path}
                      key={index}
                      onClick={() => {
                        if (IS_MOBILE) {
                          toggleSidebar()
                          return;
                        }
                      }}
                      className={`p-3 hover:bg-input/80 hover:text-black dark:hover:text-white rounded-sm transition-all flex items-center ${isOpen ? "gap-2" : "justify-center"
                        }`}
                    >
                      {item.icon && <>{item.icon}</>}
                      <motion.p
                        variants={textVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        exit="closed"
                        className="overflow-hidden whitespace-nowrap"
                      >
                        {item.name}
                      </motion.p>
                    </ViewTransitionLink>
                  ))}
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
