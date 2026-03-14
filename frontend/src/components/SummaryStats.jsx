function SummaryStats({ tickets }) {
  const total = tickets.length;
  const newCount = tickets.filter((ticket) => ticket.status === "NEW").length;
  const investigatingCount = tickets.filter(
    (ticket) => ticket.status === "INVESTIGATING"
  ).length;
  const resolvedCount = tickets.filter(
    (ticket) => ticket.status === "RESOLVED"
  ).length;

  const stats = [
    { label: "Total Tickets", value: total, className: "stat-card total" },
    { label: "New", value: newCount, className: "stat-card new" },
    {
      label: "Investigating",
      value: investigatingCount,
      className: "stat-card investigating",
    },
    { label: "Resolved", value: resolvedCount, className: "stat-card resolved" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.label} className={stat.className}>
          <p className="stat-label">{stat.label}</p>
          <h3 className="stat-value">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default SummaryStats;