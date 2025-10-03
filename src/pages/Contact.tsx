import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "I'll get back to you soon."
    });
    setFormData({ name: "", email: "", message: "" });
  };

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
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-cyan-400 glitch-text"
        >
          CONTACT_
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="cyber-card border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-8"
          >
            <h2 className="text-2xl font-mono font-bold text-pink-500 mb-6">SEND MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black/50 border-cyan-500/50 text-green-400 font-mono placeholder:text-cyan-400/50"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black/50 border-cyan-500/50 text-green-400 font-mono placeholder:text-cyan-400/50"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/50 border-cyan-500/50 text-green-400 font-mono placeholder:text-cyan-400/50 min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-black font-mono border-2 border-pink-500 neon-glow cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                SEND
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="cyber-card border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-8">
              <h2 className="text-2xl font-mono font-bold text-pink-500 mb-6">GET IN TOUCH</h2>
              <p className="text-green-400 font-mono text-sm mb-6">
                Feel free to reach out for collaborations, projects, or just a friendly chat about technology and gaming!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:vishweswaran@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-cyan-400 hover:text-pink-500 transition-colors font-mono cursor-pointer"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  vishweswaran@example.com
                </motion.a>
              </div>
            </div>

            <div className="cyber-card border border-cyan-500/30 bg-black/60 backdrop-blur-sm p-8">
              <h3 className="text-xl font-mono font-bold text-pink-500 mb-4">SOCIAL LINKS</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="p-3 border border-cyan-500/50 bg-cyan-500/10 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
