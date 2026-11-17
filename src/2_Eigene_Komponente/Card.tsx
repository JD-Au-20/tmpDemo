import styles from './Card.module.css'

type Props = {
  title?: string
  text?: string
  image: string
}

export default function Card({ title = 'Neck Hurts', text = 'Nacken schmrzen', image }: Props) {
  const words = ['Apfel', 'Sonne', 'Wolke', 'Baum', 'Stern']
  const randomWord = words[Math.floor(Math.random() * words.length)]

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{text}</p>
      <p>{randomWord}</p>
    </div>
  )
}