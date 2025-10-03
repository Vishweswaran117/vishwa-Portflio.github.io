import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Github, Linkedin, Mail, Instagram, MessageCircle } from "lucide-react";

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
    "E-Sports Player",
  ];

  const PROFILE_URL =
    "https://harmless-tapir-303.convex.cloud/api/storage/bf08bb4b-9c69-4359-a806-23c2ca196c47";

  const socialLinks = {
    github: "#",
    linkedin: "#",
    email: "mailto:your@email.com",
    instagram: "#",
    discord: "#",
  } as const;

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
    <div className="min-h-screen bg-white relative overflow-hidden">
      <nav className="relative z-10 border-b border-yellow-500/30 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
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
                    className="px-3 sm:px-5 py-3 text-sm md:text-base font-mono text-gray-700 hover:text-yellow-700 hover:bg-yellow-500/10 border border-transparent hover:border-yellow-500/40 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-70" />
      </nav>

      <div className="relative z-10 bg-white border-b border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-[0.25em] text-yellow-700">
              PORTFOLIO
            </span>
          </div>
        </div>
        <div className="pointer-events-none h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-70" />
      </div>

      <div className="relative z-10 min-h-[calc(100vh-4rem)] px-4 flex items-center">
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-mono mb-8 leading-[0.95]">
                <span className="text-yellow-700">I'M</span>{" "}
                <span className="text-yellow-600">VISHWESWARAN</span>
              </h1>
            </div>

            <div className="h-20 flex items-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-mono text-gray-800">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <div className="mt-12 hidden md:flex space-x-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-600 to-transparent" />
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-yellow-700 to-transparent" />
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end w-full max-w-sm">
            <div className="relative border border-yellow-500/40 bg-white p-3">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={PROFILE_URL}
                  alt="Vishweswaran portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-yellow-500/30 pointer-events-none" />
                <div className="absolute top-3 left-3 text-xs font-mono text-yellow-700">
                  PROFILE_
                </div>
                <div className="absolute bottom-3 right-3 text-xs font-mono text-yellow-600">
                  LIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-yellow-500/30 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="text-xs sm:text-sm font-mono text-gray-600">CONNECT_</div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={socialLinks.github}
              className="p-2 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
            >
              <Github className="w-5 h-5 text-yellow-700" />
            </a>
            <a
              href={socialLinks.linkedin}
              className="p-2 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
            >
              <Linkedin className="w-5 h-5 text-yellow-700" />
            </a>
            <a
              href={socialLinks.email}
              className="p-2 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
            >
              <Mail className="w-5 h-5 text-yellow-700" />
            </a>
            <a
              href={socialLinks.instagram}
              className="p-2 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
            >
              <Instagram className="w-5 h-5 text-yellow-700" />
            </a>
            <a
              href={socialLinks.discord}
              className="p-2 border border-yellow-500/40 bg-yellow-50 hover:border-yellow-600/50 hover:bg-yellow-100 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-yellow-700" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}