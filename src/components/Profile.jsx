import { FaCode } from "react-icons/fa"
import Perfil from '../assets/profile.jpeg'

export const Profile = () => {
    return (
        <div className='relative mt-30'>
            <div className='border-2 border-snk-purple rounded-full'>
                <img className='w-28 h-28 object-cover object-[0%_30%] rounded-full border-4 border-snk-gray-100' src={Perfil} alt="foto de perfil do Raphael" />
            </div>
            <FaCode className="w-8 h-8 absolute bottom-0 right-0 fill-snk-green" />
        </div>
    )
}