// Altere estes dois valores para personalizar o cabeçalho desta página.
const page = { ownerName: "Elizeta", subdomain: "elizeta.com.br" };

// Adicione, remova ou edite destinos apenas neste array.
const cards = [
  { name: "Luiz Felipe", description: "Desenvolvedor e pesquisador em IA. Projetos e links pessoais.", image: "images/luiz.jpg", url: "https://luiz.elizeta.com.br" },
  { name: "Maria Elizeta", description: "Página pessoal e principais links.", image: "images/maria.jpg", url: "https://maria.elizeta.com.br" },
  { name: "João Elizeta", description: "Projetos, referências e formas de contato.", image: "images/joao.jpg", url: "https://joao.elizeta.com.br" }
];

const ownerName = document.querySelector("#owner-name");
const subdomain = document.querySelector("#subdomain");
const cardsContainer = document.querySelector("#cards");
ownerName.textContent = page.ownerName;
subdomain.textContent = page.subdomain;
document.title = `${page.ownerName} — Hub pessoal`;

const initials = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();

cards.forEach(({ name, description, image, url }) => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = url;
  card.setAttribute("aria-label", `Abrir página de ${name}`);
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = initials(name);
  const photo = new Image();
  photo.src = image;
  photo.alt = `Foto de ${name}`;
  photo.onload = () => { avatar.textContent = ""; avatar.append(photo); };
  const title = document.createElement("h2");
  title.textContent = name;
  const text = document.createElement("p");
  text.textContent = description;
  card.append(avatar, title, text);
  cardsContainer.append(card);
});
