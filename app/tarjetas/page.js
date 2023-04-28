import { useState } from 'react'
import FormNueva from './formnueva'
import Tarjeta from './tarjeta'

export default async function Page() {
  const [tarjetas, setTarjetas] = useState([
    { id: 0, anverso: "Redux", reverso: "Contenedor de estado para frontend" }
  ])
  return (<div className='flex w-full gap-3 items-start'>
      <FormNueva onSend={nueva => setTarjetas([...tarjetas, { id: tarjetas.length, ...nueva }])} />
      <div className='flex-1'>
        {tarjetas.map(({ id, ...t }) => <Tarjeta key={id} {...t} />)}
      </div>
    </div>
  )
}
