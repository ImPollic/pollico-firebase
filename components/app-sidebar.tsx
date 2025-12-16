import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import {
  MessageCircle,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  LogIn,
} from "lucide-react"

const items = [
  {
    title: "Início",
    url: "/",
    icon: Home,
  },
  {
    title: "Login",
    url: "/login",
    icon: LogIn,
  },
  {
    title: "Conversas",
    url: "#",
    icon: MessageCircle,
  },
  {
    title: "Caixa de Entrada",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Grupos",
    url: "#",
    icon: Users,
  },
  {
    title: "Buscar",
    url: "#",
    icon: Search,
  },
  {
    title: "Configurações",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-none [&_[data-slot=sidebar-container]]:border-none">
      <SidebarContent className="bg-[#1d1f1f] text-white border-r-0">
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg tracking-wide text-zinc-400 mb-2">
            Projeto Pollic Firebase
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="
                       flex items-center gap-3 rounded-lg
                        px-3 py-2
                        text-zinc-300
                        hover:bg-[#3a3a3a] hover:text-white
                        data-[active=true]:bg-[#3a3a3a]
                        data-[active=true]:text-white
                        transition-colors
                    "
                  >
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
