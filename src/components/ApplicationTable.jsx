import { Badge, Button, Table } from 'react-bootstrap';

const statusTone = {
  Applied: 'secondary',
  'In Progress': 'warning',
  Interview: 'success',
  Offer: 'primary',
  Rejected: 'danger',
};

export default function ApplicationTable({ applications, onDelete }) {
  return (
    <div className="table-panel">
      <Table responsive hover className="align-middle premium-table mb-0">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
            <th>Applied on</th>
            <th>Salary</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>
                <div className="company-cell">
                  <div className="company-logo">{app.company.slice(0, 1)}</div>
                  <div>
                    <strong>{app.company}</strong>
                    <span>{app.location}</span>
                  </div>
                </div>
              </td>
              <td>
                <strong>{app.role}</strong>
                <span className="muted-line">{app.type}</span>
              </td>
              <td><Badge bg={statusTone[app.status] || 'secondary'}>{app.status}</Badge></td>
              <td>{new Date(app.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</td>
              <td>{app.salary || 'Not listed'}</td>
              <td className="text-end">
                {app.link && (
                  <Button size="sm" variant="light" className="table-action" href={app.link} target="_blank" rel="noreferrer">
                    <i className="bi bi-box-arrow-up-right" />
                  </Button>
                )}
                <Button size="sm" variant="light" className="table-action text-danger" onClick={() => onDelete(app.id)}>
                  <i className="bi bi-trash3" />
                </Button>
              </td>
            </tr>
          ))}
          {!applications.length && (
            <tr>
              <td colSpan="6" className="text-center py-5 text-muted">
                No applications yet. Use the Add Application button to create the first one.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
