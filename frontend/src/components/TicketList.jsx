import { STATUS_OPTIONS } from "../constants/ticket.constants";
import PriorityBadge from "./PriorityBadge";
import StatusBadge from "./StatusBadge";
import EmptyState from "./EmptyState";

function TicketList({ tickets, onStatusChange, updatingId }) {
  if (!tickets.length) {
    return <EmptyState />;
  }

  return (
    <div className="table-wrapper">
      <table className="ticket-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>
                <div className="ticket-subject-cell">
                  <p className="ticket-subject">{ticket.subject}</p>
                  <p className="ticket-message">{ticket.message}</p>
                </div>
              </td>
              <td>
                <PriorityBadge priority={ticket.priority} />
              </td>
              <td>
                <StatusBadge status={ticket.status} />
              </td>
              <td>{new Date(ticket.createdAt).toLocaleString()}</td>
              <td>
                <select
                  className="status-select"
                  value={ticket.status}
                  onChange={(e) => onStatusChange(ticket.id, e.target.value)}
                  disabled={updatingId === ticket.id}
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TicketList;