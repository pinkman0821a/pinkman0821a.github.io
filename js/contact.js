// Inicializar EmailJS con tu public key
emailjs.init('ZoASGUoa7vruCDQ3k');

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  formMessage.textContent = '';
  formMessage.style.color = '';

  const name = form.user_name.value.trim();
  const email = form.user_email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    showMessage('Por favor ingresa tu nombre.', 'red');
    return;
  }
  if (!validateEmail(email)) {
    showMessage('Por favor ingresa un correo válido.', 'red');
    return;
  }
  if (!message) {
    showMessage('Por favor escribe un mensaje.', 'red');
    return;
  }

  showMessage('Enviando mensaje...', '#6a4bcf');

  emailjs.send('service_128fkrq', 'template_rqjrtlp', {
    user_name: name,
    user_email: email,
    message: message
  }).then(function() {
    showMessage('¡Gracias por contactarme! Te responderé pronto.', 'green');
    form.reset();
  }, function(error) {
    showMessage('Error al enviar el mensaje, intenta más tarde.', 'red');
    console.error('EmailJS error:', error);
  });
});

function showMessage(msg, color) {
  formMessage.textContent = msg;
  formMessage.style.color = color;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
