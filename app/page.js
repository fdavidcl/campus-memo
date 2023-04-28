import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (<>
      <p className='text-center max-w-lg'>Las tarjetas de memorización te permiten estudiar conceptos mediante un sistema de preguntas y respuestas.</p>
      <Link href="tarjetas" className='border border-black rounded px-3'>Ver mis tarjetas</Link>
    </>
  )
}
