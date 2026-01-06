import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
         <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-1">Abdallah Zeine Elabidine</h3>
            <p className="text-sm opacity-70">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2 text-sm">
                <a href="mailto:abdallahzeine@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <FiMail className="text-lg group-hover:scale-110 transition-transform" />
                    <span>abdallahzeine@gmail.com</span>
                </a>
                <a href="tel:+962780071840" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <FiPhone className="text-lg group-hover:scale-110 transition-transform" />
                    <span>+962 78 007 1840 (Jordan)</span>
                </a>
                <a href="tel:+966566454894" className="flex items-center gap-2 hover:text-primary transition-colors group">
                    <FiPhone className="text-lg group-hover:scale-110 transition-transform" />
                    <span>+966 56 645 4894 (Saudi Arabia)</span>
                </a>
            </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
