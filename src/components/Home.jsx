import BackgroundHero from '../assets/background-hero.png'
import { Profile } from './Profile'

export const Home = () => {
    return (
        <section role='home' className="relative w-full flex justify-center text-center">
            <img className="absolute z-[-1]" src={BackgroundHero} alt="" />
            <div className='flex flex-col items-center w-4xl gap-2 mt-4'>
                <Profile />
                <p className="subtitle mt-14">Hello World! Meu nome é <span className="text-snk-purple">Raphael Vitor</span> e sou</p>
                <h1 className="title-lg">Desenvolvedor Fullstack</h1>
                <p className="text-sm mt-5">Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão
                    pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.</p>
            </div>
        </section>
    )
}