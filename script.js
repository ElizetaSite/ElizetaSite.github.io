// Altere estes dois valores para personalizar o cabeçalho desta página.
const page = { ownerName: "Elizeta", subdomain: "elizeta.com.br" };

// Adicione, remova ou edite destinos apenas neste array.
const cards = [
  { name: "Luiz Felipe Elizeta dos Santos", description: "Desenvolvedor e pesquisador em IA. Portifólio.", image: "images/luiz.jpg", background: "images/luizBackGround.jpg", backgroundOpacity: 0.5,backgroundBaseColor: "#000000" , url: "https://luiz.elizeta.com.br" },
  { name: "Gustavo J. Elizeta", description: "Página pessoal e principais links.", image: "", url: "https://gustavo.elizeta.com.br" },
];

const ownerName = document.querySelector("#owner-name");
const subdomain = document.querySelector("#subdomain");
const cardsContainer = document.querySelector("#cards");
const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "elizeta-theme";

const applyThemePreference = (preference) => {
  const isLight = preference === "light";
  document.documentElement.toggleAttribute("data-theme", isLight);
  if (isLight) document.documentElement.dataset.theme = "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? "Tema claro" : "Tema automático");
  themeToggle.title = isLight ? "Tema claro — clicar para usar o tema automático" : "Tema automático — clicar para forçar o tema claro";
  themeToggle.querySelector("span").textContent = isLight ? "☀️" : "🌙";
};

let themePreference = "auto";
try {
  themePreference = localStorage.getItem(themeStorageKey) === "light" ? "light" : "auto";
} catch { /* A página continua funcionando quando o armazenamento não está disponível. */ }
applyThemePreference(themePreference);

themeToggle.addEventListener("click", () => {
  themePreference = themePreference === "light" ? "auto" : "light";
  try {
    localStorage.setItem(themeStorageKey, themePreference);
  } catch { /* A preferência vale para a sessão atual mesmo sem localStorage. */ }
  applyThemePreference(themePreference);
});

ownerName.textContent = page.ownerName;
subdomain.textContent = page.subdomain;
document.title = `${page.ownerName} — Hub pessoal`;

const initials = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();

const setCardTextContrast = (card, color) => {
  const sample = document.createElement("span");
  sample.style.color = color;
  document.body.append(sample);
  const channels = getComputedStyle(sample).color.match(/[\d.]+/g)?.slice(0, 3).map(Number);
  sample.remove();
  if (!channels || channels.length !== 3) return;

  const luminance = channels.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  }).reduce((total, value, index) => total + value * [0.2126, 0.7152, 0.0722][index], 0);
  const isLight = luminance > 0.179;
  card.style.setProperty("--card-text", isLight ? "#1c1c1e" : "#f5f5f7");
  card.style.setProperty("--card-muted", isLight ? "#4b4b52" : "#e2e2e7");
  card.style.setProperty("--card-text-shadow", isLight ? "0 1px 2px rgba(255,255,255,.55)" : "0 1px 2px rgba(0,0,0,.55)");
};

cards.forEach(({ name, description, image, background, backgroundOpacity, backgroundBaseColor, url }) => {
  const card = document.createElement("a");
  card.className = "card";
  if (backgroundBaseColor && CSS.supports("color", backgroundBaseColor)) {
    card.style.setProperty("--card-base-color", backgroundBaseColor);
    setCardTextContrast(card, backgroundBaseColor);
  }
  if (background) {
    card.classList.add("has-background");
    card.style.setProperty("--card-background-image", `url(${JSON.stringify(background)})`);
    const opacity = Number(backgroundOpacity);
    card.style.setProperty("--card-background-opacity", Number.isFinite(opacity) ? Math.min(1, Math.max(0, opacity)) : "0.35");
  }
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
