import { ModeToggle } from "@/components/ui/Mode-Toggle";
import { LogOut, NetworkIcon, UserRound, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMobile } from "@/lib/hooks/useMobile";
import { useSidebarStore } from "@/store/SidebarState/SidebarState";
import { Menu } from "lucide-react";

const Header = ({
  profile,
}: {
  profile?: { username: string; avatar: string };
}) => {
  const { IS_MOBILE } = useMobile(); // 3sm is the breakpoint;
  const sidebarState = useSidebarStore((state) => state);

  // VARIABLES
  const DESKTOP_STYLE = "flex justify-end items-center gap-2";
  const MOBILE_STYLE = "flex justify-between items-center gap-2";

  return (
    <div
      className={`${IS_MOBILE ? MOBILE_STYLE : DESKTOP_STYLE} bg-[#f7f7f7] border dark:bg-[#242432] p-2`}
    >
      {IS_MOBILE && (
        <Button
          variant="header"
          className="cursor-pointer"
          onClick={sidebarState.toggleSidebar}
        >
          <Menu />
        </Button>
      )}
      <div
        className={`flex gap-2 items-center w-full px-5 ${IS_MOBILE ? "justify-end" : "justify-between"}`}
      >
        {!IS_MOBILE && (
          <div className="px-2 flex gap-2 items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex gap-2 items-center p-3 transition-all rounded-sm cursor-pointer text-sm lg:text-md shadow-xs bg-input/0 text-black dark:text-white hover:bg-input/30 dark:hover:bg-input/50 dark:bg-input/5">
                Adel's Organization <NetworkIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className="flex gap-2 items-center justify-center">
                  ORG'S <NetworkIcon />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Organization 1
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Organization 2
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Organization 3
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
        <div className="px-2 flex gap-2 items-center">
          <ModeToggle variant="header" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex gap-2 items-center p-3 transition-all rounded-sm cursor-pointer text-sm lg:text-md shadow-xs bg-input/0 text-black dark:text-white hover:bg-input/30 dark:hover:bg-input/50 dark:bg-input/5">
              {profile?.username}
              <Avatar>
                <AvatarImage src={profile?.avatar} />
                <AvatarFallback className="text-black dark:text-white">
                  {profile?.username.slice(0, 2).toUpperCase() || "UK"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <UserRound /> Perfil
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Users /> Organización
              </DropdownMenuItem>
              {IS_MOBILE && (
                <DropdownMenuItem className="cursor-pointer">
                  <NetworkIcon /> Seleccionar Organización
                </DropdownMenuItem>
              )}
              <DropdownMenuItem className="cursor-pointer">
                <LogOut /> Cerrar Sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
