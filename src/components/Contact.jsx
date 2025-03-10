import { MdArrowOutward, MdOutlineMail } from "react-icons/md";
import { RiGithubLine, RiInstagramLine, RiLinkedinBoxLine } from "react-icons/ri";
import BackgroundContact from '../assets/background-contact.png';

const socialMedia = {
    LinkedIn: { icon: <RiLinkedinBoxLine />, link: "https://www.linkedin.com/in/raphaelvitor/" },
    Instagram: { icon: <RiInstagramLine />, link: "https://www.instagram.com/sno.orky/" },
    Github: { icon: <RiGithubLine />, link: "https://github.com/snoorky" },
    Email: { icon: <MdOutlineMail />, link: "mailto:raphaelvitorlopes@icloud.com" }
}

export const Contact = () => {
    return (
        <section className="relative flex flex-col items-center justify-center text-center w-full py-12 lg:py-24 px-4">
            <img className="w-full h-full lg:h-auto absolute z-[-1]" src={BackgroundContact} alt="" />
            <h2 className="inconsolata text-snk-purple lg:text-xl">Contato</h2>
            <p className="asap lg:text-2xl">Gostou dos meus trabalhos?</p>
            <p className='maven'>Entre em contato ou acompanhe as minhas redes sociais!</p>
            <div className="flex flex-col items-center space-y-4 mt-7 lg:mt-14 w-full md:w-lg">
                {Array.from(["LinkedIn", "Instagram", "Github", "Email"], (item, index) => {
                    const { icon, link } = socialMedia[item] || {}

                    return (
                        <div key={index} className="flex space-x-2 bg-snk-gray-300 w-full py-4 px-4 rounded-2xl">
                            <span style={{ fontSize: '1.5rem'}}>{icon}</span>
                            <p>{item}</p>
                            <a className="w-full flex justify-end items-center text-snk-blue" href={link}><MdArrowOutward /></a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}