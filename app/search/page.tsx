"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import Card from "@/components/card/Card"

const CardAnimeOfTheYear = dynamic(() => import("@/components/card/CardFilmOfTheYear"))
const FilterBtn = dynamic(() => import("@/UI/button/FilterBtn"))
const SearchFilmBar = dynamic(() => import("@/components/film/SearchFilmBar"))

const Page = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [isActive, setIsActive] = useState<number>(0)
  const lists = ["Все", "В тренде", "Новые", "Классические"]

  const active = lists[isActive]

  return (
    <div className="container_page">

      {/* <div className="absolute translate-x-[50%] translate-y-[-5.8rem] w-[60rem]">
        <SearchFilmBar showDropdown={showDropdown} setShowDropdown={setShowDropdown} setSearchQuery={setSearchQuery} />
      </div> */}

      <div className="flex overflow-x-scroll mb-[1.2rem] mt-[1.2rem]">
        <FilterBtn lists={lists} isActive={isActive} setIsActive={setIsActive} />
      </div>

      <CardAnimeOfTheYear />

      <Card showDropdown={showDropdown} active={active} searchQuery={searchQuery} />
      
    </div>
  )
}

export default Page