// Your code goes here
// selectors

const logoHeading=document.querySelector('h1');
const introTitle = document.querySelector('.intro h2');
const introPar = document.querySelector('.intro p');
const intro = document.querySelector('.intro')
const contentHeading = document.querySelector('.content-section h2');
const destination=document.querySelector('.destination h4')
const destinationSelect=document.querySelectorAll('.destination h4')
const contentPick =document.querySelector('.content-pick')
const footerPar=document.querySelector('.footer p')
const body=document.querySelector('body');

// event listeners

function headerYellow(){
    logoHeading.style.color='#F7DB05';
}
logoHeading.addEventListener('mouseover', headerYellow);

function titleYellow(){
    introTitle.style.color='#F7DB05';
}
introTitle.addEventListener('mouseover', titleYellow);

function newWords(){
    introPar.innerHTML = "Click Me!";
    introPar.style.fontSize = '10rem';
}
introPar.addEventListener('mouseover', newWords);

function theyWereAllYellow(){
    introPar.textContent = "Hello";
    introPar.style.fontSize = '18rem'
    introPar.style.color = '#F7DB05'
}
introPar.addEventListener('click', theyWereAllYellow);

introTitle.addEventListener("mouseout", function( event ) {
    event.target.style.color = "black";
})

function turnOff(event){
    if(event.key==='Escape'){
        contentHeading.style.color='red'
    }
}
document.addEventListener('keydown',turnOff);

function doubleTrouble(){
    destination.style.color = "green"; 
}
destination.addEventListener('dblclick', doubleTrouble);

function backGroundChange(){
    introTitle.style.backgroundColor='red';
}
introTitle.addEventListener('dblclick', backGroundChange);

footerPar.addEventListener('click',function(event){
    console.log('Look Ma! No more propation!');
    footerPar.style.color='orange'
})

function destinationChange2(event){
    contentPick.style.color='blue';
    console.log(contentPick);
}
contentPick.addEventListener('click', destinationChange2);


function destinationChange(event){
    destinationSelect[1].style.color='blue';
    event.stopPropagation();
}
destinationSelect[1].addEventListener('click', destinationChange);