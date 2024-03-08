import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import useDebounce from "@/lib/hooks/useDebounce";

import { useGetAllAnimeQuery } from "@/redux/services/anime";

import { useDropdown } from "@/context/dropdownContext";
import { useSearchQuery } from "@/context/queryContext";

import { Data } from "@/types/Meta";

const SearchFilmBar = () => {
    const { data: animes } = useGetAllAnimeQuery({ sort: "Все" })

    const { setShowDropdown } = useDropdown()
    const { setSearchQuery } = useSearchQuery()

    const [search, setSearch] = useState<string>("")
    const value = useDebounce(search, 600)

    const inputRef = useRef<HTMLInputElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const dropdownListContainerRef = useRef<HTMLDivElement>(null)

    const keyDownEvent = (e: any) => {
        switch (e.key) {
          case "Enter":
            setShowDropdown(false)
            setSearchQuery(value)
            inputRef.current?.blur()
            break;
          default:
            break;
        }
    }

    const handleClickDropdownList = (anime: Data) => {
        setSearchQuery(anime.attributes.title)
        setSearch(anime.attributes.title)
        setShowDropdown(false)
    }

    const handleClickOutside = (e: any) => {
        if (!dropdownRef.current?.contains(e.target)) {
          setShowDropdown(false)
        }
    };
    
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

  return (
    <div className="absolute top-0 left-0 z-3 w-[100%] min-h-screen bg-dark-gray px-[1.4rem]" ref={dropdownRef} onKeyDown={keyDownEvent}>
      <div className="flex items-center mt-[1.2rem]">
        <img onClick={() => setShowDropdown(false)} className="w-[.9rem] h-[1.4rem] mr-[1.8rem]" src="/images/ArrowBack.svg" alt="back icon" />
        <input ref={inputRef} value={search} onChange={(e) => setSearch(e.target.value)} className="w-[100%] flex items-center mx-auto py-[.4rem] pl-[2rem] text-lg text-white border border-gray bg-white/0 rounded-[1rem] focus:outline-gray-placeholder focus:outline placeholder:text-gray-placeholder" type="text" placeholder="Искать Аниме..." />
      </div>
      <div ref={dropdownListContainerRef} className="py-[1.2rem]">
        {animes?.data.slice(0, 8).filter(anime => anime.attributes.title.toLowerCase().includes(value.toLowerCase())).map(anime => (
          <div onClick={() => handleClickDropdownList(anime)} key={anime.id} className="flex justify-between items-center w-[100%] hover:bg-[#1E1E1E] px-[1rem] my-[1.2rem] last:mb-0 ease-in-out transition-colors">
            <p className="max-w-[28.6rem] text-lg text-white py-[.4rem]">{anime.attributes.title}</p>
            <img className="w-[1.6rem] h-[1.6rem]" src="/images/Search_white.svg" alt="search icon" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchFilmBar