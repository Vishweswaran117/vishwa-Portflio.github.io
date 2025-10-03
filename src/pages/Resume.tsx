import { Download, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";

export default function Resume() {
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold font-mono text-yellow-700">RESUME_</h1>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-mono border-2 border-yellow-600 cursor-pointer px-4 py-2 inline-flex items-center gap-2">
            <Download className="w-4 h-4" />
            DOWNLOAD
          </button>
        </div>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-yellow-700 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-yellow-700">EXPERIENCE</h2>
          </div>
          <div className="space-y-6 border-l-2 border-yellow-500/30 pl-6">
            <div className="border border-yellow-500/30 bg-white p-6">
              <h3 className="text-xl font-mono font-bold text-gray-900">Data Analyst Intern</h3>
              <p className="text-gray-700 font-mono text-sm mb-2">
                Placemantra • Internship • Bangalore
              </p>
              <p className="text-gray-700 font-mono text-sm">
                Assisted in data cleaning, analysis, and reporting using Excel, Power BI, and
                Python libraries. Built dashboards, performed exploratory analysis, and supported
                insights delivery.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-yellow-700 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-yellow-700">EDUCATION</h2>
          </div>
          <div className="space-y-6 border-l-2 border-yellow-500/30 pl-6">
            <div className="border border-yellow-500/30 bg-white p-6">
              <h3 className="text-xl font-mono font-bold text-gray-900">B.Sc Computer Science</h3>
              <p className="text-gray-700 font-mono text-sm mb-2">
                VET Institute of Arts and Science • 2024 - 2027
              </p>
              <p className="text-gray-700 font-mono text-sm">
                Focus on core computer science, programming, data analysis, and modern web
                technologies.
              </p>
            </div>

            <div className="border border-yellow-500/30 bg-white p-6">
              <h3 className="text-xl font-mono font-bold text-gray-900">HSC</h3>
              <p className="text-gray-700 font-mono text-sm mb-2">
                Erode Hindu Kalvi Nilayam • Erode • 2022 - 2024
              </p>
              <p className="text-gray-700 font-mono text-sm">Higher Secondary Certificate • Score: 70%</p>
            </div>

            <div className="border border-yellow-500/30 bg-white p-6">
              <h3 className="text-xl font-mono font-bold text-gray-900">SSLC</h3>
              <p className="text-gray-700 font-mono text-sm mb-2">
                Erode Hindu Kalvi Nilayam • Erode • 2021 - 2022
              </p>
              <p className="text-gray-700 font-mono text-sm">
                Secondary School Leaving Certificate • Score: 75%
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-yellow-700 mr-3" />
            <h2 className="text-3xl font-mono font-bold text-yellow-700">CERTIFICATIONS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Advanced Python — Nurture Infotech (ID: NIT24044)",
              "SQL Database — Nurture Infotech (ID: NIT24044)",
              "Full Stack Web Development — Udemy",
              "Front-End Web Development — IBM SkillsBuild",
              "English Proficiency — Great Learning",
              "Data Analytics — Place Mantra, Bangalore",
              "C++ Basics — Scaler",
              "English Typewriting (Higher & Lower) — 45 WPM, TN Govt.",
              "NCC 'A' Certificate (2021–2023)",
              "Hindi Language Certification — Levels 1–8 (Parthmic to Praveen)",
            ].map((cert) => (
              <div key={cert} className="border border-yellow-500/30 bg-white p-4 cursor-pointer">
                <p className="text-gray-800 font-mono text-sm">▹ {cert}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://drive.google.com/drive/folders/13fam3RErdqk5kMPvYJx1o0qWo9ikMvEj?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-mono border-2 border-yellow-600 px-4 py-2 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              View Certificates (Drive)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}