/* script.js - small features for the personal website.
   Everything here is plain JavaScript. No libraries are needed. */

// ====== SETTINGS YOU MAY EDIT ======
// Put your real email address here. The contact form uses it.
var CONTACT_EMAIL = "your.email@example.com";
// ===================================

document.addEventListener("DOMContentLoaded", function () {

  // 1. Footer year updates by itself
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  // 2. Mobile menu open and close
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    // Close the menu after choosing a link
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { setMenu(false); }
    });
    // Close the menu with the Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // 3. Highlight the menu link of the section you are reading
  var links = document.querySelectorAll(".site-nav a");
  var sections = [];
  links.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) { sections.push({ link: link, section: section }); }
  });

  function updateActiveLink() {
    var marker = window.scrollY + 120;
    var current = sections[0];
    sections.forEach(function (item) {
      if (item.section.offsetTop <= marker) { current = item; }
    });
    // At the very bottom of the page, highlight the last section
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
      current = sections[sections.length - 1];
    }
    sections.forEach(function (item) {
      if (item === current) { item.link.setAttribute("aria-current", "true"); }
      else { item.link.removeAttribute("aria-current"); }
    });
  }
  if (sections.length) {
    window.addEventListener("scroll", updateActiveLink, { passive: true });
    window.addEventListener("resize", updateActiveLink);
    updateActiveLink();
  }

  // 4. Contact form: checks the fields, then opens the visitor's email app.
  //    No message is stored or sent by this website.
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var nameField = document.getElementById("name");
  var emailField = document.getElementById("email");
  var messageField = document.getElementById("message");

  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";
      status.textContent = "";

      var fields = [nameField, emailField, messageField];
      var firstBad = null;
      fields.forEach(function (field) {
        var bad = field.value.trim() === "" || (field.type === "email" && !field.checkValidity());
        field.setAttribute("aria-invalid", bad ? "true" : "false");
        if (bad && !firstBad) { firstBad = field; }
      });

      if (firstBad) {
        status.className = "form-status error";
        status.textContent = "Please fill in your name, a valid email and a message.";
        firstBad.focus();
        return;
      }

      if (CONTACT_EMAIL.indexOf("example.com") !== -1) {
        status.className = "form-status error";
        status.textContent = "The site owner has not added an email address yet.";
        return;
      }

      var subject = "Message from " + nameField.value.trim();
      var body = messageField.value.trim() +
        "\n\nFrom: " + nameField.value.trim() +
        " (" + emailField.value.trim() + ")";
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      status.textContent = "Your email app should open now. Press send there to finish.";
    });
  }
});
