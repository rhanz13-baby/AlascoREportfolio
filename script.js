document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.carousel-track');
  tracks.forEach(track => {
    if (!track.dataset.duplicated) {
      track.innerHTML += track.innerHTML;
      track.dataset.duplicated = "true"; 
    }
  });
});