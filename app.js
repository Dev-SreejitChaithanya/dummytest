// ============================================================
//  Amaizing Taste – V4 Kerala Luxury Storefront
//  app.js – Data Layer, SPA Routing & UI Logic
// ============================================================

'use strict';

// ── Product Database ─────────────────────────────────────────
const COLLECTIONS = [
  {
    id: 'pickles',
    name: 'Artisan Pickles & Preserves',
    tagline: 'Age-old Kerala recipes, preserved with love',
    icon: '🫙',
    image: 'assets/images/mango_pickle_jar.png',
    description: 'Handcrafted in small batches using traditional recipes passed down through generations of Kerala households.',
    products: [
      { id: 'p1', name: 'Mango Preserves', price: 320, image: 'assets/images/v4_mango_pickle.png', desc: 'Raw Kerala mango slow-cured in aromatic spice brine', weight: '250g', badge: 'Bestseller' },
      { id: 'p2', name: "Veg Pickle's", price: 280, image: 'assets/images/v4_luxury_box.png', desc: 'Mixed seasonal vegetables pickled in mustard oil & spices', weight: '300g', badge: '' },
      { id: 'p3', name: 'Traditional Kerala Preserves', price: 350, image: 'assets/images/v4_luxury_box.png', desc: 'Authentic thokku-style preserve using heirloom varieties', weight: '200g', badge: 'Heritage' }
    ]
  },
  {
    id: 'spices',
    name: 'Exotic Spice Collection',
    tagline: 'From the spice gardens of Wayanad & Idukki',
    icon: '🌿',
    image: 'assets/images/v4_spices.png',
    description: 'Single-estate spices, hand-selected from the high-altitude gardens of Kerala. Pure, potent, and unblended.',
    products: [
      { id: 'p4', name: 'Green Cardamom [8mm+]', price: 890, image: 'assets/images/spice_packaging.png', desc: 'Premium large-pod cardamom, hand-sorted from Idukki', weight: '100g', badge: 'Grade A' },
      { id: 'p5', name: 'Black Pepper', price: 420, image: 'assets/images/v4_luxury_box.png', desc: 'Tellicherry pepper — bold, pungent, earthy', weight: '200g', badge: '' },
      { id: 'p6', name: 'Curry Spice Blend', price: 360, image: 'assets/images/v4_luxury_box.png', desc: 'House-ground Kerala curry masala with 14 spices', weight: '150g', badge: 'Exclusive' },
      { id: 'p7', name: 'Microgreens Powder', price: 480, image: 'assets/images/v4_luxury_box.png', desc: 'Freeze-dried moringa & spirulina microgreens blend', weight: '80g', badge: 'Superfood' }
    ]
  },
  {
    id: 'sundried',
    name: 'Sun-Cured Delicacies',
    tagline: 'Preserved by the Kerala sun, eaten through the year',
    icon: '☀️',
    image: 'assets/images/sundried_packaging.png',
    description: 'Traditional sun-drying is an ancient Kerala art. Each piece retains the full depth of tropical flavour — naturally concentrated.',
    products: [
      { id: 'p8', name: 'Sun-Dried Jackfruit', price: 380, image: 'assets/images/v4_jackfruit.png', desc: 'Slow solar-dried chakka — chewy, caramel-sweet, tropical', weight: '200g', badge: 'Traditional' },
      { id: 'p9', name: 'Sun-Dried Tapioca', price: 220, image: 'assets/images/v4_luxury_box.png', desc: 'Crispy kappa chips, sun-dried and spice dusted', weight: '250g', badge: '' },
      { id: 'p10', name: 'Sun-Dried Mango', price: 340, image: 'assets/images/v4_mango_pickle.png', desc: 'Tart Alphonso mango slices dried in tropical sunlight', weight: '150g', badge: 'Seasonal' }
    ]
  },
  {
    id: 'snacks',
    name: 'Gourmet Snack Selection',
    tagline: 'Kerala\'s beloved snacks, elevated for the connoisseur',
    icon: '🍌',
    image: 'assets/images/v4_banana_chips.png',
    description: 'Classic Kerala snacks crafted with heritage ingredients. Each bite carries the warmth of a traditional Kerala kitchen.',
    products: [
      { id: 'p11', name: 'Banana Chips', price: 260, image: 'assets/images/v4_banana_chips.png', desc: 'Wafer-thin Nendran banana chips fried in coconut oil', weight: '300g', badge: 'Bestseller' },
      { id: 'p12', name: 'Tapioca Chips', price: 220, image: 'assets/images/v4_luxury_box.png', desc: 'Crispy kappa chips seasoned with rock salt & chilli', weight: '300g', badge: '' },
      { id: 'p13', name: 'Avalose Powder', price: 290, image: 'assets/images/v4_luxury_box.png', desc: 'Roasted rice-coconut powder, a traditional Kerala sweet', weight: '250g', badge: 'Heritage' }
    ]
  },
  {
    id: 'hampers',
    name: 'Luxury Gift Hampers',
    tagline: 'Curated Kerala gifting for those who appreciate the finest',
    icon: '🎁',
    image: 'assets/images/v4_hamper.png',
    description: 'Elegantly curated hampers celebrating the richness of Kerala. Each box is handpacked and tied with signature gold silk ribbon.',
    products: [
      { id: 'p14', name: 'Spice Collection Box', price: 1890, image: 'assets/images/v4_spices.png', desc: 'Curated set of 4 premium single-estate spices', weight: 'Set of 4', badge: 'Gift Ready' },
      { id: 'p15', name: 'Snack Combo Box', price: 1490, image: 'assets/images/v4_banana_chips.png', desc: 'Assorted Kerala snack collection in a signature box', weight: '5 items', badge: '' },
      { id: 'p16', name: 'Premium Kerala Hamper', price: 3490, image: 'assets/images/v4_luxury_box.png', desc: 'The ultimate Kerala luxury hamper — 12 curated items', weight: '12 items', badge: 'Luxury' }
    ]
  },
  {
    id: 'harvest',
    name: 'Fresh Harvest Selection',
    tagline: 'From Kerala\'s groves to your home, farm-fresh',
    icon: '🥥',
    image: 'assets/images/v4_oil.png',
    description: 'Seasonal harvests from our partner farms in Thrissur and Ernakulam, delivered with care and minimal processing.',
    products: [
      { id: 'p17', name: 'Cold Pressed Coconut Oil', price: 680, image: 'assets/images/v4_oil.png', desc: 'Wood-pressed virgin coconut oil from Thrissur farms', weight: '500ml', badge: 'Pure' },
      { id: 'p18', name: 'Fresh Fruits', price: 580, image: 'assets/images/v4_luxury_box.png', desc: 'Seasonal rambutan & avocado from high-altitude gardens', weight: '1kg', badge: 'Seasonal' },
      { id: 'p19', name: 'Herbal Plants', price: 390, image: 'assets/images/v4_luxury_box.png', desc: 'Curated medicinal herb saplings — tulsi, moringa, curry leaf', weight: '3 plants', badge: '' }
    ]
  },
  {
    id: 'ecoliving',
    name: 'Eco-Luxury Living',
    tagline: 'Bamboo & vetiver craftsmanship from Kerala artisans',
    icon: '🌾',
    image: 'assets/images/ecoliving_packaging.png',
    description: 'Artisan-made products from sustainable bamboo and Ramacham vetiver, crafted by master weavers in rural Kerala.',
    products: [
      { id: 'p20', name: 'Vetiver [Ramacham] Products', price: 520, image: 'assets/images/v4_vetiver.png', desc: 'Hand-crafted Ramacham mats, sachets, and bath products', weight: 'Assorted', badge: 'Artisan' },
      { id: 'p21', name: 'Bamboo Handcrafted Items', price: 680, image: 'assets/images/v4_luxury_box.png', desc: 'Sustainable hand-woven bamboo baskets & utility items', weight: 'Assorted', badge: 'Eco' }
    ]
  }
];

// ── State ────────────────────────────────────────────────────
let cart = [];
let currentCollection = null;

// ── DOM References ───────────────────────────────────────────
const homeView = () => document.getElementById('home-view');
const collectionView = () => document.getElementById('collection-view');
const cartDrawer = () => document.getElementById('cart-drawer');
const cartOverlay = () => document.getElementById('cart-overlay');
const cartItemsEl = () => document.getElementById('cart-items');
const cartCountEl = () => document.querySelectorAll('.cart-count');
const cartTotalEl = () => document.getElementById('cart-total');
const enquiryModal = () => document.getElementById('enquiry-modal');

// ── Render Homepage Grid ─────────────────────────────────────
function renderHomepage() {
  const grid = document.getElementById('collections-grid');
  if (!grid) return;

  grid.innerHTML = COLLECTIONS.map(col => `
    <div class="collection-card" onclick="openCollection('${col.id}')" role="button" tabindex="0" aria-label="Open ${col.name}" onkeydown="if(event.key==='Enter')openCollection('${col.id}')">
      <div class="card-image-wrap">
        <img src="${col.image}" alt="${col.name}" loading="lazy" onerror="this.src='assets/images/v4_luxury_box.png'">
        <div class="card-icon">${col.icon}</div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${col.name}</h3>
        <p class="card-tagline">${col.tagline}</p>
        <div class="card-cta">
          <span class="card-count">${col.products.length} products</span>
          <span class="card-arrow">Explore →</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Open Collection Page (SPA Route) ────────────────────────
function openCollection(id) {
  const col = COLLECTIONS.find(c => c.id === id);
  if (!col) return;
  currentCollection = col;

  // Switch views
  homeView().style.display = 'none';
  const cv = collectionView();
  cv.style.display = 'block';
  cv.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Render breadcrumb header
  document.getElementById('collection-header-name').textContent = col.name;
  document.getElementById('collection-header-desc').textContent = col.description;
  document.getElementById('collection-header-icon').textContent = col.icon;

  // Render sub-products
  const grid = document.getElementById('products-grid');
  grid.innerHTML = col.products.map(p => `
    <div class="product-card">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='assets/images/v4_luxury_box.png'">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <h4 class="product-name">${p.name}</h4>
        <p class="product-desc">${p.desc}</p>
        <div class="product-meta">
          <span class="product-weight">⚖ ${p.weight}</span>
          <span class="product-price">₹${p.price}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart btn-add-cart--full" onclick="addToCart('${p.id}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Close Collection Page / Go Back ─────────────────────────
function closeCollection() {
  collectionView().style.display = 'none';
  homeView().style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  currentCollection = null;
}

// Expose globally for inline onclick and keyboard handlers
window.openCollection = openCollection;
window.closeCollection = closeCollection;

// ── Cart Logic ───────────────────────────────────────────────
const MAX_QTY = 10;

function addToCart(productId) {
  const product = COLLECTIONS.flatMap(c => c.products).find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty >= MAX_QTY) {
      showToast(`Max ${MAX_QTY} units allowed per item`);
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  openCart();
  showToast(`${product.name} added to cart`);
}
window.addToCart = addToCart;

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}
window.removeFromCart = removeFromCart;

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (delta > 0 && item.qty >= MAX_QTY) {
    showToast(`Max ${MAX_QTY} units allowed per item`);
    return;
  }
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}
window.changeQty = changeQty;

function updateCartUI() {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const count = cart.reduce((sum, i) => sum + i.qty, 0);

  cartCountEl().forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });

  if (cartTotalEl()) cartTotalEl().textContent = `₹${total.toLocaleString('en-IN')}`;
  const t2 = document.getElementById('cart-total-2');
  if (t2) t2.textContent = `₹${total.toLocaleString('en-IN')}`;

  const cartItemsContainer = cartItemsEl();
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍️</div>
        <p>Your bag is empty</p>
        <span>Discover Kerala's finest produce</span>
      </div>`;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='assets/images/v4_luxury_box.png'">
      <div class="cart-item-info">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
        <div class="cart-qty">
          <button onclick="changeQty('${item.id}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}', 1)" ${item.qty >= MAX_QTY ? 'disabled' : ''}>+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">✕</button>
    </div>
  `).join('');
}

function openCart() {
  cartDrawer().classList.add('open');
  cartOverlay().classList.add('open');
  document.body.classList.add('no-scroll');
}
window.openCart = openCart;

function closeCart() {
  cartDrawer().classList.remove('open');
  cartOverlay().classList.remove('open');
  document.body.classList.remove('no-scroll');
  // Always reset to step 1 when closing
  goToCartStep1();
}
window.closeCart = closeCart;

// ── Checkout Step Navigation ────────────────────────────────────
function goToCheckoutStep2() {
  if (cart.length === 0) {
    showToast('Add items to your bag first');
    return;
  }
  document.getElementById('cart-step-1').style.display = 'none';
  const step2 = document.getElementById('cart-step-2');
  step2.style.display = 'flex';
  // Update step indicators
  document.getElementById('step-dot-1').classList.remove('active');
  document.getElementById('step-dot-2').classList.add('active');
  document.getElementById('cart-title').textContent = '📦 Delivery Details';
}
window.goToCheckoutStep2 = goToCheckoutStep2;

function goToCartStep1() {
  document.getElementById('cart-step-2').style.display = 'none';
  document.getElementById('cart-step-1').style.display = 'block';
  // Reset step indicators
  document.getElementById('step-dot-1').classList.add('active');
  document.getElementById('step-dot-2').classList.remove('active');
  document.getElementById('cart-title').textContent = '🛍 Your Bag';
}
window.goToCartStep1 = goToCartStep1;

// ── WhatsApp Enquiry ─────────────────────────────────────────
function whatsappEnquiry(name, price) {
  const msg = encodeURIComponent(`Hi Amaizing Taste! I'm interested in ordering *${name}* (₹${price}). Please share more details.`);
  window.open(`https://wa.me/918078020806?text=${msg}`, '_blank');
}
window.whatsappEnquiry = whatsappEnquiry;

// -- WhatsApp Order (with delivery details) ----------------------------
function placeWhatsAppOrder() {
  var name    = document.getElementById('co-name').value.trim();
  var address = document.getElementById('co-address').value.trim();
  var phone   = document.getElementById('co-phone').value.trim();
  if (!name || !address || !phone) { showToast('Please fill in all delivery details'); return; }
  if (cart.length === 0) { showToast('Your bag is empty'); return; }
  var items = cart.map(function(i) {
    return '   ' + i.name + ' (x' + i.qty + ') = Rs.' + (i.price * i.qty).toLocaleString('en-IN');
  }).join('\n');
  var total = cart.reduce(function(s, i) { return s + i.price * i.qty; }, 0);
  var msg = '*New Order - Amaizing Taste*' + '\n\n' +
    '*Customer Details*' + '\n' +
    'Name    : ' + name + '\n' +
    'Phone   : ' + phone + '\n' +
    'Address : ' + address + '\n\n' +
    '*Order Summary*' + '\n' +
    items + '\n\n' +
    '*Total  : Rs.' + total.toLocaleString('en-IN') + '*' + '\n\n' +
    'Please confirm my order. Thank you!';
  window.open('https://wa.me/918078020806?text=' + encodeURIComponent(msg), '_blank');
  closeCart();
  showToast('Order sent! We will confirm shortly.');
}
window.placeWhatsAppOrder = placeWhatsAppOrder;
window.placeWhatsAppOrder = placeWhatsAppOrder;

// ── Enquiry Modal ────────────────────────────────────────────
function openEnquiryModal() {
  enquiryModal().classList.add('open');
  document.body.classList.add('no-scroll');
}
window.openEnquiryModal = openEnquiryModal;

function closeEnquiryModal() {
  enquiryModal().classList.remove('open');
  document.body.classList.remove('no-scroll');
}
window.closeEnquiryModal = closeEnquiryModal;

function submitEnquiry(e) {
  e.preventDefault();
  const name = document.getElementById('eq-name').value;
  const phone = document.getElementById('eq-phone').value;
  const msg = document.getElementById('eq-message').value;
  const wa = encodeURIComponent(`New Enquiry from ${name} (${phone}):\n\n${msg}`);
  window.open(`https://wa.me/918078020806?text=${wa}`, '_blank');
  closeEnquiryModal();
}
window.submitEnquiry = submitEnquiry;

// ── Toast Notification ───────────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── Mobile Menu ──────────────────────────────────────────────
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
window.toggleMobileMenu = toggleMobileMenu;

// ── Theme Switcher Logic ───────────────────────────────────────
const LS_THEME_KEY = 'amazing_taste_theme';

function setTheme(themeName) {
  document.body.classList.remove('theme-terracotta', 'theme-indigo', 'theme-plum');
  if (themeName !== 'forest') {
    document.body.classList.add(`theme-${themeName}`);
  }
  localStorage.setItem(LS_THEME_KEY, themeName);
  document.querySelectorAll('.theme-dot').forEach(dot => {
    const isCurrent = dot.getAttribute('data-theme') === themeName;
    dot.classList.toggle('active', isCurrent);
    dot.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
  });
}

function initThemeSwitcher() {
  const savedTheme = localStorage.getItem(LS_THEME_KEY) || 'forest';
  setTheme(savedTheme);
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.getAttribute('data-theme');
      setTheme(theme);
      showToast(`Switched theme to ${dot.getAttribute('title')}`);
    });
  });
}

// ── Scroll effects ───────────────────────────────────────────
function handleScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomepage();
  updateCartUI();

  // Ensure home visible, collection hidden on load
  homeView().style.display = 'block';
  collectionView().style.display = 'none';

  // Scroll listener
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Initialize Theme Switcher
  initThemeSwitcher();

  // Close cart on overlay click
  document.getElementById('cart-overlay').addEventListener('click', closeCart);

  // Keyboard: close drawers on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeCart();
      closeEnquiryModal();
    }
  });
});
