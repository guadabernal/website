document.addEventListener("DOMContentLoaded", function() {
  var menuBtn = document.getElementById("menu-button");

  menuBtn.addEventListener("click", function() {
    var menuPanel = document.getElementById("menu-panel");
    if (menuPanel.classList.contains("open")) {
      menuPanel.classList.remove("open");
    } else {
      menuPanel.classList.add("open");
    }
  });

  document.addEventListener("click", function(event) {
    var menuPanel = document.getElementById("menu-panel");
    if (!menuPanel.contains(event.target) && !menuBtn.contains(event.target)) {
      menuPanel.classList.remove("open");
    }
  });
});

function scrollToProjects() {
  hideMenuPanel();
  document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
}
function scrollToResume() {
  hideMenuPanel();
  document.getElementById("resume").scrollIntoView({ behavior: 'smooth' });
}

function hideMenuPanel() {
  var menuPanel = document.getElementById("menu-panel");
  menuPanel.classList.remove("open");
}
