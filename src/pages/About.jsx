import { Card, Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <section className="glass-panel about-panel">
      <span className="eyebrow">Portfolio case study</span>
      <h2>HireTrack — React job application tracker</h2>
      <p>
        HireTrack is a responsive job-search CRM designed and developed by Ernesto Pinto.
        It helps candidates manage applications, track interview stages, save recruiter details
        and review the progress of their job search from one polished dashboard.
      </p>

      <Row className="g-4 mt-2">
        <Col md={4}>
          <Card className="feature-card">
            <i className="bi bi-lightning-charge-fill" />
            <h4>Fast workflow</h4>
            <p>Add, filter and review applications without unnecessary complexity.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <i className="bi bi-phone-fill" />
            <h4>Responsive UI</h4>
            <p>Built with Bootstrap to work beautifully across desktop and mobile screens.</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card">
            <i className="bi bi-database-fill-check" />
            <h4>Local persistence</h4>
            <p>Applications are saved with browser localStorage for a lightweight experience.</p>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
