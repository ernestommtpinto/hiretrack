import { Button } from 'react-bootstrap';

const pageTitles = {
  dashboard: 'Dashboard',
  applications: 'Applications',
  statistics: 'Statistics',
};

export default function Topbar({ activePage }) {
  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">Job Application Tracker</span>
        <h2>{pageTitles[activePage] || 'Dashboard'}</h2>
      </div>
      <div className="topbar-actions">
        <Button className="premium-btn" href="#application-form">
          <i className="bi bi-plus-lg me-2" />Add Application
        </Button>
      </div>
    </header>
  );
}
