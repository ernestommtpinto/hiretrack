import { useMemo, useState } from 'react';
import { Button } from 'react-bootstrap';
import StatsCards from '../components/StatsCards.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ApplicationTable from '../components/ApplicationTable.jsx';
import ApplicationForm from '../components/ApplicationForm.jsx';
import Insights from '../components/Insights.jsx';

export default function Dashboard({ activePage, applications, setApplications, stats, onNavigate }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [sort, setSort] = useState('newest');

  const filteredApplications = useMemo(() => {
    const query = search.toLowerCase().trim();

    return applications
      .filter((app) => status === 'All' || app.status === status)
      .filter((app) => [app.company, app.role, app.location].join(' ').toLowerCase().includes(query))
      .sort((a, b) => {
        if (sort === 'oldest') return new Date(a.date) - new Date(b.date);
        if (sort === 'company') return a.company.localeCompare(b.company);
        return new Date(b.date) - new Date(a.date);
      });
  }, [applications, search, status, sort]);

  const addApplication = (application) => {
    setApplications((current) => [application, ...current]);
  };

  const deleteApplication = (id) => {
    setApplications((current) => current.filter((application) => application.id !== id));
  };

  if (activePage === 'statistics') {
    return (
      <>
        <StatsCards stats={stats} />
        <Insights stats={stats} />
      </>
    );
  }

  if (activePage === 'applications') {
    return (
      <>
        <FilterBar search={search} setSearch={setSearch} status={status} setStatus={setStatus} sort={sort} setSort={setSort} />
        <ApplicationTable applications={filteredApplications} onDelete={deleteApplication} />
        <ApplicationForm onAdd={addApplication} />
      </>
    );
  }

  return (
    <>
      <StatsCards stats={stats} />
      <div className="empty-dashboard-panel text-center">
        <div className="empty-icon mx-auto mb-4">
          <i className="bi bi-briefcase" />
        </div>
        <h2>No applications yet</h2>
        <p>Start by adding your first job application. Your dashboard will update automatically.</p>
        <Button className="premium-button" onClick={() => onNavigate('applications')}>
          <i className="bi bi-plus-lg me-2" /> Add Your First Application
        </Button>
      </div>
    </>
  );
}
