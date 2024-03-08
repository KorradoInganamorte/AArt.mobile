"use client"

import Link from "next/link"

import { useGetAllAnimeQuery } from "@/redux/services/anime"

import { usePort } from "@/context/portContext"
import { useDropdown } from "@/context/dropdownContext"
import { useSearchQuery } from "@/context/queryContext"

import Skeleton from "@/UI/skeleton/Skeleton"

import { robotoMedium } from "@/public/fonts"
import "./card.sass"

type Props = {
  active: string
}

const Card = ({ active }: Props) => {
  const { PORT } = usePort()
  const { data: animes, isLoading, isSuccess } = useGetAllAnimeQuery({ sort: active })

  const { showDropdown } = useDropdown()
  const { searchQuery } = useSearchQuery()

  return (
    <div className={`${showDropdown ? "hidden" : "film-layout"}`}>
      {isLoading ? (
      <>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </>
      ) : (
        isSuccess ? (
          <>
            {animes.data.length > 0 ? animes?.data.filter(anime => anime.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())).map((anime) => (
              <Link href={`/about/${anime.id}`} key={anime.id} className="flex flex-col justify-center h-max">
                <img className="w-full max-w-[19rem] h-[22.8rem] p-[.4rem] mb-[.8rem] mx-auto rounded-[1rem]" src={`${PORT}${anime.attributes.image_webp.data.attributes.url}`} alt="card image" />
                <h2 className={`${robotoMedium} text-xl mx-auto text-white`}>{anime.attributes.title}</h2>
              </Link>
            )) : (
              <div className="w-[96vw] h-[40vh] mx-auto flex items-center justify-center bg-dark-gray">
                <p className={`${robotoMedium} text-2xl text-white`}>В этой категории ничего не найдено</p>
              </div>
            )}
          </>
        ) : (
          <>
          {Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </>
        )
      )}
    </div>
  )
}

export default Card