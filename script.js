// ===== PRELOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1800);
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== MOBILE MENU =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== MENU TABS =====
const menuData = {
  kahve: [
    { name: 'Maré Signature Latte', desc: 'Fındık aromalı özel harman, ipeksi süt köpüğü', tags: ['Özel', 'Bestseller'], price: '₺185' },
    { name: 'Osmanlı Türk Kahvesi', desc: 'Geleneksel cezve, damla sakızlı, lokum eşliğinde', tags: ['Geleneksel'], price: '₺145' },
    { name: 'Cold Brew Tonic', desc: '24 saat demleme, premium tonik, portakal kabuğu', tags: ['Serinletici'], price: '₺165' },
    { name: 'Lavanta Cappuccino', desc: 'İtalyan espresso, lavanta şurubu, art latte', tags: ['Favori'], price: '₺175' },
    { name: 'Matcha Ceremonial', desc: "Japonya'dan ithal matcha, yulaf sütü, bal", tags: ['Vegan'], price: '₺195' },
    { name: 'Affogato al Tartufo', desc: 'Çift shot espresso, trüf dondurma, bitter çikolata', tags: ['Premium'], price: '₺220' }
  ],
  tatli: [
    { name: 'Maré Baklava Tabağı', desc: 'Antep fıstıklı, altın yapraklı, özel şerbet', tags: ['İmza', 'Bestseller'], price: '₺280' },
    { name: 'Çikolata Fondü', desc: 'Belçika çikolatası, mevsim meyveleri, marshmallow', tags: ['Paylaşımlık'], price: '₺320' },
    { name: 'Künefe Royale', desc: 'Tel kadayıf, mozzarella, Antep fıstığı, kaymak', tags: ['Sıcak'], price: '₺240' },
    { name: 'Tiramisu alla Maré', desc: 'Mascarpone, espresso, kakao, lady finger', tags: ['Klasik'], price: '₺210' },
    { name: 'Cheesecake Boğaz', desc: 'New York usulü, frambuaz coulis, taze meyve', tags: ['Favori'], price: '₺230' },
    { name: 'Sütlaç Ottoman', desc: 'Fırın sütlaç, tarçın, gül yaprağı', tags: ['Geleneksel'], price: '₺165' }
  ],
  kahvalti: [
    { name: 'Maré Serpme Kahvaltı', desc: '25+ çeşit, bal kaymak, taze pişmiş simit & poğaça', tags: ['2 Kişilik', 'Bestseller'], price: '₺850' },
    { name: 'Eggs Benedict Royale', desc: 'Somon füme, poşe yumurta, hollandaise sos', tags: ['Premium'], price: '₺320' },
    { name: 'Avokado Toast', desc: 'Ekşi maya ekmek, avokado, poşe yumurta, chili', tags: ['Sağlıklı'], price: '₺260' },
    { name: 'French Toast Deluxe', desc: 'Brioche, mevsim meyveleri, akçaağaç şurubu', tags: ['Tatlı'], price: '₺240' },
    { name: 'Menemen Kaşarlı', desc: 'Köy yumurtası, taze domates, biber, kaşar peyniri', tags: ['Geleneksel'], price: '₺195' },
    { name: 'Açma & Börek Tabağı', desc: 'El açması börekler, peynirli, patatesli, kıymalı', tags: ['Ev Yapımı'], price: '₺220' }
  ],
  kokteyl: [
    { name: 'Boğaz Sunset', desc: 'Gin, kan portakalı, rozmarin, tonik', tags: ['İmza', 'Bestseller'], price: '₺280' },
    { name: 'Ottoman Negroni', desc: 'Türk kahvesi infüzyonlu gin, Campari, vermut', tags: ['Güçlü'], price: '₺310' },
    { name: 'Lavender Dreams', desc: 'Vodka, lavanta şurubu, limon, prosecco', tags: ['Hafif'], price: '₺265' },
    { name: 'Maré Mocktail', desc: 'Nar suyu, gül suyu, limonata, nane', tags: ['Alkolsüz'], price: '₺165' },
    { name: 'Espresso Martini', desc: 'Vodka, kahve likörü, taze espresso, vanilya', tags: ['Klasik'], price: '₺290' },
    { name: 'Turkish Delight', desc: 'Rakı infüzyonlu votka, lokum şurubu, anason', tags: ['Özel'], price: '₺295' }
  ]
};

document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const category = tab.dataset.tab;
    const items = menuData[category];
    const menuList = document.getElementById('menuList');
    menuList.innerHTML = items.map(item => `
      <div class="menu-item">
        <div class="menu-item-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        <div class="menu-item-price">${item.price}</div>
      </div>
    `).join('');
  });
});

// ===== RESERVATION FORM =====
document.getElementById('reservationForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('formSubmitBtn');
  btn.textContent = 'Gönderiliyor...';
  btn.style.opacity = '0.7';
  setTimeout(() => {
    btn.textContent = '✓ Rezervasyon Alındı!';
    btn.style.background = '#2a5a42';
    btn.style.color = '#f5f0e8';
    btn.style.opacity = '1';
    setTimeout(() => {
      btn.textContent = 'Rezervasyon Oluştur';
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 3000);
  }, 1500);
});

// ===== NEWSLETTER FORM =====
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Abone Olundu!';
  setTimeout(() => {
    btn.textContent = 'Abone Ol';
    e.target.reset();
  }, 2500);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== PARALLAX HERO =====
window.addEventListener('scroll', () => {
  const hero = document.getElementById('heroBgImg');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.transform = `scale(1.1) translateY(${scrolled * 0.15}px)`;
  }
});
