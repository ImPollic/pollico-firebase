import Image from "next/image"
import { Eye } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center h-full bg-[#232728]">
      <div className="w-full max-w-sm text-white">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Entre na sua conta
        </h1>

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
      </div>
    </div>
  )
}
