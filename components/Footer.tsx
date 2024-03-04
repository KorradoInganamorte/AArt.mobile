import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center h-[8rem] bg-dark-gray px-[2.2rem] mt-[1.2rem]">
        <Link className="mr-[2.2rem]" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqrvgrXWwbgMhVsHWXJNrpFlmjgNjmZPdCWQGHRrmRCZCbsXfbDLsFzmdRNxsqtrQMJvd"><img className="w-[2.8rem] h-[2.8rem]" src="/images/Gmail.svg" alt="email contacts icon" /></Link>
        <Link className="mr-[2.2rem]" href="https://vk.com"><img className="w-[2.8rem] h-[2.8rem]" src="/images/VK.svg" alt="VK contacts icon" /></Link>
        <Link className="mr-[2.2rem]" href="https://t.me/authorDEV"><img className="w-[2.8rem] h-[2.8rem]" src="/images/Telegram.svg" alt="Telegram contacts icon" /></Link>
        <Link href="https://github.com/KorradoInganamorte"><img className="w-[2.8rem] h-[2.8rem]" src="/images/Github.svg" alt="Github contacts icon" /></Link>
    </footer>
  )
}

export default Footer