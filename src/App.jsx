function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">
          SATTI PRASANNA LAKSHMI
        </h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-28">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          AI/ML Engineer
        </h2>

        <p className="max-w-3xl text-gray-400 text-lg leading-8">
          Passionate AI/ML Engineer focused on building intelligent,
          scalable, and user-centric applications using LLMs,
          Deep Learning, and Full-Stack technologies.
        </p>

        <p className="max-w-3xl text-gray-400 text-lg leading-8 mt-4">
          Experienced in developing real-time AI solutions,
          modern web applications, and deploying production-ready
          systems with optimized performance.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/sattiprasanna0916-prog"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prasanna-satti-71b260296/"
            target="_blank"
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I am an AI/ML Engineer passionate about solving real-world
          problems using Artificial Intelligence, Full Stack Development,
          and scalable cloud-based systems. I enjoy building intelligent
          applications using LLMs, Deep Learning, NLP, and modern
          web technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                Languages
              </h3>

              <p className="text-gray-400">
                Python, Java, C, SQL
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                AI / ML
              </h3>

              <p className="text-gray-400">
                LLMs, Groq API, Deep Learning,
                NLP, Prompt Engineering
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                Full Stack
              </h3>

              <p className="text-gray-400">
                React.js, Node.js, Django
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                Core CS
              </h3>

              <p className="text-gray-400">
                DSA, OOP, DBMS, OS, Computer Networks
              </p>
            </div>

            <div className="bg-black p-6 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4">
                Tools
              </h3>

              <p className="text-gray-400">
                Git, VS Code
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-cyan-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              AI-Powered Interview Feedback Generator
            </h3>

            <p className="text-gray-400 leading-7">
              Built a full-stack AI interview feedback platform
              using Groq API and Llama3-70B for real-time speech
              analysis and intelligent suggestions.
            </p>
          </div>

          <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-4">
              E-commerce Web App
            </h3>

            <p className="text-gray-400 leading-7">
              Developed a responsive Django-based e-commerce
              application with authentication, cart management,
              order tracking, and CRUD operations.
            </p>
          </div>

        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-cyan-400">
            Certifications
          </h2>

          <div className="space-y-6 text-gray-300 text-lg">
            <p>Oracle Certified: Generative AI Professional</p>
            <p>Salesforce Certified: Agentforce Specialist</p>
            <p>NPTEL: Introduction to Internet of Things (Elite)</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-20 text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">
          Contact
        </h2>

        <p className="text-gray-400 text-lg">
          Connect with me on GitHub and LinkedIn
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/sattiprasanna0916-prog"
            target="_blank"
            className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prasanna-satti-71b260296/"
            target="_blank"
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  )
}

export default App