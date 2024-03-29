"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useDropdown } from "@/context/dropdownContext"

import SearchFilmBar from "@/components/film/SearchFilmBar"

import { montserratSubrayada } from "@/public/fonts"

const Header = () => {
  const pathname = usePathname()
  const { showDropdown, setShowDropdown } = useDropdown()

  const handleClickInput = () => {
    setShowDropdown(true)
  }

  return (
    <header className="flex items-center justify-between h-[4.2rem] bg-dark-gray phone-sm:px-[1.6rem] verticalphone:px-[2rem] horizontalphone:px-[2.4rem] tablet:px-[2.8rem] laptop:px-[3rem]">
      <Link href="/"><p className={`${montserratSubrayada} text-5xl text-red`}>A</p></Link>
      <div className="flex">

        {
        pathname === "/search" ? (
          <>
            <img onClick={handleClickInput} className="w-[2rem] h-[2rem] mr-[1.8rem]" src="/images/Search_white.svg" alt="search animes" />
            {showDropdown && <SearchFilmBar /> }
          </>
        ) : <Link href="/search"><img className="w-[2rem] h-[2rem] mr-[1.8rem]" src="/images/Search_white.svg" alt="go to search page icon" /></Link>
        }

        <Link href="/faq"><img className="w-[1.4rem] h-[2rem]" src="/images/Question.svg" alt="go to faq page icon" /></Link>
      </div>
    </header>
  )
}

export default Header