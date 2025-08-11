import { ModeToggle } from "@/components/ui/Mode-Toggle";
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
import { useMobile } from "@/hooks/useMobile";
import { useSidebarStore } from "@/store/SidebarState/SidebarState";
import { Menu } from "lucide-react";

const Header = ({ profile }: { profile?: { username: string; avatar: string } }) => {
	const { screenType } = useMobile(); // 3sm is the breakpoint;
	const sidebarState = useSidebarStore((state) => state);

	// VARIABLES
	const IS_MOBILE = ["3sm", "2sm", "sm"].includes(screenType);
	const DESKTOP_STYLE = "flex justify-end items-center gap-2";
	const MOBILE_STYLE = "flex justify-between items-center gap-2";

	return (
		<div className={IS_MOBILE ? MOBILE_STYLE : DESKTOP_STYLE}>
			{IS_MOBILE && (
				<Button className="cursor-pointer" onClick={sidebarState.toggleSidebar}>
					<Menu />
				</Button>
			)}
			<div className="flex gap-2 items-center">
				<ModeToggle />
				<DropdownMenu>
					<DropdownMenuTrigger className="flex gap-2 items-center p-3 hover:bg-accent transition-all rounded-sm cursor-pointer">
						{profile?.username}
						<Avatar>
							<AvatarImage src={profile?.avatar} />
							<AvatarFallback>{profile?.username.slice(0, 2).toUpperCase() || "UK"}</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Header;
