import { PiDevices, PiHardDrives, PiInfinityBold } from "react-icons/pi"

const serviceIcons = {
    WebApps: { name: "Websites e Aplicativos", description: "Desenvolvimento de interfaces", icon: <PiDevices />, color: 'text-snk-red' },
    DbAPI: { name: "API e banco de dados", description: "Criação de serviços do sistema", icon: <PiHardDrives />, color: 'text-snk-yellow' },
    DevOps: { name: "DevOps", description: "Gestão e infraestrutura da aplicação", icon: <PiInfinityBold />, color: 'text-snk-green' }
}

export const ServiceCard = ({ service }) => {
    const { name, description, icon, color } = serviceIcons[service]
    return (
        <div className="p-6 border border-snk-gray-300 rounded-xl text-start">
            <span className={`text-4xl ${color}`}>{icon}</span>
            <h3 className="title-sm mt-4 mb-1">{name}</h3>
            <p className="maven-sm">{description}</p>
        </div>
    )
}