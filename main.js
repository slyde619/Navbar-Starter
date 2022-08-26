const toggleBtn = document.querySelector('.toggleBtn') 
const navList = document.querySelector('.nav__list')

toggleBtn.addEventListener('click', () =>{
    navList.classList.toggle('active')
})