import './Footer.css';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <button className="footer-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">GN</span>
          <span className="logo-bracket">&nbsp;/&gt;</span>
        </button>

        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} className="footer-link" onClick={() => scrollToSection(id)}>
              {label}
            </button>
          ))}
        </nav>

        <p className="footer-copy">
          © {new Date().getFullYear()} Girujan Naguleswaran. Built with React.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
