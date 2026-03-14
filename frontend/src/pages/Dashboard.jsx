import { useEffect, useMemo, useState } from "react";
import { createTicket, getTickets, updateTicketStatus } from "../api/ticketApi";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";
import SummaryStats from "../components/SummaryStats";
import TicketFilters from "../components/TicketFilters";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [loadingTickets, setLoadingTickets] = useState(true);
  const [creating, setCreating] = useState(false);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const fetchTickets = async () => {
    try {
      setLoadingTickets(true);
      setError("");
      const response = await getTickets();
      setTickets(response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch tickets.");
    } finally {
      setLoadingTickets(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleCreateTicket = async (payload) => {
    try {
      setCreating(true);
      setError("");
      await createTicket(payload);
      await fetchTickets();
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create ticket.");
      return false;
    } finally {
      setCreating(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      setUpdatingId(id);
      setError("");
      await updateTicketStatus(id, status);
      await fetchTickets();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update ticket status.");
    } finally {
      setUpdatingId(null);
    }
  };

  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesStatus = statusFilter ? ticket.status === statusFilter : true;
      const matchesPriority = priorityFilter
        ? ticket.priority === priorityFilter
        : true;

      return matchesStatus && matchesPriority;
    });
  }, [tickets, statusFilter, priorityFilter]);

  const clearFilters = () => {
    setStatusFilter("");
    setPriorityFilter("");
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="page-header">
          <h1>Merchant Support Dashboard</h1>
          <p>Create, track, and manage merchant support inquiries in one place.</p>
        </div>

        {error && <div className="error-banner">{error}</div>}

        <SummaryStats tickets={tickets} />

        <div className="dashboard-grid">
          <div>
            <TicketForm onCreate={handleCreateTicket} loading={creating} />
          </div>

          <div>
            <div className="card">
              <div className="card-header">
                <div>
                  <h2>All Tickets</h2>
                  <p className="section-subtitle">
                    View and manage all merchant support inquiries.
                  </p>
                </div>
              </div>

              <TicketFilters
                statusFilter={statusFilter}
                priorityFilter={priorityFilter}
                onStatusFilterChange={setStatusFilter}
                onPriorityFilterChange={setPriorityFilter}
                onClearFilters={clearFilters}
              />

              {loadingTickets ? (
                <div className="loading-card">
                  <p>Loading tickets...</p>
                </div>
              ) : (
                <TicketList
                  tickets={filteredTickets}
                  onStatusChange={handleStatusChange}
                  updatingId={updatingId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;