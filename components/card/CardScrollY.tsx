"use client"

import { usePort } from "@/context/portContext"
import { useGetAllAnimeQuery } from "@/redux/services/anime"

import SkeletonScrollY from "@/UI/skeleton/SkeletonScrollY"
import Link from "next/link"

const CardScrollY = () => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery({ sort: "Классические" })
  
  return (
    <div className="flex overflow-x-scroll">
      {isLoading ? (
      Array.from({ length: 4 }).map((_, i) => (
        <SkeletonScrollY key={i} />
      ))
      ) : isSuccess ? (
        <div className="flex mb-[.4rem]">
          {animes?.data.map((anime, i) => (
            <Link key={i} className="flex-shrink-0 mr-[.8rem] last:mr-0" href={`/about/${anime.id}`}><img className="w-[17.4rem] h-[23.6rem] rounded-[1rem]" src={`${PORT}${anime.attributes.image_webp.data.attributes.url}`} alt="card image" /></Link>
          ))}
        </div>
        ) : (
          Array.from({ length: 4 }).map((_, i) => (
            <SkeletonScrollY key={i} />
          ))
        )
      }
    </div>
  )
}

export default CardScrollY