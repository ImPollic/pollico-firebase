import Image from "next/image"
import { Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center h-full bg-[#232728]">
      <div className="w-full max-w-sm text-white">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Entre na sua conta
        </h1>

        <form className="space-y-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-300">Email</label>
            <input
              type="email"
              className="h-10 rounded-md bg-[#3a3f40] px-3 text-sm outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-zinc-300">Senha</label>
            <div className="relative">
              <input
                type="password"
                className="h-10 w-full rounded-md bg-[#3a3f40] px-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-white/20"
              />
              <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-300 cursor-pointer" />
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-sm text-zinc-300 hover:text-white transition"
            >
              Esqueceu sua senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-10 rounded-md bg-white text-black font-medium hover:bg-zinc-200 transition"
          >
            Entrar
          </button>
        </form>

        <div className="flex items-center gap-3 my-6 w-full">
          <div className="h-px w-full bg-zinc-600" />
          <span className="text-xs text-zinc-400 whitespace-nowrap">ou continue com</span>
          <div className="h-px w-full bg-zinc-600" />
        </div>

        <div className="space-y-3">
          <button className="w-full h-10 flex items-center justify-center gap-2 rounded-md border border-zinc-600 hover:bg-white/5 transition">
            <Image src="/google.svg" alt="Google" width={18} height={18} />
            <span className="text-sm font-medium">Google</span>
          </button>

          <button className="w-full h-10 flex items-center justify-center gap-2 rounded-md border border-zinc-600 hover:bg-white/5 transition">
            <Image src="/github.svg" alt="GitHub" width={18} height={18} />
            <span className="text-sm font-medium">GitHub</span>
          </button>
        </div>

        <p className="text-center text-sm text-zinc-400 mt-6">
          Não possui conta?{" "}
          <a href="#" className="text-white font-medium hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  )
}
