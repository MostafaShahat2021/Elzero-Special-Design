// Toggle spin class on Icon
let icon = document.querySelector('.toggle-settings .fa-gear');
let box = document.querySelector('.settngs-box');
console.log(box);

icon.onclick = (e) => {
    e.target.classList.toggle('fa-spin');
    box.classList.toggle('open');

}

// Landing Page
let landingPage = document.querySelector('.landing-page');

// Array of imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

setInterval( () => {
    // get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // console.log(randomNumber);

    // change background img url
landingPage.style.backgroundImage = `url("/img/${imgsArray[randomNumber]}")`;
}, 3000)

