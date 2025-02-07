import Button from "../components/Button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center pt-16 lg:pt-32 px-5 md:px-16 lg:px-40">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-white font-semibold text-6xl md:text-5xl lg:text-6xl pb-5 md:pb-10">Keep in Touch.</h2>
        <p className="text-center md:text-lg">I&apos;m currently specializing in <span className="text-[#38BDF8]">Front-end Development.</span></p>
        <p className="text-center md:text-lg">Feel free to get in touch.</p>
        <div className="flex gap-4 pt-5 md:pt-10">
          <Button name="LinkedIn" icon="linkedin" link="https://www.linkedin.com/in/raphaelvitor/" />
          <Button name="Email" icon="envelope-fill" link="mailto:raphaelvitorlopes@icloud.com" />
          <Button name="WhatsApp" icon="whatsapp" link="https://api.whatsapp.com/send?phone=5515997042300" />
        </div>
      </div>
      <div className="mb-2 mt-10 md:mt-20">
        <h6>Thank you for viewing my portfolio. <span className="text-[#38BDF8]">Raphael</span></h6>
      </div>
    </footer>
  )
}
