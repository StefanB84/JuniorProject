const standardImg = document.querySelector('.product-img-rid');
const anotherImg = document.querySelector('.product-img-color');
const anotherHover = document.querySelector('.product-img-active-hover');
const colorDiv = document.querySelector('.anotherColor');
const colorDiv2 = document.querySelector('.anotherColor2');
const colorDiv3 = document.querySelector('.anotherColor3');
const standardImg1 = document.querySelector('.six');
const anotherImg1 = document.querySelector('.six-1');
const anotherHover1 = document.querySelector('.six-2');
const anotherImg2 = document.querySelector('.six-3');
const anotherHover2 = document.querySelector('.six-4');

colorDiv.addEventListener('click', () => {
    anotherImg.classList.toggle("active");
    anotherHover.classList.toggle("active");
    standardImg.classList.toggle("active");
    colorDiv.classList.toggle("active");
});


colorDiv2.addEventListener('click', () => {
    anotherImg1.classList.toggle("active");
    anotherHover1.classList.toggle("active");
    standardImg1.classList.toggle("active");
    colorDiv2.classList.toggle("active");
});

