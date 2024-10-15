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

