import { MessageCircle, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-[#232728] text-white">
      <div className="w-full max-w-5xl mx-auto px-6 py-10">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold">
            Bem-vindo de volta!
          </h1>
          <p className="text-zinc-400 mt-1">
            Veja suas conversas e mensagens recentes
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-[#2b2f30] p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-5 w-5 text-zinc-300" />
              <h2 className="text-lg font-medium">Conversas recentes</h2>
            </div>

            <ul className="space-y-3">
              {["João", "Maria", "Grupo IF"].map((name) => (
                <li
                  key={name}
                  className="flex items-center justify-between rounded-lg px-4 py-3 bg-[#3a3f40] hover:bg-[#464b4c] transition cursor-pointer"
                >
                  <span className="font-medium">{name}</span>
                  <span className="text-xs text-zinc-400">
                    agora
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-[#2b2f30] p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-zinc-300" />
              <h2 className="text-lg font-medium">Grupos</h2>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg px-4 py-3 bg-[#3a3f40] hover:bg-[#464b4c] transition cursor-pointer">
                E4 Best by Test
              </div>
              <div className="rounded-lg px-4 py-3 bg-[#3a3f40] hover:bg-[#464b4c] transition cursor-pointer">
                Absolute cinema
              </div>
              <button className="w-full mt-2 h-10 rounded-md border border-zinc-600 hover:bg-white/5 transition text-sm">
                Criar novo grupo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
