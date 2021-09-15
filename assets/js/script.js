/*===== MENU ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== POPUP ====*/
const btnOpenVideo = document.querySelectorAll('.islands_video-content');
const islandsPopup = document.getElementById('popup')

function poPup() {
    islandsPopup.classList.add('show-popup')
}

btnOpenVideo.forEach(b => b.addEventListener('click', poPup));

const btnCloseVideo = document.getElementById('popup-close')
btnCloseVideo.addEventListener('click', () => {
    islandsPopup.classList.remove('show-popup')
})

/*======== SWIPER JS =====*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
});
let galleryTop = new Swiper(".gallery-top", {
    effect: 'fade',
    loop: true,

    thumbs: {
        swiper: galleryThumbs
    }
});

/*========== GSAP ANIMATION ======*/
const controlImg = document.querySelectorAll('.controls_img');

function ScrollAnimation() {
    gsap.from('.islands_subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.islands_title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.islands_description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.islands_button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.islands_video-content', { opacity: 0, duration: .6, delay: .6, y: -20 })
    
    islandsPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', ScrollAnimation))