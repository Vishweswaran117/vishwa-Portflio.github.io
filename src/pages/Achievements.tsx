import { motion } from "framer-motion";
import { Trophy, Star, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const achievements = [
  {
    icon: Trophy,
    title: "E-Sports Champion",
    description: "Won regional championship in competitive gaming",
    year: "2023",
    color: "cyan"
  },
  {
    icon: Star,
    title: "Best Developer Award",
    description: "Recognized for outstanding contribution to company projects",
    year: "2022",
    color: "pink"
  },
  {
    icon: Target,
    title: "Project Excellence",
    description: "Successfully delivered 15+ projects on time and within budget",
    year: "2021-2023",
    color: "green"
  },
  {
    icon: Zap,
    title: "Innovation Award",
    description: "Created innovative solutions that improved efficiency by 40%",
    year: "2022",
    color: "purple"
  }
];

export default function Achievements() {
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
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-cyan-400 glitch-text"
        >
          ACHIEVEMENTS_
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="cyber-card border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-8 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 border border-cyan-500/50 bg-cyan-500/10 mr-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold text-pink-500 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mb-3">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-green-400 font-mono text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Projects", value: "50+" },
            { label: "Awards", value: "12" },
            { label: "Clients", value: "30+" },
            { label: "Years", value: "5+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1 }}
              className="text-center border border-cyan-500/30 bg-black/60 p-6 cyber-card cursor-pointer"
            >
              <div className="text-4xl font-bold font-mono text-pink-500 mb-2">{stat.value}</div>
              <div className="text-sm font-mono text-cyan-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
