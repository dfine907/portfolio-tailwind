import heroImg from '../assets/hero.svg'
import {
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";



const Hero = () => {
  return (
    <>
    <div className='bg-teal-100 py-24'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='text-6xl font-bold tracking-wider'>
                    I'm Dina
                </h1>
                <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Full Stack Developer</p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>Solving problems with a smile!</p>
            
            <div className='flex gap-x-4 mt-4 '>
                <a href="https://github.com/dfine907" target="_blank"> 
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>

                <a href="https://www.linkedin.com/in/dina-fine/" target="_blank"> 
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>

                <a href="https://x.com/dina_fine_" target="_blank"> 
                <FaXTwitter className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                </a>

            </div>
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} className='h-80 lg:h-96' />

            </article>
        </div>
    </div>
    </>
  )
}
export default Hero