import { robotoMedium } from "@/public/fonts"

const SkeletonFilmOfTheYear = () => {
  return (
      <div className="bg-[#1E1E1E] px-[.4rem] pt-[.4rem] pb-[1.6rem] mt-[.4rem] mb-[3.2rem] rounded-[1rem]">
        <div className="w-full h-[47.3rem] bg-gray-hover-card mx-auto mb-[1.4rem] rounded-[1rem]"></div>
        <div className="px-[1rem]">
          <div className="w-[20.5rem] h-[2.3rem] bg-gray-hover-card rounded-[.5rem] mb-[1.2rem]"></div>
          <div className="w-[100%] h-[6.8rem] bg-gray-hover-card rounded-[.5rem]"></div>
        </div>
      </div>
  )
}

export default SkeletonFilmOfTheYear