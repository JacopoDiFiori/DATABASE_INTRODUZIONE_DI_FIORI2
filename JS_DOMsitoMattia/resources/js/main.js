// animazione sticky della navbar 

let containerNavbar = document.querySelector('.container-navbar')
let navbar =document.querySelector('.navbar')
let logo = document.querySelector('#logo')

window.addEventListener( 'scroll', ()=>{
    let scrolled = window.scrollY;
    
    
    if (scrolled >0) {
        containerNavbar.classList.add('sticky-top')
        navbar.style.backgroundColor = 'var(--green-light)'
        logo.src="./resources/img/dark-green-owl.png"
        logo.style.transform= 'rotateY(180deg)';
    } else{
        containerNavbar.classList.remove('sticky-top');
        navbar.style.backgroundColor = 'var(--green-dark)'
        logo.src= './Resources/img/light-green-owl.png'
        logo.style.transform= 'rotateY(0deg)';

    }
})




// ! set intervall 
// let counter=0

// setInterval(()=>{
//     if (counter<100) {
//         counter++
//         console.log(counter)}
//         else{
//             console.log('sto andando avanti');
//         }
//     },100)
if(document.querySelector('#firstNumber') != null){

let firstNumber = document.querySelector('#firstNumber')
let secondNumber = document.querySelector('#secondNumber')
let thirdNumber = document.querySelector('#thirdNumber')




function createInterval(element,final,number) {
    let counter=0 ;
    
    let interval = setInterval ( ()=>{
        if (counter<final) {
            counter++;
            element.innerHTML = counter;
        }else{
                clearInterval(interval);
            }
    }, number )
    
}




let isChecked = false;
// !intersection observer
let observer= new IntersectionObserver( (elementi)=>{
    elementi.forEach( (elemento)=>{
        if(elemento.isIntersecting && isChecked == false){
            createInterval(firstNumber,100,40);
            createInterval(secondNumber,500,9);
            createInterval(thirdNumber,1000,0.5);
            isChecked = true;
            
        }
    })
})

observer.observe(firstNumber)

// ! scatta una volta e esegue il codice dopo un certo tempo

let loading = document.querySelector('#loading')
let pageContent = document.querySelector('#pageContent')

setTimeout(() => {
    pageContent.classList.remove('d-none')
    loading.classList.add('d-none')
    
}, 2500);

// intersection observer per animazione immagine homepage

let imgSection = document.querySelector('#imgSection')

let observerImg = new IntersectionObserver( (elementi)=>{
elementi.forEach( (elemento)=>{
    if(elemento.isIntersecting){
imgSection.classList.add('fadeRight');
}
})
})

observerImg.observe(imgSection);
}




