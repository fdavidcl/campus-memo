"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormNueva({ onSend }) {
  const [anverso, setAnverso] = useState()
  const [reverso, setReverso] = useState()
  const router = useRouter()

  const handleChange = set => event => set(event.target.value)
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    onSend({ anverso, reverso })
    router.refresh()
    setAnverso("")
    setReverso("")
  }

  return <form onSubmit={handleSubmit} className="border border-gray-200 rounded shadow bg-gray-100 p-3 text-center">
      <p className="font-bold">Nueva tarjeta</p>
      <textarea placeholder='Anverso' value={anverso} onChange={handleChange(setAnverso)} className="p-3 mt-3"></textarea><br />
      <textarea placeholder='Reverso' value={reverso} onChange={handleChange(setReverso)} className="p-3 mt-3"></textarea><br />
      <button type="submit" className='border border-black rounded px-3 mt-3'>Añadir</button>
    </form>
}