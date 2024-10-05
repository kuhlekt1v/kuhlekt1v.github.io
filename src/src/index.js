import "./styles/main.scss";
import "./styles/projects.scss";

document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/"
  ) {
    const readMoreLink = document.getElementById("read-more");
    if (readMoreLink) {
      readMoreLink.addEventListener("click", function () {
        var contents = document.querySelectorAll(".toggle-content");
        contents.forEach(function (content) {
          if (content.classList.contains("show")) {
            content.classList.remove("show");
            readMoreLink.textContent = "Read more...";
          } else {
            content.classList.add("show");
            readMoreLink.textContent = "Less...";
          }
        });
      });
    }
  }
});
