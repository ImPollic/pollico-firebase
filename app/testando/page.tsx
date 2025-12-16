"use client"

import { useState, useEffect } from "react"
import { ref, set, onValue } from "firebase/database"
import { database } from "../firebaseConfig"

export default function () {
  const [nome, setNome] = useState("")
  const [usuarios, setUsuarios] = useState<any>({})

  async function insertIntoDatabase() {
    // Inserir no banco
    if (!nome) return
    const userId = Date.now().toString()
    await set(ref(database, `usuarios/${userId}`), { nome })
    setNome("")
  }

  useEffect(() => {
    // Receber do banco
    const usuariosRef = ref(database, "usuarios")
    const unsubscribe = onValue(usuariosRef, (snapshot) => {
      if (snapshot.exists()) {
        setUsuarios(snapshot.val())
      } else {
        setUsuarios({})
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <div>
      <p className="text-white">Bom dia pessoal</p>
      <div className="bg-black p-2">
        <p className="text-white">Insira o nome de usuário:</p>
        <input
          type="text"
          value={nome}
          style={{ border: "1px solid white", marginRight: 5, color: "white" }}
          onChange={(e) => setNome(e.target.value)}
        />
        <button style={{ background: "white" }} onClick={insertIntoDatabase}>
          Cadastrar
        </button>

        <div className="flex flex-col mt-4">
          <p className="text-white">Usuários cadastrados no banco em JSON</p>
          <pre className="text-white text-sm">
            {JSON.stringify(usuarios, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
