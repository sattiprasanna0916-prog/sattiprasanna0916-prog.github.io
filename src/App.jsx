import profile from "./assets/profile.jpg";
import resume from "./assets/resume.pdf";
import oracle from "./assets/certifications/oracle.pdf";
import salesforce from "./assets/certifications/salesforce.pdf";
import iot from "./assets/certifications/iot.pdf";
import infosysAI from "./assets/certifications/infosys-ai.pdf";
import blockchain from "./assets/certifications/blockchain.pdf";
import microsoft from "./assets/certifications/microsoft.pdf";
import infosysGenAI from "./assets/certifications/infosys-genai.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiDjango,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-cyan-400">
            SATTI PRASANNA LAKSHMI
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#coding" className="hover:text-cyan-400">Coding</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400">Certifications</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

        </div>
      </nav>

      {/* Home */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-16"
      >

        <div className="flex-1">

          <p className="text-cyan-400 text-lg mb-4">
            AI/ML Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            SATTI <br />
            PRASANNA <br />
            LAKSHMI
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl">
            AI/ML Engineer and LLM-based Application Developer passionate
            about building intelligent, scalable, and user-centric applications
            using Generative AI, Deep Learning, and Full-Stack technologies.
          </p>

          <p className="text-gray-400 text-lg leading-8 max-w-2xl mt-4">
            Experienced in developing real-time AI systems and modern web
            applications. Solved 700+ DSA problems across coding platforms
            demonstrating strong problem-solving skills.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href={resume}
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/sattiprasanna0916-prog"
              target="_blank"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black"
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
        </div>

        <div className="flex-1 flex justify-center">

          <img
            src={profile}
            alt="profile"
            className="w-[320px] h-[320px] object-cover rounded-full border-4 border-cyan-500 shadow-2xl"
          />

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-[#111111] py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <FaPython className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Languages
              </h3>

              <p className="text-gray-400 leading-8">
                Python, Java, C, SQL
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <FaReact className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Full Stack
              </h3>

              <p className="text-gray-400 leading-8">
                React.js, Node.js, Django
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <FaCode className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                AI / ML
              </h3>

              <p className="text-gray-400 leading-8">
                LLMs, Groq API, Deep Learning,
                NLP, Prompt Engineering
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <SiMysql className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Core CS
              </h3>

              <p className="text-gray-400 leading-8">
                DSA, OOP, DBMS, OS,
                Computer Networks
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <SiNodedotjs className="text-4xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                Tools
              </h3>

              <p className="text-gray-400 leading-8">
                Git, VS Code
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Coding Profiles */}
      <section
        id="coding"
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
            Coding Profiles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <a
              href="https://leetcode.com/u/prasanna_satti/"
              target="_blank"
              className="bg-[#111111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition"
            >

              <SiLeetcode className="text-5xl text-yellow-400 mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                LeetCode
              </h3>

              <p className="text-gray-400">
                Solving DSA and problem-solving challenges regularly.
              </p>

            </a>

            <a
              href="https://www.geeksforgeeks.org/profile/sattiprasannalakshmi"
              target="_blank"
              className="bg-[#111111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition"
            >

              <SiGeeksforgeeks className="text-5xl text-green-500 mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                GeeksforGeeks
              </h3>

              <p className="text-gray-400">
                Practicing algorithms, coding patterns,
                and interview preparation.
              </p>

            </a>

            <a
              href="https://github.com/sattiprasanna0916-prog"
              target="_blank"
              className="bg-[#111111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition"
            >

              <FaGithub className="text-5xl text-white mb-4" />

              <h3 className="text-2xl font-semibold mb-4">
                GitHub
              </h3>

              <p className="text-gray-400">
                Full-stack, AI/ML, and deployment-based projects.
              </p>

            </a>

          </div>

          <div className="mt-12 text-center">
            <h3 className="text-3xl font-bold text-cyan-400">
              700+ DSA Problems Solved
            </h3>
          </div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-[#111111] py-24 px-6"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-black p-8 rounded-2xl border border-gray-800">

              <h3 className="text-2xl font-bold mb-4">
                AI-Powered Interview Feedback Generator
              </h3>

              <p className="text-gray-400 leading-8">
                Built full-stack application integrating Groq
                (Llama3-70B) for real-time speech analysis
                and feedback generation.
              </p>

            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">

              <h3 className="text-2xl font-bold mb-4">
                E-commerce Web App
              </h3>

              <p className="text-gray-400 leading-8">
                Developed full-stack e-commerce platform
                with authentication, product catalog,
                cart, and order management.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Certifications */}
<section
  id="certifications"
  className="py-24 px-6"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
      Certifications
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Oracle Certified: Generative AI Professional",
          file: oracle,
        },
        {
          title: "Salesforce Certified: Agentforce Specialist",
          file: salesforce,
        },
        {
          title: "NPTEL: Introduction to Internet of Things",
          file: iot,
        },
        {
          title: "Infosys Springboard: Artificial Intelligence Primer",
          file: infosysAI,
        },
        {
          title: "Blockchain Certification",
          file: blockchain,
        },
        {
          title: "Microsoft Learn Certifications",
          file: microsoft,
        },
        {
          title: "Infosys Springboard: Principles of Generative AI",
          file: infosysGenAI,
        },
      ].map((cert, index) => (
        <a
          key={index}
          href={cert.file}
          target="_blank"
          className="bg-[#111111] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500 transition block"
        >

          <h3 className="text-lg font-semibold text-gray-300">
            {cert.title}
          </h3>

          <p className="text-cyan-400 mt-3">
            View Certificate
          </p>

        </a>
      ))}

    </div>

  </div>

</section>
      {/* Contact */}
      <section
        id="contact"
        className="bg-[#111111] py-24 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-16 text-cyan-400">
            Contact
          </h2>

          <div className="space-y-8 text-lg">

            <div className="flex justify-center items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <p className="text-gray-300">
                sattiprasanna0916@gmail.com
              </p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <p className="text-gray-300">
                +91 6300543166
              </p>
            </div>

            <div className="flex justify-center items-center gap-4">
              <FaLinkedin className="text-cyan-400 text-2xl" />
              <a
                href="https://www.linkedin.com/in/prasanna-lakshmi-satti-5a21952aa/"
                target="_blank"
                className="text-gray-300 hover:text-cyan-400"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 SATTI PRASANNA LAKSHMI | AI/ML Engineer
      </footer>

    </div>
  );
}

export default App;