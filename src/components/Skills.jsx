import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
import { skills } from '../data'

const Skills = () => {
  return (
    <>
      <section className="py-20 align-element" id="skills">
        <SectionTitle text='tech stack' />
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            return <SkillsCard key={skill.id} {...skill}/>
          })}
        </div>
        <a href="#top" className="text-teal-700 mt-10">
            Back to Top
          </a>
      </section>
    </>
  )
}
export default Skills
