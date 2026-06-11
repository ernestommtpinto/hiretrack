import { Col, ProgressBar, Row } from 'react-bootstrap';

export default function Insights({ stats }) {
  const total = stats.total || 1;
  const rows = ['Applied', 'In Progress', 'Interview', 'Offer', 'Rejected'].map((status) => ({
    status,
    value: stats.byStatus[status] || 0,
    percent: Math.round(((stats.byStatus[status] || 0) / total) * 100),
  }));

  return (
    <Row className="g-4 mt-1">
      <Col lg={5}>
        <section className="glass-panel h-100">
          <div className="section-heading">
            <span className="eyebrow">Insights</span>
            <h3>Applications by status</h3>
          </div>
          <div className="status-list">
            {rows.map((row) => (
              <div key={row.status}>
                <div className="status-row">
                  <span>{row.status}</span>
                  <strong>{row.value} · {row.percent}%</strong>
                </div>
                <ProgressBar now={row.percent} aria-label={`${row.status} progress`} />
              </div>
            ))}
          </div>
        </section>
      </Col>
      <Col lg={7}>
        <section className="glass-panel h-100">
          <div className="section-heading">
            <span className="eyebrow">Activity</span>
            <h3>Monthly overview</h3>
          </div>
          <div className="chart-card">
            <div className="chart-grid">
              {[20, 40, 58, 74, 88].map((height, index) => (
                <div key={index} className="chart-column">
                  <span style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
            <div className="chart-labels"><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span></div>
          </div>
        </section>
      </Col>
    </Row>
  );
}
