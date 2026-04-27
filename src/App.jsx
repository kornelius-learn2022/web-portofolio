import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Tambahkan AnimatePresence
import {
  Moon,
  Sun,
  Mail,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Code,
  Layout,
} from "lucide-react";
import profileImage from "./assets/IMG_1697.jpg";

export default function App() {
  // --- 1. STATE UNTUK DARK MODE & LOADING ---
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State baru untuk loading

  // Effect untuk Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Effect untuk Timer Loading (Akan hilang setelah 2 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2000 ms = 2 detik. Kamu bisa mengubah durasinya di sini
    return () => clearTimeout(timer);
  }, []);

  // --- 2. DATA RESUME & PROJECT ---
  const personalInfo = {
    name: "KORNELIUS PUTRA ADITAMA",
    role: "IT Educator & Full-Stack Developer",
    summary:
      "An IT Educator and Full-Stack Developer with over 3 years of experience delivering interactive coding and digital media classes. Skilled in translating complex programming concepts into engaging, logic-driven lesson plans. Passionate about building fun, student-centric learning environments and modern web applications.",
    email: "korneliusputra85@gmail.com",
    phone: "+6285853534667",
    address: "Keputih Gg. 01 No. 03, Surabaya",
    ig: "@korneliusputra_",
  };

  const experiences = [
    {
      title: "IT Teacher Elementary",
      company: "Cita Hati, Surabaya",
      date: "Nov 2022 - Present",
      points: [
        "Designed and delivered comprehensive computer science syllabi, including interactive logic quizzes and hands-on projects for over 70 students weekly.",
        "Mentored students through progressive block-coding modules using Scratch and Code.org with a 100% project completion rate.",
        "Conducted classes in English, integrating IB and Cambridge curriculum standards.",
        "Guided students in responsible AI usage (ChatGPT, Gemini) and digital media creation.",
      ],
    },
  ];

  const projects = [
    {
      title: "Teacher Internal Announcement Portal",
      role: "Full-Stack Developer",
      link: "http://202.155.14.105/announcements/sj6488z3bvvfam1n3xfwk",
      tech: "React, Tailwind, Node.js, MySQL",
      desc: "A web application developed for school internals to manage daily schedules and teacher birthdays. It features a User side for viewing daily updates and an Admin dashboard for managing announcements and user data securely.",
      icon: <Layout className="text-blue-500" size={24} />,
    },
    {
      title: "Text Clustering System",
      role: "College Student",
      link: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/10645/4722",
      tech: "Python, K-Means, BM25",
      desc: "Engineered a text clustering system utilizing Python, K-Means, and the BM25 algorithm to automate unstructured data labeling.",
      icon: <Code className="text-emerald-500" size={24} />,
    },
    {
      title: "Public Complaint Management System",
      role: "Web Programmer Intern | Diskominfo Kediri City",
      link: "",
      tech: "PHP, CodeIgniter, MySQL",
      desc: "Developed a web-based public complaint system. Streamlined the reporting architecture and database to ensure residents' reports were accurately forwarded to relevant city agencies.",
      icon: <Briefcase className="text-amber-500" size={24} />,
    },
  ];

  const skills = [
    "Python",
    "JavaScript (React, Node.js)",
    "PHP (CodeIgniter)",
    "HTML/CSS",
    "MySQL",
    "Git",
    "Docker",
    "Scratch & Code.org",
    "Ed-Tech & Lesson Planning",
    "AI Prompting",
  ];

  // --- VARIAN ANIMASI FRAMER MOTION ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // --- 3. KOMPONEN UI ---
  return (
    <>
      {/* AnimatePresence memungkinkan kita memberi animasi pada komponen 
        yang akan DIHAPUS dari layar (dalam hal ini, layar loading).
      */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900"
          >
            {/* Animasi teks berdenyut */}
            <motion.h1
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-5xl font-extrabold tracking-widest text-blue-600 dark:text-blue-400 mb-4"
            >
              KPA.
            </motion.h1>
            {/* Animasi bar kecil di bawah teks */}
            <motion.div
              className="h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Konten Utama Web (Hanya akan bisa di-scroll jika tidak loading, tapi karena posisinya di bawah layer z-[100], ia aman) */}
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans overflow-hidden">
        {/* NAVBAR */}
        <nav className="fixed w-full top-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="font-bold text-xl tracking-wider text-blue-600 dark:text-blue-400">
              KPA.
            </h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              {darkMode ? (
                <Sun size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-slate-700" />
              )}
            </button>
          </div>
        </nav>

        {/* HERO / BANNER SECTION */}
        <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"} // Hanya jalan animasinya saat loading selesai
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-extrabold mb-4"
            >
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {personalInfo.name.split(" ")[0]}
              </span>
              ! 👋
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-6"
            >
              {personalInfo.role}
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-lg leading-relaxed mb-8 text-slate-600 dark:text-slate-400"
            >
              {personalInfo.summary}
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 font-semibold rounded-full shadow transition transform hover:-translate-y-1"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* PROFILE PICTURE ANIMATION */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              !isLoading ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            } // Tampil setelah loading
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/50 dark:border-blue-400/50 overflow-hidden shadow-2xl relative"
            >
              <img
                src={profileImage}
                alt="Kornelius Putra Aditama"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://ui-avatars.com/api/?name=Kornelius+Putra&size=512&background=0D8ABC&color=fff";
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section className="py-16 bg-white dark:bg-slate-800 transition-colors duration-300 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-slate-100">
              Tech Stack & Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-slate-800 dark:text-slate-100">
            <Layout className="text-blue-500" /> Technical Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col transition-all hover:border-blue-400 dark:hover:border-blue-500"
              >
                <div className="mb-4 bg-slate-50 dark:bg-slate-900 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-800">
                  {project.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                  {project.title}
                </h4>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  {project.tech}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow leading-relaxed">
                  {project.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="py-20 bg-slate-100/50 dark:bg-slate-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2 text-slate-800 dark:text-slate-100">
              <Briefcase className="text-blue-500" /> Experience & Education
            </h3>

            <div className="mb-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg mb-6 border-l-4 border-blue-500"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                        {exp.title}
                      </h4>
                      <p className="text-lg text-slate-600 dark:text-slate-300">
                        {exp.company}
                      </p>
                    </div>
                    <span className="mt-2 md:mt-0 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg">
                  <GraduationCap className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  Universitas Brawijaya, Malang
                </h4>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-1 ml-12">
                Bachelor of Computer Science
              </p>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 ml-12">
                GPA: 3.17 | Aug 2017 - Jan 2022
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
          <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              Let's Connect!
            </h3>
            <div className="flex flex-col md:flex-row gap-6 mb-8 text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-500 transition"
              >
                <Mail size={20} /> {personalInfo.email}
              </a>
              <div className="flex items-center gap-2">
                <Phone size={20} /> {personalInfo.phone}
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={20} /> {personalInfo.address.split(",")[1].trim()}
              </div>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Kornelius Putra Aditama. Built with
              React & Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
