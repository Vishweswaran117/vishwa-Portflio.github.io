import { Trophy, Star, Target, Zap, Award, Medal, Users, Code } from "lucide-react";
import { useNavigate } from "react-router";

const achievements = [
  {
    icon: Award,
    title: "Academic Excellence Awards",
    description:
      "VET Institute of Arts & Science — Class Topper (Rank 1, Even Semester); First Position in Allied Mathematics; Coding Excellence Award",
    year: "2024–2025",
    color: "cyan",
  },
  {
    icon: Medal,
    title: "2nd Place – Eureka 2025 Ideathon",
    description:
      'Presented "HIRE ME" with market research, key features, and go‑to‑market strategy; showcased innovation, teamwork, and problem‑solving',
    year: "2025",
    color: "pink",
  },
  {
    icon: Zap,
    title: "2nd Prize – Debugging Competition (HIBOT 2025)",
    description:
      "₹1500 cash award, certificate, and shield at Hindustan College of Arts & Science; recognized for debugging skills, coding accuracy, and problem‑solving under pressure",
    year: "2025",
    color: "green",
  },
  {
    icon: Users,
    title: "Joint Secretary – Coding Club",
    description:
      "VET Institute of Arts & Science — supporting coding initiatives, peer learning sessions, and technical events; fostering innovation and collaboration",
    year: "2024–2025",
    color: "purple",
  },
  {
    icon: Users,
    title: "Joint Secretary – School of Computing",
    description:
      "VET Institute of Arts & Science — contributing to leadership initiatives, academic activities, and student engagement",
    year: "2025–2026",
    color: "cyan",
  },
  {
    icon: Code,
    title: "Secretary – Coding Club",
    description:
      "Driving technical workshops, coding challenges, and collaborative learning; promoting creativity, teamwork, and programming excellence",
    year: "2025–2026",
    color: "pink",
  },
];

export default function Achievements() {
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl sm:text-7xl font-bold font-mono text-center mb-16 text-yellow-700">
          ACHIEVEMENTS_
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.title}
                className="border border-yellow-500/30 bg-white p-8 hover:border-yellow-600/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 border border-yellow-500/40 bg-yellow-50 mr-4">
                    <Icon className="w-8 h-8 text-yellow-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-mono font-bold text-yellow-700 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-600 mb-3">{achievement.year}</p>
                  </div>
                </div>
                <p className="text-gray-800 font-mono text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}