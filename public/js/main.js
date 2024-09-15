"use strict"
// -------------- ОБЩИЕ НАСТРОЙКИ  -------------- 

const anchors = document.querySelectorAll('a[href^="#"')
anchors.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.querySelector(item.getAttribute('href'));
        window.scrollBy({
            top: element.getBoundingClientRect().top - 60,
            behavior: 'smooth',
        })

    })
})
  

// -------------- PAGE-HEADER  -------------- 

// функционал burger menu
const navigation = document.querySelector('.page-header__nav');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', hideShowNav);
function hideShowNav() {
    navigation.classList.toggle('active');
}

document.addEventListener('click', hideNav);
document.addEventListener('scroll', () => {
    navigation.classList.remove('active');
});

function hideNav(e) {
    const target = e.target.closest('.burger');
    if (!target) {
        navigation.classList.remove('active');
    } else {
        return
    }
}



// -------------- ABOUT-US  -------------- 

// функционал кнопки скрытия/открытия текста
const aboutUsText = document.querySelector('.about-us__text');
const aboutUsOpenText =  document.querySelector('.about-us__open-text');

aboutUsOpenText.addEventListener('click', openCloseText)
function openCloseText(e) {
    let textHeight = aboutUsText.scrollHeight;
    if (e.target.closest('.about-us__open-text.close')) {    
        this.classList.remove('close'); 
        aboutUsText.style.maxHeight = '150px';
    }
    else if (e.target.closest('.about-us__open-text')) {
        this.classList.add('close');
        aboutUsText.style.maxHeight = textHeight + 'px';
    } 
    for (let child of aboutUsOpenText.children) {
        child.classList.toggle('hide')
    }
}

// функционал слайдера

// динамическое выявление высоты кнопки слайдеров
function updateArrowHeight() {
    const arrows = document.querySelectorAll('.arrow');
    Array.from(arrows).forEach((item) => {
        let itemParent = item.parentElement;
        item.style.height = `${itemParent.offsetHeight}px`
        }
    )
}

window.onload = updateArrowHeight;
window.onresize = updateArrowHeight;


// Инициализация всех слайдеров
initSlider('.address__imgs', '.address__btn--right', '.address__btn--left', '.address__img');
initSlider('.my-works__imgs', '.my-works__btn--right', '.my-works__btn--left', '.my-works__item');

// Инициализация слайдера
function initSlider(sliderContainerSelector, nextBtnSelector, prevBtnSelector, slideSelector) {
    let currentIndex = 0;
    const sliderContainer = document.querySelector(sliderContainerSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const totalSlides = document.querySelectorAll(slideSelector).length;
        

    nextBtn.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + 1, totalSlides - 1);
        updateSlider()        
    })

    prevBtn.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider()        
    })

    prevBtn.style.display = 'none';  // Изначально прячем кнопку "предыдущий"
    updateSlider();

    // Обновление слайдера
    function updateSlider() {
        const offset = -currentIndex * 100;
        sliderContainer.style.transform = `translateX(${offset}%)`;
    
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === totalSlides - 1 ? 'none' : 'block';
    }
}
