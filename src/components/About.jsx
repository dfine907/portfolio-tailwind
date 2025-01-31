import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      {/* first columm */}
      <div className="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        {/* second column */}
        <article>
          <SectionTitle text="Who? Me?" />
          <p className="text-slate-600 mt-8 mb-6 leading-loose">
          As a team-oriented full-stack software developer, I bring four years of hands-on experience with JavaScript, React, Next.js, MongoDB, Mongoose, Express, Node.js, API development and Tailwind CSS. My background also includes over 20 years of problem-solving skills and military service as a US Navy veteran. <strong>Let's make an IMPACT! </strong>
          </p>
          <a href="#top" className="text-teal-700 mt-20 py-8">
            Back to Top
          </a>
        </article>
      </div>
    </section>
  )
}
export default About
