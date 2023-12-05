let scroll = document.querySelector('.main-screen-button');
scroll.addEventListener('click', function (e) {
  e.preventDefault();
  let target = document.getElementById('scrollDown');
  let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, 800);
    window.scrollTo(0, run);
    if (timeElapsed < 800) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
});
