import styles from './App.module.css'
import Card from './Card.tsx'

export default function App() {
  return (
    <div className={styles['card-container']}>
      <Card title="jakob" text="Das ist jakob" image="https://picsum.photos/200/300" />
      <Card title="jakob2" text="stoni" image="https://picsum.photos/100/300"/>
      <Card title="Lumpen" text="Lumpen ist goetad" image="https://picsum.photos/200/300"/>
      <Card image="https://picsum.photos/200/300"/>
    </div>
  )
}