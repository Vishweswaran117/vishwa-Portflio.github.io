import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router";

const projects = [
  {
    title: "Vishwa Cyberport Portfolio",
    description:
      "Cyberpunk-themed personal portfolio showcasing skills, achievements, projects, and contact with smooth animations.",
    tech: ["React", "Vite", "Tailwind", "Framer Motion", "Shadcn UI", "Convex"],
    image: "/logo_bg.png",
    github: "https://github.com/Vishweswaran117",
    live: "#",
  },
  {
    title: "AI Resume Sorter",
    description:
      "Candidates upload resumes; the system extracts details and filters them via a sorting algorithm. An admin page lists all resumes for review and selection.",
    tech: ["React", "Node.js", "Express", "MongoDB", "NLP"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    github: "https://github.com/Vishweswaran117/ai-resume-sorter.github.io.git",
    live: "#",
  },
  {
    title: "Chillout Website",
    description:
      "Clone of the Chillout Theme Park, Perundurai website with a clean, responsive UI.",
    tech: ["HTML", "CSS", "Python"],
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&h=600&fit=crop",
    github: "https://github.com/Vishweswaran117",
    live: "#",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <nav className="relative z-10 border-b border-yellow-500/30 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate("/")}
              className="text-yellow-700 font-bold text-xl font-mono cursor-pointer"
            >
              VISHWA
            </button>

            <div className="flex space-x-1 sm:space-x-4">
              {["Home", "Skills", "Resume", "Achievements", "Projects", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() =>
                      navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)
                    }
                    className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono text-gray-700 hover:text-yellow-700 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/50 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-yellow-700">
          PROJECTS_
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-yellow-500/30 bg-white overflow-hidden hover:border-yellow-600/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-mono font-bold text-yellow-700 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-mono text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-yellow-500/50 text-yellow-700 bg-yellow-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 border border-yellow-500/50 text-yellow-700 hover:bg-yellow-500/10 font-mono cursor-pointer text-center px-3 py-2 inline-flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    CODE
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 border border-yellow-600/50 text-yellow-700 hover:bg-yellow-600/10 font-mono cursor-pointer text-center px-3 py-2 inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    LIVE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}