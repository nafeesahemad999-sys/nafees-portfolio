import React, { useState } from 'react';
import './Navbar.css';

const LINKS = [
  { label: 'Home',      href: '#hero'      },
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Services',  href: '#services'  },
  { label: 'Contact',   href: '#contact'   },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="logo">N<span>A</span>FEES</div>

        <ul className="nav-links">
          {LINKS.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>

        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
