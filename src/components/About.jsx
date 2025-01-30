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
            I'm a team playing full-stack software developer with
            nearly 4 years of hands-on experience in{' '}
            <strong>
              JavaScript, ReactJS, NextJS, MongoDB, Mongoose, Express,
              NodeJS and Tailwind{' '}
            </strong>{' '}
            and over 20 years of problems solving skills. I thrive on
            creating solutions with a focus on developing APIs. <strong>Let's make an IMPACT! </strong>
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
