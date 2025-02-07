import dotsContainer from "../assets/icons/dots-container.png"
import Button from "../components/Button"

export default function Banner() {
  return (
    <section className="relative py-16 lg:py-32 px-5 md:px-16 lg:px-40">
      <img className="absolute z-[-999] filter invert-25 opacity-50 left-2 md:left-10 lg:left-28 top-13 lg:top-20 w-20 md:w-32 lg:w-40" src={dotsContainer} alt="" />
      <h6 className="text-2xl md:text-3xl lg:text-4xl text-[#38BDF8]">Hey there!, I&apos;m</h6>
      <h1 className="text-5xl md:text-7xl lg:text-[10rem] text-white">Raphael Vitor.</h1>
      <h6 className="py-5 md:py-10 text-xl md:text-2xl lg:text-3xl"><span className="text-white">Frontend Developer.</span> A developer with a passion for technology.</h6>
      <p className="md:text-xl lg:text-2xl">🚀 Currently specializing in Frontend (ReactJS)</p>
      <p className="md:text-xl lg:text-2xl">⚡ Website Developer at <span className="text-[#fa0d1d]">BEFORCE</span></p>
      <div className="flex gap-4 pt-5 md:pt-10">
        <Button name="GitHub" icon="github" link="https://github.com/snoorky" />
        <Button name="LinkedIn" icon="linkedin" link="https://www.linkedin.com/in/raphaelvitor/" />
        <Button name="Email" icon="envelope-fill" link="mailto:raphaelvitorlopes@icloud.com" />
      </div>
    </section>
  )
}
