import { FaGitAlt, FaGithub, FaGitlab } from 'react-icons/fa'
import { SiCss3, SiFigma, SiHtml5, SiJavascript, SiJira, SiReact, SiSass, SiSlack, SiSwift, SiTailwindcss, SiTypescript } from 'react-icons/si'

const stackIcons = {
    Git: { icon: <FaGitAlt />, color: '#F34F29' },
    Gitlab: { icon: <FaGitlab />, color: '#E24329' },
    Github: { icon: <FaGithub />, color: '#c0c4ce' },
    Html: { icon: <SiHtml5 />, color: '#E44D26' },
    CSS: { icon: <SiCss3 />, color: '#1572B6' },
    SASS: { icon: <SiSass />, color: '#CB6699' },
    JavaScript: { icon: <SiJavascript />, color: '#F0DB4F' },
    TypeScript: { icon: <SiTypescript />, color: '#007acc' },
    ReactJS: { icon: <SiReact />, color: '#61DAFB' },
    TailwindCSS: { icon: <SiTailwindcss />, color: '#38bdf8' },
    Figma: { icon: <SiFigma />, color: '#0acf83' },
    Swift: { icon: <SiSwift />, color: '#f05138' },
    Slack: { icon: <SiSlack />, color: '#de1c59' },
    Jira: { icon: <SiJira />, color: '#0052cc' },
}

export const Stacks = ({ stackList }) => {
    return (
        <section role='stacks' className="flex flex-wrap items-center justify-center gap-2 mt-10 mb-12 px-4 lg:w-4xl">
            {stackList.map((stack, stackIndex) => {
                const { icon, color } = stackIcons[stack]

                return icon && (
                    <div key={stackIndex} className="flex space-x-2 items-center bg-snk-gray-300 rounded-full px-3 py-2">
                        <span style={{ color }}>{icon}</span>
                        <p className="maven text-sm">{stack}</p>
                    </div>
                )
            })}
        </section>
    )
}