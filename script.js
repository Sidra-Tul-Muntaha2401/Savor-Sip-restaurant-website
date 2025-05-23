// Wait for DOM load
document.addEventListener("DOMContentLoaded", () => {
  const bookingBtn = document.getElementById("openBooking");
  const modal = document.getElementById("bookingModal");
  const closeBtn = document.querySelector(".close-btn");
  const bookingForm = document.querySelector(".booking-form");
  const navLinks = document.querySelectorAll(".nav-link");

  // Open booking modal
  bookingBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Close modal when clicking X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if clicking outside modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle booking form submit
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your booking! We'll contact you soon.");
    bookingForm.reset();
    modal.style.display = "none";
  });

  // Navigation active link on click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
