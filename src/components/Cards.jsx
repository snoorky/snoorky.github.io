export const Cards = ({ projects }) => {
    return (
        <div className="p-4 bg-snk-gray-300 rounded-xl text-start">
            <a href={projects.livePreview} target="_blank">
                <img className="rounded-lg w-full" src={projects.image} alt={projects.name} />
            </a>
            <h3 className="asap mt-4 mb-2">{projects.name}</h3>
            <p className="maven">{projects.description}</p>
        </div>
    )
}