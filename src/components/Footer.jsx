import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
            <p className="font-bold text-lg">Abdallah Zeine</p>
            <p className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-4">
            <a href="https://github.com/AbdallahZeine" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
                <FiGithub />
            </a>
            <a href="https://linkedin.com/in/AbdallahZeine" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
                <FiLinkedin />
            </a>
            <a href="mailto:abdallahzeine@gmail.com" className="btn btn-ghost btn-circle text-xl hover:text-primary transition-colors">
                <FiMail />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
