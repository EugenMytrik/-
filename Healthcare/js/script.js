//Focusing on input after clicking button
const searchBtn = document.getElementById('search');
const input = document.getElementById('finding');

searchBtn.addEventListener('click', () => {
    input.focus();
});

//Showing all doctors 
const exploreDoctorsBtn = document.getElementById("exploreDoctors");
const inactiveDocCards = document.getElementsByClassName("doctor-card-inactive");

exploreDoctorsBtn.addEventListener('click',() => {
    Array.from(inactiveDocCards).forEach(docCard => {
        if(docCard.style.display === 'none'){
            docCard.style.display = 'block';
            exploreDoctorsBtn.innerText = 'Hide some doctors';
            
        //Hiding doctors
        }else if(docCard.style.display === 'block'){
            docCard.style.display = 'none';
            exploreDoctorsBtn.innerText = 'Show all doctors';
        }     
    });
});

//Opening modal window 

const buttons = document.querySelectorAll('.modal');
const wrapper = document.querySelector('.modal-wrapper');

Array.from(buttons).forEach(el => el.addEventListener('click', function () {
    wrapper.style.display = 'flex';
}));

//Closing modal window

const closeBtn = document.querySelector('.modal-window .close');
const finishBtn = document.querySelector('.finish');

const closeItems = [wrapper, closeBtn, finishBtn];
closeItems.forEach(item => {
    item.addEventListener('click', function (event) {
        if (event.target === this) {
            wrapper.style.display = 'none';
        }
    });
});

//Dropdown

const cities = document.querySelectorAll('.dropdown-content p');
const locationBtn = document.getElementById('location')

cities.forEach(city => {
    city.addEventListener('click',() => {
        locationBtn.innerText = `${city.textContent} ⬇`;
    });
});

//Slider

let slideIndex = 0;
showSlide(slideIndex);
    
function showSlide(index) {
    const slides = document.getElementsByClassName("spec-card");
    const dots = document.getElementsByClassName("dot");
      
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slideIndex = index;
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}
