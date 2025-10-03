import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Web Designer",
    "Business Analyst",
    "Programmer",
    "Developer",
    "E-Sports Player"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, roleIndex, isDeleting]);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
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
              whileTap={{ scale: 0.95 }}
            >
              VISHWA
            </motion.button>
            
            <div className="flex space-x-1 sm:space-x-4">
              {["Home", "Skills", "Resume", "Achievements", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono text-cyan-400 hover:text-pink-500 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/50 transition-all duration-300 neon-glow cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold font-mono mb-8">
              <span className="text-cyan-400 glitch-text">I'M</span>{" "}
              <span className="text-pink-500 glitch-text-alt">VISHWESWARAN</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-20 flex items-center justify-center"
          >
            <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-green-400 neon-text">
              {text}
              <span className="animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex justify-center space-x-4"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-pink-500/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-400/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/50" />
    </div>
  );
}
