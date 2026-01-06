import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-base-100 shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="bg-primary text-primary-content p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Let's Chat!</h2>
                <p className="opacity-90">Open to opportunities, collaborations, or just a friendly hello.</p>
              </div>
              <div className="space-y-6 mt-10">
                <a href="mailto:abdallahzeine@gmail.com" className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <FiMail className="text-xl"/>
                  <span>abdallahzeine@gmail.com</span>
                </a>
                <a href="tel:+962780071840" className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <FiPhone className="text-xl"/>
                  <span>+962 78 007 1840</span>
                </a>
                <a href="tel:+966566454894" className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <FiPhone className="text-xl"/>
                  <span>+966 56 645 4894</span>
                </a>
                
              </div>
            </div>
            
            <div className="p-10 flex flex-col justify-center items-center text-center">
              <div className="w-full max-w-sm space-y-4">
                 <h3 className="text-xl font-bold">Quick Message</h3>
                 <p className="text-sm opacity-70">Prefer email? Click the button below.</p>
                 <a href="mailto:abdallahzeine@gmail.com" className="btn btn-primary w-full shadow-lg hover:shadow-primary/30">
                    Send Email
                 </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
