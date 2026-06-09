document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.getElementById("navBtn");
  const navMenu = document.getElementById("navMenu");

  if (navBtn && navMenu) {
    navBtn.addEventListener("click", () => {
      navMenu.classList.toggle("nav__list--open");

      const isOpen = navMenu.classList.contains("nav__list--open");
      navBtn.setAttribute("aria-expanded", isOpen);
    });
  }

  const pageGreeting = document.getElementById("pageGreeting");

  if (pageGreeting) {
    const horaAtual = new Date().getHours();

    let saudacao = "Bem-vindo à FieldWatch.";

    if (horaAtual >= 5 && horaAtual < 12) {
      saudacao = "Bom dia! Monitore sua lavoura com inteligência.";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      saudacao = "Boa tarde! Transforme dados agrícolas em decisões.";
    } else {
      saudacao = "Boa noite! Acompanhe sua fazenda com tecnologia.";
    }

    pageGreeting.textContent = saudacao;
  }
});