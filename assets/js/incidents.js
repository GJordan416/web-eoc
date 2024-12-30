// Sample incident data
const incidentData = {
  1: {
    title: "Flooding in Area A",
    status: "Active",
    reportedOn: "December 15, 2024",
    description: "Heavy flooding due to torrential rains has affected Area A. Evacuation efforts are ongoing, and emergency resources are being deployed.",
    resources: ["50 personnel", "10 rescue boats", "500 sandbags"]
  },
  2: {
    title: "Power Outage in Zone B",
    status: "Monitoring",
    reportedOn: "December 14, 2024",
    description: "Power outage reported due to infrastructure damage in Zone B. Crews are assessing the situation.",
    resources: ["15 electricians", "5 repair vehicles"]
  }
};

// Get incident ID from URL
const urlParams = new URLSearchParams(window.location.search);
const incidentId = urlParams.get("id");

// Populate data
if (incidentId && incidentData[incidentId]) {
  const incident = incidentData[incidentId];
  document.querySelector(".card-title").textContent = incident.title;
  document.querySelector("p:nth-of-type(1)").innerHTML = `Status: <strong>${incident.status}</strong>`;
  document.querySelector("p:nth-of-type(2)").innerHTML = `Reported on: <strong>${incident.reportedOn}</strong>`;
  document.querySelector("p:nth-of-type(3)").textContent = `Description: ${incident.description}`;
  document.querySelector("p:nth-of-type(4) ul").innerHTML = incident.resources.map(res => `<li>${res}</li>`).join("");
}
