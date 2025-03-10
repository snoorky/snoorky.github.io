import { ServiceCard } from "./ServiceCard"

const serviceList = ["WebApps", "DbAPI", "DevOps"]

export const Services = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center bg-snk-gray-100 w-full py-12 lg:py-24 px-4">
            <h2 className="inconsolata text-snk-purple lg:text-xl">Meus serviços</h2>
            <p className="asap lg:text-2xl">Como posso ajudar o seu negócio</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7 w-full lg:w-7xl">
                {serviceList.map((item, index) => (
                    <ServiceCard key={index} service={item}  />
                ))}
            </div>
        </section>
    )
}