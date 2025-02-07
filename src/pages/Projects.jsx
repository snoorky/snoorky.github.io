import Cards from "../components/Cards"

export default function Projects({ data }) {
  return (
    <section className="flex flex-col items-center py-8 lg:py-12 px-5 md:px-16 lg:px-40">
      <h2 className="text-white font-semibold text-xl md:text-2xl">All Creative Works.</h2>
      <p className="text-center md:text-lg">Here&apos;s some of my projects that I have worked on.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-10">
        {data.map(project => (
          <Cards key={project.id} data={project} />
        ))}
      </div>
    </section>
  )
}
