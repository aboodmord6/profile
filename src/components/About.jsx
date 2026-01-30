import { motion } from 'framer-motion';
import { FaDatabase, FaGraduationCap, FaTrophy, FaMedal, FaLaptopCode, FaWrench, FaCertificate, FaHandshake, FaArrowUpRightFromSquare, FaPlug, FaCamera, FaWandMagicSparkles } from 'react-icons/fa6';
import { SiPython, SiJavascript, SiPostgresql, SiMysql, SiDjango, SiReact, SiTailwindcss, SiPytorch, SiHtmx, SiGit, SiGithub, SiTensorflow, SiLangchain, SiDocker, SiFastapi, SiScikitlearn, SiNginx } from 'react-icons/si';

const About = () => {
  // Unified neutral styling for all skills - icons keep their brand colors
  const skillsData = {

    'Languages & DBMS': [
        { name: 'Python', icon: <SiPython className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'SQL', icon: <FaDatabase className="text-slate-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-orange-500" /> }
    ],
    'Frameworks & Libraries': [
        { name: 'Django', icon: <SiDjango className="text-emerald-600" /> },
        { name: 'LangChain', icon: <SiLangchain className="text-emerald-500" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-teal-500" /> },
        { name: 'HTMX', icon: <SiHtmx className="text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'PyTorch', icon: <SiPytorch className="text-orange-600" /> },
        { name: 'TensorFlow', icon: <SiTensorflow className="text-orange-500" /> },
        { name: 'scikit-learn', icon: <SiScikitlearn className="text-orange-400" /> },
        { name: 'React', icon: <SiReact className="text-cyan-500" /> }
    ],
    'DevOps': [
        { name: 'API Integrations', icon: <FaPlug className="text-purple-500" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
        { name: 'Git', icon: <SiGit className="text-orange-500" /> },
        { name: 'GitHub', icon: <SiGithub className="text-gray-700" /> },
        { name: 'Nginx', icon: <SiNginx className="text-green-500" /> }
    ],
    'Hobbies': [
        { name: 'Photography', icon: <FaCamera className="text-rose-500" /> },
        { name: 'Photo Editing', icon: <FaWandMagicSparkles className="text-violet-500" /> }
    ]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
        opacity: 1, 
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  // Consistent base card class
  const cardBaseIn = "card bg-base-200/50 border border-base-300/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] transition-all duration-300";
  const cardBaseOut = "card bg-base-100 transition-all duration-300";
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-base-100">
        {/* Background Decorations - Subtle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-bold tracking-widest text-primary mb-4 border border-primary/20 uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-base-content mb-4 tracking-tight">
            My Journey
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        {/* Bento Grid Container */}
        <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          
          {/* Left Column: Tech Stack (8 cols on md+) */}
          <motion.div variants={item} className={`md:col-span-8 ${cardBaseOut}`}>
            <div className="card-body p-6 h-full">
              <h3 className="text-lg font-bold text-base-content flex items-center gap-2 mb-4">
                <FaWrench className="text-xl text-primary" /> Tech Stack
              </h3>
              
              <div className="space-y-4">
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="text-[10px] font-bold text-base-content/40 uppercase tracking-wider mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 rounded-lg py-2 px-3 text-base font-medium bg-base-200/70 text-base-content/80 border border-base-300/50 cursor-default"
                        >
                          <span className="text-lg">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education + Highlights stacked (4 cols on md+) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            {/* Education */}
            <motion.div variants={item} className={`flex-1 ${cardBaseIn}`}>
               <div className="card-body p-6">
                  <h3 className="text-lg font-bold text-base-content flex items-center gap-2 mb-3">
                      <FaGraduationCap className="text-xl text-primary" /> Education
                  </h3>
                  <div className="flex gap-3">
                      <div className="flex flex-col items-center pt-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                          <div className="w-0.5 h-full bg-base-200 my-1.5 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                          <h4 className="font-bold text-base-content">BASc Data Science & AI</h4>
                          <div className="text-primary/80 text-sm mt-0.5">Al Ahliyya Amman University</div>
                          <div className="text-xs text-base-content/50 mt-1">2022 - Present</div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                              <span className="px-2 py-0.5 rounded bg-base-200 text-base-content/70 text-xs font-medium">
                                  GPA 3.71 / 4.0
                              </span>
                              <span className="px-2 py-0.5 rounded bg-base-200 text-base-content/70 text-xs font-medium">
                                  Senior Year
                              </span>
                          </div>
                      </div>
                  </div>
               </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={item} className={`flex-1 ${cardBaseIn}`}>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold text-base-content flex items-center gap-2 mb-4">
                  <FaTrophy className="text-xl text-amber-500" /> Highlights
                </h3>
                <div className="flex flex-col gap-4">
                   <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-lg"><FaMedal className="text-amber-500" /></div>
                      <div>
                          <div className="font-semibold text-base-content">Fintech Rally</div>
                          <div className="text-sm text-base-content/60">3rd Place • JOPACC</div>
                          <div className="text-xs text-base-content/40 mt-0.5">Jul 2025</div>
                      </div>
                   </div>
                   <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-lg"><FaLaptopCode className="text-blue-500" /></div>
                      <div>
                          <div className="font-semibold text-base-content">Programming Contest</div>
                          <div className="text-sm text-base-content/60">Participant • AAU</div>
                          <div className="text-xs text-base-content/40 mt-0.5">Nov 2023</div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 5. Certifications - Neutral with left accent */}
          <motion.div variants={item} className={`md:col-span-12 ${cardBaseOut}`}>
             <div className="card-body p-6">
                <h3 className="text-lg font-bold text-base-content flex items-center gap-2 mb-4">
                    <FaCertificate className="text-xl text-primary" /> Certifications
                    <a 
                      href="https://www.linkedin.com/in/abdallah-zeineelabidine/details/certifications/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-1 text-base-content/40 hover:text-primary transition-colors"
                      title="View all certifications on LinkedIn"
                    >
                      <FaArrowUpRightFromSquare className="text-sm" />
                    </a>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        { title: "IBM AI Engineering", org: "IBM", date: "Jun 2025", accent: "bg-blue-500" },
                        { title: "Google Prompting", org: "Google", date: "Jun 2025", accent: "bg-orange-500" },
                        { title: "Meta Back-End Dev", org: "Meta", date: "Feb 2025", accent: "bg-blue-600" }
                    ].map((cert, i) => (
                        <div key={i} className="flex items-stretch rounded-lg border border-base-200 bg-base-200 transition-colors overflow-hidden">
                            <div className={`w-1 ${cert.accent}`}></div>
                            <div className="flex flex-col p-3 flex-1">
                                <span className="font-semibold text-sm text-base-content">{cert.title}</span>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs text-base-content/60">{cert.org}</span>
                                    <span className="text-[10px] uppercase font-medium text-base-content/40">{cert.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>

          {/* 6. Volunteering - Standard card style */}
          <motion.div variants={item} className={`md:col-span-12 ${cardBaseIn}`}>
             <div className="card-body p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-xl"><FaHandshake className="text-primary" /></div>
                    <div>
                        <h3 className="text-lg font-bold text-base-content">Volunteering</h3>
                        <p className="text-sm text-base-content/60">Community Engagement</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                    {[
                        { role: "Event Coordinator", org: "IEEE CS Chapter", logo: "/IEEE-CS_LogoTM-orange.png" },
                        { role: "Course Manager", org: "Data Science Club", logo: "/DSAI_logo.jpg" }
                    ].map((vol, i) => (
                        <div key={i} className="flex items-center gap-3 bg-base-200/50 py-2 px-3 rounded-lg border border-base-200">
                             <img src={vol.logo} alt={vol.org} className="w-8 h-8 object-contain rounded" />
                             <div className="flex flex-col">
                                 <span className="font-semibold text-sm text-base-content">{vol.role}</span>
                                 <span className="text-xs text-base-content/50">{vol.org}</span>
                             </div>
                        </div>
                    ))}
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
