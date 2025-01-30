import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <>
      <section className="py-20 align-element" id="projects">
        <SectionTitle text="projects" />
        {/* parent div and then map */}
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />
          })}
        </div>
        <a href="#top" className="text-teal-700 mt-10">
            Back to Top
          </a>
      </section>
    </>
  )
}
export default Projects
