// Fitur Filter Pencarian Buku Secara Real-time
document.getElementById('searchInput').addEventListener('keyup', function(e) {
    const searchText = e.target.value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');

    bookCards.forEach(function(card) {
        const title = card.getAttribute('data-title').toLowerCase();
        const author = card.getAttribute('data-author').toLowerCase();

        if (title.includes(searchText) || author.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
