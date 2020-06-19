const menu_button = document.getElementsByClassName("menu-button")[0];
const side_menu = document.getElementById("sidenav");
const CLOSED_MENU_SIZE = "0px";
const OPEN_MENU_SIZE = "250px";

/**
 * Expandable side menu
 */
function openNavSideBar() {
  side_menu.style.width = OPEN_MENU_SIZE;
}

function closeNavSideBar() {
  side_menu.style.width = CLOSED_MENU_SIZE;
}

window.onscroll = function() {
    if(side_menu.style.width !== CLOSED_MENU_SIZE) {
      closeNavSideBar();
    }
};


/**
 * Hamburger button
 */
function animateMenuButton() {
  menu_button.classList.toggle("change")
}

function toggleMenuButton() {
  animateMenuButton();
  console.log(side_menu.style.width);
  if(!side_menu.style.width || side_menu.style.width === CLOSED_MENU_SIZE) {
    openNavSideBar();
  }
  else {
    closeNavSideBar();
  }
};

menu_button.addEventListener("click", toggleMenuButton);

