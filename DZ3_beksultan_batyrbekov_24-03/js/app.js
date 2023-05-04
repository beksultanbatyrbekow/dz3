const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

const autoSlide = () => {
    hideTabContent()
    currentTabIndex = (currentTabIndex + 1) % tabs.length
    showTabContent(currentTabIndex)
}

let autoSlideTimer = setInterval(autoSlide, 3000)
let currentTabIndex = 0

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        clearInterval(autoSlideTimer)
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                currentTabIndex = i
                showTabContent(currentTabIndex)
            }
        })
        autoSlideTimer = setInterval(autoSlide, 3000)
    }
}

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()
modal.onclick = (event) => event.target === modal && closeModal() // if (event.target === modal) closeModal()

const html = document.querySelector('html')

const openModalOnScroll = () => {
    if (html.scrollHeight - html.scrollTop === html.clientHeight) {
        openModal()
        window.removeEventListener('scroll', openModalOnScroll)
    }
}

window.addEventListener('scroll', openModalOnScroll)

setTimeout(openModal, 10000)