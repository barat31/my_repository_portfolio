const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});
document.getElementById("year").textContent = new Date().getFullYear();

const roles = ["Information Systems Graduate", "Web Developer", "Digital Enthusiast"];
const typedText = document.getElementById("typedText");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole() {
  const current = roles[roleIndex];
  typedText.textContent = current.substring(0, charIndex);
  if (!deleting && charIndex < current.length) charIndex++;
  else if (deleting && charIndex > 0) charIndex--;
  else if (!deleting) { deleting = true; setTimeout(typeRole, 1200); return; }
  else { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
  setTimeout(typeRole, deleting ? 45 : 85);
}
setTimeout(typeRole, 1200);

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navMenu a");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
});
