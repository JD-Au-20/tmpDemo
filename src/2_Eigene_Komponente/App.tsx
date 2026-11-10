import styles from './App.module.css'
import Card from './Card.tsx'

export default function App() {
  return (
    <div className={styles['card-container']}>
      <Card />
    </div>
  )
}