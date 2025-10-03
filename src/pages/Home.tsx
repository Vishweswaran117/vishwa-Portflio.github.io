import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Add: flip orientation state
  const [faceRight, setFaceRight] = useState<boolean>(false);

  // Load saved photo on mount
  useEffect(() => {
    const saved = localStorage.getItem("profilePhoto");
    if (saved) setPhotoUrl(saved);

    // Load saved flip preference
    const savedFlip = localStorage.getItem("profilePhotoFlip");
    if (savedFlip !== null) setFaceRight(savedFlip === "true");
  }, []);

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

  // Add: setter to persist flip
  const setFlip = (v: boolean) => {
    setFaceRight(v);
    localStorage.setItem("profilePhotoFlip", v ? "true" : "false");
  };

  // Add: handlers for upload and remove
  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setPhotoUrl(dataUrl);
      localStorage.setItem("profilePhoto", dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleRemovePhoto = () => {
    setPhotoUrl(null);
    localStorage.removeItem("profilePhoto");
    // Optional: keep their flip preference; no change here
  };

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

      {/* Profile Photo Section */}
      <div className="relative z-10 px-4 mt-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mx-auto max-w-4xl flex flex-col items-center"
        >
          <div className="flex flex-col items-center gap-4">
            <div
              className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-lg border border-cyan-500/50 bg-black/60 neon-glow cyber-card overflow-hidden"
              style={{
                clipPath:
                  "polygon(8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%, 0% 8%)",
              }}
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Profile"
                  // Apply flip when facing right
                  className={`w-full h-full object-cover opacity-90 transition-transform duration-300 ${faceRight ? "-scale-x-100" : ""}`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-cyan-400 font-mono text-xs sm:text-sm opacity-80">
                    UPLOAD YOUR PHOTO
                  </span>
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-cyan-500/10 via-pink-500/10 to-green-400/10" />
              {/* Extra subtle inner glow ring */}
              <div className="pointer-events-none absolute inset-2 rounded-md ring-1 ring-cyan-500/30" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono cursor-pointer"
                onClick={handleChooseFile}
              >
                {photoUrl ? "Change Photo" : "Upload Photo"}
              </Button>

              {photoUrl && (
                <>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono cursor-pointer"
                    onClick={() => setFlip(true)}
                  >
                    Face Right
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-mono cursor-pointer"
                    onClick={() => setFlip(false)}
                  >
                    Face Left
                  </Button>
                  <Button
                    variant="outline"
                    className="border-pink-500/50 text-pink-500 hover:bg-pink-500/10 font-mono cursor-pointer"
                    onClick={handleRemovePhoto}
                  >
                    Remove
                  </Button>
                </>
              )}
            </div>

            <p className="text-xs sm:text-sm text-green-400/80 font-mono text-center max-w-md">
              Tip: For best results, use a square image (e.g., 800x800). Your photo and orientation are saved locally on this device.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-pink-500/50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-green-400/50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/50" />
    </div>
  );
}