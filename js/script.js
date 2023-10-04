function menuOpen(){
    let hamburger=document.querySelector('#hamburger');
    let navLinks=document.querySelector('.nav__links');
    let body=document.querySelector('#body');
    hamburger.onclick=function(){
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
        body.classList.toggle('scroll_none');
    }
    let navLinksA=document.querySelectorAll('.nav__links a');
    for (let number = 0; number < 3; number++){
        navLinksA[number].onclick=function(){
            hamburger.classList.remove('hamburger_active');
            navLinks.classList.remove('nav__links_active');
            body.classList.remove('scroll_none');
        }
    }
}
menuOpen();

new Swiper('.header__foto__swiper',{
    effect: 'fade',
    autoplay:{
        delay:2000,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
     speed: 1500,
});

function formSubmit(){
    let iframe = document.querySelector('iframe');
    let wrapper = document.querySelector('.wrapper');
    iframe.onload = function(){
        wrapper.classList.add('wrapper_active');
        setTimeout(() => {    //функция запускается с нужной нам задержкой
            document.forms.order.reset();
            wrapper.classList.remove('wrapper_active');
        }, 2500);
    }
}
formSubmit();

function navShow(){
    console.log('ok')
    let animationElements=document.querySelectorAll('.animation-element');
    let windowHight=window.screen.height;
    let screen=window.pageYOffset; //создаём переменную, которая показывает на какой высоте сайта мы находимся
    let nav=document.querySelector('#nav');
    let startPosition = window.scrollY; //переменая в которую попадает стартовая высота от которой мы начинаем скролить

    window.onscroll=function(){ 
        for (let number=0;number<animationElements.length;number++){
            let element=animationElements[number]
            let elementHight=element.offsetTop;
            console.log(elementHight)
            let scrollHight=window.pageYOffset;
            if (scrollHight+windowHight*0.8>elementHight){
                element.classList.add('animation_active');
            }
        }       
        let scrollPosition=window.scrollY; //создаём переменную в которую попадает высота на которую поднялись или опустились в момент прокрутки
        if  (scrollPosition == 0){ // если мы доскролили до начала страницы
            nav.style.top='0px'; //нав появляется
        }else if(scrollPosition > startPosition && scrollPosition > 0){ // иначе, если прокрутка вниз и текущее положение ниже чем начало сайта, то нав прячется
            nav.style.top='-200px';
        }else{//если мы скролим вверх нав появляется
            nav.style.top='0px';
        }
        startPosition = scrollPosition;//вставляем стартовую позицию на место прокрутки
        screen=scrollHight; //перезапивывается в конце прокрутки
    }  
}
navShow();