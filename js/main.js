const image = document.querySelector('img');
    let flowerBud = "images/flower-bud.jpg";
    let flowerGrown = "images/pink-flower.jpg";

    image.onmouseenter = (e) => {
       e.target.setAttribute('src', flowerGrown);
    };
    
    image.onmouseleave = (e) => {
       e.target.setAttribute('src', flowerBud);
    };
    

const clickMe = document.querySelector('button');
const picture = document.querySelector('#catImage');

picture.style.display = 'none';

clickMe.onclick = revealAndHide;

function revealAndHide() {
  if (picture.classList.contains('showing')) {
    picture.style.display = 'none';
    picture.classList.remove('showing');
  } else {
    picture.style.display = 'block';
    picture.classList.add('showing');
  }
}
