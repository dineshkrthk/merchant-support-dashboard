import { PRIORITY_OPTIONS, STATUS_OPTIONS } from "../constants/ticket.constants";

function TicketFilters({
  statusFilter,
  priorityFilter,
  onStatusFilterChange,
  onPriorityFilterChange,
  onClearFilters,
}) {
  return (
    <div className="filters-bar">
      <div className="filters-group">
        <div className="filter-item">
          <label>Status</label>
          <select value={statusFilter} onChange={(e) => onStatusFilterChange(e.target.value)}>
            <option value="">All Statuses</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-item">
          <label>Priority</label>
          <select
            value={priorityFilter}
            onChange={(e) => onPriorityFilterChange(e.target.value)}
          >
            <option value="">All Priorities</option>
            {PRIORITY_OPTIONS.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button type="button" className="secondary-btn" onClick={onClearFilters}>
        Clear Filters
      </button>
    </div>
  );
}

export default TicketFilters;