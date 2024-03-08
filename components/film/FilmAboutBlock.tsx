"use client"

import Link from "next/link"

import AboutColumn from "@/UI/column/AboutColumn"

import SkeletonAboutBlock from "@/UI/skeleton/SkeletonAboutBlock"

import { usePort } from "@/context/portContext"
import { useGetOnesAnimeQuery } from "@/redux/services/anime"

import { poppinsMedium, robotoMedium } from "@/public/fonts"
import { useRef } from "react"

type Props = {
    id: string
}

const FilmAboutBlock = ({ id }: Props) => {
  const { PORT } = usePort()
  const { data: anime, isLoading, isSuccess } = useGetOnesAnimeQuery({ id: id })

  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const textIncreaseRef = useRef<HTMLParagraphElement>(null)
  const textReduceRef = useRef<HTMLParagraphElement>(null)

  const handleTextIncrease = () => {
    descriptionRef.current?.classList.remove("line-clamp-6")
    textIncreaseRef.current?.classList.add("hidden")
    textReduceRef.current?.classList.remove("hidden")
  }

  const handleTextReduce = () => {
    descriptionRef.current?.classList.add("line-clamp-6")
    textIncreaseRef.current?.classList.remove("hidden")
    textReduceRef.current?.classList.add("hidden")
  }

  return (
    <>
        {isLoading ? (
          <SkeletonAboutBlock />
            ) : isSuccess ? (
                <>
                    <div className="flex flex-col items-center mt-[1.2rem]">
                        <img className="w-[24.3rem] h-[33rem] mb-[.8rem] rounded-[1rem]" src={`${PORT}${anime?.data.attributes.image_webp.data.attributes.url}`} alt="film image" />
                        <div className={`flex justify-between w-[24.3rem] mb-[.8rem] ${poppinsMedium} text-base text-white`}>
                            <div className="flex items-center">
                                <img className="w-[1.1rem] h-[1rem] mr-[.8rem]" src="/images/Star.svg" alt="rating icon" />
                                <p>{anime.data.attributes.rating[0].rating}</p>
                            </div>
                            <p>{anime.data.attributes.series}</p>
                            <p>{anime.data.attributes.time_all}</p>
                        </div>
                        <Link href={`/watch/${id}/1`} className={`flex justify-center items-center w-[24.3rem] bg-white py-[.4rem] mb-[2rem] rounded-[.5rem] ${robotoMedium} text-2xl text-black`}>Смотреть</Link>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className={`${robotoMedium} text-3xl text-white mb-[.8rem]`}>{anime.data.attributes.title}</h1>
                        <p ref={descriptionRef} className="text-lg text-white leading-[1.5] line-clamp-6 mx-[1.8rem] mb-[.8rem]">{anime.data.attributes.description}</p>
                    </div>

                    <p ref={textIncreaseRef} onClick={handleTextIncrease} className="text-lg text-light-blue mx-[1.8rem] mb-[2.4rem]">Полное описание</p>
                    <p ref={textReduceRef} onClick={handleTextReduce} className="hidden text-lg text-light-blue mx-[1.8rem] mb-[2.4rem]">Свернуть</p>

                    <div className="flex flex-col mx-[1.8rem] mb-[4.4rem]">
                        <p className={`${robotoMedium} text-2xl text-white mb-[.8rem]`}>Актеры:</p>
                        {anime?.data.attributes.acters.map((item, i) => (
                            <AboutColumn key={i} title={item.character} info={item.acter} />
                        ))}
                    </div>
                </>
            ) : (
                <SkeletonAboutBlock />
        )}
    </>
  )
}

export default FilmAboutBlock