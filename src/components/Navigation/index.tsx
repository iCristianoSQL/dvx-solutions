import Image from 'next/image'
import Logo from "../../../public/assets/svgs/dvx-logo.svg"

const Navigation = () => {
    return (
        <nav className='flex bg-nav-color w-full h-20 px-4'>
            <Image src={Logo} width='45' alt='Devex Logo' />
        </nav>
    )
}

export default Navigation