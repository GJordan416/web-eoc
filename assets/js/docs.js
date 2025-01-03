// Collapsible sections for documentation
document.addEventListener("DOMContentLoaded", function () {
  const collapsibleButtons = document.querySelectorAll(".collapsible");

  collapsibleButtons.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
