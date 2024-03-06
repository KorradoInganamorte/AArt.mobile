type Props = {
  rating: {
    platform: string
    rating: string
    of: string
  }
}

const RatingFilmBlock = ({ rating }: Props) => {

  return (
    <div className="flex items-center text-base text-white">
        <p className="text-gray-item-card mr-[2rem]">{rating.platform}</p>
        <p className="text-xl">{rating.rating} <span className="text-lg">из {rating.of}</span></p>
    </div>
  )
}

export default RatingFilmBlock