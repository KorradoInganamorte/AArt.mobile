type Props = {
    title: string
    info: string
}

const AboutColumn = ({ title, info }: Props) => {
  return (
    <div className="flex items-end justify-between w-full mb-[.8rem]">
        <p className="text-base text-gray-item-card">{title}:</p>
        <p className="text-lg text-white whitespace-nowrap">{info}</p>
    </div>
  )
}

export default AboutColumn