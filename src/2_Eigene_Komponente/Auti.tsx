type AutiProps = {
  name: string
  image: string
  description: string
}

export default function Auti({ name, image, description }: AutiProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  )
}