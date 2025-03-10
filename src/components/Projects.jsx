import { FaGithub } from 'react-icons/fa'
import { Cards } from "./Cards"
import { useEffect, useState } from 'react'
import { APIProjects } from '../Api'

export const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const repositories = async () => await APIProjects.get()
            .then((response => {
                setProjects(response.data)
            }))
        repositories()
    }, [])

    return (
        <section className="flex flex-col flex-wrap items-center justify-center text-center mt-12 px-4">
            <h2 className="inconsolata text-snk-purple lg:text-xl">Meus trabalhos</h2>
            <p className="asap lg:text-2xl">Veja os projetos em destaque</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 lg:mt-14 lg:w-7xl">
                {projects.map(item => (
                    <Cards key={item.id} projects={item} />
                ))}
            </div>
            <a className="flex gap-2 items-center px-4 py-2 bg-snk-purple rounded-full mt-9 mb-12 lg:mb-24" href="https://github.com/snoorky" target='_blank'>
                <FaGithub /> Ver mais projetos
            </a>
        </section>
    )
}