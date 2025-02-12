import Badges from "../components/Badge"

export default function Cards({ data }) {
  return (
    <div className="bg-[#ffffff0d] rounded-md overflow-hidden">
      <div className="overflow-hidden">
        <img className="w-full object-cover" src={data.image} alt={data.name} />
      </div>
      <div className="space-y-4 p-4">
        <h3 className="font-semibold text-white text-lg">{data.name}</h3>
        <div className="flex flex-wrap gap-2">
          {data.languages.map((tech, index) => (
            <Badges key={index} tech={tech} />
          ))}
        </div>
        <hr className="border-gray-600" />
        <p className="text-gray-400 line-clamp-2">{data.description}</p>
        <div className="flex justify-between gap-2">
          <a className="w-full text-center text-white bg-[#ffffff1a] rounded-md py-2" href={data.viewRepository} target="_blank" rel="noopener noreferrer">View Repository</a>
          <a className="w-full text-center text-white bg-[#38BDF8] rounded-md py-2" href={data.livePreview} target="_blank" rel="noopener noreferrer">Live Preview</a>
        </div>
      </div>
    </div>
  )
}
