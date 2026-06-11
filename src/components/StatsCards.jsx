import { Col, Row } from 'react-bootstrap';

const cardConfig = [
  { label: 'Total Applications', key: 'total', icon: 'bi-clipboard2-check', tone: 'blue', helper: 'All time' },
  { label: 'In Progress', key: 'In Progress', icon: 'bi-hourglass-split', tone: 'amber', helper: 'Under review' },
  { label: 'Interviews', key: 'Interview', icon: 'bi-calendar2-check', tone: 'green', helper: 'Next steps' },
  { label: 'Offers', key: 'Offer', icon: 'bi-trophy', tone: 'purple', helper: 'Great result' },
  { label: 'Rejected', key: 'Rejected', icon: 'bi-x-circle', tone: 'red', helper: 'Keep improving' },
];

export default function StatsCards({ stats }) {
  return (
    <Row className="g-3 mb-4">
      {cardConfig.map((card) => {
        const value = card.key === 'total' ? stats.total : stats.byStatus[card.key] || 0;
        return (
          <Col key={card.label} xs={12} md={6} xl>
            <div className="stat-card">
              <div className={`stat-icon ${card.tone}`}><i className={`bi ${card.icon}`} /></div>
              <div>
                <p>{card.label}</p>
                <h3>{value}</h3>
                <span>{card.helper}</span>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
