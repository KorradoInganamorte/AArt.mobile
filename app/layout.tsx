import type { Metadata } from 'next'
import './globals.sass'

import { Roboto } from 'next/font/google'
import { robotoRegular } from '@/public/fonts'

const robotoGoogle = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '300'
})

import Header from '@/components/Header'
import Footer from '@/components/Footer'

import { ReduxProvider } from '@/redux/ReduxProvider'
import { PortProvider } from '@/context/portContext'
import { QualityProvider } from '@/context/qualityContext'
import { DropdownProvider } from '@/context/dropdownContext'
import { SearchQueryProvider } from '@/context/queryContext'

export const metadata: Metadata = {
  title: 'Anime',
  description: 'Новые и классические аниме совершенно бесплатно',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className='phone-sm:text-[62.5%] verticalphone:text-[47%] horizontalphone:text-[48.5%] tablet:text-[50%] laptop-sm:text-[56.25%] laptop:text-[62.5%] monitor:text-[70.5%] screen:text-[87.5%] leading-normal'>
      <body className={`h-[100vh] ${robotoRegular} ${robotoGoogle.variable} bg-dark-gray`}>
        <ReduxProvider>
          <PortProvider>
            <DropdownProvider>
              <SearchQueryProvider>
                <Header />
                  <QualityProvider>
                    {children}
                  </QualityProvider>
                </SearchQueryProvider>
            </DropdownProvider>
            <Footer />
          </PortProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}