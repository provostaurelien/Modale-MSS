
//Définition des constantes globales
const modal = document.getElementById("modal");
// Fonction pour fermer la modale
function closeModal() {
    modal.classList.remove("visible"); // Retire la classe pour masquer la modale
}


  document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne l'élément du bouton d'ouverture de la modale
    const openModalLink = document.getElementById("buttonMSS");
 
  
  
        
  
    // Fonction pour ouvrir la modale ou revenir à la page d'accueil de la modale
    function openModal(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien
      modal.classList.add("visible"); // Ajoute la classe pour affichage fenetre
    }
  
   // Ajoute l'événement de clic pour ouvrir la modale
   if (openModalLink) {
    openModalLink.addEventListener("click", openModal);
}

// Sélectionne le bouton "Annuler"
const buttonAnnuler = document.getElementById("buttonAnnuler");
  

     // Ajoute l'événement de clic pour fermer la modale lorsque "Annuler" est cliqué
     if (buttonAnnuler) {
        buttonAnnuler.addEventListener("click", closeModal);
    }



  });