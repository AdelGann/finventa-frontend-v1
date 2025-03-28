/// <reference types="vite/client" />


type Roles = "USER" | "ADMIN"

interface User { 
    id: string;
    name: string;
    email: string;
    role: Roles;
}

type Token = string;

interface AuthState {
    token: Token | null;
    isAuthenticated: boolean;
}

interface SidebarState {
    isOpen: boolean;
}
