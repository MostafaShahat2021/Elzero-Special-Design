// Check if ther is local storage color option
let mainColor = localStorage.getItem('color-option');
if (mainColor !== null) {
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
        // console.log(e.target.dataset.color);
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

// random background option
let backgroundOption = true;

// variable to control the background interval
let backgroundInterval;

//Check if localStorage random background is not epmty
let backgroundLocalItem = localStorage.getItem('background_option');
if (backgroundLocalItem !== null) {
    // console.log(backgroundLocalItem);
    // console.log(typeof backgroundLocalItem);//true is STRING Not Bolean
    if (backgroundLocalItem === 'true') {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    // console.log(backgroundLocalItem);

    // Remove Active class from all spans
    document.querySelectorAll('.random-background span').forEach(element => {
        // console.log(element);
        element.classList.remove('active');
    });

    if (backgroundLocalItem === 'true') {
        document.querySelector('.random-background .yes').classList.add('active')
    } else {
        document.querySelector('.random-background .no').classList.add('active')
    }

}
// Switch Random Background option
const randomBackEl = document.querySelectorAll('.random-background span');
// console.log(randomBackEl);
randomBackEl.forEach(span => {
    span.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.active').forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');
        if (e.target.dataset.background === 'yes') {
            // console.log('Yes');
            backgroundOption = true;
            // console.log(backgroundOption);
            randomizeImgs();

            localStorage.setItem('background_option', true)
        } else {
            // console.log('No');
            backgroundOption = false;
            // console.log(backgroundOption);
            clearInterval(backgroundInterval);
            localStorage.setItem('background_option', false)
        }
    });
});

// Landing Page
let landingPage = document.querySelector('.landing-page');

// Array of imgs
let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', 'about.jpg'];

// function to randomize imgs
function randomizeImgs() {
    if (backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // console.log(randomNumber);

            // change background img url
            landingPage.style.backgroundImage = `url("img/${imgsArray[randomNumber]}")`;
        }, 3000)
    }
}
randomizeImgs()

// SKILLS
// target skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function(){
    // skill offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // console.log(skillsOffsetTop);

    // skills outer height
    let skillsOuterHeight = ourSkills.offsetHeight;
    // console.log(skillsOuterHeight) ;

    // Window height
    let windowHeight = this.innerHeight;
    // console.log(windowHeight);

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;
    // console.log(windowScrollTop);

    if(windowScrollTop >= (skillsOffsetTop + skillsOuterHeight - windowHeight)){
        // this.console.log('Skills Section Reached')
        let allSkills = document.querySelectorAll(".skills-box .skill-progress span")
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    }
};

// creat popup with image 
let ourGallery = document.querySelectorAll('.gallery img');
ourGallery.forEach(img =>{
    img.addEventListener("click", (e)=>{
    // creat overlay element
        let overlay = document.createElement('div');
    // Add class to overlay
        overlay.className = "popup-overlay";
    // append overlay to body
        document.body.appendChild(overlay);
    
    // creat popup box
        let popupBox = document.createElement('div');
    // Add class to popupBox
        popupBox.className = "popup-box";

        // Add heading to the img box
            if(img.alt !== null){
                // creat heading
                let imgHeading = document.createElement('h3');
                // create Text to the heading
                let imgText = document.createTextNode(img.alt);
                // Apeend the text to the heading
                imgHeading.appendChild(imgText);
                // Append the heading to the pop up Box
                popupBox.appendChild(imgHeading);
            }
    
    // creat the Image
        let popupImage = document.createElement('img');
    // Set img src
        popupImage.src = img.src;
    // Add image to popup box
        popupBox.appendChild(popupImage);
    // append popup box to body
        document.body.appendChild(popupBox);

    // create close span
    let closeBtn = document.createElement('spn');
    // crate close btn text
    let closeBtnText = document.createTextNode('X');
    // append text to close btn
    closeBtn.appendChild(closeBtnText);
    // add class to close btn
    closeBtn.className = "close-btn";
    // Add close btn to the popup box
    popupBox.appendChild(closeBtn);

    // close Poup
    document.addEventListener("click", (e)=>{
    // check if the user clicked on the close btn
    if(e.target.className === "close-btn"){
        // Remove img
        e.target.parentNode.remove();
        // remove overlay
        overlay.remove();
    }
});
    });
});

