import { Form, InputGroup } from 'react-bootstrap';
import { statusOptions } from '../data/initialApplications.js';

export default function FilterBar({ search, setSearch, status, setStatus, sort, setSort }) {
  return (
    <div className="filter-panel">
      <InputGroup>
        <InputGroup.Text><i className="bi bi-search" /></InputGroup.Text>
        <Form.Control
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by company, role or location..."
        />
      </InputGroup>

      <Form.Select value={status} onChange={(event) => setStatus(event.target.value)}>
        <option value="All">All statuses</option>
        {statusOptions.map((option) => <option key={option}>{option}</option>)}
      </Form.Select>

      <Form.Select value={sort} onChange={(event) => setSort(event.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="company">Company A-Z</option>
      </Form.Select>
    </div>
  );
}
