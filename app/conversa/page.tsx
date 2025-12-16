"use client"

import { useEffect, useRef, useState } from "react"

type Usuario = {
  nome: string
  foto: string
  eu?: boolean
}

type Mensagem = {
  id: number
  usuario: Usuario
  texto: string
  enviadoEm: string
}

const usuarioLogado: Usuario = {
  nome: "Apollo Borges",
  foto: "https://yt3.googleusercontent.com/9muLpK7ohUv15em90KzpChttZD7bv7bYnRx63Cddp3uULf_Z0lUyJpT5y8v1jdQ9vkeexaDiCw=s160-c-k-c0x00ffffff-no-rj",
  eu: true,
}

export default function PageConversa() {
  const [texto, setTexto] = useState("")
  const [mensagens, setMensagens] = useState<Mensagem[]>([])
  const fimRef = useRef<HTMLDivElement>(null)

  function enviarMensagem() {
    if (!texto.trim()) return

    const nova: Mensagem = {
      id: Date.now(),
      usuario: usuarioLogado,
      texto,
      enviadoEm: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    setMensagens((prev) => [...prev, nova])
    setTexto("")
  }

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [mensagens])

  return (
    <div className="flex flex-col h-screen w-full bg-[#181a1b] overflow-hidden p-[5px]">

      {/* HEADER */}
      <div className="h-16 px-6 flex items-center border-b border-white/5 shrink-0">
        <div className="flex items-center gap-4">
          <img
            src="/app.png"
            className="h-11 w-11 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg text-white">
              Bate papo geral
            </p>
            <p className="text-sm text-white/70">
              alguns online
            </p>
          </div>
        </div>
      </div>

      {/* MENSAGENS */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {mensagens.map((msg) => (
          <MensagemItem key={msg.id} mensagem={msg} />
        ))}
        <div ref={fimRef} />
      </div>

      {/* INPUT */}
      <div className="border-t border-white/5 p-4 shrink-0">
        <div className="flex gap-4">
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
            placeholder="Digite sua mensagem..."
            className="
              flex-1
              bg-[#232526]
              text-white
              text-base
              placeholder:text-white/50
              rounded-xl
              px-4 py-3
              outline-none
              focus:ring-2 focus:ring-white/10
            "
          />
          <button
            onClick={enviarMensagem}
            className="
              bg-[#232526]
              hover:bg-[#2a2c2d]
              transition
              px-6
              rounded-xl
              font-medium
              text-base
              text-white
            "
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

function MensagemItem({ mensagem }: { mensagem: Mensagem }) {
  const minha = mensagem.usuario.eu

  return (
    <div className={`flex gap-4 ${minha ? "flex-row-reverse text-right" : ""}`}>
      <img
        src={mensagem.usuario.foto}
        className="h-10 w-10 rounded-full object-cover"
      />

      <div className="max-w-[70%]">
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span className="font-medium text-white">
            {mensagem.usuario.nome}
          </span>
          <span>{mensagem.enviadoEm}</span>
        </div>

        <div
          className={`
            mt-1
            px-4 py-3
            text-base
            text-white
            leading-relaxed
            break-words
            whitespace-pre-wrap
            max-w-full
            ${minha
              ? "bg-[#8b1e1e] rounded-2xl rounded-tr-md"
              : "bg-[#232528] rounded-2xl rounded-tl-md"
            }
          `}
        >
          {mensagem.texto}
        </div>
      </div>
    </div>
  )
}
