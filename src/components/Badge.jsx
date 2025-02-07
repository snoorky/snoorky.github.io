export default function Badges({ tech }) {
  const techData = {
    tailwindcss: { icon: "react-original", color: "#90cdf4" },
    javascript: { icon: "javascript-plain", color: "#faf089" },
    typescript: { icon: "typescript-plain", color: "#61DAFB" },
    html: { icon: "html5-plain", color: "#FFB38C" },
  };

  const techInfo = techData[tech.toLowerCase()];

  return (
    <span className="rounded-md flex items-center gap-2 text-[0.75rem] px-2 py-1 font-bold"
      style={{ backgroundColor: `${techInfo?.color}33`, color: techInfo?.color }}
    >
      <i className={`devicon-${techInfo?.icon}`}></i> {tech}
    </span>
  );
}
