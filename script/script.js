document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('movieGrid');
  const modal = document.getElementById('movieModal');
  const modalContent = document.getElementById('modalContent');

  films.forEach(film => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url(${film.image})`;
    card.addEventListener('click', () => showModal(film));
    grid.appendChild(card);
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  function showModal(film) {
    modalContent.innerHTML = `
      <div class="media-section">
        <iframe src="${film.trailer}" frameborder="0" allowfullscreen></iframe>
        <img src="${film.image}" alt="${film.title} poster">
      </div>
      <div class="scroll-inner">
        <h2>${film.title}</h2> 
        <p>${film.description}</p>
        <h2>Director</h2>
        <p>${film.director}</p>
        <h2>Cast</h2>
        <p>${film.cast}</p>
        <h2>Publication Year</h2>
        <p>${film.year}</p>
        <h2>Duration</h2>
        <p>${film.duration}</p>
        <h2>Type</h2>
        <p>${film.type}</p>
        <h2>IMDb Score</h2>
        <p>${film.imdb}</p>
      </div>
    `;
    modal.style.display = 'flex';
    document.body.style.overflow = "hidden";
    modalContent.scrollTop = 0;
  }

  function closeModal() {
    modal.style.display = 'none';
    modalContent.innerHTML = "";
    document.body.style.overflow = "auto";
    stopVideos(modal);
  }

  function stopVideos(modal) {
    const iframes = modal.querySelectorAll("iframe");
    iframes.forEach((iframe) => {
      iframe.src = iframe.src;
    });
  }
});
