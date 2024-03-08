"use client"

import { usePort } from "@/context/portContext"

import { useGetAnimeOfTheYearQuery } from "@/redux/services/anime"

import SkeletonCardFilmOfTheYear from "@/UI/skeleton/SkeletonCardFilmOfTheYear"

import { poppinsMedium, robotoMedium } from "@/public/fonts"

const CardAnimeOfTheYear = () => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetAnimeOfTheYearQuery("")

  return (
    <>
        <p className={`${poppinsMedium} text-white text-xl mb-[.6rem]`}>Аниме года</p>
        {isLoading ? (
          <SkeletonCardFilmOfTheYear />
        ) : isSuccess ? (
          <div className="flex flex-col bg-[#1E1E1E] p-[.4rem] mb-[2rem] rounded-[.5rem] text-white">
            <img className="w-full h-[18.3rem] rounded-[.5rem] mb-[.6rem]" src={`${PORT}${anime?.data.attributes.img.data.attributes.url}`} alt="anime of the year image card" />
            <div className="px-[.6rem] mb-[1rem]">
              <h1 className={`${robotoMedium} text-xl mb-[.6rem]`}>{anime?.data.attributes.title}</h1>
              <p className="text-base line-clamp-[3]">{anime?.data.attributes.description}</p>
            </div>
          </div>
        ) : (
          <SkeletonCardFilmOfTheYear />
        )}
    </>
  )
}

export default CardAnimeOfTheYear