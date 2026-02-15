// ============================================
// TODO 1: Datos de la entidad (Tienda infantil)
// ============================================
const entityData = {
  name: "PequeModa Kids",
  description: "Tienda especializada en ropa infantil cómoda, moderna y de alta calidad para bebés y niños.",

  contact: {
    email: "contacto@pequemodakids.com",
    phone: "3001234567"
  },

  items: [
    { name: "Camiseta infantil", level: 80, category: "Ropa" },
    { name: "Vestido para niña", level: 90, category: "Ropa" },
    { name: "Pantalón corto", level: 75, category: "Ropa" },
    { name: "Chaqueta infantil", level: 85, category: "Ropa" },
    { name: "Zapatos deportivos", level: 70, category: "Calzado" },
    { name: "Gorras", level: 60, category: "Accesorios" }
  ],

  links: [
    { platform: "Instagram", url: "https://www.instagram.com/bibiw_ear?igsh=dDV4bWE0a2NzeWhj", icon: "📸" },
    { platform: "Facebook", url: "https://facebook.com", icon: "📘" },
    { platform: "WhatsApp", url: "https://wa.me/573001234567", icon: "💬" }
  ],

  stats: {
    total: 6,
    active: 5,
    rating: 4.7,
    custom: 120
  }
};

// ============================================
// TODO 2: Referencias al DOM (adaptadas a tu HTML)
// ============================================

// Información principal
const entityName = document.getElementById('userName');
const entityDescription = document.getElementById('userTitle');
const userLocation = document.getElementById('userLocation');
const userBio = document.getElementById('userBio');

// Contacto
const userEmail = document.getElementById('userEmail');
const userPhone = document.getElementById('userPhone');
const copyBtn = document.getElementById('copyEmailBtn');

// Skills (items)
const itemsList = document.getElementById('skillsList');
const toggleItemsBtn = document.getElementById('toggleSkills');

// Links sociales
const linksContainer = document.getElementById('socialLinks');

// Estadísticas
const statsContainer = document.getElementById('stats');

// Tema
const themeToggle = document.getElementById('themeToggle');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ============================================
// TODO 3: Renderizar información básica
// ============================================
const renderBasicInfo = () => {
  const { name, description } = entityData;

  entityName.textContent = name;
  entityDescription.innerHTML = `<p>${description}</p>`;
};

// ============================================
// TODO 4: Renderizar productos
// ============================================
const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow.map(item => {
    const { name, level } = item;
    return `
      <div class="item">
        <div class="item-name">${name}</div>
        <div class="item-level">
          <span>Popularidad: ${level}%</span>
          <div class="level-bar">
            <div class="level-fill" style="width: ${level}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  itemsList.innerHTML = itemsHtml;
};

// ============================================
// TODO 5: Renderizar enlaces
// ============================================
const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links.map(link => `
    <a href="${link.url}" target="_blank" class="link">
      ${link.icon} ${link.platform}
    </a>
  `).join('');

  linksContainer.innerHTML = linksHtml;
};

// ============================================
// TODO 6: Renderizar estadísticas
// ============================================
const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: "Productos", value: stats.total },
    { label: "Disponibles", value: stats.active },
    { label: "Calificación", value: stats.rating },
    { label: "Ventas", value: stats.custom }
  ];

  const statsHtml = statsArray.map(stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// TODO 7: Tema claro / oscuro
// ============================================
const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.dataset.theme = newTheme;
  themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme') ?? 'light';
  document.documentElement.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
};

// ============================================
// TODO 8: Copiar información
// ============================================
const copyInfo = () => {
  const { name, description, contact } = entityData;

  const infoText = `
${name}
${description}
Contacto: ${contact.email}
Teléfono: ${contact.phone}
  `.trim();

  navigator.clipboard.writeText(infoText);
  showToast("¡Información copiada!");
};

// Toast
const showToast = message => {
  toastMessage.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

// ============================================
// TODO 9: Mostrar / ocultar productos
// ============================================
let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;
  renderItems(showingAllItems);
  toggleItemsBtn.textContent = showingAllItems ? "Mostrar menos" : "Mostrar más";
};

// ============================================
// TODO 10: Event listeners
// ============================================
themeToggle.addEventListener("click", toggleTheme);
copyBtn.addEventListener("click", copyInfo);
toggleItemsBtn.addEventListener("click", handleToggleItems);

// ============================================
// TODO 11: Inicializar app
// ============================================
const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();
  console.log("✅ Tienda infantil inicializada correctamente");
};

document.addEventListener("DOMContentLoaded", init);
