// ondas
const onda1 = document.getElementById('onda1');
const onda2 = document.getElementById('onda2');
const onda3 = document.getElementById('onda3');
const onda4 = document.getElementById('onda4');

// Movimento das ondas 
window.addEventListener('scroll', () => {
    const rolagemPos = window.scrollY;
    const positionX = 400 + rolagemPos * 4 + 'px';
    
    // Atualiza a posição de fundo das ondas
    onda1.style.backgroundPositionX = positionX;
    onda2.style.backgroundPositionX = positionX;
    onda3.style.backgroundPositionX = positionX;
    onda4.style.backgroundPositionX = positionX;
});


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");

    // Expande a barra de pesquisa ao clicar
    searchBtn.addEventListener("click", () => {
        searchInput.classList.toggle("active");
        searchInput.focus();

        
        if (searchInput.classList.contains("active") && searchInput.value) {
            performSearch();
        }
    });

    // Retrai a barra de pesquisa
    searchInput.addEventListener("blur", () => {
        if (!searchInput.value) searchInput.classList.remove("active");
    });

    // Função para realizar a pesquisa
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Você pesquisou por: ${query}`);
           
        }
    }
});


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


document.addEventListener("DOMContentLoaded", function() {
    const bubblesContainer = document.querySelector(".bubbles-container");


    
    // Cria e adiciona várias bolhas
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubblesContainer.appendChild(bubble);
    }
});



document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");

    // Fecha outros itens abertos
    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".accordion-content").style.maxHeight = null;
        otherItem.querySelector(".accordion-header").classList.remove("active");
      }
    });

    // Alterna a exibição do conteúdo do item atual
    header.classList.toggle("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const radios = document.querySelectorAll('.custom-radio input[type="radio"]');
  
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        console.log(`Você selecionou: ${radio.value}`);
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = form.querySelector('input[name="name"]');
    const emailInput = form.querySelector('input[name="email"]');
    const messageInput = form.querySelector('textarea[name="message"]');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
  
    // Validação de Nome
    function validateName(name) {
      const words = name.trim().split(/\s+/); 
      return words.length >= 2; 
    }
  
    // Validação de Email
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Validação de Mensagem
    function validateMessage(message) {
      return message.length >= 10 && message.length <= 500;
    }
  
    // Validação do formulário ao enviar
    form.addEventListener('submit', (event) => {
      let isValid = true;
  
      
      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
  
      // Valida Nome
      if (!validateName(nameInput.value)) {
        nameError.textContent = 'O nome deve conter pelo menos duas palavras.';
        isValid = false;
      }
  
      // Valida Email
      if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Digite um e-mail válido (ex: exemplo@dominio.com).';
        isValid = false;
      }
  
      // Valida Mensagem
      if (!validateMessage(messageInput.value)) {
        messageError.textContent = 'A mensagem deve conter entre 10 e 500 caracteres.';
        isValid = false;
      }
  
     
      if (!isValid) {
        event.preventDefault();
      }
    });
  });
  
 
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const selectedCity = document.getElementById('selectedCity');

//  menu
dropdownToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  dropdownToggle.classList.toggle('open'); 
});

// Selecionar item do menu
dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    const value = item.getAttribute('data-value');
    const text = item.textContent;

    dropdownToggle.querySelector('span').textContent = text;
    selectedCity.value = value;

    // Fecha o menu
    dropdownMenu.classList.remove('show');
    dropdownToggle.classList.remove('open'); 
  });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (event) => {
  if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    dropdownToggle.classList.remove('open'); 
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const radioButtons = document.querySelectorAll('.custom-radio input[type="radio"]');
  const radioError = document.createElement('span'); 
  radioError.classList.add('error-message'); 
  document.querySelector('.custom-radio-group').appendChild(radioError);

 
  form.addEventListener('submit', (event) => {
    let isValid = true;

 
    radioError.textContent = '';

    
    const isRadioSelected = Array.from(radioButtons).some((radio) => radio.checked);

    if (!isRadioSelected) {
      radioError.textContent = 'Por favor, selecione uma das opções.';
      isValid = false;
    }

    
    if (!isValid) {
      event.preventDefault();
    }
  });
});

