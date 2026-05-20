/**
 * script.js — optional helpers for your portfolio
 *
 * What this does:
 * 1. Opens a popup (modal) when you click a project image
 * 2. Closes the modal with X, backdrop click, or Escape key
 *
 * You can delete this file and remove <script src="script.js"> from index.html
 * if you prefer a simpler site with no popup.
 */

(function () {
  var modal = document.getElementById("project-modal");
  if (!modal) return;

  var modalMedia = document.getElementById("modal-media");
  var modalTitle = document.getElementById("modal-title");
  var modalMedium = document.getElementById("modal-medium");
  var modalDimensions = document.getElementById("modal-dimensions");
  var modalDate = document.getElementById("modal-date");
  var modalShort = document.getElementById("modal-short");
  var modalTools = document.getElementById("modal-tools");
  var modalExplore = document.getElementById("modal-explore");

  function setTextContent(element, text) {
    element.textContent = text;
    element.style.display = text ? "" : "none";
  }

  function openModal(button) {
    var title = button.getAttribute("data-title") || "Untitled";
    var medium = button.getAttribute("data-medium") || "";
    var dimensions = button.getAttribute("data-dimensions") || "";
    var date = button.getAttribute("data-date") || button.getAttribute("data-year") || "";
    var shortDesc = button.getAttribute("data-short") || button.getAttribute("data-description") || "";
    var tools = button.getAttribute("data-tools") || "";
    var explore = button.getAttribute("data-explore") || "";
    var videoUrl = button.getAttribute("data-video");
    var img = button.querySelector("img");

    modalTitle.textContent = title;
    setTextContent(modalMedium, medium ? "Medium: " + medium : "");
    setTextContent(modalDimensions, dimensions ? "Dimensions: " + dimensions : "");
    setTextContent(modalDate, date ? "Date: " + date : "");
    setTextContent(modalShort, shortDesc ? "Short Description: " + shortDesc : "");
    setTextContent(modalTools, tools ? "Tools used: " + tools : "");
    setTextContent(modalExplore, explore ? "What I was trying to explore: " + explore : "");

    modalMedia.innerHTML = "";

    if (videoUrl) {
      var iframe = document.createElement("iframe");
      iframe.src = videoUrl;
      iframe.title = title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      modalMedia.appendChild(iframe);
    } else if (img && img.src) {
      var bigImg = document.createElement("img");
      bigImg.src = img.src;
      bigImg.alt = img.alt || title;
      modalMedia.appendChild(bigImg);
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modalMedia.innerHTML = "";
  }

  document.querySelectorAll(".project-card__open").forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
