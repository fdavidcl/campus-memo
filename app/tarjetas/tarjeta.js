export default function Tarjeta({ anverso, reverso }) {
  return <details className="border border-gray-200 rounded bg-gray-100 p-3 mb-3 shadow text-center">
    <summary className="marker:hidden list-none">
      <p className="p-3">{ anverso }</p>
      <span className="block border border-cyan-600 rounded px-3 text-center cursor-pointer text-cyan-800">Revelar</span>
    </summary>
    <p className="bg-white p-3 mt-3">{ reverso }</p>
  </details>
}