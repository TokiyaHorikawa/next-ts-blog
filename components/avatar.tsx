type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="rounded-full h-16 w-16 flex items-center justify-center" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar
