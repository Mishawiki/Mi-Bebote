
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);
  const buttonLeft = document.querySelector('.carousel-button-left');
  const buttonRight = document.querySelector('.carousel-button-right');
  const slideWidth = items[0].getBoundingClientRect().width;

  items.forEach((item, index) => {
    item.style.left = `${slideWidth * index}px`;
  });

  const moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  }

  buttonLeft.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveSlide(track, currentSlide, prevSlide);
  });

  buttonRight.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveSlide(track, currentSlide, nextSlide);
  });
