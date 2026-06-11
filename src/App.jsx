import { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { initialApplications } from './data/initialApplications.js';

// Fresh storage key so old demo data does not appear after updating the app.
const STORAGE_KEY = 'hiretrack-user-applications-v3';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [applications, setApplications] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialApplications;
    } catch {
      return initialApplications;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  const stats = useMemo(() => {
    const total = applications.length;
    const byStatus = applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {});
    return { total, byStatus };
  }, [applications]);

  return (
    <div className="app-shell">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <Topbar activePage={activePage} />
        <Container fluid className="content-wrapper">
          <Row>
            <Col>
              <Dashboard
                activePage={activePage}
                applications={applications}
                setApplications={setApplications}
                stats={stats}
                onNavigate={setActivePage}
              />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
