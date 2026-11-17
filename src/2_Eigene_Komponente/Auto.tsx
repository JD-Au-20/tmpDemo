import './Auto.css'
import Auti from './Auti.tsx'

const cars = [
  { name: 'Sportwagen', image: 'https://picsum.photos/seed/sportwagen/200/300', description: 'Schnell und sportlich' },
  { name: 'Cabrio', image: 'https://picsum.photos/seed/cabrio/200/300', description: 'Fahren mit offenem Dach' },
  { name: 'Geländewagen', image: 'https://picsum.photos/seed/gelaendewagen/200/300', description: 'Für unwegsames Gelände' },
  { name: 'Oldtimer', image: 'https://picsum.photos/seed/oldtimer/200/300', description: 'Ein Klassiker auf vier Rädern' },
  { name: 'Elektroauto', image: 'https://picsum.photos/seed/elektroauto/200/300', description: 'Leise und elektrisch' },
  { name: 'Rennwagen', image: 'https://picsum.photos/seed/rennwagen/200/300', description: 'Für die Rennstrecke' },
  { name: 'Kleinwagen', image: 'https://picsum.photos/seed/kleinwagen/200/300', description: 'Klein und praktisch' },
  { name: 'Familienauto', image: 'https://picsum.photos/seed/familienauto/200/300', description: 'Platz für die ganze Familie' },
  { name: 'Lieferwagen', image: 'https://picsum.photos/seed/lieferwagen/200/300', description: 'Viel Platz für Ladung' },
]

function Auto() {
  return (
    <>
      <h1>Best cars</h1>
      <div className="auto-container">
        {cars.map((car) => (
          <Auti key={car.name} {...car} />
        ))}
      </div>
      <h2>Even better cars</h2>
    </>
  )
}

export default Auto