import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export default function Contact() {
  const navigate = useNavigate();
  const createMessage = useMutation(api.messages.create);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await createMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent successfully!");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-yellow-700">
          CONTACT_
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-yellow-500/30 bg-white p-8">
            <h2 className="text-2xl font-mono font-bold text-yellow-700 mb-6">SEND MESSAGE</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  placeholder="NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400 px-3 py-2"
                  required
                  minLength={2}
                  maxLength={100}
                  disabled={isSubmitting}
                  title="Name must be between 2 and 100 characters"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400 px-3 py-2"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  disabled={isSubmitting}
                  title="Please enter a valid email address"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400 px-3 py-2"
                  required
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  disabled={isSubmitting}
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-yellow-500/40 text-gray-800 font-mono placeholder:text-gray-400 min-h-32 px-3 py-2"
                  required
                  minLength={10}
                  maxLength={1000}
                  disabled={isSubmitting}
                  title="Message must be between 10 and 1000 characters"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-mono border-2 border-yellow-600 cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "SENDING..." : "SEND"}
              </button>
              {submitted && (
                <p className="text-green-700 text-sm font-mono">Message sent successfully.</p>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="border border-yellow-500/30 bg-white p-8">
              <h2 className="text-2xl font-mono font-bold text-yellow-700 mb-6">GET IN TOUCH</h2>
              <p className="text-gray-700 font-mono text-sm mb-6">
                Feel free to reach out for collaborations, projects, or just a friendly chat about
                technology and gaming!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:iamvishwa117@gmail.com"
                  className="flex items-center text-gray-800 hover:text-yellow-700 transition-colors font-mono cursor-pointer"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  iamvishwa117@gmail.com
                </a>
              </div>
            </div>

            <div className="border border-yellow-500/30 bg-white p-8">
              <h3 className="text-xl font-mono font-bold text-yellow-700 mb-4">SOCIAL LINKS</h3>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/Vishweswaran117", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/vishweswaran-r-809226301/", label: "LinkedIn" },
                  { icon: Phone, href: "https://wa.me/919597446488", label: "WhatsApp" },
                  { icon: MessageCircle, href: "https://discord.com/users/vishwagamer_", label: "Discord" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
                    >
                      <Icon className="w-6 h-6 text-yellow-700" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}