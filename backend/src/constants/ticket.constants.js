const PRIORITY = {
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  HIGH: "HIGH",
};

const STATUS = {
  NEW: "NEW",
  INVESTIGATING: "INVESTIGATING",
  RESOLVED: "RESOLVED",
};

const PRIORITY_VALUES = Object.values(PRIORITY);
const STATUS_VALUES = Object.values(STATUS);

module.exports = {
  PRIORITY,
  STATUS,
  PRIORITY_VALUES,
  STATUS_VALUES,
};