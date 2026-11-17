type BaumiProps = {
  name: string
  detail: string
  image: string
  description: string
}

export default function Baumi({ name, detail, image, description }: BaumiProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{detail}</h3>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  )
}