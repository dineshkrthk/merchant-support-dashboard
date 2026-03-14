import { useState } from "react";
import { PRIORITY_OPTIONS } from "../constants/ticket.constants";

function TicketForm({ onCreate, loading }) {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    priority: "MEDIUM",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.subject.trim() || !formData.message.trim()) {
      setError("Subject and message are required.");
      return;
    }

    setError("");

    const success = await onCreate({
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      priority: formData.priority,
    });

    if (success) {
      setFormData({
        subject: "",
        message: "",
        priority: "MEDIUM",
      });
    }
  };

  return (
    <div className="card">
      <h2>Create Ticket</h2>
      <p className="section-subtitle">Submit a new merchant support inquiry.</p>

      <form onSubmit={handleSubmit} className="ticket-form">
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter ticket subject"
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe the issue"
            rows="5"
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            {PRIORITY_OPTIONS.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="form-error">{error}</p>}

        <button type="submit" disabled={loading} className="primary-btn">
          {loading ? "Creating..." : "Create Ticket"}
        </button>
      </form>
    </div>
  );
}

export default TicketForm;