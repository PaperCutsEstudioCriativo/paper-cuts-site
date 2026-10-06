// Personalização: preencha o telefone com DDI + DDD + número, só dígitos.
// Exemplo de formato (não é um contato real): 5511999999999
const WHATSAPP_NUMBER = "";
const INSTAGRAM_URL = ""; // Ex.: https://www.instagram.com/seuperfil/

const whatsapp = document.querySelector("#whatsapp-cta");
const instagram = document.querySelector("#instagram-link");
if (WHATSAPP_NUMBER) {
  const message = encodeURIComponent("Oi! Vim pelo site da Paper Cuts e gostaria de conversar sobre uma encomenda.");
  whatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
} else {
  whatsapp.href = "https://wa.me/?text=" + encodeURIComponent("Oi! Vim pelo site da Paper Cuts e gostaria de conversar sobre uma encomenda.");
}
if (INSTAGRAM_URL) instagram.href = INSTAGRAM_URL;
document.querySelector("#year").textContent = new Date().getFullYear();
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
}));
