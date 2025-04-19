import { ModeToggle } from "@/components/custom/Mode-Toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = ({ profile }: { profile?: { username: string; avatar: string } }) => {
	return (
		<div className="flex justify-end items-center gap-2">
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
	);
};

export default Header;
