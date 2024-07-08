document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".box1 img");
  
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
    });
  
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });
  