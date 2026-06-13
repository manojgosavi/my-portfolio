import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section__heading">
          <h2>Skills &amp; Technologies</h2>
          <p>Tools and technologies I work with regularly.</p>
        </div>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
