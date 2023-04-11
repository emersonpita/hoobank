// Armazena os links do menu de navegação
const navigationLinks: NodeListOf<Element> = document.querySelectorAll(".menu-item");

// Armazena as seções correspondentes a cada link do menu de navegação
const sections: NodeListOf<Element> = document.querySelectorAll('#inicio, #sobre, #beneficios, #solucoes');

// Adiciona o evento de rolagem na janela
window.addEventListener('scroll', function() {
// Percorre todas as seções
for (let i = 0; i < sections.length; i++) {
// Obtém a posição da seção atual em relação à tela
const sectionRect: DOMRect = sections[i].getBoundingClientRect();

// Verifica se a seção atual está visível na tela (com uma margem de 200 pixels)
if (sectionRect.top <= 200 && sectionRect.bottom >= 200) {
    // Adiciona a classe "active" ao link correspondente da seção atual
    navigationLinks[i].classList.add('active');
  } else {
    // Remove a classe "active" dos links não correspondentes à seção atual
    navigationLinks[i].classList.remove('active');
  }}
});

// Adiciona a classe scroll ao header quando há rolagem na página
window.addEventListener('scroll', function() {
    const header: HTMLElement | null = document.querySelector('header');
    if (window.scrollY > 0) {
    header?.classList.add('scroll');
    } else {
    header?.classList.remove('scroll');
    }
    });

// Armazena o checkbox do menu e o menu de navegação
const checkbox: HTMLInputElement | null = document.querySelector("#hamburguer-menu");
const navMenu: HTMLElement | null = document.querySelector(".nav-mobile");
const navLinks: NodeListOf<HTMLAnchorElement> | null = document.querySelectorAll(".nav-mobile a");

// Adiciona o evento de click no menu para desmarcar o checkbox
navLinks?.forEach((link) => {
  link.addEventListener("click", () => {
    if (checkbox) {
      checkbox.checked = false;
    }
  });
});
