import FilmOfTheYear from "@/components/film/FilmOfTheYear"
import CardScrollY from "@/components/card/CardScrollY"

import { poppinsMedium } from "@/public/fonts"
import "./index.sass"

const Home = () => {

  return (
    <div className="container_page">
      <FilmOfTheYear />

      <h3 className={`w-max mx-auto ${poppinsMedium} text-3xl text-white mb-[1.6rem]`}>Классические аниме</h3>
      <CardScrollY />

    </div>
  )
}

export default Home