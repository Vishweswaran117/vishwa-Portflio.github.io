import { useNavigate } from "react-router";
import { Code, Database, Palette, TrendingUp, Gamepad2, Brain, Monitor } from "lucide-react";

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
                    className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono text-gray-700 hover:text-yellow-700 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
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
          SKILLS_
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="border border-yellow-500/30 bg-white p-6 hover:border-yellow-600/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-yellow-700 mr-3" />
                  <h3 className="text-xl font-mono font-bold text-yellow-700">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-700 font-mono text-sm flex items-center">
                      <span className="text-yellow-700 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}