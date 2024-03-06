import { Anime, AnimeOfTheYear, Animes } from '@/types/Anime'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const strapiUrl = process.env.NODE_ENV === 'production' ? 'https://strapi.animeaart.ru' : 'http://localhost:1337';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: strapiUrl }),
  endpoints: (builder) => ({
    getAllAnime: builder.query<Animes, {sort:string}>({
      query: ({ sort }) => `/api/animes?${sort !== "Все" ? `filters[category]=${sort}` : ""}&populate[rating]=*&populate[acters]=*&populate[category]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_webp3x][fields][0]=name&populate[image_webp3x][fields][1]=url`,
    }),
    getOnesAnime: builder.query<Anime, {id: string}>({
      query: ({ id }) =>  `/api/animes/${id}?populate[rating]=*&populate[acters]=*&populate[category]=*&populate[image_webp][fields][0]=name&populate[image_webp][fields][1]=url&populate[image_webp3x][fields][0]=name&populate[image_webp3x][fields][1]=url`
    }),
    getAnimeOfTheYear: builder.query<AnimeOfTheYear, string>({
      query: () =>  `/api/anime-of-the-year?fields[0]=title&fields[1]=description&fields[2]=url&populate[img][fields][0]=name&populate[img][fields][1]=url&populate[img_mobile][fields][0]=name&populate[img_mobile][fields][1]=url&populate[img_card][fields][0]=name&populate[img_card][fields][1]=url&populate[rating]=*`
    })
  }),
})

export const { useGetAllAnimeQuery, useGetOnesAnimeQuery, useGetAnimeOfTheYearQuery } = animeApi