
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.1 
  });

 
  const depthSections = document.querySelectorAll(".depth");
  depthSections.forEach((section) => observer.observe(section));
});


window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
      header.classList.add("scrolled"); 
  } else {
      header.classList.remove("scrolled");
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - 60, 
              behavior: "smooth"
          });
      }
  });
});
