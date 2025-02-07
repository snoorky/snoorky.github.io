import dotsContainer from "../assets/icons/dots-container.png"
import profile from "../assets/images/profile.jpeg"

export default function About() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-0 py-8 lg:py-12 px-5 md:px-16 lg:px-40">
      <div className="space-y-4">
        <h2 className="text-white font-semibold text-xl md:text-2xl">⚡ About Me</h2>
        <p>Hi, I&apos;m Raphael Vitor!</p>
        <p>Since I was <span className="text-[#38BDF8]">14</span>, when I started getting interested in <span className="text-[#38BDF8]">online games</span>, I developed a curiosity
          about how digital environments were created, which led me to explore <span className="text-[#38BDF8]">programming languages</span>.</p>
        <p>Currently, I work with the development of <span className="text-[#38BDF8]">institutional</span> and <span className="text-[#38BDF8]">commercial websites</span>,
          including <span className="text-[#38BDF8]">blogs</span>, <span className="text-[#38BDF8]">e-commerce platforms</span>, and <span className="text-[#38BDF8]">event systems</span>, using the
          <span className="text-[#38BDF8]">no-code platform Wix</span>. Although my contributions are in internal company projects, all the websites
          I&apos;ve created were 100% done by me. I have knowledge in <span className="text-[#38BDF8]">HTML</span>, <span className="text-[#38BDF8]">CSS</span>, <span className="text-[#38BDF8]">JavaScript</span>,
          and I&apos;m improving my <span className="text-[#38BDF8]">frontend</span> skills with <span className="text-[#38BDF8]">ReactJS</span> and <span className="text-[#38BDF8]">TailwindCSS</span>.</p>
        <p>My goals are to land a <span className="text-[#38BDF8]">developer</span> position, continue growing in the field, and ensure a better life.
          Outside of coding, I enjoy watching <span className="text-[#38BDF8]">series</span> on <span className="text-[#38BDF8]">Netflix</span> and <span className="text-[#38BDF8]">HBO Max</span>, playing
          <span className="text-[#38BDF8]">online games</span> with my friends, and as an <span className="text-[#38BDF8]">analytical</span> and <span className="text-[#38BDF8]">planner</span> profile, I always
          strive for a balance between <span className="text-[#38BDF8]">performance</span> and <span className="text-[#38BDF8]">quality</span>.</p>
      </div>
      <div className="relative flex justify-center lg:justify-end items-center">
        <img className="absolute filter invert-25 opacity-50 w-28 md:w-40 right-0 md:right-20 lg:-right-20 top-0" src={dotsContainer} alt="" />
        <div className="rounded-full w-[20rem] lg:w-md h-[20rem] lg:h-[28rem]">
          <img className="w-full h-full object-cover object-[left_30%] rounded-full" src={profile} alt="Raphael profile image" />
        </div>
      </div>
    </section>
  )
}
