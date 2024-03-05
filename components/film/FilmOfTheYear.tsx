"use client"

import { usePort } from "@/context/portContext"
import { useGetAnimeOfTheYearQuery } from "@/redux/services/anime"

import SkeletonFilmOfTheYear from "@/UI/skeleton/SkeletonFilmOfTheYear"

import { robotoMedium } from "@/public/fonts"

const FilmOfTheYear = () => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetAnimeOfTheYearQuery("")

  return (
    <>
        {isLoading ? (
            <SkeletonFilmOfTheYear />
        ) : isSuccess ? (
            <div className="bg-[#1E1E1E] px-[.4rem] pt-[.4rem] pb-[1.6rem] mt-[.4rem] mb-[3.2rem] rounded-[1rem]">
                <img className="w-full h-[47.3rem] mb-[1.4rem]" src={`${PORT}${anime?.data.attributes.img_mobile.data.attributes.url}`} alt="anime of the year image" />
                <div className="px-[1rem] text-white">
                    <h1 className={`${robotoMedium} text-2xl mb-[1.2rem]`}>Аниме года - {anime?.data.attributes.title}</h1>
                    <p className="text-base line-clamp-4">{anime?.data.attributes.description}</p>
                </div>
            </div>
        ) : (
            <SkeletonFilmOfTheYear />
        )}
    </>
  )
}

export default FilmOfTheYear