import VideoPlayer from "@/components/video_player/VideoPlayer"
import FilmAboutBlock from "@/components/film/FilmAboutBlock"

import { robotoMedium } from "@/public/fonts"
import "./index.sass"

const Page = ({ params }: { params: { id: string } }) => {

  return (
        <>
            <FilmAboutBlock id={params.id} />

            <div className="flex flex-col items-center">
                <p className={`${robotoMedium} text-4xl text-white mb-[3.4rem]`}>Трейлер</p>
                <VideoPlayer id={params.id} series={"0"} />
            </div>
        </>
  )
}

export default Page