// Sample task data
const taskData = {
  1: {
    title: "Deploy sandbags to Area A",
    status: "In Progress",
    assignedTo: "Team Alpha",
    deadline: "December 18, 2024",
    description: "The team is responsible for deploying 500 sandbags to mitigate flooding in Area A."
  },
  2: {
    title: "Restore power in Zone B",
    status: "Pending",
    assignedTo: "Electricians Team Bravo",
    deadline: "December 20, 2024",
    description: "Repair damaged power lines and restore electricity to Zone B."
  }
};

// Get task ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const taskId = urlParams.get("id");

// Populate task details dynamically
if (taskId && taskData[taskId]) {
  const task = taskData[taskId];

  // Fill in the task details
  document.querySelector(".card-title").textContent = task.title;
  document.querySelector("p:nth-of-type(1)").innerHTML = `Status: <strong>${task.status}</strong>`;
  document.querySelector("p:nth-of-type(2)").innerHTML = `Assigned to: <strong>${task.assignedTo}</strong>`;
  document.querySelector("p:nth-of-type(3)").innerHTML = `Deadline: <strong>${task.deadline}</strong>`;
  document.querySelector("p:nth-of-type(4)").textContent = `Description: ${task.description}`;
} else {
  // Handle case where task ID is not valid
  document.querySelector(".container").innerHTML = `
    <h1>Task Not Found</h1>
    <p>The requested task could not be found. Please check the URL or go back to the <a href="index.html">task list</a>.</p>
  `;
}
