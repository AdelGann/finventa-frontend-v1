import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="sm:px-2 sm:pb-2 sm:mx-5 sm:mb-5 bg:white dark:bg-[#262633] border rounded-sm">
      <section className="w-full p-5">
        <Outlet />
      </section>
    </div>
  );
};
