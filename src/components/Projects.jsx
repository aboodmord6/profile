import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiImage, FiBarChart2, FiFileText } from 'react-icons/fi';
import { 
  SiPython, SiDjango, SiPytorch, SiTailwindcss, SiReact, SiMysql, 
  SiPostgresql, SiJavascript, SiHtmx, SiNumpy, SiPandas, SiGoogle,
  SiLangchain
} from 'react-icons/si';

// Image Imports
// FinAI
import finAiBanner from '../../FinAiPreview/banner.png';
import finAiBanks from '../../FinAiPreview/Bankspage.png';
import finAiLogin from '../../FinAiPreview/Login.png';
import finAiAbout from '../../FinAiPreview/about page.png';
import finAiChat from '../../FinAiPreview/chatconfrsation.png3.png';
import finAiReg from '../../FinAiPreview/regstraion.png';

// QuoteX
import quoteXDash from '../../QuoteXPreview/DashBoard.jpeg';
import quoteXMgmt from '../../QuoteXPreview/QuoteManagement.jpeg';
import quoteXBanner from '../../QuoteXPreview/banner.png';

// Hfawa
import hfawaBanner from '../../HfawaPreview/banner.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "FinAI",
      description: "AI-Powered Fintech Assistant. Full-featured personal banker app to manage accounts, discover offers, and make informed decisions.",
      tags: ["Django", "LangChain", "Gemini", "Tailwind", "PostgreSQL"],
      icons: [<SiDjango title="Django" />, <SiGoogle title="Gemini" />, <SiTailwindcss title="Tailwind CSS" />, <SiPostgresql title="PostgreSQL" />],
      image: finAiBanner,
      gallery: [finAiBanks, finAiLogin, finAiChat, finAiReg, finAiAbout],
      link: "#"
    },
    {
      title: "QuoteX",
      description: "Comprehensive Quote Management System (SaaS). Streamlines the quoting process for businesses.",
      tags: ["Django", "HTMX", "JS", "PDF", "Gemini", "LangChain"],
      icons: [<SiDjango title="Django" />, <SiHtmx title="HTMX" />, <SiJavascript title="JavaScript" />, <FiFileText title="PDF" />, <SiGoogle title="Gemini" />],
      image: quoteXBanner, // Using Dashboard as main preview to match others
      gallery: [quoteXDash, quoteXMgmt],
      link: "#"
    },
    {
      title: "Hfawa",
      description: "Hospitality Management Platform. Elevating guest experiences through digital solutions.",
      tags: ["Django", "HTMX", "JS", "Tailwind", "PostgreSQL"],
      icons: [<SiDjango title="Django" />, <SiHtmx title="HTMX" />, <SiJavascript title="JavaScript" />, <SiTailwindcss title="Tailwind CSS" />, <SiPostgresql title="PostgreSQL" />],
      image: hfawaBanner,
      gallery: [], // Only one image, so no gallery needed
      link: "#"
    },
    {
      title: "Lung Cancer MRI Classification",
      description: "Multi-class MRI tumor classification using ResNet with 91% accuracy and GAN-balanced datasets.",
      tags: ["PyTorch", "Python", "Matplotlib", "Numpy", "Pandas"],
      icons: [<SiPytorch title="PyTorch" />, <SiPython title="Python" />, <SiNumpy title="Numpy" />, <SiPandas title="Pandas" />, <FiBarChart2 title="Matplotlib" />],
      image: null,
      gallery: [],
      link: "#"
    },
    {
      title: "OCR Deep Learning Model",
      description: "Custom, optimized OCR architecture solving complex CAPTCHAs with 93% accuracy.",
      tags: ["PyTorch", "Python", "Matplotlib", "Numpy", "Pandas"],
      icons: [<SiPytorch title="PyTorch" />, <SiPython title="Python" />, <SiNumpy title="Numpy" />, <SiPandas title="Pandas" />, <FiBarChart2 title="Matplotlib" />],
      image: null,
      gallery: [],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="bg-base-100 py-24 relative">
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-base-200 px-4 py-1.5 text-sm font-medium text-base-content/70">My Work</span>
          <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-200 overflow-hidden group"
            >
              <figure className="relative h-48 bg-base-200 overflow-hidden group cursor-pointer" onClick={() => project.gallery.length > 0 && setSelectedProject(project)}>
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {project.gallery.length > 0 && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white flex items-center gap-2 font-medium px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                          <FiImage /> View Gallery
                        </span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-base-content/20 text-4xl font-bold bg-base-200">
                    {project.title[0]}
                  </div>
                )}
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-3 text-2xl text-base-content/70">
                        {project.icons.map((icon, i) => <span key={i} className="hover:text-primary transition-colors cursor-help">{icon}</span>)}
                    </div>
                </div>
                <h3 className="card-title text-xl font-bold text-primary">{project.title}</h3>
                <p className="text-base-content/80 text-sm leading-relaxed my-4">{project.description}</p>
                <div className="card-actions justify-end mt-auto flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-outline badge-sm p-3">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-base-100 rounded-2xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost hover:bg-base-200 z-10"
              >
                <FiX className="text-lg" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6 pr-10">{selectedProject.title} Gallery</h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedProject.gallery.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="rounded-xl overflow-hidden border border-base-200 shadow-sm transition-transform hover:scale-[1.02] cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${selectedProject.title} screenshot ${idx + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 btn btn-circle btn-ghost text-white hover:bg-white/20 z-10"
            >
              <FiX className="text-2xl" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
