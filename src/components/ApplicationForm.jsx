import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { statusOptions } from '../data/initialApplications.js';

const emptyForm = {
  company: '',
  role: '',
  location: '',
  type: 'Full-time',
  status: 'Applied',
  date: new Date().toISOString().slice(0, 10),
  salary: '',
  contact: '',
  link: '',
  notes: '',
};

export default function ApplicationForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.company.trim() || !form.role.trim()) return;

    onAdd({ ...form, id: crypto.randomUUID() });
    setForm(emptyForm);
  };

  return (
    <section id="application-form" className="glass-panel form-panel">
      <div className="section-heading">
        <span className="eyebrow">Pipeline</span>
        <h3>Add a new application</h3>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col md={6} lg={4}>
            <Form.Label>Company</Form.Label>
            <Form.Control value={form.company} onChange={(e) => updateField('company', e.target.value)} placeholder="e.g. Cloudflare" />
          </Col>
          <Col md={6} lg={4}>
            <Form.Label>Role</Form.Label>
            <Form.Control value={form.role} onChange={(e) => updateField('role', e.target.value)} placeholder="e.g. React Developer" />
          </Col>
          <Col md={6} lg={4}>
            <Form.Label>Location</Form.Label>
            <Form.Control value={form.location} onChange={(e) => updateField('location', e.target.value)} placeholder="Lisbon / Remote" />
          </Col>
          <Col md={6} lg={3}>
            <Form.Label>Type</Form.Label>
            <Form.Select value={form.type} onChange={(e) => updateField('type', e.target.value)}>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </Form.Select>
          </Col>
          <Col md={6} lg={3}>
            <Form.Label>Status</Form.Label>
            <Form.Select value={form.status} onChange={(e) => updateField('status', e.target.value)}>
              {statusOptions.map((status) => <option key={status}>{status}</option>)}
            </Form.Select>
          </Col>
          <Col md={6} lg={3}>
            <Form.Label>Applied date</Form.Label>
            <Form.Control type="date" value={form.date} onChange={(e) => updateField('date', e.target.value)} />
          </Col>
          <Col md={6} lg={3}>
            <Form.Label>Salary range</Form.Label>
            <Form.Control value={form.salary} onChange={(e) => updateField('salary', e.target.value)} placeholder="€45k - €60k" />
          </Col>
          <Col md={6}>
            <Form.Label>Recruiter / Contact</Form.Label>
            <Form.Control value={form.contact} onChange={(e) => updateField('contact', e.target.value)} placeholder="Recruiter name or team" />
          </Col>
          <Col md={6}>
            <Form.Label>Job link</Form.Label>
            <Form.Control value={form.link} onChange={(e) => updateField('link', e.target.value)} placeholder="https://..." />
          </Col>
          <Col xs={12}>
            <Form.Label>Notes</Form.Label>
            <Form.Control as="textarea" rows={3} value={form.notes} onChange={(e) => updateField('notes', e.target.value)} placeholder="Interview notes, follow-up reminders, technical preparation..." />
          </Col>
          <Col xs={12} className="d-flex justify-content-end">
            <Button type="submit" className="premium-btn"><i className="bi bi-plus-circle me-2" />Save application</Button>
          </Col>
        </Row>
      </Form>
    </section>
  );
}
