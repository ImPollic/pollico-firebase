import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  MessageCircle,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  LogIn,
  User2,
  ChevronUp,
} from "lucide-react"

const items = [
  { title: "Início", url: "/", icon: Home },
  { title: "Login", url: "/login", icon: LogIn },
  { title: "Bate papo", url: "/conversa", icon: MessageCircle },
]

export function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      className="border-none [&_[data-slot=sidebar-container]]:border-none"
    >
      <SidebarContent className="bg-[#1d1f1f] text-white border-r-0">
        <SidebarGroup>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 ">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} >
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="
                      flex items-center gap-4
                      rounded-xl
                      px-4 py-4
                     h-[40px]
                      text-zinc-300
                      hover:bg-zinc-700/70 hover:text-white
                      data-[active=true]:bg-zinc-700/70
                      data-[active=true]:text-white
                      transition-all
                      group-data-[collapsible=icon]:justify-center
                    "
                  >
                    <a href={item.url}>
                      <item.icon style={{ width: 25, height: 25}}/>
                      <span className="text-base font-medium group-data-[collapsible=icon]:hidden">
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

      <SidebarFooter className="bg-[#1d1f1f] border-t border-zinc-800 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu modal={false}> 
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  className="
                    flex items-center gap-4
                    rounded-xl
                    px-4 py-4
                    h-[60px]
                    text-zinc-300
                    hover:bg-zinc-700/70 hover:text-white
                    transition-all
                    group-data-[collapsible=icon]:justify-center
                  "
                >
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-zinc-700 shrink-0">
                    <img
                      src="https://yt3.googleusercontent.com/9muLpK7ohUv15em90KzpChttZD7bv7bYnRx63Cddp3uULf_Z0lUyJpT5y8v1jdQ9vkeexaDiCw=s160-c-k-c0x00ffffff-no-rj"
                      alt="Foto de perfil"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <span className="text-base font-medium group-data-[collapsible=icon]:hidden">
                    Apollo Borges
                  </span>

                  <ChevronUp className="ml-auto h-5 w-5 text-zinc-400 group-data-[collapsible=icon]:hidden" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                align="start"
                className="
                  w-[--radix-popper-anchor-width]
                  bg-[#1d1f1f]
                  border border-zinc-800
                  text-zinc-300
                  shadow-xl
                "
              >
                <DropdownMenuItem className="text-base hover:bg-zinc-700/70 hover:text-white">
                  <User2 className="mr-3 h-5 w-5" />
                  Meu perfil
                </DropdownMenuItem>

                <DropdownMenuItem className="text-base hover:bg-zinc-700/70 hover:text-white">
                  <Settings className="mr-3 h-5 w-5" />
                  Configurações
                </DropdownMenuItem>

                <DropdownMenuItem className="text-base text-red-400 hover:bg-red-500/10 hover:text-red-300">
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
