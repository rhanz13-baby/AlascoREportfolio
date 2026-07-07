document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.carousel-track');
  tracks.forEach(track => {
    if (!track.dataset.duplicated) {
      track.innerHTML += track.innerHTML;
      track.dataset.duplicated = "true"; 
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
 
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (l) {
                l.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
});