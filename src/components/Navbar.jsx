import { links } from '../data'

const Navbar = () => {
  return (
    <>
      <nav className="bg-teal-100">
        <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
          <h2 className="text-3xl font-bold">
            Web<span className="text-teal-600">Dev</span>
          </h2>
          <div className="flex gap-x-4">{links.map((link)=> {
              const { id, href, text} = link 
              return <a  key={id} href={href} className='capitalize text-lg tracking-wider hover:text-teal-700 duration-500'>
                  {text}

              </a>

          })}</div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
