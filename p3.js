let url ="https://api.nasa.gov/planetary/apod?api_key=qCGafYlQab7AcoyLTfyG5UosK7p1noLEvlU6oaEy&date=";
let year = "1999";
let month = "12";
let day = 21;

let btn1 = document.querySelector("#bt1");
let btn2 = document.querySelector("#bt2");
let imgContainer = document.querySelector("img");
let index = 0;

async function fetchImages() {
  let results = [];

  for (let i = 0; i < 5; i++) {
    let res = await axios(`${url}${year}-${month}-${day + i}`);
    results.push(res.data);
  }

  imgContainer.src = results[0].url;

  btn1.addEventListener("click", () => slideShowMinus(results));
  btn2.addEventListener("click", () => slideShowPlus(results));
}

fetchImages();

// slides => [{url: "asfasfosijfdas"}, {url: 'asfdsafasd'}]

function slideShowPlus(slides) {
  if (index < slides.length - 1) {
    index++;
    imgContainer.src = slides[index].url;
  } else {
    index = 0;
    imgContainer.src = slides[index].url;
  }
}

function slideShowMinus(slides) {
  if (index > 0) {
    index--;
    imgContainer.src = slides[index].url;
  } else {
    index = 4;
    imgContainer.src = slides[index].url;
  }
}






































// let url = "https://api.nasa.gov/planetary/apod?api_key=xeOkA8fAHKg2aQW2sfFy69kVm9l9rcCdXRmXm5zc"

// // --------------------------
























// let randomImg = document.querySelector(".pic-container");
// let bb = document.getElementById('bt1')
// let fb = document.getElementById('bt2')


// // -----event listeners------


// bb.addEventListener("click", picBackward)
// fb.addEventListener("click", picForward)

// // ---------fetch url---------

// fetch(url) 
//   .then(res => res.json())
//   .then(data => {
//     renderResults(data)
//     randomImg.src = data.url
//   })

// function renderResults(picData) {
// console.log(picData)
// }

// // -----Button Functions-----






// picBackward() {
// console.log("testb")
// }



















// -------------------------------------------------


// function nextImage() {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       randomImg.src = data.url
//       console.log(data);
//     })
// }







// ------------------------

// document.getElementById('go-back').addEventListener('click', () => {
//   history.back();
// });

// function previousImage() 


// const showCats = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
//   } catch (error) {
//     console.log(error)
//   }
//   console.log(data)
// }