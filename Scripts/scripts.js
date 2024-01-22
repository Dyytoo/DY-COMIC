// ====== SHOW MENU ==============
const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
    
    toggle.addEventListener('click', () =>{
        // ADD SHOW-MENU CLASS TO NAV MENU
        nav.classList.toggle('show-menu')
        // ADD SHOW-ICON TO SHOW AND HIDE MENU ICON
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav__tgogle','nav__menu')