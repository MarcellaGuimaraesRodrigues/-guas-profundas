// Variáveis para as ondas
const onda1 = document.getElementById('onda1');
const onda2 = document.getElementById('onda2');
const onda3 = document.getElementById('onda3');
const onda4 = document.getElementById('onda4');


window.addEventListener('scroll', () => {
    const rolagemPos = window.scrollY;
    const positionX = 400 + rolagemPos * 4 + 'px';
    
   
    onda1.style.backgroundPositionX = positionX;
    onda2.style.backgroundPositionX = positionX;
    onda3.style.backgroundPositionX = positionX;
    onda4.style.backgroundPositionX = positionX;
});


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");

    
    searchBtn.addEventListener("click", () => {
        searchInput.classList.toggle("active");
        searchInput.focus();

        
        if (searchInput.classList.contains("active") && searchInput.value) {
            performSearch();
        }
    });

    
    searchInput.addEventListener("blur", () => {
        if (!searchInput.value) searchInput.classList.remove("active");
    });

   
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Você pesquisou por: ${query}`);
            
        }
    }
});


//header scrolla pra baixo 
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


//bolhas
document.addEventListener("DOMContentLoaded", function() {
    const bubblesContainer = document.querySelector(".bubbles-container");

    // Cria e adiciona várias bolhas
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubblesContainer.appendChild(bubble);
    }
});



//accordion
document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const content = item.querySelector(".accordion-content");
  
      
      document.querySelectorAll(".accordion-item").forEach((otherItem) => {
        if (otherItem !== item) {
          const otherContent = otherItem.querySelector(".accordion-content");
          otherContent.style.maxHeight = null;
          otherContent.classList.remove("open");
          otherItem.querySelector(".accordion-header").classList.remove("active");
        }
      });
  
      
      header.classList.toggle("active");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.classList.remove("open");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.classList.add("open");
      }
    });
  });
  

  
 //Efeito fadein
 const observador = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observador.unobserve(entry.target); // Remove o observador após a animação
      }
    });
  });
  
  const elements = document.querySelectorAll('.hidden');
  elements.forEach((element) => observador.observe(element));
  
  

//dropdown
  const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const hiddenInput = document.getElementById("dropdownValue");

// Alterna a exibição do conteúdo do dropdown ao clicar no botão
dropdownButton.addEventListener("click", () => {
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
  dropdownButton.classList.toggle("open");
});

// Fecha o dropdown ao clicar fora dele
document.addEventListener("click", (event) => {
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = "none";
    dropdownButton.classList.remove("open");
  }
});

// Atualiza o valor e texto do botão ao selecionar uma opção
dropdownItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const selectedValue = event.target.getAttribute("data-value");
    const selectedText = event.target.textContent;
    dropdownButton.textContent = selectedText;
    dropdownButton.appendChild(document.querySelector(".arrow"));
    hiddenInput.value = selectedValue;

    dropdownContent.style.display = "none";
    dropdownButton.classList.remove("open");
  });
});


