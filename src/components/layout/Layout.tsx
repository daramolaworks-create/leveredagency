import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Methodology', path: '/methodology' },
  { name: 'Services', path: '/services' },
  { name: 'Experiments', path: '/experiments' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'About', path: '/about' },
  { name: 'Insights', path: '/insights' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[#F1E6C9]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#6E026F] flex items-center justify-center rounded-sm group-hover:bg-brand-orange transition-colors">
            <span className="text-white font-display font-black text-xl">L</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase text-[#6E026F]">Levered</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs uppercase font-mono tracking-widest transition-colors",
                location.pathname === item.path ? "text-brand-orange" : "text-[#6E026F]/60 hover:text-[#6E026F]"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-5 py-2 bg-[#6E026F] text-white text-xs uppercase font-mono font-bold hover:bg-brand-orange transition-all rounded-sm"
          >
            Start System
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#6E026F]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-[#F1E6C9] border-b border-black/5 p-6 space-y-4 shadow-lg"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block text-sm uppercase font-mono tracking-widest text-[#6E026F]/60"
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 bg-[#6E026F] text-white text-center text-xs uppercase font-mono font-bold rounded-sm"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="border-t border-black/5 py-20 bg-[#F1E6C9]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#6E026F] flex items-center justify-center rounded-sm">
              <span className="text-white font-display font-black text-sm">L</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tighter uppercase text-[#6E026F]">Levered</span>
          </Link>
          <p className="text-[#6E026F]/60 text-sm leading-relaxed max-w-xs">
            Growth is engineered. We build interoperable data systems and AI-powered optimization tools for high-growth companies.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase font-mono font-bold mb-6 text-[#6E026F]">Capabilities</h4>
          <ul className="space-y-4 text-sm text-[#6E026F]/60 font-mono">
            <li><Link to="/services" className="hover:text-brand-orange transition-colors">Paid Media</Link></li>
            <li><Link to="/services" className="hover:text-brand-orange transition-colors">CRO Systems</Link></li>
            <li><Link to="/services" className="hover:text-brand-orange transition-colors">Lifecycle Marketing</Link></li>
            <li><Link to="/services" className="hover:text-brand-orange transition-colors">Attribution</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono font-bold mb-6 text-[#6E026F]">Company</h4>
          <ul className="space-y-4 text-sm text-[#6E026F]/60 font-mono">
            <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
            <li><Link to="/experiments" className="hover:text-brand-orange transition-colors">Experiments</Link></li>
            <li><Link to="/case-studies" className="hover:text-brand-orange transition-colors">Case Studies</Link></li>
            <li><Link to="/insights" className="hover:text-brand-orange transition-colors">Insights</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-mono font-bold mb-6 text-[#6E026F]">Newsletter</h4>
          <p className="text-xs text-[#6E026F]/60 mb-4 font-mono">Technical growth systems delivered monthly.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-white/50 border border-black/10 px-4 py-2 text-sm focus:outline-none focus:border-brand-orange w-full rounded-l-sm text-[#6E026F]"
            />
            <button className="bg-[#6E026F] text-white p-2 rounded-r-sm hover:bg-brand-orange transition-all">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-mono text-[#6E026F]/40 uppercase tracking-widest">
          © 2026 Levered Systems Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] font-mono text-[#6E026F]/40 uppercase tracking-widest">
          <a href="#" className="hover:text-[#6E026F]">Privacy</a>
          <a href="#" className="hover:text-[#6E026F]">Terms</a>
          <a href="#" className="hover:text-[#6E026F]">Twitter</a>
          <a href="#" className="hover:text-[#6E026F]">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
