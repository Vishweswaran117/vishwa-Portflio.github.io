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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 border-b border-yellow-500/30 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={() => navigate("/")}
              className="text-yellow-700 font-bold text-xl font-mono cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              VISHWA
            </motion.button>
            
            <div className="flex space-x-1 sm:space-x-4">
              {["Home", "Skills", "Resume", "Achievements", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => navigate(item === "Home" ? "/" : `/${item.toLowerCase()}`)}
                  className="px-2 sm:px-4 py-2 text-xs sm:text-sm font-mono text-gray-700 hover:text-yellow-700 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
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
          className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-yellow-700"
        >
          CONTACT_
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-yellow-500/30 bg-white p-8"
          >
            <h2 className="text-2xl font-mono font-bold text-yellow-700 mb-6">SEND MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400 min-h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-mono border-2 border-yellow-600 cursor-pointer"
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
            <div className="border border-yellow-500/30 bg-white p-8">
              <h2 className="text-2xl font-mono font-bold text-yellow-700 mb-6">GET IN TOUCH</h2>
              <p className="text-gray-700 font-mono text-sm mb-6">
                Feel free to reach out for collaborations, projects, or just a friendly chat about technology and gaming!
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:vishweswaran@example.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-800 hover:text-yellow-700 transition-colors font-mono cursor-pointer"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  vishweswaran@example.com
                </motion.a>
              </div>
            </div>

            <div className="border border-yellow-500/30 bg-white p-8">
              <h3 className="text-xl font-mono font-bold text-yellow-700 mb-4">SOCIAL LINKS</h3>
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
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      className="p-3 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-yellow-700" />
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