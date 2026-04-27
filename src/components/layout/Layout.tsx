import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, Menu, Twitter, X } from 'lucide-react';
import { cn } from '../../lib/utils';

const navItems = [
 { name: 'Services', path: '/services' },
 { name: 'Methodology', path: '/methodology' },
 { name: 'Case Studies', path: '/case-studies' },
 { name: 'Insights', path: '/insights' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
];

export const Navbar = () => {
 const [isOpen, setIsOpen] = React.useState(false);
 const location = useLocation();

  return (
    <nav className="fixed top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[calc(100%-2rem)] max-w-[1180px] z-50 rounded-full border border-black/10 bg-white/76 shadow-[0_18px_60px_rgba(17,17,17,0.08)] backdrop-blur-2xl transition-all duration-300">
      <div className="h-16 px-3 md:px-3 flex items-center justify-between">
        <Link to="/" className="flex h-11 items-center rounded-full px-3 transition-colors hover:bg-black/[0.04] group">
          <img src="/logo.png" alt="Levered" className="h-8 w-auto group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-black/8 bg-black/[0.035] p-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  location.pathname === item.path
                    ? "bg-white text-black shadow-sm shadow-black/5"
                    : "text-black/48 hover:bg-white/70 hover:text-black"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
          >
            Book Audit
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 overflow-hidden rounded-[28px] border border-black/10 bg-white/96 p-3 shadow-2xl shadow-black/10 backdrop-blur-xl"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold transition-colors",
                  location.pathname === item.path ? "bg-[#f7f4ee] text-black" : "text-black/58 hover:bg-black/[0.04] hover:text-black"
                )}
              >
                <span>{item.name}</span>
                <span className="text-xs text-black/35">0{index + 1}</span>
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-center text-base font-semibold text-white"
            >
              Book Audit
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
 );
};

export const Footer = () => {
 return (
    <footer className="bg-white px-5 py-6 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1480px] rounded-[32px] bg-[#111111] px-7 py-8 text-white shadow-[0_20px_70px_rgba(17,17,17,0.14)] md:px-9 md:py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <Link to="/" className="inline-flex items-center group">
              <img src="/logo.png" alt="Levered" className="h-8 w-auto brightness-0 invert group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/52">
              Measurement, experimentation, and AI workflows for high-growth teams.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-brand-yellow"
            >
              Book a growth audit
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase text-white/34">Explore</h4>
              <ul className="space-y-3 text-sm font-semibold text-white/56">
                <li><Link to="/services" className="transition-colors hover:text-white">Services</Link></li>
                <li><Link to="/methodology" className="transition-colors hover:text-white">Methodology</Link></li>
                <li><Link to="/case-studies" className="transition-colors hover:text-white">Case Studies</Link></li>
                <li><Link to="/insights" className="transition-colors hover:text-white">Insights</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase text-white/34">Company</h4>
              <ul className="space-y-3 text-sm font-semibold text-white/56">
                <li><Link to="/about" className="transition-colors hover:text-white">About</Link></li>
                <li><Link to="/experiments" className="transition-colors hover:text-white">Experiments</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase text-white/34">Newsletter</h4>
            <p className="mb-4 text-sm leading-6 text-white/52">Technical growth systems, monthly.</p>
            <div className="flex max-w-sm rounded-full border border-white/10 bg-white/[0.06] p-1">
              <input
                type="email"
                placeholder="Email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/32 focus:outline-none"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-brand-yellow">
                <Mail size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-white/34 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Levered Systems Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="transition-colors hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
            <div className="mx-1 h-4 w-px bg-white/10" />
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/48 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
