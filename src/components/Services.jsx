import { ServiceCard } from "./ServiceCard"

const serviceList = ["WebApps", "DbAPI", "DevOps"]

export const Services = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center w-full gap-2 pb-36 pt-24 bg-snk-gray-100">
            <h2 className="subtitle text-snk-purple">Meus serviços</h2>
            <p className="title-md">Como posso ajudar o seu negócio</p>
            <div className="grid grid-cols-3 gap-6 mt-14 w-4xl">
                {serviceList.map((item, index) => (
                    <ServiceCard key={index} service={item}  />
                ))}
            </div>
        </section>
    )
}