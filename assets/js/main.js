// Sample data
const incidents = [
  { id: 1, title: "Flooding in Area A", status: "Active" },
  { id: 2, title: "Power Outage in Zone B", status: "Monitoring" }
];

const tasks = [
  { id: 1, task: "Deploy sandbags to Area A", status: "In Progress" },
  { id: 2, task: "Restore power in Zone B", status: "Pending" }
];

// Populate incidents
const incidentList = document.getElementById("incident-list");
incidents.forEach(incident => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${incident.title} - ${incident.status}`;
  incidentList.appendChild(li);
});

// Populate tasks
const taskList = document.getElementById("task-list");
tasks.forEach(task => {
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${task.task} - ${task.status}`;
  taskList.appendChild(li);
});
