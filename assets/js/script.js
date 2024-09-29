'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// Sidebar functionality (no changes required here)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Page navigation logic
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    // Toggle page visibility
    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");  // Show the clicked page
      } else {
        page.classList.remove("active");  // Hide other pages
      }
    });

    // Remove active class from all nav links
    navigationLinks.forEach((link) => link.classList.remove("active"));
    
    // Add active class to the clicked nav link
    this.classList.add("active");

    // Scroll to top after navigation
    window.scrollTo(0, 0);
  });
});
