document.addEventListener('DOMContentLoaded', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.form-control');

    let isSearchVisible = false; // Flag per tracciare lo stato del campo di ricerca

    // Aggiungi un event listener al click sulla lente di ingrandimento
    searchButton.addEventListener('click', function() {
        if (!isSearchVisible) {
            searchContainer.style.display = 'block'; // Mostra il campo di ricerca quando si fa clic sulla lente
            searchInput.focus(); // Metti il focus sul campo di ricerca
            isSearchVisible = true; // Imposta il flag su true
        } else {
            resetSearch(); // Se il campo di ricerca è già visibile, esegui la funzione per reimpostare
        }
    });

    // Aggiungi un event listener per nascondere il campo di ricerca quando si fa clic su un'altra parte della pagina
    document.addEventListener('click', function(event) {
        const isClickInsideSearch = searchButton.contains(event.target) || searchContainer.contains(event.target);
        if (!isClickInsideSearch) {
            resetSearch(); // Se il clic è al di fuori del campo di ricerca, reimposta
        }
    });

    // Funzione per reimpostare il campo di ricerca al suo stato iniziale
    function resetSearch() {
        searchContainer.style.display = 'none'; // Nascondi il campo di ricerca
        searchInput.value = ''; // Svuota il valore del campo di ricerca
        isSearchVisible = false; // Imposta il flag su false
    }
});
