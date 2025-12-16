import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pollico Firebase",
  description: "Um projetinho simples usando Firebase com Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider
          style={
            {
              "--sidebar-width": "250px",
            } as React.CSSProperties
          }
        >
          <div className="flex min-h-screen w-full">
            <AppSidebar />

            <main className="flex-1 bg-[#232728]">
              <div className="flex items-center gap-2 p-4">
                <SidebarTrigger style={{ color: 'white'}}/>
                <span className="text-sm text-white">
                  
                </span>
              </div>

              <div className="flex min-h-[calc(100vh-64px)] w-full items-center justify-center">
                {children}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
