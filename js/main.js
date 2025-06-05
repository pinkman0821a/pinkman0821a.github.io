// ===============================
// Script principal para index.html
// Funcionalidades: menú móvil, scroll animado y botón subir arriba
// ===============================

// Esperar que cargue todo el DOM
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. MENÚ RESPONSIVE - Abrir/Cerrar menú en móviles
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if(menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active'); // activa/desactiva clase para mostrar menú
    });
  }

  // 2. BOTÓN SUBIR ARRIBA
  const btnScrollTop = document.createElement('button');
  btnScrollTop.innerHTML = '⬆️';
  btnScrollTop.id = 'btnScrollTop';
  btnScrollTop.title = 'Volver arriba';
  document.body.appendChild(btnScrollTop);

  // Estilo básico desde JS (puedes mejorarlo en CSS)
  btnScrollTop.style.position = 'fixed';
  btnScrollTop.style.bottom = '30px';
  btnScrollTop.style.right = '30px';
  btnScrollTop.style.padding = '10px 15px';
  btnScrollTop.style.fontSize = '20px';
  btnScrollTop.style.border = 'none';
  btnScrollTop.style.borderRadius = '50%';
  btnScrollTop.style.backgroundColor = '#6a4bcf';
  btnScrollTop.style.color = '#fff';
  btnScrollTop.style.cursor = 'pointer';
  btnScrollTop.style.boxShadow = '0 5px 12px rgba(106, 75, 207, 0.6)';
  btnScrollTop.style.display = 'none'; // oculto al inicio
  btnScrollTop.style.zIndex = '1000';

  // Mostrar botón cuando scroll es mayor a 300px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnScrollTop.style.display = 'block';
    } else {
      btnScrollTop.style.display = 'none';
    }
  });

  // Al hacer click en el botón, hacer scroll suave hacia arriba
  btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. ANIMACIÓN SUAVE AL HACER SCROLL (fade-in para secciones)
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

});
