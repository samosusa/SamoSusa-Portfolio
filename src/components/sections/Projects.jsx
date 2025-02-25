import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">INVENTORY MANAGEMENT SYSTEM</h3>
              <p className="text-gray-400 mb-4">
                Assembled the system with a Java backend, handling inventory logic and database management, and a C# frontend for user interaction. Integrated the Java backend with the C# frontend using a REST API for data exchange, and secured the system using JWT authentication for user validation. Implemented communication between services using gRPC for efficient data exchange. Verified and tested API endpoints using Postman to ensure functionality. Implemented unit tests with xUnit and BUnit to ensure system reliability and functionality. Managed the project using the Kanban methodology and utilized GitHub for version control and team collaboration. Gained practical experience in Java, C#, JWT authentication, gRPC, REST API development, cross-language integration, and automated testing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "C#", "REST API", "JWT", "gRPC", "Postman", "xUnit", "BUnit", "GitHub", "Springboot", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/samosusa/SEP3-Inventory"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">RESTAURANT MANAGEMENT SYSTEM</h3>
              <p className="text-gray-400 mb-4">
                Developed a Client-Server system in Java for restaurant management applications. Integrated Remote Method Invocation (RMI) to handle communication between client and server. Employed the Model-View-ViewModel (MVVM) architectural pattern for the system design. Followed Scrum framework for entire project. Performed testing with both black-box and white-box methods to ensure functionality. Implemented a PostgreSQL database for storing data. Designed the User Interface (GUI) using SceneBuilder with FXML. Used JUnit for unit testing to ensure system functionality. Managed collaboration and version control through GitHub to maintain efficient team coordination.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "RMI", "MVVM", "Scrum", "PostgreSQL", "FXML", "JUnit", "GitHub"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/samosusa/SEP2"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">TF2 ITEM EVALUATOR</h3>
              <p className="text-gray-400 mb-4">
                A web tool that analyzes Team Fortress 2 item values using real-time data from backpack.tf and Steam Market. Users can check item prices, evaluate their inventory, and get trade suggestions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React (Next.js/Vite)", "Tailwind CSS", "Node.js (Express.js)", "PostgreSQL", "Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-400 my-4">Still in work...</span>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
