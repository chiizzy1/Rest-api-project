  // Initialize Swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});


// document.querySelector('button').addEventListener('click', getData)

document.addEventListener('DOMContentLoaded', getData);
function getData(){


  fetch(`https://www.scorebat.com/video-api/v3/feed/?token=[MTc5NzJfMTY1MDgwNDY2MV8zMDE4MjQxOTJlODllOGU1ZTE4MzE5MmJlM2U2NDdiNzkzOGVhODcw]`)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    console.log(data.response);
    let availableMatchHighlights = data.response
    availableMatchHighlights.forEach((match, index) => {
      // console.log(match);
      appendDiv(match)
    });
  })
  .catch(err => console.error(err));

}

function appendDiv(match){

let div = document.createElement('div') 
div.classList.add('card', 'swiper-slide')
div.innerHTML = `
      <p class="match-title">${match.title}</p>
      <img src="${match.thumbnail}" alt="image" class="cover-img">
      <span class="league">${match.competition}</span>
      <span class="date">${match.date}</span>
      <a target="_blank" class="watch-btn" href="${match.matchviewUrl}">Watch</a>
      
    ` 
const competition = match.competition;
let display = document.querySelector('.view-carousel')
switch (competition) {
  case 'ENGLAND: Premier League':
        document.querySelector('.epl').addEventListener('click', ()=>{
            display.append(div)
        })
        break;

  case 'GERMANY: Bundesliga':
        document.querySelector('.bundesliga').addEventListener('click', ()=>{
            display.append(div)
        })
        break;

  case 'FRANCE: Ligue 1':
        document.querySelector('.league-1').addEventListener('click', ()=>{
            display.append(div)
        })
        break;

  case 'ITALY: Serie A':
        document.querySelector('.seria-a').addEventListener('click', ()=>{
            display.append(div)
        })
        break;

  case 'SPAIN: La Liga':
        document.querySelector('.la-liga').addEventListener('click', ()=>{
            display.append(div)
        })
        break;

  default:
        document.querySelector('.others').addEventListener('click', ()=>{
            display.append(div)
        })
}
} 