import { motion } from "framer-motion";
import { Code, Database, Palette, TrendingUp, Gamepad2, Brain, Monitor } from "lucide-react";
import { useNavigate } from "react-router";

const skills = [
  {
    category: "Programming",
    icon: Brain,
    items: ["Basics: C", "Basics: C++", "Basics: Java", "Advanced Python"],
    color: "green",
  },
  {
    category: "Web Development",
    icon: Code,
    items: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Web3", "DApps"],
    color: "cyan",
  },
  {
    category: "Data & Analytics",
    icon: TrendingUp,
    items: ["Advanced Excel", "Power BI", "Statistics", "Linear Algebra", "Matplotlib"],
    color: "pink",
  },
  {
    category: "Databases",
    icon: Database,
    items: ["SQL - Database"],
    color: "yellow",
  },
  {
    category: "Operating Systems",
    icon: Monitor,
    items: ["Windows", "Linux"],
    color: "blue",
  },
  {
    category: "Languages",
    icon: Palette,
    items: ["English", "Tamil", "Hindi (Proficient)"],
    color: "purple",
  },
  {
    category: "Typing",
    icon: Gamepad2,
    items: ["Typewriting (Higher & Lower)", "Speed: 45 WPM"],
    color: "red",
  },
];

export default function Skills() {
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
          SKILLS_
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-6 hover:border-pink-500/50 transition-all duration-300 cyber-card cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-mono font-bold text-pink-500">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-green-400 font-mono text-sm flex items-center">
                      <span className="text-cyan-400 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}