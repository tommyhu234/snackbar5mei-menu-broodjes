const items = document.querySelectorAll('.carousel-item');
let current = 0;
const intervalTime = 10 * 1000;

function showNextItem() {
  items[current].classList.remove('active');
  current = (current + 1) % items.length;
  console.log(current);
  items[current].classList.add('active');
}

setInterval(showNextItem, intervalTime);