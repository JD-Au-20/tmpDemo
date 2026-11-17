import './Baum.css'
import Baumi from './Baumi.tsx'

const trees = [
  { name: 'Eiche', detail: 'Ein großer Laubbaum', image: 'https://picsum.photos/seed/eiche/200/300', description: 'Die Eiche kann sehr alt werden.' },
  { name: 'Birke', detail: 'Ein heller Laubbaum', image: 'https://picsum.photos/seed/birke/200/300', description: 'Die Birke hat eine helle Rinde.' },
  { name: 'Tanne', detail: 'Ein immergrüner Nadelbaum', image: 'https://picsum.photos/seed/tanne/200/300', description: 'Tannen behalten ihre Nadeln im Winter.' },
  { name: 'Ahorn', detail: 'Ein Baum mit markanten Blättern', image: 'https://picsum.photos/seed/ahorn/200/300', description: 'Ahornblätter färben sich im Herbst bunt.' },
  { name: 'Kirsche', detail: 'Ein Obstbaum', image: 'https://picsum.photos/seed/kirsche/200/300', description: 'Im Frühling blüht der Kirschbaum.' },
]

function Baum() {
  return (
    <>
      <h1>Willkommen</h1>
      <div className="baum">
        {trees.map((tree) => (
          <Baumi key={tree.name} {...tree} />
        ))}
      </div>
    </>
  )
}

export default Baum
