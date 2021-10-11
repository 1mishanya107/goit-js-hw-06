const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGallery = document.querySelector('.gallery')

const makeGallery = images.map(image => `<li class='item'><img class='photo' src=${image.url} alt=${image.alt}></li>`
// {


//   const itemEl = document.createElement('li')
//   itemEl.classList.add('item')
//   const imgEl = itemEl.createElement('img')
//   imgEl.src = image.url
//   imgEl.alt = image.alt
//   // console.log(imgEl.url)
//   // console.log(imgEl.alt)
//   console.log(imgEl)
//  return itemEl
// }

)

// console.log(makeGallery.join(''))

listGallery.insertAdjacentHTML('beforeend', makeGallery.join(''))

// listGallery.append(...makeGallery)