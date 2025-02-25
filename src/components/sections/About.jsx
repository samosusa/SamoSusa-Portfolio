import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "Angular",
    "JavaScript",
    "TypeScript",
    "HTML",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "Blazor",
    "LINQ",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
    "Assembly",
    "PowerShell",
    "Linux",
    "Hibernate",
    "REST API",
    "gRPC",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Azure",
    "J/X/BUnit"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            SAMO SUSA
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a 20 year old international student from Slovakia and my passion is technology and software development. From creating front end designs to learning your way through object oriented programming, system testing, and even DevOps, I enjoy solving problems creatively. I thrive in personal projects always pushing myself to learn and build something meaningful. Outgoing and team oriented I enjoy collaborating and constantly leveling up my skills in the ever evolving tech world.
            </p>
            <h3 className="text-xl font-bold mb-4">CONTACT SUMMARY</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">EDUCATION</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>SOFTWARE ENGINEERING, VIA UNIVERSITY COLLEGE, HORSENS, DENMARK</strong> (2023 - Present)
                  </li>
                  <li>
                    <strong>BILINGUAL GYMNASIUM TREBISOVSKA 12, KOSICE, SLOVAKIA</strong> (2019 - 2023)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">EMPLOYMENT</h3>
              <div className="space-y-4 text-gray-300">
              <div>
                  <h4 className="font-semibold">REITAN DISTRIBUTION DENMARK (2023 - Present)</h4>
                  <p>Currently working part-time in a warehouse, responsible for order picking and handling</p>
                </div>
                <div>
                  <h4 className="font-semibold">SIDERMEC SPA ITALY (2023 - 2023)</h4>
                  <p>Factory worker</p>
                </div>
            
                <div>
                  <h4 className="font-semibold">BIMO S.R.O. SLOVAKIA (2019 - 2024)</h4>
                  <p>Managed all payment processing and invoicing tasks</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">HOBBIES</h3>
              <p className="text-gray-300">
                I’m passionate about music, with a background as a former drummer. I also enjoy jiu-jitsu, gaming, traveling, exploring new places, and of course, working on software development.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
