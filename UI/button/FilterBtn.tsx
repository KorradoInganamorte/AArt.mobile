import { Dispatch, SetStateAction } from "react"

import { robotoMedium } from "@/public/fonts"

type Props = {
  lists: string[]
  isActive: number
  setIsActive: Dispatch<SetStateAction<number>>
}

const FilterBtn = ({ lists, isActive, setIsActive }: Props) => {
  const handleClick = (i: number) => {
    setIsActive(i)
  }

  return (
    <>
      {lists.map((list, i) => (
        <div key={i} onClick={() => handleClick(i)} className={`inline-block h-min ${isActive === i ? "bg-white text-black" : "bg-gray text-white"} py-[.6rem] px-[1.2rem] mr-[1rem] first:mb-[.4rem] last:mr-0 rounded-[.5rem] ${robotoMedium} text-base whitespace-nowrap`}>{list}</div>
      ))}
    </>
  )
}

export default FilterBtn