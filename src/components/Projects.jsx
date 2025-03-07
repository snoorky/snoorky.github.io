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
        <section className="flex flex-col flex-wrap items-center justify-center text-center w-6xl gap-2 mt-32 mb-36">
            <h2 className="subtitle text-snk-purple">Meus trabalhos</h2>
            <p className="title-md">Veja os projetos em destaque</p>
            <div className="grid grid-cols-3 gap-6 mt-14">
                {projects.map(item => (
                    <Cards key={item.id} projects={item} />
                ))}
            </div>
            <a className="flex gap-2 items-center px-4 py-2 bg-snk-purple rounded-full mt-9" href="https://github.com/snoorky" target='_blank'>
                <FaGithub /> Ver mais projetos
            </a>
        </section>
    )
}