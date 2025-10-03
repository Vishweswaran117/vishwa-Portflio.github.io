import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with advanced data visualization",
    tech: ["TypeScript", "D3.js", "PostgreSQL", "Express"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "Gaming Tournament Platform",
    description: "Platform for organizing and managing e-sports tournaments",
    tech: ["React", "Firebase", "WebSocket", "Tailwind"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    github: "#",
    live: "#"
  },
  {
    title: "AI Chatbot",
    description: "Intelligent chatbot with natural language processing capabilities",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-scanlines opacity-10" />
      
      {/* Navigation */}
      <nav className="relative z-10 border-b border-cyan-500/30 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => navigate("/")}
              className="text-cyan-400 font-bold text-xl font-mono glitch-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              VISHWA
            </motion.button>
            
            <div className="flex space-x-1 sm:space-x-4">
              {["Home", "Skills", "Resume", "Achievements", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-pink-500 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-cyan-400 glitch-text"
        >
          PROJECTS_
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="cyber-card border border-cyan-500/30 bg-black/60 backdrop-blur-sm overflow-hidden hover:border-pink-500/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-mono font-bold text-pink-500 mb-3">
                  {project.title}
                </h3>
                <p className="text-green-400 font-mono text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono border border-cyan-500/50 text-cyan-400 bg-cyan-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono cursor-pointer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    CODE
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-pink-500/50 text-pink-500 hover:bg-pink-500/10 font-mono cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LIVE
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
