import { Button } from 'react-bootstrap';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: 'bi-grid-1x2-fill' },
  { key: 'applications', label: 'Applications', icon: 'bi-briefcase-fill' },
  { key: 'statistics', label: 'Statistics', icon: 'bi-bar-chart-fill' },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="brand-wrap">
        <div className="brand-icon"><i className="bi bi-briefcase-fill" /></div>
        <div>
          <h1>HireTrack</h1>
        </div>
      </div>

      <nav className="nav-stack">
        {navItems.map((item) => (
          <Button
            key={item.key}
            variant="link"
            className={`nav-pill ${activePage === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
          >
            <i className={`bi ${item.icon}`} />
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
