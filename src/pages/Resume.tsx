import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export default function Resume() {
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
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-16"
        >
          <h1 className="text-5xl sm:text-7xl font-bold font-mono text-cyan-400 glitch-text">
            RESUME_
          </h1>
          <Button className="bg-pink-500 hover:bg-pink-600 text-black font-mono border-2 border-pink-500 neon-glow cursor-pointer">
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD
          </Button>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-pink-500">EXPERIENCE</h2>
          </div>
          <div className="space-y-6 border-l-2 border-cyan-500/30 pl-6">
            <div className="cyber-card border border-cyan-500/30 bg-black/60 p-6">
              <h3 className="text-xl font-mono font-bold text-green-400">Data Analyst Intern</h3>
              <p className="text-cyan-400 font-mono text-sm mb-2">Placemantra • Internship • Bangalore</p>
              <p className="text-gray-400 font-mono text-sm">
                Assisted in data cleaning, analysis, and reporting using Excel, Power BI, and Python
                libraries. Built dashboards, performed exploratory analysis, and supported insights delivery.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-pink-500">EDUCATION</h2>
          </div>
          <div className="space-y-6 border-l-2 border-cyan-500/30 pl-6">
            <div className="cyber-card border border-cyan-500/30 bg-black/60 p-6">
              <h3 className="text-xl font-mono font-bold text-green-400">B.Sc Computer Science</h3>
              <p className="text-cyan-400 font-mono text-sm mb-2">VET Institute of Arts and Science • 2024 - 2027</p>
              <p className="text-gray-400 font-mono text-sm">
                Focus on core computer science, programming, data analysis, and modern web technologies.
              </p>
            </div>

            <div className="cyber-card border border-cyan-500/30 bg-black/60 p-6">
              <h3 className="text-xl font-mono font-bold text-green-400">SSLC</h3>
              <p className="text-cyan-400 font-mono text-sm mb-2">Erode Hindu Kalvi Nilayam • Erode</p>
              <p className="text-gray-400 font-mono text-sm">Score: 75%</p>
            </div>
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-cyan-400 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-pink-500">CERTIFICATIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["AWS Certified Developer", "Google Analytics", "Scrum Master", "UI/UX Design"].map((cert, index) => (
              <motion.div
                key={cert}
                whileHover={{ scale: 1.05 }}
                className="cyber-card border border-cyan-500/30 bg-black/60 p-4 cursor-pointer"
              >
                <p className="text-green-400 font-mono text-sm">▹ {cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}