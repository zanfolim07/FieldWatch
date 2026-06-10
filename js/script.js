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

    const contactForm = document.getElementById("contactForm");
  const contatoMessage = document.getElementById("contatoMessage");

  if (contactForm && contatoMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const nome = document.getElementById("nome").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!email || !nome || !mensagem) {
        contatoMessage.textContent = "Por favor, preencha todos os campos antes de enviar.";
        contatoMessage.classList.remove("contato__message--success");
        contatoMessage.classList.add("contato__message--error");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        contatoMessage.textContent = "Digite um e-mail válido.";
        contatoMessage.classList.remove("contato__message--success");
        contatoMessage.classList.add("contato__message--error");
        return;
      }

      contatoMessage.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
      contatoMessage.classList.remove("contato__message--error");
      contatoMessage.classList.add("contato__message--success");

      contactForm.reset();
    });
  }
});