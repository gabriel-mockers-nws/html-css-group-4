function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function supprimerPost(postId) {
  var postElement = document.getElementById(postId);
  if (postElement) {
    postElement.remove(); // Supprime l'élément du DOM
  }
}
