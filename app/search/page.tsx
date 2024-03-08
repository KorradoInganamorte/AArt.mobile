"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import Card from "@/components/card/Card"
import CardAnimeOfTheYear from "@/components/card/CardFilmOfTheYear"

const FilterBtn = dynamic(() => import("@/UI/button/FilterBtn"))

const Page = () => {
  const [isActive, setIsActive] = useState<number>(0)
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  const active = lists[isActive]

  return (
    <div className="container_page">

      <div className="flex overflow-x-scroll mb-[1.2rem] mt-[1.2rem]">
        <FilterBtn lists={lists} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <CardAnimeOfTheYear />

      <Card active={active} />
      
    </div>
  )
}

export default Page