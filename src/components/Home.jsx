import BackgroundHero from '../assets/background-hero.png'
import { Profile } from './Profile'

export const Home = () => {
    return (
        <section role='home' className="relative w-full flex justify-center text-center px-4">
            <img className="w-full h-full lg:h-auto absolute z-[-1]" src={BackgroundHero} alt="" />
            <div className='flex flex-col items-center w-4xl gap-2'>
                <Profile />
                <p className="inconsolata text-sm lg:text-lg mt-4">Hello World! Meu nome é <span className="text-snk-purple">Raphael Vitor</span> e sou</p>
                <h1 className="asap text-2xl lg:text-6xl">Desenvolvedor Fullstack</h1>
                <p className="maven text-sm lg:text-lg">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão
                    pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            </div>
        </section>
    )
}