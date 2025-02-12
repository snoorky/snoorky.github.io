export default function Button({ name, icon, link }) {
  return (
    <button className="bg-[#ffffff26] hover:bg-[#ffffff40] rounded-md space-x-2 md:px-4 py-2">
      <i className={`bi bi-${icon} text-[#38BDF8]`}></i>
      <a className="text-white" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
    </button>
  )
}
