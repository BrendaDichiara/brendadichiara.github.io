// Get the main content container element
let content = document.getElementById('content')

// Get the sidebar, navbar and sidebar items containers
let navbar_items = document.getElementById("navbar-items");
let sidebar     = document.getElementById("sidebar");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
  } else {
    sidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
  sidebar.style.display = "none";
}

// load markdown content
function load_content(id) {
    fetch(`${id}.html`)
    .then(response => response.text())
    .then(text => {
        content.innerHTML = text
    })
    return true
}

function markdown_to_html(md) {
    return marked.parse(md)
}

function init() {
    load_content('about')
}

// utils.js o countdown.js

function startCountdown() {
  // Fecha objetivo (10 de marzo del próximo año)
  const targetDate = new Date(2025, 2, 10).getTime();

  // Actualiza el contador cada segundo
  const countdownFunction = setInterval(function() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Cálculos de tiempo
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Muestra el resultado en el elemento con id="countdown"
      document.getElementById("countdown").innerHTML = 
          days + "d " + hours + "h " 
          + minutes + "m " + seconds + "s ";

      // Si el conteo termina
      if (distance < 0) {
          clearInterval(countdownFunction);
          document.getElementById("countdown").innerHTML = "The event has started!";
      }
  }, 1000);
}

// Llama a la función al cargar la página
window.onload = function() {
  init(); // Tu función existente para cargar el contenido inicial
  startCountdown(); // Inicia el contador
};
