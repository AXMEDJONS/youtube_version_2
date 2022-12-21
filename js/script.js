let burger_menu = document.querySelector('.burger-menu')
let sidebar = document.querySelector('.sidebar')
burger_menu.addEventListener('click', function () {
    sidebar.classList.toggle('active-sidebar')
})