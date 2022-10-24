// Check if ther is local storage color option
let mainColor = localStorage.getItem('color-option');
if(mainColor !== null){
    // console.log('local storage is not empty you can set it on root now');
    // console.log(localStorage.getItem('color-option'));
    document.documentElement.style.setProperty('--main-color', mainColor);
    
    // Remove Active Class From All colors List Item
    document.querySelectorAll('.colors-list li').forEach(element => {
        element.classList.remove('active');
        // add Active Class on element with data-color === local storage item
        if (element.dataset.color === mainColor) {
            // Add Active Class
            element.classList.add('active');
        }
    })
}

// Toggle spin class on Icon
let icon = document.querySelector('.toggle-settings .fa-gear');
const box = document.querySelector('.settngs-box');
// console.log(box);

icon.onclick = (e) => {
    e.target.classList.toggle('fa-spin');
    box.classList.toggle('open');

}

// Switch Colors
const colorsLi = document.querySelectorAll('.colors-list li');
// console.log(colorsLi);
colorsLi.forEach(li => {
    li.addEventListener('click', (e) => {
        console.log(e.target.dataset.color);
        // Set color on Root
        // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        
        // Set Color On localStorage
        localStorage.setItem('color-option', e.target.dataset.color);

        // Remove Active Class from All Childerns
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
            // console.log(element);
        });
        // Add Ative Class to the clicked li (e.target)
        e.target.classList.add('active');
    });
});

// Landing Page
let landingPage = document.querySelector('.landing-page');

// Array of imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

setInterval(() => {
    // get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    // console.log(randomNumber);

    // change background img url
    landingPage.style.backgroundImage = `url("/img/${imgsArray[randomNumber]}")`;
}, 3000)

